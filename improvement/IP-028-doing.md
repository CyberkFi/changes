---
type: improvement-plan
tags: [cyberk-way, agentic, ai, agent-engineering, gitbook, thought-leadership]
status: doing
priority: high
created: 2026-03-18
deadline: 2026-03-22
---

# IP-028: Viết Bài Cách Cyberk Xây dựng Hệ thống Agentic

## 1. Mục tiêu

Huy (CTO) viết một bài viết chất lượng trên Gitbook, chia sẻ **cách Cyberk xây dựng hệ thống Agentic AI** — từ tư duy kiến trúc, quyết định kỹ thuật, đến bài học thực chiến qua 5 dự án production. Bài viết hướng tới cả nội bộ (nâng cao năng lực team) và bên ngoài (khách hàng, đối tác, cộng đồng kỹ thuật).

## 2. Lý do (Tại sao)

- **Cyberk có kinh nghiệm thực chiến quý giá nhưng chưa hệ thống hóa:** 5 dự án AI production (Relmo, Skin Agent, VisibleBrands, MemoryOS, Internal Tools) — mỗi dự án có kiến trúc, trade-offs, thất bại riêng. Kinh nghiệm này đang nằm trong đầu Huy, chưa được viết ra cho team và khách hàng.
- **Thought leadership content cần góc nhìn CTO:** IP-024 cover triết lý thiết kế software (serverless, cost, scale). IP-028 bổ sung góc nhìn Agentic — cách tư duy, thiết kế, và vận hành hệ thống AI Agent trong thực tế.
- **Hỗ trợ bán hàng Agentic service:** Khách hàng cần thấy Cyberk không chỉ "biết làm AI" mà hiểu sâu kiến trúc, biết cái gì sẽ fail, biết optimize cost. Bài viết từ CTO = trust mạnh nhất.
- **Nâng cao năng lực nội bộ:** Team cần hiểu tại sao Cyberk chọn Hybrid AI (SLM + LLM), cách thiết kế multi-agent system, cách tích hợp tool/API cho agent, tại sao Anti-hallucination là thiết kế chứ không phải fix bug.

## 3. Key Results (Kết quả cần đạt)

- **KR1:** Bài viết 2000–4000 từ publish trên gitbook, có ít nhất 2 case study thực tế.
- **KR2:** Diagram kiến trúc Agentic Framework.
- **KR3:** Link từ deck và website capabilities page.

## 4. Phân công

> Huy tự quyết định cách triển khai. CEO review sau (hậu kiểm).

| Bộ phận | Task ID | Người | Deadline | Status |
|---------|---------|-------|----------|--------|
| **BST** | IP-028-BST | Huy (CTO) | 22/03 | ⬜ |

## 5. Risks

- **Bài quá kỹ thuật** — mở đầu bằng vấn đề kinh doanh, rồi mới kỹ thuật.
- **Thông tin nhạy cảm** — chỉ chia sẻ pattern chung, ẩn danh nếu cần.

## 6. Lịch theo dõi

Xem `scheduler.csv`.

## 7. Status

`Đang triển khai — đã giao 18/03, deadline 22/03`

## 9. Liên kết

- [[IP-027-doing]] — IP-027: Triển khai Năng lực AI Agentic (IP gốc lớn)
- [[IP-024-doing]] — IP-024: Triết lý Thiết kế Software (bài viết song song, cùng hệ thought leadership)
- `anderson/thinking/cyberk-agentic.md` — Đối thoại chiến lược Agentic AI (nguồn insight chính)
- `bd/decks/agentic-development-deck.md` — Agentic Development Deck (framework 5 layers)
- `marketing/website/cyberk-website-content-plan.md` — Content Plan website

## 9. Thực tế (Ghi chú/Dấu vết)

- **2026-03-18:** Tạo IP + giao task. Dẹp execution plan chi tiết — Huy tự quyết định cách triển khai.
