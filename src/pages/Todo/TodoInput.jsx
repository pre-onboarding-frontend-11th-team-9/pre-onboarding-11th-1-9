const TodoInput = ({ handleCreateTodoSubmit }) => {
  return (
    <form onSubmit={handleCreateTodoSubmit} className="form">
      <input
        type="text"
        data-testid="new-todo-input"
        name="newTodo"
        placeholder="할일을 추가해보세요"
      />
      <button
        data-testid="new-todo-add-button"
        type="submit"
        className="btn btn-primary full"
      >
        추가
      </button>
    </form>
  );
};
export default TodoInput;
