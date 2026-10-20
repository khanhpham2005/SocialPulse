import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FileText,
  MessageSquare,
  ThumbsUp,
  Hash,
  Calendar,
  ChevronDown,
  RotateCw,
  Search,
  ArrowUpRight,
  Bookmark,
  Plus,
  BarChart3,
  Sparkles,
  Info,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface StatCardItem {
  id: string;
  label: string;
  value: string;
  badge?: string;
  description: string;
  icon: React.ReactNode;
}

const stats: StatCardItem[] = [
  {
    id: 'topics',
    label: 'Chủ đề được ghi nhận',
    value: '24',
    description: 'Thuộc 5 lĩnh vực được theo dõi',
    icon: <Hash className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: 'posts',
    label: 'Bài viết công khai',
    value: '6.840',
    badge: '+21%',
    description: 'Sau khi loại nội dung bị gắn cờ rác',
    icon: <FileText className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: 'comments',
    label: 'Bình luận được phân tích',
    value: '24.680',
    badge: '+16%',
    description: 'Danh tính cá nhân đã được ẩn',
    icon: <MessageSquare className="h-5 w-5 text-indigo-600" />,
  },
  {
    id: 'interactions',
    label: 'Lượt tương tác',
    value: '98.700',
    badge: '+23%',
    description: 'Lượt thích, chia sẻ và phản hồi',
    icon: <ThumbsUp className="h-5 w-5 text-indigo-600" />,
  },
];

const weeklyData = [
  { date: '12/10', posts: 650 },
  { date: '13/10', posts: 720 },
  { date: '14/10', posts: 800 },
  { date: '15/10', posts: 880 },
  { date: '16/10', posts: 980 },
  { date: '17/10', posts: 1180 },
  { date: '18/10', posts: 1440 },
];

const platformData = [
  { name: 'Facebook', value: 3420, percent: '50%', color: '#2563eb' },
  { name: 'Threads', value: 2052, percent: '30%', color: '#1e293b' },
  { name: 'Reddit', value: 1368, percent: '20%', color: '#ea580c' },
];

interface TrendingTopicItem {
  rank: string;
  title: string;
  path: string;
  summary: string;
  category: string;
  platforms: string[];
  posts: string;
  score: number;
  growth: string;
  following: boolean;
}

const topicsData: TrendingTopicItem[] = [
  {
    rank: '01',
    title: 'AI trong giáo dục',
    path: '/chi-tiet-chu-de',
    summary:
      'Thảo luận tập trung vào cách dùng AI để hỗ trợ học tập và soạn bài. Người dùng cũng đặt câu hỏi về tính tự chủ, kiểm chứng đầu ra và quyền riêng tư.',
    category: 'Giáo dục · Công nghệ',
    platforms: ['f', '@', 'r'],
    posts: '1.240',
    score: 92,
    growth: '+32%',
    following: true,
  },
  {
    rank: '02',
    title: 'Giao thông xanh',
    path: '/so-sanh',
    summary:
      'Xe điện và phương tiện công cộng được quan tâm trong các lựa chọn di chuyển hằng ngày. Chi phí, hạ tầng sạc và sự thuận tiện là các điểm được trao đổi nhiều.',
    category: 'Đời sống',
    platforms: ['f', '@', 'r'],
    posts: '980',
    score: 86,
    growth: '+24%',
    following: false,
  },
  {
    rank: '03',
    title: 'Kỹ năng số cho người trẻ',
    path: '/chi-tiet-chu-de',
    summary:
      'Cộng đồng chia sẻ lộ trình học kỹ năng số và cách xây dựng hồ sơ năng lực. Nhiều câu hỏi xoay quanh lựa chọn khóa học và khả năng ứng dụng vào công việc.',
    category: 'Công nghệ',
    platforms: ['f', '@', 'r'],
    posts: '760',
    score: 81,
    growth: '+18%',
    following: true,
  },
  {
    rank: '04',
    title: 'Tiêu dùng bền vững',
    path: '/so-sanh',
    summary:
      'Các cuộc trao đổi đề cập đến việc cân bằng chi tiêu với lựa chọn sản phẩm bền vững. Giá cả, độ bền và thông tin nguồn gốc là những mối quan tâm nổi bật.',
    category: 'Kinh tế',
    platforms: ['f', '@', 'r'],
    posts: '620',
    score: 74,
    growth: '+12%',
    following: false,
  },
  {
    rank: '05',
    title: 'Chạy bộ cộng đồng',
    path: '/chi-tiet-chu-de',
    summary:
      'Người dùng trao đổi kinh nghiệm bắt đầu chạy bộ và duy trì thói quen vận động. Lịch tập phù hợp, phòng chấn thương và hoạt động nhóm nhận được nhiều câu hỏi.',
    category: 'Thể thao',
    platforms: ['f', '@', 'r'],
    posts: '480',
    score: 69,
    growth: '+9%',
    following: false,
  },
];

