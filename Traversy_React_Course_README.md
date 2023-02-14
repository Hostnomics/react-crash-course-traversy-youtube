
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

