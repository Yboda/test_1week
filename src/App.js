import { useState } from "react";
import "./App.css";

function App() {
  let [todos, setTodos] = useState(["react를 배워봅시다"]);
  let [input, setInput] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let todosCopy = [...todos];
          todosCopy.push(input);
          setTodos(todosCopy);
          console.log(todos);
        }}
      >
        추가하기
      </button>
      <h1>Todo List</h1>
      <div className="wrap">
        {todos.map((todo) => (
          <div className="todo">{todo}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
