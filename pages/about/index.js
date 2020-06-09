import Head from 'next/head';

import Layout from '../../components/Layout';

import styles from './index.module.scss';

export default () => {
  return (
    <Layout>
      <Head>
        <title>О нас</title>
        <meta property="description" content="О магазие ТеплоБрест" />
      </Head>
      <div className={styles.wrapper}>
        <p>Телефон: +375 29 2243325</p>
        <p>Адрес: г. Брест, ул. Ясеневая, 20А, оф.302</p>
      </div>
    </Layout>
  );
};
