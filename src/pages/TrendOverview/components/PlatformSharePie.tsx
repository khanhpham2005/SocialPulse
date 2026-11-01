import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Card } from '../../../components/ui';
import type { PlatformDistributionItem } from '../../../data/trendOverview';

interface Props {
  data: PlatformDistributionItem[];
}

export const PlatformSharePie: React.FC<Props> = ({ data }) => {
  return (
    <Card className="lg:col-span-4 flex flex-col justify-between">
      <div>
        <h2 className="text-base font-bold text-gray-900 mb-1">Phân bố nền tảng</h2>
        <p className="text-xs text-gray-500 mb-4">Tỷ trọng trên 6.840 bài viết</p>

        <div className="h-48 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
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
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-bold text-gray-900">3</span>
            <span className="text-[10px] text-gray-400 uppercase font-semibold">Nền tảng</span>
          </div>
        </div>

        <div className="space-y-2 mt-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-medium text-gray-700">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400">{item.value.toLocaleString('vi-VN')} bài</span>
                <span className="font-semibold text-gray-900 w-8 text-right">{item.percent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-gray-500">
        <span>Ghi nhận từ trang/kênh công khai</span>
      </div>
    </Card>
  );
};

