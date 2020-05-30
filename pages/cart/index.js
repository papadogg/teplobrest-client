import { useQuery } from '@apollo/react-hooks';

import Cart from '../../components/Cart';
import withApollo from '../../apollo';
import { GET_CART_ITEMS } from '../../apollo/query';

const CartPage = () => {
  const { data, loading } = useQuery(GET_CART_ITEMS);

  const items = data?.cartItems || [];

  return <Cart items={items} />;
};

export default withApollo({ ssr: true })(CartPage);
