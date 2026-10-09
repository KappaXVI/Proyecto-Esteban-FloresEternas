import { forwardRef } from 'react';

const ButtonPrimary = forwardRef(
  ({ children, className = '', iconLeft, iconRight, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={`
          btn-primary
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

ButtonPrimary.displayName = 'ButtonPrimary';

export default ButtonPrimary;