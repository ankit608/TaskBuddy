import React, { useState } from 'react'
import TaskStatusOption from './TaskStatusOption'

import AddTaskContent from './AddTaskContent'

const AddTask = () => {
   
  const [visible,Setvisible] = useState(false)
  const Handlevisible=()=>{
       Setvisible(!visible)
  }

  return (
    <div>
      <div className='Add-task'style={{ width:"100%", boxSizing:"border-box", backgroundColor:"#F1F1F1",fontSize:"14px"}}>
        <div style={{marginLeft:"50px",cursor:"pointer"}} onClick={Handlevisible}> <b>+ ADD TASK</b></div>
        <hr style={{color:"#00000010"}}></hr>
          
           {visible?<AddTaskContent></AddTaskContent>:""} 
          
        <hr></hr>
      </div>
    </div>
  )
}

export default AddTask
