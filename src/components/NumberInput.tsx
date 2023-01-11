import React, { useState } from 'react';
import styles from '../styles/NumberInput.module.css';

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

const NumberInput = (props: NumberInputProps) => {
  const [num, setNum] = useState(0);

  const increment = () => {
    props.onChange(props.value + 1);
  };

  const decrement = () => {
    props.onChange(props.value - 1);
  };

  return (
    <div className={styles.container}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.number}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={increment}>
          +
        </button>
        <button className={styles.button} onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default NumberInput;
