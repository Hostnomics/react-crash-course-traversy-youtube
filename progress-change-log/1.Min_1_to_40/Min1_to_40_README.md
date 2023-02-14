
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

