import { useState } from 'react'
import './App.css'
import Title from './Title'
import Search from './Search'
import TodoContainer from './TodoContainer'
import TodoItem from './TodoItem'

const arrayTodos = [
  {text: 'Llorar con la llorona', completed: true},
  {text: 'Hola mundo', completed: false},
  {text: 'Cortar cebolla', completed: false},
  {text: 'Hacer la cena', completed: true},
]

function App() {
  let countCompletedTodos = arrayTodos.filter(todo => todo.completed).length
  return (
    <>
      <Title completed={countCompletedTodos} todos={arrayTodos.length}/>
      <Search />
      <TodoContainer>
            {arrayTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
            ))}
      </TodoContainer>
    </>
  );
}

export default App
