import { icons as sprite } from 'shared/icons';
import style from './SocialMedia.module.scss';

const SocialMedia = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <a href="https://www.instagram.com/" target="_blank">
          <svg className={style.socialIcon}>
            <use xlinkHref={`${sprite}#instagram`} />
          </svg>
        </a>
      </div>
      <div>
        <a href="https://x.com/" target="_blank">
          <svg className={style.socialIcon}>
            <use xlinkHref={`${sprite}#twitter`} />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
