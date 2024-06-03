import { Container, MainTitle } from 'shared/components';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import ReviewCard from '../ReviewCard/ReviewCard';
import LeaveFeedback from '../LeaveFeedback/LeaveFeedback';

import style from './Reviews.module.scss';

const Reviews = () => {
  return (
    <>
      <SectionMain id="chocolateIsLoved">
        <Container>
          <MainTitle className={style.mainTitle}>
            <span className={style.accentMainTitle}>Chocolate</span> is loved
          </MainTitle>
          <div className={style.chocolateLovers}>
            <ReviewCard />
            <LeaveFeedback />
          </div>
        </Container>
      </SectionMain>
    </>
  );
};

export default Reviews;
