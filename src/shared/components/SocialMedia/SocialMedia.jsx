import { icons as sprite } from 'shared/icons';
import style from './SocialMedia.module.scss';

const SocialMedia = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <svg className={style.socialIcon}>
          <use xlinkHref={`${sprite}#instagram`} />
        </svg>
      </div>
      <div>
        <svg className={style.socialIcon}>
          <use xlinkHref={`${sprite}#twitter`} />
        </svg>
      </div>
    </div>
  );
};

export default SocialMedia;
