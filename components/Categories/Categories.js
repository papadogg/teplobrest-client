import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './Categories.module.scss';

const prepareCategories = (categories = []) => {
  const sorted = categories
    .slice()
    .sort((a, b) => b.level - a.level)
    .map((c) => ({ ...c }));
  const categoryArray = sorted.slice();

  for (const cat of sorted) {
    const parent = categoryArray.find((c) => c.id === cat.parentId);
    if (parent) {
      parent.categories = parent.categories
        ? [...parent.categories, cat]
        : [cat];
    }
  }
  const topCategories = categoryArray.filter((c) => c.parentId === 'catalog');
  return topCategories;
};

const renderSecondary = (slug, topCategories, index) => {
  if (!slug) return null;
  const secondary = topCategories.find((c) => c.key === slug[index]);
  if (!secondary || !secondary.categories) return null;
  return (
    <Fragment>
      <ul className={styles.list}>
        {secondary &&
          secondary.categories &&
          secondary.categories.map((category) => (
            <li
              className={`${styles.item} ${
                slug && slug.includes(category.key)
                  ? styles.activeSecondary
                  : ''
              }`}
              key={category.id}
            >
              <Link
                href="/catalog/[...slug]"
                as={`/catalog/${slug.slice(0, index + 1).join('/')}/${
                  category.key
                }`}
              >
                <a>{category.name}</a>
              </Link>
            </li>
          ))}
      </ul>
      {renderSecondary(slug, secondary.categories, 1)}
    </Fragment>
  );
};

const Categories = ({ categories }) => {
  if (!categories) return null;
  const router = useRouter();
  const { slug = undefined } = router.query;

  const topCategories = prepareCategories(categories);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {topCategories.map((category) => (
          <li
            className={`${styles.item} ${
              slug && slug.includes(category.key) ? styles.activeMain : ''
            }`}
            key={category.id}
          >
            <Link href="/catalog/[...slug]" as={`/catalog/${category.key}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {renderSecondary(slug, topCategories, 0)}
    </div>
  );
};

export default Categories;
