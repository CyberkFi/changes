---
type: task
tags: [design, website, figma, capabilities, about-us]
status: todo
deadline: 2026-03-25
---

# IP-026-DES: Thiết kế Figma website cho 5 trang mới

> Người phụ trách: **Nhi** (DES)
> IP gốc: [IP-026 — Mở rộng Website](../../improvement/IP-026-doing.md)

## Việc cần làm

- [ ] Đọc content files bên dưới — hiểu nội dung từng trang
- [ ] Đọc kỹ ghi chú nội bộ cuối mỗi file (section "Visual assets cần chuẩn bị cho web")
- [ ] Thiết kế Figma cho 5 trang mới trên cyberk.io (responsive: desktop + mobile)
- [ ] Export / share link Figma cho CEO code

## Content files

| Trang | File |
|-------|------|
| Agentic Development | `marketing/capabilities/agentic-development.md` |
| Blockchain Development | `marketing/capabilities/blockchain-development.md` |
| Smart Contract Development | `marketing/capabilities/smart-contract-development.md` |
| About Us | `marketing/website/about-us.md` |
| How We Build | chờ content |

---

## ⚠️ Lưu ý quan trọng cho Smart Contract page

Content đã được cập nhật (20/03). Đọc lại file trước khi design.

### Section 1 (Standards we know) — CẦN TINH GỌN & TỐI GIẢN

Section này có 4 bảng (Tokens / DeFi / AI × Smart Accounts / Identity & Governance), mục đích chính là **SEO keyword coverage** — không phải nội dung người dùng đọc kỹ.

**→ Phải layout gọn, tối giản, đảm bảo thẩm mỹ. KHÔNG được chiếm quá nhiều viewport.**

**3 layout options (chọn 1, recommend Option A):**

| Option | Layout | Ưu điểm | Nhược |
|--------|--------|---------|-------|
| **A ⭐** | **Accordion / Collapse** — 4 panels đóng mặc định, click mở bảng | Gọn ~200px khi đóng, Google vẫn crawl được | Cần dev hỗ trợ interaction |
| **B** | **Single mega-table** — gộp 4 bảng thành 1, phân nhóm bằng màu nền | Compact, dạng spec sheet chuyên nghiệp | Mobile có thể dài |
| **C** | **Tabbed interface** — 4 tabs ngang, mỗi tab 1 bảng | Modern, interactive | SEO kém nếu dùng JS lazy load |

**Style gợi ý cho Accordion (Option A):**
- Mỗi panel có border-left accent color khác nhau (phân biệt 4 nhóm)
- Icon nhỏ bên trái tiêu đề (🪙 Tokens, 💰 DeFi, 🤖 AI, 🔐 Identity)
- Hover effect nhẹ trên panel header
- Khi mở: bảng 2 cột, font nhỏ hơn body 1 bậc (14px vs 16px)
- Không cần illustration/icon cho từng standard — text là đủ

### Hero block (đã cập nhật)

Hero giờ focus vào **Agent Economy** (AI × blockchain):
- Headline: "Smart contracts for the agent economy."
- 3 standards nổi bật: x402, ERC-8004, ERC-8183
- Cần visual cho agent economy flow (x402 → ERC-8004 → ERC-8183)

---

## Visual assets tổng hợp (tất cả trang)

### Smart Contract page

| Asset | Mô tả | Priority |
|-------|--------|----------|
| **Agent economy stack diagram** | Flow: x402 (PAY) → ERC-8004 (TRUST) → ERC-8183 (WORK) | P1 |
| **Standards timeline** | Timeline từ ERC-20 (2015) → ERC-8183 (2026) | P2 |
| **Project cards** | 8 cards với stack tags (Aethir, Helix, Atlas, Humanity, Tria, PuffPaw, Asterix, Fair Launch) | P1 |
| **Language badges** | Compact badges: Solidity, Rust, Move, Vyper, Cairo, Soroban, Ink! | P2 |

### Blockchain Development page

| Asset | Mô tả | Priority |
|-------|--------|----------|
| **Blockchain logo grid** | Logo: Ethereum, Solana, Aptos, Sui, Stellar, Base, Polygon, BSC, Arbitrum, Optimism, Avalanche, zkSync | P1 |
| **Language badges** | Solidity, Rust, Move, Vyper, Cairo, Ink! | P1 |
| **Tool ecosystem logos** | Hardhat, Foundry, OpenZeppelin, The Graph, WalletConnect… | P2 |
| **Project category cards** | Cards cho: DeFi, NFT, RWA, DePIN, DAO, Token | P1 |
| **Timeline visual** | "Since 2021" hoặc "5 years" badge | P2 |

### About Us page

| Asset | Mô tả | Priority |
|-------|--------|----------|
| Xem ghi chú cuối file `marketing/website/about-us.md` | — | — |

### Agentic Development page

| Asset | Mô tả | Priority |
|-------|--------|----------|
| Xem file `marketing/capabilities/agentic-development.md` | — | — |

## Priority

- **P1 — trước 25/03:** Agent economy diagram, project cards, blockchain logo grid, language badges, project category cards
- **P2 — bổ sung sau deploy:** Standards timeline, tool ecosystem logos, timeline visual

## Output

- Figma link — design cho 5 trang, responsive (desktop + mobile)
- Export assets dạng SVG / PNG cho CEO code

## Deadline

**25/03/2026**
