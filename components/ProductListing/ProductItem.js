import { Fragment } from 'react';
import Link from 'next/link';

import styles from './ProductItem.module.scss';

const renderPrice = (price, promoPrice) => {
  if (promoPrice === 0 || price === 0) {
    return <span className={styles.newPrice}>Цена по запросу</span>;
  }
  return (
    <Fragment>
      <span className={styles.newPrice}>{promoPrice} руб</span>
      {promoPrice < price && (
        <span className={styles.oldPrice}>{price} руб</span>
      )}
    </Fragment>
  );
};

const ProductItem = ({ product }) => {
  const { slug, name, images, priceRub, promoPriceRub } = product;
  return (
    <Link href="/products/[slug]" as={`/products/${slug}`}>
      <a className={styles.item}>
        <div className={styles.imageWrapper}>
          <img src={images[0].small} alt={name} />
        </div>
        <div className={styles.info}>
          <div>{name}</div>
          <div className={styles.price}>
            {renderPrice(priceRub, promoPriceRub)}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductItem;
