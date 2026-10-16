import { forwardRef } from 'react';

const Body = forwardRef(
  ({
    as: Component = 'p',
    children,
    className = '',
    size = 'base',
    color = 'cafe-oscuro',
    align = 'left',
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: 'text-sm',
      base: 'text-base md:text-lg',
      lg: 'text-lg md:text-xl',
      xl: 'text-xl md:text-2xl',
    };

    const colorClasses = {
      'cafe-oscuro': 'text-cafe-oscuro',
      'cafe-medio': 'text-cafe-medio',
      vino: 'text-vino',
      crema: 'text-crema',
      blanco: 'text-blanco',
      rosa: 'text-rosa-suave',
      ciruela: 'text-ciruela',
      muted: 'text-cafe-medio/70',
    };

    const alignClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    return (
      <Component
        ref={ref}
        className={`
          font-poppins leading-relaxed
          ${sizeClasses[size] || sizeClasses.base}
          ${colorClasses[color] || colorClasses['cafe-oscuro']}
          ${alignClasses[align] || alignClasses.left}
          ${className}
        `}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Body.displayName = 'Body';

export default Body;