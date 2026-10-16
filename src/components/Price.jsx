import { forwardRef } from 'react';

const Price = forwardRef(
  ({
    children,
    className = '',
    size = 'xl',
    color = 'vino',
    currency = '$',
    decimals = true,
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: 'text-lg',
      base: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl md:text-4xl',
      '2xl': 'text-4xl md:text-5xl',
    };

    const colorClasses = {
      vino: 'text-vino',
      naranja: 'text-orange-600',
      cafe: 'text-cafe-oscuro',
      verde: 'text-green-600',
      rojo: 'text-red-600',
    };

    const [whole, decimal] = String(children).split('.');

    return (
      <span
        ref={ref}
        className={`
          font-lora font-medium tabular-nums
          ${sizeClasses[size] || sizeClasses.xl}
          ${colorClasses[color] || colorClasses.vino}
          ${className}
        `}
        {...props}
      >
        <span className="font-poppins text-base align-top mr-0.5">{currency}</span>
        {whole}
        {decimals && decimal && (
          <span className="font-poppins text-lg align-bottom">{'.' + decimal}</span>
        )}
      </span>
    );
  }
);

Price.displayName = 'Price';

export default Price;