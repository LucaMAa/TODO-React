import React, {useState} from 'react';
import './App.css'

const Todo = (props) => {
  return (
    <div style={{textDecoration: props.todo.completed ? 'line-through': ''}} className="todo">
      {props.todo.name}
      <div>
        <button onClick={()=>props.completedTodo(props.index)}>Completed</button>
      </div>
    </div>
  )
}


const TODO = (props) => {
 const [value,setValue] = useState();

  const handleSubmit = (e) => 
  {
    e.preventDefault();
    if(value.trim() === "")
    {
      alert("Scrivi qualcosa nello spazio")
      return
    }
    props.submit(value)
    setValue('')
  }


  const onChangeText = (e) => {
   setValue(e.target.value)
  }
 

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value ={value}placeholder="Aggiungi un todo" onChange={onChangeText} />
      </form>
    )
  
}


const App = () => {
   
  
  const [todos, setTodos] = useState( [
      { name: "Learn React", completed: false,important:false },
      { name: "Learn Python", completed: false,important:false },
      { name: "Learn C", completed: false,important:false },

    ]
 );
 

  const addToDo = (todo) =>
  {
    const newTodos = [...todos, {name:todo}]
    setTodos(newTodos)
  }
  const completedTodo = (index) =>{
   const newTodos = [...todos];
     newTodos[index].completed= true;
    setTodos(newTodos)
  }

 


    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((item, index) => (
            <Todo key={index} todo={item} index={index} completedTodo={completedTodo}></Todo>

          ))}
          <TODO submit={addToDo} />
        </div>
      </div>

    )
  }

export default App;
