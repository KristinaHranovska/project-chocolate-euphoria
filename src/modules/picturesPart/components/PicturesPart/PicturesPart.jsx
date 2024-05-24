import style from './PicturesPart.module.scss';

import { Container } from 'shared/components';
import SectionMain from 'shared/components/SectionMain/SectionMain';

const PicturesPart = () => {
  return (
    <>
      <SectionMain>
        <div className={style.picturesPart}>
          <Container></Container>
        </div>
      </SectionMain>
    </>
  );
};

export default PicturesPart;
