import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import {
  platformConnectionList,
  initialDataSources,
  collectionLogs,
  type DataSourceItem,
} from '../data/dataSources';
import { PlatformConnectionCards } from './DataSources/components/PlatformConnectionCards';
import { DataSourcesTable } from './DataSources/components/DataSourcesTable';
import { CollectionLogsTable } from './DataSources/components/CollectionLogsTable';
import { DataPrivacyBanner } from './DataSources/components/DataPrivacyBanner';

const DataSources: React.FC = () => {
  const [sources, setSources] = useState<DataSourceItem[]>(initialDataSources);

  const handleToggleStatus = (id: string) => {
    setSources((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const newStatus = s.status === 'active' ? 'paused' : 'active';
        const newStatusText = newStatus === 'active' ? 'Đang hoạt động' : 'Tạm dừng';
        return { ...s, status: newStatus, statusText: newStatusText };
      })
    );
  };

  return (
    <div className="max-w-[1216px] mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
            <span>QUẢN TRỊ</span>
            <span>/</span>
            <span className="text-gray-600">NGUỒN DỮ LIỆU</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Quản lý nguồn dữ liệu
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Giám sát trạng thái kết nối các nền tảng và kiểm soát các kênh quét bài viết công khai.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-xs"
          >
            <RotateCw className="h-3.5 w-3.5 text-gray-400" />
            <span>Kiểm tra kết nối</span>
          </button>
        </div>
      </div>

      {/* Platform Status Cards */}
      <PlatformConnectionCards platforms={platformConnectionList} />

      {/* Source Table */}
      <DataSourcesTable sources={sources} onToggleStatus={handleToggleStatus} />

      {/* Privacy Notice Banner */}
      <DataPrivacyBanner />

      {/* Collection Logs */}
      <CollectionLogsTable logs={collectionLogs} />
    </div>
  );
};

export default DataSources;
