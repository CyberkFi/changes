---
type: ip
tags: [tools, automation]
---

# IP-017: Telegram Notification Tool

## 1. Mục tiêu (Objective)

Xây dựng CLI tool gửi tin nhắn tổng kết vào Telegram — dùng khi một IP hoàn thành, hoặc khi cần gửi bất kỳ thông báo nào theo yêu cầu. Tool đặt tại `tools/telegram-notify/`, viết bằng TypeScript.

## 2. Lý do (Why)

- **Thông báo tức thì:** Khi hoàn thành một IP hoặc milestone, Anderson nhận ngay tin nhắn Telegram thay vì phải tự kiểm tra.
- **Tái sử dụng:** Tool CLI đơn giản, có thể gọi từ script, CI/CD, hoặc AI agent.
- **Lưu vết:** Mỗi tin nhắn gửi đi là một dấu vết (trace) về thời điểm hoàn thành công việc.

## 3. Kết quả Then chốt (Key Results)

- [x] **KR1:** CLI tool hoạt động — `npx tsx src/notify.ts send "message"` gửi tin nhắn vào Telegram chat.
- [x] **KR2:** Hỗ trợ Markdown formatting trong tin nhắn.
- [x] **KR3:** Command `setup` để lấy chat ID tự động.

## 4. Kế hoạch (Plan)

1. Tạo `tools/telegram-notify/` với TypeScript
2. Sử dụng Telegram Bot API (HTTP) — không cần thư viện ngoài
3. CLI: `setup` (lấy chat ID) và `send` (gửi tin nhắn)
4. Config qua `.env` file

## 5. Status

`Hoàn thành` ✅ — 07/03/2026

## 6. Liên kết (Related IPs)

_(Standalone tool — có thể dùng cho bất kỳ IP nào)_

## 7. Thực tế (Ghi chú/Dấu vết)

- **07/03/2026:** Tool tạo tại `tools/telegram-notify/`, TypeScript, zero dependencies.
