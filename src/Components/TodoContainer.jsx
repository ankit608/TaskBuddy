import React from 'react'
import Todos from './Todos'
const TodoContainer = () => {
  return (
    <div style={{fontSize:14}}>
      <div style={{backgroundColor:"#FAC3FF", borderTopLeftRadius:"12px", borderTopRightRadius:"12px"}}>Todo(3)</div>
      <div className='Add-task'style={{ width:"100%", boxSizing:"border-box", backgroundColor:"#F1F1F1",fontSize:"14px"}}>
        <div> <b>+ ADD TASK</b></div>
        <hr></hr>
        
        <div style={{display:'flex', alignItems:"center", width:"100%"}}>

             <div style={{flex:"1"}}>
             <div>
             <textarea
  placeholder="Enter your task description"
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
             <div style={{display:"flex" , width:"80px", height:'30px', borderRadius:"60px", backgroundColor:"#7B1984", color:"white", alignItems:"center", justifyContent:"center"}}>ADD</div>
             <div style={{display:"flex"}}>Cancel</div>
             </div>
             
            </div> 
            <div style={{flex:1}}>
            <div style={{display:"flex", alignItems:"center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width={18} height={18}>
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
  </svg>

                Add date</div>
                </div>       
            
            <div style={{flex:"1"}}>
            <div style={{width:"30px", height:"30px", borderRadius:"50%",border: "2px solid #00000020", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M7.33325 9.54769H3.33325V8.21436H7.33325V4.21436H8.66659V8.21436H12.6666V9.54769H8.66659V13.5477H7.33325V9.54769Z" fill="black"/>
</svg>
            </div>
            </div>
            <div style={{flex:1}}>
            <div style={{width:"30px", height:"30px", borderRadius:"50%",border: "2px solid #00000020", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
<path d="M7.33325 9.54769H3.33325V8.21436H7.33325V4.21436H8.66659V8.21436H12.6666V9.54769H8.66659V13.5477H7.33325V9.54769Z" fill="black"/>
</svg>
            </div>
            </div>
           
        </div>

      </div>
      <Todos></Todos>
    </div>
  )
}

export default TodoContainer
