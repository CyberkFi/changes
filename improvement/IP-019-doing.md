---
type: ip
tags: [finance, automation]
---

# IP-019: Nâng cấp Hệ thống Thông tin Quản lý Tài chính

## 1. Mục tiêu (Objective)

Tái cấu trúc và cập nhật toàn bộ hệ thống thông tin quản lý tài chính (`/finance`) — bao gồm cập nhật dữ liệu từ tháng 8/2025 đến hiện tại, bổ sung các mẫu báo cáo tài chính chuẩn hóa để xuất báo cáo hàng tháng, và xây dựng khu vực quản lý outcome/chi phí theo dự án. Phạm vi: 100% dữ liệu tài chính công ty.

## 2. Lý do (Why)

- **Hệ thống đã out-date nghiêm trọng:** Dữ liệu invoice chỉ cập nhật đến tháng 7/2025, revenue-overview dừng ở tháng 7/2025 — thiếu hoàn toàn **8 tháng dữ liệu** (08/2025 → 03/2026). Điều này khiến CEO không có cơ sở dữ liệu chính xác để ra quyết định tài chính.
- **Thiếu mẫu báo cáo chuẩn:** Hiện tại chỉ có `revenue-overview.md` dạng tổng hợp thủ công. Không có mẫu báo cáo hàng tháng chuẩn hóa (Monthly Financial Report) để xuất nhanh — mỗi lần cần báo cáo phải tổng hợp lại từ đầu, gây tốn thời gian và dễ sai sót.
- **Outcome tracking quá sơ sài:** Các file `outcome/MM-YYYY.md` chỉ liệt kê chi phí tổng, **không phân loại theo dự án** — không thể biết dự án nào đang chi nhiều, dự án nào có lãi/lỗ. Thiếu hoàn toàn góc nhìn Profit & Loss (P&L) theo dự án.
- **Không có khả năng so sánh giữa các tháng:** Không có dashboard hay báo cáo trend để thấy xu hướng tài chính theo thời gian.

## 3. Kết quả Then chốt (Key Results)

- [ ] **KR1:** Dữ liệu `invoice_schedule.md` và `revenue-overview.md` được cập nhật đầy đủ từ tháng 8/2025 đến tháng 3/2026 (hiện tại).
- [ ] **KR2:** Bộ 3 mẫu báo cáo tài chính chuẩn hóa được tạo và lưu tại `/finance/templates/`:
  - *Monthly Financial Summary* — Báo cáo tổng hợp hàng tháng (Income vs Outcome, P&L).
  - *Project P&L Report* — Báo cáo lãi/lỗ theo từng dự án.
  - *Accounts Receivable Aging Report* — Báo cáo tuổi nợ phải thu.
- [ ] **KR3:** Cấu trúc thư mục `outcome/` được tái cấu trúc: mỗi file outcome hàng tháng phân loại chi phí theo **dự án** (project-level cost) và **chi phí chung** (overhead), có tổng hợp tự động.
- [ ] **KR4:** File `revenue-overview.md` được nâng cấp thành **Financial Dashboard** với dữ liệu Income, Outcome, Net Profit/Loss theo tháng và theo dự án, kèm biểu đồ Mermaid.
- [ ] **KR5:** Quy trình xuất báo cáo hàng tháng (Monthly Reporting Workflow) được tài liệu hóa tại `work-flow.md`, đảm bảo AI hoặc con người có thể xuất báo cáo trong 15 phút.

## 4. Kế hoạch (Plan)

### Giai đoạn 1 — Kiểm kê & Cập nhật dữ liệu (Data Audit & Update)

* Kiểm tra toàn bộ dữ liệu hiện có trong `/finance` (Invoices, outcome, invoice_schedule, revenue-overview).
* Thu thập dữ liệu invoice và outcome còn thiếu từ tháng 8/2025 → 3/2026.
* Cập nhật `invoice_schedule.md` với dữ liệu mới nhất.
* Cập nhật `revenue-overview.md` với dữ liệu mới nhất.
* Xác minh tính chính xác giữa `invoice_schedule.md`, các file invoice riêng lẻ trong `Invoices/`, và `revenue-overview.md`.

### Giai đoạn 2 — Tái cấu trúc Outcome Management

