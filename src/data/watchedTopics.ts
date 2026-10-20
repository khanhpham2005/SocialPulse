// ============================================================
// Mock data for Watched Topics page
// ============================================================

export interface WatchStat {
  label: string
  value: number
  icon: 'saved' | 'active' | 'paused'
  color: string
}

export interface WatchedTopic {
  id: string
  name: string
  keywords: string[]
  platforms: ('Facebook' | 'Threads' | 'Reddit')[]
  cycle: string
  lastUpdate: string
  status: 'active' | 'paused'
}

export interface RecentActivity {
  id: string
  timestamp: string
  description: string
  type: 'update' | 'alert' | 'info'
}

// --------------- Watch Stats ---------------
export const watchStats: WatchStat[] = [
  {
    label: 'Chủ đề đã lưu',
    value: 3,
    icon: 'saved',
    color: '#6366F1',
  },
  {
    label: 'Đang theo dõi',
    value: 2,
    icon: 'active',
    color: '#10B981',
  },
  {
    label: 'Đang tạm dừng',
    value: 1,
    icon: 'paused',
    color: '#F59E0B',
  },
]

// --------------- Watched Topics List ---------------
export const watchedList: WatchedTopic[] = [
  {
    id: 'watch-1',
    name: 'AI trong giáo dục',
    keywords: ['AI giáo dục', 'học tập AI'],
    platforms: ['Facebook', 'Threads', 'Reddit'],
    cycle: '2 giờ',
    lastUpdate: '18:00 18/10/2026',
    status: 'active',
  },
  {
    id: 'watch-2',
    name: 'Kỹ năng số cho người trẻ',
    keywords: ['kỹ năng số', 'học kỹ năng'],
    platforms: ['Facebook', 'Threads'],
    cycle: '6 giờ',
    lastUpdate: '17:00 18/10/2026',
    status: 'active',
  },
  {
    id: 'watch-3',
    name: 'Học trực tuyến',
    keywords: ['học trực tuyến', 'lớp học số'],
    platforms: ['Facebook', 'Reddit'],
    cycle: '1 giờ',
    lastUpdate: '10:00 18/10/2026',
    status: 'paused',
  },
]

// --------------- Recent Activities ---------------
export const recentActivities: RecentActivity[] = [
  {
    id: 'activity-1',
    timestamp: '18:00 18/10/2026',
    description:
      'Cập nhật dữ liệu "AI trong giáo dục": phát hiện 45 bài viết mới trên Facebook và 28 bài viết mới trên Threads.',
    type: 'update',
  },
  {
    id: 'activity-2',
    timestamp: '17:00 18/10/2026',
    description:
      'Cập nhật dữ liệu "Kỹ năng số cho người trẻ": phát hiện 18 bài viết mới, tăng 15% so với chu kỳ trước.',
    type: 'update',
  },
  {
    id: 'activity-3',
    timestamp: '10:00 18/10/2026',
    description:
      'Chủ đề "Học trực tuyến" đã được tạm dừng theo dõi do người dùng yêu cầu. Dữ liệu cuối cùng đã được lưu.',
    type: 'info',
  },
]
