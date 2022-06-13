import React from 'react';
import { ApplicationListItem } from '../ApplicationListItem/ApplicationListItem';
import styles from './ApplicationList.module.scss';

const data = [
  {
    title: 'Download The CryptoLink',
    text: ' Get started with the CryptoLink on your IOS or android mobile  device.',
  },
  {
    title: 'Create Your CryptoLink Account',
    text: ' Choose your username, password and confirm your email address to register.',
  },
  {
    title: 'Easily Begin Earning Passive Income',
    text: ' Pick a yield strategy, Track your investments with the dashboard then sit back relax and watch your CryptoLink portfolio grow.',
  },
];

export const ApplicationList = () => {
  return (
    <ul className={styles.list}>
      {data.map((item, index) => (
        <ApplicationListItem
          key={item.title}
          title={item.title}
          text={item.text}
          index={index}
        />
      ))}
    </ul>
  );
};
