import React from 'react';
import { Link } from '../Link';
import phone from '../../assets/images/handPhone.png';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.bottom}>
          <div className={styles.info}>
            <h1 className={styles.title}>The Passive Income App For All</h1>
            <p className={styles.text}>
              Swap,Yield Farm, Stake, Borrow and Lend cryptocurrency all in one
              application.
            </p>
            <div className={styles.links}>
              <Link type="more" />
              <Link type="started" />
            </div>
          </div>
          <img className={styles.img} src={phone} alt="Phone" />
        </div>
      </div>
    </section>
  );
};
