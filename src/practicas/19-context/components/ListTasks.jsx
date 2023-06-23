import {useContext} from 'react'
import {ListContext} from '../contexts/ListTaskContext'
import Task from './Task'
import TaskList from '../UI/TaskList'

function ListTasks() {
  const contextTasks = useContext(ListContext)

  return (
    <>
      <h2>Lista de tareas</h2>
      <TaskList>
        {contextTasks.tasks
          .filter(task => task.complete === false)
          .map(task => (
            <Task key={task.id} task={task} />
          ))}
      </TaskList>
      <h2>Completas</h2>
      <TaskList>
        {contextTasks.tasks
          .filter(task => task.complete)
          .map(task => (
            <Task key={task.id} task={task} />
          ))}
      </TaskList>
    </>
  )
}
export default ListTasks
