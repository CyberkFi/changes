---
type: task
tags: [task, qa]
source: IP-023
department: QA
status: todo
priority: medium
created: 2026-03-14
deadline: 2026-04-07
---

# IP-023-QA: Kiểm thử Website & Xây dựng QA Checklist cho Dịch vụ Tái cấu trúc

## Mục tiêu

Đảm bảo chất lượng website service pages tái cấu trúc và xây dựng checklist QA cho quy trình delivery của Product Design & Product Build (dựa trên scope templates từ **BST**).

## Việc cần làm

### 1. Kiểm thử Website Service Pages

- [ ] Test responsive trên Desktop / Mobile / Tablet
- [ ] Test cross-browser (Chrome, Safari, Firefox, Edge)
- [ ] Test links, buttons, CTAs — đặc biệt contact/pricing links
- [ ] Test loading speed (target: < 3 giây)
- [ ] Test SEO elements (title, meta description, headings, alt text)
- [ ] Review nội dung — typo, sai giá, sai thông tin

### 2. Review Service Descriptions

- [ ] Cross-check pricing nhất quán giữa website / service docs / sales deck
- [ ] Cross-check deliverables: mô tả trên web khớp với service page markdown
- [ ] Phát hiện mâu thuẫn hoặc ambiguity trong FAQ

### 3. QA Checklist cho Product Build Delivery

- [ ] Checklist trước khi bàn giao sản phẩm cho khách hàng:
  - Functional testing (features hoạt động đúng)
  - Smart contract testing (nếu Web3)
  - Performance testing (load, stress)
  - Security review cơ bản
  - Cross-browser / responsive
  - Deploy verification
- [ ] Template bug report cho giai đoạn monitoring (15/30 ngày)
- [ ] Definition of "revision round" — khi nào tính là 1 revision?

### 4. QA Checklist cho Product Design Delivery

- [ ] Checklist trước khi giao design cho khách:
  - Figma file organized + clean
  - Component library có đủ
  - Responsive variants có đủ
  - Developer handoff specs
  - Landing page (gói Pro) — functional test
- [ ] Review quy trình bàn giao design → dev (internal handoff)

### 5. Đào tạo & Nắm bắt Dịch vụ Mới

- [ ] Hiểu rõ scope từng gói (nhận scope template từ **BST**) để biết IN scope vs OUT scope khi test
- [ ] Hiểu sự khác biệt: dịch vụ cũ (MVP Dev) vs dịch vụ tái cấu trúc (Product Build)
- [ ] Hiểu revision policy: 2 rounds included = QA cần test kỹ trước round 1

## Phối hợp

- Phối hợp **DEV** cho testing website pages
- Phối hợp **DES** cho review design deliverables
- Checklist cần CEO approve trước khi áp dụng

## Tài liệu tham khảo

- Service descriptions: `gitbook/services/product-design.md`, `product-build.md`, `tech-labs.md`
- Website: cyberk.io
