import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '../Button/Button';
import { Header } from '../Header';
import phone from '../../assets/images/handPhone.png';

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <Header />
        <div className={styles.bottom}>
          <div className={styles.info}>
            <h1 className={styles.title}>The Passive Income App For All</h1>
            <p className={styles.text}>
              Swap,Yield Farm, Stake, Borrow and Lend cryptocurrency all in one
              application.
            </p>
            <div className={styles.links}>
              <Button type="more" />
              <Button type="started" />
            </div>
          </div>
          <img className={styles.img} src={phone} alt="Phone" />
        </div>
      </div>
    </section>
  );
};
