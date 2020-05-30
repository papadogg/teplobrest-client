import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

import Layout from '../Layout';
import Button from '../Button';
import withApollo from '../../apollo';
import { CREATE_ORDER } from '../../apollo/query';

import styles from './Order.module.scss';

const Order = ({ items = [] }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const [createOrder, { loading }] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      setSuccess(true);
    },
    update(cache) {
      cache.writeData({ data: { cartItems: [] } });
    },
    onError: (e) => {
      setError(true);
    },
  });

  const products = items.map((item) => ({
    product: item.product.id,
    count: item.count,
  }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError('Пожалуйста, введите ваше имя');
      return;
    }
    if (!phone) {
      setPhoneError('Пожалуйста, введите ваш номер телефона');
      return;
    }
    createOrder({
      variables: {
        input: {
          name,
          phone,
          address,
          message,
          products,
        },
      },
    });
  };
  if (error) {
    return (
      <Layout>
        <div className={styles.success}>
          При обработке вашего заказа возникли проблемы.
          <br />
          Попробуйте офомить заказ еще раз или свяжитесь с нами по номеру +375
          29 2243325
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      {success ? (
        <div className={styles.success}>
          Ваш заказ успешно оформлен.
          <br />
          Наши менеджеры свяжутся с Вами в кротчайшие сроки.
        </div>
      ) : (
        <div className={styles.wrapper}>
          <h1>Введите данные для выполения заказа</h1>
          <form onSubmit={onSubmit}>
            <div className={styles.fieldsWrapper}>
              <div>
                <label htmlFor="name">Имя*</label>
                <div className={styles.inputWrapper}>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => {
                      if (nameError) {
                        setNameError('');
                      }
                      setName(e.target.value);
                    }}
                    placeholder="Введите ваше имя"
                  />
                  {nameError && <span>{nameError}</span>}
                </div>
              </div>
              <div>
                <label htmlFor="phone">Телефон*</label>
                <div className={styles.inputWrapper}>
                  <input
                    id="phone"
                    value={phone}
                    onChange={(e) => {
                      if (phoneError) {
                        setPhoneError('');
                      }
                      setPhone(e.target.value);
                    }}
                    placeholder="+375 (XX) XXX-XX-XX"
                  />
                  {phoneError && <span>{phoneError}</span>}
                </div>
              </div>
              <div>
                <label htmlFor="address">Адрес</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Введите адрес"
                />
              </div>
              <div>
                <label htmlFor="message">Комментарий</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Комментарий к заказу"
                />
              </div>
            </div>
            <Button type="submit" loading={loading}>
              Заказать
            </Button>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Order);
