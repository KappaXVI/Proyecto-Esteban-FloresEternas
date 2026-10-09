import { forwardRef } from 'react';

const statusConfig = {
  'en-preparacion': { bg: 'bg-orange-100', dot: 'bg-orange-500', text: 'text-orange-700', label: 'En preparación' },
  'en-camino': { bg: 'bg-blue-100', dot: 'bg-blue-500', text: 'text-blue-700', label: 'En camino' },
  entregado: { bg: 'bg-green-100', dot: 'bg-green-500', text: 'text-green-700', label: 'Entregado' },
  disponible: { bg: 'bg-green-100', dot: 'bg-green-500', text: 'text-green-700', label: 'Disponible' },
  'stock-bajo': { bg: 'bg-orange-100', dot: 'bg-orange-500', text: 'text-orange-700', label: 'Stock bajo' },
  pendiente: { bg: 'bg-gray-100', dot: 'bg-gray-500', text: 'text-gray-700', label: 'Pendiente' },
  cancelado: { bg: 'bg-red-100', dot: 'bg-red-500', text: 'text-red-700', label: 'Cancelado' },
};

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

export { Badge, statusConfig };
export default Badge;