import DisplayTodo from "./Components/DisplayTodo";
import Todo from "./Components/Todo";
import "./css/main.css";


function App() {
  return (
    <div className="App">
      {/* <img style={{marginLeft:"230px",borderRadius:"60%"}} width="20%" src="https://lh3.googleusercontent.com/a/AEdFTp6-2XxSL_K_lXH9NyLZF_WdVPbRmn532wr22bzQ=s288-p-rw-no"/> */}
      <h1>Todo By Shiv</h1>
      <Todo />
      <DisplayTodo />
    </div>
  );
}

export default App;