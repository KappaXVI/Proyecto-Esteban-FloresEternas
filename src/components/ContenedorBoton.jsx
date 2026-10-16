import { forwardRef, Fragment } from 'react';
import { Heading, Body, ButtonSecondary } from './index';

const fondoHero = '/images/Fondo.png';

const arrowRightIcon = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const sizeStyles = {
  sm: {
    padding: 'px-6 py-4',
    heading: 'text-2xl md:text-3xl',
    bodySize: 'sm',
    button: 'px-3 py-1.5 text-sm',
    gap: 'gap-4',
    radius: 'rounded-xl',
  },
  md: {
    padding: 'px-8 py-6',
    heading: 'text-3xl md:text-4xl',
    bodySize: 'base',
    button: 'px-4 py-2 text-base',
    gap: 'gap-6',
    radius: 'rounded-2xl',
  },
  lg: {
    padding: 'px-10 py-8',
    heading: 'text-4xl md:text-5xl lg:text-6xl',
    bodySize: 'lg',
    button: 'px-5 py-2.5 text-lg',
    gap: 'gap-8 lg:gap-12',
    radius: 'rounded-[2.5rem]',
  },
  xl: {
    padding: 'px-12 py-12',
    heading: 'text-5xl md:text-6xl lg:text-7xl',
    bodySize: 'xl',
    button: 'px-6 py-3 text-xl',
    gap: 'gap-10 lg:gap-14',
    radius: 'rounded-4xl',
  },
};

const variantStyles = {
  default: 'max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between',
  compact: 'max-w-xl mx-auto flex flex-col items-center text-center',
  hero: 'w-full flex flex-col lg:flex-row lg:items-center justify-between',
};

const ContenedorBoton = forwardRef(
  ({
    title = '¿Lista para hacer crecer<br />tu negocio de flores eternas?',
    description = 'Descubre todo lo que puedes hacer con Flores Eternas.',
    buttonText = 'Conocer la plataforma',
    size = 'lg',
    variant = 'default',
    rounded,
    animationDelay = '400ms',
    backgroundImage,
    className = '',
    style = {},
    titleSize,
    ...props
  }, ref) => {
    const s = sizeStyles[size] || sizeStyles.lg;
    const v = variantStyles[variant] || variantStyles.default;
    const radius = rounded || s.radius;
    const bgImage = backgroundImage || fondoHero;
    const headingSize = titleSize || s.heading;

    return (
      <div
        ref={ref}
        className={`relative z-20 animate-fade-in-up ${v} ${s.gap} ${s.padding} ${radius} ${className}`}
        style={{ animationDelay, ...style }}
        {...props}
      >
        <div className="absolute inset-0 bg-vino overflow-hidden rounded-[inherit]" aria-hidden="true">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${bgImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-br from-vino/90 via-vino to-vino-hover" />
        </div>

        <div className="relative w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <Heading
              level={2}
              className={`text-crema mb-4 ${headingSize} leading-[1.1]`}
            >
              {title.split('<br />').map((part, i) => (
                <Fragment key={i}>
                  {part}
                  {i < title.split('<br />').length - 1 && <br />}
                </Fragment>
              ))}
            </Heading>
            <Body
              size={s.bodySize}
              color="crema"
              className="!mt-4 !mb-0 max-w-xl mx-auto lg:mx-0 text-center lg:text-left opacity-90"
            >
              {description}
            </Body>
          </div>

          <div className="flex justify-center lg:justify-end shrink-0">
            <ButtonSecondary
              iconRight={arrowRightIcon}
              variant="white"
              className={`whitespace-nowrap ${s.button}`}
            >
              {buttonText}
            </ButtonSecondary>
          </div>
        </div>
      </div>
    );
  }
);

ContenedorBoton.displayName = 'ContenedorBoton';

export default ContenedorBoton;