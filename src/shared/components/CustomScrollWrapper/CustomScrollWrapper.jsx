import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import clsx from 'clsx';

const CustomScrollWrapper = ({ children, wrapClassName }) => {
  return (
    <OverlayScrollbarsComponent
      className={clsx('myScroll', wrapClassName && wrapClassName)}
      options={{
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 800,
          dragScrolling: true,
          clickScrolling: false,
          touchSupport: true,
          snapHandle: false,
        },
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default CustomScrollWrapper;
