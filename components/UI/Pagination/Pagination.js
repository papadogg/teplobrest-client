import { useState } from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({ total, onPageChange, activePage = 1 }) => {
  if (!total) return null;
  const totalArray = [...Array(total).keys()];
  if (total > 5) {
    totalArray.splice(1, 0, 'dots');
    totalArray.splice(totalArray.length - 1, 0, 'dots');
  }
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
      {totalArray.map((item, i) => {
        let display = 'flex';
        switch (true) {
          case i === 0 || i === totalArray.length - 1:
            break;
          case item === 'dots':
            if (Math.abs(i - activePage) > 2) {
              break;
            } else {
              display = 'none';
            }
          case Math.abs(i - activePage) > 1:
            display = 'none';
            break;
          default:
            break;
        }
        if (item === 'dots') {
          return (
            <li
              style={{
                display,
              }}
              className={styles.dots}
            >
              ...
            </li>
          );
        }
        const pageNumber = item + 1;

        return (
          <li
            key={item}
            style={{
              display,
            }}
            onClick={() => onPageChange(pageNumber)}
            className={`${styles.item} ${
              pageNumber === Number(activePage) ? styles.active : ''
            } `}
          >
            {pageNumber}
          </li>
        );
      })}
      <li onClick={goForward} className={styles.item}>
        &#10093;
      </li>
    </ul>
  );
};

export default Pagination;
