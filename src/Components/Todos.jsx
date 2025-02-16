import React from 'react'
import DotsIcon from './Icons'
import { IconSvg } from './Icons'
import { CheckmarkIcon } from './Icons'
import { DotsIcon1 } from './Icons'
import { useState } from 'react'
import { useRef } from 'react'

const Todos = ({ id, text, date, onDragStart, onDrop }) => {
    const [isDragging, setIsDragging] = useState(false);
    const draggableRef = useRef(null);
  
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
        ref={draggableRef}
        style={{
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          padding: "20px",
          backgroundColor: isDragging ? "#E0E0E0" : "#F1F1F1",
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
          <input type="checkbox" />
          <DotsIcon1 />
          <CheckmarkIcon />
          <div>{text}</div> {/* Now displaying the actual task text */}
        </div>
        <div style={{ flex: 1 }}>{date}</div>
        <div style={{ flex: 1 }}>
          <span style={{ borderRadius: "4px", backgroundColor: "#DDDADD", padding: "5px" }}>
            <b>TO-DO</b>
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
          <div>Personal</div>
          <DotsIcon />
        </div>
      </div>
    );
  };
  
  export default Todos;