import React from 'react';
import styles from './Card.module.scss';
import card from '../../assets/images/card.png';

export const Card = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.inner}>
            <h2 className={styles.title}>CryptoLink Debit Card</h2>
            <p className={styles.text}>
              The CryptoLink card is used to spend your account balance anytime
              and anywhere without ever needing to withdrawal funds and wait for
              bank transfer to process. The CryptoLink debit card makes spending
              your portfolios passive income extremely easy.
            </p>
            <div className={styles.linkWrapper}>
              <a className={styles.link} href="#">
                Get Your CryptoLink Debit Card Today
              </a>
            </div>
          </div>
          <img className={styles.img} src={card} alt="Debit Card" />
        </div>
      </div>
    </section>
  );
};
