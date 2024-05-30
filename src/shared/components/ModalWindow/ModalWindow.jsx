import { useEffect } from 'react';
import Modal from 'react-modal';

import { icons as sprite } from 'shared/icons';
import style from './ModalWindow.module.scss';

Modal.setAppElement('#root');

const ModalWindow = ({ isOpen, onRequestClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '15',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '32px',
          backgroundColor: '#dddddd',
        },
      }}
    >
      <button onClick={onRequestClose} className={style.closeButton}>
        <svg className={style.iconClose}>
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </button>
      <h2 className={style.cartTitle}>{title}</h2>
      {children}
    </Modal>
  );
};

export default ModalWindow;
