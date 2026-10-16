import { forwardRef } from 'react';

const Container = forwardRef(
  ({ children, className = '', size = 'main', as: Component = 'div', ...props }, ref) => {
    const sizes = {
      main: 'mx-auto max-w-7xl',
      narrow: 'mx-auto max-w-4xl',
      wide: 'mx-auto max-w-[90rem]',
      full: 'w-full',
    };

    return (
      <Component
        ref={ref}
        className={`${sizes[size] || sizes.main} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;