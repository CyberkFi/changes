---
type: readme
tags: [cyberk-way, tasks]
---

# Tasks — Phân công Công việc theo Bộ phận

Thư mục này chứa các task cụ thể được break-down từ Improvement Plans (IP) và phân công cho 5 bộ phận.

## 5 Bộ phận

| Prefix | Bộ phận | Mô tả |
|--------|---------|-------|
| `DES` | Design | Thiết kế UI/UX, visual assets, sales materials |
| `QA` | Quality Assurance | Kiểm thử, review chất lượng, delivery checklist |
| `BD` | Business Development | Sales, broker, khách hàng, hợp đồng |
| `MKT` | Marketing | Content, ads, SEO, social media |
| `DEV` | Development (Sản xuất) | Code, deploy, quy trình kỹ thuật |

## Cấu trúc

```
tasks/
├── readme.md                ← Bạn đang đây
├── telegram-groups.env      ← Chat IDs cho Telegram groups
├── notify-task.sh           ← Script gửi task tự động
├── IP-023/                  ← Tasks từ IP-023 (Dịch vụ Mới)
│   ├── IP-023-DES.md
│   ├── IP-023-QA.md
│   ├── IP-023-BD.md
│   ├── IP-023-MKT.md
│   ├── IP-023-BST.md
│   └── IP-023-DEV.md
└── IP-027/                  ← Tasks từ IP-027 (Agentic AI)
    ├── IP-027-QA.md
    ├── IP-027-DES.md
    ├── IP-027-DEV.md
    └── IP-027-MKT.md
```

## Quy tắc đặt tên

**Format:** `IP-{SỐ}-{DEPT}.md` — ví dụ: `IP-023-MKT.md`, `IP-027-DEV.md`

## Frontmatter chuẩn

```yaml
---
type: task
tags: [task, {dept}]
source: IP-023
department: MKT
status: todo           # todo | doing | done
priority: high         # low | medium | high
assigned: (tên người)
created: 2026-03-14
deadline: 2026-03-28
---
```

## NEO — Task Assign & Follow

Giao và theo dõi task qua Telegram bằng NEO:

```bash
# Giao task
cd changes/neo-task-assign/scripts
bun run assign.ts IP-023-MKT MKT        # giao 1 task
bun run assign.ts IP-027-QA QA --dry-run # xem trước

# Follow-up
bun run follow.ts IP-023-MKT MKT        # follow 1 task
bun run follow.ts IP-027 ALL             # follow tất cả task của IP
```

### Setup Telegram Groups

1. CEO tạo 5 group trên Telegram: DES, QA, BD, MKT, DEV
2. Thêm bot vào mỗi group
3. Gửi 1 tin nhắn trong mỗi group
4. Chạy `cd tools/telegram-notify && npx tsx src/notify.ts setup` để lấy chat IDs
5. Điền vào `tasks/telegram-groups.env`
6. Chạy `notify-task.sh` → mỗi nhóm nhận task tự động
