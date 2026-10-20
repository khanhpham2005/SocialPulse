// ============================================================
// Mock data for Topic Detail page (AI trong giáo dục)
// ============================================================

export interface TopicInfo {
  name: string
  category: string
  description: string
  dateRange: string
}

export interface TopicStat {
  label: string
  value: string
  change: string
  changePercent: string
  icon: 'post' | 'comment' | 'interaction' | 'score'
}

export interface DiscussionTrendPoint {
  date: string
  posts: number
}

export interface SentimentData {
  positive: number
  neutral: number
  negative: number
  positiveCount: number
  neutralCount: number
  negativeCount: number
}

export interface KeyInsight {
  title: string
  description: string
  type: 'application' | 'concern' | 'question'
}

export interface SampleComment {
  author: string
  platform: 'facebook' | 'threads' | 'reddit'
  text: string
  type: 'positive' | 'neutral' | 'negative'
}

export interface SourcePost {
  platform: 'facebook' | 'threads' | 'reddit'
  source: string
  title: string
  date: string
  description: string
  interactions: number
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  sources: number
}

// --------------- Topic Info ---------------
export const topicInfo: TopicInfo = {
  name: 'AI trong giáo dục',
  category: 'Giáo dục · Công nghệ',
  description:
    'Chủ đề về việc ứng dụng trí tuệ nhân tạo (AI) trong lĩnh vực giáo dục, bao gồm các công cụ hỗ trợ giảng dạy, học tập cá nhân hóa, và tác động của AI đến phương pháp giáo dục truyền thống.',
  dateRange: '12-18/10/2026',
}

// --------------- Topic Stats ---------------
export const topicStats: TopicStat[] = [
  {
    label: 'Bài viết công khai',
    value: '1,240',
    change: '+300',
    changePercent: '+32%',
    icon: 'post',
  },
  {
    label: 'Bình luận',
    value: '4,860',
    change: '+680',
    changePercent: '+16%',
    icon: 'comment',
  },
  {
    label: 'Lượt tương tác',
    value: '18,600',
    change: '+3,200',
    changePercent: '+21%',
    icon: 'interaction',
  },
  {
    label: 'Điểm xu hướng',
    value: '92/100',
    change: '+8',
    changePercent: '+9.5%',
    icon: 'score',
  },
]

// --------------- Auto Summary ---------------
export const autoSummary: string = `Trong tuần từ 12-18/10/2026, chủ đề "AI trong giáo dục" tiếp tục là chủ đề được thảo luận sôi nổi nhất trên các nền tảng mạng xã hội. Với 1,240 bài viết công khai và hơn 4,860 bình luận, cộng đồng đặc biệt quan tâm đến việc ứng dụng các công cụ AI như ChatGPT, Gemini và các nền tảng học tập thông minh vào quá trình giảng dạy và học tập.

Các cuộc thảo luận chủ yếu xoay quanh ba trục chính: (1) Lợi ích của AI trong việc cá nhân hóa trải nghiệm học tập, giúp học sinh tiếp cận kiến thức phù hợp với năng lực; (2) Lo ngại về tính trung thực học thuật khi sinh viên sử dụng AI để hoàn thành bài tập; và (3) Vai trò mới của giáo viên trong bối cảnh AI ngày càng phổ biến.

Đáng chú ý, 55% ý kiến thể hiện thái độ tích cực về việc tích hợp AI vào giáo dục, trong khi 9% bày tỏ lo ngại sâu sắc về các tác động tiêu cực tiềm ẩn.`

// --------------- Discussion Trend Data (Line Chart) ---------------
export const discussionTrendData: DiscussionTrendPoint[] = [
  { date: '12/10', posts: 140 },
  { date: '13/10', posts: 165 },
  { date: '14/10', posts: 190 },
  { date: '15/10', posts: 210 },
  { date: '16/10', posts: 230 },
  { date: '17/10', posts: 180 },
  { date: '18/10', posts: 125 },
]

// --------------- Sentiment Data ---------------
export const sentimentData: SentimentData = {
  positive: 55,
  neutral: 36,
  negative: 9,
  positiveCount: 2670,
  neutralCount: 1413,
  negativeCount: 720,
}

