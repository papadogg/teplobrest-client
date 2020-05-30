import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import qs from 'query-string';

import Layout from '../../components/Layout';
import ProductListing from '../../components/ProductListing';
import Pagination from '../../components/Pagination';
import Categories from '../../components/Categories';
import withApollo from '../../apollo';
import { GET_PRODUCTS, GET_CATEGORIES } from '../../apollo/query';
import { INITIAL_PAGE_SIZE } from '../../config';
// import styles from './index.module.scss';

const Catalog = () => {
  const router = useRouter();
  const {
    page = 1,
    pagesize = INITIAL_PAGE_SIZE,
    slug = undefined,
  } = router.query;

  const from = page === 1 ? 0 : page * pagesize - pagesize;
  const to = page * pagesize;

  const { data: productsData, loading: productsLoading } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        slug: slug ? slug.join('/') + '/' : undefined,
        from,
        to,
      },
    }
  );

  const { data: categoriesData, loading: categoriesLoading } = useQuery(
    GET_CATEGORIES
  );

  const { products, total } = productsData?.getProducts || {};
  const categories = categoriesData?.getCategories || [];

  const onPageChange = (newPage) => {
    const query = {};
    if (newPage > 1) {
      query.page = newPage;
    }

    if (pagesize !== INITIAL_PAGE_SIZE) {
      query.pagesize = pagesize;
    }

    const search = qs.stringify(query);

    const path = slug.join('/');

    router.push(
      `/catalog/[...slug]${search ? '?' + search : ''}`,
      `/catalog/${path}${search ? '?' + search : ''}`
    );
  };

  return (
    <Layout>
      <Categories categories={categories} />
      <ProductListing products={products} loading={productsLoading} />
      <Pagination
        onPageChange={onPageChange}
        activePage={page}
        total={Math.ceil(total / pagesize)}
      />
    </Layout>
  );
};

export default withApollo({ ssr: true })(Catalog);
