import "./App.css";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
