import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { Badge } from '../../../components/ui';

export const TrendingHighlightBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-sky-50/80 via-white to-cyan-50/60 rounded-xl border border-sky-100 p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Badge variant="indigo" size="sm">
            <span className="flex items-center gap-1 font-semibold">
              <Sparkles className="h-3 w-3 text-sky-600" />
              Xu hướng nổi bật tuần này
            </span>
          </Badge>
          <span className="text-xs text-gray-500">Điểm xu hướng 92/100</span>
        </div>
        <h3 className="text-base font-bold text-gray-900">AI trong giáo dục</h3>
        <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">
          Tăng trưởng mạnh nhất trên cả 3 nền tảng với hơn 1.240 bài viết công khai.
          Cộng đồng quan tâm nhiều nhất đến chủ đề cá nhân hóa việc học và tính liêm chính học thuật.
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <Link
          to="/chi-tiet-chu-de?id=topic-1"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-sky-600 text-white rounded-lg text-xs font-semibold hover:bg-sky-700 transition-colors shadow-sm shadow-sky-600/20"
        >
          <span>Xem chi tiết</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          to="/so-sanh"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white border border-sky-200 text-sky-800 rounded-lg text-xs font-semibold hover:bg-sky-50 transition-colors shadow-sm"
        >
          <span>So sánh</span>
        </Link>
      </div>
    </div>
  );
};
