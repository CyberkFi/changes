---
type: ip
tags: [broker, organization]
---

# IP-022: Broker Directory — Quản lý Danh sách & Chiến lược Broker

## 1. Mục tiêu (Objective)

Xây dựng hệ thống quản lý broker tập trung — mỗi broker có một file profile riêng (tương tự cách quản lý clients), lưu trữ thông tin, lịch sử hợp tác, chiến lược tiếp cận, và phân công việc. Đây là **"CRM cho broker"** của Cyberk.

## 2. Lý do (Why)

- **Hiện tại chỉ có 1 broker (Jon)** — thông tin nằm rải rác (finance/broker.md, không có profile). Khi scale lên 10 brokers, sẽ không thể quản lý bằng trí nhớ.
- **Thiếu chiến lược tiếp cận** — không có nơi nào ghi lại: broker tiềm năng là ai, tiếp cận khi nào, kết quả ra sao.
- **Thiếu task management** — không track được: broker nào cần follow-up, ai cần gửi Sales Kit, ai đang trong pipeline.
- **Clients có hệ thống, brokers thì không** — Cyberk quản lý clients bằng file .md (clients/), nhưng broker không có hệ thống tương đương.

## 3. Kết quả Then chốt (Key Results)

- [ ] **KR1:** Thư mục `/clients/brokers/` (hoặc `/bd/brokers/`) được tạo với cấu trúc chuẩn.
- [ ] **KR2:** Template broker profile hoàn chỉnh — đủ để capture toàn bộ thông tin cần thiết.
- [ ] **KR3:** Profile Jon (broker hiện tại) được tạo đầy đủ như mẫu tham khảo.
- [ ] **KR4:** Danh sách tối thiểu 10 broker tiềm năng được identify và tạo profile (dù chưa ký MOU).
- [ ] **KR5:** Mỗi broker profile có phần "chiến lược tiếp cận" và "next actions" được cập nhật hàng tuần.

## 4. Kế hoạch (Plan)

### Giai đoạn 1 — Thiết kế Cấu trúc

- Tạo thư mục `/bd/brokers/` hoặc mở rộng `/clients/` với tag `broker`.
- Thiết kế **Broker Profile Template** (file .md):

```markdown
---
type: broker
tags: [broker, {tên-broker}]
status: active | prospecting | inactive
tier: gold | silver | standard
---

# Broker Profile: {Tên}

## Thông tin Liên hệ
- **Tên:** 
- **Email:** 
- **Phone / WhatsApp:** 
- **LinkedIn:** 
- **Quốc gia:** 
- **Ngành / Network mạnh:** 

## Quan hệ Hợp tác
- **Ngày bắt đầu:** 
- **MOU đã ký:** Có/Không — link file
- **Commission rate thỏa thuận:** 
- **Passive income hết hạn:** {ngày + 2 năm}

## Thành tích
- **Tổng hợp đồng đã mang về:** $X
- **Tổng hoa hồng đã trả:** $X
- **Clients đã giới thiệu:** [danh sách]

## Pipeline hiện tại
| Lead | Trạng thái | Budget ước tính | Ghi chú |
|------|-----------|----------------|---------|
|      |           |                |         |

## Chiến lược Tiếp cận
- **Thế mạnh:** (VD: "Network mạnh ở Singapore Web3 scene")
- **Cách tiếp cận:** (VD: "Jon thích được cập nhật case study mới hàng tuần")
- **Điểm cần hỗ trợ:** (VD: "Cần help technical consultation cho enterprise leads")

## Next Actions
- [ ] {Action item 1} — deadline
- [ ] {Action item 2} — deadline

## Ghi chú / Lịch sử Tương tác
- **YYYY-MM-DD:** Nội dung ghi chú
```

### Giai đoạn 2 — Tạo Profile Jon (Mẫu tham khảo)

- Tạo profile đầy đủ cho Jon dựa trên data từ [broker.md](../../../finance/broker.md).
- Điền thành tích Q1/2026: $186K hợp đồng, $51.8K hoa hồng.
- Liệt kê tất cả clients Jon đã giới thiệu.
- Ghi chiến lược hợp tác hiện tại và next actions.

### Giai đoạn 3 — Identify Broker Tiềm năng

- Brainstorm danh sách 10-20 broker tiềm năng:
  - Từ network hiện tại của Anderson/CEO
  - Từ referral của Jon
  - Từ LinkedIn outreach
  - Từ cộng đồng Web3 meetup/event
- Tạo profile cho mỗi broker tiềm năng (status: `prospecting`).
- Ghi chiến lược tiếp cận cho từng người.

### Giai đoạn 4 — Quy trình Quản lý

- Thiết lập **Weekly Broker Review** — CEO dành 30 phút/tuần review:
  - Broker nào cần follow-up?
  - Lead nào cần support kỹ thuật?
  - Broker tiềm năng nào cần tiếp cận?
- Tạo **Aggregated Broker Dashboard** (1 file tổng hợp):
  - Overview: Tổng brokers active/prospecting/inactive
  - Pipeline value
  - Revenue by broker
  - Action items tuần này

## 5. Rủi ro (Risks)

- *Rủi ro 1:* **Không duy trì cập nhật** — Profile tạo xong rồi không ai update. → *Mitigation:* Gắn vào weekly review routine. AI có thể tự cập nhật nếu có trigger.
- *Rủi ro 2:* **Quá nhiều broker tiềm năng, ít broker thật** — tạo 20 profile nhưng chỉ 2 người thực sự hợp tác. → *Mitigation:* Focus vào chất lượng — 5 broker tiềm năng tốt hơn 20 broker random.
- *Rủi ro 3:* **Thông tin nhạy cảm** — Commission rates, pipeline data là thông tin business sensitive. → *Mitigation:* Giữ trong workspace private, không share link public.

## 6. Status

`To Do`

## 7. Liên kết (Related)

- **→ [S-002](../strategy/S-002-doing.md):** Chiến lược Broker Network
- **→ [IP-014](./IP-014-doing.md):** Broker Kit — Profile tracking ai đã onboard
- **→ [IP-020](./IP-020-doing.md):** Sales Kit — Track ai đã nhận Kit
- **Clients Directory:** [/clients/](../../../clients/) — mô hình tham khảo
- **Jon Broker Data:** [broker.md](../../../finance/broker.md)

## 8. Thực tế (Ghi chú/Dấu vết)

*(Chưa có — sẽ cập nhật khi bắt đầu triển khai)*
