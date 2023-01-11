import React from 'react';
import styles from '../styles/Gift.module.css';

const Gift = () => {
  return (
    <div>
      <div className={styles.gift}>
        <div className={styles.cover}></div>
        <div className={styles.body}></div>
        <div className={styles.tape1}></div>
        <div className={styles.tape2}></div>
      </div>
    </div>
  );
};

export default Gift;
