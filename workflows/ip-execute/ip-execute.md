---
type: workflow
tags: [cyberk-way]
description: Triển khai IP đã được hoạch định — bổ sung execution plan, tạo task files, lập lịch assign/follow/review trong scheduler.csv.
---

# Quy trình Triển khai IP (Execution)

> Workflow này tập trung vào **thực thi** — từ IP đã được hoạch định, tạo Execution Plan, task files, và lập lịch theo dõi trong scheduler tổng.
> Điều kiện: IP đã được tạo qua `workflows/ip-create/ip-create.md`.

---

## Hệ thống file liên quan

| File / Folder | Vai trò |
|---------------|---------|
| `improvement/IP-[XXX]-doing.md` | File IP (đã tạo ở giai đoạn hoạch định) |
| `improvement/kanban-board.md` | Cập nhật trạng thái IP → `Đang thực hiện` |
| `tasks/IP-[XXX]/` | Folder chứa task files chi tiết |
| `scheduler.csv` | **Lịch theo dõi tổng** — single source of truth cho assign, follow, review |
| `improvement/diary/` | Nhật ký triển khai hằng ngày |
| `workflows/ip-create/ip-template.md` | Tham khảo format Execution Plan |

---

## Các bước thực hiện

### Bước 1 — Bổ sung Plans & Kế hoạch triển khai (Execution Plan)

1. Mở file IP (`improvement/IP-[XXX]-doing.md`).
2. Bổ sung mục **Plans (Kế hoạch hành động)** và chia thành các **task cụ thể**, mỗi task gán cho 1 phòng ban.
3. Điền vào bảng **Kế hoạch triển khai**:

   | Task | Bộ phận | Mô tả | Deadline | Phụ thuộc | Trạng thái |
   |------|---------|-------|----------|-----------|------------|
   | IP-023-MKT | `MKT` | ... | YYYY-MM-DD | — | `todo` |
   | IP-023-DES | `DES` | ... | YYYY-MM-DD | IP-023-MKT | `todo` |

4. Quy tắc:
   - Mã task: `IP-[XXX]-[BỘ_PHẬN]` (ví dụ: IP-023-DEV, IP-023-MKT).
   - **Mỗi bộ phận chỉ có 1 task per IP.** Nếu cần nhiều task cho 1 bộ phận → gợi ý chia nhỏ IP.
   - Deadline phải tuân thứ tự phụ thuộc.
   - Mỗi hành động trong Plans phải có entry tương ứng — không bỏ sót.

### Bước 2 — Tạo Task Files

1. Tạo folder `tasks/IP-[XXX]/`.
2. Với **mỗi task** trong Execution Plan, tạo file:
   - Tên file: `IP-[XXX]-[BỘ_PHẬN].md` (ví dụ: `IP-023-DEV.md`, `IP-023-MKT.md`)
   - Frontmatter:
     ```yaml
     ---
     type: task
     source: IP-023
     department: DEV
     assignee: Tên người phụ trách
     status: todo
     priority: high
     created: YYYY-MM-DD
     deadline: YYYY-MM-DD
     ---
     ```
   - Nội dung: Mục tiêu, việc cần làm (checklist), phối hợp với ai, tài liệu tham khảo.

### Bước 3 — Thêm vào Scheduler CSV

> Thay vì viết "Lịch theo dõi" vào từng IP, tất cả lịch hành động được ghi vào file **`scheduler.csv`** tại root `changes/`.

1. Mở file `scheduler.csv`.
2. Thêm các dòng theo format:

   ```
   date,time,type,ip,task,channel,action,on_complete,status
   ```

   | Cột | Giải thích | Ví dụ |
   |-----|-----------|-------|
   | `date` | Ngày thực hiện | `2026-03-18` |
   | `time` | Giờ trigger (HH:MM) | `09:00` |
   | `type` | Loại hành động | `assign`, `follow`, `review` |
   | `ip` | Mã IP | `IP-027` |
   | `task` | Mã task cụ thể (bỏ trống nếu follow toàn bộ IP) | `IP-027-QA` hoặc trống |
   | `channel` | Channel Telegram | `QA`, `DEV`, `ALL`, `CEO`, `C-LEVEL` |
   | `action` | Mô tả hành động | `Giao task: seminar + viết bài` |
   | `on_complete` | Cập nhật khi xong | `IP-027-QA → doing` |
   | `status` | Trạng thái gửi (`pending` / `done`) | `pending` — chưa gửi, `done` — đã gửi |

3. Quy tắc tạo lịch từ Execution Plan:
   - Mỗi task tạo ít nhất **2 dòng**: `assign` (ngày bắt đầu) + `follow` (ngày deadline).
   - Nếu task B phụ thuộc task A → `assign` B phải nằm **sau** `follow` A.
   - Dòng cuối: `review` — tổng hợp kết quả, báo cáo CEO.
   - Trường `time` xác định **khi nào** scheduler trigger — mặc định `09:00`.

4. Ví dụ thực tế (IP-023):

   ```csv
   2026-03-15,09:00,assign,IP-023,IP-023-MKT,MKT,Giao: viết nội dung bài đăng,IP-023-MKT → doing
   2026-03-16,09:00,follow,IP-023,IP-023-MKT,MKT,Kiểm tra kết quả,IP-023-MKT → done
   2026-03-16,10:00,assign,IP-023,IP-023-DES,DES,Giao: thiết kế visual,IP-023-DES → doing
   2026-03-17,09:00,follow,IP-023,IP-023-DES,DES,Kiểm tra kết quả,IP-023-DES → done
   2026-03-19,09:00,review,IP-023,,CEO,Tổng hợp + báo cáo CEO,Cập nhật Status IP
   ```

### Bước 4 — Cập nhật trạng thái

1. Cập nhật **Status** trong file IP → `Đang thực hiện`.
2. Cập nhật **Kanban Board** → chuyển IP sang cột **Doing**.
3. Ghi nhận ngày bắt đầu vào mục **Thực tế**.

---

## Trong quá trình triển khai

AI/Scheduler đọc **`scheduler.csv`** để biết hành động cần thực hiện:

| Type | Skill | AI làm gì | Cập nhật vào đâu |
|------|-------|-----------|-------------------|
| `assign` | `bun run assign.ts` | Gửi Telegram: task, mô tả, deadline | Task trạng thái → `doing` |
| `follow` | `bun run follow.ts` | Hỏi tiến độ, thu kết quả qua Telegram | Execution Plan trạng thái + Thực tế |
| `review` | (manual) | Tổng hợp, báo cáo CEO | Status IP, Kanban Board |

Khi gặp **blocker**: đánh dấu task = `blocked`, ghi lý do, thông báo CEO qua Telegram.

Khi **tất cả task done**: cập nhật Status IP → `Hoàn thành`, chuyển Kanban → **Done**.
