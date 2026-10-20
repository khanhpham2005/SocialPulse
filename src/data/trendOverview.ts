// ============================================================
// Mock data for Trend Overview page
// ============================================================

export interface SummaryStat {
  label: string
  value: string
  change: string
  changePercent: string
  description: string
  icon: 'topic' | 'post' | 'comment' | 'interaction'
}

export interface WeeklyDiscussionPoint {
  date: string
  posts: number
}

export interface PlatformDistributionItem {
  platform: string
  count: number
  percent: number
  color: string
}

export interface TrendingTopic {
  rank: string
  name: string
  posts: number
  score: number
  change: string
  tags: string[]
  platforms: ('facebook' | 'threads' | 'reddit')[]
  summary: string
  isFollowing?: boolean
}

// --------------- Summary Stats ---------------
export const summaryStats: SummaryStat[] = [
  {
    label: 'Chủ đề được ghi nhận',
    value: '24',
    change: '',
    changePercent: '',
    description: 'Thuộc 5 lĩnh vực được theo dõi',
    icon: 'topic',
  },
  {
    label: 'Bài viết công khai',
    value: '6,840',
    change: '+1,180',
    changePercent: '+21%',
    description: 'Sau khi loại nội dung tổ giấn có hại',
    icon: 'post',
  },
  {
    label: 'Bình luận được phân tích',
    value: '24,680',
    change: '+3,400',
    changePercent: '+16%',
    description: 'Quan tâm cá nhân đã được ưi',
    icon: 'comment',
  },
  {
    label: 'Lượt tương tác',
    value: '98,700',
    change: '+18,400',
    changePercent: '+23%',
    description: 'Lượt thích, chia sẻ và bình luận',
    icon: 'interaction',
  },
]

// --------------- Weekly Discussion Data (Line Chart) ---------------
export const weeklyDiscussionData: WeeklyDiscussionPoint[] = [
  { date: '12/10', posts: 780 },
  { date: '13/10', posts: 820 },
  { date: '14/10', posts: 950 },
  { date: '15/10', posts: 1100 },
  { date: '16/10', posts: 1200 },
  { date: '17/10', posts: 1050 },
  { date: '18/10', posts: 940 },
]

// --------------- Platform Distribution (Pie Chart) ---------------
export const platformDistribution: PlatformDistributionItem[] = [
  { platform: 'Facebook', count: 3420, percent: 50, color: '#1877F2' },
  { platform: 'Threads', count: 2052, percent: 30, color: '#000000' },
  { platform: 'Reddit', count: 1368, percent: 20, color: '#FF4500' },
]

// --------------- Trending Topics ---------------
export const trendingTopics: TrendingTopic[] = [
  {
    rank: '01',
    name: 'AI trong giáo dục',
    posts: 1240,
    score: 92,
    change: '+32%',
    tags: ['Giáo dục', 'Công nghệ'],
    platforms: ['facebook', 'threads', 'reddit'],
    summary:
      'Chủ đề nổi bật nhất tuần với sự quan tâm lớn từ cộng đồng giáo dục và công nghệ. Các cuộc thảo luận tập trung vào ứng dụng AI trong giảng dạy, học tập cá nhân hóa và lo ngại về đạo đức.',
    isFollowing: true,
  },
  {
    rank: '02',
    name: 'Giao thông xanh',
    posts: 980,
    score: 86,
    change: '+24%',
    tags: ['Đời sống'],
    platforms: ['facebook', 'threads', 'reddit'],
    summary:
      'Xu hướng thảo luận tăng mạnh về giao thông xanh, đặc biệt sau các chính sách mới về xe điện và mở rộng hệ thống xe buýt điện tại các thành phố lớn.',
  },
  {
    rank: '03',
    name: 'Kỹ năng số cho người trẻ',
    posts: 760,
    score: 81,
    change: '+18%',
    tags: ['Công nghệ'],
    platforms: ['facebook', 'threads'],
    summary:
      'Cộng đồng thảo luận sôi nổi về việc trang bị kỹ năng số cho thế hệ trẻ, bao gồm lập trình, phân tích dữ liệu và an toàn trên không gian mạng.',
    isFollowing: true,
  },
  {
    rank: '04',
    name: 'Tiêu dùng bền vững',
    posts: 620,
    score: 74,
    change: '+12%',
    tags: ['Kinh tế'],
    platforms: ['facebook', 'threads', 'reddit'],
    summary:
      'Người tiêu dùng ngày càng quan tâm đến sản phẩm thân thiện môi trường, hàng tái chế và lối sống tối giản. Các thương hiệu xanh được thảo luận nhiều.',
  },
  {
    rank: '05',
    name: 'Chạy bộ cộng đồng',
    posts: 480,
    score: 69,
    change: '+9%',
    tags: ['Thể thao'],
    platforms: ['facebook', 'threads'],
    summary:
      'Phong trào chạy bộ cộng đồng tiếp tục lan rộng với nhiều sự kiện marathon và fun run được tổ chức tại các thành phố. Cộng đồng chia sẻ kinh nghiệm tập luyện và dinh dưỡng.',
  },
]