* Thiết kế cấu trúc mới cho `outcome/MM-YYYY.md` với 2 phân loại rõ ràng:
  - **Chi phí theo Dự án (Project Costs):** Developer cost, tool cost, service cost phân bổ cho từng dự án.
  - **Chi phí Chung (Overhead):** Văn phòng, điện nước, thực phẩm, tư vấn — những chi phí không gán được cho dự án cụ thể.
* Cập nhật tất cả các file outcome hiện có (01-2025 → 07-2025) theo cấu trúc mới.
* Tạo các file outcome còn thiếu (08-2025 → 03-2026).

### Giai đoạn 3 — Xây dựng Mẫu Báo cáo Tài chính (Report Templates)

* Tạo thư mục `/finance/templates/`.
* Soạn **Monthly Financial Summary Template** — tổng hợp Income (từ invoice) vs Outcome (từ outcome), Net P&L, biểu đồ Mermaid.
* Soạn **Project P&L Report Template** — Revenue theo dự án (từ invoice_schedule) vs Cost theo dự án (từ outcome), Gross Margin.
* Soạn **Accounts Receivable Aging Report Template** — phân loại nợ theo tuổi (Current, 30 ngày, 60 ngày, 90+ ngày).
* Tạo hướng dẫn sử dụng cho từng mẫu.

### Giai đoạn 4 — Nâng cấp Financial Dashboard

* Tái cấu trúc `revenue-overview.md` thành `financial-dashboard.md`:
  - **Phần 1:** Monthly P&L Summary (Income vs Outcome vs Net).
  - **Phần 2:** Revenue by Project (biểu đồ pie + bảng).
  - **Phần 3:** Cost by Category (biểu đồ + bảng).
  - **Phần 4:** Accounts Receivable Summary (tổng nợ, tuổi nợ trung bình).
  - **Phần 5:** Year-to-Date (YTD) Summary.
* Cập nhật toàn bộ biểu đồ Mermaid với dữ liệu mới nhất.

### Giai đoạn 5 — Tài liệu hóa Quy trình Báo cáo

* Bổ sung vào `work-flow.md` phần **Monthly Financial Reporting Workflow**:
  - Bước 1: Cập nhật invoice_schedule với invoice mới.
  - Bước 2: Cập nhật outcome tháng hiện tại.
  - Bước 3: Chạy tổng hợp vào financial-dashboard.
  - Bước 4: Xuất báo cáo từ templates.
* Tạo checklist báo cáo hàng tháng dạng task list.

## 5. Rủi ro (Risks)

* *Rủi ro 1:* **Thiếu dữ liệu gốc cho các tháng 8/2025 → 2/2026** — Không có file invoice hoặc chứng từ cho giai đoạn này. → *Mitigation:* Thu thập từ kế toán hoặc email. Đánh dấu rõ dữ liệu nào là ước tính (estimated) vs chính xác (confirmed). Ưu tiên cập nhật cấu trúc trước, data điền sau.
* *Rủi ro 2:* **Phân bổ chi phí theo dự án không chính xác** — Một số chi phí (như lương developer) phục vụ nhiều dự án đồng thời, khó phân bổ. → *Mitigation:* Áp dụng quy tắc phân bổ đơn giản (theo % thời gian hoặc theo FTE). Ghi chú rõ phương pháp phân bổ trong mỗi file outcome.
* *Rủi ro 3:* **Quy trình báo cáo mới không được duy trì** — Sau khi hoàn thành IP, không ai tiếp tục cập nhật hàng tháng. → *Mitigation:* Thiết kế workflow đủ đơn giản để AI có thể tự thực hiện khi được yêu cầu. Thêm nhắc nhở vào monthly checklist.

## 6. Status

`Chưa bắt đầu`

## 7. Liên kết (Related)

- **Finance Repository:** [/finance](../../../finance/)
- **Current Invoice Schedule:** [invoice_schedule.md](../../../finance/invoice_schedule.md)
- **Current Revenue Overview:** [revenue-overview.md](../../../finance/revenue-overview.md)
- **Outcome Tracking:** [/finance/outcome/](../../../finance/outcome/)
- **Salary Workflow:** [work-flow.md](../../../finance/work-flow.md)

## 8. Thực tế (Ghi chú/Dấu vết)

*(Chưa có — sẽ cập nhật khi bắt đầu triển khai)*

---
