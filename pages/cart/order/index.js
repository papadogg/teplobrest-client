import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';

import Order from '../../../components/Order';
import withApollo from '../../../apollo';
import { GET_CART_ITEMS } from '../../../apollo/query';

const OrderPage = () => {
  const router = useRouter();
  const { data, loading } = useQuery(GET_CART_ITEMS);

  const items = data?.cartItems || [];

  return <Order items={items} />;
};

export default withApollo({ ssr: true })(OrderPage);
