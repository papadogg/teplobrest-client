import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';

import { GET_CART_ITEMS } from '../../apollo/query';
import withApollo from '../../apollo';
import styles from './CartItem.module.scss';

const CartItem = () => {
  const { data } = useQuery(GET_CART_ITEMS);

  const items = data?.cartItems || [];
  const count = items.reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);
  return (
    <li className={styles.cartLink}>
      <Link href="/cart">
        <a>
          <img src="/cart.svg" alt="cart" />
          {count > 0 && <span>{count}</span>}
        </a>
      </Link>
    </li>
  );
};

export default withApollo({ ssr: true })(CartItem);
