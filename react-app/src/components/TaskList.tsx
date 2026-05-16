import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { TaskItem } from './TaskItem';

export const TaskList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="flex flex-col gap-2">
      {todos.map(todo => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
      {todos.length === 0 && <p className="text-gray-500">No tasks yet.</p>}
    </div>
  );
};
