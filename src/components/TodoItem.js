import styles from "../style.module.css";

const TodoItem = ({ item,todoList,setTodoList })=>{
    const handleClick = () =>{
        setTodoList(todoList.filter((todoitem)=> todoitem.id !== item.id));
    }
    return (
        <div>
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{item.name}</h3>
                <button onClick={handleClick} className={styles.deletebutton}>Done</button>
            </div>
        </div>
    );
}

export default TodoItem;