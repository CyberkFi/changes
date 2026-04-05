---
type: readme
tags: [ceo]
---

# CEO Workspace - CyberkFi

Chào mừng đến với **CEO Workspace** - Trung tâm chỉ huy kỹ thuật số của CyberkFi.

Đây là nơi kết nối trực tiếp giữa CEO và đội ngũ AI Agents, đóng vai trò là **Source of Truth** (Nguồn sự thật duy nhất) cho mọi hoạt động điều hành, chiến lược và cải tiến của công ty.

## 🎯 Mục đích & Vai trò

Không gian làm việc này được thiết kế để phục vụ ba mục đích cốt lõi:

1.  **Hoạch định Chiến lược (Strategy Hub):** Nơi định hình tầm nhìn dài hạn và các mục tiêu then chốt (OKRs).
2.  **Vườn ươm Cải tiến (Innovation Lab):** Nơi cụ thể hóa chiến lược thành các kế hoạch hành động (Improvement Plans - IP).
3.  **Trung tâm Chỉ huy (Command Center):** Nơi điều phối nguồn lực, theo dõi tiến độ và lưu vết hoạt động.

## 🏗️ Cấu trúc Workspace

Workspace được tổ chức tinh gọn để tối ưu hóa sự tập trung:

*   **`strategy/`**: Tầm nhìn dài hạn.
    *   `S-XXX-doing.md`: File Chiến lược định hướng cho 1-3 năm.
    *   `strategies.md`: Index tất cả chiến lược.
*   **`improvement/`**: Trái tim của sự thay đổi.
    *   `kanban-board.md`: Bảng theo dõi trạng thái thực thi.
    *   `IP-XXX-doing.md`: File IP riêng lẻ.
    *   `diary/`: Nhật ký thực thi của Agents.
*   **`tasks/`**: Task files chi tiết cho từng bộ phận.
    *   `IP-XXX/IP-XXX-DEPT.md`: Task file cho bộ phận cụ thể.
*   **`workflows/`**: Bộ não quy trình (SOPs).
    *   `ip-create/`: Quy trình tạo mới IP.
    *   `ip-execute/`: Quy trình triển khai IP.
    *   `st-create/`: Quy trình tạo chiến lược.
    *   `task-create/`: Quy trình tạo task files.

## 🤖 Lực lượng Lao động (The Workforce)

*   **`AGENTS.md`**: **"Hiến pháp"** của Workspace.
    *   Quy định vai trò, trách nhiệm và kỹ năng của AI Agents.
    *   Mô tả chi tiết các quy trình cốt lõi mà Agent phải tuân thủ.

## 🚀 Luồng làm việc (Core Workflow)

1.  **Think Big (Strategy):** CEO & Agent xác định Chiến lược → `workflows/st-create/st-create.md`.
2.  **Start Small (IP):** Cụ thể hóa thành IP → `workflows/ip-create/ip-create.md`.
3.  **Execute Fast (Execution):** Triển khai IP → `workflows/ip-execute/ip-execute.md`.
4.  **Assign & Track:** Tạo task & theo dõi → `workflows/task-create/task-create.md` + `scheduler.csv`.
5.  **Traceability (Logging):** Ghi lại mọi hành động tại `improvement/diary/` và `scheduler.csv`.

---
*CyberkFi - Where Human Vision meets AI Execution.*
