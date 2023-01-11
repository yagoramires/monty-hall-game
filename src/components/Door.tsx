import DoorModel from '../models/door';
import styles from '../styles/Door.module.css';

interface DoorProps {
  door: DoorModel;
}

const Door = (props: DoorProps) => {
  const { door } = props;

  console.log(door);

  return (
    <div className={styles.area}>
      <div
        className={`${styles.structure} ${door.selected && styles.selected}`}
      >
        <div className={styles.door}>
          <div className={styles.number}>{door.doorNumber}</div>
          <div className={styles.handle}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  );
};

export default Door;
