import React, { ReactComponentElement } from 'react';
import styles from '../styles/Card.module.css';

interface CardProps {
  color?: string;
  children?: JSX.Element;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.color ?? '#fff' }}
    >
      {props.children}
    </div>
  );
};

export default Card;
