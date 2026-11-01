import React from 'react';
import { Clock } from 'lucide-react';
import { Card } from '../../../components/ui';
import type { RecentActivityItem } from '../../../data/watchedTopics';

interface Props {
  activities: RecentActivityItem[];
}

export const RecentActivitiesCard: React.FC<Props> = ({ activities }) => {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2 mb-3">
        <Clock className="h-4 w-4 text-sky-600" />
        <h2 className="text-sm font-bold text-gray-900">Nhật ký hoạt động gần đây</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {activities.map((act) => (
          <div key={act.id} className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
            <span className="text-[11px] font-semibold text-sky-600">{act.time}</span>
            <h4 className="text-xs font-bold text-gray-900 mt-1 mb-0.5">{act.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{act.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

