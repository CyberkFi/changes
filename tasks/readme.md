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
│   ├── DES-001.md
│   ├── QA-001.md
│   ├── BD-001.md
│   ├── MKT-001.md
│   └── DEV-001.md
└── IP-024/                  ← Tasks từ IP-024 (Triết lý Software Design)
    └── DEV-002.md
```

## Quy tắc đặt tên

**Format:** `{DEPT}-{SỐ}.md` — ví dụ: `MKT-001.md`, `DEV-002.md`

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

## Telegram Auto-notify

Khi tạo task mới, gửi thông báo tự động cho nhóm tương ứng:

```bash
# Gửi cho từng bộ phận
./tasks/notify-task.sh DES tasks/IP-023/DES-001.md
./tasks/notify-task.sh QA  tasks/IP-023/QA-001.md
./tasks/notify-task.sh BD  tasks/IP-023/BD-001.md
./tasks/notify-task.sh MKT tasks/IP-023/MKT-001.md
./tasks/notify-task.sh DEV tasks/IP-023/DEV-001.md
```

### Setup Telegram Groups

1. CEO tạo 5 group trên Telegram: DES, QA, BD, MKT, DEV
2. Thêm bot vào mỗi group
3. Gửi 1 tin nhắn trong mỗi group
4. Chạy `cd tools/telegram-notify && npx tsx src/notify.ts setup` để lấy chat IDs
5. Điền vào `tasks/telegram-groups.env`
6. Chạy `notify-task.sh` → mỗi nhóm nhận task tự động
