// import React from 'react'
import PropTypes from 'prop-types'

//See (35:45)
const Button = ({color, text, onClick}) => {
// const Button = (props) => {

//onClick added (38:11): https://youtu.be/w7ejDZ8SWv8?t=2291
    // const onClick = (e) => {
    //     // console.log('logged from Button.js')
    //     console.log(e); 
    // }

  return (
    // <button 
    // style={{ backgroundColor: color}} 
    // className='btn' 
    // onClick={onClick}
    // >
    <button 
    style={{ backgroundColor: color}} 
    className='btn' 
    onClick={onClick}
    >
        {text}
    </button> 
  )
}

export default Button

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    // onClick: PropTypes.func.isRequired
    onClick: PropTypes.func,
}