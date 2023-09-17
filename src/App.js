import Header from "./components/todos/Header";
import TodoList from "./views/TodoList";
import "./assets/css/index.css";
import { useState } from "react";

function App() {
  const [length, setlength] = useState(null);

  const togglelength = (len) => {
    setlength(len);
  };
  return (
    <div className="app">
      <Header length={length} />
      <TodoList togglelength={togglelength} />
    </div>
  );
}

export default App;
