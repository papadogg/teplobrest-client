import Link from 'next/link';

import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import styles from './index.module.scss';

const ITEMS = [
  {
    id: 1,
    name: 'Viessmann',
    slug: 'viessmann',
    image: 'viessmann.jpg',
  },
  {
    id: 2,
    name: 'De Dietrich',
    slug: 'de-dietrich',

    image: 'dedietrich.jpg',
  },
  {
    id: 3,
    name: 'TIS',
    slug: 'tis',

    image: 'tis.png',
  },
  {
    id: 4,
    name: 'Ferroli',
    slug: 'ferroli',

    image: 'ferroli.jpeg',
  },
];

const HomePage = () => {
  return (
    <Layout className={styles.main}>
      <Banner />
      <h1 className={styles.h1}>Тепло в каждый дом</h1>
      <div className={styles.showcase}>
        {ITEMS.map((item) => (
          <Link
            href={`/catalog/[...slug]?brand=${item.slug}`}
            as={`/catalog/kotly?brand=${item.slug}`}
            key={item.id}
          >
            <a className={styles.showcaseItem}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className={styles.text}>{item.name}</div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
