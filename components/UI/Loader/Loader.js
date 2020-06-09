import styles from './Loader.module.scss';

export default () => (
  <div className={styles.wrapper}>
    <div className={styles.loader} />
  </div>
);

export const Indicator = ({ className }) => (
  <div className={`${styles.loader} ${className ? className : ''}`} />
);
