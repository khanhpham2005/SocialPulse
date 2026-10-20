import React from 'react';

interface FilterBarProps {
  children: React.ReactNode;
  className?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${className}`}
    >
      {children}
    </div>
  );
};

interface FilterSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  options,
  className = '',
  ...props
}) => {
  return (
    <div className="flex items-center gap-2">
      {label && (
        <label className="text-sm text-gray-500 font-medium whitespace-nowrap">
          {label}
        </label>
      )}
      <select
        className={`text-sm border border-gray-300 rounded-lg bg-white px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { FilterBar, FilterSelect };
export default FilterBar;