const TrendOverview: React.FC = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState<TrendingTopicItem[]>(topicsData);
  const [timeFilter, setTimeFilter] = useState<'day' | 'week'>('week');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFollow = (rank: string) => {
    setTopics((prev) =>
      prev.map((t) => (t.rank === rank ? { ...t, following: !t.following } : t))
    );
  };

  const filteredTopics = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header section */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          KHÁM PHÁ / 7 NGÀY QUA
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Tổng quan xu hướng
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Khám phá chủ đề nổi bật, hiểu các góc nhìn và theo dõi nhịp thảo luận trên nhiều nền tảng.
            </p>
          </div>
          <button
            onClick={() => navigate('/so-sanh')}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shrink-0 shadow-sm"
          >
            <BarChart3 className="h-4 w-4 text-indigo-600" />
            <span>So sánh chủ đề</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm chủ đề, từ khóa hoặc lĩnh vực bạn quan tâm..."
          className="w-full pl-10 pr-20 py-2.5 bg-white border border-gray-200 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
        />
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded">
          Ctrl K
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Date Picker Button */}
          <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 font-medium text-gray-700">
            <span>12–18/10/2026</span>
            <Calendar className="h-3.5 w-3.5 text-gray-400" />
          </button>

          {/* Platform filter */}
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 font-medium text-gray-700">
            <span>Tất cả nền tảng</span>
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          </button>

          {/* Category filter */}
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 font-medium text-gray-700">
            <span>Tất cả lĩnh vực</span>
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
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs font-medium text-gray-500">{stat.label}</span>
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                {stat.icon}
              </div>
            </div>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                {stat.value}
              </span>
              {stat.badge && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">
                  {stat.badge}
                </span>
              )}
            </div>

            <p className="mt-2 text-xs text-gray-400">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Middle Row: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Chart: Nhịp thảo luận trong tuần (7 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-gray-900">
                Nhịp thảo luận trong tuần
              </h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                +21% so với tuần trước
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Số bài viết mỗi ngày · Tất cả chủ đề
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPosts" x1="0" y1="0" x2="0" y2="1">
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
                    domain={[0, 1600]}
                    ticks={[0, 400, 800, 1200, 1600]}
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
                    fill="url(#colorPosts)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <span>Bài viết công khai</span>
            </div>
            <span>18/10 có 1.440 bài viết, cao nhất trong khoảng thời gian đã chọn.</span>
          </div>
        </div>

        {/* Right Chart: Phân bố nền tảng (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-1">
              Phân bố nền tảng
            </h2>
            <p className="text-xs text-gray-500 mb-4">
              Tỷ trọng trên 6.840 bài viết
            </p>

            <div className="h-48 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      borderRadius: '8px',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '12px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Center text in Donut */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xl font-bold text-gray-900">6.840</span>
                <span className="text-[11px] text-gray-400">bài viết</span>
              </div>
            </div>
          </div>

          {/* Platform breakdown list */}
          <div className="space-y-2.5 pt-4 border-t border-gray-100 text-xs">
            {platformData.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-gray-600">{p.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-mono">
                    {p.value.toLocaleString()}
                  </span>
                  <span className="font-semibold text-gray-800 w-8 text-right">
                    {p.percent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Highlight Banner */}
      <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              AI trong giáo dục đang dẫn đầu mức độ quan tâm
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">
              1.240 bài viết · Tăng 32% so với tuần trước · Nổi bật ở lĩnh vực Giáo dục
            </p>
          </div>
        </div>

        <Link
          to="/chi-tiet-chu-de"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-indigo-200 rounded-lg text-xs font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors shadow-sm self-start sm:self-auto shrink-0"
        >
          <span>Khám phá chủ đề</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Trending Topics Table Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Chủ đề nổi bật</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Xếp hạng theo điểm xu hướng · Tóm tắt tự động từ nguồn công khai
            </p>
          </div>

          {/* Tabs: Ngày / Tuần */}
          <div className="inline-flex p-0.5 bg-gray-100 rounded-lg self-start sm:self-auto">
            <button
              onClick={() => setTimeFilter('day')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                timeFilter === 'day'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Ngày
            </button>
            <button
              onClick={() => setTimeFilter('week')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                timeFilter === 'week'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Tuần
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/50">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4">CHỦ ĐỀ / TÓM TẮT TỰ ĐỘNG</th>
                <th className="py-3 px-4 text-right">BÀI VIẾT</th>
                <th className="py-3 px-4 text-center">ĐIỂM / 100</th>
                <th className="py-3 px-4 text-right">TĂNG TRƯỞNG</th>
                <th className="py-3 px-4 text-right">THEO DÕI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredTopics.map((topic) => (
                <tr
                  key={topic.rank}
                  className="hover:bg-gray-50/80 transition-colors group"
                >
                  {/* Rank */}
                  <td className="py-4 px-4 text-center align-top">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold">
                      {topic.rank}
                    </span>
                  </td>

                  {/* Title & Summary */}
                  <td className="py-4 px-4 align-top max-w-lg">
                    <div className="flex items-center gap-1.5">
                      <Link
                        to={topic.path}
                        className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                      >
                        {topic.title}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 text-indigo-600 transition-opacity" />
                      </Link>
                    </div>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {topic.summary}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[11px] text-gray-400 font-medium">
                        {topic.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {topic.platforms.map((plat) => (
                          <span
                            key={plat}
                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white ${
                              plat === 'f'
                                ? 'bg-blue-600'
                                : plat === '@'
                                ? 'bg-gray-900'
                                : 'bg-orange-500'
                            }`}
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>

                  {/* Bài viết */}
                  <td className="py-4 px-4 align-top text-right font-semibold text-gray-900">
                    {topic.posts}
                  </td>

                  {/* Điểm / 100 with small bar */}
                  <td className="py-4 px-4 align-top text-center">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-bold text-gray-900 text-sm">
                        {topic.score}
                      </span>
                      <div className="w-12 h-1 bg-gray-100 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: `${topic.score}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Tăng trưởng */}
                  <td className="py-4 px-4 align-top text-right">
                    <span className="font-semibold text-emerald-600 text-xs">
                      {topic.growth}
                    </span>
                  </td>

                  {/* Theo dõi button */}
                  <td className="py-4 px-4 align-top text-right">
                    <button
                      onClick={() => toggleFollow(topic.rank)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        topic.following
                          ? 'border border-indigo-200 text-indigo-600 bg-indigo-50/50 hover:bg-indigo-100'
                          : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                      }`}
                    >
                      {topic.following ? (
                        <>
                          <Bookmark className="h-3.5 w-3.5 fill-indigo-600" />
                          <span>Đang theo dõi</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-3.5 w-3.5" />
                          <span>Theo dõi</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-2">
          <span>
            Điểm xu hướng kết hợp lượng bài viết, tốc độ tăng và tương tác; không đánh giá đúng/sai.
          </span>
          <button
            onClick={() => navigate('/theo-doi')}
            className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors inline-flex items-center gap-1 self-start sm:self-auto"
          >
            <span>Hiển thị 5 / 24 chủ đề</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>

      {/* Bottom informational notice */}
      <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-start gap-3 text-xs text-gray-500">
        <Info className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Các chỉ số tăng trưởng so với 7 ngày liền trước. Nội dung có thể không đại diện cho toàn bộ cộng đồng; đây là dữ liệu demo dùng để minh họa phân tích.
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

export default TrendOverview;
