import React from 'react'

const Button = ({showTasks}) => {
  return (
    <button 
    className="btn-s"
    onClick={() => showTasks()}
    >Show Tasks</button>
  )
}

export default Button
