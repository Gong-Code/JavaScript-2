
export const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div className={`todo--item ${todo.completed && 'completed'}`} onClick={() => toggleComplete(todo.id)}>
            <p>{todo.id}</p>
            <h2>{todo.title}</h2>
            <button className="remove--btn" onClick={(e) => {
                e.stopPropagation()
                removeTodo(todo.id)
            }}>REMOVE</button>
        </div>
    )
}
