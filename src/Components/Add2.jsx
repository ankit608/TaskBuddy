import React from 'react'
import TaskStatusOption from './TaskStatusOption'
import { useState } from 'react'

function Add2({setCategory}) {
    const [clicked , setClicked] = useState(false)
    const handleClick = () =>{
        setClicked(!clicked)
    }
  return (
    
      <div style={{flex:"1"}} onClick={()=>{handleClick()}}>
            <div style={{width:"30px", height:"30px", borderRadius:"50%",border: "2px solid #00000020", display:"flex", alignItems:"center", justifyContent:"center", position:"relative", cursor:"pointer"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M7.33325 9.54769H3.33325V8.21436H7.33325V4.21436H8.66659V8.21436H12.6666V9.54769H8.66659V13.5477H7.33325V9.54769Z" fill="black"/>
</svg>       {clicked? <TaskStatusOption setCategory={setCategory}></TaskStatusOption>:""} 
            </div>
            </div>
  )
}

export default Add2
