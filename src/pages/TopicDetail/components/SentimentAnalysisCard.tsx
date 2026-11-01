import React from 'react';
import { Card } from '../../../components/ui';
import type { SentimentData } from '../../../data/topicDetail';

interface Props {
  sentiment: SentimentData;
}

export const SentimentAnalysisCard: React.FC<Props> = ({ sentiment }) => {
  return (
    <Card className="lg:col-span-5 flex flex-col justify-between">
      <div>
        <h2 className="text-base font-bold text-gray-900 mb-1">Phân bổ sắc thái ý kiến</h2>
        <p className="text-xs text-gray-500 mb-6">Dựa trên mô hình phân tích tự động 4.860 bình luận</p>

        {/* Multi-segment progress bar */}
        <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden flex mb-6">
          <div
            className="bg-emerald-500 h-full transition-all"
            style={{ width: `${sentiment.positivePercent}%` }}
            title={`Tích cực: ${sentiment.positivePercent}%`}
          />
          <div
            className="bg-amber-400 h-full transition-all"
            style={{ width: `${sentiment.neutralPercent}%` }}
            title={`Trung tính: ${sentiment.neutralPercent}%`}
          />
          <div
            className="bg-rose-500 h-full transition-all"
            style={{ width: `${sentiment.negativePercent}%` }}
            title={`Tiêu cực/Lo ngại: ${sentiment.negativePercent}%`}
          />
        </div>

        {/* Sentiment stat boxes */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
            <span className="block text-xl font-bold text-emerald-700">{sentiment.positivePercent}%</span>
            <span className="text-xs font-semibold text-emerald-800">Tích cực</span>
            <span className="block text-[11px] text-emerald-600/80 mt-0.5">{sentiment.positiveCount} lượt</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
            <span className="block text-xl font-bold text-amber-700">{sentiment.neutralPercent}%</span>
            <span className="text-xs font-semibold text-amber-800">Trung tính</span>
            <span className="block text-[11px] text-amber-600/80 mt-0.5">{sentiment.neutralCount} lượt</span>
          </div>

          <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-100">
            <span className="block text-xl font-bold text-rose-700">{sentiment.negativePercent}%</span>
            <span className="text-xs font-semibold text-rose-800">Lo ngại</span>
            <span className="block text-[11px] text-rose-600/80 mt-0.5">{sentiment.negativeCount} lượt</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 mt-6">
        <span>Tỷ lệ tích cực áp đảo nhờ nhiều chia sẻ kinh nghiệm ứng dụng thực tế thành công.</span>
      </div>
    </Card>
  );
};

