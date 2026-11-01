# SocialPulse Frontend

Ứng dụng web phân tích xu hướng và cộng đồng người dùng trên các nền tảng mạng xã hội (Facebook, Threads, Reddit). Giao diện tập trung vào trực quan hóa dữ liệu qua biểu đồ, khối tóm tắt tự động và bảng so sánh chi tiết.


---

## 1. Giới thiệu

- **Mục tiêu**: Theo dõi nhịp thảo luận, so sánh quy mô chủ đề, phân tích sắc thái ý kiến và quản lý nguồn dữ liệu công khai từ Facebook, Threads và Reddit.
- **Phong cách giao diện**: Hiện đại, tối giản, tông màu sáng, bám sát thiết kế Figma.
- **Tài khoản demo sẵn có**:
  - Email: `demo@gmail.com`
  - Mật khẩu: `123456`

---

## 2. Công nghệ sử dụng

| Thư viện / Công cụ | Phiên bản | Mục đích sử dụng |
|:---|:---|:---|
| **react** | `^19.3.1` | Thư viện xây dựng giao diện người dùng |
| **react-dom** | `^19.3.1` | Cầu nối React với DOM trình duyệt |
| **react-router-dom** | `^7.18.4` | Quản lý định tuyến và điều hướng SPA |
| **recharts** | `^3.10.1` | Trực quan hóa dữ liệu qua biểu đồ (Area, Bar, Line, Pie) |
| **lucide-react** | `^1.59.0` | Bộ icon vector đồng bộ cho toàn bộ giao diện |
| **vite** | `^8.3.4` | Build tool và development server tốc độ cao (cấu hình vendor chunking & code splitting) |
| **tailwindcss** | `^4.3.3` | Framework CSS tiện ích phiên bản 4 (cấu hình CSS-first `@theme`) |
| **@tailwindcss/postcss** | `^4.3.3` | Plugin PostCSS tích hợp Tailwind CSS v4 |
| **typescript** | `~7.0.2` | Ngôn ngữ tĩnh kiểm tra kiểu dữ liệu với chế độ `strict` |
| **oxlint** | `^1.88.0` | Công cụ phân tích cú pháp và linter siêu tốc |

---

## 3. Yêu cầu cài đặt

- **Node.js**: Phiên bản tối thiểu **Node.js 18.0.0** trở lên (khuyến nghị **Node.js 20.x** hoặc **Node.js 24.x** LTS).
- **Trình quản lý gói**: **npm** 9.x+ (hoặc các package manager tương đương như pnpm, yarn).

---

## 4. Hướng dẫn chạy dự án

Mở terminal và thực thi tuần tự các câu lệnh sau:

```bash
# 1. Di chuyển vào thư mục dự án
cd frontend

# 2. Cài đặt các gói phụ thuộc
npm install

# 3. Chạy server phát triển (Development)
npm run dev
# Mở trình duyệt và truy cập: http://localhost:5173

# 4. Kiểm tra kiểu và build bản production
npm run build

# 5. Xem trước (preview) bản build production tại local
npm run preview

# 6. Kiểm tra lỗi mã nguồn với linter
npm run lint
```

---

## 5. Cấu trúc thư mục

Cấu trúc dự án được phân tách theo module rõ ràng, gọn gàng và không chứa mã rác:

```
frontend/
├── public/                 # Tài nguyên tĩnh phục vụ trực tiếp (favicon.svg)
├── src/                    # Toàn bộ mã nguồn ứng dụng
│   ├── components/         # Các component React
│   │   ├── auth/           # Route guard bảo vệ phân quyền (ProtectedRoute, GuestRoute)
│   │   └── ui/             # Bộ UI component nguyên tử (Card, StatCard, Badge, Button, SearchInput, Input, Checkbox)
│   ├── contexts/           # Quản lý phiên làm việc & xác thực (AuthProvider, useAuth, types)
│   ├── data/               # Mock data tập trung, tài khoản mẫu và TypeScript interface
│   ├── layouts/            # Các khung layout bao bọc trang (MainLayout, AuthLayout)
│   ├── pages/              # Các màn hình chính (kèm sub-components module hóa)
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   ├── TrendOverview.tsx
│   │   │   └── components/ # MacroStatsGrid, WeeklyDiscussionChart, PlatformSharePie, TrendingTopicsTable...
│   │   ├── TopicDetail.tsx
│   │   │   └── components/ # TopicHeader, TopicStatsGrid, DiscussionTrendChart, SentimentAnalysisCard...
│   │   ├── TopicComparison.tsx
│   │   │   └── components/ # TopicComparisonHeader, ComparisonSummaryCards, ComparisonCharts...
│   │   ├── WatchedTopics.tsx
│   │   │   └── components/ # WatchedTopicsHeader, AddTopicForm, WatchedTopicsTable...
│   │   └── DataSources.tsx
│   │       └── components/ # PlatformConnectionCards, DataSourcesTable, CollectionLogsTable...
│   ├── App.tsx             # Định tuyến trung tâm với React.lazy & Suspense code splitting
│   ├── index.css           # Cấu hình Tailwind v4 @theme, font Inter và custom scrollbar
│   └── main.tsx            # Điểm khởi chạy React với BrowserRouter
├── index.html              # Template HTML gốc
├── package.json            # Khai báo dependency, scripts và cấu hình dự án
├── postcss.config.js       # Cấu hình PostCSS với @tailwindcss/postcss
├── tsconfig.json           # Cấu hình TypeScript root
├── tsconfig.app.json       # Cấu hình TypeScript app với strict: true
├── tsconfig.node.json      # Cấu hình TypeScript cho Vite build script
└── vite.config.ts          # Cấu hình đóng gói Vite & chia tách manualChunks
```

