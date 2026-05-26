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
        "transition hover:-translate-y-0.5 duration-300 cursor-pointer",
        {
          'bg-accent hover:bg-accent-dark': variant === 'primary',
          'border border-accent-bg hover:bg-accent-dark hover:border-accent': variant === 'secondary',
        },
        {
          'rounded-[10px] w-48 p-4': size === 'md', 
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