import TodoCard from "./TodoCard";

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} index={todoIndex} {...props}>
            <p className="todo-list__item__text">{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
