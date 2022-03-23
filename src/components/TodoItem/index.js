import './index.css'

const TodoItem = props => {
  const {eachTodoDetails, onDeleteTodo} = props
  const {title, id} = eachTodoDetails
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="list-container">
      <div>
        <p className="description">{title}</p>
      </div>

      <div>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
