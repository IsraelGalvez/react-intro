import './css/TodoContainer.css'

function TodoContainer({ children }) {
    return (
        <ul className='ul-container'>
            {children}
        </ul>
    )
}

export default TodoContainer