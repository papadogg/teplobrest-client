import ProductItem from './ProductItem';
import { Loader } from '../../components/UI';

import styles from './ProductListing.module.scss';

const ProductListing = ({ products, loading }) => {
  if (!products || loading) {
    return <Loader />;
  }
  if (products.length === 0) {
    return <p className={styles.empty}>По Вашему запросу ничего не найдено</p>;
  }
  return (
    <div className={styles.listing}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
