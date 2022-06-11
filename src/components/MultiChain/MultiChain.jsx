import React from 'react';
import { ChainItem } from '../ChainItem';
import { Slider } from '../Slider';

import styles from './MultiChain.module.scss';

export const MultiChain = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>Multi-Chain</h2>
          <p className={styles.text}>
            Multi-Chain means multiple opportunities for yield across many
            different blockchains. The CryptoLink brings our users the best
            possible yield diversification by supporting more than just one
            blockchain.
          </p>
          <ul className={styles.list}>
            <ChainItem text="Terra" type="terra" />
            <ChainItem text="Solana" type="solana" />
            <ChainItem text="MoonRiver" type="moon" />
            <ChainItem text="Avalanche" type="avalanche" />
          </ul>
          <Slider />
        </div>
      </div>
    </section>
  );
};
