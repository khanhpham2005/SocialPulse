import React from 'react';
import { Card, Badge } from '../../../components/ui';
import type { PlatformConnectionStatus } from '../../../data/dataSources';

interface Props {
  platforms: PlatformConnectionStatus[];
}

export const PlatformConnectionCards: React.FC<Props> = ({ platforms }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {platforms.map((p) => (
        <Card key={p.platform} className="p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-gray-900 text-sm">{p.platform}</h3>
              <Badge variant={p.badgeVariant} size="sm">
                {p.status}
              </Badge>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">{p.note}</p>
          </div>
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
            <span>Đồng bộ gần nhất:</span>
            <span className="font-medium text-gray-700">{p.lastSync}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};

