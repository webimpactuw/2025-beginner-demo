// TODO: what do we import here?
import React, {useState, useEffect} from "react";
import ToDo from "./ToDo";
import './App.css';

function App() {
  // TODO: what state variables do we need to store?
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  // TODO: how do we fetch some pre-existing to-do items to load into our list on page load?
  useEffect(() => {
    const randomId = Math.floor(Math.random() * 30) + 1;

    fetch(`https://dummyjson.com/todos/${randomId}`)
    .then(response => response.json())
    .then(data => {
      setTodos([data.todo]);
    }
  );
  }, []);

  // TODO: what methods do we need to run?
  // update state methods
  const updateInput = (e) => {
    setInput(e.target.value);
  }

  const addTodo = () => {
    if (input !== "") {
      const updatedTodo = [...todos, input];
      setTodos(updatedTodo);
      setInput("");
    }
  }

  return (
    <>
      {/* TODO: what do we need to output? */}
      <div className="App">
       <label htmlFor='newTodo'>Enter ToDo: </label>
       <input type="text" id='newTodo' value={input} onChange={updateInput}></input>

       <button onClick={addTodo}>Enter</button>
       <h3>My Current Todos:</h3>

       <ul>
         {todos.map((todo, index) => <ToDo text={todo} />)}
       </ul>
     </div>
    </>
  );
}

export default App;
