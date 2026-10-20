// ============================================================
// Mock data for Topic Comparison page
// ============================================================

export interface TopicSummaryCard {
  name: string
  posts: number
  change: string
  color: string
}

export interface PlatformBarDataPoint {
  platform: string
  topicA: number
  topicB: number
}

export interface DailyTrendPoint {
  date: string
  topicA: number
  topicB: number
}

export interface PlatformBreakdownItem {
  topic: string
  facebook: number
  threads: number
  reddit: number
}

export interface ComparisonRow {
  metric: string
  topicA: string
  topicB: string
  winner: 'A' | 'B' | 'tie'
}

// --------------- Selected Topics ---------------
export const selectedTopics: string[] = ['AI trong giáo dục', 'Giao thông xanh']

// --------------- Topic Summary Cards ---------------
export const topicSummaryCards: TopicSummaryCard[] = [
  {
    name: 'AI trong giáo dục',
    posts: 1240,
    change: '+32%',
    color: '#6366F1',
  },
  {
    name: 'Giao thông xanh',
    posts: 980,
    change: '+24%',
    color: '#10B981',
  },
]

// --------------- Platform Bar Data (Grouped Bar Chart) ---------------
export const platformBarData: PlatformBarDataPoint[] = [
  { platform: 'Facebook', topicA: 620, topicB: 490 },
  { platform: 'Threads', topicA: 372, topicB: 294 },
  { platform: 'Reddit', topicA: 248, topicB: 196 },
]

// --------------- Daily Trend Data (Line Chart) ---------------
export const dailyTrendData: DailyTrendPoint[] = [
  { date: '12/10', topicA: 140, topicB: 110 },
  { date: '13/10', topicA: 165, topicB: 125 },
  { date: '14/10', topicA: 190, topicB: 150 },
  { date: '15/10', topicA: 210, topicB: 170 },
  { date: '16/10', topicA: 230, topicB: 185 },
  { date: '17/10', topicA: 180, topicB: 165 },
  { date: '18/10', topicA: 125, topicB: 140 },
]

// --------------- Platform Breakdown (Stacked Bar) ---------------
export const platformBreakdown: PlatformBreakdownItem[] = [
  {
    topic: 'AI trong giáo dục',
    facebook: 620,
    threads: 372,
    reddit: 248,
  },
  {
    topic: 'Giao thông xanh',
    facebook: 490,
    threads: 294,
    reddit: 196,
  },
]

// --------------- Comparison Table ---------------
export const comparisonTable: ComparisonRow[] = [
  {
    metric: 'Bài viết',
    topicA: '1,240',
    topicB: '980',
    winner: 'A',
  },
  {
    metric: 'Bình luận',
    topicA: '4,860',
    topicB: '3,920',
    winner: 'A',
  },
  {
    metric: 'Lượt tương tác',
    topicA: '18,600',
    topicB: '15,200',
    winner: 'A',
  },
  {
    metric: 'Điểm xu hướng',
    topicA: '92',
    topicB: '86',
    winner: 'A',
  },
  {
    metric: 'Tăng trưởng bài viết/tuần',
    topicA: '+32%',
    topicB: '+24%',
    winner: 'A',
  },
]

// --------------- Notable Insight ---------------
export const notableInsight: string =
  'Cả hai chủ đề đều có xu hướng tăng trưởng mạnh trong tuần qua, tuy nhiên "AI trong giáo dục" đang dẫn đầu ở tất cả các chỉ số. Điểm đáng chú ý là "Giao thông xanh" có tỷ lệ bình luận tích cực cao hơn (62% so với 55%), cho thấy cộng đồng đón nhận chủ đề này một cách tích cực hơn. Về mặt nền tảng, cả hai chủ đề đều được thảo luận nhiều nhất trên Facebook, nhưng "AI trong giáo dục" có sự hiện diện mạnh hơn trên Reddit, cho thấy mức độ quan tâm từ cộng đồng công nghệ.'
