import React from "react";
import Button from "./Button";

const Header = ({showTasks}) => {
  return (
    <div className="header flex-row fjust-between">
      <h3 style={{padding:".5rem"}}>Here are your tasks</h3>
      <Button showTasks={showTasks} />
    </div>
  )
}

export default Header;