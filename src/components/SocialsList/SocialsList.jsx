import React from 'react';
import { ReactComponent as InstaIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as MediumIcon } from '../../assets/icons/medium.svg';

import styles from './SocialsList.module.scss';

export const SocialsList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          <InstaIcon />
          <span className={styles.srOnly}>Instagram link</span>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          <TwitterIcon />
          <span className={styles.srOnly}>Twitter link</span>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          <YoutubeIcon />
          <span className={styles.srOnly}>Youtube link</span>
        </a>
      </li>
      <li className={styles.item}>
        <a className={styles.link} href="#">
          <MediumIcon />
          <span className={styles.srOnly}>Medium link</span>
        </a>
      </li>
    </ul>
  );
};
