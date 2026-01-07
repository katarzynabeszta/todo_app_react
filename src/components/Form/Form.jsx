import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Form.module.scss';
import stylesButton from '../Button/Button.module.scss';

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        onFormSubmit(inputValue);
        setInputValue('');
      }}
      className={styles.form}
    >
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        className={`${stylesButton.buttonBase} ${stylesButton.buttonAdd}`}
      >
        Add
      </Button>
    </form>
  );
}
