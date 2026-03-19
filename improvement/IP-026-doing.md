---
type: improvement-plan
tags: [cyberk-way, website, marketing, capabilities, seo, agentic, about-us]
status: doing
priority: high
created: 2026-03-17
---

# IP-026: Mở rộng Website — Capabilities Pages & How We Build

## 1. Mục tiêu

Mở rộng website cyberk.io với các trang mới: 3 **Capability pages** (Agentic Development, Smart Contract Development, Blockchain Development), 1 trang **About Us** (Cyberk Way), và 1 trang **How We Build**. Mục tiêu: tăng organic traffic qua SEO, xây dựng trust với khách hàng tiềm năng, và tạo funnel dẫn vào Service pages.

## 2. Lý do (Tại sao)

- **Thiếu đầu vào organic traffic:** Website hiện tại chỉ có Service pages (Product Design, Product Build, Tech Labs). Khách hàng search trên Google "smart contract development company" hay "ai agent development" sẽ KHÔNG tìm thấy Cyberk — vì không có trang nào target các keyword này.
- **Capabilities ≠ Services:** Services trả lời "mua gì, bao nhiêu tiền". Capabilities trả lời "tại sao tin Cyberk". Hiện website thiếu phần trust-building này — đặc biệt quan trọng khi Cyberk đang đẩy mạnh Agentic Development (hướng đi mới, khách hàng cần nhiều bằng chứng hơn).
- **SEO opportunity:** "smart contract development" (~5K searches/tháng), "ai agent development" (keyword đang tăng mạnh), "blockchain development services" (~3K searches/tháng) — đều có intent mua dịch vụ. Mỗi capability page = 1 cửa vào mới cho khách hàng tiềm năng.
- **Agentic Development là differentiator:** Cyberk có 5 dự án AI thực tế (Relmo, Skin Agent, VisibleBrands, MemoryOS, internal tools), có Agentic Framework riêng, có deck sẵn. Nhưng chưa có trang nào trên website thể hiện năng lực này → cơ hội bị bỏ lỡ.
- **UX/UI Design cần nơi showcase:** Design không đủ mạnh để có trang Capability riêng, nhưng cần visible. Trang "How We Build" giải quyết vấn đề này — showcase design trong context quy trình tổng thể.

## 3. Key Results (Kết quả cần đạt)

- **KR1:** 5 trang mới live trên cyberk.io — 3 capabilities + about us + how we build.
- **KR2:** Navigation cập nhật, cross-linking giữa tất cả trang hoạt động.
- **KR3:** Sitemap mới submit Google Search Console.

## 4. Content đã chuẩn bị

| Trang | File |
|-------|------|
| Agentic Development | `marketing/capabilities/agentic-development.md` |
| Blockchain Development | `marketing/capabilities/blockchain-development.md` |
| Smart Contract Development | `marketing/capabilities/smart-contract-development.md` |
| About Us | `marketing/website/about-us.md` |
| How We Build | ⬜ chưa viết |

Mỗi file có ghi chú nội bộ cuối trang: visual assets cần thiết, cross-linking, SEO meta.

## 5. Risks (Rủi ro & Biện pháp)

- *Rủi ro 1:* **Thin content — page không đủ sâu, Google không rank.** -> *Mitigation:* Content đã hoàn tất cho 4/5 trang, mỗi trang >1000 từ. CEO đã review chiến lược.
- *Rủi ro 2:* **Designer bandwidth.** Nhiều visual assets cần chuẩn bị (12+ items). -> *Mitigation:* Chia P1/P2. P1 assets phải xong trước 25/03. P2 có thể bổ sung sau deploy.
- *Rủi ro 3:* **Dev bandwidth — 5 trang mới + cross-linking.** -> *Mitigation:* Các trang có cấu trúc tương tự nhau. Có thể dùng template chung. Phase 4 có 5 ngày buffer.
- *Rủi ro 4:* **Permission sử dụng tên client.** Relmo, Skin Agent, VisibleBrands có cho phép Cyberk dùng tên họ trên website không? -> *Mitigation:* Confirm permission trước khi publish. Nếu chưa có permission, dùng mô tả ẩn danh.
- *Rủi ro 5:* **Timeline tight — 13 ngày còn lại.** -> *Mitigation:* Content gần xong (4/5). Design và Code chạy song song từ 20/03. Cross-linking cuối cùng.

## 6. Phân công

| Bộ phận | Task ID | Mô tả | Deadline | Status |
|---------|---------|-------|----------|--------|
| **CEO** | IP-026-CEO | Review content + viết How We Build + code 5 trang + cross-linking + sitemap. | 28/03 | ⬜ |
| **DES** | IP-026-DES | Visual assets cho 5 trang. Xem ghi chú cuối mỗi content file. | 25/03 | ⬜ |
| **MKT** | IP-026-MKT | Review website sau khi deploy. Kiểm tra nội dung, links, SEO. | 31/03 | ⬜ |

## 7. Status

`Đang triển khai — content 4/5 trang hoàn thành`

## 8. Liên kết

- [[cyberk-service-discussion]] — Thảo luận chiến lược dịch vụ (nền tảng cho Capabilities)
- [[cyberk-agentic]] — Chiến lược Agentic AI (input chính cho Agentic Development page)
- [[IP-023-doing]] — IP-023: Triển khai Service pages (IP liên quan — cross-linking)
- [[IP-024-doing]] — IP-024: Triết lý Thiết kế Software (content bổ trợ)
- `bd/decks/agentic-development-deck.md` — Agentic Development Deck (input cho content)
- `marketing/website/cyberk-website-content-plan.md` — Content Plan chi tiết cho website
- `gitbook/services/product-design.md` — Service page cần cross-link
- `gitbook/services/product-build.md` — Service page cần cross-link
- `gitbook/services/tech-labs.md` — Service page cần cross-link

## 9. Thực tế (Ghi chú/Dấu vết)

- **2026-03-17:** Tạo IP. Content plan chi tiết hoàn tất (`marketing/website/cyberk-website-content-plan.md`). Cấu trúc website mới đã được thống nhất: 3 Capability pages + 1 How We Build page.
- **2026-03-18:** Hoàn thành content cho 4 trang:
  - `marketing/capabilities/blockchain-development.md` — content 1300+ từ, show don't tell, 40+ projects, 12+ chains, 7 languages
  - `marketing/capabilities/smart-contract-development.md` — content 1500+ từ, 20+ standards (ERC-20 → ERC-8183, x402), 7 languages, architecture examples
  - `marketing/website/about-us.md` — Cyberk Way page (trang About Us viết về triết lý, không generic). 4 values + 3 bí quyết + CTO mindset. Thêm vào scope (không nằm trong plan gốc).
  - Trang `agentic-development.md` đã có sẵn từ trước.
  - Tất cả content đã được review: sentence case, tone authentic, tránh AI-generated vibes.
  - Bỏ yếu tố Solo Dev khỏi about-us.md (đang thử nghiệm, chưa public).
  - Còn lại: How We Build content.
