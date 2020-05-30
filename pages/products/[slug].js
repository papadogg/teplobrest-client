import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import Layout from '../../components/Layout';
import Product from '../../components/Product';
import Categories from '../../components/Categories';

import withApollo from '../../apollo';
import { GET_PRODUCT, GET_CATEGORIES } from '../../apollo/query';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: {
      slug,
    },
  });
  const { data: categoriesData, loading: categoriesLoading } = useQuery(
    GET_CATEGORIES
  );

  const product = data?.getProduct;
  const categories = categoriesData?.getCategories || [];

  return (
    <Layout>
      <Categories categories={categories} />
      <Product product={product} />
    </Layout>
  );
};

export default withApollo({ ssr: true })(ProductPage);
