import Link from 'next/link';
import styles from './Header.module.scss';

import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <MobileMenu />
    </header>
  );
};

export default Header;
