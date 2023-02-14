// import logo from './logo.svg';
// import './App.css';


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


  //Delete Task (52:38): https://youtu.be/w7ejDZ8SWv8?t=3158
      const deleteTask = (id) => {
        // console.log('delete clicked', id); 
        // setTasks(tasks.filter( () => )); //filter takes an arrow function
        //See (55:30): https://youtu.be/w7ejDZ8SWv8?t=3330
        // setTasks(tasks.filter((task) => task.id != id));

        // != single equal sign worked, but he used two, compare data type? check:
        setTasks(tasks.filter((task) => task.id !== id));
      }

  return ( 
    <div className="container">
      <Header />
    <code>My Tasks:</code>
      <Tasks tasks={tasks} onDelete={ deleteTask } />
    </div>    
  );
}

export default App; 
