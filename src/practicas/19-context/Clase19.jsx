import {useContext} from 'react'
import CreateTaskForm from './components/CreateTask'
import ListTasks from './components/ListTasks'
import {ListContext, ListTaskProvider} from './contexts/ListTaskContext'

const Clase19 = () => {
  return (
    <ListTaskProvider>
      <CreateTaskForm />
      <ListTasks />
    </ListTaskProvider>
  )
}

export default Clase19
