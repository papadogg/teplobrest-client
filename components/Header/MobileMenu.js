import { useState } from 'react';
import Link from 'next/link';

import Hamburger from './Hamburger';
import CartItem from './CartItem';

import styles from './MobileMenu.module.scss';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.menuWrapper}>
      <Hamburger open={open} toggle={toggle} />

      <Link href="/">
        <a className={styles.homeLink}>
          <img src="/logo.png" alt="logo" />
          ТеплоБрест
        </a>
      </Link>
      {open && (
        <ul className={styles.menu}>
          <li>
            <Link href="/catalog">
              <a className={styles.homeLink}>Каталог</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.homeLink}>Монтаж</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.homeLink}>Доставка</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.homeLink}>Оплата</a>
            </Link>
          </li>
        </ul>
      )}
      <CartItem />
    </div>
  );
};

export default MobileMenu;
