// import React from 'react'

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {

    // const displayReminder; 
    let displayReminder;

    if (task.reminder.toString() == 'true'){
       displayReminder = "Reminder is On.";
    }else{
        displayReminder = "Reminder is Off.";
    }
     
  return (
    <div className='task'>
        <h3>{task.text} ({task.id})  
            <FaTimes style={{ color: 'red', cursor: 'pointer' }}
              //  onClick={onDelete} See (54:30)
              onClick={() => onDelete(task.id)}
            />
        </h3>
        <p>{task.day}</p>
        <p>{task.reminder.toString()}</p>
        <p>{displayReminder}</p>
        <p style={{display:'none'}}>{task.id}</p>
        
    </div>
  )
}

export default Task