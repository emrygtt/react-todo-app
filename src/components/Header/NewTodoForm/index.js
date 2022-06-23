import { Form, Field, Formik } from 'formik'
import React from 'react'
import validationSchema from './validations'
import { useTodo } from '../../../contexts/TodoContext'

const NewTodoForm = () => {

  const { addTodo } = useTodo()

  return (
    <Formik
    initialValues={{
      text: ""
    }}
    onSubmit={(values, bag) => {
      addTodo(values.text)
      bag.resetForm()
    }}
    validationSchema={validationSchema}
    >
      <Form>
        <Field
          className='new-todo'
          placeholder=' What need to be done ?'
          autoFocus
          id='text'
          name='text'
        />
      </Form>
    </Formik>
  )
}

export default NewTodoForm