// ============================================================
// Mock data for Watched Topics page
// ============================================================

export interface WatchedTopicItem {
  id: string;
  name: string;
  keywords: string;
  platforms: string[];
  cycle: string;
  lastUpdate: string;
  status: 'active' | 'paused';
}

export interface RecentActivityItem {
  id: string;
  time: string;
  title: string;
  desc: string;
}

export const initialWatchedTopics: WatchedTopicItem[] = [
  {
    id: '1',
    name: 'AI trong giáo dục',
    keywords: 'AI giáo dục, học tập AI, công cụ soạn bài',
    platforms: ['Facebook', 'Threads', 'Reddit'],
    cycle: '2 giờ',
    lastUpdate: '18:00\n18/10/2026',
    status: 'active',
  },
  {
    id: '2',
    name: 'Kỹ năng số cho người trẻ',
    keywords: 'kỹ năng số, học kỹ năng, lập trình cơ bản',
    platforms: ['Facebook', 'Threads'],
    cycle: '6 giờ',
    lastUpdate: '17:00\n18/10/2026',
    status: 'active',
  },
  {
    id: '3',
    name: 'Học trực tuyến',
    keywords: 'học trực tuyến, lớp học số, edtech',
    platforms: ['Facebook', 'Reddit'],
    cycle: '1 giờ',
    lastUpdate: '10:00\n18/10/2026',
    status: 'paused',
  },
];

export const recentActivities: RecentActivityItem[] = [
  {
    id: 'act-1',
    time: '18:00 · 18/10',
    title: 'Hoàn thành quét chu kỳ 2 giờ',
    desc: 'Thu thập 45 bài viết mới cho chủ đề AI trong giáo dục từ 3 nền tảng.',
  },
  {
    id: 'act-2',
    time: '17:00 · 18/10',
    title: 'Cập nhật từ khóa theo dõi',
    desc: 'Đã bổ sung từ khóa "lập trình cơ bản" vào chủ đề Kỹ năng số.',
  },
  {
    id: 'act-3',
    time: '10:00 · 18/10',
    title: 'Tạm dừng thu thập',
    desc: 'Chủ đề Học trực tuyến tạm dừng theo yêu cầu cấu hình.',
  },
];
