import Head from 'next/head';

import Layout from '../../components/Layout';

import styles from './index.module.scss';

export default () => {
  return (
    <Layout>
      <Head>
        <title>Оплата</title>
        <meta
          property="description"
          content="Способы оплаты в магазе ТеплоБрест"
        />
      </Head>
      <div className={styles.wrapper}>
        <h1>Способы оплаты</h1>
        <h4>Оплата наличными</h4>
        <p>
          При выборе варианта оплаты наличными, вы дожидаетесь вашего товара и
          оплачиваете его белорусскими рублями.
        </p>
        <h4>Безналичный расчёт</h4>
        <div>
          Любой товар на нашем сайте вы можете купить по безналичному расчету
          (все цены указаны с НДС). Для этого вам необходимо:
          <ul>
            <li>- заказать товар, позвонив или написав нам;</li>
            <li>
              - выслать реквизиты вашей организации на почтовый ящик
              info@teplobrest.by в течении 5 рабочих дней оплатить счет;
            </li>
            <li>
              - после получения оплаты мы с вами свяжемся и договоримся о
              времени и месте доставки.
            </li>
          </ul>
        </div>
        <h4>Рассрочка</h4>
        <div>
          Для получения рассрочки от вас необходимо при себе иметь только
          паспорт или его копию. Справка о доходах не требуется.
          <br />
          Беспроцентная рассрочка предоставляется на 4 месяца. Покупка товаров в
          кредит – до 24 месяцев.
          <br />
          Порядок действий при покупке в рассрочку/кредит :
          <ul>
            <li>
              1. Предоставить ваши паспортные данные (последние два разворота
              паспорта и прописка), можно прислать на электронную почту
              info@teplobrest.by
            </li>
            <li>
              2. Получаете от нас счет-фактуру, по вашим паспортным данным,
              которую мы отправим вам в электронном виде (для банка достаточно
              копии).
            </li>
            <li className={styles.withMargin}>
              2.1. В случае, если у вас нет возможности распечатать
              счет-фактуру, мы отправим оригинал Белпочтой, по указанному вами
              адресу. Письмо доставят вам на следующий день.
            </li>
            <li>
              3. После того как у вас на руках будет копия либо оригинал
              счета-фактуры, вы отправляетесь в ближайшее отделение
              Белагропромбанка в отдел кредитования физических лиц, где и будет
              рассмотрена ваша заявка на одобрение.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
