import React, { useState } from 'react';
import {
  Bookmark,
  RefreshCw,
  Pause,
  Search,
  Pencil,
  Trash2,
  Plus,
  X,
  Shield,
  Check,
} from 'lucide-react';

interface WatchedItem {
  id: string;
  name: string;
  keywords: string;
  platforms: string[];
  cycle: string;
  lastUpdate: string;
  status: 'active' | 'paused';
}

const initialTopics: WatchedItem[] = [
  {
    id: '1',
    name: 'AI trong giáo dục',
    keywords: 'AI giáo dục, học tập AI',
    platforms: ['Facebook', 'Threads', 'Reddit'],
    cycle: '2 giờ',
    lastUpdate: '18:00\n18/10/2026',
    status: 'active',
  },
  {
    id: '2',
    name: 'Kỹ năng số cho người trẻ',
    keywords: 'kỹ năng số, học kỹ năng',
    platforms: ['Facebook', 'Threads'],
    cycle: '6 giờ',
    lastUpdate: '17:00\n18/10/2026',
    status: 'active',
  },
  {
    id: '3',
    name: 'Học trực tuyến',
    keywords: 'học trực tuyến, lớp học số',
    platforms: ['Facebook', 'Reddit'],
    cycle: '1 giờ',
    lastUpdate: '10:00\n18/10/2026',
    status: 'paused',
  },
];

