import React, { useEffect, useState } from 'react'
import Add from './Add'
import Add2 from './Add2'
import { useContext } from 'react'
import { Task_Context } from '../Context/TaskContext'
const AddTaskContent = () => {
     const {dispatch}  = useContext(Task_Context)
    const [task,setTask]  = useState(null)
    const [Due_on,setDue_on] = useState("23/09/2025")
    const [category,setCategory] =  useState(null)
    const [id,setId] =  useState(null)
    const[status, setStatus] = useState(null)
      
    useEffect(()=>{
      const num = Math.random()*20
      console.log(num,"num")
      setId(num)
    },[])

    const SubmitTask = () =>{
      
      
 
       if(task&&Due_on&&category&&status&&id){
        console.log(task,Due_on,category,status,id)
          dispatch({ type:"ADD", payload:{Task_name:task,Due_on,Task_category:category,Task_status:status,id:id}})
       } 
    }
    const HandleTask = (event) =>{
       const value = event.target.value
       console.log(value)
        setTask(value)
    }
  return (
    <div style={{display:'flex', alignItems:"center", width:"90%",paddingLeft:"60px",marginTop:"20px", marginBottom:"20px"}}>

    <div style={{flex:"1"}}>
    <div>
    <textarea
placeholder="Enter your task description"
value={task}
onChange={HandleTask}
style={{
width: "100%",

backgroundColor: "#f0f0f0",
outline: "none",
border: "0px solid #ccc",
padding: "8px",
borderRadius: "4px",
resize: "none",
fontFamily: "inherit",
fontSize: "16px",
}}
/>
    </div>
    <div style={{display:"flex", alignItems:"center", gap:"20px", marginTop:"10px"}}>
    <div style={{display:"flex" , width:"80px", height:'30px', borderRadius:"60px", backgroundColor:"#7B1984", color:"white", alignItems:"center", justifyContent:"center", cursor:"pointer"}} onClick={()=>{SubmitTask()}}>ADD</div>
    <div style={{display:"flex"}}>Cancel</div>
    </div>
    
   </div> 
   <div style={{flex:1}}>
   <div style={{display:"flex", alignItems:"center" ,gap:"5px", width:"90px", height:"30px",border: "solid 1px #00000020" , borderRadius:"60px" , justifyContent:"center"}}>

       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width={12} height={12}>
<g id="calendar_add" data-name="calendar add">
<path
fill="#231f20"
d="M22.5 3H21V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1h-4V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1H7V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1H2.5A1.5 1.5 0 0 0 1 4.5v18A1.5 1.5 0 0 0 2.5 24h20a1.5 1.5 0 0 0 1.5-1.5v-18A1.5 1.5 0 0 0 22.5 3zM19 2h1v3h-1zm-7 0h1v3h-1zM5 2h1v3H5zM2.5 4H4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h4v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V4h1.5a.5.5 0 0 1 .5.5V8H2V4.5a.5.5 0 0 1 .5-.5zm20 19h-20a.5.5 0 0 1-.5-.5V9h21v13.5a.5.5 0 0 1-.5.5z"
/>
<path
fill="#231f20"
d="M16 15.5h-3v-3a.5.5 0 0 0-1 0v3H9a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1z"
/>
</g>
</svg>Add date
       </div>       
   </div>
   <Add AddTask={true} setStatus={setStatus}></Add>
   <Add2 setCategory={setCategory}></Add2>
  
</div>
  )
}

export default AddTaskContent
