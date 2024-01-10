import { TodoList } from "./assets/components/TodoList"
import { AddTodoForm } from "./assets/components/AddTodoForm"
import { useState } from "react";


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <AddTodoForm setTodos={setTodos}/>
      <div className="container">
        <TodoList />
      </div>
    </>
    
  )
}

export default App
