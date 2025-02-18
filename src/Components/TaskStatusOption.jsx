import React from 'react'
import { useContext } from 'react'
import { Task_Context } from '../Context/TaskContext'

const TaskStatusOption = ({backgroundColor,Fontcolor,data,width}) => {
   
  const{dispatch} = useContext(Task_Context)
    const HandleTaskStatus= (task) =>{

      const v = data.map((d)=>({id:d, Task_status:task, Activity:`Task updated at ${Date.now()}`}))
      console.log(v,"consoling v")
        
        dispatch({type:"MultiUpdate",payload:v})
    }

  return (
    <div style={{position:"absolute",backgroundColor:backgroundColor?backgroundColor:"white",left:"100%",fontSize:"14px",width:"120px",padding:"10px",fontWeight:"600",top:"100%",borderRadius:"12px",color: Fontcolor ? Fontcolor : "black",zIndex:1}}>
    <div onClick={()=>{HandleTaskStatus("TODO")}}>Todo</div>
    <div onClick={()=>{HandleTaskStatus("In-Progress")}}>In-Progress</div>
    <div onClick={()=>{HandleTaskStatus("Completed")}}>Completed</div>
    </div>
  )
}

export default TaskStatusOption
