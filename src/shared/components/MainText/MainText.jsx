import clsx from 'clsx';
import s from './MainText.module.scss';

const MainText = ({ children, className, ...props }) => {
  return (
    <p
      data-aos="fade-up"
      data-aos-duration="1000"
      className={clsx(s.titleDescription, className && className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default MainText;
