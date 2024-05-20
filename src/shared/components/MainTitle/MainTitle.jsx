import clsx from 'clsx';
import s from './MainTitle.module.scss';

const MainTitle = ({ children, className, ...props }) => {
  return (
    <h2 className={clsx(s.title, className && className)} {...props}>
      {children}
    </h2>
  );
};

export default MainTitle;
