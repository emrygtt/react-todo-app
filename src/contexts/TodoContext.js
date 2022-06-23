import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'


const TodoContext = createContext()

export const TodoContextProvider = ({children}) => {
  const [filter, setFilter] =useState("all")
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TODO 1 ",
      completed: true,
    }
  ])


  const addTodo = (text) => setTodos(prev => [...prev, {id: uuidv4(), text: text, completed: false }])

  const toggleTodo = (id) => {
    const tempTodos = [...todos];
    const itemIndex = tempTodos.findIndex((todo) => todo.id === id);
    const item      = todos[itemIndex]
    item.completed  = !item.completed;
    setTodos(tempTodos)
  }
  const destroyTodo = (id) => {
    const tempTodos = [...todos];
    const itemIndex = tempTodos.findIndex((it) => it?.id === id )
    tempTodos.splice(itemIndex, 1);
    setTodos(tempTodos)
  }
  

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    destroyTodo,
    filter,
    setFilter
  }
  return (
    <TodoContext.Provider value={values}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TodoContext)

  if (context === undefined) {
    throw new Error("useTodo mhook must be call inside TodoProvider component")
  }

  return context
}