
### Set up a New React App

At [14:30](https://youtu.be/w7ejDZ8SWv8?t=870). we run `npx create-react-app react-task-tracker`

Review [package.json at 14:55](https://youtu.be/w7ejDZ8SWv8?t=895). 

`react-dom` is responsible for rendering our react app out to the document model. 

[19:53](https://youtu.be/w7ejDZ8SWv8?t=1193). - JSX differences
- className
- htmlFor


At [20:20, Click on Language Type in bottom Right Corner of VS Code](https://youtu.be/w7ejDZ8SWv8?t=1219). and type JavaScript React and select it to get **emmet sort code snippets in our React App**. 


Remove Four Extra Files: 
1. App.css
2. App.test.js
3. logo.svg
4. setupTests.js


Copied files from `react-task-tracker` and moved them into `github-react-task-tracker` the same way we did with TTH. 

Then run: 
1. (A) cd into copied file (_here github-react-task-tracker/react-task-tracker_).
1. (B) run npm i to install dependencies.
2. run npm start to fire up the project.


**Ternary Operator in JSX**
```js
function App() {

  const chiefsQB = 'Mahomes';
  const chiefs = 2;
  
  const eaglesQB = 'Hurts'; 
  const eagles = 1; 

  const x = false; 

  return (
    <div className="container">
      <h1>Hello From React Github Folder</h1>
      {/* <h2>Hello { x ? 'Mahomes' : 'Hurts' } with {x ? chiefs : eagles} Super Bowl Wins</h2> */}
      <h2>Hello { x ? chiefsQB : eaglesQB } with {x ? chiefs : eagles} Super Bowl Wins</h2>
    </div>
    
  );
}

```

---

>In JSX return statement() you can only have one parent element (nest everything inside of it)
_If you need another parent element, probably a sign to create another Component_
![JSX error two parent elements](https://i.imgur.com/67Q6Tf2.png)

### Create Header.js Component (23:52)

[23:52](https://youtu.be/w7ejDZ8SWv8?t=1432). 


**Using ES7 React Snippets (24th min)**
Run `rafce + tab` and get: 
```js
//  import React from 'react'  // No longer needed? (25:25)
 
 const Header = () => {
   return (
     <div>Header</div>
   )
 }
 
 export default Header

```


**Only need** `import React from 'react'` when using a class
```js
import React from 'react'

class App extends React.Component {
  render(){
    return <h1>Hello From A Class</h1>
  }
}


export default App; 

```

---

### Props (27:30)

[27:30](https://youtu.be/w7ejDZ8SWv8?t=1645).

```js
//Set up where props should be displayed in Header.js
 const Header = (props) => {
   return (
     <header>
        <h1>{props.title}</h1>
     </header>
   )
 }
 
 export default Header

 //Set the props in parent component, here App.js
 import Header from './components/Header'

function App() {
  return ( 
    <div className="container">
      <Header 
        title="Hello from header prop in App.js"
      />
    </div>    
  );
}

export default App; 

```

---

### Set Fallback for Props via Component.defaultProps{}

```js
 const Header = (props) => {
   return (
     <header>
        <h1>{props.title}</h1>
     </header>
   )
 }
 
//(28:10) Set fall back props: 
Header.defaultProps = {
    title: 'Task Tracker'
}

```

If only using ONE prop, you can just identify it 
```js
 const Header = ({title}) => {
   return (
     <header>
        <h1>{title}</h1>
     </header>
   )
 }

```

**Set Data Type of Props**
_Just throws warnining in console_

```js
// impt + tab
import PropTypes from 'prop-types'

//(29:30) Set Prop DATA Type
Header.propTypes = {
    title: PropTypes.string,
}

```

---

## Index.css (32:50)

imported [from github](https://github.com/bradtraversy/react-crash-2021/blob/master/src/index.css). at [32:50](https://youtu.be/w7ejDZ8SWv8?t=1970).


---

### Button.js (34:43)

At [34:43](https://youtu.be/w7ejDZ8SWv8?t=2083). added `Button.js` to handle buttons on our site. 

In `Button.js` on `onClick`, console.log the click event: 
```js
//See (35:45)
const Button = ({color, text}) => {

//onClick added (38:11): https://youtu.be/w7ejDZ8SWv8?t=2291
    const onClick = (e) => {
        // console.log('logged from Button.js')
        console.log(e);
    }

  return (
    <button style={{ backgroundColor: color}} className='btn' onClick={onClick}>
        {text}
    </button> 
  )
}

```

**Console.log** the click event: 
![console log click event](https://i.imgur.com/8LVQNNY.png)

> Better to define onClick events in the Components using our Button Component. 


To use our `onClick()` function in Header.js, we have to add that as a prop in `Button.js`
```js
const Button = ({color, text, onClick}) => {

//onClick added (38:11): https://youtu.be/w7ejDZ8SWv8?t=2291
    // const onClick = (e) => {
    //     // console.log('logged from Button.js')
    //     console.log(e); 
    // }

  return (
    <button 
    style={{ backgroundColor: color}} 
    className='btn' 
    onClick={onClick}
    >
        {text}
    </button> 
  )
}

//Then in Header.js
const Header = ({title}) => {

    const onClick = () => {
        console.log('clicked from Header.js')
    }

   return (
     <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
     </header>
   )
 }

```


## Create Tasks.js Component (40:34)

1. create `components/Tasks.js`
2. run `rafce + tab` 
3. Set up array of predefined tasks so we can map through them
```js
const tasks = [
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
    }
];

```

At [41:18](https://youtu.be/w7ejDZ8SWv8?t=2478). we create a `list` with `.map()`


Make sure to know: 
1. foreach
2. map
3. filter


In `Tasks.js` we don't need a parent `<div>` so we'll use a empty brackets to trigger JSX. 
If you don't need any parent tag you can use an **empty fragment** which is `<>` and `</>`.

```js
const Tasks = () => {
  return (
    // 
    <div>
    {/*  */}
    </div> 
  )
}

//Called an empty `<>` and `</>
const Tasks = () => {
  return (
    // 
    <>
    {/*  */}
    </> 
  )
}

```

Then **map through our `tasks` array and print out the `tasks.text`**: 
```js
const Tasks = () => {
  return (
   // Empty fragment at (41:36)
   <>
    {/* {tasks.map()}
    {tasks.map(() => ())} */}
    {tasks.map((task) => (
        <h3>{task.text}</h3>
        ))}
   </> 
  )
}

```


### Unique Key Prop id

We get the warning message from the above; 
>react_devtools_backend.js:4012 Warning: Each child in a list should have a unique "key" prop.

To resolve this, [43:01](https://youtu.be/w7ejDZ8SWv8?t=2581). add a `key` prop to our display element `h3` and set it equal to our `task.id`

```js
const Tasks = () => {
  return (
   <>
    {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
        ))}
   </> 
  )
}


```

## Add State for our Tasks (43:35)

1. import useState at the top of `Tasks.js` with `import { useState } from 'react' `
2. create state in our `Tasks` function and map through it

```js
const Tasks = () => {
// Create STATE for our Tasks at (43:23): https://youtu.be/w7ejDZ8SWv8?t=2603
// const [tasks, setTasks] = useState("");
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

  return (
   // Empty fragment at (41:36)
   // can NOT do tasks.push() (44:31) b/c state is immutable. 
   //You have to recreate state and push it down.
//    setTasks([...tasks, {}]) spreader operator (44:48)
   <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text} - {task.id}</h3>
            ))}
   </> 
  )
}

```


At [45:05], we'll want another component for the tasks themselves. 
you could use something like the **Context API** or **Redux** to have a store that hovers over your UI and pull different peices of state from.

We will put it in our **GLOBAL STATE**  in `App.js` and then pass it down through **props**. 


## Create Task.js to handle individual Tasks

[47:04](https://youtu.be/w7ejDZ8SWv8?t=2824).

Updated `App.js` with _Task STATE_ and passing it to `Tasks.js` via props: 
```js

import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react' //added (45:38)


function App() {

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


  return ( 
    <div className="container">
      <Header />
    <code>My Tasks:</code>
      <Tasks tasks={tasks} />
    </div>    
  );
}

```

**AND THEN IN `Tasks.js`**: 
```js
import Task from './Task'
// import App from './../App'

const Tasks = ({ tasks }) => {

  return (
    <>
        {tasks.map((task) => (
            //COMMENTS IN HERE ARE NOT JSX!!
            //<h3 key={task.id}>{task.text} - {task.id}</h3>
                <Task key={task.id} task={task} />
        ))}
    </> 
  )
}

export default Tasks

```


**AND THEN IN `Task.js`**:
```js
//We are calling this TASK Component inside the map loop so prop is singular TASK
const Task = ({ task }) => {
  return (
    <div className='task'>
        <h3>{task.text} ({task.id})</h3>
        <p>{task.day}</p>
        <p>{task.reminder.toString()}</p>
        <p style={{display:'none'}}>{task.id}</p>
    </div>
  )
}

export default Task

```


## Install React Icons with npm i react-icons (49:50)

[49:56](https://youtu.be/w7ejDZ8SWv8?t=2996). Install React Icons
Run: 
```js
npm i react-icons
```

This ADDS `react-icons` to our **package.json**
```js
//addded "react-icons": "^4.7.1",
{
  "name": "react-task-tracker",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  ...

```


**THEN we can call the X icon with `<FaTimes />` just like a Component Tag**
```js
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className='task'>
        <h3>{task.text} ({task.id})  
            <FaTimes />
        </h3>
        <p>{task.day}</p>
        <p>{task.reminder.toString()}</p>
        <p style={{display:'none'}}>{task.id}</p>
    </div>
  )
}

```



## Delete A Task (52:29)

[Delete Task at (52:29)](https://youtu.be/w7ejDZ8SWv8?t=3149). 


**IN App.js**
1. Create the deleteTask function
2. Pass it to the `Tasks` Component via the **onDelete** prop
```js
  //Delete Task (52:38): https://youtu.be/w7ejDZ8SWv8?t=3158
      const deleteTask = (id) => {
        console.log('delete clicked', id); 
      }

  return ( 
    <div className="container">
      <Header />
    <code>My Tasks:</code>
      <Tasks tasks={tasks} onDelete={ deleteTask } />
    </div>    
  );

```

**IN Tasks.js**
1. Pass in `onDelete` as a prop parameter
2. Pass it to the `Task` Component via the **onDelete={onDelete}** prop
```js
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

```

**FINALLY, IN Task.js**
1. Pass in `onDelete` as a prop parameter
2. Add the `onDelete` prop to the **TARGET** element, which here is the `<FaTimes /> Component` and set it to **onDelete={onDelete}**
3. Thus, only the `App.js` component will _effectively process the onDelete = deleteTask_ functionality? 

```js
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
                onClick={onDelete}
            />
        </h3>
        <p>{task.day}</p>
        <p>{task.reminder.toString()}</p>
        <p>{displayReminder}</p>
        <p style={{display:'none'}}>{task.id}</p>
        
    </div>
  )
}

```

This returns the ENTIRE object. 

To get JUST the Task.id at [54:30](https://youtu.be/w7ejDZ8SWv8?t=3270). change the **onClick** function in **Task.js**
```js
    //  onClick={onDelete} See (54:30)
    onClick={() => onDelete(task.id)} //consoles 1, 2 or 3 etc.

```


**COMPLETE THE DELETE ACTION AT (55:30)**
```js
  //Delete Task (52:38): https://youtu.be/w7ejDZ8SWv8?t=3158
      const deleteTask = (id) => {
        // console.log('delete clicked', id); 
        // setTasks(tasks.filter( () => )); //filter takes an arrow function
        //See (55:30): https://youtu.be/w7ejDZ8SWv8?t=3330
        setTasks(tasks.filter((task) => task.id =! id));
      }

//Filter out the Matching id, simply becomes :
      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id =! id));
      }

