// ══════════════════════════════════════════════════════
// follow.ts — Follow-up / kiểm tra tiến độ task qua Telegram
// Gửi tin nhắn hỏi tiến độ cho từng task hoặc toàn bộ IP
// Usage: bun run follow.ts <task-id|ip-id> [channel] [--dry-run]
//   bun run follow.ts IP-027-QA QA          → follow 1 task cụ thể
//   bun run follow.ts IP-027                → follow tất cả task của IP-027
//   bun run follow.ts IP-027 --dry-run      → xem trước, không gửi
// ══════════════════════════════════════════════════════
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, relative } from "node:path";

const WORKSPACE = "/Users/anderson/Desktop/works";
const CHANNELS_PATH = resolve(WORKSPACE, "tools/telegram-notify/src/channels.json");
const ENV_PATH = resolve(WORKSPACE, "NEO/.env");
const TASKS_DIR = resolve(WORKSPACE, "changes/tasks");

const REPO_MAP: Record<string, string> = {
  "internal-ws": "https://github.com/CyberkFi/internal-ws/blob/main",
  "marketing": "https://github.com/CyberkFi/marketing/blob/main",
  "gitbook": "https://github.com/CyberkFi/gitbook/blob/main",
  "bd": "https://github.com/CyberkFi/bd/blob/main",
};

// ══════════════════════════════════
// Utilities
// ══════════════════════════════════
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

interface TaskInfo {
  taskId: string;
  department: string;
  assignee: string;
  title: string;
  filePath: string;
  status: string;
  checklist: { done: number; total: number };
}

function parseTaskFile(filePath: string): TaskInfo | null {
  const content = readFileSync(filePath, "utf-8");

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];

  const dept = fm.match(/department:\s*(.+)/)?.[1]?.trim() || "";
  const assignee = fm.match(/assignee:\s*(.+)/)?.[1]?.trim() || "";
  const status = fm.match(/status:\s*(.+)/)?.[1]?.trim() || "todo";

  // Parse title from # heading
  const titleMatch = content.match(/^# (.+)$/m);
  const title = titleMatch?.[1] || "";

  // Extract task ID from filename
  const filename = filePath.split("/").pop()?.replace(".md", "") || "";

  // Count checklist items
  const checkboxes = content.match(/- \[[ x]\]/gi) || [];
  const done = checkboxes.filter((c) => /\[x\]/i.test(c)).length;
  const total = checkboxes.length;

  return {
    taskId: filename,
    department: dept,
    assignee,
    title,
    filePath,
    status,
    checklist: { done, total },
  };
}

function findTasksForIP(ipId: string): TaskInfo[] {
  const ipDir = resolve(TASKS_DIR, ipId);
  if (!existsSync(ipDir)) return [];

  const tasks: TaskInfo[] = [];
  for (const file of readdirSync(ipDir)) {
    if (!file.endsWith(".md")) continue;
    const info = parseTaskFile(resolve(ipDir, file));
    if (info) tasks.push(info);
  }
  return tasks;
}

function findSingleTask(taskId: string): TaskInfo | null {
  const parts = taskId.match(/^(IP-\d+)-(\w+)$/);
  if (!parts) return null;
  const ipId = parts[1];
  const filePath = resolve(TASKS_DIR, `${ipId}/${taskId}.md`);
  if (!existsSync(filePath)) return null;
  return parseTaskFile(filePath);
}

// ══════════════════════════════════
// Message builder
// ══════════════════════════════════
function buildFollowMessage(task: TaskInfo): string {
  const lines: string[] = [];

  lines.push(`⏰ Follow-up: ${task.taskId}`);
  lines.push("");
  lines.push(`Chào ${task.assignee}! 👋`);
  lines.push("");
  lines.push(`Task "${task.title}" đang ở trạng thái: ${task.status}`);

  if (task.checklist.total > 0) {
    lines.push(`📋 Checklist: ${task.checklist.done}/${task.checklist.total} đã xong`);
  }

  lines.push("");
  lines.push("Tiến độ thế nào rồi? Cần hỗ trợ gì không? 😊");

  const url = toGitHubUrl(task.filePath);
  if (url) {
    lines.push("");
    lines.push(`📂 ${url}`);
  }

  return lines.join("\n");
}

// ══════════════════════════════════
// Telegram send
// ══════════════════════════════════
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
const id = args.find((a) => a.startsWith("IP-"));
const channelOverride = args.find((a) => !a.startsWith("IP-") && !a.startsWith("--"))?.toUpperCase();

if (!id) {
  console.log("Usage: bun run follow.ts <task-id|ip-id> [channel] [--dry-run]");
  console.log("  bun run follow.ts IP-027-QA QA       → follow 1 task");
  console.log("  bun run follow.ts IP-027              → follow tất cả task của IP");
  console.log("  bun run follow.ts IP-027 --dry-run    → xem trước");
  process.exit(1);
}

const token = getToken();
const channels = getChannels();

// Determine if this is a single task or full IP
const isSingleTask = /^IP-\d+-\w+$/.test(id);

let tasks: TaskInfo[] = [];

if (isSingleTask) {
  const task = findSingleTask(id);
  if (!task) {
    console.error(`❌ Task file not found for ${id}`);
    process.exit(1);
  }
  tasks = [task];
} else {
  tasks = findTasksForIP(id);
  if (tasks.length === 0) {
    console.error(`❌ No tasks found for ${id}`);
    process.exit(1);
  }
}

console.log(`⏰ Follow-up: ${id} — ${tasks.length} task(s)`);
console.log("");

let sent = 0;
let failed = 0;

for (const task of tasks) {
  // Determine channel: override > department > LEADERS fallback
  const targetChannel = channelOverride || task.department || "LEADERS";
  const ch = channels[targetChannel];
  if (!ch) {
    console.error(`  ⚠️ Channel "${targetChannel}" not found for ${task.taskId}, skipping`);
    failed++;
    continue;
  }

  const message = buildFollowMessage(task);
  const buttons = [[
    { text: "✅ Xong", callback_data: `fu:${task.taskId}:done` },
    { text: "🔄 Đang làm", callback_data: `fu:${task.taskId}:doing` },
    { text: "🚫 Blocked", callback_data: `fu:${task.taskId}:blocked` },
    { text: "❓ Hỏi", callback_data: `fu:${task.taskId}:question` },
  ]];

  console.log(`  📌 ${task.taskId} → ${targetChannel} (${ch.name})`);

  if (dryRun) {
    console.log("");
    console.log(message);
    console.log("---");
    sent++;
    continue;
  }

  const ok = await sendTelegram(token, ch.chatId, message, buttons);
  if (ok) {
    console.log(`  ✅ Sent`);
    sent++;
  } else {
    failed++;
  }

  // Small delay between messages to avoid rate limiting
  if (tasks.length > 1) await new Promise((r) => setTimeout(r, 500));
}

console.log("");
console.log(`📊 Kết quả: ${sent} sent, ${failed} failed`);
