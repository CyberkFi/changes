---
type: workflow
tags: [cyberk-way]
description: Tạo task files cho từng bộ phận từ IP — đọc playbook, viết task đúng tone (BST/DEV/DES/QA/MKT), checklist rõ ràng, output cụ thể.
---

# Task Creator Workflow

Khi có IP mới cần tạo task cho các bộ phận, thực hiện flow sau.

## Bước 1: Đọc IP

Đọc file IP gốc tại `changes/improvement/IP-XXX-doing.md`. Lấy:
- Mục tiêu IP
- Bảng Execution Plan (nếu có)
- Danh sách bộ phận tham gia + người phụ trách

## Bước 2: Đọc playbook

Đọc `changes/team-playbook.md` để hiểu:
- Điểm mạnh / hạn chế của từng bộ phận
- Cách giao việc phù hợp (đặc biệt BST vs DEV vs MKT)
- Quy tắc viết task

**Tóm tắt nhanh:**

| Bộ phận | Giao kiểu | Tránh |
|---------|-----------|-------|
| BST | Đặt vấn đề + mục tiêu, để tự giải | Mô tả chi tiết cách làm |
| DEV | Rõ ràng, có checklist cụ thể | Giao viết content dài |
| DES | Figma, visual, rõ output | Giao viết text |
| QA | Checklist, bước cụ thể | Việc kỹ thuật cao |
| MKT | Publish, format, distribute | Viết nội dung kỹ thuật |

## Bước 3: Tạo task files

Với mỗi bộ phận trong IP, tạo file:

```
changes/tasks/IP-XXX/IP-XXX-[DEPT].md
```

Dùng template tại `changes/workflows/task-template.md`.

**Nguyên tắc viết task:**

1. **Đọc xong trong 30 giây** — biết ngay cần làm gì
2. **Checklist > đoạn văn** — mỗi việc 1 checkbox
3. **Output phải cụ thể** — file gì, ở đâu, format gì
4. **Tài liệu tham chiếu** — link đầy đủ, người nhận không phải tự tìm
5. **Tone theo bộ phận:**
   - BST: đặt vấn đề, không chỉ cách làm
   - DEV: bước cụ thể, rõ ràng
   - QA: checklist chi tiết
   - MKT: rõ kênh, format, schedule
   - DES: rõ deliverable (Figma, mockup, banner...)

## Bước 4: Review checklist

Trước khi lưu, kiểm tra mỗi task file:

- [ ] Title có task ID: `IP-XXX-DEPT: [tên ngắn]`?
- [ ] Frontmatter đủ: type, source, department, assignee, deadline?
- [ ] Có section "Việc cần làm" với checkbox?
- [ ] Có section "Output" mô tả cụ thể?
- [ ] Có section "Tài liệu tham khảo" với links?
- [ ] Tone phù hợp bộ phận? (BST không chi tiết cách làm, QA có checklist...)
- [ ] Không dài quá — dưới 60 dòng?

## Bước 5: Giao việc

Sau khi tạo xong tất cả task files:

```bash
cd /Users/anderson/Desktop/works/changes/neo-task-assign/scripts
bun run assign.ts IP-XXX-DEV DEV
bun run assign.ts IP-XXX-DES DES
bun run assign.ts IP-XXX-QA QA
bun run assign.ts IP-XXX-MKT MKT
bun run assign.ts IP-XXX-BST LEADERS
```
