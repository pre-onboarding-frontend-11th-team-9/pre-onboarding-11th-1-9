const TodoInput = ({ handleCreateTodoSubmit }) => {
  return (
    <form onSubmit={handleCreateTodoSubmit}>
      <input
        data-testid="new-todo-input"
        name="newTodo"
        placeholder="할일을 추가해보세요"
      />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
};
export default TodoInput;
