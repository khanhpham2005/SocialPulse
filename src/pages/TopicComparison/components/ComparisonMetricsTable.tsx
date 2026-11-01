import React from 'react';
import { Card } from '../../../components/ui';
import {
  ALL_COMPARE_TOPICS,
  generateComparisonRows,
  type CompareTopicMeta,
} from '../../../data/topicComparison';

interface Props {
  selectedNames: string[];
}

export const ComparisonMetricsTable: React.FC<Props> = ({ selectedNames }) => {
  const topicA: CompareTopicMeta = ALL_COMPARE_TOPICS[selectedNames[0]] || ALL_COMPARE_TOPICS['AI trong giáo dục'];
  const topicB: CompareTopicMeta = ALL_COMPARE_TOPICS[selectedNames[1]] || ALL_COMPARE_TOPICS['Giao thông xanh'];

  const rows = generateComparisonRows(topicA, topicB);

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-5 border-b border-gray-100">
        <h2 className="text-base font-bold text-gray-900">Bảng so sánh chi tiết</h2>
        <p className="text-xs text-gray-500">
          Đối chiếu trực tiếp giữa <strong>{topicA.name}</strong> và <strong>{topicB.name}</strong>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <th className="py-3 px-5">Chỉ số so sánh</th>
              <th className="py-3 px-5 text-right font-bold text-gray-800">{topicA.name}</th>
              <th className="py-3 px-5 text-right font-bold text-gray-800">{topicB.name}</th>
              <th className="py-3 px-5 text-right">Chênh lệch</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {rows.map((r, idx) => (
              <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                <td className="py-3.5 px-5 font-medium text-gray-700 text-xs sm:text-sm">
                  {r.metric}
                </td>
                <td className="py-3.5 px-5 text-right font-semibold text-sky-600 text-xs sm:text-sm">
                  {r.valA}
                </td>
                <td className="py-3.5 px-5 text-right font-semibold text-teal-600 text-xs sm:text-sm">
                  {r.valB}
                </td>
                <td className="py-3.5 px-5 text-right text-xs font-semibold text-gray-500">
                  <span className="inline-block px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                    {r.diff}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

