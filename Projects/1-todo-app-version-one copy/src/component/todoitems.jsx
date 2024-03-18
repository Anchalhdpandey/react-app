import TodoItem from "./todoitem";
const TodoItems=({todoItems})=>{
    return (
    <div className="items-container">
        {todoItems.map(item=><TodoItem todoDate={item.dueDate} todoNAME={item.name}></TodoItem>)}
    </div>
    )
}
export default TodoItems;