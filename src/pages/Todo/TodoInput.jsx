import { TEST_ID } from '../../constants/testId';

const TodoInput = ({ handleCreateTodoSubmit }) => {
  return (
    <form onSubmit={handleCreateTodoSubmit}>
      <input
        data-testid={TEST_ID.NEW_TODO_INPUT}
        name="newTodo"
        placeholder="할일을 추가해보세요"
      />
      <button data-testid={TEST_ID.NEW_TODO_ADD_BUTTON} type="submit">
        추가
      </button>
    </form>
  );
};
export default TodoInput;
