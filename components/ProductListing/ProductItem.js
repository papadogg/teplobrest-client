import Link from 'next/link';

import styles from './ProductItem.module.scss';

const ProductItem = ({ product }) => {
  return (
    <Link href="/products/[slug]" as={`/products/${product.slug}`}>
      <a className={styles.item}>
        <div className={styles.imageWrapper}>
          <img src={product.images[0].small} alt={product.name} />
        </div>
        <div className={styles.info}>
          <div>{product.name}</div>
          <h4>{product.price} руб</h4>
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
