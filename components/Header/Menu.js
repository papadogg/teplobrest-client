import Link from 'next/link';

import CartItem from './CartItem';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <a className={styles.homeLink}>
          <img src="/logo.png" alt="logo" />
          ТеплоБрест
        </a>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link href="/catalog">
            <a>Каталог</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Монтаж</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Доставка</a>
          </Link>
        </li>
        <li>
          <Link href="/payment">
            <a>Оплата</a>
          </Link>
        </li>
        <CartItem />
      </ul>
    </div>
  );
};

export default Menu;
