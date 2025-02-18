import React from 'react'
import { useContext } from 'react'
import { Task_Context } from '../Context/TaskContext'
import TaskStatusOption from './TaskStatusOption'
import { useState } from 'react'

const DeleteSelected = ({length,data,Setselect}) => {
  
    const {dispatch}  = useContext(Task_Context)
    const[visible,Setvisible] = useState(false)
    
   const HandleVisible = () =>{
     Setvisible(!visible)
   }
   
    const HandleDelete = ()=>{
          
        dispatch({type:"DELETE",payload:data})
        Setselect([])
    }

  return (
    <div style={{position:"fixed", top:"90vh", left:"40%"}}>
        <div style={{backgroundColor:"#1A1C20" , borderRadius:"12px",fontSize:"12px", padding:"8px", cursor:"pointer", left:"40%"}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center",gap:"10px"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"12px", border: "solid 0.2px #FFFFFF",width:"139px", height:"27px",color:"white" , fontSize:"12px",gap:"5px"}}>{length} task Selected <span>X</span></div>
            <div>{}</div>
        </div>
         <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <div onClick={HandleVisible} style={{position:"relative",display:"flex", alignItems:"center", justifyContent:"center", width:"63px", height:"27px",color:"white",borderRadius:"12px",border: "solid 0.1px #FFFFFF"}}>
               {visible?<TaskStatusOption backgroundColor={"black"} Fontcolor={"white"} width={"200%"} data={data}></TaskStatusOption>:""}
                Status</div>
            <div style={{display:"flex", alignItems:"center", backgroundColor:"#E1383814",justifyContent:"center",width:"63px", height:"27px", color:"#E13838", border: "solid 0.1px #FF3535" , borderRadius:"12px"}} onClick={HandleDelete}>Delete</div>
         </div>
      </div>
    </div>
    </div>
    
  )
}

export default DeleteSelected
