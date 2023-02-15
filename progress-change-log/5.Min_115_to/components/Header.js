//  import React from 'react' //no longer needed (25:25)/ (26:16) Required ONLY for classes
 
import PropTypes from 'prop-types'
import Button from './Button'

// const Header = (props) => {
const Header = ({title, onAdd, showAddTask }) => {

// Remove Header.js' custom onClick function and use onAdd instead (1:16:41): https://youtu.be/w7ejDZ8SWv8?t=4601
    // const onClick = () => {
    //     console.log('clicked from Header.js')

    // }

    let toggleAddButton;
    let toggleHideButton; 

    if (showAddTask.toString() === 'true'){
        toggleAddButton = "display:'none'";
        toggleHideButton = "display:'inline'";
    }else{
        toggleAddButton = "display:'inline'";
        toggleHideButton = "display:'none'";
    }


   return (
     <header className='header'>
        {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>  inline css (31:30) */}
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onAdd} style={{toggleAddButton}} />
        <Button color='red' text='Hide Form' onClick={onAdd} style={{toggleHideButton}} />  
        {/* <p style={{display:'none'}}>{task.id}</p> */}
     </header>
   )
 }
 
//(28:10) Set fall back props: 
Header.defaultProps = {
    title: 'Task Tracker',
}

//(29:30) Set Prop DATA Type
Header.propTypes = {
    title: PropTypes.string,
}


//(31:55) Set variable for CSS in JS (32:38)
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }


 export default Header