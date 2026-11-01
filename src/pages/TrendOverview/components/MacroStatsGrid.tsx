import React from 'react';
import { Hash, FileText, MessageSquare, ThumbsUp } from 'lucide-react';
import { StatCard } from '../../../components/ui';
import type { MacroStatItem } from '../../../data/trendOverview';

interface Props {
  stats: MacroStatItem[];
}

const iconMap = {
  topic: <Hash className="h-5 w-5" />,
  post: <FileText className="h-5 w-5" />,
  comment: <MessageSquare className="h-5 w-5" />,
  interaction: <ThumbsUp className="h-5 w-5" />,
};

export const MacroStatsGrid: React.FC<Props> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <StatCard
          key={s.id}
          label={s.label}
          value={s.value}
          change={s.badge}
          changeType={s.changeType}
          description={s.description}
          icon={iconMap[s.iconType]}
        />
      ))}
    </div>
  );
};

