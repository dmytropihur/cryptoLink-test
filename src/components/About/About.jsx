import React from 'react';
import styles from './About.module.scss';
import leftPhone from '../../assets/images/leftAboutPhone.png';
import rightPhone from '../../assets/images/rightAboutPhone.png';
import { Button } from '../../components/Button';

export const About = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.leftContainer}`}>
        <div className={styles.inner}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.imgLeft}
              src={leftPhone}
              alt="About section phone"
            />
            <img
              className={styles.imgRight}
              src={rightPhone}
              alt="About section phone"
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>CryptoLink</h2>
            <p className={styles.text}>
              The CryptoLink is a centralized DeFi application built for
              next-generation staking, yield farming and financial services. Our
              mission is to remove all the technical barriers that come with
              decentralized finance so that everyone can experience the benefits
              of DeFi.
            </p>
            <div className={styles.button}>
              <Button type="started" />
            </div>
            <div className={styles.adaptiveButtons}>
              <Button type="play" />
              <Button type="apple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
