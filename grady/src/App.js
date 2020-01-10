import React from 'react';
import TodoItem from "./Components/TodoItem"
import todosData from "./Components/todosData"
import './App.css';

function App() {
  const todoItems = todosData.map (item => <TodoItem key={item.id} item={item} />)
  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
