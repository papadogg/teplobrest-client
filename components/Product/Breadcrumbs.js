import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ categories }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <Link href="/catalog">
            <a>Каталог</a>
          </Link>
        </li>
        {categories.map((category, i) => (
          <li key={category.key}>
            <Link
              href="/catalog/[...slug]"
              as={`/catalog/${
                categories[i - 1] ? categories[i - 1].key + '/' : ''
              }${category.key}`}
            >
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
