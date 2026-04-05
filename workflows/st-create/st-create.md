---
type: workflow
tags: [cyberk-way]
description: Xây dựng chiến lược dài hạn (1-3 năm) — định nghĩa vision, strategic objective, key results (OKRs), và liên kết với các IP.
---

# Quy trình Khởi tạo Chiến lược (Strategy Creation Workflow)

Tài liệu này hướng dẫn Ban lãnh đạo (CEO, CTO, Managers) cách xây dựng và ban hành một **Chiến lược (Strategy)** mới cho Cyberk. Khác với Improvement Plan (IP) là các hành động cụ thể, Strategy là định hướng dài hạn (1-3 năm).

## 1. Cấu trúc chuẩn (Structure)

Mỗi Strategy phải được định nghĩa trong một file riêng biệt (`strategy/S-XXX-doing.md`) và tuân thủ cấu trúc sau:

1. **Tiêu đề:** `Strategy [Số thứ tự] (S-[Mã số]): [Tên Chiến lược]`
2. **Tầm nhìn (Vision):** Bức tranh tương lai khi chiến lược thành công. Trả lời câu hỏi: *Chúng ta muốn trở thành gì?*
3. **Mục tiêu Chiến lược (Strategic Objective):** Mục tiêu cụ thể, định lượng được trong khoảng thời gian xác định (thường là 1 năm).
4. **Lý do (Why):** Tại sao chọn chiến lược này vào lúc này? (Market insight, Pain point, Opportunity).
5. **Key Results (Kết quả then chốt):** 3-5 kết quả đo lường được để xác định thành công (theo mô hình OKR).
6. **Phạm vi & Tác động:** Chiến lược này ảnh hưởng đến bộ phận nào?
7. **Liên kết Improvement Plans (Tactics):** Danh sách các IP cụ thể để thực thi chiến lược này.
8. **Status:** Trạng thái (`Drafting`, `Active`, `Completed`, `Sunsetting`).

---

## 2. Tiêu chuẩn nội dung (Quality Standards)

Chiến lược cần đạt được các tiêu chuẩn "S.M.A.R.T" và "Inspirational":

### 🔭 Tầm nhìn (Vision)

* **Cảm hứng:** Phải đủ lớn để truyền cảm hứng cho toàn đội ngũ.
* **Dài hạn:** Hướng tới bức tranh 1-3 năm.

### 🎯 Mục tiêu & Key Results (OKRs)

* **Tập trung:** Mỗi năm chỉ nên có 1-3 Chiến lược cốt lõi.
* **Đo lường được:** Key Results phải là con số hoặc trạng thái nhị phân (Done/Not Done).
* **Thách thức:** Mục tiêu nên đủ khó để thúc đẩy sự đổi mới (Moonshot goals).

### 🔗 Liên kết (Alignment)

* **Thực thi được:** Chiến lược không được "treo trên mây". Nó phải được phân rã thành các Improvement Plans (IP) cụ thể.
* **Kiểm tra:** Nếu một Strategy không có IP nào liên kết, nó là Chiến lược rỗng. Ngược lại, nếu một IP không phục vụ Strategy nào, nó là IP lãng phí.

---

## 3. Quy trình thực hiện (Workflow)

### Bước 1: Khởi xướng (Initiation)

* **Trigger:** Lập kế hoạch năm (Annual Planning), hoặc khi có biến động lớn về thị trường/công nghệ.
* **Người thực hiện:** CEO.
* **Hành động:** Phác thảo ý tưởng chiến lược dựa trên Vision của công ty.

### Bước 2: Soạn thảo (Drafting)

* **Người thực hiện:** CEO + AI Agent.
* **Hành động:**
    1. Tạo file mới trong thư mục `strategy/` với tên `S-[XXX]-doing.md` (ví dụ: `S-004-doing.md`).
    2. Sử dụng template chuẩn để viết nội dung.
    3. Đảm bảo điền đầy đủ các mục: Vision, Objective, Why, KRs.

### Bước 3: Phản biện & Tinh chỉnh (Review & Refine)

* **Người thực hiện:** Core Team (CTO, Key Managers).
* **Hành động:**
    1. Review tính khả thi của Key Results.
    2. Review sự liên kết với các nguồn lực hiện có.
    3. Đặt câu hỏi "Tại sao?" để thách thức các giả định.

### Bước 4: Ban hành & Liên kết (Approve & Align)

* **Người thực hiện:** CEO.
* **Hành động:**
    1. Chốt nội dung cuối cùng.
    2. Cập nhật vào file Index `strategy/README.md`.
    3. **Quan trọng:** Rà soát lại danh sách `improvement-plans.md`. Tạo mới hoặc gán các IP hiện có vào Strategy mới này.
