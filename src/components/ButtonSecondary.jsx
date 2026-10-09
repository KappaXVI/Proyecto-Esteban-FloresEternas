import { forwardRef } from 'react';

const ButtonSecondary = forwardRef(
  ({ children, className = '', iconLeft, iconRight, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'btn-secondary',
      white: 'btn-secondary text-blanco hover:bg-blanco/10 focus:ring-blanco',
      rosa: 'btn-secondary text-rosa-suave hover:bg-rosa-suave/10 focus:ring-rosa-suave',
    };

    return (
      <button
        ref={ref}
        type="button"
        className={`
          ${variants[variant] || variants.default}
          ${iconLeft || iconRight ? 'gap-2' : ''}
          ${className}
        `}
        {...props}
      >
        {iconLeft && <span className="flex-shrink-0" aria-hidden="true">{iconLeft}</span>}
        {children}
        {iconRight && <span className="flex-shrink-0" aria-hidden="true">{iconRight}</span>}
      </button>
    );
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export default ButtonSecondary;