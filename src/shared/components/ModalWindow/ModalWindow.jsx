import Modal from 'react-modal';

// import style from './ModalWindow.module.scss';

Modal.setAppElement('#root');

const ModalWindow = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <h2>{title}</h2>
      <button onClick={onRequestClose}>Закрити</button>
      {children}
    </Modal>
  );
};

export default ModalWindow;
