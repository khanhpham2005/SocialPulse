// ============================================================
// Mock data for Data Sources page
// ============================================================

export interface DataSourceItem {
  id: string;
  name: string;
  sub: string;
  platform: 'Facebook' | 'Threads' | 'Reddit';
  cycle: string;
  lastRun: string;
  status: 'active' | 'paused' | 'error';
  statusText: string;
}

export interface CollectionLogItem {
  id: string;
  time: string;
  platform: 'Facebook' | 'Threads' | 'Reddit';
  desc: string;
  status: 'success' | 'error';
  statusText: string;
}

export interface PlatformConnectionStatus {
  platform: 'Facebook' | 'Threads' | 'Reddit';
  status: string;
  badgeVariant: 'green' | 'yellow' | 'red';
  note: string;
  lastSync: string;
}

export const platformConnectionList: PlatformConnectionStatus[] = [
  {
    platform: 'Facebook',
    status: 'Đang hoạt động',
    badgeVariant: 'green',
    note: 'Thu thập từ 3 Fanpage & 1 Nhóm công khai',
    lastSync: '16:00 · 18/10',
  },
  {
    platform: 'Threads',
    status: 'Đang hoạt động',
    badgeVariant: 'green',
    note: 'Thu thập theo 2 thẻ từ khóa công khai',
    lastSync: '18:00 · 18/10',
  },
  {
    platform: 'Reddit',
    status: 'Giới hạn truy cập',
    badgeVariant: 'yellow',
    note: 'Đang áp dụng tần suất dãn cách an toàn (6 giờ/lần)',
    lastSync: '12:00 · 18/10',
  },
];

export const initialDataSources: DataSourceItem[] = [
  {
    id: '1',
    name: 'Diễn đàn Giáo dục số',
    sub: 'Trang công khai · Nguồn demo',
    platform: 'Facebook',
    cycle: '2 giờ',
    lastRun: '16:00 · 18/10',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: '2',
    name: 'Di chuyển bền vững',
    sub: 'Trang công khai · Nguồn demo',
    platform: 'Facebook',
    cycle: '2 giờ',
    lastRun: '16:00 · 18/10',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: '3',
    name: '#hoctapso',
    sub: 'Từ khóa công khai · Nguồn demo',
    platform: 'Threads',
    cycle: '1 giờ',
    lastRun: '18:00 · 18/10',
    status: 'active',
    statusText: 'Đang hoạt động',
  },
  {
    id: '4',
    name: 'r/GreenMobilityDemo',
    sub: 'Cộng đồng công khai · Nguồn demo',
    platform: 'Reddit',
    cycle: '6 giờ',
    lastRun: '12:00 · 18/10',
    status: 'error',
    statusText: 'Lỗi giới hạn truy cập',
  },
  {
    id: '5',
    name: 'Chạy bộ mỗi ngày',
    sub: 'Trang công khai · Nguồn demo',
    platform: 'Facebook',
    cycle: '6 giờ',
    lastRun: '06:00 · 18/10',
    status: 'paused',
    statusText: 'Tạm dừng',
  },
  {
    id: '6',
    name: '#kynangso',
    sub: 'Từ khóa công khai · Nguồn demo',
    platform: 'Threads',
    cycle: '2 giờ',
    lastRun: '10:00 · 18/10',
    status: 'paused',
    statusText: 'Tạm dừng',
  },
];

export const collectionLogs: CollectionLogItem[] = [
  {
    id: 'l1',
    time: '18:00 · 18/10',
    platform: 'Facebook',
    desc: '255 bài nhận về · 240 hợp lệ · 15 bài rác đã lọc',
    status: 'success',
    statusText: 'Thành công',
  },
  {
    id: 'l2',
    time: '18:00 · 18/10',
    platform: 'Threads',
    desc: '142 bài nhận về · 138 hợp lệ · 4 bài rác đã lọc',
    status: 'success',
    statusText: 'Thành công',
  },
  {
    id: 'l3',
    time: '16:00 · 18/10',
    platform: 'Facebook',
    desc: '210 bài nhận về · 202 hợp lệ · 8 bài rác đã lọc',
    status: 'success',
    statusText: 'Thành công',
  },
  {
    id: 'l4',
    time: '12:00 · 18/10',
    platform: 'Reddit',
    desc: 'API phản hồi HTTP 429 · Chờ 6 giờ trước chu kỳ quét tiếp theo',
    status: 'error',
    statusText: 'Tạm dừng do giới hạn',
  },
];
