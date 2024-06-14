import clsx from 'clsx';
import s from './MainTitle.module.scss';

const MainTitle = ({ children, className, ...props }) => {
  return (
    <h2
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className={clsx(s.title, className && className)}
      {...props}
    >
      {children}
    </h2>
  );
};

export default MainTitle;
