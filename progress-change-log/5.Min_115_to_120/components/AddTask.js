// import React from 'react'
import { useState } from 'react' //added (1:06:31)

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

//Add onSubmit function (1:10:28)
    const onSubmit = (e) => {
        e.preventDefault(); 
        //text validation for empty field:
        if(!text){
            alert('Please add a Task.'); 
            return
        }

        onAdd({ text, day, reminder }); 

        //Clear the form after submit
        setText(''); 
        setDay('');
        setReminder(false); 
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            {/* <label htmlFor="">Task</label> */}
            <label>Task</label>
            <input 
                type="text" 
                placeholder='Add Task'
                value={text}
                onChange={(e) => setText(e.target.value)}
                // similar to: https://tinyurl.com/tth-AddPlayerForm
            />
        </div>

        <div className='form-control'>
            {/* <label htmlFor="">Task</label> */}
            <label>Day & Time</label>
                <input 
                    type="text" 
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}    
                />
        </div>

        <div className='form-control form-control-check'>
            {/* <label htmlFor="">Task</label> */}
            <label>Set Reminder</label>
                <input 
                    type="checkbox" 
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}    
                />
        </div>

        <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask