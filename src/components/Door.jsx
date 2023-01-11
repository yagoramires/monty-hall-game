import React from 'react';
import styles from '../styles/Door.module.css';

const Door = (props) => {
  return (
    <div className={styles.area}>
      <div
        className={`${styles.structure} ${props.selected && styles.selected}`}
      >
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
