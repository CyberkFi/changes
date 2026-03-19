---
type: ip
tags: [quality]
---

# Cải tiến 4 (IP-004): Nâng cao chất lượng và độ bao phủ của Unit Test

* **Mục tiêu:** Thiết lập một tiêu chuẩn cao về chất lượng code bằng cách áp dụng chính sách unit test một cách hiệu quả. Cụ thể:
  * **Đối với code mới/sửa đổi:** Yêu cầu độ bao phủ (branch coverage) tối thiểu **90%** cho các logic nghiệp vụ quan trọng.
  * **Đối với code cũ (legacy):** Lập kế hoạch và tăng dần độ bao phủ cho các module quan trọng theo từng giai đoạn.
* **Lý do (Tại sao):** Thay vì theo đuổi 100% một cách máy móc, chúng ta tập trung vào việc đảm bảo các phần code quan trọng, phức tạp và dễ phát sinh lỗi nhất được kiểm thử kỹ lưỡng. Cách tiếp cận này tối ưu hóa nguồn lực và mang lại sự tự tin cao nhất khi thay đổi code.
* **Key Results (Kết quả cần đạt):**
  * *Kết quả 1:* Ban hành định nghĩa chính thức về "logic nghiệp vụ quan trọng" cần được ưu tiên test.
  * *Kết quả 2:* Tích hợp thành công công cụ đo lường coverage vào quy trình CI/CD, tự động chặn các Pull Request không đạt ngưỡng 90% coverage cho code mới.
  * *Kết quả 3:* Xác định được 3-5 module legacy quan trọng nhất cần được tăng coverage trong quý tới.
* **Plans (Kế hoạch hành động):**
    1. **Thiết lập tiêu chuẩn:**
        * Tổ chức buổi thảo luận với team kỹ thuật để thống nhất định nghĩa "logic nghiệp vụ quan trọng".
        * Lựa chọn và cấu hình công cụ đo lường coverage (ví dụ: JaCoCo, Istanbul/nyc).
    2. **Tích hợp CI/CD:** Cấu hình pipeline để chạy kiểm tra coverage và thực thi quy tắc trên mỗi Pull Request.
    3. **Xử lý Legacy Code:** Phân tích code base, xác định các module ưu tiên và đưa vào backlog để cải thiện dần.
    4. **Đào tạo:** Tổ chức workshop về các kỹ thuật viết unit test hiệu quả (ví dụ: mocking, dependency injection) để team có thể đạt được coverage một cách ý nghĩa, không chỉ là chạy theo con số.
* **Status:** `Chưa bắt đầu`
* **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tài liệu tiêu chuẩn, cấu hình CI/CD)*
