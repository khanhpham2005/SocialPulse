import React from 'react';
import { Play, Pause, Trash2 } from 'lucide-react';
import { Card, Badge } from '../../../components/ui';
import type { WatchedTopicItem } from '../../../data/watchedTopics';

interface Props {
  topics: WatchedTopicItem[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}

export const WatchedTopicsTable: React.FC<Props> = ({
  topics,
  onToggleStatus,
  onDelete,
}) => {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-900">Danh sách chủ đề theo dõi ({topics.length})</h2>
          <p className="text-xs text-gray-500">Tự động thu thập bài viết theo từ khóa và chu kỳ đã thiết lập</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="py-3 px-5">Chủ đề & Từ khóa</th>
              <th className="py-3 px-5">Nền tảng</th>
              <th className="py-3 px-5 text-center">Chu kỳ</th>
              <th className="py-3 px-5 text-center">Lần quét gần nhất</th>
              <th className="py-3 px-5 text-center">Trạng thái</th>
              <th className="py-3 px-5 text-right w-24">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {topics.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-xs text-gray-400">
                  Chưa có chủ đề theo dõi nào
                </td>
              </tr>
            ) : (
              topics.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-5">
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{t.keywords}</div>
                  </td>

                  <td className="py-3.5 px-5">
                    <div className="flex flex-wrap gap-1">
                      {t.platforms.map((p) => (
                        <Badge key={p} variant="gray" size="sm">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  </td>

                  <td className="py-3.5 px-5 text-center text-xs text-gray-600 font-medium">
                    {t.cycle}
                  </td>

                  <td className="py-3.5 px-5 text-center text-xs text-gray-500 whitespace-pre-line">
                    {t.lastUpdate}
                  </td>

                  <td className="py-3.5 px-5 text-center">
                    <Badge variant={t.status === 'active' ? 'green' : 'yellow'} size="sm">
                      {t.status === 'active' ? 'Đang theo dõi' : 'Tạm dừng'}
                    </Badge>
                  </td>

                  <td className="py-3.5 px-5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        type="button"
                        onClick={() => onToggleStatus(t.id)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          t.status === 'active'
                            ? 'text-amber-600 border-amber-200 hover:bg-amber-50'
                            : 'text-emerald-600 border-emerald-200 hover:bg-emerald-50'
                        }`}
                        title={t.status === 'active' ? 'Tạm dừng quét' : 'Tiếp tục theo dõi'}
                      >
                        {t.status === 'active' ? (
                          <Pause className="h-3.5 w-3.5" />
                        ) : (
                          <Play className="h-3.5 w-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onDelete(t.id)}
                        className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 border border-transparent hover:border-rose-100 transition-colors"
                        title="Xóa chủ đề"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
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

