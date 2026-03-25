---
type: improvement-plan
tags: [cyberk-way, operations, ai-native, workflow]
status: todo
priority: high
created: 2026-03-23
---

#### Cải tiến 30 (IP-030): Đóng gói Cyberk flow (AI Native Software Development)

* **Mục tiêu:** Đóng gói toàn bộ phương pháp và công cụ ứng dụng AI vào quá trình phát triển phần mềm (AI Native Workflow) của Cyberk thành một framework quy chuẩn, dễ triển khai và có khả năng thương mại hóa tri thức ra bên ngoài.
* **Lý do (Tại sao):**
  - Cần hệ thống hóa "cách Cyberk xây dựng software bằng AI" thành một tài sản tri thức giá trị cao.
  - Phân định rạch ròi: Đây là quy trình làm việc/thao tác nội bộ (cách ta làm), khác với Agentic Development (dịch vụ AI xây cho khách).
  - Tăng tính minh bạch và cao cấp: Giúp người ngoài/khách hàng có thể dễ dàng theo dõi, hiểu phương pháp luận và tương tác với tiến độ dự án.
* **Key Results (Kết quả cần đạt):**
  * *KR1:* Đổi tên (naming) các bước trong workflow để nghe chuyên nghiệp và cao cấp (đắt tiền) hơn.
  * *KR2:* Hoàn thiện tài liệu thuật ngữ và Document cho toàn bộ luồng, kèm Demo và trình bày phương pháp luận vững chắc.
  * *KR3:* Tích hợp công cụ Vibe-Kanban hỗ trợ realtime follow (nghiên cứu thay thế dần cho Landscape).
  * *KR4:* Tích hợp AI interface cho phép người ngoài tương tác/truy vấn trực tiếp với dự án (yêu cầu kiểm soát chặt chẽ vấn đề bảo mật - security).
* **Risks (Rủi ro & Biện pháp):**
  * *Rủi ro 1:* Sửa đổi hệ thống dẫn đến flow không tương thích khi mang ra ngoài Cyberk -> *Mitigation:* Áp dụng nguyên tắc "kế thừa phương pháp" thay vì sửa lại lõi đang chạy tốt.
  * *Rủi ro 2:* Rò rỉ dữ liệu hoặc mã nguồn nhạy cảm qua kênh tương tác AI với người ngoài -> *Mitigation:* Thiết kế rào chắn prompt/context retrieval nghiêm ngặt, chỉ đưa các data đã được sanitize vào vector store hỗ trợ tương tác.
* **Status:** `Chưa bắt đầu`
* **Thực tế (Ghi chú/Dấu vết):**
  - 2026-03-23: Nhận yêu cầu từ CEO và khởi tạo IP.
