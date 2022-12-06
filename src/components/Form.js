import styles from "../style.module.css";
import { nanoid } from 'nanoid'

const Form = ({todo, setTodo, todoList, setTodoList})=>{
    const handleChange = (event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setTodoList([...todoList,{name : todo, id:nanoid()}]);
        setTodo("");
    }

    return (<div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input 
                value = {todo}
                onChange = {handleChange}
                className={styles.todoinput} 
                placeholder="Add Todo Item"
            ></input>
            <button className={styles.todobutton}>Add</button>
        </form>
    </div>)
}

export default Form;