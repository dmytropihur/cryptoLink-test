import React from 'react';
import styles from './ApplicationListItem.module.scss';

export const ApplicationListItem = ({ title, text, index }) => {
  return (
    <li className={styles.item}>
      <div className={styles.itemNum}>{index + 1}</div>
      <div className={styles.itemInfo}>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemText}>{text}</p>
      </div>
    </li>
  );
};
