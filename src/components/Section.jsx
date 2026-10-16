import { forwardRef } from 'react';

const Section = forwardRef(
  ({
    children,
    className = '',
    variant = 'default',
    id,
    'aria-labelledby': ariaLabelledby,
    ...props
  }, ref) => {
    const variants = {
      default: 'section-padding',
      hero: 'relative min-h-screen flex items-center justify-center px-6 lg:px-20 overflow-hidden',
      adminHero: 'relative min-h-screen flex items-center justify-center overflow-hidden',
      cta: 'section-padding',
      admin: 'section-padding bg-gradient-to-b from-crema via-crema to-rosa-suave/10',
      devices: 'section-padding bg-crema relative',
    };

    return (
      <section
        ref={ref}
        id={id}
        aria-labelledby={ariaLabelledby}
        className={`${variants[variant] || variants.default} ${className}`}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;