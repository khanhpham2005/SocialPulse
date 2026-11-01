// ============================================================
// Mock data for Topic Comparison page
// ============================================================

export interface CompareTopicMeta {
  name: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  dotBg: string;
  posts: number;
  comments: number;
  interactions: number;
  score: number;
  growth: string;
}

export const ALL_COMPARE_TOPICS: Record<string, CompareTopicMeta> = {
  'AI trong giáo dục': {
    name: 'AI trong giáo dục',
    color: '#0284c7',
    badgeBg: 'bg-sky-50',
    badgeBorder: 'border-sky-200',
    badgeText: 'text-sky-700',
    dotBg: 'bg-sky-600',
    posts: 1240,
    comments: 4860,
    interactions: 18600,
    score: 92,
    growth: '+32%',
  },
  'Giao thông xanh': {
    name: 'Giao thông xanh',
    color: '#0d9488',
    badgeBg: 'bg-teal-50',
    badgeBorder: 'border-teal-200',
    badgeText: 'text-teal-700',
    dotBg: 'bg-teal-600',
    posts: 980,
    comments: 3920,
    interactions: 14200,
    score: 86,
    growth: '+24%',
  },
  'Kỹ năng số cho người trẻ': {
    name: 'Kỹ năng số cho người trẻ',
    color: '#f59e0b',
    badgeBg: 'bg-amber-50',
    badgeBorder: 'border-amber-200',
    badgeText: 'text-amber-700',
    dotBg: 'bg-amber-600',
    posts: 760,
    comments: 2840,
    interactions: 11500,
    score: 81,
    growth: '+18%',
  },
  'Tiêu dùng bền vững': {
    name: 'Tiêu dùng bền vững',
    color: '#8b5cf6',
    badgeBg: 'bg-purple-50',
    badgeBorder: 'border-purple-200',
    badgeText: 'text-purple-700',
    dotBg: 'bg-purple-600',
    posts: 620,
    comments: 2100,
    interactions: 9200,
    score: 74,
    growth: '+12%',
  },
  'Chạy bộ cộng đồng': {
    name: 'Chạy bộ cộng đồng',
    color: '#ec4899',
    badgeBg: 'bg-pink-50',
    badgeBorder: 'border-pink-200',
    badgeText: 'text-pink-700',
    dotBg: 'bg-pink-600',
    posts: 480,
    comments: 1650,
    interactions: 6400,
    score: 69,
    growth: '+9%',
  },
};

export const defaultSelectedComparison = ['AI trong giáo dục', 'Giao thông xanh'];

export const basePlatformData = [
  { platform: 'Facebook', 'AI trong giáo dục': 620, 'Giao thông xanh': 392, 'Kỹ năng số cho người trẻ': 320, 'Tiêu dùng bền vững': 260, 'Chạy bộ cộng đồng': 240 },
  { platform: 'Threads', 'AI trong giáo dục': 434, 'Giao thông xanh': 294, 'Kỹ năng số cho người trẻ': 260, 'Tiêu dùng bền vững': 210, 'Chạy bộ cộng đồng': 150 },
  { platform: 'Reddit', 'AI trong giáo dục': 186, 'Giao thông xanh': 294, 'Kỹ năng số cho người trẻ': 180, 'Tiêu dùng bền vững': 150, 'Chạy bộ cộng đồng': 90 },
];

export const baseDailyTrendData = [
  { date: '12/10', 'AI trong giáo dục': 100, 'Giao thông xanh': 95, 'Kỹ năng số cho người trẻ': 80, 'Tiêu dùng bền vững': 70, 'Chạy bộ cộng đồng': 50 },
  { date: '13/10', 'AI trong giáo dục': 125, 'Giao thông xanh': 115, 'Kỹ năng số cho người trẻ': 90, 'Tiêu dùng bền vững': 75, 'Chạy bộ cộng đồng': 55 },
  { date: '14/10', 'AI trong giáo dục': 145, 'Giao thông xanh': 130, 'Kỹ năng số cho người trẻ': 105, 'Tiêu dùng bền vững': 85, 'Chạy bộ cộng đồng': 65 },
  { date: '15/10', 'AI trong giáo dục': 160, 'Giao thông xanh': 140, 'Kỹ năng số cho người trẻ': 115, 'Tiêu dùng bền vững': 90, 'Chạy bộ cộng đồng': 70 },
  { date: '16/10', 'AI trong giáo dục': 200, 'Giao thông xanh': 160, 'Kỹ năng số cho người trẻ': 120, 'Tiêu dùng bền vững': 95, 'Chạy bộ cộng đồng': 75 },
  { date: '17/10', 'AI trong giáo dục': 240, 'Giao thông xanh': 185, 'Kỹ năng số cho người trẻ': 125, 'Tiêu dùng bền vững': 100, 'Chạy bộ cộng đồng': 80 },
  { date: '18/10', 'AI trong giáo dục': 290, 'Giao thông xanh': 210, 'Kỹ năng số cho người trẻ': 130, 'Tiêu dùng bền vững': 105, 'Chạy bộ cộng đồng': 85 },
];

export interface ComparisonTableRow {
  metric: string;
  valA: string;
  valB: string;
  diff: string;
}

export const generateComparisonRows = (topicA: CompareTopicMeta, topicB: CompareTopicMeta): ComparisonTableRow[] => {
  const postDiff = topicA.posts - topicB.posts;
  const commentDiff = topicA.comments - topicB.comments;
  const intDiff = topicA.interactions - topicB.interactions;
  const scoreDiff = topicA.score - topicB.score;

  return [
    {
      metric: 'Bài viết công khai',
      valA: topicA.posts.toLocaleString('vi-VN'),
      valB: topicB.posts.toLocaleString('vi-VN'),
      diff: postDiff >= 0 ? `+${postDiff.toLocaleString('vi-VN')} bài` : `${postDiff.toLocaleString('vi-VN')} bài`,
    },
    {
      metric: 'Bình luận thảo luận',
      valA: topicA.comments.toLocaleString('vi-VN'),
      valB: topicB.comments.toLocaleString('vi-VN'),
      diff: commentDiff >= 0 ? `+${commentDiff.toLocaleString('vi-VN')} bình luận` : `${commentDiff.toLocaleString('vi-VN')} bình luận`,
    },
    {
      metric: 'Lượt tương tác',
      valA: topicA.interactions.toLocaleString('vi-VN'),
      valB: topicB.interactions.toLocaleString('vi-VN'),
      diff: intDiff >= 0 ? `+${intDiff.toLocaleString('vi-VN')} tương tác` : `${intDiff.toLocaleString('vi-VN')} tương tác`,
    },
    {
      metric: 'Điểm xu hướng',
      valA: `${topicA.score} / 100`,
      valB: `${topicB.score} / 100`,
      diff: scoreDiff >= 0 ? `+${scoreDiff} điểm` : `${scoreDiff} điểm`,
    },
    {
      metric: 'Tăng trưởng bài viết / tuần',
      valA: topicA.growth,
      valB: topicB.growth,
      diff: 'So sánh tốc độ',
    },
  ];
};
