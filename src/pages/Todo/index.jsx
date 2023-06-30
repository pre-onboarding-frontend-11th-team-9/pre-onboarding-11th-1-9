import { useForm } from '../../hooks/useForm';
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

  const { handleSignOutSubmit } = useForm();

  return (
    <div className="card">
      <h2>
        할 일 목록
        <button onClick={handleSignOutSubmit} className="btn">
          로그아웃
        </button>
      </h2>
      <TodoInput handleCreateTodoSubmit={handleCreateTodoSubmit} />
      <TodoList {...{ todo, handleUpdateTodoSubmit, handleDeleteTodoClick }} />
    </div>
  );
};

export default TodoPage;
