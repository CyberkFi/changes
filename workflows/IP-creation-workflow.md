---
type: workflow
tags: [cyberk-way]
---

# Quy trình Tạo mới Improvement Plan (IP)

> Workflow này CHỈ tập trung vào **hoạch định** — tạo ra IP mới từ ý tưởng.
> Template: `workflows/IP-template.md`

> [!IMPORTANT]
> Workflow này **KHÔNG** bao gồm việc điền Kế hoạch triển khai (Execution Plan), tạo task files, hay lập lịch theo dõi.
> Khi IP sẵn sàng triển khai → chuyển sang `workflows/IP-execution-workflow.md`.

---

## Hệ thống file liên quan

| File / Folder | Vai trò |
|---------------|---------|
| `workflows/IP-template.md` | Template chuẩn — mọi IP phải dùng template này |
| `improvement/IP-[XXX]-doing.md` | File IP riêng lẻ |
| `improvement/kanban-board.md` | Bảng Kanban theo dõi trạng thái |

---

## Các bước thực hiện

### Bước 1 — Tiếp nhận & Làm rõ

1. CEO cung cấp ý tưởng hoặc vấn đề cần giải quyết.
2. AI/Người thực hiện **đặt câu hỏi làm rõ** nếu thông tin chưa đủ:
   - Mục tiêu cụ thể là gì? Phạm vi ảnh hưởng?
   - Bối cảnh: vấn đề này xuất phát từ đâu? Đã có giải pháp nào trước đó?
   - Phòng ban nào liên quan?
3. **Không soạn thảo** cho đến khi đã hiểu rõ yêu cầu.

### Bước 2 — Định danh (Numbering)

1. Kiểm tra file IP cuối cùng trong `improvement/` để xác định số thứ tự tiếp theo.
   - Ví dụ: nếu file cuối là `IP-026-doing.md` → IP mới là `IP-027`.
2. Đặt tên file: `improvement/IP-027-doing.md`.

### Bước 3 — Soạn thảo IP

1. Dùng `workflows/IP-template.md` làm cấu trúc.
2. Điền các mục: Mục tiêu, Lý do, Key Results, Plans, Risks.
3. Đặt Status = `Chưa bắt đầu`.
4. **Không điền** Kế hoạch triển khai, Lịch theo dõi — đó thuộc giai đoạn thực thi.
5. Lưu file.

### Bước 4 — Cập nhật Kanban Board

1. Mở `improvement/kanban-board.md`.
2. Thêm dòng vào cột **To Do**:
   ```markdown
   - [ ] **IP-027**: [Tên IP]
   ```

### Bước 5 — Chuẩn bị Nhật ký *(tùy chọn)*

- Tạo file `improvement/diary/IP-027.md` nếu cần ghi chép quá trình thảo luận.

---

> **Bước tiếp theo:** Khi IP sẵn sàng triển khai → thực hiện `workflows/IP-execution-workflow.md`.
