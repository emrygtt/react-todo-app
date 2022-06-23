import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'

const Item = ({
  el,
}) => {

  const { destroyTodo, toggleTodo } = useTodo()

  const onChange = (id) => toggleTodo(id);

  const onDestroy = (id) => destroyTodo(id)

  return (
    <li key={el?.id} className={el?.completed ? "completed" : ""}>
      <div className="view">
        <input 
        className="toggle" 
        type="checkbox" 
        checked={el?.completed} 
        onChange={() => onChange(el?.id)}
        />
        <label>{el?.text}</label>
        <button className="destroy" onClick={() => onDestroy(el?.id)}></button>
      </div>
    </li>
  )
}

export default Item