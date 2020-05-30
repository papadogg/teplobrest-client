import { useState } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ total, onPageChange, activePage = 1 }) => {
  if (!total) return null;
  const totalArray = [...Array(total).keys()];
  const goBack = () => {
    if (Number(activePage) === 1) return;
    onPageChange(Number(activePage) - 1);
  };
  const goForward = () => {
    if (Number(activePage) === total) return;
    onPageChange(Number(activePage) + 1);
  };
  return (
    <ul className={styles.wrapper}>
      <li onClick={goBack} className={styles.item}>
        &#10092;
      </li>
      {/* <li className={styles.dots}>...</li> */}
      {totalArray.map((item) => {
        const pageNumber = item + 1;

        return (
          <li
            key={item}
            onClick={() => onPageChange(pageNumber)}
            className={`${styles.item} ${
              pageNumber === Number(activePage) ? styles.active : ''
            } `}
          >
            {pageNumber}
          </li>
        );
      })}
      {/* <li className={styles.dots}>...</li> */}
      <li onClick={goForward} className={styles.item}>
        &#10093;
      </li>
    </ul>
  );
};

export default Pagination;
