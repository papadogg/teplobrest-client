import { useMutation } from '@apollo/react-hooks';

import Loader from '../Loader';
import Breadcrumbs from './Breadcrumbs';
import Button from '../Button';
import { ADD_TO_CART } from '../../apollo/query';
import styles from './Product.module.scss';

const Product = ({ product, loading }) => {
  if (!product || loading) {
    return <Loader />;
  }
  const {
    images,
    name,
    price,
    promoPrice,
    categories,
    description,
    attributes,
  } = product;

  const [addToCart, { loading: pending, error }] = useMutation(ADD_TO_CART, {
    variables: { product },
  });
  const onAddToCart = () => {
    addToCart();
  };
  return (
    <div className={styles.productWrapper}>
      <Breadcrumbs categories={categories} />
      <div className={styles.product}>
        <div className={styles.imageWrapper}>
          <img src={images[0].medium || images[0].small} alt={name} />
        </div>
        <div className={styles.info}>
          <h1>{name}</h1>
          <div className={styles.price}>
            <span>{promoPrice} руб</span>
            {promoPrice < price && <span>{price} руб</span>}
          </div>
          <Button onClick={onAddToCart}>Добавить в корзину</Button>
        </div>
      </div>
      <div className={styles.description}>
        <div>{description}</div>
        <h4>Технические характеристики</h4>
        <ul className={styles.attributes}>
          {attributes.map(({ attribute, value }) => (
            <li key={attribute.id}>
              <span>{attribute.name}</span>
              <span>
                {value} {attribute.unit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
