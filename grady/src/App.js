import React from 'react';
import TodoItem from "./Components/TodoItem"
import todosData from "./Components/todosData"
import './App.css';

class  App extends React.Component {
  constructor() {
    super()
    this.state ={
      todos:todosData
    }
  }
  render(){
    const todoItems = this.state.todos.map (item => <TodoItem key={item.id} item={item} />)
    return (
      <div className="App">
        {todoItems}
      </div>
    );

  }
 

}

export default App;
