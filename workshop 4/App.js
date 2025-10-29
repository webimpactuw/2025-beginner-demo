import React from "react";
import ToDo from "./ToDo";
import Navbar from "./Navbar";
import './App.css';

function App() {
  const todos = ["Clean bathroom", "Finish CSE HW", "Cook a meal for roommate", "Walk the dog"];

  return (
    <div className="App">
      <Navbar/>
      <ul>
        {todos.map(todo => <ToDo text={todo} />)}
      </ul>
    </div>
  );
}

export default App;