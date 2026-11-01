import React from 'react';
import { FileText, MessageSquare, ThumbsUp, TrendingUp } from 'lucide-react';
import { StatCard } from '../../../components/ui';
import type { TopicStatItem } from '../../../data/topicDetail';

interface Props {
  stats: TopicStatItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  posts: <FileText className="h-5 w-5" />,
  comments: <MessageSquare className="h-5 w-5" />,
  interactions: <ThumbsUp className="h-5 w-5" />,
  score: <TrendingUp className="h-5 w-5" />,
};

export const TopicStatsGrid: React.FC<Props> = ({ stats }) => {
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
          icon={iconMap[s.id] || <FileText className="h-5 w-5" />}
        />
      ))}
    </div>
  );
};

