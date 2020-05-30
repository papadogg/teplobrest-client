import Link from 'next/link';

import Layout from '../../components/Layout';
import styles from './index.module.scss';

const ITEMS = [
  {
    id: 1,
    name: 'Ferroli',
    image: 'ferroli.jpeg',
  },
  {
    id: 2,
    name: 'Ariston',
    image: 'ariston.jpg',
  },
  {
    id: 3,
    name: 'Ferroli',
    image: 'ferroli.jpeg',
  },
  {
    id: 4,
    name: 'Ariston',
    image: 'ariston.jpg',
  },
];

const HomePage = () => {
  return (
    <Layout className={styles.main}>
      <h1 className={styles.h1}>Покупайте сегодня</h1>
      <div className={styles.showcase}>
        {ITEMS.map((item) => (
          <Link href="/" key={item.id}>
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
