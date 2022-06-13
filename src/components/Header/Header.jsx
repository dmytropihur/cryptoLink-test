import React from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Logo />
          <a className={styles.link} href="#">
            Log In
          </a>
        </div>
      </div>
    </header>
  );
};
