import style from './Reviews.module.scss';

import { Button, Container, MainTitle } from 'shared/components';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import ReviewCard from '../ReviewCard/ReviewCard';

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
            <Button className={style.btnBorderColor} title={'Leave a review'} />
          </div>
        </Container>
      </SectionMain>
    </>
  );
};

export default Reviews;
