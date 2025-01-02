export default function TodoCard({ children, handleDeleteTodo, handleEditTodo, index }) {
  return (
    <li className="todo-list__item">
      {children}
      <div className="actions-container">
        <button className="action-button" onClick={() => handleEditTodo(index)}><i className="fa-solid fa-pen-to-square"></i></button>
        <button className="action-button" onClick={() => handleDeleteTodo(index)}><i className="fa-solid fa-trash-can"></i></button>
      </div>
    </li>
  )
}
