import Link from 'next/link';

import { Indicator } from '../Loader';

import styles from './Button.module.scss';

const Button = ({ children, className, onClick, href, loading, ...props }) => {
  if (href) {
    return (
      <Link href={href} {...props}>
        <a className={styles.button}>{children}</a>
      </Link>
    );
  }
  return (
    <button
      className={`${styles.button} ${className ? className : ''}`}
      onClick={onClick}
      {...props}
    >
      {loading ? <Indicator className={styles.loader} /> : children}
    </button>
  );
};

export default Button;
