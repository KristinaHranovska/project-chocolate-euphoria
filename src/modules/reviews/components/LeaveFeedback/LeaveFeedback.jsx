import useModal from 'hooks/useModal';
import { Button, ModalWindow } from 'shared/components';

import style from './LeaveFeedback.module.scss';

const LeaveFeedback = () => {
  const feedbackModal = useModal();
  return (
    <>
      <Button
        onClick={feedbackModal.openModal}
        className={style.btnBorderColor}
        title={'Leave a review'}
      />

      <ModalWindow
        isOpen={feedbackModal.isOpen}
        onRequestClose={feedbackModal.closeModal}
        title="Залишити відгук"
      >
        <h2>Modal Window</h2>
      </ModalWindow>
    </>
  );
};

export default LeaveFeedback;
