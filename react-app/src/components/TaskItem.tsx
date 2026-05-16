import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, editTodo } from '../store';
import type { Todo } from '../store';

interface TaskItemProps {
  todo: Todo;
}

export const TaskItem: React.FC<TaskItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border px-1"
          />
        ) : (
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.text}
          </span>
        )}
      </div>
      <div>
        <button onClick={handleEdit} className="text-blue-500 mr-2">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};
