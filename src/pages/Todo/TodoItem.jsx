import { useState } from 'react';
import { TEST_ID } from '../../constants/testId';

const TodoItem = ({
  todoItem: { id, todo, isCompleted },
  handleUpdateTodoSubmit,
  handleDeleteTodoClick,
}) => {
  const [content, setContent] = useState(todo);
  const [isEdited, setEdited] = useState(false);

  const handleModifyTodo = (e) => setContent(e.target.value.trim());

  const handleToggleEdit = () => {
    setEdited(!isEdited);
    setContent(todo);
  };

  const handleUpdateContentTodo = async () => {
    await handleUpdateTodoSubmit(id, { todo: content, isCompleted });
    handleToggleEdit();
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() =>
            handleUpdateTodoSubmit(id, {
              todo: content,
              isCompleted: !isCompleted,
            })
          }
        />
        {isEdited ? (
          <input
            data-testid={TEST_ID.MODIFY_INPUT}
            value={content}
            onChange={handleModifyTodo}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      <button
        data-testid={isEdited ? TEST_ID.SUBMIT_BUTTON : TEST_ID.MODIFY_BUTTON}
        onClick={isEdited ? handleUpdateContentTodo : handleToggleEdit}
      >
        {isEdited ? '제출' : '수정'}
      </button>
      <button
        data-testid={isEdited ? TEST_ID.CANCEL_BUTTON : TEST_ID.DELETE_BUTTON}
        onClick={isEdited ? handleToggleEdit : () => handleDeleteTodoClick(id)}
      >
        {isEdited ? '취소' : '삭제'}
      </button>
    </li>
  );
};

export default TodoItem;
