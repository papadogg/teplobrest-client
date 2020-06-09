import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Product from '../../components/Product';
import Categories from '../../components/Categories';

import withApollo from '../../apollo';
import { GET_PRODUCT, GET_CATEGORIES } from '../../apollo/query';

const seo = (product = {}) => {
  if (!product.name) {
    return 'TeploBrest - Низкие цены, монтаж, бесплатная доставка.';
  }
  return `${product.name} - купить в магазине TeploBrest от ${product.promoPriceRub} руб. - Низкие цены, монтаж, бесплатная доставка.`;
};

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, loading, error } = useQuery(GET_PRODUCT, {
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
      <Head>
        <title>{seo(product)}</title>
        <meta property="description" content={seo(product)} />
      </Head>
      <Categories categories={categories} />
      <Product product={product} error={error} />
    </Layout>
  );
};

export default withApollo({ ssr: true })(ProductPage);
