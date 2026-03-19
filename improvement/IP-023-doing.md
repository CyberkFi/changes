---
type: improvement-plan
tags: [cyberk-way, service, marketing, strategy]
status: doing
priority: high
created: 2026-03-14
---

# IP-023: Tái Cấu Trúc Dịch vụ — Service Pages trên Website

## 1. Mục tiêu

Cập nhật 3 service pages trên cyberk.io (Product Design, Product Build, Tech Labs) thay thế catalog cũ, với pricing chuẩn hóa, FAQ, và case studies. Đây là bước thực thi đầu tiên của chiến lược tái cấu trúc dịch vụ.

## 2. Lý do (Tại sao)

- **Catalog cũ không phản ánh giá trị thực:** Dịch vụ cũ (MVP Development, Tech Labs, Kick-starter Marketing, Community Development) bán theo năng lực thay vì kết quả. Khách hàng nhìn vào thấy agency, không thấy partner.
- **Cần chuẩn hóa pricing:** Cyberk hiện báo giá ad-hoc. Cần fixed-price để broker/sales bán được mà không cần CEO tham gia mọi deal.
- **Tạo sales funnel rõ ràng:** Product Design ($5K–$8K) → Product Build ($29K–$35K) → Tech Labs (retainer).
- **Chiến lược đã hoàn tất:** Quá trình thảo luận ([[cyberk-service-discussion]]) đã xong. Bước tiếp theo là thực thi.

## 3. Key Results (Kết quả cần đạt)

- *Kết quả 1:* 3 service pages (Product Design, Product Build, Tech Labs) publish trên cyberk.io với pricing, FAQ, case studies.
- *Kết quả 2:* Homepage cập nhật navigation và service catalog mới, thay thế hoàn toàn catalog cũ.
- *Kết quả 3:* SEO meta tags tối ưu cho tất cả service pages mới.

## 4. Plans (Kế hoạch hành động)

1. **CEO review nội dung:**
    * Review service descriptions đã viết (Product Design, Product Build, Tech Labs)
    * Xác nhận pricing — kiểm tra margin, so sánh thị trường
    * Xác nhận scope template cho Product Build $29K
    * Approve nội dung trước khi chuyển Design
2. **Design visual assets:**
    * Thiết kế Figma cho 3 service pages (responsive)
    * Visual assets: banner, infographic bảng giá, so sánh tiers
3. **Content SEO:**
    * Viết SEO meta tags cho 3 service pages mới
    * Viết FAQ section cho mỗi service
4. **Code & deploy:**
    * Code 3 service pages mới (HTML/CSS, responsive)
    * Cập nhật homepage navigation
    * Deploy lên Cloudflare Pages
5. **QA testing:**
    * Test responsive, cross-browser
    * Cross-check pricing giữa website, docs, và service specs

## 5. Risks (Rủi ro & Biện pháp)

- *Rủi ro 1:* **Pricing không cạnh tranh** — Giá quá cao/thấp so với thị trường. -> *Mitigation:* Benchmark với 3–5 đối thủ trước khi publish. Review sau 3 tháng.
- *Rủi ro 2:* **Khách hàng cũ confuse** — Không hiểu sự thay đổi từ catalog cũ sang mới. -> *Mitigation:* Gửi thông báo cá nhân (xử lý ở IP riêng).

## 6. Kế hoạch triển khai (Execution Plan)

  | Task | Bộ phận | Mô tả | Deadline | Phụ thuộc | Trạng thái |
  |------|---------|-------|----------|-----------|------------|
  | IP-023-CEO | `CEO` | Review & approve nội dung service descriptions, pricing, scope | 2026-03-21 | — | `doing` |
  | IP-023-BST | `BST` | Viết scope template Product Build $29K + case studies kỹ thuật | 2026-03-24 | IP-023-CEO | `todo` |
  | IP-023-DES | `DES` | Thiết kế Figma 3 service pages + visual assets (responsive) | 2026-03-28 | IP-023-CEO | `todo` |
  | IP-023-MKT | `MKT` | Viết SEO meta tags + FAQ cho 3 service pages | 2026-03-28 | IP-023-CEO | `todo` |
  | IP-023-DEV | `DEV` | Code 3 service pages + homepage update, deploy Cloudflare | 2026-04-04 | IP-023-DES, IP-023-MKT | `todo` |
  | IP-023-QA | `QA` | Test responsive, cross-browser, cross-check pricing accuracy | 2026-04-07 | IP-023-DEV | `todo` |

