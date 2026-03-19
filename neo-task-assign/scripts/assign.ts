// ══════════════════════════════════════════════════════
// assign.ts — Giao task qua Telegram
// Format MD → Telegram text (bold/italic), GitHub links
// Usage: bun run assign.ts <task-id> <channel> [--dry-run]
// ══════════════════════════════════════════════════════
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, relative } from "node:path";

const WORKSPACE = "/Users/anderson/Desktop/works";
const CHANNELS_PATH = resolve(WORKSPACE, "tools/telegram-notify/src/channels.json");
const ENV_PATH = resolve(WORKSPACE, "NEO/.env");

const REPO_MAP: Record<string, string> = {
  "internal-ws": "https://github.com/CyberkFi/internal-ws/blob/main",
  "marketing": "https://github.com/CyberkFi/marketing/blob/main",
  "gitbook": "https://github.com/CyberkFi/gitbook/blob/main",
  "bd": "https://github.com/CyberkFi/bd/blob/main",
};

function getToken(): string {
  const env = readFileSync(ENV_PATH, "utf-8");
  const match = env.match(/^TELEGRAM_BOT_TOKEN=(.+)$/m);
  if (!match) throw new Error("TELEGRAM_BOT_TOKEN not found in .env");
  return match[1].trim();
}

function getChannels(): Record<string, { chatId: string; name: string }> {
  return JSON.parse(readFileSync(CHANNELS_PATH, "utf-8")).channels;
}

function toGitHubUrl(filePath: string): string | null {
  const rel = relative(WORKSPACE, filePath);
  for (const [folder, baseUrl] of Object.entries(REPO_MAP)) {
    if (rel.startsWith(folder + "/")) return `${baseUrl}/${rel.slice(folder.length + 1)}`;
  }
  return null;
}

function findTaskFile(taskId: string): string | null {
  const parts = taskId.match(/^(IP-\d+)-(\w+)$/);
  if (!parts) return null;
  const ipId = parts[1];
  // Flat file: tasks/IP-026-DES.md
  const flatPath = resolve(WORKSPACE, `changes/tasks/${taskId}.md`);
  if (existsSync(flatPath)) return flatPath;
  // Nested: tasks/IP-027/IP-027-DES.md
  const newPath = resolve(WORKSPACE, `changes/tasks/${ipId}/${taskId}.md`);
  if (existsSync(newPath)) return newPath;
  const tasksDir = resolve(WORKSPACE, `changes/tasks/${ipId}`);
  if (!existsSync(tasksDir)) return null;
  for (const f of readdirSync(tasksDir)) {
    if (f.endsWith(".md") && !f.startsWith("IP-")) {
      const content = readFileSync(resolve(tasksDir, f), "utf-8");
      if (content.includes(`department: ${parts[2]}`)) return resolve(tasksDir, f);
    }
  }
  return null;
}

