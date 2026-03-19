---
type: task
source: IP-003
department: DEV
assignee: Trường (Brian)
status: todo
priority: high
created: 2026-03-18
deadline: 2026-04-14
---

# IP-003-DEV: Tool đồng bộ Meeting Minutes + Tập trung hoá Calendar

> Người phụ trách: **Trường** (Brian)
> IP gốc: [IP-003](../../improvement/IP-003-doing.md)

## Mục tiêu

Xây dựng tool tự động hoá meeting minutes và tập trung hoá lịch họp khách hàng của toàn công ty.

## Scope

### 1. Tool đồng bộ Meeting Minutes → GitHub

- AI tham gia cuộc họp → tạo meeting minutes tự động
- Tool đồng bộ MM về đúng thư mục dự án trong Git workspace
- **Commit đầy đủ vào GitHub** với commit message có cấu trúc (vd: `meeting: [project] YYYY-MM-DD — summary`)
- Trích xuất action items, decisions, requirements từ MM

### 2. Tích hợp toàn bộ team

- Thu thập danh sách tất cả người đang có cuộc họp định kỳ với khách hàng (DEV leads, BD, QA...)
- Kết nối calendar của tất cả các team vào hệ thống trung tâm — không chỉ riêng anderson
- Đảm bảo AI tham gia được tất cả cuộc họp

### 3. Tập trung hoá & Visualize Meeting Calendar

- Calendar view tập trung — hiển thị tất cả cuộc họp khách hàng
- Visualize: ai họp với ai, khi nào, dự án nào
- Dashboard đơn giản hoặc tích hợp vào tool nội bộ

## Checklist

- [ ] Liệt kê tất cả team/người đang có cuộc họp định kỳ với khách
- [ ] Kết nối calendar toàn team vào hệ thống trung tâm
- [ ] Tool đồng bộ MM → Git workspace → GitHub commit
- [ ] Calendar view tập trung (visualize được lịch họp)
- [ ] Trích xuất action items từ MM
- [ ] Đào tạo team sử dụng quy trình mới

## Tài liệu tham khảo

- [IP-003 — IP gốc](../../improvement/IP-003-doing.md)
