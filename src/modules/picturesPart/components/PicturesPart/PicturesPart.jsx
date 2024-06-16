import { Container } from 'shared/components';
import SectionMain from 'shared/components/SectionMain/SectionMain';

import style from './PicturesPart.module.scss';
import {
  imagesTablet1x,
  imagesTablet2x,
  imagesDesktop1x,
  imagesDesktop2x,
} from 'shared/images';

const PicturesPart = () => {
  return (
    <>
      <SectionMain>
        <div className={style.picturesPart}>
          <Container>
            <div className={style.picturesPartContainer}>
              <div className={style.pictureItem}>
                <picture
                  data-aos="zoom-out-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${imagesDesktop1x.smallTwo} 1x, ${imagesDesktop2x.smallTwo2x} 2x`}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={`${imagesTablet1x.smallTwo} 1x, ${imagesTablet2x.smallTwo2x} 2x`}
                  />

                  <img
                    src={imagesDesktop1x.smallTwo}
                    className={`${style.itemImg}`}
                    alt="picture"
                  />
                </picture>

                <picture
                  data-aos="zoom-out-right"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${imagesDesktop1x.smallThree} 1x, ${imagesDesktop2x.smallThree2x} 2x`}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={`${imagesTablet1x.smallThree} 1x, ${imagesTablet2x.smallThree2x} 2x`}
                  />

                  <img
                    src={imagesDesktop1x.smallThree}
                    className={`${style.itemImg} `}
                    alt="picture"
                  />
                </picture>
              </div>
              <div
                data-aos="zoom-out"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className={style.pictureItemBig}
              >
                <picture>
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${imagesDesktop1x.big} 1x, ${imagesDesktop2x.big2x} 2x`}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={`${imagesTablet1x.big} 1x, ${imagesTablet2x.big2x} 2x`}
                  />

                  <img
                    src={imagesDesktop1x.big}
                    className={`${style.itemImgBig} `}
                    alt="picture"
                  />
                </picture>
              </div>
              <div className={style.pictureItem}>
                <picture
                  data-aos="zoom-out-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${imagesDesktop1x.smallOne} 1x, ${imagesDesktop2x.smallOne2x} 2x`}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={`${imagesTablet1x.smallOne} 1x, ${imagesTablet2x.smallOne2x} 2x`}
                  />

                  <img
                    src={imagesDesktop1x.smallOne}
                    className={`${style.itemImg} `}
                    alt="picture"
                  />
                </picture>

                <picture
                  data-aos="zoom-out-left"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <source
                    media="(min-width: 1440px)"
                    srcSet={`${imagesDesktop1x.smallFour} 1x, ${imagesDesktop2x.smallFour2x} 2x`}
                  />
                  <source
                    media="(min-width: 375px)"
                    srcSet={`${imagesTablet1x.smallFour} 1x, ${imagesTablet2x.smallFour2x} 2x`}
                  />

                  <img
                    src={imagesDesktop1x.smallFour}
                    className={`${style.itemImg} `}
                    alt="picture"
                  />
                </picture>
              </div>
            </div>
          </Container>
        </div>
      </SectionMain>
    </>
  );
};

export default PicturesPart;
