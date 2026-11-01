import React from 'react';
import { Card } from '../../../components/ui';
import { ALL_COMPARE_TOPICS, type CompareTopicMeta } from '../../../data/topicComparison';

interface Props {
  selectedNames: string[];
}

export const ComparisonSummaryCards: React.FC<Props> = ({ selectedNames }) => {
  const topics: CompareTopicMeta[] = selectedNames.map(
    (name) =>
      ALL_COMPARE_TOPICS[name] || {
        name,
        color: '#6366f1',
        badgeBg: 'bg-gray-100',
        badgeBorder: 'border-gray-200',
        badgeText: 'text-gray-700',
        dotBg: 'bg-gray-400',
        posts: 0,
        comments: 0,
        interactions: 0,
        score: 0,
        growth: '',
      }
  );

  const first = topics[0];
  const second = topics[1];
  const diffPosts = first && second ? first.posts - second.posts : 0;
  const diffPercent =
    second && second.posts > 0 ? ((diffPosts / second.posts) * 100).toFixed(1) : '0';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {topics.map((t) => (
        <Card key={t.name} className="p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
              <span className={`w-2 h-2 rounded-full ${t.dotBg}`} />
              <span className="truncate">{t.name}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
                {t.posts.toLocaleString('vi-VN')}
              </span>
              <span className="text-xs text-gray-500">bài viết</span>
              <span className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700">
                {t.growth}
              </span>
            </div>
          </div>
          <div className="pt-3 mt-3 border-t border-gray-100 text-xs text-gray-400">
            Điểm xu hướng: <span className="font-semibold text-gray-700">{t.score}/100</span>
          </div>
        </Card>
      ))}

      {/* Difference highlight card */}
      {first && second && (
        <Card className="p-5 bg-gradient-to-br from-sky-50/70 to-blue-50/30 border-sky-100 flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-sky-700 mb-2">
              Chênh lệch ({first.name} vs {second.name})
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-sky-600 tracking-tight">
                {diffPosts >= 0 ? `+${diffPosts.toLocaleString('vi-VN')}` : diffPosts.toLocaleString('vi-VN')}
              </span>
              <span className="text-xs font-medium text-gray-600">
                {diffPosts >= 0 ? `Cao hơn ${diffPercent}%` : `Thấp hơn ${Math.abs(Number(diffPercent))}%`}
              </span>
            </div>
          </div>
          <div className="pt-3 mt-3 border-t border-sky-100/60 text-xs text-sky-900/60">
            Dựa trên số lượng bài viết ghi nhận tuần qua
          </div>
        </Card>
      )}
    </div>
  );
};

