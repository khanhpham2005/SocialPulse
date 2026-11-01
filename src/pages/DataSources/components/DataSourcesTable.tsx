import React, { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Card, Badge, SearchInput } from '../../../components/ui';
import type { DataSourceItem } from '../../../data/dataSources';

interface Props {
  sources: DataSourceItem[];
  onToggleStatus: (id: string) => void;
}

const statusBadgeVariant = {
  active: 'green' as const,
  paused: 'yellow' as const,
  error: 'red' as const,
};

export const DataSourcesTable: React.FC<Props> = ({ sources, onToggleStatus }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('Tất cả');

  const filtered = sources.filter((s) => {
    const matchPlatform = platformFilter === 'Tất cả' || s.platform === platformFilter;
    const matchSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.sub.toLowerCase().includes(searchTerm.toLowerCase());
    return matchPlatform && matchSearch;
  });

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-gray-900">Danh sách nguồn thu thập ({sources.length})</h2>
          <p className="text-xs text-gray-500">Các trang công khai, nhóm mở và từ khóa đang được theo dõi</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-1.5 bg-gray-50 p-1 rounded-lg border border-gray-100">
            {['Tất cả', 'Facebook', 'Threads', 'Reddit'].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlatformFilter(p)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  platformFilter === p
                    ? 'bg-white text-sky-700 shadow-xs font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <SearchInput
            placeholder="Tìm nguồn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-xs py-1.5"
            containerClassName="w-full sm:w-48"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="py-3 px-5">Tên nguồn</th>
              <th className="py-3 px-5">Nền tảng</th>
              <th className="py-3 px-5 text-center">Chu kỳ quét</th>
              <th className="py-3 px-5 text-center">Lần quét gần nhất</th>
              <th className="py-3 px-5 text-center">Trạng thái</th>
              <th className="py-3 px-5 text-right w-20">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-xs text-gray-400">
                  Không tìm thấy nguồn thu thập phù hợp
                </td>
              </tr>
            ) : (
              filtered.map((src) => (
                <tr key={src.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="font-semibold text-gray-900 text-sm">{src.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{src.sub}</div>
                  </td>

                  <td className="py-3.5 px-5">
                    <Badge variant="gray" size="sm">
                      {src.platform}
                    </Badge>
                  </td>

                  <td className="py-3.5 px-5 text-center text-xs text-gray-600 font-medium">
                    {src.cycle}
                  </td>

                  <td className="py-3.5 px-5 text-center text-xs text-gray-500">
                    {src.lastRun}
                  </td>

                  <td className="py-3.5 px-5 text-center">
                    <Badge variant={statusBadgeVariant[src.status]} size="sm">
                      {src.statusText}
                    </Badge>
                  </td>

                  <td className="py-3.5 px-5 text-right">
                    <button
                      type="button"
                      onClick={() => onToggleStatus(src.id)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        src.status === 'active'
                          ? 'text-amber-600 border-amber-200 hover:bg-amber-50'
                          : 'text-emerald-600 border-emerald-200 hover:bg-emerald-50'
                      }`}
                      title={src.status === 'active' ? 'Tạm dừng nguồn' : 'Kích hoạt lại'}
                    >
                      {src.status === 'active' ? (
                        <Pause className="h-3.5 w-3.5" />
                      ) : (
                        <Play className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