```

---
---
>*See Folder 3.Min_56_to_103*
---

### Display Message When No Tasks Exists (Deleted All of them)


[Starts HERE (55:39)](https://youtu.be/w7ejDZ8SWv8?t=3339).

RECAP - We are able to "_remove_" a task by simply setting `setTasks()` to the **filtered tasks WITHOUT the id passed in (clicked)**

```js
      const deleteTask = (id) => {
        //See (55:30): https://youtu.be/w7ejDZ8SWv8?t=3330
        // != single equal sign worked, but he used two, compare data type? check:
        setTasks(tasks.filter((task) => task.id !== id));
      }

```



To display a message when there are no tasks to display, wrap the `<Tasks />` component in a `{ternary operator}`:
```js
  return ( 
    <div className="container">
      <Header />
    <code>My Tasks:</code>
      {/* <Tasks tasks={tasks} onDelete={ deleteTask } /> */}
      {/* Wrap Tasks component in {} and check length */}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={ deleteTask } /> : <p style={{color:'red'}}>No Tasks To Display.</p> }
    </div>    
  );

```


### Toggle Reminder Function in App.js (47:40)

[47:40] - 

In `App.js` create the `toggleReminder` function and pass it to `<Tasks />` component via props:
```js
//toggleReminder function: 
      const toggleReminder = (id) => {
        console.log(id);         
      }

