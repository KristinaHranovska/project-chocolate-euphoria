import { MainText, MainTitle } from 'shared/components';
import style from './HowItsMadeText.module.scss';

const HowItsMadeText = () => {
  return (
    <>
      <MainTitle className={style.mainTitle}>
        How it’s <span className={style.accentMainTitle}>made</span>?
      </MainTitle>
      <MainText>
        Try our chocolate today and discover the perfect balance of flavor
      </MainText>
    </>
  );
};

export default HowItsMadeText;
