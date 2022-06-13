import React from 'react';
import { Link } from '../Link';
import { SocialsList } from '../SocialsList/SocialsList';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.help}>Need some help?</span>
          <div className={styles.media}>
            <a className={styles.email} href="mailto: Info@TheCryptoLink.com">
              Info@TheCryptoLink.com
            </a>
            <SocialsList />
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © CryptoLink 2022. All Right Reserved.
          </span>
          <div className={styles.links}>
            <a href="#">Terms of Use</a>
            <a href="#">Help</a>
          </div>
          <div className={styles.buttons}>
            <Link type="play" />
            <Link type="apple" />
          </div>
        </div>
      </div>
    </footer>
  );
};
