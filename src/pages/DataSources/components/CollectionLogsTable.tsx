import React from 'react';
import { Card, Badge } from '../../../components/ui';
import type { CollectionLogItem } from '../../../data/dataSources';

interface Props {
  logs: CollectionLogItem[];
}

export const CollectionLogsTable: React.FC<Props> = ({ logs }) => {
  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900">Nhật ký thu thập gần đây</h2>
        <p className="text-xs text-gray-500">Ghi nhận các mốc quét tự động và kết quả lọc dữ liệu</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="py-3 px-5 w-32">Thời gian</th>
              <th className="py-3 px-5 w-32">Nền tảng</th>
              <th className="py-3 px-5">Nội dung ghi nhận</th>
              <th className="py-3 px-5 text-right w-40">Kết quả</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-3.5 px-5 text-xs text-gray-500 font-medium">
                  {log.time}
                </td>
                <td className="py-3.5 px-5">
                  <Badge variant="gray" size="sm">
                    {log.platform}
                  </Badge>
                </td>
                <td className="py-3.5 px-5 text-xs text-gray-700">
                  {log.desc}
                </td>
                <td className="py-3.5 px-5 text-right">
                  <Badge variant={log.status === 'success' ? 'green' : 'red'} size="sm">
                    {log.statusText}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

