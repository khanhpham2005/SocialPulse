import React, { useState } from 'react';
import { X, Plus, Calendar, RotateCw } from 'lucide-react';
import { Card } from '../../../components/ui';
import { ALL_COMPARE_TOPICS, type CompareTopicMeta } from '../../../data/topicComparison';

interface Props {
  selectedNames: string[];
  onRemove: (name: string) => void;
  onAdd: (name: string) => void;
}

export const TopicComparisonHeader: React.FC<Props> = ({ selectedNames, onRemove, onAdd }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const availableToAdd = Object.keys(ALL_COMPARE_TOPICS).filter(
    (name) => !selectedNames.includes(name)
  );

  return (
    <div className="space-y-4">
      {/* Header text */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            <span>KHÁM PHÁ & PHÂN TÍCH</span>
            <span>/</span>
            <span className="text-gray-600">SO SÁNH CHỦ ĐỀ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            So sánh chủ đề
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Đặt các chủ đề cạnh nhau để nhìn rõ quy mô, nhịp tăng trưởng và khác biệt giữa các nền tảng.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 shadow-xs">
            <Calendar className="h-3.5 w-3.5 text-gray-400" />
            <span>12–18/10/2026</span>
          </div>
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors"
            title="Làm mới"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Topic selection bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h2 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
            Chủ đề đang so sánh ({selectedNames.length}/5)
          </h2>
          <span className="text-xs text-gray-400">Chọn tối thiểu 2 chủ đề</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 relative">
          {selectedNames.map((name) => {
            const meta: CompareTopicMeta = ALL_COMPARE_TOPICS[name] || {
              name,
              color: '#6366f1',
              badgeBg: 'bg-gray-100',
              badgeBorder: 'border-gray-200',
              badgeText: 'text-gray-700',
              dotBg: 'bg-gray-400',
              posts: 0,
              comments: 0,
              interactions: 0,
              score: 0,
              growth: '',
            };

            return (
              <div
                key={name}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${meta.badgeBg} ${meta.badgeBorder} ${meta.badgeText}`}
              >
                <span className={`w-2 h-2 rounded-full ${meta.dotBg}`} />
                <span>{name}</span>
                {selectedNames.length > 2 && (
                  <button
                    type="button"
                    onClick={() => onRemove(name)}
                    className="hover:opacity-75 transition-opacity"
                    title={`Bỏ ${name}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
            );
          })}

          {selectedNames.length < 5 && availableToAdd.length > 0 && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-dashed border-gray-300 rounded-lg text-xs font-medium text-gray-600 hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50/60 transition-colors"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Thêm chủ đề</span>
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-1">
                  {availableToAdd.map((topicName) => (
                    <button
                      key={topicName}
                      type="button"
                      onClick={() => {
                        onAdd(topicName);
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    >
                      + {topicName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

