import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div />
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.homeLink}>
            <img src="/logoWhite.png" alt="logo" />
            ТеплоБрест
          </a>
        </Link>
      </div>
      <div>
        <ul className={styles.menu}>
          <li>
            <Link href="/catalog">
              <a>Каталог</a>
            </Link>
          </li>
          <li>
            <Link href="/delivery">
              <a>Доставка</a>
            </Link>
          </li>
          <li>
            <Link href="/payment">
              <a>Оплата</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>О нас</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