const WatchedTopics: React.FC = () => {
  const [topics, setTopics] = useState<WatchedItem[]>(initialTopics);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(true);

  // Form states
  const [topicName, setTopicName] = useState('Giao thông xanh');
  const [keywords, setKeywords] = useState('giao thông xanh, xe điện');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([
    'Facebook',
    'Threads',
    'Reddit',
  ]);
  const [cycle, setCycle] = useState('2 giờ');

  const togglePlatform = (p: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topicName.trim()) return;

    const newTopic: WatchedItem = {
      id: Date.now().toString(),
      name: topicName,
      keywords,
      platforms: selectedPlatforms,
      cycle,
      lastUpdate: '18:15\n18/10/2026',
      status: 'active',
    };

    setTopics([...topics, newTopic]);
    setTopicName('');
    setKeywords('');
  };

  const deleteTopic = (id: string) => {
    setTopics(topics.filter((t) => t.id !== id));
  };

  const toggleStatus = (id: string) => {
    setTopics(
      topics.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'active' ? 'paused' : 'active' }
          : t
      )
    );
  };

  const filteredTopics = topics.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.keywords.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeCount = topics.filter((t) => t.status === 'active').length;
  const pausedCount = topics.filter((t) => t.status === 'paused').length;

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header section */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          KHÔNG GIAN CÁ NHÂN / MINH ANH
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Chủ đề theo dõi
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Lưu những chủ đề bạn quan tâm và chủ động chọn nguồn, từ khóa cùng chu kỳ cập nhật.
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shrink-0 shadow-sm self-start sm:self-auto"
          >
            <Plus className="h-4 w-4" />
            <span>Thêm chủ đề</span>
          </button>
        </div>
      </div>

      {/* 3 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">Chủ đề đã lưu</span>
            <Bookmark className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
            {topics.length}
          </div>
          <p className="mt-2 text-xs text-gray-400">Trong không gian cá nhân của bạn</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">Đang theo dõi</span>
            <RefreshCw className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
            {activeCount}
          </div>
          <p className="mt-2 text-xs text-gray-400">Cập nhật theo chu kỳ đã chọn</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-500">Đang tạm dừng</span>
            <Pause className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight">
            {pausedCount}
          </div>
          <p className="mt-2 text-xs text-gray-400">Có thể tiếp tục bất cứ lúc nào</p>
        </div>
      </div>

      {/* Main Grid: Left table + Right form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 or 12 cols depending on form visibility) */}
        <div className={`${showAddForm ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-6`}>
          {/* Danh sách theo dõi */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-base font-bold text-gray-900">Danh sách theo dõi</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Từ khóa được đối chiếu trong các nguồn công khai đã chọn
              </p>

              <div className="mt-4 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm chủ đề đã lưu..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/50">
                    <th className="py-3 px-4">CHỦ ĐỀ / TỪ KHÓA</th>
                    <th className="py-3 px-4">NỀN TẢNG</th>
                    <th className="py-3 px-3 text-center">CHU KỲ</th>
                    <th className="py-3 px-4 text-center">CẬP NHẬT</th>
                    <th className="py-3 px-4 text-center">TRẠNG THÁI</th>
                    <th className="py-3 px-4 text-right">SỬA / XÓA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredTopics.map((topic) => (
                    <tr key={topic.id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-3.5 px-4 align-middle">
                        <div className="font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
                          {topic.name}
                        </div>
                        <div className="text-[11px] text-gray-400 mt-0.5">
                          {topic.keywords}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 align-middle text-gray-600">
                        {topic.platforms.join(', ')}
                      </td>

                      <td className="py-3.5 px-3 align-middle text-center text-gray-600 font-medium">
                        {topic.cycle}
                      </td>

                      <td className="py-3.5 px-4 align-middle text-center">
                        <div className="font-bold text-gray-800">
                          {topic.lastUpdate.split('\n')[0]}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          {topic.lastUpdate.split('\n')[1]}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 align-middle text-center">
                        <button
                          onClick={() => toggleStatus(topic.id)}
                          className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                            topic.status === 'active'
                              ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {topic.status === 'active' ? 'Đang theo dõi' : 'Tạm dừng'}
                        </button>
                      </td>

                      <td className="py-3.5 px-4 align-middle text-right">
                        <div className="inline-flex items-center gap-2 text-gray-400">
                          <button
                            onClick={() => {
                              setTopicName(topic.name);
                              setKeywords(topic.keywords);
                              setSelectedPlatforms(topic.platforms);
                              setShowAddForm(true);
                            }}
                            className="hover:text-indigo-600 transition-colors"
                          >
                            <Pencil className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => deleteTopic(topic.id)}
                            className="hover:text-rose-600 transition-colors"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-gray-50/50 border-t border-gray-100 text-[11px] text-gray-400">
              Mốc cập nhật phụ thuộc lịch thu thập của nguồn. Theo dõi không đồng nghĩa với dữ liệu thời gian thực.
            </div>
          </div>

          {/* Hoạt động gần đây */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
            <div>
              <h2 className="text-base font-bold text-gray-900">Hoạt động gần đây</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Các thay đổi trong không gian theo dõi của bạn
              </p>
            </div>

            <div className="space-y-3">
              {/* Activity 1 */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">
                      AI trong giáo dục đã cập nhật
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      1.240 bài viết trong 7 ngày qua · Chu kỳ 2 giờ
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400 font-mono shrink-0">
                  18:00 · 18/10/2026
                </span>
              </div>

              {/* Activity 2 */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <RefreshCw className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">
                      Kỹ năng số cho người trẻ đã cập nhật
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      760 bài viết trong 7 ngày qua · Chu kỳ 6 giờ
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400 font-mono shrink-0">
                  17:00 · 18/10/2026
                </span>
              </div>

              {/* Activity 3 */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50/60 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center shrink-0">
                    <Pause className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-900">
                      Bạn đã tạm dừng Học trực tuyến
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Cấu hình được giữ lại; chưa thu thập theo lịch tiếp theo.
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-gray-400 font-mono shrink-0">
                  10:05 · 18/10/2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form card (4 cols) */}
        {showAddForm && (
          <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-base font-bold text-gray-900">
                  Thêm chủ đề theo dõi
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">Cấu hình mới · Chưa lưu</p>
              </div>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              {/* Tên chủ đề */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Tên chủ đề
                </label>
                <input
                  type="text"
                  value={topicName}
                  onChange={(e) => setTopicName(e.target.value)}
                  placeholder="Nhập tên chủ đề..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Từ khóa theo dõi */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Từ khóa theo dõi
                </label>
                <textarea
                  rows={2}
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Nhập các từ khóa..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Phân tách các từ khóa bằng dấu phẩy. Khớp ít nhất một từ khóa.
                </p>
              </div>

              {/* Nền tảng thu thập */}
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Nền tảng thu thập
                </label>
                <div className="space-y-2">
                  {['Facebook', 'Threads', 'Reddit'].map((p) => {
                    const isChecked = selectedPlatforms.includes(p);
                    return (
                      <div
                        key={p}
                        onClick={() => togglePlatform(p)}
                        className="flex items-center justify-between p-2 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-indigo-600 text-white'
                                : 'border border-gray-300'
                            }`}
                          >
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                          <span className="font-medium text-gray-800">{p}</span>
                        </div>
                        <span className="text-[11px] text-gray-400">Công khai</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chu kỳ cập nhật */}
              <div>
                <label className="block font-semibold text-gray-700 mb-1.5">
                  Chu kỳ cập nhật
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1 giờ', '2 giờ', '6 giờ'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCycle(c)}
                      className={`py-1.5 text-center rounded-lg font-medium border text-xs transition-colors ${
                        cycle === c
                          ? 'border-indigo-600 text-indigo-600 bg-indigo-50/50'
                          : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">
                  Áp dụng từ lần thu thập kế tiếp sau khi lưu.
                </p>
              </div>

              {/* Privacy disclaimer */}
              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200/80 flex items-start gap-2 text-[11px] text-gray-500">
                <Shield className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
                <p className="leading-tight">
                  Chỉ dùng nguồn công khai. Không thu thập hồ sơ cá nhân hay nội dung riêng tư.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-sm"
                >
                  Lưu theo dõi
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Bottom informational banner */}
      <div className="p-3.5 rounded-xl border border-indigo-100 bg-indigo-50/50 flex items-start gap-3 text-xs text-indigo-900">
        <Bookmark className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Theo dõi để lưu chủ đề và xem các lần cập nhật tại đây. Thông báo qua email thuộc phạm vi phát triển sau, chưa có trong bản demo này.
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

export default WatchedTopics;

