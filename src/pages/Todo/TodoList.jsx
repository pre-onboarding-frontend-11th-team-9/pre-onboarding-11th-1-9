import TodoItem from './TodoItem';

const TodoList = ({ todo, ...handlers }) => {
  return (
    <ul>
      {todo.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} {...handlers} />
      ))}
    </ul>
  );
};

export default TodoList;
