import React from 'react';
import styles from './ChainItem.module.scss';
import solana from '../../assets/images/solana.png';
import terra from '../../assets/images/terra.png';
import moon from '../../assets/images/moon.png';
import avalanche from '../../assets/images/avalanche.png';

export const ChainItem = ({ text, type }) => {
  return (
    <div className={styles.item}>
      {type === 'terra' && (
        <img className={styles.img} src={terra} alt="terra" />
      )}
      {type === 'solana' && (
        <img className={styles.img} src={solana} alt="solana" />
      )}
      {type === 'moon' && <img className={styles.img} src={moon} alt="moon" />}
      {type === 'avalanche' && (
        <img className={styles.img} src={avalanche} alt="avalanche" />
      )}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
