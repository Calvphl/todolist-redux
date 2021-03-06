import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 12878127873
  }, {
    item: 'todo2',
    done: true,
    id: 87878734223
  }
]

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {
            todoList.map(item => (
              <TodoItem name={item.item} done={item.done} id={item.id} />
            ))
          }
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
