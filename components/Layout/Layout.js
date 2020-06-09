import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, className }) => {
  return (
    <div>
      <Head>
        <title>ТеплоБрест</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`${styles.container} ${className ? className : ''}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
