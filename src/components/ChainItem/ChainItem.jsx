import React from 'react';
import styles from './ChainItem.module.scss';
import solana from '../../assets/images/solana.png';
import terra from '../../assets/images/terra.png';
import moon from '../../assets/images/moon.png';
import avalanche from '../../assets/images/avalanche.png';

export const ChainItem = ({ text, type }) => {
  return (
    <>
      <div className={styles.item}>
        {type === 'terra' && <img src={terra} alt="chain icon" />}
        {type === 'solana' && <img src={solana} alt="chain icon" />}
        {type === 'moon' && <img src={moon} alt="chain icon" />}
        {type === 'avalanche' && <img src={avalanche} alt="chain icon" />}
        <span>{text}</span>
      </div>
    </>
  );
};
