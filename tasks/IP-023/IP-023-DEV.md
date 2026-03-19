---
type: task
tags: [task, dev]
source: IP-023
department: DEV
status: todo
priority: high
created: 2026-03-14
deadline: 2026-04-07
---

# IP-023-DEV: Cập nhật Website & Thiết lập Quy trình Product Build

## Mục tiêu

Code và cập nhật website pages trên cyberk.io cho 3 dịch vụ đã tái cấu trúc, thay thế các trang service cũ. Thiết lập quy trình kỹ thuật cho Product Build.

## Việc cần làm

### 1. Website Development (sau khi DES hoàn thành Figma)

- [ ] Code trang **Services Overview** (HTML/CSS, responsive)
- [ ] Code trang **Product Design**
- [ ] Code trang **Product Build**
- [ ] Code trang **Tech Labs**
- [ ] Tích hợp SEO on-page (phối hợp MKT)
- [ ] Deploy lên Cloudflare Pages
- [ ] Test cross-browser & responsive

### 2. Quy trình Product Build (theo scope template từ BST)

- [ ] Áp dụng scope template cho Product Build $29K (nhận từ **BST**)
- [ ] Checklist delivery cho mỗi gói (Basic vs Pro)
- [ ] Quy trình monitoring system setup (15 ngày / 30 ngày)
- [ ] Template báo cáo & đo lường hệ thống (cho gói Pro)
- [ ] Quy trình xử lý requirement changes: add-on quote → hoặc chuyển Tech Labs

### 3. Quy trình Product Design (phần kỹ thuật)

- [ ] Quy trình code landing page cho gói Professional ($7K) — dùng template từ **BST**
- [ ] Quy trình deploy & bàn giao landing page cho khách hàng

### 4. Đào tạo Nội bộ

- [ ] Team hiểu sự khác biệt: dịch vụ cũ (MVP Dev, Tech Labs) vs dịch vụ tái cấu trúc
- [ ] Team hiểu quy trình Product Build 30 ngày: sprint planning → dev → QA → deploy → monitoring
- [ ] Team hiểu revision policy: 2 vòng revision included, vòng 3+ báo giá add-on

## Phối hợp

- Nhận Figma từ **DES** trước khi code website
- Nhận scope templates + landing page template từ **BST**
- Phối hợp **MKT** cho SEO on-page
- Phối hợp **QA** cho testing website + quy trình QA trong Product Build

## Tài liệu tham khảo

- Service descriptions: `gitbook/services/product-design.md`, `product-build.md`, `tech-labs.md`
- Website hiện tại: cyberk.io (static, Cloudflare Pages)
- Cyberk Framework documentation
