import Head from 'next/head';
import Header from '../Header';

import styles from './Layout.module.scss';

const Layout = ({ children, className }) => {
  return (
    <div>
      <Head>
        <title>Теплобрест</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Header</Header>
      <div className={`${styles.container} ${className ? className : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
