//  import React from 'react' //no longer needed (25:25)/ (26:16) Required ONLY for classes
 
import PropTypes from 'prop-types'
import Button from './Button'

// const Header = (props) => {
const Header = ({title}) => {

    const onClick = () => {
        console.log('clicked from Header.js')
    }

   return (
     <header className='header'>
        {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}>{title}</h1>  inline css (31:30) */}
        {/* <h1 style={ headingStyle }>{title}</h1> variable css (32:06) */}
        <h1>{title}</h1>
        {/* <Button color='green' text='Add'/>
        <Button color='red' text='Remove'/>
        <Button color='blue' text='Edit'/> */}
        <Button color='green' text='Add' onClick={onClick}/>
        
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