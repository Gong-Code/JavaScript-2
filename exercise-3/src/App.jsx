import { TodoList } from "./assets/components/TodoList"
import { AddTodoForm } from "./assets/components/AddTodoForm"
import { useState } from "react";


function App() {
  return (
    <>
      <AddTodoForm />
      <div className="container">
        <TodoList />
      </div>
    </>
    
  )
}

export default App