//Key change to App.js' return: 
onToggle={ toggleReminder }

//App.js' return statement
  return ( 
    <div className="container">
      <Header />
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

```

**IN `Tasks.js` we pass it through via props and `<Task />` component via props:** 
```js
const Tasks = ({ tasks, onDelete, onToggle }) => {

  return (
    <>
        {tasks.map((task) => (
            //<h3 key={task.id}>{task.text} - {task.id}</h3>
                <Task 
                    key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}
                />
        ))}
    </> 
  )
}


```


**THEN IN Task.js**
```js
//Target the outter (parent) div with `onDoubleClick={}`
 <div className='task' onDoubleClick={() => onToggle(task.id)}>
```
```js
//So it becomes: 
const Task = ({ task, onDelete, onToggle }) => {
   
  return (
    //See (59:05)
    <div className='task' onDoubleClick={() => onToggle(task.id)}>
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

```

**THEN BACK IN `App.js`, we will complete our `toggleReminder` function using .map():**
```js
  //Toggle Reminder (57:40): 
      const toggleReminder = (id) => {
        // console.log(id); 
        // See 1:01:20
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)   
        )         
      }

```


**IN `Task.js` we can add conditional formatting with a ternary operator** [See 1:02:40](https://youtu.be/w7ejDZ8SWv8?t=3760).

```js
//We want to set 'true' reminders to CSS class 'task reminder' in index.css:
.task.reminder {
  border-left: 5px solid green;
}
//Using string interpolation: (Setting false to '' or 'task' had same result)
<div className={`task ${task.reminder ? 'reminder' : 'task'}`} onDoubleClick={() => onToggle(task.id)}>

