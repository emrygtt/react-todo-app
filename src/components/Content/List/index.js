import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'
import Item from './Item';


let filtered = null;

const List = () => {
  const {
    todos,
    filter
  } = useTodo();

  filtered = todos;

  if(filter !== 'all') {
    filtered = todos.filter((el) => 
    filter === 'active' 
      ? el.completed === false  
      : el.completed === true 
    )
  }

  console.log(todos)

  return (
    <ul className="todo-list">
      {filtered?.map((el) => {
        return (
          <Item key={el?.id} el={el}/>
        )
      })}
  </ul>
  )
}

export default List