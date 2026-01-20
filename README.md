# 📝 To-Do List App (Node.js + PostgreSQL)

> Một ứng dụng quản lý công việc (Fullstack) hiện đại với giao diện Glassmorphism (Kính mờ) "Tím mộng mơ", được xây dựng bằng Node.js, Express và PostgreSQL.

---

## 🚀 Tính năng nổi bật (Features)

### 1. Quản lý công việc (CRUD)
* ✅ **Xem danh sách:** Hiển thị công việc cần làm (Pending), sắp xếp mới nhất lên đầu.
* ✅ **Chi tiết:** Xem nội dung đầy đủ của công việc trong giao diện thẻ kính.
* ✅ **Thêm mới:** Tạo công việc với tiêu đề, mô tả chi tiết và đánh dấu quan trọng (Important).
* ✅ **Chỉnh sửa:** Cập nhật thông tin, tự động lưu thời gian sửa đổi (`updated_at`).
* ✅ **Xóa:** Xóa cứng (Hard Delete) công việc khỏi cơ sở dữ liệu.

### 2. Giao diện & Trải nghiệm (UI/UX)
* 🎨 **Glassmorphism UI:** Thiết kế hiệu ứng kính mờ, đổ bóng và Gradient tím hiện đại.
* 📱 **Responsive:** Hiển thị tốt trên cả Máy tính, Tablet và Điện thoại.
* ⚡ **Server Side Rendering:** Sử dụng Pug Engine giúp tải trang nhanh và chuẩn SEO.

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

| Hạng mục | Công nghệ |
| :--- | :--- |
| **Backend** | ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) |
| **Frontend** | ![Pug](https://img.shields.io/badge/Pug-E3C29B?style=flat&logo=pug&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white) |
| **Database** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white) (Hosted on **Neon.tech**) |
| **Deploy** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) + **UptimeRobot** |

---

### 📂 Cấu trúc thư mục (Folder Structure)
```bash
 ┣ 📂 controllers        # Xử lý logic nghiệp vụ
 ┃ ┗ 📜 task_controller.js
 ┣ 📂 models             # Tương tác với Database (SQL Queries)
 ┃ ┗ 📜 task_model.js
 ┣ 📂 routes             # Định nghĩa đường dẫn (URL)
 ┃ ┗ 📜 task_route.js
 ┣ 📂 views              # Giao diện người dùng (Pug Templates)
 ┃ ┣ 📜 index.pug        # Danh sách công việc
 ┃ ┣ 📜 create.pug       # Form thêm mới
 ┃ ┣ 📜 detail.pug       # Xem chi tiết
 ┃ ┗ 📜 edit.pug         # Form chỉnh sửa
 ┣ 📜 database.js        # Cấu hình kết nối PostgreSQL
 ┣ 📜 index.js           # File khởi chạy Server
 ┣ 📜 package.json       # Khai báo thư viện & lệnh chạy
 ┗ 📜 .env               # Biến môi trường (Local)
