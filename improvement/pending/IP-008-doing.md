---
type: ip
tags: [quality, automation, documentation]
---

# Cải tiến 8 (IP-008): Automated Business Document Audit

* **Mục tiêu:** Xây dựng một workflow tự động để kiểm tra sự đầy đủ và tính tuân thủ của các tài liệu nghiệp vụ (BRD, PRD) trong tất cả các dự án.
* **Lý do (Tại sao):** Tài liệu nghiệp vụ là "la bàn" của dự án. Nếu la bàn sai hoặc thiếu, con tàu sẽ đi lạc hướng. Việc audit tự động đảm bảo rằng mọi `key feature` đều có đầy đủ tài liệu nền tảng, giúp team kỹ thuật hiểu đúng yêu cầu và giảm thiểu rủi ro làm lại.
* **Key Results (Kết quả cần đạt):**
  * *Kết quả 1:* Ban hành một quy định rõ ràng về việc: "Mỗi `key feature` phải có một tài liệu BRD và PRD tương ứng".
  * *Kết quả 2:* Xây dựng thành công script có khả năng đọc file cấu hình của dự án (ví dụ: `audit.config.yml`) để lấy danh sách các `key feature`.
  * *Kết quả 3:* Script tự động kiểm tra sự tồn tại của các file BRD và PRD được liên kết với từng `key feature` và báo cáo những trường hợp còn thiếu.
* **Plans (Kế hoạch hành động):**
    1. **Chuẩn hóa:**
        * Thiết kế cấu trúc cho file `audit.config.yml`, cho phép khai báo danh sách `key features` và đường dẫn tới tài liệu BRD/PRD của chúng.
        * Ban hành quy chuẩn về việc đặt tên và lưu trữ file tài liệu.
    2. **Phát triển Tool Audit:**
        * Viết logic cho script để đọc và phân tích file `audit.config.yml`.
        * Xây dựng logic để kiểm tra sự tồn tại của các đường dẫn file đã khai báo.
    3. **Tích hợp và Vận hành:**
        * Tích hợp script vào CI/CD để chạy định kỳ (ví dụ: hàng đêm) và báo cáo kết quả.
        * Tạo một "dashboard" đơn giản để hiển thị trạng thái đầy đủ tài liệu của tất cả dự án.
* **Status:** `Chưa bắt đầu`
* **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tool, tài liệu quy chuẩn)*
