import React, { useState } from 'react';
import { Calendar, RotateCw } from 'lucide-react';
import {
  macroStats,
  weeklyData,
  platformData,
  initialTrendingTopics,
  type TrendingTopicItem,
} from '../data/trendOverview';
import { MacroStatsGrid } from './TrendOverview/components/MacroStatsGrid';
import { WeeklyDiscussionChart } from './TrendOverview/components/WeeklyDiscussionChart';
import { PlatformSharePie } from './TrendOverview/components/PlatformSharePie';
import { TrendingHighlightBanner } from './TrendOverview/components/TrendingHighlightBanner';
import { TrendingTopicsTable } from './TrendOverview/components/TrendingTopicsTable';

const TrendOverview: React.FC = () => {
  const [topics, setTopics] = useState<TrendingTopicItem[]>(initialTrendingTopics);

  const handleToggleFollow = (id: string) => {
    setTopics((prev) =>
      prev.map((t) => (t.id === id ? { ...t, following: !t.following } : t))
    );
  };

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            <span>KHÁM PHÁ & PHÂN TÍCH</span>
            <span>/</span>
            <span className="text-gray-600">TỔNG QUAN XU HƯỚNG</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Tổng quan xu hướng
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Bức tranh toàn cảnh về các chủ đề đang được thảo luận nhiều nhất trên mạng xã hội.
          </p>
        </div>

        {/* Header Right Action & Filter pill */}
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 shadow-xs">
            <Calendar className="h-3.5 w-3.5 text-gray-400" />
            <span>12–18/10/2026 (7 ngày qua)</span>
          </div>
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-colors"
            title="Làm mới số liệu"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 4 Macro Stat Cards */}
      <MacroStatsGrid stats={macroStats} />

      {/* Charts: Weekly Trend (8 cols) + Platform Share (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <WeeklyDiscussionChart data={weeklyData} />
        <PlatformSharePie data={platformData} />
      </div>

      {/* Trending Highlight Banner */}
      <TrendingHighlightBanner />

      {/* Trending Topics Table */}
      <TrendingTopicsTable topics={topics} onToggleFollow={handleToggleFollow} />
    </div>
  );
};

export default TrendOverview;
