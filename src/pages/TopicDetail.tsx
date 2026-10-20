import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  MessageSquare,
  ThumbsUp,
  TrendingUp,
  Calendar,
  ChevronDown,
  RotateCw,
  BarChart3,
  Bookmark,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  User,
  Info,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const discussionTrend = [
  { date: '12/10', posts: 100 },
  { date: '13/10', posts: 130 },
  { date: '14/10', posts: 155 },
  { date: '15/10', posts: 160 },
  { date: '16/10', posts: 200 },
  { date: '17/10', posts: 245 },
  { date: '18/10', posts: 290 },
];

const TopicDetail: React.FC = () => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Breadcrumb & Actions */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          <Link to="/tong-quan" className="hover:text-indigo-600 transition-colors">
            TỔNG QUAN XU HƯỚNG
          </Link>
          <span>/</span>
          <span>CHI TIẾT CHỦ ĐỀ</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              AI trong giáo dục
            </h1>
            <p className="mt-1 text-sm text-gray-600 flex flex-wrap items-center gap-2">
              <span className="font-medium text-gray-700">Giáo dục · Công nghệ</span>
              <span className="text-gray-300">/</span>
              <span>Theo dõi cách cộng đồng trao đổi về AI trong học tập và giảng dạy.</span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => navigate('/so-sanh')}
              className="inline-flex items-center gap-2 px-3.5 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
            >
              <BarChart3 className="h-4 w-4 text-indigo-600" />
              <span>So sánh</span>
            </button>
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm ${
                isFollowing
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${isFollowing ? 'fill-white' : ''}`} />
              <span>{isFollowing ? 'Đang theo dõi' : 'Theo dõi'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
        <div className="flex flex-wrap items-center gap-2.5">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 font-medium text-gray-700">
            <span>12–18/10/2026</span>
            <Calendar className="h-3.5 w-3.5 text-gray-400" />
          </button>

          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 font-medium text-gray-700">
            <span>Tất cả nền tảng</span>
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          </button>

          <span className="text-gray-400 ml-1">7 ngày qua · GMT+7</span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500">
          <RotateCw className="h-3.5 w-3.5" />
          <span>Cập nhật 18:00, 18/10</span>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-xs font-medium text-gray-500">Bài viết công khai</span>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <FileText className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">1.240</span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">
              +32%
            </span>
          </div>
          <p className="mt-2 text-xs text-gray-400">So với 940 bài của tuần trước</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-xs font-medium text-gray-500">Bình luận</span>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <MessageSquare className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">4.860</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">Đã ẩn danh, sau lọc nội dung rác</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-xs font-medium text-gray-500">Lượt tương tác</span>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <ThumbsUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">18.600</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">Lượt thích, chia sẻ và phản hồi</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="text-xs font-medium text-gray-500">Điểm xu hướng</span>
            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 tracking-tight">92 / 100</span>
          </div>
          <p className="mt-2 text-xs text-gray-400">Đứng đầu trong 24 chủ đề</p>
        </div>
      </div>

      {/* Tóm tắt tự động */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main summary text (left) */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-gray-900">Tóm tắt tự động</h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Tổng hợp từ nguồn công khai · Cập nhật 18:00, 18/10/2026
                </p>
              </div>
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                Có dẫn nguồn
              </span>
            </div>

            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                Trong dữ liệu demo từ ngày 12 đến 18/10, thảo luận về AI trong giáo dục tập trung vào hỗ trợ học tập, chuẩn bị bài giảng và phản hồi cá nhân hóa. Các ví dụ sử dụng thường được nhắc đến là giải thích khái niệm và gợi ý bài tập, thay vì thay thế hoàn toàn quá trình học. <span className="text-indigo-600 font-semibold cursor-pointer">[1]</span>
              </p>
              <p>
                Một nhóm ý kiến nhấn mạnh vai trò của giáo viên và kỹ năng kiểm chứng thông tin. Những lo ngại chính gồm sự phụ thuộc vào công cụ, câu trả lời thiếu chính xác và cách xử lý dữ liệu người học. <span className="text-indigo-600 font-semibold cursor-pointer">[2] [3]</span>
              </p>
              <p>
                Lượng bài viết tăng từ 100 lên 290 bài/ngày trong tuần. Đây là thay đổi về mức độ thảo luận trong tập nguồn đã chọn, không phải bằng chứng về mức độ đồng thuận hay hiệu quả của AI.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                Facebook
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-900" />
                Threads
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Reddit
              </span>
            </div>
          </div>

          {/* Context box (right) */}
          <div className="w-full lg:w-72 bg-gray-50/80 rounded-xl p-4 border border-gray-200/80 flex flex-col justify-between text-xs space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Đọc cùng bối cảnh</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                Tóm tắt do hệ thống tạo, có thể bỏ sót ngữ cảnh. Hãy đối chiếu bài gốc trước khi sử dụng.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chỉ nội dung công khai trên Facebook, Threads và Reddit. Không kết luận đúng/sai về chủ đề.
              </p>
            </div>
            <div className="pt-2 border-t border-gray-200 text-gray-400 text-[11px]">
              Dữ liệu demo phân tích
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row: Diễn biến thảo luận & Sắc thái thảo luận */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Chart: Diễn biến thảo luận (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-gray-900">
                Diễn biến thảo luận
              </h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                +32% / tuần
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Số bài viết theo ngày · 12–18/10/2026
            </p>

            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={discussionTrend}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorDetailPosts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 11 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 11 }}
                    domain={[0, 320]}
                    ticks={[0, 80, 160, 240, 320]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      borderRadius: '8px',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '12px',
                    }}
                    itemStyle={{ color: '#ffffff' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="posts"
                    stroke="#4f46e5"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#colorDetailPosts)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <span>AI trong giáo dục</span>
            </div>
            <span>Đỉnh tuần: 290 bài vào 18/10 · Tổng cộng 1.240 bài viết</span>
          </div>
        </div>

        {/* Right Chart: Sắc thái thảo luận (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-1">
              Sắc thái thảo luận
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              Trên 4.860 bình luận được phân tích
            </p>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-600 tracking-tight">
                55%
              </span>
              <span className="text-xs font-semibold text-gray-600">Tích cực</span>
            </div>

            {/* Horizontal progress multi-segment */}
            <div className="w-full h-3 rounded-full overflow-hidden flex my-4 bg-gray-100">
              <div style={{ width: '55%' }} className="bg-emerald-600 h-full" />
              <div style={{ width: '30%' }} className="bg-slate-600 h-full" />
              <div style={{ width: '15%' }} className="bg-rose-500 h-full" />
            </div>

            {/* Breakdown legend */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-gray-600">Tích cực</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-mono">2.673</span>
                  <span className="font-semibold text-gray-800 w-8 text-right">55%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                  <span className="text-gray-600">Trung lập</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-mono">1.458</span>
                  <span className="font-semibold text-gray-800 w-8 text-right">30%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-gray-600">Tiêu cực</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-mono">720</span>
                  <span className="font-semibold text-gray-800 w-8 text-right">15%</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 leading-relaxed">
            Sắc thái đo mô hình ước lượng, không đồng nghĩa với quan điểm của toàn bộ cộng đồng.
          </p>
        </div>
      </div>

      {/* Các góc nhìn chính (3 cards) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-gray-900">Các góc nhìn chính</h2>
          <span className="text-xs text-gray-400">
            *Tổng hợp tự động · Không đại diện cho toàn bộ cộng đồng
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Angle 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-semibold text-sm mb-2">
                <ThumbsUp className="h-4 w-4" />
                <span>Góc nhìn ủng hộ</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                AI giúp giải thích khái niệm và gợi ý cách học theo nhu cầu. Người học đánh giá cao phản hồi nhanh, nhưng vẫn muốn tự giải quyết bài tập.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-indigo-600 font-medium">
              Tham chiếu [1], [2]
            </div>
          </div>

          {/* Angle 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm mb-2">
                <ShieldAlert className="h-4 w-4" />
                <span>Mối quan ngại</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sự phụ thuộc, câu trả lời thiếu chính xác và dữ liệu cá nhân là các lo ngại thường gặp. Một số ý kiến đề nghị có hướng dẫn sử dụng rõ ràng.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-indigo-600 font-medium">
              Tham chiếu [2], [3]
            </div>
          </div>

          {/* Angle 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mb-2">
                <HelpCircle className="h-4 w-4" />
                <span>Câu hỏi nổi bật</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Đâu là ranh giới giữa hỗ trợ và làm thay? Giáo viên nên hướng dẫn kiểm chứng ra sao, và thông tin nào không nên nhập vào công cụ?
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-indigo-600 font-medium">
              Tham chiếu [1], [3]
            </div>
          </div>
        </div>
      </div>

      {/* Bình luận minh họa */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Bình luận minh họa</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Nội dung được biên soạn cho bản demo, không phải trích dẫn từ người dùng thật.
            </p>
          </div>
          <span className="self-start sm:self-auto px-2.5 py-1 bg-amber-50 text-amber-800 text-[11px] font-semibold rounded-md border border-amber-200">
            Demo · Đã ẩn danh
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Comment 1 */}
          <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-700 text-xs font-semibold mb-2">
                <User className="h-3.5 w-3.5 text-gray-400" />
                <span>Người dùng ẩn danh</span>
              </div>
              <p className="text-xs text-gray-700 italic leading-relaxed">
                "Mình dùng AI để gợi ý hướng giải, sau đó tự làm và kiểm tra lại với tài liệu."
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-gray-400">
              Facebook · Tích cực · Demo
            </div>
          </div>

          {/* Comment 2 */}
          <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-700 text-xs font-semibold mb-2">
                <User className="h-3.5 w-3.5 text-gray-400" />
                <span>Người dùng ẩn danh</span>
              </div>
              <p className="text-xs text-gray-700 italic leading-relaxed">
                "Nếu dùng trong lớp học thì nên có hướng dẫn rõ về phần nào được phép hỗ trợ."
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-gray-400">
              Threads · Trung lập · Demo
            </div>
          </div>

          {/* Comment 3 */}
          <div className="bg-gray-50/70 rounded-xl p-4 border border-gray-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-gray-700 text-xs font-semibold mb-2">
                <User className="h-3.5 w-3.5 text-gray-400" />
                <span>Người dùng ẩn danh</span>
              </div>
              <p className="text-xs text-gray-700 italic leading-relaxed">
                "Mình còn lo về việc đưa dữ liệu cá nhân và bài làm của học sinh vào công cụ."
              </p>
            </div>
            <div className="mt-3 pt-2 text-[11px] text-gray-400">
              Reddit · Tiêu cực · Demo
            </div>
          </div>
        </div>
      </div>

      {/* Bài viết nguồn */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Bài viết nguồn</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              3 bài minh họa tiêu biểu trong 1.240 bài viết · Tất cả là nguồn công khai
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 self-start sm:self-auto">
            <span>Tất cả nền tảng</span>
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-3">
          {/* Source 1 */}
          <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-indigo-600">[1]</span>
                <span className="font-semibold text-blue-600">Facebook</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">Diễn đàn Giáo dục số · Nguồn demo công khai</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-400">12/10/2026 · 09:10</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                Bạn dùng AI như thế nào để hỗ trợ việc học?
              </h3>
              <p className="text-xs text-gray-600">
                Bài thảo luận minh họa về gợi ý bài tập, giải thích khái niệm và giới hạn sử dụng.
              </p>
              <div className="text-[11px] text-gray-400">
                880 tương tác · 142 bình luận
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 shrink-0 self-start sm:self-center">
              <span>Xem bài gốc</span>
              <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </div>

          {/* Source 2 */}
          <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-indigo-600">[2]</span>
                <span className="font-semibold text-gray-900">Threads</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">#hoctapso · Nguồn demo công khai</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-400">14/10/2026 · 14:40</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                Kiểm tra lại câu trả lời của AI trước khi sử dụng
              </h3>
              <p className="text-xs text-gray-600">
                Trao đổi minh họa về cách đối chiếu tài liệu và giữ vai trò chủ động của người học.
              </p>
              <div className="text-[11px] text-gray-400">
                540 tương tác · 96 bình luận
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 shrink-0 self-start sm:self-center">
              <span>Xem bài gốc</span>
              <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </div>

          {/* Source 3 */}
          <div className="p-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-indigo-600">[3]</span>
                <span className="font-semibold text-orange-600">Reddit</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">r/DigitalLearningDemo · Nguồn demo công khai</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-400">16/10/2026 · 16:20</span>
              </div>
              <h3 className="text-sm font-bold text-gray-900">
                Làm sao bảo vệ dữ liệu khi dùng công cụ học tập AI?
              </h3>
              <p className="text-xs text-gray-600">
                Câu hỏi minh họa về dữ liệu cá nhân, quyền truy cập và hướng dẫn cho lớp học.
              </p>
              <div className="text-[11px] text-gray-400">
                320 tương tác · 74 bình luận
              </div>
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 shrink-0 self-start sm:self-center">
              <span>Xem bài gốc</span>
              <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Dòng thời gian chủ đề */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h2 className="text-base font-bold text-gray-900 mb-0.5">Dòng thời gian chủ đề</h2>
        <p className="text-xs text-gray-500 mb-6">
          Các mốc quan sát từ dữ liệu demo, không phải sự kiện tin tức được xác minh
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Step 1 */}
          <div className="relative pl-6 border-l-2 border-indigo-600 space-y-1">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-indigo-600" />
            <span className="text-xs font-bold text-indigo-600">12/10/2026</span>
            <h3 className="text-sm font-bold text-gray-900">Khởi đầu khoảng theo dõi</h3>
            <p className="text-xs text-gray-600">
              100 bài/ngày. Trao đổi về cách dùng AI để hỗ trợ học tập.
            </p>
            <p className="text-[11px] text-gray-400 pt-1">Nguồn [1] · Facebook</p>
          </div>

          {/* Step 2 */}
          <div className="relative pl-6 border-l-2 border-indigo-600 space-y-1">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-indigo-600" />
            <span className="text-xs font-bold text-indigo-600">15/10/2026</span>
            <h3 className="text-sm font-bold text-gray-900">Mở rộng góc nhìn</h3>
            <p className="text-xs text-gray-600">
              160 bài/ngày. Xuất hiện trao đổi về kiểm chứng câu trả lời.
            </p>
            <p className="text-[11px] text-gray-400 pt-1">Nguồn [2] · Threads</p>
          </div>

          {/* Step 3 */}
          <div className="relative pl-6 border-l-2 border-indigo-600 space-y-1">
            <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-indigo-600" />
            <span className="text-xs font-bold text-indigo-600">18/10/2026</span>
            <h3 className="text-sm font-bold text-gray-900">Mức quan tâm cao nhất tuần</h3>
            <p className="text-xs text-gray-600">
              290 bài/ngày. Thêm câu hỏi về bảo vệ dữ liệu người học.
            </p>
            <p className="text-[11px] text-gray-400 pt-1">Nguồn [3] · Reddit</p>
          </div>
        </div>
      </div>

      {/* Bottom informational notice */}
      <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-start gap-3 text-xs text-gray-500">
        <Info className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Phạm vi phân tích: 1.240 bài hợp lệ, 120 bài bị gắn cờ rác đã được loại khỏi thống kê, sắc thái và tóm tắt. Nội dung chưa xác định không tự động bị loại. Nhận định chỉ mô tả tập nguồn, không phán xét đúng/sai.
        </p>
      </div>

      {/* Footer Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-gray-400 pt-2 border-t border-gray-100">
        <span>SocialPulse · Dữ liệu minh họa, không phản ánh hoạt động thực tế.</span>
        <span>Chu kỳ cập nhật 1–6 giờ · Không phải dữ liệu thời gian thực</span>
      </div>
    </div>
  );
};

export default TopicDetail;