---

## 6. Danh sách màn hình & Routing

### Nhóm Xác thực (Dùng `AuthLayout`, bảo vệ bằng `GuestRoute`)
| STT | Tên màn hình | Đường dẫn | File component | Chức năng chính |
|:---:|:---|:---|:---|:---|
| 1 | **Đăng nhập** | `/dang-nhap` | `src/pages/Login.tsx` | Form đăng nhập (email, mật khẩu, ẩn/hiện mật khẩu, ghi nhớ phiên, nút điền nhanh tài khoản demo). |
| 2 | **Đăng ký** | `/dang-ky` | `src/pages/Register.tsx` | Form tạo tài khoản mới (họ tên, email, mật khẩu, xác nhận mật khẩu, đồng ý điều khoản) có kiểm tra hợp lệ, chống memory leak và tự động chuyển hướng. |

### Nhóm Dashboard (Dùng `MainLayout`, bảo vệ bằng `ProtectedRoute`)
| STT | Tên màn hình | Đường dẫn | File component | Chức năng chính |
|:---:|:---|:---|:---|:---|
| 3 | **Tổng quan xu hướng** | `/tong-quan` (hoặc `/`) | `src/pages/TrendOverview.tsx` | 4 chỉ số vĩ mô, biểu đồ nhịp thảo luận tuần, cơ cấu nền tảng, banner xu hướng và bảng xếp hạng chủ đề có bộ lọc và tìm kiếm. |
| 4 | **Chi tiết chủ đề** | `/chi-tiet-chu-de?id=...` | `src/pages/TopicDetail.tsx` | Nhận tham số id linh hoạt: tóm tắt tự động, 4 card chỉ số, phân bổ sắc thái 3 màu, 3 góc nhìn chính, bình luận mẫu và bài viết nguồn. |
| 5 | **So sánh chủ đề** | `/so-sanh` | `src/pages/TopicComparison.tsx` | Đối chiếu song song từ 2–5 chủ đề linh hoạt: biểu đồ cột nền tảng, biểu đồ đường theo ngày và bảng metric chi tiết. |
| 6 | **Chủ đề theo dõi** | `/theo-doi` | `src/pages/WatchedTopics.tsx` | Danh sách chủ đề theo dõi, biểu mẫu thêm chủ đề mới có toggle, thao tác tạm dừng/tiếp tục/xóa và nhật ký hoạt động. |
| 7 | **Quản lý nguồn dữ liệu** | `/nguon-du-lieu` | `src/pages/DataSources.tsx` | Tình trạng kết nối Facebook/Threads/Reddit, danh sách nguồn dữ liệu lọc theo nền tảng, banner chính sách bảo mật và log thu thập. |

---

## 7. Cách làm việc với Data & Quản lý người dùng

### Vị trí file
Toàn bộ dữ liệu mẫu và TypeScript interfaces được tập trung tại thư mục `src/data/`:
- `users.ts`: Danh sách tài khoản demo (`demo@gmail.com` / `123456`) và cấu hình storage keys.
- `trendOverview.ts`: Số liệu vĩ mô, dữ liệu biểu đồ tuần, danh sách chủ đề thịnh hành.
- `topicDetail.ts`: Cơ sở dữ liệu chi tiết đa chủ đề (hàm `getTopicDetail`), phân bổ sắc thái, bài viết nguồn.
- `topicComparison.ts`: Số liệu đối chiếu động giữa 2–5 chủ đề, bảng so sánh chi tiết.
- `watchedTopics.ts`: Danh sách chủ đề theo dõi, chu kỳ cập nhật, hoạt động gần đây.
- `dataSources.ts`: Trạng thái các nền tảng, danh sách nguồn, log thu thập.

### Cơ chế phiên làm việc (Auth & Session)
- Phiên đăng nhập được quản lý qua `src/contexts/` (`AuthProvider`, `useAuth`) và lưu vào `localStorage`:
  - `socialpulse_current_user`: Lưu thông tin người dùng đang đăng nhập.
  - `socialpulse_users`: Lưu danh sách các tài khoản được đăng ký mới trên trình duyệt.
  - `socialpulse_remember_email`: Lưu email khi chọn "Ghi nhớ đăng nhập".
- Khởi tạo trạng thái đăng nhập qua cơ chế Lazy State Initialization, giúp loại bỏ hoàn toàn hiện tượng nháy màn hình và cascading re-render.
