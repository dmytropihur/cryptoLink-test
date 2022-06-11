import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/medium.svg';
import { Button } from '../Button';

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
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  <InstaIcon />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  <YoutubeIcon />
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#">
                  <MediumIcon />
                </a>
              </li>
            </ul>
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
            <Button type="play" />
            <Button type="apple" />
          </div>
        </div>
      </div>
    </footer>
  );
};
