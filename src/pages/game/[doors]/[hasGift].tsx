import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Door from '../../../components/Door';
import { createDoors, updateDoors } from '../../../hooks/doors';
import styles from '../../../styles/Game.module.css';

const Game = () => {
  const router = useRouter();
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doorNumber = +router.query.doors;
    const doorWithGift = +router.query.hasGift;

    setDoors(createDoors(doorNumber, doorWithGift));
  }, [router?.query]);

  const renderDoors = () => {
    return doors.map((door) => (
      <Door
        key={door.doorNumber}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ));
  };

  return (
    <div className={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <Link href='/'>
        <button className={styles.button}>Reiniciar o Jogo</button>
      </Link>
    </div>
  );
};

export default Game;
