import {useContext} from 'react'
import {ListContext} from '../contexts/ListTaskContext'
import TaskItem from '../UI/TaskItem'

function Task({task}) {
  const contextTasks = useContext(ListContext)

  function handleDelete(id) {
    contextTasks.deleteTask(id)
  }

  function handleComplete(id) {
    contextTasks.completeTask(id)
  }

  return (
    <TaskItem key={task.id}>
      <p>{task.description}</p>
      <section>
        {!task.complete && (
          <button onClick={() => handleComplete(task.id)}>
            <i className="fa-solid fa-check"></i>
          </button>
        )}
        <button onClick={() => handleDelete(task.id)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </section>
    </TaskItem>
  )
}

export default Task
