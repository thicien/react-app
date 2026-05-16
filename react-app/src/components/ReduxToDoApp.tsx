import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';

export const ReduxTodoApp: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Redux ToDo App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default ReduxTodoApp;