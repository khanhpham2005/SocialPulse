// ============================================================
// Mock data for Trend Overview page
// ============================================================

export interface MacroStatItem {
  id: string;
  label: string;
  value: string;
  badge?: string;
  description: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  iconType: 'topic' | 'post' | 'comment' | 'interaction';
}

export interface WeeklyDataPoint {
  date: string;
  posts: number;
}

export interface PlatformDistributionItem {
  name: string;
  value: number;
  percent: string;
  color: string;
}

export interface TrendingTopicItem {
  id: string;
  rank: string;
  title: string;
  path: string;
  summary: string;
  category: string;
  platforms: ('Facebook' | 'Threads' | 'Reddit')[];
  posts: string;
  score: number;
  growth: string;
  following: boolean;
}

export const macroStats: MacroStatItem[] = [
  {
    id: 'topics',
    label: 'Chủ đề được ghi nhận',
    value: '24',
    description: 'Thuộc 5 lĩnh vực được theo dõi',
    iconType: 'topic',
  },
  {
    id: 'posts',
    label: 'Bài viết công khai',
    value: '6.840',
    badge: '+21%',
    changeType: 'positive',
    description: 'Sau khi loại nội dung bị gắn cờ rác',
    iconType: 'post',
  },
  {
    id: 'comments',
    label: 'Bình luận được phân tích',
    value: '24.680',
    badge: '+16%',
    changeType: 'positive',
    description: 'Danh tính cá nhân đã được ẩn',
    iconType: 'comment',
  },
  {
    id: 'interactions',
    label: 'Lượt tương tác',
    value: '98.700',
    badge: '+23%',
    changeType: 'positive',
    description: 'Lượt thích, chia sẻ và phản hồi',
    iconType: 'interaction',
  },
];

export const weeklyData: WeeklyDataPoint[] = [
  { date: '12/10', posts: 650 },
  { date: '13/10', posts: 720 },
  { date: '14/10', posts: 800 },
  { date: '15/10', posts: 880 },
  { date: '16/10', posts: 980 },
  { date: '17/10', posts: 1180 },
  { date: '18/10', posts: 1440 },
];

export const platformData: PlatformDistributionItem[] = [
  { name: 'Facebook', value: 3420, percent: '50%', color: '#2563eb' },
  { name: 'Threads', value: 2052, percent: '30%', color: '#1e293b' },
  { name: 'Reddit', value: 1368, percent: '20%', color: '#ea580c' },
];

export const initialTrendingTopics: TrendingTopicItem[] = [
  {
    id: 'topic-1',
    rank: '01',
    title: 'AI trong giáo dục',
    path: '/chi-tiet-chu-de?id=topic-1',
    summary: 'Thảo luận xoay quanh công cụ hỗ trợ học tập, chấm điểm tự động và băn khoăn về tính liêm chính học thuật.',
    category: 'Giáo dục · Công nghệ',
    platforms: ['Facebook', 'Threads', 'Reddit'],
    posts: '1.240',
    score: 92,
    growth: '+32%',
    following: true,
  },
  {
    id: 'topic-2',
    rank: '02',
    title: 'Giao thông xanh',
    path: '/chi-tiet-chu-de?id=topic-2',
    summary: 'Cộng đồng trao đổi về mở rộng lộ trình xe buýt điện, hạ tầng trạm sạc công cộng và trải nghiệm phương tiện cá nhân.',
    category: 'Đô thị · Môi trường',
    platforms: ['Facebook', 'Threads'],
    posts: '980',
    score: 86,
    growth: '+24%',
    following: false,
  },
  {
    id: 'topic-3',
    rank: '03',
    title: 'Kỹ năng số cho người trẻ',
    path: '/chi-tiet-chu-de?id=topic-3',
    summary: 'Chia sẻ khóa học kỹ năng số miễn phí, kinh nghiệm tự học và thích ứng với yêu cầu tuyển dụng mới.',
    category: 'Nghề nghiệp · Giáo dục',
    platforms: ['Facebook', 'Threads'],
    posts: '760',
    score: 81,
    growth: '+18%',
    following: true,
  },
  {
    id: 'topic-4',
    rank: '04',
    title: 'Tiêu dùng bền vững',
    path: '/chi-tiet-chu-de?id=topic-4',
    summary: 'Thảo luận về giảm rác thải nhựa, thời trang tuần hoàn và chọn sản phẩm thân thiện môi trường trong sinh hoạt.',
    category: 'Lối sống · Tiêu dùng',
    platforms: ['Facebook', 'Reddit'],
    posts: '620',
    score: 74,
    growth: '+12%',
    following: false,
  },
  {
    id: 'topic-5',
    rank: '05',
    title: 'Chạy bộ cộng đồng',
    path: '/chi-tiet-chu-de?id=topic-5',
    summary: 'Phong trào chạy bộ cuối tuần, các câu lạc bộ tại địa phương và chia sẻ lịch trình rèn luyện thể lực.',
    category: 'Thể thao · Sức khỏe',
    platforms: ['Facebook', 'Threads'],
    posts: '480',
    score: 69,
    growth: '+9%',
    following: false,
  },
];
