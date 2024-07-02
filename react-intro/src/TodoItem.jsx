import './css/TodoItem.css'
import greenImage from './assets/green-deacuerdo-50.png';
import whiteImage from './assets/white-deacuerdo-50.png';

function TodoItem ({ text, completed }) {
    return (
        <li className='list-item'>
            <span>
                <img className='check-item-img' src={completed ? greenImage:whiteImage} alt="a" />
            </span>
            <p>{text}</p>
            <span>X</span>
        </li>
    )
}

export default TodoItem