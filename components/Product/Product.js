import { Fragment, useState, useRef } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Link from 'next/link';

import Breadcrumbs from './Breadcrumbs';
import { Loader, Button } from '../UI';
import { ADD_TO_CART } from '../../apollo/query';
import { capitalizeFirstLetter } from '../../helpers';

import styles from './Product.module.scss';

const renderPrice = (price, promoPrice) => {
  if (promoPrice === 0 || price === 0) {
    return <span>Цена по запросу</span>;
  }
  return (
    <Fragment>
      <span>{promoPrice} руб</span>
      {promoPrice < price && <span>{price} руб</span>}
    </Fragment>
  );
};

const Product = ({ product, loading, error }) => {
  if (error) {
    return <p className={styles.empty}>По Вашему запросу ничего не найдено</p>;
  }

  if (!product || loading) {
    return <Loader />;
  }

  const slider = useRef(null);

  const [mainImage, setMainImage] = useState(product.images[0]);

  const {
    images,
    name,
    slug,
    priceRub,
    promoPriceRub,
    categories,
    description,
    attributes,
    relatedProducts,
  } = product;

  const [addToCart, { loading: pending }] = useMutation(ADD_TO_CART, {
    variables: { product },
  });

  const onAddToCart = () => {
    addToCart();
  };

  const setImage = (image) => {
    setMainImage(image);
  };

  return (
    <div className={styles.productWrapper}>
      <Breadcrumbs categories={categories} />
      <div className={styles.product}>
        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <img src={mainImage.medium || mainImage.small} alt={name} />
          </div>
          {images.length > 1 && (
            <div className={styles.imagesPreview} ref={slider}>
              {images.slice(0, 4).map((image) => (
                <img
                  key={image.medium || image.small}
                  src={image.medium || image.small}
                  alt={name}
                  onClick={() => setImage(image)}
                />
              ))}
            </div>
          )}
        </div>
        <div className={styles.info}>
          <h1>{name}</h1>
          <div className={styles.price}>
            {renderPrice(priceRub, promoPriceRub)}
          </div>
          {relatedProducts && relatedProducts.length > 1 && (
            <div className={styles.relatedProducts}>
              <span>{relatedProducts[0].attribute.name}</span>
              <ul>
                {relatedProducts.map((p) => (
                  <li
                    key={p.slug}
                    className={p.slug === slug ? styles.active : ''}
                  >
                    <Link href="/products/[slug]" as={`/products/${p.slug}`}>
                      <a>
                        {p.attribute.value}
                        {p.attribute.unit}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.addToCart}>
            <Button onClick={onAddToCart}>Добавить в корзину</Button>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <h4>Технические характеристики</h4>
        <ul className={styles.attributes}>
          {attributes.map(({ attribute, value }) => (
            <li key={attribute.id}>
              <span>{attribute.name}</span>
              <span>
                {attribute.key === 'madeIn'
                  ? capitalizeFirstLetter(value)
                  : value}{' '}
                {attribute.unit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
