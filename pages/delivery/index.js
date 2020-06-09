import Head from 'next/head';

import Layout from '../../components/Layout';

import styles from './index.module.scss';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Доставка</title>
        <meta
          property="description"
          content="Способы доставки в магазе ТеплоБрест"
        />
      </Head>
      <div className={styles.wrapper}>
        <h1>Доставка</h1>
        Нашим клиентам мы предлогаем несколько вариантов доставки:
        <ul>
          <li>- Самовывоз</li>
          <li>- Курьерская служба</li>
        </ul>
        <div>
          <h4>Самовывоз</h4>
          <p>
            Вы можете забрать товар самостоятельно по адресу г. Брест, ул.
            Ясеневая, 20А, оф.302, предварительно позвонив нашему менеджеру.
          </p>
        </div>
        <div>
          <h4>Курьерская служба</h4>
          <p>
            Доставка курьерской осуществляется службой по все Беларуси. <br />
            Срок доставки зависит от вашего расположения. Как правило, доставка
            занимает не более 5 рабочих дней. <br />
            <strong>Стоимость доставки – Бесплатно!</strong>
          </p>
        </div>
      </div>
    </Layout>
  );
};
