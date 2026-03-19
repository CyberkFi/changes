---
type: improvement-plan
tags: [cyberk-way, philosophy, software-design, gitbook]
status: todo
priority: high
created: 2026-03-15
---

# IP-024: Viết Bài Triết lý Thiết kế Software của Cyberk

## 1. Mục tiêu

Viết một bài viết chất lượng trên Gitbook, trình bày **Triết lý Thiết kế Software** của Cyberk. Bài viết hướng tới khách hàng (builders, startup founders, VCs), giúp họ hiểu được cách tiếp cận kỹ thuật của Cyberk và tại sao nó phù hợp với nhu cầu của họ.

## 2. Lý do (Tại sao)

- **Thiếu thought leadership content:** Cyberk có expertise về serverless, scalable architecture nhưng chưa có bài viết nào truyền tải điều này cho khách hàng. Competitor có blog/whitepaper → Cyberk cần tương đương hoặc tốt hơn.
- **Hỗ trợ bán hàng:** Khi khách hàng đọc được triết lý thiết kế, họ hiểu Cyberk và họ chọn Cyberk vì nhưng giá trị mà Cyberk mang lại cho sản phẩm của họ chứ không đơn thuần là "mua một team dev"
- **Chân dung khách hàng phù hợp:** Từ [[handbook]], khách hàng mục tiêu là Web3 Builders — cần ship nhanh, scale tức thì, chi phí thấp khi chưa có users. Triết lý Cyberk giải quyết đúng 3 nhu cầu này.

## 3. Key Results (Kết quả cần đạt)

- *Kết quả 1:* Bài viết 1500–2500 từ publish trên `gitbook/handbook/software-design-philosophy.md`, bằng tiếng Anh.
- *Kết quả 2:* Ít nhất 3 diagrams minh họa (kiến trúc serverless, so sánh cost, multi-region deployment).
- *Kết quả 3:* Bài viết được link từ các service pages (Product Build, Tech Labs) làm tài liệu tham khảo.
- *Kết quả 4:* Phiên bản tiếng Việt song song (nếu cần).

## 4. Plans (Kế hoạch hành động)

1. **Phase 1 — Research & Outline:**
    - Đọc lại [[handbook]] (bí quyết "Dĩ bất biến, ứng vạn biến")
    - Tổng hợp kinh nghiệm thực tế từ các dự án đã triển khai serverless
    - Viết outline chi tiết với 4 pillars: Serverless-First, Near-Zero Cost, Multi-Region, Cyberk Framework
2. **Phase 2 — Viết bài:**
    - Viết nội dung chính cho từng pillar:
        - **Serverless-First Architecture:** Scale 0 → 100K users, không cần DevOps team, auto-scaling
        - **Near-Zero Cost:** Pay-per-use model, so sánh traditional ($200–500/mo) vs serverless (gần $0)
        - **Multi-Region Deployment:** Go-global bằng configuration, Infrastructure-as-Code
        - **Cyberk Framework:** Nền tảng sẵn sàng, mỗi dự án mới không bắt đầu từ 0
    - Viết bằng tone: chuyên nghiệp, dễ hiểu, hướng tới khách hàng — không quá kỹ thuật
3. **Phase 3 — Visual & Diagrams:**
    - Tạo diagram kiến trúc serverless (Lambda, API Gateway, S3, DynamoDB)
    - Tạo infographic so sánh cost (traditional vs serverless)
    - Tạo minh hoạ multi-region deployment map
4. **Phase 4 — Review & Publish:**
    - Review nội bộ (dev team + BD team)
    - Publish lên Gitbook
    - Link từ service pages (Product Build, Tech Labs)

## 5. Risks (Rủi ro & Biện pháp)

- *Rủi ro 1:* **Bài viết quá kỹ thuật** — Khách hàng (founders/VCs) không hiểu, mất hứng đọc. -> *Mitigation:* Luôn mở đầu mỗi section bằng ngôn ngữ kinh doanh ("Bạn tiết kiệm $X/tháng"), rồi mới giải thích kỹ thuật phía dưới. Nhờ non-tech reviewer đọc trước khi publish.
- *Rủi ro 2:* **Không có ví dụ thực tế thuyết phục** — Nói lý thuyết mà thiếu case study. -> *Mitigation:* Lấy ít nhất 2 dự án thực tế của Cyberk làm minh chứng (ví dụ: dự án X scale từ 0→50K users với chi phí $Y/tháng).
- *Rủi ro 3:* **Bài viết bị trì hoãn** — Priority thấp hơn so với delivery dự án. -> *Mitigation:* Assign task rõ ràng (DEV-002), deadline cụ thể. Chia nhỏ thành các phần viết được trong 1–2 giờ.

## 6. Status

`Chưa bắt đầu`

## 7. Phân công

| Bộ phận | Task | Mô tả |
|---------|------|-------|
| **DEV** | DEV-002 | Viết bài chính, bao gồm nội dung kỹ thuật, diagrams, ví dụ thực tế |

## 8. Liên kết

- [[handbook]] — The Cyberk Way (chân dung khách hàng, sứ mệnh, bí quyết)
- [[product-build]] — Service page: Product Build
- [[cyberk-service-discussion]] — Thảo luận chiến lược dịch vụ
- [[2026-plans]] — Kế hoạch chiến lược 2026

## 9. Thực tế (Ghi chú/Dấu vết)

*(Chưa có — sẽ cập nhật khi bắt đầu triển khai)*
