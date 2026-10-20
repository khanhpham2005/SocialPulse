// ============================================================
// Mock data for Data Sources page
// ============================================================

export interface PlatformSummaryCard {
  platform: string
  sourceCount: number
  status: string
  statusType: 'success' | 'warning' | 'error'
  color: string
  icon: 'facebook' | 'threads' | 'reddit'
}

export interface DataSource {
  id: string
  name: string
  type: string
  platform: 'Facebook' | 'Threads' | 'Reddit'
  cycle: string
  lastUpdate: string
  status: 'Đang hoạt động' | 'Tạm dừng' | 'Lỗi giới hạn truy cập'
  statusType: 'success' | 'warning' | 'error'
}

export interface CollectionLogEntry {
  id: string
  time: string
  platform: 'Facebook' | 'Threads' | 'Reddit'
  description: string
  status: 'success' | 'error'
}

export interface CollectionScheduleItem {
  platform: string
  schedule: string
  nextRun: string
}

export interface SpamFilterStats {
  total: number
  spam: number
  clean: number
  breakdown: SpamBreakdownItem[]
}

export interface SpamBreakdownItem {
  label: string
  count: number
  percent: number
  color: string
}

export interface AnalysisRule {
  name: string
  description: string
  status: 'active' | 'inactive'
}

// --------------- Platform Summary ---------------
export const platformSummary: PlatformSummaryCard[] = [
  {
    platform: 'Facebook',
    sourceCount: 6,
    status: 'Kết nối ổn định',
    statusType: 'success',
    color: '#1877F2',
    icon: 'facebook',
  },
  {
    platform: 'Threads',
    sourceCount: 3,
    status: 'Kết nối ổn định',
    statusType: 'success',
    color: '#000000',
    icon: 'threads',
  },
  {
    platform: 'Reddit',
    sourceCount: 3,
    status: 'Cần kiểm tra',
    statusType: 'warning',
    color: '#FF4500',
    icon: 'reddit',
  },
]

// --------------- Source List ---------------
export const sourceList: DataSource[] = [
  {
    id: 'src-1',
    name: 'Giáo dục Việt Nam',
    type: 'Fanpage',
    platform: 'Facebook',
    cycle: '2 giờ',
    lastUpdate: '18:00 18/10/2026',
    status: 'Đang hoạt động',
    statusType: 'success',
  },
  {
    id: 'src-2',
    name: 'Công nghệ & Đời sống',
    type: 'Fanpage',
    platform: 'Facebook',
    cycle: '2 giờ',
    lastUpdate: '18:00 18/10/2026',
    status: 'Đang hoạt động',
    statusType: 'success',
  },
  {
    id: 'src-3',
    name: 'Nhóm Giáo viên Sáng tạo',
    type: 'Nhóm công khai',
    platform: 'Facebook',
    cycle: '4 giờ',
    lastUpdate: '16:00 18/10/2026',
    status: 'Đang hoạt động',
    statusType: 'success',
  },
  {
    id: 'src-4',
    name: 'Tech Education VN',
    type: 'Tài khoản',
    platform: 'Threads',
    cycle: '3 giờ',
    lastUpdate: '17:30 18/10/2026',
    status: 'Đang hoạt động',
    statusType: 'success',
  },
  {
    id: 'src-5',
    name: 'Xu hướng Threads VN',
    type: 'Hashtag',
    platform: 'Threads',
    cycle: '6 giờ',
    lastUpdate: '12:00 18/10/2026',
    status: 'Tạm dừng',
    statusType: 'warning',
  },
  {
    id: 'src-6',
    name: 'r/GiaoDucVN',
    type: 'Subreddit',
    platform: 'Reddit',
    cycle: '4 giờ',
    lastUpdate: '16:00 18/10/2026',
    status: 'Đang hoạt động',
    statusType: 'success',
  },
  {
    id: 'src-7',
    name: 'r/VietnamTech',
    type: 'Subreddit',
    platform: 'Reddit',
    cycle: '4 giờ',
    lastUpdate: '08:00 18/10/2026',
    status: 'Lỗi giới hạn truy cập',
    statusType: 'error',
  },
]

// --------------- Collection Log ---------------
export const collectionLog: CollectionLogEntry[] = [
  {
    id: 'log-1',
    time: '18:00 18/10/2026',
    platform: 'Facebook',
    description: 'Thu thập thành công 128 bài viết mới từ 6 nguồn Facebook.',
    status: 'success',
  },
  {
    id: 'log-2',
    time: '17:30 18/10/2026',
    platform: 'Threads',
    description: 'Thu thập thành công 45 bài viết mới từ Tech Education VN.',
    status: 'success',
  },
  {
    id: 'log-3',
    time: '16:00 18/10/2026',
    platform: 'Reddit',
    description: 'Thu thập thành công 32 bài viết từ r/GiaoDucVN.',
    status: 'success',
  },
  {
    id: 'log-4',
    time: '08:00 18/10/2026',
    platform: 'Reddit',
    description: 'Lỗi khi thu thập từ r/VietnamTech: vượt quá giới hạn API (rate limit). Sẽ thử lại sau 2 giờ.',
    status: 'error',
  },
]

// --------------- Collection Schedule ---------------
export const collectionSchedule: CollectionScheduleItem[] = [
  {
    platform: 'Facebook',
    schedule: 'Mỗi 2 giờ (Fanpage), Mỗi 4 giờ (Nhóm)',
    nextRun: '20:00 18/10/2026',
  },
  {
    platform: 'Threads',
    schedule: 'Mỗi 3 giờ (Tài khoản), Mỗi 6 giờ (Hashtag)',
    nextRun: '20:30 18/10/2026',
  },
  {
    platform: 'Reddit',
    schedule: 'Mỗi 4 giờ (Subreddit)',
    nextRun: '20:00 18/10/2026',
  },
]

// --------------- Spam Filter Stats ---------------
export const spamFilterStats: SpamFilterStats = {
  total: 7440,
  spam: 600,
  clean: 6840,
  breakdown: [
    {
      label: 'Nội dung sạch',
      count: 6840,
      percent: 91.9,
      color: '#10B981',
    },
    {
      label: 'Spam / Quảng cáo',
      count: 360,
      percent: 4.8,
      color: '#F59E0B',
    },
    {
      label: 'Nội dung có hại',
      count: 180,
      percent: 2.4,
      color: '#EF4444',
    },
    {
      label: 'Trùng lặp',
      count: 60,
      percent: 0.8,
      color: '#6B7280',
    },
  ],
}

// --------------- Analysis Rules ---------------
export const analysisRules: AnalysisRule[] = [
  {
    name: 'Phát hiện spam tự động',
    description:
      'Sử dụng mô hình NLP để phát hiện và loại bỏ bài viết spam, quảng cáo và nội dung không liên quan trước khi phân tích.',
    status: 'active',
  },
  {
    name: 'Lọc nội dung trùng lặp',
    description:
      'So sánh nội dung bài viết để phát hiện bài đăng lại (repost) và nội dung sao chép, giữ lại bài gốc có tương tác cao nhất.',
    status: 'active',
  },
  {
    name: 'Phân tích cảm xúc',
    description:
      'Áp dụng mô hình phân tích cảm xúc tiếng Việt để phân loại bình luận thành tích cực, trung lập và tiêu cực.',
    status: 'active',
  },
  {
    name: 'Phát hiện nội dung có hại',
    description:
      'Sử dụng bộ lọc từ khóa và mô hình AI để phát hiện nội dung vi phạm, kích động hoặc có hại cho cộng đồng.',
    status: 'active',
  },
]
