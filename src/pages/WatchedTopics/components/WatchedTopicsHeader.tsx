import React from 'react';
import { Plus, X } from 'lucide-react';
import { SearchInput, Button } from '../../../components/ui';

interface Props {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  showAddForm: boolean;
  onToggleAddForm: () => void;
}

export const WatchedTopicsHeader: React.FC<Props> = ({
  searchTerm,
  onSearchChange,
  showAddForm,
  onToggleAddForm,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
          <span>KHÁM PHÁ & PHÂN TÍCH</span>
          <span>/</span>
          <span className="text-gray-600">CHỦ ĐỀ THEO DÕI</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Chủ đề theo dõi
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Quản lý danh sách các chủ đề trọng tâm cần hệ thống tự động quét và phân tích định kỳ.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <SearchInput
          placeholder="Tìm chủ đề..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="text-xs py-2"
          containerClassName="w-48 sm:w-56"
        />

        <Button
          variant={showAddForm ? 'secondary' : 'primary'}
          size="sm"
          onClick={onToggleAddForm}
          className="gap-1.5 shrink-0"
        >
          {showAddForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          <span>{showAddForm ? 'Đóng biểu mẫu' : 'Thêm chủ đề'}</span>
        </Button>
      </div>
    </div>
  );
};

