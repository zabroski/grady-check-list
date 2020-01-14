import React from 'react';
import TodoItem from "./Components/TodoItem"
import todosData from "./Components/todosData"
import './App.css';

class  App extends React.Component {

  state ={
    todos:todosData
  }
 

  handleChange = (id) => {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updateTodos
      }
    })

  }
  render(){
    const todoItems = this.state.todos.map (item => <TodoItem key={item.id} item={item}  
    handleChange={this.handleChange}/>)
    return (
      <div className="App">
        {todoItems}
      </div>
    );

  }
 

}

export default App;
