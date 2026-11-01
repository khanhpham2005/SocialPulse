import React from 'react';
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
import { Card } from '../../../components/ui';
import {
  ALL_COMPARE_TOPICS,
  basePlatformData,
  baseDailyTrendData,
} from '../../../data/topicComparison';

interface Props {
  selectedNames: string[];
}

export const ComparisonCharts: React.FC<Props> = ({ selectedNames }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Grouped Bar Chart (6 cols) */}
      <Card className="lg:col-span-6 p-5">
        <h2 className="text-base font-bold text-gray-900 mb-1">Thảo luận theo nền tảng</h2>
        <p className="text-xs text-gray-500 mb-4">Số lượng bài viết trên Facebook, Threads và Reddit</p>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={basePlatformData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="platform" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
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
              {selectedNames.map((name) => {
                const color = ALL_COMPARE_TOPICS[name]?.color || '#6366f1';
                return (
                  <Bar
                    key={name}
                    dataKey={name}
                    name={name}
                    fill={color}
                    radius={[4, 4, 0, 0]}
                  />
                );
              })}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-xs">
          {selectedNames.map((name) => {
            const color = ALL_COMPARE_TOPICS[name]?.color || '#6366f1';
            return (
              <div key={name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color }} />
                <span className="font-medium text-gray-700">{name}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Daily Trend Line Chart (6 cols) */}
      <Card className="lg:col-span-6 p-5">
        <h2 className="text-base font-bold text-gray-900 mb-1">Nhịp thảo luận 7 ngày qua</h2>
        <p className="text-xs text-gray-500 mb-4">So sánh tốc độ gia tăng số lượng bài viết mỗi ngày</p>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={baseDailyTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 11 }} />
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
              {selectedNames.map((name) => {
                const color = ALL_COMPARE_TOPICS[name]?.color || '#6366f1';
                return (
                  <Line
                    key={name}
                    type="monotone"
                    dataKey={name}
                    name={name}
                    stroke={color}
                    strokeWidth={2.5}
                    dot={{ r: 3, fill: color }}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-xs">
          {selectedNames.map((name) => {
            const color = ALL_COMPARE_TOPICS[name]?.color || '#6366f1';
            return (
              <div key={name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-medium text-gray-700">{name}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