## 7. Lịch theo dõi — Schedule Follow-up (AI via Telegram)

  | Ngày | Loại | Phòng ban | Hành động | Cập nhật |
  |------|------|-----------|-----------|----------|
  | 17/03 | 📌 Giao việc | `CEO` | Giao IP-023-CEO: Review service descriptions, pricing, scope | IP-023-CEO → `doing` |
  | 21/03 | ⏰ Kiểm tra | `CEO` | Thu kết quả review → Giao IP-023-BST, IP-023-DES, IP-023-MKT | IP-023-CEO → `done` |
  | 21/03 | 📌 Giao việc | `BST` | Giao IP-023-BST: Scope template + case studies | IP-023-BST → `doing` |
  | 21/03 | 📌 Giao việc | `DES` | Giao IP-023-DES: Thiết kế Figma 3 pages | IP-023-DES → `doing` |
  | 21/03 | 📌 Giao việc | `MKT` | Giao IP-023-MKT: SEO meta + FAQ | IP-023-MKT → `doing` |
  | 27/03 | ⏰ Kiểm tra | `BST` | Kiểm tra scope template + case studies | IP-023-BST → `done` |
  | 27/03 | ⏰ Kiểm tra | `DES` | Kiểm tra Figma → Giao IP-023-DEV | IP-023-DES → `done` |
  | 27/03 | ⏰ Kiểm tra | `MKT` | Kiểm tra SEO + FAQ → Giao IP-023-DEV | IP-023-MKT → `done` |
  | 28/03 | 📌 Giao việc | `DEV` | Giao IP-023-DEV: Code 3 pages + homepage + deploy | IP-023-DEV → `doing` |
  | 03/04 | ⏰ Kiểm tra | `DEV` | Kiểm tra code → Giao IP-023-QA | IP-023-DEV → `done` |
  | 04/04 | 📌 Giao việc | `QA` | Giao IP-023-QA: Test responsive + pricing accuracy | IP-023-QA → `doing` |
  | 07/04 | ⏰ Kiểm tra | `QA` | Thu kết quả test | IP-023-QA → `done` |
  | 07/04 | ✅ Review | `CEO` | Tổng hợp + báo cáo. Deploy production. | Cập nhật Status IP |

## 8. Status

`Đang triển khai` — CEO đang review service descriptions (IP-023-CEO).

## 9. Liên kết

- [[cyberk-service-discussion]] — Quá trình thảo luận chiến lược dịch vụ
- [[product-design]] — Service page: Product Design
- [[product-build]] — Service page: Product Build
- [[tech-labs]] — Service page: Tech Labs
- [[IP-020-doing]] — Broker Sales Kit
- [[2026-plans]] — Kế hoạch chiến lược 2026

## 10. Thực tế (Ghi chú/Dấu vết)

- **2026-03-14:** Tạo IP. Service descriptions draft hoàn tất cho Product Design và Product Build.
- **2026-03-16:** Đã sử dụng service specs thành công trong proposal MemoryOS (Product Build Pro + Product Design AIO).
- **2026-03-17:** Cập nhật IP — reframe từ "triển khai mới" sang "tái cấu trúc" dịch vụ hiện có. Mapping: MVP Development → Product Build, Tech Labs giữ nguyên, Kick-starter Marketing + Community Dev → gộp vào Product Design AIO. Tech Labs service description hoàn tất.
- **2026-03-17:** Tái cấu trúc IP theo workflow mới. Thu hẹp scope về service pages trên website. Các scope khác (sales deck, đào tạo nội bộ, quảng bá, thông báo khách hàng) tách thành IP riêng.
