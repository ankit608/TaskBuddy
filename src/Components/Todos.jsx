import React from 'react'

const Todos = () => {
  return (
    <div style={{display:"flex", width:"100%", paddingRight:"10px", boxSizing:"border-box",paddingLeft:"10px", backgroundColor:"#F1F1F1"}}>
     <div style={{display:"flex",flex:1,gap:"11px"}}>
     <div>[]</div>
      <div>::</div>
       <div>O</div>
       <div>Interview with design Team</div>
     </div>
     <div style={{flex:1}}>Today</div>
     <div style={{flex:1}}>Todo</div>
     <div style={{display:"flex", justifyContent:"space-between",flex:"1"}}>
     <div>Personal</div>
     <div>...</div>
     </div>
    
     </div>
  )
}

export default Todos
