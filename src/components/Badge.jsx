import { forwardRef } from 'react';
import { statusConfig } from './Badge.config';

const Badge = forwardRef(
  ({ status, children, className = '', size = 'md', dot = true, ...props }, ref) => {
    const config = statusConfig[status] || statusConfig.pendiente;
    const isCustom = !statusConfig[status] && children;

    const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs gap-1',
      md: 'px-3 py-1 text-sm gap-1.5',
      lg: 'px-4 py-1.5 text-base gap-2',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-flex items-center font-poppins font-medium rounded-full
          ${config.bg} ${config.text}
          ${sizeClasses[size] || sizeClasses.md}
          ${className}
        `}
        {...props}
      >
        {dot && !isCustom && <span className={`w-1.5 h-1.5 rounded-full ${config.dot} flex-shrink-0`} aria-hidden="true" />}
        {isCustom ? children : config.label}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;