---
type: template
tags: [cyberk-way]
---

#### Cải tiến [N] (IP-[XXX]): [Tên Sáng kiến Cải tiến]

* **Mục tiêu:** [Mô tả ngắn gọn mục tiêu cần đạt được trong 1-2 câu. Nêu rõ phạm vi và đối tượng áp dụng.]
* **Lý do (Tại sao):** [Giải thích động lực thực hiện. Tại sao việc này quan trọng? Nó giải quyết nỗi đau nào hoặc mang lại giá trị gì?]
* **Key Results (Kết quả cần đạt):**
  * *Kết quả 1:* [Sản phẩm đầu ra cụ thể 1 - ví dụ: Tài liệu X được ban hành]
  * *Kết quả 2:* [Sản phẩm đầu ra cụ thể 2 - ví dụ: Tool Y được tích hợp vào CI/CD]
  * *Kết quả 3:* [Sản phẩm đầu ra cụ thể 3 - ví dụ: 100% nhân sự hoàn thành khóa học]
* **Plans (Kế hoạch hành động):**
    1. **[Giai đoạn 1/Bước lớn 1]:**
        * [Hành động cụ thể A]
        * [Hành động cụ thể B]
    2. **[Giai đoạn 2/Bước lớn 2]:**
        * [Hành động cụ thể C]
        * [Hành động cụ thể D]
* **Risks (Rủi ro & Biện pháp):**
  * *Rủi ro 1:* [Mô tả rủi ro tiềm ẩn] -> *Mitigation:* [Biện pháp giảm thiểu/phòng ngừa]
  * *Rủi ro 2:* [Mô tả rủi ro tiềm ẩn] -> *Mitigation:* [Biện pháp giảm thiểu/phòng ngừa]

* **Kế hoạch triển khai (Execution Plan):**

  > Mỗi task có mã theo format `IP-[XXX]-[BỘ_PHẬN]` (ví dụ: IP-023-DEV, IP-023-MKT).
  > **Mỗi bộ phận chỉ có 1 task per IP.** Nếu cần nhiều task → chia nhỏ IP thay vì tạo nhiều task.
  > Cột **Phụ thuộc** ghi task ID mà task hiện tại phải đợi hoàn thành trước.
  > Deadline phải tuân theo thứ tự phụ thuộc.

  | Task | Bộ phận | Mô tả | Deadline | Phụ thuộc | Trạng thái |
  |------|---------|-------|----------|-----------|------------|
  | IP-XXX-CEO | `CEO` | [Mô tả - ví dụ: Review & phê duyệt nội dung] | YYYY-MM-DD | — | `todo` |
  | IP-XXX-MKT | `MKT` | [Mô tả - ví dụ: Viết content cho landing page] | YYYY-MM-DD | IP-XXX-CEO | `todo` |
  | IP-XXX-DES | `DES` | [Mô tả - ví dụ: Thiết kế UI/Visual assets] | YYYY-MM-DD | IP-XXX-MKT | `todo` |
  | IP-XXX-DEV | `DEV` | [Mô tả - ví dụ: Code & deploy trang web] | YYYY-MM-DD | IP-XXX-DES | `todo` |
  | IP-XXX-QA | `QA` | [Mô tả - ví dụ: Test chức năng & responsive] | YYYY-MM-DD | IP-XXX-DEV | `todo` |

  **Mã phòng ban:**

  | Mã | Phòng ban |
  |----|-----------|
  | `CEO` | CEO / Ban lãnh đạo |
  | `DEV` | Development (Kỹ thuật phần mềm) |
  | `DES` | Design (Thiết kế UI/UX) |
  | `MKT` | Marketing |
  | `BST` | Business Strategy (Chiến lược kinh doanh) |
  | `QA` | Quality Assurance (Kiểm thử) |
  | `FIN` | Finance (Tài chính) |
  | `HR` | Human Resources (Nhân sự) |

* **Lịch theo dõi:** Xem `scheduler.csv` — lịch assign, follow-up, review được quản lý tập trung tại đó, không ghi trong file IP.

* **Status:** `Chưa bắt đầu`
* **Thực tế (Ghi chú/Dấu vết):** *(sẽ cập nhật liên kết tới tài liệu, PR, hoặc kết quả thực tế tại đây)*

---
