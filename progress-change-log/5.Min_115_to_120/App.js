// import logo from './logo.svg';
// import './App.css';


import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react' //added (45:38)
import AddTask from './components/AddTask' //added (1:05:28)


function App() {
//Added state to toggle task form on and off (1:15:12)
  const [showAddTask, setShowAddTask] = useState(false); 

  const [tasks, setTasks] = useState(
      [
          {
              id: 1,
              text: 'Doctors Appointment',
              day: 'Feb 5th at 2:30pm',
              reminder: true,
          },
          {
              id: 2,
              text: 'Meeting in Conference Room',
              day: 'Feb 6th at 1:30pm',
              reminder: true,
          },
          {
              id: 3,
              text: 'Food Shopping',
              day: 'Feb 5th at 6:30pm',
              reminder: false,
          },
      ]
  );


  //Delete Task (52:38): https://youtu.be/w7ejDZ8SWv8?t=3158
      const deleteTask = (id) => {
        // setTasks(tasks.filter( () => )); //filter takes an arrow function
        // setTasks(tasks.filter((task) => task.id != id));  //See (55:30): https://youtu.be/w7ejDZ8SWv8?t=3330
        // != single equal sign worked, but he used two, compare data type? check:
        setTasks(tasks.filter((task) => task.id !== id));
      }

  //Toggle Reminder (57:40): 
      const toggleReminder = (id) => {
        // console.log(id); 
        // See 1:01:20
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)   
        )         
      }

//TTH solution for unique id: https://tinyurl.com/tth-handleAddPlayer
      const currentTaskNum = tasks.length + 1; 
      const [nextTaskId, setNextTaskId] = useState(currentTaskNum); 

//Add Task Function (1:09:10)
const addTask = (task) => {
  // console.log(task); 
  // (1:13:16) - solution for auto generate unique id, his solution just generates random number..
      // const id = Math.floor(Math.random() * 10000) + 1; 
    const id = nextTaskId; 
    console.log(id);
    setNextTaskId(prevId => prevId + 1); 
  //(1:13:55) - newTask with seperator operator
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
}

  return ( 
    <div className="container">
        <Header 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}

        />
        {/* <AddTask onAdd={addTask} tasks={tasks} /> */}
        {/* Added (1:15:22). (Also don't need to pass entire tasks object to AddTask.js) */}
        {showAddTask && <AddTask onAdd={addTask} />}

      <code>My Tasks:</code>
        {/* <Tasks tasks={tasks} onDelete={ deleteTask } /> */}
        {/* Wrap Tasks component in {} and check length */}
        { tasks.length > 0 ? 
          <Tasks 
            tasks={tasks} 
            onDelete={ deleteTask } 
            onToggle={ toggleReminder }
            /> : <p style={{color:'red'}}>No Tasks To Display.</p> }
       

    </div>    
  );
}

export default App; 
