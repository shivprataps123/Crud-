import DisplayTodo from "./Components/DisplayTodo";
import Todo from "./Components/Todo";
import "./css/main.css";


function App() {
  return (
    <div className="App">
      <h1>My Todo</h1>
      <Todo />
      <DisplayTodo />
    </div>
  );
}

export default App;