import React, { useEffect, useState } from 'react';
import Todos from './Todos';
import AddTask from './AddTask';
import axios from 'axios';
import { useContext } from 'react';
import {Task_Context} from '../Context/TaskContext';

const TodoContainer = () => {
    const { initialstate, dispatch } = useContext(Task_Context);
   const [select,Setselect] = useState([])

  const [draggedItemId, setDraggedItemId] = useState(null);

  const handleDragStart = (id) => {
    setDraggedItemId(id);
  };

  const handleDrop = (id) => {
    if (draggedItemId === id) return;

    const draggedIndex =  initialstate.findIndex((todo) => todo.id === draggedItemId);
    const droppedIndex = initialstate.findIndex((todo) => todo.id === id);

    const newTodos = [...initialstate];
    [newTodos[draggedIndex], newTodos[droppedIndex]] = [newTodos[droppedIndex], newTodos[draggedIndex]];

    dispatch({type:"SET_TODOS",payload:newTodos});
    setDraggedItemId(null);
  };

  return (
    <div style={{ fontSize: 14 }}>
      <div style={{ backgroundColor: "#FAC3FF", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", paddingLeft: "20px" }}>
        Todo ({initialstate.length})
      </div>
      <AddTask />
      <div>
        {initialstate.map((todo) => (
          <div>
            <Todos key={todo.id} id={todo.id} Task_name={todo.Task_name} Due_on={todo.Due_on} Task_category={todo.Task_category} Task_status={todo.Task_status} onDragStart={handleDragStart} onDrop={handleDrop} Select={Setselect} Selectvalue={select}/>
            <hr></hr>
          </div>
          
        ))}
      </div>
      
    
    </div>
  );
};

export default TodoContainer;
