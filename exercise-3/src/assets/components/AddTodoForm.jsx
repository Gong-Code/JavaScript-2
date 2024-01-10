import React, { useState } from 'react'

export const AddTodoForm = () => {

    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form submitted")
        const newTodo = {
            title,
            completed: false,
        };
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                body: JSON.stringify(newTodo),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const todo = await response.json();
            console.log(todo);

            setTodos(todo)

        } catch (error) {
            console.error('Fetch failed:', error);
        }
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className='add--form'>
            <div className='form--group'>
                <input className='form--control' type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <button type='submit' className='form--btn'>Add</button>
            </div>
        </form>
    )
}
