import { Fragment } from 'react';
import Link from 'next/link';
import { useMutation } from '@apollo/react-hooks';

import Layout from '../Layout';
import Button from '../Button';
import withApollo from '../../apollo';
import { REMOVE_FROM_CART, INCREASE, DECREASE } from '../../apollo/query';

import styles from './Cart.module.scss';

const Cart = ({ items }) => {
  const [removeFromCart] = useMutation(REMOVE_FROM_CART);
  const [increase] = useMutation(INCREASE);
  const [decrease] = useMutation(DECREASE);
  const deleteItem = (id) => {
    removeFromCart({
      variables: { id },
    });
  };
  const increaseCount = (id) => {
    increase({
      variables: { id },
    });
  };
  const decreaseCount = (id) => {
    decrease({
      variables: { id },
    });
  };
  const totalSum = items.reduce((acc, cur) => {
    return acc + cur.count * cur.product.promoPrice;
  }, 0);
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Корзина</h1>
        {items.length === 0 ? (
          <p className={styles.empty}>Ваша корзина пуста</p>
        ) : (
          <Fragment>
            <ul>
              <li className={styles.header}>
                <p>Товары</p>
                <p>Цена</p>
                <p>Колличество</p>
                <p>Сумма</p>
              </li>
              {items.map(({ product, count }) => (
                <li className={styles.item} key={product.id}>
                  <div className={styles.info}>
                    <div className={styles.imageWrapper}>
                      <img src={product.images[0].small} alt={product.name} />
                    </div>
                    <p className={styles.name}>{product.name}</p>
                  </div>
                  <div className={styles.price}>
                    <span>{product.promoPrice} руб</span>
                    {product.promoPrice < product.price && (
                      <span>{product.price} руб</span>
                    )}
                  </div>
                  <div className={styles.count}>
                    <button onClick={() => decreaseCount(product.id)}>-</button>
                    {count}
                    <button onClick={() => increaseCount(product.id)}>+</button>
                  </div>
                  <div className={styles.total}>
                    {product.promoPrice * count} руб
                  </div>
                  <div className={styles.deleteBtn}>
                    <button onClick={() => deleteItem(product.id)}>X</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.totalSum}>
              Итого: <span>{totalSum} руб</span>
            </div>
            <div className={styles.order}>
              <Button href="/cart/order">Оформить заказ</Button>
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  );
};

export default withApollo({ ssr: true })(Cart);
