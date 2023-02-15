// import React from 'react'

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    // const displayReminder; 
    let displayReminder;
    let setTaskCSS;

    if (task.reminder.toString() == 'true'){
       displayReminder = "Reminder is On.";
       setTaskCSS = 'task reminder';
    }else{
        displayReminder = "Reminder is Off.";
        setTaskCSS = 'task'; 
    }
     

  return (
    //See (59:05) for onDoubleClick{}
    // <div className='task' onDoubleClick={() => onToggle(task.id)}>
//See (1:02:08) to add ternary operator on parent div classname, if task.remidner true/false
    // <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    // <div className={`${setTaskCSS}`} onDoubleClick={() => onToggle(task.id)}>
    <div className={setTaskCSS} onDoubleClick={() => onToggle(task.id)}>
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