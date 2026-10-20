import React, { forwardRef } from 'react';
import { Check } from 'lucide-react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
  containerClassName?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, checked, onChange, containerClassName = '', className = '', id, ...props }, ref) => {
    const inputId = id || (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className={`space-y-1 ${containerClassName}`}>
        <label
          htmlFor={inputId}
          className="inline-flex items-start gap-2.5 cursor-pointer select-none group text-sm text-gray-700"
        >
          <div className="relative flex items-center justify-center mt-0.5 shrink-0">
            <input
              id={inputId}
              ref={ref}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              className="sr-only peer"
              {...props}
            />
            <div
              className={`w-4 h-4 rounded border transition-colors flex items-center justify-center ${
                checked
                  ? 'bg-indigo-600 border-indigo-600 text-white'
                  : 'bg-white border-gray-300 group-hover:border-indigo-400'
              } ${error ? 'border-rose-400' : ''} ${className}`}
            >
              {checked && <Check className="h-3 w-3 stroke-[3]" />}
            </div>
          </div>
          {label && <span className="text-sm text-gray-600 leading-tight">{label}</span>}
        </label>
        {error && <p className="text-xs text-rose-600 font-medium pl-6">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;

