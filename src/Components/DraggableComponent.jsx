import React, { useState } from 'react';

const DraggableComponent = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setData('text/plain', e.target.id); // Optional: Set data to transfer
  };

  const handleDragEnd = (e) => {
    setIsDragging(false);
    // Update the position of the element
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain'); // Retrieve the data
    const draggableElement = document.getElementById(id);
    // You can perform additional actions here, like moving the element
  };

  return (
    <div
      id="draggable-element"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        padding: '10px',
        border: '1px solid #ccc',
        backgroundColor: isDragging ? '#f0f0f0' : '#fff',
      }}
    >
      Drag me!
    </div>
  );
};

export default DraggableComponent;