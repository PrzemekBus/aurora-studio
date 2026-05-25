import clsx from 'clsx';

function Button({ 
  variant, 
  size, 
  children,
  className, 
  ...props
}) {
  return (
    <button
      className={clsx(
        "font-madium rounded-md transition-colors duration-300",
        {
          'btn-primary': variant === 'primary',
          'btn-secondary': variant === 'secondary',
        },
        {
          'btn-sm': size === 'sm',
          'btn-md': size === 'md',
          'btn-lg': size === 'lg',  
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;