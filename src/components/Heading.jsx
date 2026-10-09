import { forwardRef } from 'react';

const Heading = forwardRef(
  ({
    as: Component = 'h1',
    level = 1,
    children,
    className = '',
    italic = false,
    italicText,
    italicColor = 'rosa-suave',
    ...props
  }, ref) => {
    const levelStyles = {
      1: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
      2: 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
      3: 'text-2xl md:text-3xl lg:text-4xl',
      4: 'text-xl md:text-2xl lg:text-3xl',
      5: 'text-lg md:text-xl lg:text-2xl',
      6: 'text-base md:text-lg lg:text-xl',
    };

    const colorClasses = {
      vino: 'text-vino',
      crema: 'text-crema',
      blanco: 'text-blanco',
      cafe: 'text-cafe-oscuro',
      rosa: 'text-rosa-suave',
    };

    return (
      <Component
        ref={ref}
        className={`
          font-radley font-normal leading-tight tracking-tight
          ${levelStyles[level] || levelStyles[1]}
          ${colorClasses[props.color] || 'text-vino'}
          ${className}
        `}
        {...props}
      >
        {italic && italicText ? (
          <>
            {children}
            <span className={`italic-radley text-${italicColor} relative`}>
              {' '}{italicText}
            </span>
          </>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;