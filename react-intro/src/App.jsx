import { useState } from 'react'
import './App.css'
import Title from './Title'
import Search from './Search'
import TodoContainer from './TodoContainer'
import TodoItem from './TodoItem'

const arrayTodos = [
  {todo: 'Llorar con la llorona', completed: true},
  {todo: 'Hola mundo', completed: false},
  {todo: 'Cortar cebolla', completed: true},
  {todo: 'Hacer la cena', completed: false},
]

function App() {
  let countCompletedTodos = arrayTodos.filter(todo => todo.completed).length
  return (
    <>
      <Title completed={countCompletedTodos} todos={arrayTodos.length}/>
      <Search />
      <TodoContainer>
            {arrayTodos.map(todo => (
                <TodoItem todo={todo}/>
            ))}
      </TodoContainer>
    </>
  );
}

export default App
