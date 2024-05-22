import { Container } from 'shared/components';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import HowItsMadeText from '../HowItsMadeText/HowItsMadeText';
import HowItsMadeCard from '../HowItsMadeCard/HowItsMadeCard';

import style from './HowItsMade.module.scss';

const HowItsMade = () => {
  return (
    <>
      <SectionMain id="howItsMade">
        <div className={style.howItsMade}>
          <Container>
            <HowItsMadeText />
            <HowItsMadeCard />
          </Container>
        </div>
      </SectionMain>
    </>
  );
};

export default HowItsMade;
