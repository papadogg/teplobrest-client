import styles from './Hamburger.module.scss';

const Hamburger = ({ open, toggle }) => {
  return (
    <button onClick={toggle} className={styles.hamburger}>
      {!open ? (
        <div className={styles.hamburgerIcon}>
          <span />
          <span />
          <span />
        </div>
      ) : (
        <div className={styles.closeIcon}>
          <span />
          <span />
        </div>
      )}
    </button>
  );
};

export default Hamburger;
