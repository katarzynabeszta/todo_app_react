import { useState } from 'react';
import styles from './App.module.scss';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/Todoitem';
import { getSubheading } from './components/utils/getSubheading';

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, setTodos] = useState([
    { name: 'Read a book', done: false, id: 1 },
    { name: 'Go shopping', done: false, id: 2 },
    { name: 'Feed the fish', done: false, id: 3 },
  ]);

  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      {
        name: newTodoName,
        done: false,
        id: crypto.randomUUID(),
      },
      ...prevTodos,
    ]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function completeItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          done: true,
        };
      })
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>To do list</h1>
          <h2>{getSubheading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ name, done, id }) => (
          <TodoItem
            name={name}
            done={done}
            key={id}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => completeItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
