import benefits from 'modules/benefit/helpers/benefits';
import { Container } from 'shared/components';
import style from './Benefits.module.scss';
import { icons as sprite } from 'shared/icons';

const Benefits = () => {
  return (
    <section className={style.benefitsSection}>
      <h2 className={style.visuallyHidden}>Benefits</h2>
      <div className={style.benefitsThumb}>
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
      </div>
    </section>
  );
};

export default Benefits;
