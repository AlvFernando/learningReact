import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList })=>{
    return(
        <div>
            {todoList.map((item)=>(
                <TodoItem key = {item.id} item={item} todoList={todoList} setTodoList={setTodoList}></TodoItem>
            ))}
        </div>
    );
}
export default TodoList;