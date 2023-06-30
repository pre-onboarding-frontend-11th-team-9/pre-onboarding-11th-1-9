import useTodo from '../../hooks/useTodo';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoPage = () => {
  const {
    todo,
    handleCreateTodoSubmit,
    handleUpdateTodoSubmit,
    handleDeleteTodoClick,
  } = useTodo();

  return (
    <div className="card">
      <h2>할 일 목록</h2>
      <TodoInput handleCreateTodoSubmit={handleCreateTodoSubmit} />
      <TodoList {...{ todo, handleUpdateTodoSubmit, handleDeleteTodoClick }} />
    </div>
  );
};

export default TodoPage;
