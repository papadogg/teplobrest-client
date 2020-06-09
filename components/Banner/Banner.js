import Link from 'next/link';

import styles from './Banner.module.scss';

const images = [
  {
    id: 1,
    link: '/catalog/kotly/gazovye',
  },
  {
    id: 2,
    link: '/catalog/kotly/tverdotoplivnye',
  },
  {
    id: 3,
    link: '/catalog/kotly/elektricheskie',
  },
];

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      {images.map((image) => (
        <div key={image.id} className={styles.banner} />
      ))}
      {images.map((image) => (
        <Link key={image.id} href="/catalog/[...slug]" as={image.link}>
          <a className={styles.link} />
        </Link>
      ))}
    </div>
  );
};

export default Banner;
