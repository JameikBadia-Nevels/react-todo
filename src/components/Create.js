import { useNavigate } from "react-router-dom"
import { createTodo } from "../services/todos-api"

export default function Create() {
const nav = useNavigate()
const createTheTodo = e => {
    const newTodo = {description: "peace", complete: false}
    createTodo(newTodo)
    nav('/')
}

return(
    <div>
        <form onSubmit={createTheTodo}>
            <span><label>Desc</label><input type= 'text' name='desc' /><input type='submit' /></span>
        </form>
    </div>
)
}