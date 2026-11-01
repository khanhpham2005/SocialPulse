import React from 'react';
import { Card, Badge } from '../../../components/ui';
import type { SampleCommentItem, SourcePostItem } from '../../../data/topicDetail';
import { ExternalLink, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface Props {
  comments: SampleCommentItem[];
  posts: SourcePostItem[];
}

const sentimentBadgeMap = {
  positive: { variant: 'green' as const, label: 'Tích cực' },
  neutral: { variant: 'yellow' as const, label: 'Trung tính' },
  negative: { variant: 'red' as const, label: 'Lo ngại' },
};

export const SampleCommentsSection: React.FC<Props> = ({ comments, posts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sample Comments (7 cols) */}
      <Card className="lg:col-span-7 p-5">
        <h2 className="text-base font-bold text-gray-900 mb-1">Trích dẫn thảo luận tiêu biểu</h2>
        <p className="text-xs text-gray-500 mb-4">Các ý kiến nhận được nhiều lượt đồng thuận từ cộng đồng</p>

        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Badge variant="gray" size="sm">
                    {c.platform}
                  </Badge>
                  <span className="font-medium text-gray-700">{c.channel}</span>
                </div>
                <Badge variant={sentimentBadgeMap[c.sentiment].variant} size="sm">
                  {c.sentimentLabel}
                </Badge>
              </div>
              <p className="text-xs text-gray-800 italic leading-relaxed">{c.content}</p>
              <div className="text-[11px] text-gray-400">{c.time}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Source Posts (5 cols) */}
      <Card className="lg:col-span-5 p-5">
        <h2 className="text-base font-bold text-gray-900 mb-1">Bài viết nguồn nổi bật</h2>
        <p className="text-xs text-gray-500 mb-4">Bài đăng công khai có lượng tương tác cao</p>

        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="p-3.5 rounded-xl border border-gray-200/80 hover:border-sky-200 transition-colors space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-gray-800">{post.sourceName}</span>
                  <span>·</span>
                  <span>{post.platform}</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-gray-400" />
              </div>

              <h4 className="text-xs font-bold text-gray-900 leading-snug">{post.title}</h4>
              <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center gap-4 text-[11px] text-gray-400 pt-1 border-t border-gray-100">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1">
                  <Share2 className="h-3 w-3" />
                  {post.shares}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

