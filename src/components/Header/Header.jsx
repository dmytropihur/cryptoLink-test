import React from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <a className={styles.link} href="#">
        Log In
      </a>
    </header>
  );
};
