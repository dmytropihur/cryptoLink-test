import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/icons/logoIcon.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <LogoIcon className={styles.icon} />
      <span className={styles.text}>CryptoLink</span>
    </div>
  );
};
