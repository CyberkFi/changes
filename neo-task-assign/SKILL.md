---
name: neo-task-assign
description: Giao việc và follow-up tiến độ qua Telegram — script tự format MD, nhúng GitHub links
---

# Skill: Giao việc & Follow-up qua NEO

## 1. Giao việc (assign)

Khi Anderson yêu cầu giao việc, chạy script:

```bash
cd /Users/anderson/Desktop/works/changes/neo-task-assign/scripts
bun run assign.ts <TASK_ID> <CHANNEL> [--dry-run]
```

Ví dụ:

```bash
bun run assign.ts IP-027-DES DES
bun run assign.ts IP-023-DEV DEV --dry-run
```

### Script tự động xử lý

1. Tìm file task từ ID
2. Bỏ frontmatter (tags, metadata)
3. Format MD → Telegram: `#` → 📌, `##` → ▸, `- [ ]` → ☐, `- ` → •, bỏ `**`, `*`, backtick
4. Thay relative links → GitHub URL (click được)
5. Gửi 1 message + follow-up buttons

Không cần AI soạn tin nhắn — script format sẵn.

## 2. Follow-up / Kiểm tra tiến độ (follow)

Khi cần kiểm tra tiến độ task, chạy script:

```bash
cd /Users/anderson/Desktop/works/changes/neo-task-assign/scripts
bun run follow.ts <TASK_ID|IP_ID> [CHANNEL] [--dry-run]
```

Ví dụ:

```bash
# Follow 1 task cụ thể → gửi vào channel theo department
bun run follow.ts IP-027-QA QA

# Follow TẤT CẢ task của 1 IP → tự gửi đúng channel mỗi department
bun run follow.ts IP-027

# Xem trước không gửi
bun run follow.ts IP-027 --dry-run
```

### Script tự động xử lý

1. Tìm tất cả task files của IP (hoặc 1 task cụ thể)
2. Đọc frontmatter: assignee, status, department
3. Đếm checklist progress (done/total)
4. Soạn tin nhắn follow-up thân thiện, kèm status + progress
5. Gửi vào đúng channel theo department (hoặc channel override)
6. Kèm follow-up buttons (✅ Xong, 🔄 Đang làm, 🚫 Blocked, ❓ Hỏi)

### Khi nào dùng

| Tình huống | Command |
|-----------|---------|
| Giao việc mới | `bun run assign.ts IP-027-QA QA` |
| Kiểm tra 1 task | `bun run follow.ts IP-027-QA QA` |
| Kiểm tra toàn bộ IP | `bun run follow.ts IP-027` |
| Mid-point check | `bun run follow.ts IP-027` |
| Thu kết quả deadline | `bun run follow.ts IP-027` |

## Channels

Chat IDs: `tools/telegram-notify/src/channels.json`

| Key | Group |
|-----|-------|
| DEV | Cyberk Dev Lead |
| DES | CyberK's Design Team |
| QA | Cyberk QA |
| MKT | Cyberk Marketing |
| BD | Cyberk BD |
| C-LEVEL | Cyberk - Cải Tiến |
| LEADERS | All leaders (fallback) |
| SANDBOX | Testing |

## Quy tắc

1. Nội dung = file MD nguyên văn, đã format cho Telegram
2. Tài liệu tham chiếu = GitHub links inline
3. 1 message duy nhất per task
4. Callback: `fu:[TASK_ID]:[done|doing|blocked|question]`
