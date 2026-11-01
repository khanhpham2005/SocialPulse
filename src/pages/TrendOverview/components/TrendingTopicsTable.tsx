import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowUpRight } from 'lucide-react';
import { Card, Badge, SearchInput } from '../../../components/ui';
import type { TrendingTopicItem } from '../../../data/trendOverview';

interface Props {
  topics: TrendingTopicItem[];
  onToggleFollow: (id: string) => void;
}

const categories = ['Tất cả', 'Giáo dục', 'Đô thị', 'Nghề nghiệp', 'Lối sống', 'Thể thao'];

export const TrendingTopicsTable: React.FC<Props> = ({ topics, onToggleFollow }) => {
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = topics.filter((t) => {
    const matchCat = selectedCat === 'Tất cả' || t.category.includes(selectedCat);
    const matchSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Card className="p-0 overflow-hidden">
      {/* Header & Controls */}
      <div className="p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-gray-900">Bảng xếp hạng chủ đề</h2>
          <p className="text-xs text-gray-500">Xếp hạng theo điểm xu hướng và quy mô thảo luận 7 ngày qua</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Categories pill selector */}
          <div className="flex flex-wrap items-center gap-1.5 bg-gray-50 p-1 rounded-lg border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedCat === cat
                    ? 'bg-white text-sky-700 shadow-xs font-semibold'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <SearchInput
            placeholder="Tìm chủ đề..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-xs py-1.5"
            containerClassName="w-full sm:w-48"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="py-3 px-4 w-12 text-center">Hạng</th>
              <th className="py-3 px-4">Chủ đề</th>
              <th className="py-3 px-4">Lĩnh vực</th>
              <th className="py-3 px-4">Nền tảng</th>
              <th className="py-3 px-4 text-right">Bài viết</th>
              <th className="py-3 px-4 text-center">Điểm xu hướng</th>
              <th className="py-3 px-4 text-right">Tăng trưởng</th>
              <th className="py-3 px-4 text-center w-20">Chi tiết</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-xs text-gray-400">
                  Không tìm thấy chủ đề phù hợp
                </td>
              </tr>
            ) : (
              filtered.map((topic) => (
                <tr key={topic.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="py-3 px-4 text-center text-xs font-bold text-gray-400 group-hover:text-sky-600">
                    {topic.rank}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onToggleFollow(topic.id)}
                        className={`p-1 rounded hover:bg-gray-100 transition-colors ${
                          topic.following ? 'text-amber-500' : 'text-gray-300 hover:text-gray-500'
                        }`}
                        title={topic.following ? 'Bỏ theo dõi' : 'Theo dõi chủ đề'}
                      >
                        <Bookmark className="h-3.5 w-3.5 fill-current" />
                      </button>
                      <Link
                        to={topic.path}
                        className="font-semibold text-gray-900 hover:text-sky-600 transition-colors"
                      >
                        {topic.title}
                      </Link>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-gray-600">{topic.category}</td>
                  <td className="py-3 px-4">
                    <div className="flex flex-wrap gap-1">
                      {topic.platforms.map((p) => (
                        <Badge key={p} variant="gray" size="sm">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right font-medium text-gray-900 text-xs">
                    {topic.posts}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-100">
                      {topic.score}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="text-xs font-semibold text-emerald-600">{topic.growth}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Link
                      to={topic.path}
                      className="inline-flex items-center justify-center p-1 text-gray-400 hover:text-sky-600 rounded-md hover:bg-sky-50 transition-colors"
                      title="Xem chi tiết chủ đề"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

