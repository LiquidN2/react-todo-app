import React from 'react';
// import logo from './logo.svg';
// import './App.scss';

import FormTodo from './components/FormTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <h1>
        <i className="fas fa-list" /> To-Do App
      </h1>
      <p className="lead ma-top-md">
        A simple To-do application built with <code>React</code> and{' '}
        <code>Redux</code>. Data is persisted to <code>localStorage</code>.
      </p>
      <FormTodo />

      <TodoList />
    </div>
  );
};

export default App;
