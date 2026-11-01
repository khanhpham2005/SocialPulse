// ============================================================
// Mock data for Topic Detail page
// ============================================================

export interface TopicStatItem {
  id: string;
  label: string;
  value: string;
  badge?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  description: string;
}

export interface DiscussionTrendPoint {
  date: string;
  posts: number;
}

export interface SentimentData {
  positivePercent: number;
  neutralPercent: number;
  negativePercent: number;
  positiveCount: string;
  neutralCount: string;
  negativeCount: string;
}

export interface KeyPerspectiveItem {
  title: string;
  tag: string;
  tagColor: 'indigo' | 'yellow' | 'red';
  description: string;
}

export interface SampleCommentItem {
  id: string;
  platform: 'Facebook' | 'Threads' | 'Reddit';
  channel: string;
  time: string;
  content: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  sentimentLabel: string;
}

export interface SourcePostItem {
  id: string;
  platform: 'Facebook' | 'Threads' | 'Reddit';
  sourceName: string;
  time: string;
  title: string;
  excerpt: string;
  likes: string;
  comments: string;
  shares: string;
}

export interface TopicDetailData {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  summaryText: string;
  stats: TopicStatItem[];
  trend: DiscussionTrendPoint[];
  sentiment: SentimentData;
  perspectives: KeyPerspectiveItem[];
  sampleComments: SampleCommentItem[];
  samplePosts: SourcePostItem[];
}

