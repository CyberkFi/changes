---
type: ip
tags: [marketing, automation]
---

# IP-015: Cyberk.io Static Website Migration

## 1. Mục tiêu (Objective)

Migrate website cyberk.io từ Next.js/React stack phức tạp sang pure static HTML/CSS — tối ưu tốc độ, SEO, và đơn giản hóa vận hành. Tạo skill `html-pure` để chuẩn hóa quy trình xây dựng static website.

## 2. Lý do (Why)

- **Tốc độ & Đơn giản:** Website dựa trên framework JS (Next.js, React) mang theo bundle size lớn, hydration overhead và phức tạp trong vận hành. Pure HTML tĩnh cho tốc độ tải trang gần như tức thì, zero JavaScript bugs, và SEO tối ưu ngay từ đầu.
- **Loại bỏ Database — Loại bỏ Rủi ro:** Khi nội dung được lưu trữ dưới dạng file HTML trong git repo, không còn rủi ro database crash, migration lỗi, hay chi phí hosting database. Mỗi bài viết là một commit — có version history miễn phí, rollback dễ dàng.
- **AI-Driven Content tại quy mô nhỏ:** Cyberk là team nhỏ. Thay vì thuê content writer hoặc dùng CMS nặng nề, hệ thống này biến Anderson thành "editor-in-chief" với AI là co-writer — tăng output mà không tăng headcount.
- **Dữ liệu chủ động thay vì bị động:** Kết nối GA + Search Console cho phép AI chủ động phân tích và báo cáo, thay vì chờ người đi kiểm tra dashboard thủ công. Từ đó đưa ra quyết định content dựa trên data thật.

## 3. Kết quả Then chốt (Key Results)

- [x] **KR1:** Skill `html-pure` tạo tại `cyberk-skills/skills/html-pure/` — chuẩn hóa quy trình xây dựng static website (references, templates, design system).
- [x] **KR2:** Website tĩnh hoàn chỉnh tại `cyberk-io-static/` — 23+ trang HTML (index, about, services, blog, 15 blog posts), 27KB CSS, 1.2KB JS, dark theme.
- [x] **KR3:** Pipeline deploy cấu hình sẵn — GitHub Actions + Cloudflare Pages (`deploy.yml`, `_redirects`).
- [x] **KR4:** SEO đầy đủ — meta tags, Open Graph, structured data JSON-LD, `sitemap.xml`, `robots.txt`, Google Analytics `G-K8ZNFPQZPN`.
- [ ] ~~**KR5:** Content Engine & Analytics Reporting~~ → Chuyển sang **[IP-016](./IP-016-doing.md)**

## 4. Kế hoạch (Plan)

1. **Giai đoạn 1 — Nền tảng (Foundation):** ✅
   - Tạo skill `html-pure` với references, templates, design system.
   - Thiết kế base HTML template & CSS design system (responsive, dark theme).
   - Chọn hosting: Cloudflare Pages.

2. **Giai đoạn 2 — Static Site Migration:** ✅
   - Migrate toàn bộ trang từ Next.js sang pure HTML/CSS.
   - Scrape & generate 15 blog posts từ Strapi CMS.
   - Scrape 29 reviews từ Clutch.co → marquee component.
   - Tích hợp SEO metadata (meta tags, Open Graph, structured data, sitemap).

3. **Giai đoạn 3 — Deploy Pipeline:** ✅
   - GitHub Actions workflow (`deploy.yml`) → Cloudflare Pages.
   - Google Analytics tracking trên toàn bộ pages.
   - Dark theme header + footer + hero section theo SVG design mới.

> **Giai đoạn 4 & 5** (Content Engine + Analytics Reporting) đã tách thành **[IP-016](./IP-016-doing.md)**.

## 5. Rủi ro (Risks)

- *Rủi ro 1:* **Git repo phình to** khi số lượng bài viết tăng → *Mitigation:* Assets đã được tối ưu, Git LFS cho media nặng.
- *Rủi ro 2:* **Responsive hỏng trên một số thiết bị** → *Mitigation:* Đã test E2E trên mobile 375px, fix layout issues cho marquee/cards/stats.

## 6. Status

`Hoàn thành` ✅ — 07/03/2026

## 7. Liên kết (Related IPs)

- **→ [IP-016](./IP-016-doing.md):** Content Engine & Analytics Reporting (tách từ giai đoạn 4 & 5 của IP-015)

## 8. Thực tế (Ghi chú/Dấu vết)

- **07/03/2026 — Phase 1 hoàn thành:**
  - Skill `html-pure` tạo tại `cyberk-skills/skills/html-pure/`
  - Website tĩnh tại `cyberk-io-static/` — 13 trang HTML, 27KB CSS, 1.2KB JS
  - Nhật ký triển khai: `internal-ws/diary/IP-015.md`
- **07/03/2026 — Phase 2 & 3 hoàn thành:**
  - 15 blog posts scrape & generate từ Strapi CMS
  - 29 Clutch reviews → testimonial marquee
  - Dark theme (header, hero, footer) theo SVG design mới
  - Xóa Case Studies section, cập nhật nav toàn site
  - Google Analytics tích hợp toàn bộ 23+ pages
  - GitHub Actions + Cloudflare Pages pipeline sẵn sàng
  - **Giai đoạn 4 & 5 tách thành [IP-016](./IP-016-doing.md)**
