import Addtodo from "./component/AddTodo";
import AppName from "./component/AppName";
import Addtodo1 from "./component/todoitem1";
import TodoItems from "./component/todoitems"
import "./style.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "11/03/24",
    },
    {
      name: "Office",
      dueDate: "11/03/24",
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <Addtodo></Addtodo>
    <Addtodo1></Addtodo1>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
