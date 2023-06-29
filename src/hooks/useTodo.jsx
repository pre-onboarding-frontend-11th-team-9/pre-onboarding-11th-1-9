import { useEffect, useState } from 'react';
import todoService from '../services/todo';

const { getTodo, createTodo, updateTodo, deleteTodo } = todoService;

const useTodo = () => {
  const [todo, setTodo] = useState([]);

  const handleCreateTodoSubmit = async (e) => {
    e.preventDefault();

    const form = {
      todo: e.currentTarget.newTodo.value.trim(),
    };
    e.currentTarget.newTodo.value = '';

    try {
      const newTodo = await createTodo(form);

      setTodo([...todo, newTodo]);
    } catch (err) {
      console.error(err);
      alert('Todo 생성 실패했습니다.');
    }
  };

  const handleUpdateTodoSubmit = async (id, updateTodoData) => {
    try {
      const updatedTodo = await updateTodo(id, updateTodoData);

      setTodo(
        todo.map((todoItem) =>
          todoItem.id === id ? { ...todoItem, ...updatedTodo } : todoItem,
        ),
      );
    } catch (err) {
      console.error(err);
      alert('Todo 수정 실패했습니다.');
    }
  };

  const handleDeleteTodoClick = async (id) => {
    try {
      await deleteTodo(id);

      setTodo(todo.filter((todoItem) => todoItem.id !== id));
    } catch (err) {
      console.error('Todo 삭제 실패했습니다.');
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const todo = (await getTodo()) ?? [];

        setTodo(todo);
      } catch (err) {
        console.error(err);
        alert('Todo 목록을 가져오는 것을 실패했습니다.');
      }
    })();
  }, [setTodo]);

  return {
    todo,
    handleCreateTodoSubmit,
    handleUpdateTodoSubmit,
    handleDeleteTodoClick,
  };
};

export default useTodo;
