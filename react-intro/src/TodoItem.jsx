function TodoItem ({ todo }) {
    return (
        <li>
            <span>V</span>
            <p>{todo.todo}</p>
            <span>X</span>
        </li>
    )
}

export default TodoItem