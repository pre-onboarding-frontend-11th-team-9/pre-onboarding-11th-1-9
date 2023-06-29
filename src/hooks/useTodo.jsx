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

    const newTodo = await createTodo(form);

    if (newTodo) setTodo([...todo, newTodo]);
  };

  const handleUpdateTodoSubmit = async (id, updateTodoData) => {
    const updatedTodo = await updateTodo(id, updateTodoData);

    setTodo(
      todo.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, ...updatedTodo } : todoItem,
      ),
    );
  };

  const handleDeleteTodoClick = async (id) => {
    await deleteTodo(id);

    setTodo(todo.filter((todoItem) => todoItem.id !== id));
  };

  useEffect(() => {
    (async () => {
      const todo = (await getTodo()) ?? [];

      setTodo(todo);
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