export const TOPICS_DATABASE: Record<string, TopicDetailData> = {
  'topic-1': {
    id: 'topic-1',
    title: 'AI trong giáo dục',
    category: 'Giáo dục · Công nghệ',
    subtitle: 'Theo dõi cách cộng đồng trao đổi về AI trong học tập và giảng dạy.',
    summaryText:
      'Chủ đề AI trong giáo dục ghi nhận 1.240 bài viết công khai trong tuần, tăng 32% so với chu kỳ trước. Nhịp thảo luận đạt đỉnh vào ngày 17-18/10 khi nhiều diễn đàn chia sẻ kinh nghiệm ứng dụng công cụ soạn giáo án và trợ lý học tập. Ý kiến nhìn chung tích cực nhưng xuất hiện lo ngại về tính minh bạch khi làm bài kiểm tra.',
    stats: [
      {
        id: 'posts',
        label: 'Bài viết công khai',
        value: '1.240',
        badge: '+32%',
        changeType: 'positive',
        description: 'Tăng mạnh từ ngày 15/10',
      },
      {
        id: 'comments',
        label: 'Bình luận thảo luận',
        value: '4.860',
        badge: '+18%',
        changeType: 'positive',
        description: 'Trung bình 3,9 bình luận/bài',
      },
      {
        id: 'interactions',
        label: 'Lượt tương tác',
        value: '18.600',
        badge: '+24%',
        changeType: 'positive',
        description: 'Thích, chia sẻ và phản hồi',
      },
      {
        id: 'score',
        label: 'Điểm xu hướng',
        value: '92 / 100',
        badge: 'Rất cao',
        changeType: 'positive',
        description: 'Thuộc top 5% chủ đề sôi nổi',
      },
    ],
    trend: [
      { date: '12/10', posts: 100 },
      { date: '13/10', posts: 130 },
      { date: '14/10', posts: 155 },
      { date: '15/10', posts: 160 },
      { date: '16/10', posts: 200 },
      { date: '17/10', posts: 245 },
      { date: '18/10', posts: 290 },
    ],
    sentiment: {
      positivePercent: 55,
      neutralPercent: 36,
      negativePercent: 9,
      positiveCount: '2.670',
      neutralCount: '1.750',
      negativeCount: '440',
    },
    perspectives: [
      {
        title: 'Công cụ giảm tải cho giáo viên',
        tag: 'Góc nhìn ứng dụng',
        tagColor: 'indigo',
        description:
          'Nhiều bài viết chia sẻ cách dùng mô hình ngôn ngữ lớn để gợi ý dàn bài, soạn bài tập trắc nghiệm và gợi ý tài liệu học tập theo năng lực từng học sinh.',
      },
      {
        title: 'Băn khoăn về tính liêm chính học thuật',
        tag: 'Mối bận tâm',
        tagColor: 'yellow',
        description:
          'Một số ý kiến bày tỏ lo ngại học sinh lạm dụng công cụ trả lời tự động trong bài kiểm tra về nhà, kiến nghị bổ sung tiêu chí đánh giá tại lớp.',
      },
      {
        title: 'Cần khung hướng dẫn sử dụng rõ ràng',
        tag: 'Đề xuất giải pháp',
        tagColor: 'indigo',
        description:
          'Cộng đồng kỳ vọng nhà trường và cơ sở đào tạo sớm ban hành quy định minh bạch về phạm vi được phép ứng dụng công cụ số trong nghiên cứu.',
      },
    ],
    sampleComments: [
      {
        id: 'c1',
        platform: 'Facebook',
        channel: 'Nhóm Giáo viên đổi mới',
        time: '18:10 · 18/10',
        content: '“Dùng thử để lên ý tưởng bài giảng thấy tiết kiệm được rất nhiều thời gian chuẩn bị.”',
        sentiment: 'positive',
        sentimentLabel: 'Tích cực',
      },
      {
        id: 'c2',
        platform: 'Threads',
        channel: '@giaoduc_hien_dai',
        time: '16:45 · 18/10',
        content: '“Quan trọng là học sinh có hiểu bản chất bài học hay chỉ copy nguyên câu trả lời.”',
        sentiment: 'neutral',
        sentimentLabel: 'Trung tính',
      },
      {
        id: 'c3',
        platform: 'Reddit',
        channel: 'r/VietnamEducation',
        time: '14:20 · 18/10',
        content: '“Cần sớm có quy định cụ thể về việc dùng công cụ AI trong các bài tiểu luận tốt nghiệp.”',
        sentiment: 'negative',
        sentimentLabel: 'Lo ngại',
      },
    ],
    samplePosts: [
      {
        id: 'p1',
        platform: 'Facebook',
        sourceName: 'Diễn đàn Giáo dục số',
        time: '15:30 · 18/10/2026',
        title: 'Kinh nghiệm ứng dụng công cụ tự động hóa vào soạn giảng bài tập thực hành',
        excerpt:
          'Chia sẻ 5 phương pháp tích hợp trợ lý ảo giúp tiết kiệm 40% thời gian biên soạn câu hỏi đánh giá theo chuẩn đầu ra...',
        likes: '342',
        comments: '86',
        shares: '45',
      },
      {
        id: 'p2',
        platform: 'Threads',
        sourceName: '#hoctapso',
        time: '12:15 · 18/10/2026',
        title: 'Sinh viên năm nhất và câu chuyện thích ứng công nghệ mới trong giảng đường',
        excerpt:
          'Góc nhìn từ bạn trẻ về cách cân bằng giữa việc tự tư duy nghiên cứu và tận dụng công nghệ hỗ trợ tìm kiếm tài liệu...',
        likes: '189',
        comments: '42',
        shares: '12',
      },
    ],
  },
  'topic-2': {
    id: 'topic-2',
    title: 'Giao thông xanh',
    category: 'Đô thị · Môi trường',
    subtitle: 'Theo dõi cách cộng đồng trao đổi về chuyển đổi phương tiện xanh và trạm sạc.',
    summaryText:
      'Chủ đề Giao thông xanh ghi nhận 980 bài viết trong tuần, tăng 24%. Các thảo luận tập trung vào sự tiện lợi của xe buýt điện công cộng và các tuyến tàu điện đô thị mới.',
    stats: [
      {
        id: 'posts',
        label: 'Bài viết công khai',
        value: '980',
        badge: '+24%',
        changeType: 'positive',
        description: 'Tập trung ở các thành phố lớn',
      },
      {
        id: 'comments',
        label: 'Bình luận thảo luận',
        value: '3.920',
        badge: '+12%',
        changeType: 'positive',
        description: 'Trung bình 4,0 bình luận/bài',
      },
      {
        id: 'interactions',
        label: 'Lượt tương tác',
        value: '14.200',
        badge: '+19%',
        changeType: 'positive',
        description: 'Thích, chia sẻ và phản hồi',
      },
      {
        id: 'score',
        label: 'Điểm xu hướng',
        value: '86 / 100',
        badge: 'Cao',
        changeType: 'positive',
        description: 'Chủ đề tăng trưởng bền vững',
      },
    ],
    trend: [
      { date: '12/10', posts: 80 },
      { date: '13/10', posts: 100 },
      { date: '14/10', posts: 120 },
      { date: '15/10', posts: 140 },
      { date: '16/10', posts: 165 },
      { date: '17/10', posts: 185 },
      { date: '18/10', posts: 190 },
    ],
    sentiment: {
      positivePercent: 62,
      neutralPercent: 28,
      negativePercent: 10,
      positiveCount: '2.430',
      neutralCount: '1.097',
      negativeCount: '393',
    },
    perspectives: [
      {
        title: 'Trải nghiệm phương tiện sạch êm ái',
        tag: 'Góc nhìn người dùng',
        tagColor: 'indigo',
        description: 'Đánh giá cao chất lượng phục vụ của xe buýt điện, không khí trong lành hơn và thanh toán không tiền mặt tiện lợi.',
      },
      {
        title: 'Mong muốn mở rộng mạng lưới trạm sạc',
        tag: 'Mối bận tâm',
        tagColor: 'yellow',
        description: 'Người dùng xe cá nhân mong muốn trạm sạc phủ kín các bãi đỗ xe chung cư và trung tâm thương mại.',
      },
    ],
    sampleComments: [
      {
        id: 'c1',
        platform: 'Facebook',
        channel: 'Cộng đồng Xe điện',
        time: '19:00 · 18/10',
        content: '“Đi xe buýt điện êm và sạch hơn hẳn xe buýt cũ, hy vọng có thêm nhiều tuyến mới.”',
        sentiment: 'positive',
        sentimentLabel: 'Tích cực',
      },
    ],
    samplePosts: [
      {
        id: 'p1',
        platform: 'Facebook',
        sourceName: 'Di chuyển bền vững',
        time: '16:00 · 18/10/2026',
        title: 'Tổng hợp các tuyến xe buýt điện mới được mở rộng trong tháng 10',
        excerpt: 'Cập nhật lộ trình chi tiết và tần suất chạy xe buýt điện phục vụ cư dân các quận ngoại thành...',
        likes: '280',
        comments: '54',
        shares: '31',
      },
    ],
  },
};

export const getTopicDetail = (id?: string | null): TopicDetailData => {
  if (id && TOPICS_DATABASE[id]) {
    return TOPICS_DATABASE[id];
  }
  // Mặc định trả về topic-1 nếu không tìm thấy
  return TOPICS_DATABASE['topic-1'];
};
