import { useEffect, useState } from 'react';
import todoService from '../../services/todo';
import storage from '../../utils/storage';
import { useNavigate } from 'react-router-dom/dist';

const TodoPage = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await todoService.getTodo();
    if (todos) {
      setTodos(todos);
    }
  };

  const handleSignOut = () => {
    storage.removeToken();
    navigate('/signin', { replace: true });
  };

  if (!todos.length) {
    return <div>empty</div>;
  }

  if (todos.length > 0) {
    return (
      <>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.todo}</div>
        ))}
        <button onClick={() => handleSignOut()}>로그아웃</button>
      </>
    );
  }
};

export default TodoPage;
