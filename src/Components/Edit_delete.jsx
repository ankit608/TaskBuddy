import React from 'react'
import { DeleteIcon } from './Icons'
import { EditIcon } from './Icons'
import { useContext } from 'react'
import { Task_Context } from '../Context/TaskContext'
const Edit_delete = ({id}) => {
    const {dispatch} = useContext(Task_Context)
    
    const HandleDelete = ()=>{
        console.log("helloo")
        const val = [id]
        dispatch({type:"DELETE",payload:val})
    }
    
  return (
    <div className='delete-edit'>
     <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
  <div style={{ display: "flex", alignItems: "center" }} >
     <EditIcon></EditIcon>
  </div>
  <div style={{ color: "#000000" }}>Edit</div>
</div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px", }}onClick={HandleDelete}>
  <div style={{ display: "flex", alignItems: "center" }} >
    <DeleteIcon />
  </div>
  <div style={{ color: "#DA2F2F" }}>Delete</div>
</div>

    </div>
  )
}

export default Edit_delete
