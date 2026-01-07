import { Button } from '../Button/Button';
import styles from './TodoItem.module.scss';
import stylesButton from '../Button/Button.module.scss';

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ''}`}>
        {name}
      </span>
      {!done && (
        <Button
          onClick={onDoneButtonClick}
          className={`${stylesButton.buttonBase} ${stylesButton.buttonDone}`}
        >
          Done
        </Button>
      )}
      <Button
        onClick={onDeleteButtonClick}
        className={`${stylesButton.buttonBase} ${stylesButton.buttonDelete}`}
      >
        Delete
      </Button>
    </li>
  );
}
