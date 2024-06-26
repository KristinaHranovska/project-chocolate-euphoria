import style from './TasteText.module.scss';

import { MainText, MainTitle } from 'shared/components';

const TasteText = () => {
  return (
    <>
      <MainTitle className={style.mainTitle}>
        IT ALL ADDS UP TO ONE EXCEPTIONAL{' '}
        <span className={style.accentMainTitle}>TASTE</span> SENSATION
      </MainTitle>
      <MainText className={style.colorText}>
        At Simply Chocolate, we believe that the secret to exceptional chocolate
        is in the details. From the sourcing of the finest ingredients to the
        careful crafting of each individual piece, every step of our process
        adds up to one exceptional taste sensation.
      </MainText>
    </>
  );
};

export default TasteText;
