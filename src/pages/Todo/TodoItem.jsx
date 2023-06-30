import { useState } from 'react';
import styles from './TodoItem.module.scss';

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
    <li className={styles.todo_item}>
      <label>
        {isEdited ? (
          <input
            type="text"
            data-testid="modify-input"
            value={content}
            onChange={handleModifyTodo}
          />
        ) : (
          <>
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
            <span>{todo}</span>
          </>
        )}
      </label>
      <button
        data-testid={isEdited ? 'submit-button' : 'modify-button'}
        onClick={isEdited ? handleUpdateContentTodo : handleToggleEdit}
        className="btn btn-primary "
      >
        {isEdited ? '제출' : '수정'}
      </button>
      <button
        data-testid={isEdited ? 'cancel-button' : 'delete-button'}
        onClick={isEdited ? handleToggleEdit : () => handleDeleteTodoClick(id)}
        className="btn"
      >
        {isEdited ? '취소' : '삭제'}
      </button>
    </li>
  );
};

export default TodoItem;
