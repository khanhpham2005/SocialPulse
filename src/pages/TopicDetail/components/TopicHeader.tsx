import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bookmark, BarChart3, Sparkles } from 'lucide-react';
import { Card, Badge, Button } from '../../../components/ui';
import type { TopicDetailData } from '../../../data/topicDetail';

interface Props {
  topic: TopicDetailData;
  isFollowing: boolean;
  onToggleFollow: () => void;
}

export const TopicHeader: React.FC<Props> = ({ topic, isFollowing, onToggleFollow }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Breadcrumb & Actions */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
          <Link to="/tong-quan" className="hover:text-sky-600 transition-colors">
            TỔNG QUAN XU HƯỚNG
          </Link>
          <span>/</span>
          <span>CHI TIẾT CHỦ ĐỀ</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              {topic.title}
            </h1>
            <p className="mt-1 text-sm text-gray-600 flex flex-wrap items-center gap-2">
              <span className="font-medium text-gray-700">{topic.category}</span>
              <span className="text-gray-300">/</span>
              <span>{topic.subtitle}</span>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/so-sanh')}
              className="gap-1.5"
            >
              <BarChart3 className="h-4 w-4" />
              <span>So sánh với chủ đề khác</span>
            </Button>

            <button
              type="button"
              onClick={onToggleFollow}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                isFollowing
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isFollowing ? 'fill-current text-amber-500' : ''}`} />
              <span>{isFollowing ? 'Đang theo dõi' : 'Theo dõi'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Auto Summary Card */}
      <Card className="bg-gradient-to-br from-sky-50/70 via-white to-blue-50/30 border-sky-100 p-5">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="indigo" size="sm">
            <span className="flex items-center gap-1 font-semibold">
              <Sparkles className="h-3 w-3 text-sky-600" />
              Tóm tắt tổng quan tự động
            </span>
          </Badge>
          <span className="text-xs text-gray-400">Dựa trên 1.240 bài viết và 4.860 bình luận</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed font-normal">
          {topic.summaryText}
        </p>
      </Card>
    </div>
  );
};