// ══════════════════════════════════
// MD → Telegram formatter
// ══════════════════════════════════
function formatForTelegram(content: string, taskDir: string): string {
  // Strip frontmatter
  let text = content.replace(/^---\n[\s\S]*?\n---\n*/, "").trim();

  // Replace relative MD links [label](path.md) with "label: GitHub URL"
  text = text.replace(/\[([^\]]+)\]\(([^)]+\.md)\)/g, (_m, label, relPath) => {
    const abs = resolve(taskDir, relPath);
    if (existsSync(abs)) {
      const url = toGitHubUrl(abs);
      if (url) return `${label}: ${url}`;
    }
    return `${label}: ${relPath}`;
  });

  const lines = text.split("\n");
  const out: string[] = [];

  for (const line of lines) {
    // # H1 → 📌 BOLD
    if (/^# (.+)$/.test(line)) {
      const title = line.replace(/^# /, "");
      out.push(`📌 ${title}`);
      continue;
    }

    // ## H2 → ▸ BOLD
    if (/^## (.+)$/.test(line)) {
      const heading = line.replace(/^## /, "");
      out.push("");
      out.push(`▸ ${heading}`);
      continue;
    }

    // ### H3 → bold line
    if (/^### (.+)$/.test(line)) {
      const heading = line.replace(/^### /, "");
      out.push("");
      out.push(heading);
      continue;
    }

    // - [ ] checkbox → ☐
    if (/^- \[ \] (.+)$/.test(line)) {
      const item = line.replace(/^- \[ \] /, "");
      out.push(`☐ ${item}`);
      continue;
    }

    // - [x] checkbox → ☑
    if (/^- \[x\] (.+)$/i.test(line)) {
      const item = line.replace(/^- \[x\] /i, "");
      out.push(`☑ ${item}`);
      continue;
    }

    // - bullet → •
    if (/^- (.+)$/.test(line)) {
      const item = line.replace(/^- /, "");
      out.push(`• ${item}`);
      continue;
    }

    // > blockquote → italic-ish
    if (/^> (.+)$/.test(line)) {
      const quote = line.replace(/^> /, "");
      out.push(`  ${quote}`);
      continue;
    }

    // Remove backtick code markers
    if (/^```/.test(line)) continue;

    // Everything else
    out.push(line);
  }

  // Clean up: collapse 3+ blank lines to 2
  let result = out.join("\n").replace(/\n{3,}/g, "\n\n").trim();

  // Strip remaining MD bold/italic markers (** → plain, * → plain)
  // Telegram doesn't render markdown in plain text mode
  result = result.replace(/\*\*(.+?)\*\*/g, "$1");
  result = result.replace(/\*(.+?)\*/g, "$1");

  // Convert backtick file paths to GitHub URLs before stripping backticks
  // Matches `folder/path/file.md` or `folder/path/file.ts` etc.
  result = result.replace(/`([a-zA-Z][\w\-./]+\.\w{1,4})`/g, (_m, filePath) => {
    const abs = resolve(WORKSPACE, filePath);
    if (existsSync(abs)) {
      const url = toGitHubUrl(abs);
      if (url) return url;
    }
    return filePath;
  });

  result = result.replace(/`(.+?)`/g, "$1");

  return result;
}

function truncate(text: string, max = 4000): string {
  if (text.length <= max) return text;
  return text.slice(0, max) + "\n\n... (truncated)";
}

async function sendTelegram(
  token: string,
  chatId: string,
  text: string,
  buttons?: { text: string; callback_data: string }[][],
): Promise<boolean> {
  const body: Record<string, any> = { chat_id: chatId, text, disable_web_page_preview: true };
  if (buttons) body.reply_markup = { inline_keyboard: buttons };
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json()) as { ok: boolean; description?: string };
  if (!json.ok) console.error(`  ❌ ${json.description}`);
  return json.ok;
}

// ══════════════════════════════════
// Main
// ══════════════════════════════════
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const taskId = args.find((a) => a.startsWith("IP-"));
const channel = args.find((a) => !a.startsWith("IP-") && !a.startsWith("--"))?.toUpperCase();

if (!taskId || !channel) {
  console.log("Usage: bun run assign.ts <task-id> <channel> [--dry-run]");
  process.exit(1);
}

const token = getToken();
const channels = getChannels();
const ch = channels[channel];
if (!ch) {
  console.error(`❌ Channel "${channel}" not found.`);
  process.exit(1);
}

const taskFile = findTaskFile(taskId);
if (!taskFile) {
  console.error(`❌ Task file not found for ${taskId}`);
  process.exit(1);
}

const taskContent = readFileSync(taskFile, "utf-8");
const taskDir = resolve(taskFile, "..");

let message = formatForTelegram(taskContent, taskDir);

// Append task GitHub link
const taskUrl = toGitHubUrl(taskFile);
if (taskUrl) message += `\n\n📂 ${taskUrl}`;

message = truncate(message);

console.log(`📌 ${taskId} → ${channel} (${ch.name})`);

if (dryRun) {
  console.log("\n" + message);
  process.exit(0);
}

const buttons = [[
  { text: "✅ Xong", callback_data: `fu:${taskId}:done` },
  { text: "🔄 Đang làm", callback_data: `fu:${taskId}:doing` },
  { text: "🚫 Blocked", callback_data: `fu:${taskId}:blocked` },
  { text: "❓ Hỏi", callback_data: `fu:${taskId}:question` },
]];

console.log("📨 Sending...");
const ok = await sendTelegram(token, ch.chatId, message, buttons);
if (ok) console.log("✅ Sent");
else process.exit(1);
