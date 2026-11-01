import React, { useState } from 'react';
import { Card, Input, Checkbox, Button } from '../../../components/ui';
import type { WatchedTopicItem } from '../../../data/watchedTopics';

interface Props {
  onAdd: (topic: WatchedTopicItem) => void;
  onCancel: () => void;
}

const availablePlatforms = ['Facebook', 'Threads', 'Reddit'];
const cycleOptions = ['1 giờ', '2 giờ', '6 giờ', '12 giờ', '24 giờ'];

export const AddTopicForm: React.FC<Props> = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [keywords, setKeywords] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Facebook', 'Threads']);
  const [cycle, setCycle] = useState('2 giờ');
  const [error, setError] = useState('');

  const togglePlatform = (p: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((item) => item !== p) : [...prev, p]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Vui lòng nhập tên chủ đề.');
      return;
    }
    if (selectedPlatforms.length === 0) {
      setError('Vui lòng chọn ít nhất 1 nền tảng thu thập.');
      return;
    }

    const newTopic: WatchedTopicItem = {
      id: `watch-${Date.now()}`,
      name: name.trim(),
      keywords: keywords.trim() || name.trim(),
      platforms: selectedPlatforms,
      cycle,
      lastUpdate: 'Vừa tạo\nChờ quét chu kỳ đầu',
      status: 'active',
    };

    onAdd(newTopic);
    setName('');
    setKeywords('');
    setError('');
  };

  return (
    <Card className="p-5 border-sky-200 bg-sky-50/30 animate-fadeIn">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
        <div>
          <h2 className="text-sm font-bold text-gray-900">Thêm chủ đề theo dõi mới</h2>
          <p className="text-xs text-gray-500">Cấu hình từ khóa và chu kỳ quét tự động</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Tên chủ đề *"
            placeholder="Ví dụ: Năng lượng tái tạo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            label="Từ khóa tìm kiếm (phân tách bởi dấu phẩy)"
            placeholder="pin mặt trời, điện gió, năng lượng xanh"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Platforms */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">
              Nền tảng thu thập *
            </label>
            <div className="flex items-center gap-4">
              {availablePlatforms.map((p) => (
                <Checkbox
                  key={p}
                  label={p}
                  checked={selectedPlatforms.includes(p)}
                  onChange={() => togglePlatform(p)}
                />
              ))}
            </div>
          </div>

          {/* Cycle */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Chu kỳ cập nhật
            </label>
            <select
              value={cycle}
              onChange={(e) => setCycle(e.target.value)}
              className="w-full text-xs border border-sky-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              {cycleOptions.map((c) => (
                <option key={c} value={c}>
                  Mỗi {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
          <Button type="button" variant="outline" size="sm" onClick={onCancel}>
            Hủy bỏ
          </Button>
          <Button type="submit" variant="primary" size="sm">
            Lưu và kích hoạt
          </Button>
        </div>
      </form>
    </Card>
  );
};

