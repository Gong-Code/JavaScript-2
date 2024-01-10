import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos')

    useEffect(() => {
        const getTodo = async () => {
            try {
                const res = await fetch(url);

                if(!res.ok) {
                    throw new Error('HTTP error! status:', res.status)
                }

                const data = await res.json();
                console.log(data);
    
                setTodos(data)

            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }
        
        getTodo()

        return () => {
            console.log('clean up')
        }
    }, [url])
    
    const toggleComplete = (todoId) => {
        const newTodo = todos.map(todo => {
            if(todo.id === todoId){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })

        setTodos(newTodo)
    }

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }

    return (
        <div className="todo--list">
            {
                todos && todos.map(todo => {
                    return <TodoItem todo={todo} toggleComplete={toggleComplete} key={todo.id} removeTodo={removeTodo} />
                })
            }
        </div>
    )
}
