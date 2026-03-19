---
type: ip
tags: [legal, broker]
---

# IP-021: Agreement Kit — Bộ văn bản Pháp lý Kick-off Dự án

## 1. Mục tiêu (Objective)

Hoàn thiện bộ paperwork chuẩn hóa cần thiết để kick-off bất kỳ dự án nào với khách hàng — bao gồm MSA, NDA, và ODC Agreement. Mục tiêu: **mọi paperwork cần thiết phải sẵn sàng để ký trong vòng 24 giờ** khi có deal mới.

## 2. Lý do (Why)

- **Paperwork chậm = mất deal:** Broker giới thiệu khách, khách muốn bắt đầu, nhưng phải chờ 1-2 tuần để Cyberk soạn hợp đồng → khách mất kiên nhẫn hoặc chọn vendor khác.
- **Thiếu chuẩn hóa:** Mỗi dự án lại soạn MSA/NDA khác nhau, tốn thời gian CEO review. Cần template chuẩn chỉ cần fill thông tin.
- **ODC chưa có template:** Mô hình ODC (Offshore Development Center) ngày càng phổ biến nhưng Cyberk chưa có agreement template cho mô hình này.
- **Broker cần tự tin:** Khi broker biết Cyberk có bộ agreement chuyên nghiệp sẵn sàng, họ tự tin hơn khi pitch cho enterprise clients.

## 3. Kết quả Then chốt (Key Results)

- [ ] **KR1:** MSA (Master Service Agreement) template chuẩn — sẵn sàng ký, chỉ cần điền tên client + scope.
- [ ] **KR2:** NDA (Non-Disclosure Agreement) template chuẩn — cho cả 2 chiều (Cyberk ↔ Client).
- [ ] **KR3:** ODC Agreement template — cho mô hình Offshore Dev Center / dedicated team.
- [ ] **KR4:** Tất cả templates có sẵn bản PDF exportable + bản Markdown editable.
- [ ] **KR5:** Thời gian từ "deal confirmed" → "agreement signed" < 48 giờ.

## 4. Kế hoạch (Plan)

### Giai đoạn 1 — Audit Agreement hiện tại

- Review các agreement template đang có tại [/bd/agreements/](../../../bd/agreements/):
  - [MSA.md](../../../bd/agreements/MSA.md) — Kiểm tra đầy đủ, cập nhật
  - [PARTNER-Cyberk-NDA.md](../../../bd/agreements/PARTNER-Cyberk-NDA.md) — Kiểm tra, tách ra NDA cho client
  - [Partner-Cyberk-MSA.md](../../../bd/agreements/Partner-Cyberk-MSA.md) — Kiểm tra
- Xác định gap: Điều khoản nào thiếu? Clause nào cần update cho 2026?

### Giai đoạn 2 — Chuẩn hóa MSA

- Cập nhật MSA template:
  - Scope of Work section (modular — dễ customize)
  - Payment terms (milestone-based + retainer options)
  - Warranty period (7 ngày — đã được cập nhật cho Relmo)
  - IP ownership clause
  - Confidentiality clause (hoặc reference NDA riêng)
  - Termination clause
  - Dispute resolution
- Tạo **MSA Appendix template** cho từng loại service:
  - Appendix A: MVP Development
  - Appendix B: Tech Lab / Retainer
  - Appendix C: ODC / Dedicated Team

### Giai đoạn 3 — Tạo NDA Template

- Tạo **Mutual NDA** (2 chiều) — Cyberk và Client cùng bảo mật.
- Tạo **One-way NDA** — Client yêu cầu Cyberk bảo mật (phổ biến hơn).
- Đảm bảo tương thích với luật pháp Singapore, USA, Vietnam.

### Giai đoạn 4 — Tạo ODC Agreement Template

- Soạn thảo **ODC Agreement** cho mô hình Offshore Dev Center:
  - Dedicated team definition (roles, headcount, working hours)
  - Management structure (client PM ↔ Cyberk team lead)
  - Billing model (monthly retainer, per-FTE pricing)
  - Performance metrics & SLA
  - Knowledge transfer & ramp-up period
  - Security & compliance requirements
  - Exit strategy & knowledge handover

### Giai đoạn 5 — Packaging & Workflow

- Export tất cả templates sang PDF chuyên nghiệp.
- Tạo **Agreement Selection Guide** — flowchart: loại dự án nào → dùng agreement nào.
- Cập nhật [agreements-creator.md](../../../bd/workflows/agreements-creator.md) workflow.
- Tạo quy trình DocuSign integration (nếu cần).

## 5. Rủi ro (Risks)

- *Rủi ro 1:* **Pháp lý cross-border phức tạp** — client Singapore/US có yêu cầu pháp lý khác nhau. → *Mitigation:* Tạo template base, có các clause tùy chọn theo jurisdiction. Consult luật sư nếu cần.
- *Rủi ro 2:* **Template quá cứng nhắc** — không accommodate được deal đặc biệt. → *Mitigation:* Thiết kế modular — core terms cố định, appendix linh hoạt.
- *Rủi ro 3:* **Tốn thời gian soạn thảo ban đầu** — cần CEO review kỹ lưỡng. → *Mitigation:* Ưu tiên MSA trước (dùng nhiều nhất), NDA và ODC sau.

## 6. Status

`To Do`

## 7. Liên kết (Related)

- **→ [S-002](../strategy/S-002-doing.md):** Chiến lược Broker Network
- **→ [IP-014](./IP-014-doing.md):** Broker Kit — broker cần Agreement Kit khi onboard client
- **→ [IP-020](./IP-020-doing.md):** Sales Kit — Sales Kit dẫn tới deal → cần Agreement Kit để close
- **Agreement Templates:** [/bd/agreements/](../../../bd/agreements/)
- **Active Agreements:** [/bd/active-agreements/](../../../bd/active-agreements/)
- **BD Workflows:** [/bd/workflows/](../../../bd/workflows/)

## 8. Thực tế (Ghi chú/Dấu vết)

*(Chưa có — sẽ cập nhật khi bắt đầu triển khai)*
