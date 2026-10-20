# SocialPulse Frontend

Ứng dụng web phân tích xu hướng và cộng đồng người dùng trên các nền tảng mạng xã hội (Facebook, Threads, Reddit). Giao diện  tập trung vào trực quan hóa dữ liệu qua biểu đồ, khối tóm tắt tự động và bảng so sánh chi tiết.

> **Lưu ý**: Đây là phiên bản demo frontend. Toàn bộ số liệu hiển thị đang sử dụng mock data cục bộ trong `src/data/`, chưa kết nối API backend.

---

## 1. Giới thiệu

- **Mục tiêu**: Theo dõi nhịp thảo luận, so sánh quy mô chủ đề, phân tích sắc thái ý kiến và quản lý nguồn dữ liệu công khai từ Facebook, Threads và Reddit.
- **Phong cách giao diện**: Hiện đại, tối giản, tông màu sáng, tập trung vào tính rõ ràng của biểu đồ và số liệu phân tích.
- **Hiện trạng**: Hoàn thiện 5 trang giao diện dựa theo thiết kế Figma, chạy hoàn toàn bằng mock data.

---

## 2. Công nghệ sử dụng

| Thư viện / Công cụ | Phiên bản | Mục đích sử dụng |
|:---|:---|:---|
| **react** | `^19.3.1` | Thư viện xây dựng giao diện người dùng |
| **react-dom** | `^19.3.1` | Cầu nối React với DOM trình duyệt |
| **react-router-dom** | `^7.18.4` | Quản lý định tuyến và điều hướng SPA |
| **recharts** | `^3.10.1` | Trực quan hóa dữ liệu qua biểu đồ (Area, Bar, Line, Pie) |
| **lucide-react** | `^1.59.0` | Bộ icon vector đồng bộ cho toàn bộ giao diện |
| **vite** | `^8.3.4` | Build tool và development server tốc độ cao |
| **tailwindcss** | `^4.3.3` | Framework CSS tiện ích phiên bản 4 (cấu hình `@theme`) |
| **@tailwindcss/postcss** | `^4.3.3` | Plugin PostCSS tích hợp Tailwind CSS v4 |
| **autoprefixer** | `^10.6.1` | Tự động thêm vendor prefix cho CSS |
| **typescript** | `~7.0.2` | Ngôn ngữ tĩnh kiểm tra kiểu dữ liệu |
| **oxlint** | `^1.88.0` | Công cụ phân tích cú pháp và linter |

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

Cấu trúc dự án được phân tách theo module sau:

```
frontend/
├── public/                 # Tài nguyên tĩnh phục vụ trực tiếp (favicon, icons)
├── design/                 # Ảnh chụp màn hình 5 trang đối chiếu từ Figma
├── src/                    # Toàn bộ mã nguồn ứng dụng
│   ├── assets/             # Hình ảnh, icon nội bộ
│   ├── components/         # Các component React
│   │   └── ui/             # Bộ UI component dùng chung (Card, StatCard, Badge, Button, Table...)
│   ├── data/               # Mock data và TypeScript interface cho từng trang
│   ├── layouts/            # Layout chung (MainLayout: Sidebar cố định + Header)
│   ├── pages/              # 5 màn hình chính của ứng dụng
│   ├── App.css             # Style bổ trợ cấp ứng dụng
│   ├── App.tsx             # Định tuyến trung tâm (Routes, Navigate)
│   ├── index.css           # Cấu hình Tailwind v4 @theme, font Inter và custom classes
│   └── main.tsx            # Điểm khởi chạy React với BrowserRouter
├── index.html              # Template HTML gốc
├── package.json            # Khai báo dependency, scripts và cấu hình dự án
├── postcss.config.js       # Cấu hình PostCSS
├── tailwind.config.js      # Cấu hình mở rộng cho Tailwind
├── tsconfig.json           # Cấu hình TypeScript root
└── vite.config.ts          # Cấu hình đóng gói Vite
```

---

## 6. Danh sách 5 màn hình & Routing

Tất cả các màn hình đều dùng chung `MainLayout` (sidebar điều hướng bên trái và header phía trên):

| STT | Tên màn hình | Đường dẫn (Route) | File component | Chức năng chính |
|:---:|:---|:---|:---|:---|
| 1 | **Tổng quan xu hướng** | `/tong-quan` (hoặc `/`) | `src/pages/TrendOverview.tsx` | 4 chỉ số vĩ mô, biểu đồ nhịp thảo luận tuần, cơ cấu nền tảng, banner xu hướng và bảng xếp hạng chủ đề. |
| 2 | **Chi tiết chủ đề** | `/chi-tiet-chu-de` | `src/pages/TopicDetail.tsx` | Phân tích sâu chủ đề *AI trong giáo dục*: tóm tắt tự động, sắc thái cảm xúc, 3 góc nhìn chính, bình luận mẫu và dòng thời gian. |
| 3 | **So sánh chủ đề** | `/so-sanh` | `src/pages/TopicComparison.tsx` | Đối chiếu song song (*AI trong giáo dục* vs *Giao thông xanh*): biểu đồ cột theo nền tảng, biểu đồ đường theo ngày và bảng metric chi tiết. |
| 4 | **Chủ đề theo dõi** | `/theo-doi` | `src/pages/WatchedTopics.tsx` | Danh sách chủ đề theo dõi/tạm dừng, biểu mẫu thêm chủ đề mới (nhập từ khóa, tick nền tảng, chọn chu kỳ) và lịch sử hoạt động. |
| 5 | **Quản lý nguồn dữ liệu** | `/nguon-du-lieu` | `src/pages/DataSources.tsx` | Tình trạng kết nối Facebook/Threads/Reddit, danh sách nguồn dữ liệu, nhật ký thu thập, lịch quét và chỉ số lọc nội dung rác. |

