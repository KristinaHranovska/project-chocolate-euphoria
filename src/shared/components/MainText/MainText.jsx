import clsx from 'clsx';
import s from './MainText.module.scss';

const MainText = ({ children, className, ...props }) => {
  return (
    <p className={clsx(s.titleDescription, className && className)} {...props}>
      {children}
    </p>
  );
};

export default MainText;
