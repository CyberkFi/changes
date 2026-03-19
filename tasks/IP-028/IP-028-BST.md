---
type: task
source: IP-028
department: BST
assignee: Huy (CTO)
status: todo
priority: high
created: 2026-03-18
deadline: 2026-03-22
---

# IP-028-BST: Viết bài cách Cyberk xây dựng hệ thống Agentic

> Người phụ trách: **Huy** (CTO)
> IP gốc: [IP-028](../../improvement/IP-028-doing.md)

## Mục tiêu

Viết một bài viết chuyên sâu chia sẻ cách Cyberk xây dựng hệ thống Agentic AI — từ tư duy kiến trúc, quyết định kỹ thuật, đến bài học thực chiến qua các dự án production.

## Gợi ý nội dung

Đây chỉ là gợi ý, Huy tự quyết cách triển khai:

- Tại sao Agentic khác Software truyền thống
- Hybrid AI Architecture (SLM + LLM) — khi nào dùng cái nào, tại sao
- Agent Orchestration & Multi-Agent — cách thiết kế luồng agent, phân chia trách nhiệm
- Tool & API Integration — cách agent tương tác với thế giới thực (skills, tools, hooks)
- Cyberk Agentic Framework (5 Layers)
- Anti-hallucination by Design
- Case study thực chiến (problem → what we tried → what failed → what worked)

## Checklist

- [ ] Viết bài 2000–4000 từ, publish tại `gitbook/handbook/agentic-engineering.md`
- [ ] Ít nhất 2 case study thực tế (vd: Relmo, Skin Agent)
- [ ] Diagram kiến trúc Agentic Framework

## Tài liệu tham khảo

- [IP-028 — IP gốc](../../improvement/IP-028-doing.md)
- [Chiến lược Agentic AI — Đối thoại](../../../anderson/thinking/cyberk-agentic.md) — nguồn insight chính, đã có sẵn tư duy kiến trúc
- [Agentic Development Deck](../../../bd/decks/agentic-development-deck.md) — framework 5 layers
- [IP-024: Triết lý Thiết kế Software](../../improvement/IP-024-doing.md) — bài viết song song, cùng hệ thought leadership
- [Content Plan](../../../marketing/website/cyberk-website-content-plan.md)
