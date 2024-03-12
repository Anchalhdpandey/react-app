import Addtodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Addtodo1 from "./component/todoitem1";
import "./style.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <Addtodo />
      <Addtodo1 />
    </center>
  );
}

export default App;
