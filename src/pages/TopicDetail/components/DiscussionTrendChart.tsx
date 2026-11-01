import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { Card } from '../../../components/ui';
import type { DiscussionTrendPoint } from '../../../data/topicDetail';

interface Props {
  data: DiscussionTrendPoint[];
}

export const DiscussionTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <Card className="lg:col-span-7 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-base font-bold text-gray-900">Diễn biến thảo luận theo ngày</h2>
          <span className="text-xs text-gray-400">12–18/10/2026</span>
        </div>
        <p className="text-xs text-gray-500 mb-6">Số lượng bài viết công khai ghi nhận qua từng ngày</p>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTopicPosts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 11 }} />
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
              <Area type="monotone" dataKey="posts" stroke="#0284c7" strokeWidth={2.5} fillOpacity={1} fill="url(#colorTopicPosts)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span>Đỉnh điểm ngày 18/10 đạt 290 bài viết công khai.</span>
      </div>
    </Card>
  );
};

