---
type: ip
tags: [solo-dev, cyberk-way, native-ai]
---

# IP-018: Pilot Solodev — America Fun

## 1. Mục tiêu (Objective)

Triển khai dự án America Fun theo workflow solodev nội bộ (giữ nguyên proposal Tech Labs cho client), nhằm **đánh giá và đo lường chất lượng workflow** mà Huy (CTO) đã thiết kế cho developer tại [cyberk-ai-process.md](../../gitbook/solo-dev/how-to-be-a-cyberks-developer/cyberk-ai-process.md). Đây là bài kiểm tra thực chiến đầu tiên trước khi scale mô hình solodev ra 100% dự án (mục tiêu IP-011).

## 2. Lý do (Why)

- **Workflow chưa được kiểm chứng:** Huy đã thiết kế bộ quy trình solodev (6 bước: Workspace → Phổ cập → Hiệu chỉnh → Implementation → Code Review → Deliver), nhưng chưa có dự án thực tế nào chạy theo workflow này.
- **IP-011 cần dữ liệu thực tế:** Mục tiêu "100% dự án solodev vào Q2/2026" không thể đạt được nếu không có pilot để phát hiện gap và cải thiện workflow trước khi nhân rộng.
- **Rủi ro thấp:** Client vẫn nhận service theo proposal Tech Labs — pilot chỉ ảnh hưởng cách tổ chức nội bộ. Nếu solodev gặp vấn đề, Thế Anh backup coding ngay lập tức.
- **America Fun phù hợp làm pilot:** Dự án Backend Rust, scope rõ ràng (Refactoring + New Features), có audit report sẵn — đủ context để Solo Dev bắt tay vào.

## 3. Kết quả Then chốt (Key Results)

- [ ] **KR1:** Khánh bootstrap dự án thành công chỉ dựa vào tài liệu workflow (không cần Huy hướng dẫn trực tiếp).
- [ ] **KR2:** Số lần Thế Anh phải can thiệp coding < 20% tổng số task.
- [ ] **KR3:** Khách hàng hài lòng với chất lượng deliver (không biết nội bộ chạy solodev).
- [ ] **KR4:** Huy có đủ data để cập nhật và cải thiện workflow tại `cyberk-ai-process.md`.

## 4. Nhóm Pilot

| Vai trò | Người | Trách nhiệm |
|---|---|---|
| **Solo Dev (Chính)** | Khánh | Follow 100% workflow solodev của Huy, phát triển toàn bộ phần kỹ thuật |
| **Coding Backup** | Thế Anh | Hỗ trợ khi Khánh gặp bottleneck kỹ thuật |
| **Client Communication & PM** | Trường | Giao tiếp khách hàng, quản trị dự án |
| **Workflow Observer** | Huy (CTO) | Quan sát, ghi nhận gap, hiệu chỉnh workflow |

## 5. Kế hoạch (Plan)

### Giai đoạn 1 — Bootstrap theo workflow Huy (Bước 1-2)

Khánh thực hiện **Bước 1 (Xây dựng Workspace)** và **Bước 2 (Phổ cập)** theo tài liệu:

- Hoàn thành tài liệu PRD/BRD theo quy chuẩn Cyberk
- Thiết lập techstack, kiến trúc hệ thống
- Xây dựng code practice và cursor rules
- Thực hiện Technical Bootstrap Checklist tại [bootstrap.md](../../gitbook/solo-dev/how-to-be-a-cyberks-developer/bootstrap.md)

**Đầu ra đánh giá:** Khánh có follow được workflow chỉ với tài liệu hay không? Gặp khó ở bước nào?

### Giai đoạn 2 — Implementation + Code Review (Bước 3-5)

Khánh triển khai feature theo quy trình:

- AI-driven development theo hướng dẫn tại [cyberk-ai-process.md](../../gitbook/solo-dev/how-to-be-a-cyberks-developer/cyberk-ai-process.md)
- Self-test theo [what-is-done.md](../../gitbook/solo-dev/how-to-be-a-cyberks-developer/what-is-done.md)
- Code review (Huy + AI)
- Thế Anh backup khi Khánh gặp block kỹ thuật (ghi nhận lại những lần cần backup)

**Đầu ra đánh giá:** Tốc độ deliver, chất lượng code, số lần cần backup Thế Anh

### Giai đoạn 3 — Deliver + Đánh giá Workflow (Bước 6)

- Deliver cho client qua Trường
- Huy tổng hợp kết quả đánh giá workflow:
  - Những bước nào hoạt động tốt?
  - Những bước nào tài liệu chưa đủ?
  - Những bước nào cần công cụ/tooling bổ sung?
  - Khánh tự đánh giá: workflow có đủ để follow độc lập không?

## 6. Rủi ro (Risks)

- *Rủi ro 1:* **Tài liệu workflow chưa đủ chi tiết** — Khánh không thể tự follow, phải hỏi Huy liên tục. → *Mitigation:* Ghi nhận mọi câu hỏi làm input cải thiện tài liệu. Thế Anh sẵn sàng backup coding.
- *Rủi ro 2:* **Rust backend phức tạp vượt năng lực 1 dev** — bottleneck kỹ thuật kéo dài. → *Mitigation:* Thế Anh backup ngay khi block > 1 ngày. Tracking số lần backup để đánh giá tính khả thi.
- *Rủi ro 3:* **Client phát hiện sự thay đổi** — chất lượng deliver giảm do thử nghiệm nội bộ. → *Mitigation:* Trường giữ communication ổn định. Nếu chất lượng có dấu hiệu giảm, chuyển về mô hình team ngay lập tức.

## 7. Status

`Chưa bắt đầu`

## 8. Liên kết (Related IPs)

- **→ [IP-011](./IP-011-doing.md):** Triển khai mô hình Solo-Dev — IP-018 là bài kiểm tra thực chiến đầu tiên
- **→ [IP-013](./IP-013-doing.md):** Đóng gói Phương pháp — kết quả IP-018 sẽ là input để cải thiện tài liệu
- **Workflow của Huy:** [cyberk-ai-process.md](../../gitbook/solo-dev/how-to-be-a-cyberks-developer/cyberk-ai-process.md)
- **America Fun Memory:** [memory.md](bidding/america-fun/proposal/memory)

## 9. Thực tế (Ghi chú/Dấu vết)

*(Chưa có — sẽ cập nhật khi bắt đầu triển khai)*
