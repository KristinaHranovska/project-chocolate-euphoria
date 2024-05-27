import benefits from 'modules/benefit/helpers/benefits';
import { Container } from 'shared/components';
import style from './Benefits.module.scss';
import { icons as sprite } from 'shared/icons';
import { imagesDesktop2x } from 'shared/images';
import SectionMain from 'shared/components/SectionMain/SectionMain';
import { useMedia } from 'hooks/useMedia';

const Benefits = () => {
  const { isTablet, isDesktop } = useMedia();

  return (
    <SectionMain className={style.benefitsSection}>
      <h2 className={style.visuallyHidden}>Benefits</h2>
      <div className={style.benefitsThumb}>
        {(isTablet || isDesktop) && (
          <img
            className={style.benefitsImgUp}
            src={imagesDesktop2x.lineUp2x}
            alt="line"
          />
        )}
        <Container>
          <ul className={style.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={style.benefitsItem}>
                <div className={style.thumbBenefits}>
                  <svg className={style.benefitsIcons}>
                    <use xlinkHref={`${sprite}#${benefit.icon}`} />
                  </svg>
                </div>
                <h3 className={style.benefitsTitle}>{benefit.title}</h3>
                <p className={style.benefitsDescription}>
                  {benefit.describtion}
                </p>
              </li>
            ))}
          </ul>
        </Container>
        {(isTablet || isDesktop) && (
          <img
            className={style.benefitsImgDown}
            src={imagesDesktop2x.lineDown2x}
            alt="line"
          />
        )}
      </div>
    </SectionMain>
  );
};

export default Benefits;
