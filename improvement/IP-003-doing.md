---
type: improvement-plan
tags: [automation, native-ai, meeting, calendar]
status: doing
priority: high
created: 2026-03-01
updated: 2026-03-18
---

# IP-003: Tự động hóa việc tạo và tích hợp Meeting Minutes (MM)

## 1. Mục tiêu

100% các cuộc họp với khách hàng được AI tự động tóm tắt và các thông tin quan trọng được tích hợp vào tài liệu dự án một cách có hệ thống.

## 2. Lý do (Tại sao)

Không chỉ tiết kiệm thời gian ghi chép, mà còn biến meeting minutes từ tài liệu tĩnh thành nguồn dữ liệu sống, tự động cập nhật vào "single source of truth" của dự án, đảm bảo thông tin luôn nhất quán.

## 3. Key Results (Kết quả cần đạt)

- *Kết quả 1:* 100% cuộc họp với khách hàng được đặt lịch qua một cổng trung tâm (anderson) để AI có thể tự động tham gia và tóm tắt.
- *Kết quả 2:* Hoàn thiện công cụ (tool) có khả năng tự động đồng bộ meeting minutes từ AI về đúng thư mục dự án trong Git workspace.
- *Kết quả 3:* Hoàn thiện bộ quy tắc (ruleset) để trích xuất thông tin (action items, requirements) từ meeting minutes và đề xuất cập nhật cho các tài liệu liên quan. **Commit đầy đủ vào GitHub** — mọi meeting minutes, action items, changes phải được commit có hệ thống.
- *Kết quả 4:* **Tích hợp toàn bộ các team đang call với khách hàng.** Tập trung hoá meeting calendar và visualized được lịch họp của tất cả các team — không chỉ riêng anderson, mà bao gồm tất cả DEV lead, BD, QA đang có cuộc họp với khách.
- *Kết quả 5:* Dashboard/calendar view hiển thị tổng quan lịch họp khách hàng của toàn công ty.

## 4. Plans (Kế hoạch hành động)

1. **Quy trình hóa:** Thiết lập và ban hành quy trình bắt buộc về việc đặt lịch họp qua cổng trung tâm để AI có thể tham gia.
2. **Tích hợp toàn bộ team:**
    - Thu thập danh sách tất cả các team/người đang có cuộc họp định kỳ với khách hàng (DEV leads, BD, QA...)
    - Kết nối calendar của tất cả các team vào hệ thống trung tâm
    - Đảm bảo AI tham gia được tất cả cuộc họp, không chỉ của anderson
3. **Phát triển Tool đồng bộ:**
    - Thiết kế luồng hoạt động: AI → Tool → Git workspace → GitHub commit
    - Viết mã nguồn và triển khai tool
    - **Tự động commit meeting minutes + extracted data vào GitHub** với commit message có cấu trúc
4. **Tập trung hoá & Visualize Meeting Calendar:**
    - Xây dựng calendar view tập trung — hiển thị tất cả cuộc họp khách hàng của toàn công ty
    - Visualize: ai họp với ai, khi nào, dự án nào
    - Có thể dùng dashboard đơn giản hoặc tích hợp vào tool nội bộ
5. **Xây dựng Bộ quy tắc trích xuất:**
    - Phân tích định dạng của MM do AI tạo ra
    - Xây dựng logic để nhận diện và trích xuất các thông tin quan trọng (action items, decisions, new requirements)
6. **Tích hợp và Đào tạo:**
    - Tích hợp bộ quy tắc vào tool đồng bộ
    - Tổ chức đào tạo cho team về quy trình mới và cách sử dụng kết quả do AI tạo ra

## 5. Status

`Doing`

## 6. Phân công

| Bộ phận | Task | Mô tả |
|---------|------|-------|
| **DEV** | IP-003-DEV | Trường (Brian) — Phát triển tool đồng bộ MM, tích hợp calendar toàn team, commit tự động vào GitHub, visualize meeting calendar |

## 7. Liên kết

*(sẽ cập nhật liên kết tới tool, bộ quy tắc, tài liệu hướng dẫn)*

## 8. Thực tế (Ghi chú/Dấu vết)

- **2026-03-18:** Cập nhật IP — thêm yêu cầu commit đầy đủ vào GitHub, tích hợp toàn bộ team đang call khách hàng, tập trung hoá và visualize meeting calendar. Tạo task IP-003-DEV cho Trường.