```

Full `Task.js` return statement: 
```js
  return (
    // <div className='task' onDoubleClick={() => onToggle(task.id)}>
    //See (1:02:08) to add ternary operator on parent div classname, if task.remidner true/false
    // Ternary logic all in the template literal / string interpolation `` and ${}
    <div className={`task ${task.reminder ? 'reminder' : 'task'}`} onDoubleClick={() => onToggle(task.id)}>
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

```


Alternatively, we can do the same with our if statement above the `Task.js` return(). 
```js

    let displayReminder;
    let setTaskCSS;

    if (task.reminder.toString() == 'true'){
       displayReminder = "Reminder is On.";
       setTaskCSS = 'task reminder';
    }else{
        displayReminder = "Reminder is Off.";
        setTaskCSS = 'task'; 
    }

//See (1:02:08) to add ternary operator on parent div classname, if task.remidner true/false
    // <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    <div className={`${setTaskCSS}`} onDoubleClick={() => onToggle(task.id)}>
{/*Don't need template literal here on className:*/}
    <div className={setTaskCSS} onDoubleClick={() => onToggle(task.id)}>

```


---
>*See Folder 4.Min_104_to_114*
---
---

## Add Task (1:03:19)

[Add Task starts at 1:03:19](https://youtu.be/w7ejDZ8SWv8?t=3799).

**Similar To TTH AddPlayerForm.js**: https://tinyurl.com/tth-AddPlayerForm

**Which used TTH App.js' handleAddPlayer function**: https://tinyurl.com/tth-handleAddPlayer

---

>Adding Tasks Steps: 
1. Add `AddTask.js`
2. Return html Form. 
3. import into App.js and place with `<AddTask />


**In AddTask.js** (1:06:30) we want **COMPONENT STATE** not **APP STATE** so we'll add state in `AddTask.js`: 
1. import `{ useState }`
2. Create state for each input in `AddTask`
```js
import { useState } from 'react' //added (1:06:31)

const AddTask = () => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

}

```

3. Add `value={text}` and `onChange` function to Add Task text field: 
    - onChange is a constrolled component, fires off as soon as you start typing (1:07:25)
    - Similar to TTH AddPlayerForm.js: https://tinyurl.com/tth-AddPlayerForm
        - Which used TTH App.js `handleAddPlayer` function: https://tinyurl.com/tth-handleAddPlayer

```js
        <input 
                type="text" 
                placeholder='Add Task'
                value={text}
                onChange={(e) => setText(e.target.value)}
                // similar to: https://tinyurl.com/tth-AddPlayerForm
            />

```

4. Do the same with `day` and `reminder` checkbox with the following changes: 
    - checkbox boolean: `onChange={(e) => setReminder(e.currentTarget.checked)}`
```js
//Day text field: 
    <input 
        type="text" 
        placeholder='Add Day & Time'
        value={day}
        onChange={(e) => setDay(e.target.value)}    
    />

//Reminder Checkbox: 
    <input 
        type="checkbox" 
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}    
    />

```


**USING REACT DEV TOOLS _(Components tab)_ WE CAN TEST OUR INPUT COMPONENTS**
![React Dev Tools Testing Input Fields](https://i.imgur.com/Hl30Iis.png)



**IN App.js Create addTask Function and hook it up:**
```js

//Add Task Function (1:09:10)
const addTask = (task) => {
  console.log(task); 
}

//Use onAdd function
<AddTask onAdd={} />



```


**IN AddTask.js**
```js

//Set onSubmit on the form. Set to custom onSubmit function we'll define above return()
<form className='add-form' onSubmit={onSubmit}>
```

- Check to see if any text is entered (!text)
- Then `AddTask.js` function **onSubmit()** will call `App.js`'s **onAdd()** function
- `App.js`'s **onAdd()** fn will currently console.log the task object for now. 
![New Task Object in Console](https://i.imgur.com/QxXcBmK.png).

```js
//Pass in onAdd prop
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

// To set the checkbox back to UNCHECKED, use value `checked={reminder}` which is intialized as false:
    <input 
        type="checkbox" 
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}    
    />
```



addTask function: 
1. Used TTH's unique id solution instead of his random number
2. Key logic here: 

```js
  //(1:13:55) - newTask with seperator operator
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])

```

```js
//TTH solution for unique id: https://tinyurl.com/tth-handleAddPlayer
      const currentTaskNum = tasks.length + 1; 
      const [nextTaskId, setNextTaskId] = useState(currentTaskNum); 

//Add Task Function (1:09:10)
const addTask = (task) => {
  // console.log(task); 
  // (1:13:16) - solution for auto generate unique id, his solution just generates random number..
      // const id = Math.floor(Math.random() * 10000) + 1; 
    const id = nextTaskId; 
    setNextTaskId(prevId => prevId + 1); 
  //(1:13:55) - newTask with seperator operator
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
}

```

---
---
>*See folder `5.Min_115_to_`*
---


### Add Button toggles the _Add Task Form_ (1:14:47)

[Start the Add Button toggle form (1:14:47)](https://youtu.be/w7ejDZ8SWv8?t=4487). 

