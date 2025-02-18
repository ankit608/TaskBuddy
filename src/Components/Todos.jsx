import React from 'react'
import DotsIcon from './Icons'
import { IconSvg } from './Icons'
import { CheckmarkIcon } from './Icons'
import { DotsIcon1 } from './Icons'
import { useState,useEffect } from 'react'
import { useRef } from 'react'
import TaskStatusOption from './TaskStatusOption'

const Todos = ({ id, Task_name, Due_on, Task_status, Task_category, onDragStart, onDrop,Select,Selectvalue }) => {
    const [isDragging, setIsDragging] = useState(false);
    const data = [id]
    const[visible,Setvisible] = useState(false)
    const HandleVisible = ()=>{
       Setvisible(!visible)
    }
    const draggableRef = useRef(null);
    const handleSelect = (event) => {
        const checked = event.target.checked;
        if (checked) {
          
          // Add the id to the current state (if it's not already present)
          Select((state) => {
            return state.includes(id) ? state : [...state, id];
          });
          
        } else {
          // Remove the id from the current state by filtering it out
          const updated = Selectvalue.filter((v) => v !== id);
          Select(updated);
        }
      };
  
    const handleDragStart = (e) => {
      setIsDragging(true);
      onDragStart(id);
      e.dataTransfer.setData("text/plain", id);
    };
  
    const handleDragEnd = () => {
      setIsDragging(false);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      const droppedId = e.dataTransfer.getData("text/plain");
      if (droppedId !== id) {
        onDrop(id);
      }
    };
  
    return (
      <div
      className={isDragging?"Todos-drag":""}
        ref={draggableRef}
        style={{
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          padding: "20px",
          backgroundColor: isDragging ? "white" : "#F1F1F1",
          alignItems: "center",
          opacity: isDragging ? 0.8 : 1,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div style={{ display: "flex", flex: 1, gap: "9px", alignItems: "center" }}>
          <input type="checkbox"  onChange={handleSelect}/>
          <DotsIcon1 />
          <CheckmarkIcon />
          <div>{Task_name}</div> {/* Now displaying the actual task text */}
        </div>
        <div style={{ flex: 1 }}>{Due_on}</div>
        <div style={{ flex: 1 }}>
         
          <span style={{ borderRadius: "4px", backgroundColor: "#DDDADD", padding: "5px", position:"relative" }} onClick={HandleVisible}>
            <b>{Task_status}</b>
            {visible?<TaskStatusOption width={"100%"} data={data}></TaskStatusOption>:""} 
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
          <div>{Task_category}</div>
          <DotsIcon id={id}/>
        </div>
        
      </div>
    );
  };
  
  export default Todos;