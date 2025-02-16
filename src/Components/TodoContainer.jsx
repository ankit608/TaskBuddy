import React from 'react'
import Todos from './Todos'
import AddTask from './AddTask'
import { useState } from 'react'
const TodoContainer = () => {
    const [todos, setTodos] = useState([
        { id: "1", text: "Task 1", date: "2023-10-01" },
        { id: "2", text: "Task 2", date: "2023-10-02" },
        { id: "3", text: "Task 3", date: "2023-10-03" },
      ]);
      
    
      // State to track the dragged item
      const [draggedItemId, setDraggedItemId] = useState(null);
    
      // Handle drag start
      const handleDragStart = (id) => {
        setDraggedItemId(id);
      };
    
      // Handle drop
      const handleDrop = (id) => {
        if (draggedItemId === id) return; // No action if dropped on itself
    
        // Find the indices of the dragged and dropped items
        const draggedIndex = todos.findIndex((todo) => todo.id === draggedItemId);
        const droppedIndex = todos.findIndex((todo) => todo.id === id);
    
        // Swap the items
        const newTodos = [...todos];
        const temp = newTodos[draggedIndex];
        newTodos[draggedIndex] = newTodos[droppedIndex];
        newTodos[droppedIndex] = temp;
    
        // Update the state
        setTodos(newTodos);
        setDraggedItemId(null); // Reset dragged item
      };
  return (
    <div style={{ fontSize: 14 }}>
      <div style={{ backgroundColor: "#FAC3FF", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", paddingLeft: "20px" }}>
        Todo ({todos.length})
      </div>
      <AddTask />
      <div>
        {todos.map((todo) => (
          <Todos key={todo.id} id={todo.id} text={todo.text} date={todo.date} onDragStart={handleDragStart} onDrop={handleDrop} />
        ))}
      </div>
    </div>
  )
}

export default TodoContainer

/* **/