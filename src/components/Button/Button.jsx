import React from 'react';
import styles from './Button.module.scss';
import { ReactComponent as DownArrow } from '../../assets/icons/bottomArrow.svg';
import { ReactComponent as UpArrow } from '../../assets/icons/topArrow.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/googlePlayIcon.svg';
import { ReactComponent as AppleIcon } from '../../assets/icons/appleIcon.svg';

export const Button = ({ type }) => {
  return (
    <>
      {type === 'more' && (
        <a className={`${styles.link} ${styles.more}`} href="#">
          <span className="text">learn more</span>
          <DownArrow />
        </a>
      )}

      {type === 'started' && (
        <a className={`${styles.link} ${styles.started}`} href="#">
          <span className="text">get started</span>
          <UpArrow />
        </a>
      )}

      {type === 'apple' && (
        <a className={`${styles.link} ${styles.apple}`} href="#">
          <AppleIcon />
          <div className={styles.link_text}>
            <span className={styles.link_top}>Download on the</span>
            <span className={styles.link_button}>App Store</span>
          </div>
        </a>
      )}

      {type === 'play' && (
        <a className={`${styles.link} ${styles.play}`} href="#">
          <PlayIcon />
          <div className={styles.link_text}>
            <span className={styles.link_top}>get it on</span>
            <span className={styles.link_bottom}>Google Play</span>
          </div>
        </a>
      )}
    </>
  );
};