---

## 7. Cách làm việc với Mock Data

### Vị trí file
Toàn bộ dữ liệu mẫu được đặt tại thư mục `src/data/`:
- `trendOverview.ts`: Số liệu tổng quan, dữ liệu biểu đồ tuần, danh sách chủ đề thịnh hành.
- `topicDetail.ts`: Số liệu chi tiết một chủ đề, phân bổ sắc thái, bài viết nguồn, timeline.
- `topicComparison.ts`: Số liệu đối chiếu giữa 2 chủ đề, bảng so sánh chi tiết.
- `watchedTopics.ts`: Danh sách chủ đề theo dõi, chu kỳ cập nhật, hoạt động gần đây.
- `dataSources.ts`: Trạng thái các nền tảng, danh sách nguồn, log thu thập, thống kê lọc rác.

### Cách chỉnh sửa dữ liệu
- Mở file `.ts` tương ứng và cập nhật trực tiếp giá trị trong các mảng hoặc object.
- Giữ nguyên các TypeScript `interface` đi kèm (hoặc mở rộng có kiểm soát) để tránh phát sinh lỗi ép kiểu khi build.

### Hướng dẫn kết nối API thật sau này
1. **Tạo tầng API Client**: Tạo thư mục `src/services/` hoặc `src/api/` chứa các hàm gọi API (dùng `fetch` hoặc `axios`).
2. **Tái sử dụng DTO/Interface**: Chuyển các `interface` trong `src/data/` sang `src/types/` để làm kiểu dữ liệu trả về của API.
3. **Thay thế trong Component**: Tại các trang trong `src/pages/`, thay thế việc import biến dữ liệu tĩnh bằng gọi hàm API thông qua React Hook (`useEffect` + `useState`, hoặc React Query).
4. **Bổ sung UI phản hồi**: Thêm trạng thái chờ (`loading`), thông báo lỗi (`error`) và trạng thái trống (`empty state`) khi API phản hồi.

---

## 8. Quy ước Code & Hướng dẫn phát triển

### Quy ước đặt tên
- **Component & Layout**: Dùng `PascalCase` cho tên file và tên component (ví dụ: `TrendOverview.tsx`, `MainLayout.tsx`, `StatCard.tsx`).
- **File dữ liệu & tiện ích**: Dùng `camelCase` (ví dụ: `trendOverview.ts`, `dataSources.ts`).
- **Thư mục**: Dùng chữ thường `kebab-case` hoặc `camelCase` ngắn gọn (ví dụ: `src/components/ui/`, `src/layouts/`).

### Nơi đặt component dùng chung
- Toàn bộ component UI nguyên tử tái sử dụng nhiều nơi (Card, StatCard, Badge, Button, Table, SearchInput, FilterBar) nằm trong `src/components/ui/`.
- Khi bổ sung component mới, export tập trung tại `src/components/ui/index.ts` để các trang khác import thuận tiện.
- Khung layout chung (Sidebar, Header, Breadcrumbs) nằm tại `src/layouts/MainLayout.tsx`.

### Quy ước Tailwind CSS & Design Tokens
Dự án sử dụng **Tailwind CSS v4** với các thông số thiết kế được khai báo tại `src/index.css`:

- **Khung giao diện (Layout)**: Độ rộng nội dung tối ưu theo thiết kế Figma là `max-w-[1216px]` căn giữa (`mx-auto`).
- **Màu nhấn chủ đạo (Primary - Indigo)**:
  - Khai báo token CSS: `--color-primary-50` đến `--color-primary-950`.
  - Class sử dụng chính: `bg-indigo-600` (`#4f46e5`) cho nút bấm/accent, `bg-indigo-50` (`#eef2ff`) cho nền active/highlight, `text-indigo-600` cho liên kết.
- **Màu trạng thái (Status Colors)**:
  - Hoạt động / Tăng trưởng: Xanh lá (`emerald-50`, `emerald-600`, `emerald-700`).
  - Tạm dừng / Cảnh báo: Vàng cam (`amber-50`, `amber-600`, `amber-700`).
  - Lỗi / Tiêu cực: Đỏ hồng (`rose-50`, `rose-600`, `rose-700`).
- **Màu thương hiệu mạng xã hội**:
  - Facebook: Xanh dương `bg-blue-600` (`#2563eb`).
  - Threads: Đen xám `bg-slate-900` (`#1e293b`).
  - Reddit: Cam `bg-orange-500` (`#ea580c`).
- **Font chữ (Typography)**:
  - Font chữ mặc định: **Inter** (`font-sans`), áp dụng thông qua biến `--font-sans`.
  - Tiêu đề trang: `text-2xl` hoặc `text-3xl`, `font-bold`, `tracking-tight`.
  - Tiêu đề mục phụ / breadcrumb: `text-xs`, `font-semibold`, `uppercase`, `tracking-wider`.
