
import Task from './Task'
// import App from './../App'

const Tasks = ({ tasks, onDelete }) => {

  return (
    <>
        {tasks.map((task) => (
            //<h3 key={task.id}>{task.text} - {task.id}</h3>
                <Task key={task.id} task={task} onDelete={onDelete} />
        ))}
    </> 
  )
}

export default Tasks

