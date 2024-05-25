import style from './FooterContent.module.scss';

const FooterContent = () => {
  return (
    <div className={style.fotterInformThumb}>
      <h2 className={style.footerTitle}>
        <span className={style.accentMainTitle}>Chocolate</span> a delicious
        cure for a bad day
      </h2>

      <address className={style.fotterAddress}>
        <p className={style.footerText}>Contact us</p>
        <ul className={style.footerContactsList}>
          <li>
            <a className={style.footerLink} href="tel:+380684439426">
              +380 (68) 443-94-26
            </a>
          </li>
          <li>
            <a className={style.footerLink} href="mailto:simplychoc@gmail.com">
              simplychoc@gmail.com
            </a>
          </li>
        </ul>
      </address>
    </div>
  );
};

export default FooterContent;