// --------------- Key Insights ---------------
export const keyInsights: KeyInsight[] = [
  {
    title: 'Góc nhìn ứng dụng',
    description:
      'Phần lớn cộng đồng đánh giá cao khả năng cá nhân hóa học tập của AI. Các giáo viên chia sẻ kinh nghiệm sử dụng ChatGPT để thiết kế bài giảng, tạo bài tập phù hợp năng lực từng học sinh và hỗ trợ chấm bài tự động.',
    type: 'application',
  },
  {
    title: 'Mối quan ngại',
    description:
      'Một bộ phận đáng kể lo ngại về tính trung thực học thuật khi sinh viên sử dụng AI để viết bài luận và hoàn thành bài tập. Nhiều ý kiến kêu gọi cần có quy định rõ ràng về việc sử dụng AI trong kiểm tra, đánh giá.',
    type: 'concern',
  },
  {
    title: 'Câu hỏi nổi bật',
    description:
      'Câu hỏi được đặt ra nhiều nhất: "Làm thế nào để giáo viên thích nghi với vai trò mới khi AI có thể trả lời hầu hết các câu hỏi kiến thức?" và "Liệu AI có thể thay thế hoàn toàn gia sư truyền thống?"',
    type: 'question',
  },
]

// --------------- Sample Comments ---------------
export const sampleComments: SampleComment[] = [
  {
    author: 'Người dùng ẩn danh',
    platform: 'facebook',
    text: 'Mình đã dùng AI để hỗ trợ soạn giáo án và thấy hiệu quả rõ rệt. Thời gian chuẩn bị bài giảng giảm 40%, học sinh cũng hứng thú hơn với các bài tập được cá nhân hóa.',
    type: 'positive',
  },
  {
    author: 'Người dùng ẩn danh',
    platform: 'threads',
    text: 'Cần phải có hướng dẫn cụ thể cho sinh viên về cách sử dụng AI một cách có trách nhiệm. Không nên cấm hoàn toàn mà nên dạy cách dùng đúng.',
    type: 'neutral',
  },
  {
    author: 'Người dùng ẩn danh',
    platform: 'reddit',
    text: 'Lo ngại nhất là khoảng cách số giữa thành thị và nông thôn. Khi AI trở thành công cụ học tập phổ biến, học sinh vùng khó khăn sẽ càng bị tụt lại phía sau.',
    type: 'negative',
  },
]

// --------------- Source Posts ---------------
export const sourcePosts: SourcePost[] = [
  {
    platform: 'facebook',
    source: 'Giáo dục Việt Nam',
    title: 'Bộ GD&ĐT khuyến khích ứng dụng AI trong giảng dạy từ năm học 2026-2027',
    date: '15/10/2026',
    description:
      'Bài viết thông báo chính sách mới của Bộ Giáo dục về việc khuyến khích các trường học tích hợp công cụ AI vào quá trình giảng dạy, kèm theo hướng dẫn cụ thể.',
    interactions: 4200,
  },
  {
    platform: 'threads',
    source: 'Tech Education VN',
    title: 'Top 10 công cụ AI miễn phí hỗ trợ giáo viên soạn giáo án',
    date: '14/10/2026',
    description:
      'Bài viết giới thiệu các công cụ AI miễn phí mà giáo viên có thể sử dụng để thiết kế bài giảng, tạo câu hỏi kiểm tra và đánh giá năng lực học sinh.',
    interactions: 2800,
  },
  {
    platform: 'reddit',
    source: 'r/GiaoDucVN',
    title: 'Thảo luận: AI có đang làm giảm tư duy phản biện của sinh viên?',
    date: '16/10/2026',
    description:
      'Thread thảo luận sôi nổi về tác động của việc lạm dụng AI đối với khả năng tư duy độc lập và sáng tạo của sinh viên đại học.',
    interactions: 1860,
  },
]

// --------------- Timeline ---------------
export const timeline: TimelineEvent[] = [
  {
    date: '12/10/2026',
    title: 'Khởi đầu tuần thảo luận',
    description:
      'Bộ GD&ĐT công bố dự thảo hướng dẫn sử dụng AI trong giáo dục, kích hoạt làn sóng thảo luận trên mạng xã hội.',
    sources: 45,
  },
  {
    date: '15/10/2026',
    title: 'Đỉnh điểm thảo luận',
    description:
      'Bài viết của trang Giáo dục Việt Nam về chính sách mới thu hút hơn 4,200 lượt tương tác, trở thành bài viết viral trong tuần.',
    sources: 120,
  },
  {
    date: '17/10/2026',
    title: 'Phản hồi từ chuyên gia',
    description:
      'Nhiều chuyên gia giáo dục và công nghệ đưa ra ý kiến phản hồi, tạo thêm các cuộc thảo luận chuyên sâu về ứng dụng AI.',
    sources: 85,
  },
]
