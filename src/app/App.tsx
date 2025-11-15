import styles from './App.module.scss';
import { TodoList } from '../pages/TodoList/TodoList';

const App = () => {
  return (
    <div className={styles.container}>
      <TodoList />
    </div>
  );
};

export default App;
