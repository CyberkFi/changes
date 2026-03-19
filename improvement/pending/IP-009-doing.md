---
type: ip
tags: [quality, automation]
---

# Cải tiến 9 (IP-009): Automated Technical Compliance Audit

* **Mục tiêu:** Thiết lập một quy trình audit tự động để đảm bảo các dự án tuân thủ hai yêu cầu kỹ thuật quan trọng: độ bao phủ của Unit Test và sự hiện diện của các quy tắc (rules) tối thiểu cho CursorAI.
* **Lý do (Tại sao):** Unit test là "lưới an toàn" cho lập trình viên, còn CursorAI rules là "bộ não" phụ giúp tăng năng suất. Việc đảm bảo tuân thủ hai yếu tố này giúp nâng cao chất lượng code một cách bền vững và tối ưu hóa quy trình làm việc với AI.
* **Key Results (Kết quả cần đạt):**
  * *Kết quả 1:* Script có khả năng tự động đọc và phân tích báo cáo coverage do các công cụ (như JaCoCo, Istanbul/nyc) tạo ra, sau đó so sánh với ngưỡng tối thiểu là **80%**.
  * *Kết quả 2:* Ban hành một "bộ quy tắc CursorAI tối thiểu" (`minimum-ruleset.json`) làm tiêu chuẩn cho mọi dự án.
  * *Kết quả 3:* Script có khả năng kiểm tra sự tồn tại của các file rule trong `minimum-ruleset.json` tại đúng vị trí trong workspace của dự án.
* **Plans (Kế hoạch hành động):**
    1. **Chuẩn hóa:**
        * Thống nhất công cụ và định dạng báo cáo coverage cho toàn công ty.
        * Tổ chức workshop để thảo luận và chốt hạ "bộ quy tắc CursorAI tối thiểu".
    2. **Phát triển Tool Audit:**
        * Viết logic để đọc và phân tích các định dạng báo cáo coverage phổ biến.
        * Viết logic để đọc `minimum-ruleset.json` và kiểm tra sự tồn tại của các file rule tương ứng.
    3. **Tích hợp và Vận hành:**
        * Tích hợp script vào CI/CD để chạy trên mỗi Pull Request.
        * Cấu hình để pipeline báo lỗi (fail) nếu coverage dưới ngưỡng hoặc thiếu rule bắt buộc.
* **Status:** `Chưa bắt đầu`
* **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tool, bộ rule tối thiểu)*
