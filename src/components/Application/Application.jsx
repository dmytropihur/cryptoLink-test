import React from 'react';
import { Link } from '../Link';
import rightPhone from '../../assets/images/rightPhone.png';

import styles from './Application.module.scss';
import { ApplicationList } from '../ApplicationList';

export const Application = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Passive income made easy with the{' '}
            <span className={styles.accent}>CryptoLink</span>
          </h2>
          <div className={styles.links}>
            <Link type="play" />
            <Link type="apple" />
          </div>
          <div className={styles.info}>
            <ApplicationList />
            <div className={styles.imgWrapper}>
              <img
                className={styles.img}
                src={rightPhone}
                alt="Application phone"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
