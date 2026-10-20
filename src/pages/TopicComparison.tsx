import React, { useState } from 'react';
import {
  Calendar,
  ChevronDown,
  RotateCw,
  Plus,
  X,
  Sparkles,
  Info,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const platformBarData = [
  { platform: 'Facebook', topicA: 620, topicB: 392 },
  { platform: 'Threads', topicA: 434, topicB: 294 },
  { platform: 'Reddit', topicA: 186, topicB: 294 },
];

const dailyTrendData = [
  { date: '12/10', topicA: 100, topicB: 95 },
  { date: '13/10', topicA: 125, topicB: 115 },
  { date: '14/10', topicA: 145, topicB: 130 },
  { date: '15/10', topicA: 160, topicB: 140 },
  { date: '16/10', topicA: 200, topicB: 160 },
  { date: '17/10', topicA: 240, topicB: 185 },
  { date: '18/10', topicA: 290, topicB: 210 },
];

const comparisonTableRows = [
  { metric: 'Bài viết', topicA: '1.240', topicB: '980', diff: '+260 bài' },
  { metric: 'Bình luận', topicA: '4.860', topicB: '3.920', diff: '+940 bình luận' },
  { metric: 'Lượt tương tác', topicA: '18.600', topicB: '14.200', diff: '+4.400 tương tác' },
  { metric: 'Điểm xu hướng', topicA: '92 / 100', topicB: '86 / 100', diff: '+6 điểm' },
  { metric: 'Tăng trưởng bài viết / tuần', topicA: '+32%', topicB: '+24%', diff: '+8 điểm phần trăm' },
];

const TopicComparison: React.FC = () => {
  const [selected, setSelected] = useState(['AI trong giáo dục', 'Giao thông xanh']);

  const removeTopic = (name: string) => {
    if (selected.length > 1) {
      setSelected(selected.filter((item) => item !== name));
    }
  };

  const addTopic = (name: string) => {
    if (selected.length < 5 && !selected.includes(name)) {
      setSelected([...selected, name]);
    }
  };

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header section */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          PHÂN TÍCH / SO SÁNH
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          So sánh chủ đề
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Đặt các chủ đề cạnh nhau để nhìn rõ quy mô, nhịp tăng trưởng và khác biệt giữa các nền tảng.
        </p>
      </div>

      {/* Topic selection card */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h2 className="text-sm font-bold text-gray-900">Chủ đề đang so sánh</h2>
          <span className="text-xs text-gray-400">
            Chọn từ 2–5 chủ đề · Đã chọn {selected.length}/5
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {selected.includes('AI trong giáo dục') && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-xs font-semibold text-indigo-700">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>AI trong giáo dục</span>
              <button
                onClick={() => removeTopic('AI trong giáo dục')}
                className="hover:text-indigo-900 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {selected.includes('Giao thông xanh') && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-700">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Giao thông xanh</span>
              <button
                onClick={() => removeTopic('Giao thông xanh')}
                className="hover:text-teal-900 transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {selected.length < 5 && (
            <button
              onClick={() => addTopic('Kỹ năng số cho người trẻ')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-gray-300 rounded-lg text-xs font-medium text-gray-600 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Thêm chủ đề</span>
            </button>
          )}

          <span className="text-xs text-gray-400 ml-2">
            Gợi ý: Kỹ năng số cho người trẻ
          </span>
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

          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 font-medium text-gray-700">
            <span>Chỉ số: Bài viết</span>
            <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
          </button>

          <span className="text-gray-400 ml-1">7 ngày qua · GMT+7</span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500">
          <RotateCw className="h-3.5 w-3.5" />
          <span>Cập nhật 18:00, 18/10</span>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            <span>AI trong giáo dục</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
              1.240
            </span>
            <span className="text-xs text-gray-500">bài viết</span>
            <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">
              +32%
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
            <span className="w-2 h-2 rounded-full bg-teal-600" />
            <span>Giao thông xanh</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
              980
            </span>
            <span className="text-xs text-gray-500">bài viết</span>
            <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">
              +24%
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="text-xs font-medium text-gray-500 mb-2">
            Chênh lệch lượng bài viết
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-indigo-600 tracking-tight">
              +260
            </span>
            <span className="text-xs font-medium text-gray-600">AI cao hơn 26,5%</span>
          </div>
        </div>
      </div>

      {/* Middle Row: 2 Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Chart: Lượng bài viết theo nền tảng */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-0.5">
              Lượng bài viết theo nền tảng
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              So sánh số lượng tuyệt đối · Đơn vị: bài viết
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={platformBarData}
                  margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
                  barGap={8}
                >
                  <XAxis
                    dataKey="platform"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 11 }}
                    domain={[0, 800]}
                    ticks={[0, 200, 400, 600, 800]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      borderRadius: '8px',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '12px',
                    }}
                  />
                  <Bar
                    dataKey="topicA"
                    name="AI trong giáo dục"
                    fill="#4f46e5"
                    radius={[4, 4, 0, 0]}
                    label={{ position: 'top', fill: '#4f46e5', fontSize: 11, fontWeight: 'bold' }}
                  />
                  <Bar
                    dataKey="topicB"
                    name="Giao thông xanh"
                    fill="#0d9488"
                    radius={[4, 4, 0, 0]}
                    label={{ position: 'top', fill: '#0d9488', fontSize: 11, fontWeight: 'bold' }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <span>AI trong giáo dục</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
              <span>Giao thông xanh</span>
            </div>
          </div>
        </div>

        {/* Right Chart: Nhịp thảo luận theo ngày */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-0.5">
              Nhịp thảo luận theo ngày
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Cùng khoảng thời gian và tập nền tảng
            </p>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={dailyTrendData}
                  margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
                >
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
                  />
                  <Line
                    type="monotone"
                    dataKey="topicA"
                    name="AI trong giáo dục"
                    stroke="#4f46e5"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#4f46e5' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="topicB"
                    name="Giao thông xanh"
                    stroke="#0d9488"
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: '#0d9488' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
              <span>AI trong giáo dục</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
              <span>Giao thông xanh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row: Cơ cấu nền tảng & Điểm khác biệt đáng chú ý */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Cơ cấu nền tảng của từng chủ đề (7 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-6">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
              <h2 className="text-base font-bold text-gray-900">
                Cơ cấu nền tảng của từng chủ đề
              </h2>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  Facebook
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-700" />
                  Threads
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Reddit
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Tỷ trọng tính riêng trong tổng số bài của mỗi chủ đề
            </p>
          </div>

          {/* AI trong giáo dục bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-900">AI trong giáo dục</span>
              <span className="text-gray-500 font-mono">1.240 bài</span>
            </div>

            <div className="w-full h-3 rounded-full overflow-hidden flex bg-gray-100">
              <div style={{ width: '50%' }} className="bg-blue-600 h-full" />
              <div style={{ width: '35%' }} className="bg-slate-700 h-full" />
              <div style={{ width: '15%' }} className="bg-orange-500 h-full" />
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-500 pt-0.5">
              <span>Facebook 50% · 620 bài</span>
              <span>Threads 35% · 434 bài</span>
              <span>Reddit 15% · 186 bài</span>
            </div>
          </div>

          {/* Giao thông xanh bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-900">Giao thông xanh</span>
              <span className="text-gray-500 font-mono">980 bài</span>
            </div>

            <div className="w-full h-3 rounded-full overflow-hidden flex bg-gray-100">
              <div style={{ width: '40%' }} className="bg-blue-600 h-full" />
              <div style={{ width: '30%' }} className="bg-slate-700 h-full" />
              <div style={{ width: '30%' }} className="bg-orange-500 h-full" />
            </div>

            <div className="flex items-center justify-between text-[11px] text-gray-500 pt-0.5">
              <span>Facebook 40% · 392 bài</span>
              <span>Threads 30% · 294 bài</span>
              <span>Reddit 30% · 294 bài</span>
            </div>
          </div>
        </div>

        {/* Right: Điểm khác biệt đáng chú ý (5 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-gray-900">
                Điểm khác biệt đáng chú ý
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Tóm tắt tự động</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              AI trong giáo dục có nhiều bài viết hơn trên Facebook và Threads. Giao thông xanh có tỷ trọng Reddit cao hơn: 30% so với 15%.
            </p>
          </div>

          <p className="mt-6 pt-3 border-t border-gray-100 text-[11px] text-gray-400 leading-relaxed">
            Khác biệt phản ánh tập nguồn demo được chọn, không hàm ý chủ đề nào quan trọng hơn.
          </p>
        </div>
      </div>

      {/* Bảng so sánh chi tiết */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900">Bảng so sánh chi tiết</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Các chỉ số sau lọc nội dung rác · 12–18/10/2026
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider bg-gray-50/50">
                <th className="py-3 px-5 text-gray-500">CHỈ SỐ</th>
                <th className="py-3 px-5 text-indigo-600 font-bold">AI TRONG GIÁO DỤC</th>
                <th className="py-3 px-5 text-teal-600 font-bold">GIAO THÔNG XANH</th>
                <th className="py-3 px-5 text-gray-500 text-right">CHÊNH LỆCH (AI – GT XANH)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {comparisonTableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3.5 px-5 font-medium text-gray-600 text-xs sm:text-sm">
                    {row.metric}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-gray-900">
                    {row.topicA}
                  </td>
                  <td className="py-3.5 px-5 font-bold text-gray-900">
                    {row.topicB}
                  </td>
                  <td className="py-3.5 px-5 font-semibold text-gray-600 text-right text-xs sm:text-sm">
                    {row.diff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom informational notice */}
      <div className="p-3.5 rounded-xl border border-gray-200 bg-white flex items-start gap-3 text-xs text-gray-500">
        <Info className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Tăng trưởng được làm tròn so với tuần trước. Các chủ đề có thể có bài viết trùng nhau, vì vậy không cộng trực tiếp để suy ra tổng toàn hệ thống. Số liệu và nhận định chỉ mang tính minh họa.
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

export default TopicComparison;

