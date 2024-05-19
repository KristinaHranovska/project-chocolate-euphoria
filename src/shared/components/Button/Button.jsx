import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({
  type = 'button',
  children,
  title,
  className,
  border,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, className && className, border && s.border)}
      {...rest}
    >
      {title ? title : children}
    </button>
  );
};

export default Button;
