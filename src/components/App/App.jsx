import React from 'react';
import styles from './App.module.scss';

import { Button } from '../../components/Button';
import rightPhone from '../../assets/images/rightPhone.png';

export const App = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Passive income made easy with the <span>CryptoLink</span>
          </h2>
          <div className={styles.links}>
            <Button type="play" />
            <Button type="apple" />
          </div>
          <div className={styles.info}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.itemNum}>1</div>
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemTitle}>Download The CryptoLink</h3>
                  <p className={styles.itemText}>
                    Get started with the CryptoLink on your IOS or android
                    mobile device.
                  </p>
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.itemNum}>2</div>
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemTitle}>
                    Create Your CryptoLink Account
                  </h3>
                  <p className={styles.itemText}>
                    Choose your username, password and confirm your email
                    address to register.
                  </p>
                </div>
              </li>
              <li className={styles.item}>
                <div className={styles.itemNum}>3</div>
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemTitle}>
                    Easily Begin Earning Passive Income
                  </h3>
                  <p className={styles.itemText}>
                    Pick a yield strategy, Track your investments with the
                    dashboard then sit back relax and watch your CryptoLink
                    portfolio grow.
                  </p>
                </div>
              </li>
            </ul>
            <div className={styles.imgWrapper}>
              <img
                className={styles.img}
                src={rightPhone}
                alt="App phone picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
