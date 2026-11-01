import React from 'react';
import { Card, Badge } from '../../../components/ui';
import type { KeyPerspectiveItem } from '../../../data/topicDetail';

interface Props {
  perspectives: KeyPerspectiveItem[];
}

export const KeyPerspectivesSection: React.FC<Props> = ({ perspectives }) => {
  return (
    <div className="space-y-3">
      <h2 className="text-base font-bold text-gray-900">3 Góc nhìn thảo luận chính</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {perspectives.map((p, idx) => (
          <Card key={idx} className="flex flex-col justify-between p-5">
            <div>
              <Badge variant={p.tagColor} size="sm">
                {p.tag}
              </Badge>
              <h3 className="font-bold text-gray-900 text-sm mt-3 mb-2">{p.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

