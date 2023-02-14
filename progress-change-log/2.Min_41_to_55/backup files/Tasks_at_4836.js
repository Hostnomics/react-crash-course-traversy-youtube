// import React from 'react'

//(43:33) IMPORT  useState for our Tasks
// import { useState } from 'react'  MOVED to App.js (45:38)

// const tasks = [
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Meeting in Conference Room',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Food Shopping',
//         day: 'Feb 5th at 6:30pm',
//         reminder: false,
//     }
// ]; 

import Task from './Task'
import App from './../App'

const Tasks = ({ tasks }) => {

// Create STATE for our Tasks at (43:23): https://youtu.be/w7ejDZ8SWv8?t=2603
    
// const [tasks, setTasks] = useState("");
// const [tasks, setTasks] = useState(
//     [
//         {
//             id: 1,
//             text: 'Doctors Appointment',
//             day: 'Feb 5th at 2:30pm',
//             reminder: true,
//         },
//         {
//             id: 2,
//             text: 'Meeting in Conference Room',
//             day: 'Feb 6th at 1:30pm',
//             reminder: true,
//         },
//         {
//             id: 3,
//             text: 'Food Shopping',
//             day: 'Feb 5th at 6:30pm',
//             reminder: false,
//         },
//     ]
// );

  return (
   // Empty fragment at (41:36)
   // can NOT do tasks.push() (44:31) b/c state is immutable. 
   //You have to recreate state and push it down.

//    setTasks([...tasks, {}]) spreader operator (44:48_)

    <>
        {/* JSX STARTS INSIDE FIRST PARENT TAG */}
            {/* {tasks.map()}
            {tasks.map(() => ())} */}
            {tasks.map((task) => (
                {/* <h3 key={task.id}>{task.text} - {task.id}</h3> */}
                    <Task key={task.id} task={task} />
            ))}
    </> 
  )
}

export default Tasks

