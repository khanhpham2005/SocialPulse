import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  description?: string;
  icon?: React.ReactNode;
}

const changeColorMap: Record<string, string> = {
  positive: 'bg-green-50 text-green-700',
  negative: 'bg-red-50 text-red-700',
  neutral: 'bg-gray-50 text-gray-600',
};

const changeArrowMap: Record<string, string> = {
  positive: '↑',
  negative: '↓',
  neutral: '',
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  changeType = 'neutral',
  description,
  icon,
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 relative flex flex-col gap-2">
      {/* Icon in top-right */}
      {icon && (
        <div className="absolute top-4 right-4 text-indigo-500 bg-indigo-50 rounded-lg p-2">
          {icon}
        </div>
      )}

      {/* Label */}
      <span className="text-sm text-gray-500 font-medium">{label}</span>

      {/* Value + Change */}
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {change && (
          <span
            className={`inline-flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full ${changeColorMap[changeType]}`}
          >
            {changeArrowMap[changeType]} {change}
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-xs text-gray-400 mt-1">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
