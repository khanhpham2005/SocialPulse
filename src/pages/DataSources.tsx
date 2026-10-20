import React, { useState } from 'react';
import {
  Shield,
  Plus,
  Search,
  Pencil,
  Pause,
  Play,
  MoreHorizontal,
  RotateCw,
  Clock,
  Calendar,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface DataSourceItem {
  id: string;
  name: string;
  sub: string;
  platform: 'Facebook' | 'Threads' | 'Reddit';
  cycle: string;
  lastRun: string;
  status: 'active' | 'paused' | 'error';
  statusText: string;
}

const initialSources: DataSourceItem[] = [
  {
    id: '1',
    name: 'Diễn đàn Giáo dục số',
    sub: 'Trang công khai · Nguồn demo',
    platform: 'Facebook',
    cycle: '2 giờ',
    lastRun: '16:00 · 18/10',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: '2',
    name: 'Di chuyển bền vững',
    sub: 'Trang công khai · Nguồn demo',
    platform: 'Facebook',
    cycle: '2 giờ',
    lastRun: '16:00 · 18/10',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: '3',
    name: '#hoctapso',
    sub: 'Từ khóa công khai · Nguồn demo',
    platform: 'Threads',
    cycle: '1 giờ',
    lastRun: '18:00 · 18/10',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: '4',
    name: 'r/GreenMobilityDemo',
    sub: 'Cộng đồng công khai · Nguồn demo',
    platform: 'Reddit',
    cycle: '6 giờ',
    lastRun: '12:00 · 18/10',
    status: 'error',
    statusText: 'Lỗi giới hạn truy cập',
  },
  {
    id: '5',
    name: 'Chạy bộ mỗi ngày',
    sub: 'Trang công khai · Nguồn demo',
    platform: 'Facebook',
    cycle: '6 giờ',
    lastRun: '06:00 · 18/10',
    status: 'paused',
    statusText: 'Tạm dừng',
  },
  {
    id: '6',
    name: '#kynangso',
    sub: 'Từ khóa công khai · Nguồn demo',
    platform: 'Threads',
    cycle: '2 giờ',
    lastRun: '10:00 · 18/10',
    status: 'paused',
    statusText: 'Tạm dừng',
  },
];

const logEntries = [
  {
    id: 'l1',
    time: '18:00',
    platform: 'Facebook',
    desc: '255 bài nhận về · 240 hợp lệ · 15 bài rác',
    status: 'success',
    statusText: 'Thành công',
  },
  {
    id: 'l2',
    time: '18:00',
    platform: 'Threads',
    desc: '138 bài nhận về · 128 hợp lệ · 10 bài rác',
    status: 'success',
    statusText: 'Thành công',
  },
  {
    id: 'l3',
    time: '18:00',
    platform: 'Reddit',
    desc: 'r/GreenMobilityDemo · Giới hạn truy cập · Thử lại lúc 19:00',
    status: 'error',
    statusText: 'Lỗi 429',
  },
  {
    id: 'l4',
    time: '17:00',
    platform: 'Threads',
    desc: '112 bài nhận về · 104 hợp lệ · 8 bài rác',
    status: 'success',
    statusText: 'Thành công',
  },
];

const DataSources: React.FC = () => {
  const [sources, setSources] = useState<DataSourceItem[]>(initialSources);
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const toggleSourceStatus = (id: string) => {
    setSources(
      sources.map((s) => {
        if (s.id === id) {
          if (s.status === 'active') {
            return { ...s, status: 'paused', statusText: 'Tạm dừng' };
          } else if (s.status === 'paused') {
            return { ...s, status: 'active', statusText: 'Đang hoạt động' };
          } else {
            return { ...s, status: 'active', statusText: 'Đang hoạt động' };
          }
        }
        return s;
      })
    );
  };

  const filteredSources = sources.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sub.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform =
      platformFilter === 'all' || s.platform.toLowerCase() === platformFilter;
    const matchesStatus =
      statusFilter === 'all' || s.status === statusFilter;
    return matchesSearch && matchesPlatform && matchesStatus;
  });

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header section */}
      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          QUẢN TRỊ / NGUỒN CÔNG KHAI
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Quản lý nguồn dữ liệu
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Quản lý kết nối, lịch thu thập và chất lượng dữ liệu cho không gian SocialPulse.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors shrink-0 shadow-sm self-start sm:self-auto">
            <Plus className="h-4 w-4" />
            <span>Thêm nguồn</span>
          </button>
        </div>
      </div>

      {/* Demo Warning Banner */}
      <div className="p-3.5 rounded-xl border border-indigo-100 bg-indigo-50/60 flex items-start gap-3 text-xs text-indigo-900">
        <Shield className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <span className="font-semibold">Chế độ quản trị demo</span> – Chỉ cấu hình nguồn công khai. Mọi trạng thái kết nối, nhật ký và chỉ số bên dưới đều là minh họa; không hiển thị thông tin xác thực API.
        </p>
      </div>

      {/* 3 Platform Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Facebook */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                f
              </span>
              <span className="font-bold text-gray-900 text-sm">Facebook</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
            Kết nối ổn định
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">6 nguồn</span>
              <span className="text-xs text-gray-500">5 hoạt động · 1 tạm dừng</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-100">
            Lần thu thập gần nhất: 16:00
          </p>
        </div>

        {/* Threads */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-xs">
                @
              </span>
              <span className="font-bold text-gray-900 text-sm">Threads</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
            Kết nối ổn định
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">3 nguồn</span>
              <span className="text-xs text-gray-500">2 hoạt động · 1 tạm dừng</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-100">
            Lần thu thập gần nhất: 18:00
          </p>
        </div>

        {/* Reddit */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                r
              </span>
              <span className="font-bold text-gray-900 text-sm">Reddit</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>

          <div className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700">
            Cần kiểm tra
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">3 nguồn</span>
              <span className="text-xs text-gray-500">2 hoạt động · 1 nguồn lỗi</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 pt-2 border-t border-gray-100">
            Nguồn lỗi sẽ thử lại lúc 19:00
          </p>
        </div>
      </div>

      {/* Main Table: Danh sách nguồn */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-gray-900">Danh sách nguồn</h2>
            <p className="text-xs text-gray-500 mt-0.5">
              12 nguồn đã cấu hình · 9 hoạt động · 2 tạm dừng · 1 lỗi
            </p>
          </div>
          <span className="self-start sm:self-auto px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
            Chỉ nguồn công khai
          </span>
        </div>

        {/* Filter bar */}
        <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo tên nguồn hoặc từ khóa..."
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={platformFilter}
              onChange={(e) => setPlatformFilter(e.target.value)}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">Tất cả nền tảng</option>
              <option value="facebook">Facebook</option>
              <option value="threads">Threads</option>
              <option value="reddit">Reddit</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Đang hoạt động</option>
              <option value="paused">Tạm dừng</option>
              <option value="error">Lỗi</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50/50">
                <th className="py-3 px-5">TÊN NGUỒN</th>
                <th className="py-3 px-4">NỀN TẢNG</th>
                <th className="py-3 px-4 text-center">CHU KỲ</th>
                <th className="py-3 px-4 text-center">LẦN GẦN NHẤT</th>
                <th className="py-3 px-4 text-center">TRẠNG THÁI</th>
                <th className="py-3 px-5 text-right">THAO TÁC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSources.map((source) => (
                <tr key={source.id} className="hover:bg-gray-50/70 transition-colors">
                  <td className="py-3.5 px-5 align-middle">
                    <div className="font-semibold text-gray-900">{source.name}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{source.sub}</div>
                  </td>

                  <td className="py-3.5 px-4 align-middle text-gray-600 font-medium">
                    {source.platform}
                  </td>

                  <td className="py-3.5 px-4 align-middle text-center text-gray-600 font-medium">
                    {source.cycle}
                  </td>

                  <td className="py-3.5 px-4 align-middle text-center text-gray-600">
                    {source.lastRun}
                  </td>

                  <td className="py-3.5 px-4 align-middle text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium ${
                        source.status === 'active'
                          ? 'bg-emerald-50 text-emerald-700'
                          : source.status === 'paused'
                          ? 'bg-gray-100 text-gray-600'
                          : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {source.statusText}
                    </span>
                  </td>

                  <td className="py-3.5 px-5 align-middle text-right">
                    <div className="inline-flex items-center gap-2 text-gray-400">
                      <button className="hover:text-indigo-600 transition-colors">
                        <Pencil className="h-3.5 w-3.5" />
                      </button>
                      {source.status === 'error' ? (
                        <button
                          onClick={() => toggleSourceStatus(source.id)}
                          className="hover:text-amber-600 transition-colors"
                        >
                          <RotateCw className="h-3.5 w-3.5 text-amber-500" />
                        </button>
                      ) : source.status === 'paused' ? (
                        <button
                          onClick={() => toggleSourceStatus(source.id)}
                          className="hover:text-emerald-600 transition-colors"
                        >
                          <Play className="h-3.5 w-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleSourceStatus(source.id)}
                          className="hover:text-gray-600 transition-colors"
                        >
                          <Pause className="h-3.5 w-3.5" />
                        </button>
                      )}
                      <button className="hover:text-gray-600 transition-colors">
                        <MoreHorizontal className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination footer */}
        <div className="p-4 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-3">
          <span>Hiển thị 6 / 12 nguồn · Múi giờ GMT+7</span>
          <div className="flex items-center gap-1 self-start sm:self-auto">
            <button className="px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-500 hover:bg-gray-50 disabled:opacity-50">
              Trước
            </button>
            <span className="px-3 py-1 font-semibold text-gray-800">1 / 2</span>
            <button className="px-2.5 py-1 bg-white border border-gray-200 rounded text-gray-500 hover:bg-gray-50">
              Tiếp
            </button>
          </div>
        </div>
      </div>

      {/* Row: Nhật ký thu thập & Lịch thu thập */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Nhật ký thu thập gần đây (7 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-gray-900">
                Nhật ký thu thập gần đây
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                18/10/2026 · Các lượt chạy minh họa
              </p>
            </div>
            <button className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              <span>Xem nhật ký</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-2.5 text-xs">
            {logEntries.map((log) => (
              <div
                key={log.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50/60 transition-colors gap-2"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <span className="font-mono text-gray-500 font-bold shrink-0">
                    {log.time}
                  </span>
                  <div>
                    <span className="font-bold text-gray-900 mr-2">
                      {log.platform}
                    </span>
                    <span className="text-gray-600 text-xs">{log.desc}</span>
                  </div>
                </div>

                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold self-start sm:self-center shrink-0 ${
                    log.status === 'success'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  {log.statusText}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Lịch thu thập (5 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Lịch thu thập</h2>
            <p className="text-xs text-gray-500 mt-0.5 mb-4">
              Cấu hình mặc định theo nền tảng
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                <span className="text-gray-700 font-medium">Facebook – Mỗi 2 giờ</span>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                <span className="text-gray-700 font-medium">Threads – Mỗi 1 giờ</span>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-gray-50">
                <span className="text-gray-700 font-medium">Reddit – Mỗi 6 giờ</span>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg border border-indigo-100 bg-indigo-50/40 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-indigo-600 shrink-0" />
              <div>
                <p className="text-[11px] text-gray-500">Lượt kế tiếp</p>
                <p className="text-xs font-bold text-gray-900">19:00 · 18/10/2026</p>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed pt-2 border-t border-gray-100">
            Mỗi nguồn có thể dùng chu kỳ riêng từ 1–6 giờ. Lỗi truy cập được thử lại theo lịch.
          </p>
        </div>
      </div>

      {/* Row: Chất lượng lọc nội dung rác & Quy tắc đưa vào phân tích */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Chất lượng lọc nội dung rác (7 cols) */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-bold text-gray-900">
                Chất lượng lọc nội dung rác
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Toàn hệ thống · 12–18/10/2026 · Số liệu demo
              </p>
            </div>
            <span className="self-start sm:self-auto px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md">
              Đã loại khỏi phân tích
            </span>
          </div>

          {/* 3 stats */}
          <div className="grid grid-cols-3 gap-4 pt-1">
            <div>
              <div className="text-2xl font-bold text-gray-900">7.440</div>
              <div className="text-xs text-gray-400 mt-0.5">Bài nhận về</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">600</div>
              <div className="text-xs text-gray-400 mt-0.5">
                Bài bị gắn cờ rác · 8,1%
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">6.840</div>
              <div className="text-xs text-gray-400 mt-0.5">
                Bài được đưa vào phân tích
              </div>
            </div>
          </div>

          {/* 4 Progress bars */}
          <div className="space-y-3 pt-2 text-xs">
            {/* 1 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-gray-600">
                <span>Nội dung trùng lặp</span>
                <span className="font-mono text-gray-500">270 · 45%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div style={{ width: '45%' }} className="bg-indigo-600 h-full rounded-full" />
              </div>
            </div>

            {/* 2 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-gray-600">
                <span>Quảng cáo</span>
                <span className="font-mono text-gray-500">180 · 30%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div style={{ width: '30%' }} className="bg-indigo-400 h-full rounded-full" />
              </div>
            </div>

            {/* 3 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-gray-600">
                <span>Đăng dồn dập bất thường</span>
                <span className="font-mono text-gray-500">90 · 15%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div style={{ width: '15%' }} className="bg-indigo-300 h-full rounded-full" />
              </div>
            </div>

            {/* 4 */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-gray-600">
                <span>Văn bản vô nghĩa</span>
                <span className="font-mono text-gray-500">60 · 10%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div style={{ width: '10%' }} className="bg-indigo-200 h-full rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quy tắc đưa vào phân tích (5 cols) */}
        <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-base font-bold text-gray-900 mb-4">
              Quy tắc đưa vào phân tích
            </h2>

            <div className="space-y-3 text-xs">
              {/* Highlight 1 */}
              <div className="p-3 rounded-xl border border-indigo-100 bg-indigo-50/60 flex items-start gap-2.5">
                <Sparkles className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                <p className="text-indigo-900 leading-relaxed font-medium">
                  600 bài bị gắn cờ rác không được tính vào thống kê, sắc thái hoặc tóm tắt tự động.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="p-3 rounded-xl border border-amber-200 bg-amber-50/60 space-y-1.5">
                <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                  140 bài chưa xác định
                </span>
                <p className="text-amber-900 text-xs leading-relaxed">
                  Chưa xác định không đồng nghĩa với rác. 140 bài này vẫn nằm trong 6.840 bài được phân tích, chờ xem xét thêm.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 leading-relaxed pt-3 border-t border-gray-100">
            Phân loại phục vụ chất lượng dữ liệu; không dùng để phán xét tính đúng/sai của nội dung.
          </p>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-gray-400 pt-2 border-t border-gray-100">
        <span>SocialPulse · Dữ liệu minh họa, không phản ánh hoạt động thực tế.</span>
        <span>Chu kỳ cập nhật 1–6 giờ · Không phải dữ liệu thời gian thực</span>
      </div>
    </div>
  );
};

export default DataSources;
