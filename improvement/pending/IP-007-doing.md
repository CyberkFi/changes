---
type: ip
tags: [quality, automation, native-ai]
---

# Cải tiến 7 (IP-007): AI-Powered Source Code & Architecture Audit

* **Mục tiêu:** Xây dựng một workflow tự động, sử dụng AI để kiểm tra và xác thực chất lượng mã nguồn và cấu trúc kiến trúc của dự án.
* **Lý do (Tại sao):** Đảm bảo "xương sống" của dự án (code và kiến trúc) luôn khỏe mạnh, sạch sẽ và tuân thủ thiết kế. Việc audit tự động giúp ngăn chặn "technical debt" (nợ kỹ thuật) ngay từ khi nó mới hình thành, thay vì phải xử lý những hậu quả tốn kém về sau.
* **Key Results (Kết quả cần đạt):**
  * *Kết quả 1:* Ban hành bộ quy tắc Linter và Coding Convention chính thức, tích hợp vào môi trường phát triển (IDE) và CI/CD.
  * *Kết quả 2:* Xây dựng thành công script có khả năng tự động kiểm tra và báo lỗi khi phát hiện việc vô hiệu hóa linter trên toàn bộ file/thư mục.
  * *Kết quả 3:* Script có khả năng đối chiếu cấu trúc thư mục hiện tại của dự án với một "bản đồ kiến trúc" (`architecture.map.yml`) được định nghĩa trước, và cảnh báo khi có sai lệch.
* **Plans (Kế hoạch hành động):**
    1. **Định nghĩa "Tiêu chuẩn Vàng":**
        * Tổ chức workshop để thống nhất và chốt hạ bộ quy tắc Linter & Coding Convention.
        * Thiết kế cấu trúc file `architecture.map.yml` để mô tả kiến trúc thư mục mong muốn.
    2. **Phát triển Tool Audit:**
        * Viết script lõi để thực thi việc kiểm tra.
        * Tích hợp các công cụ linter phổ biến (như ESLint, Prettier) vào script.
        * Xây dựng logic để đọc `architecture.map.yml` và so sánh với cấu trúc thư mục thực tế.
    3. **Tích hợp và Vận hành:**
        * Tích hợp script vào CI/CD để kiểm tra trên mỗi Pull Request.
        * Cấu hình cảnh báo tự động tới người thực hiện PR nếu vi phạm.
* **Status:** `Chưa bắt đầu`
* **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới repository của tool, tài liệu quy tắc)*
