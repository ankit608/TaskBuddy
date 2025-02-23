
import './App.css';
import Dashboard from './Components/dashboard';
import TodoContainer from './Components/TodoContainer';
import InProgress from './Components/InProgress';
import DraggableComponent from './Components/DraggableComponent';
import TaskContext, { Task_Context } from './Context/TaskContext';
import DeleteSelected from './Components/DeleteSelected';
import { useContext, useEffect, useState } from 'react';

function App() {
 const {initialstate, dispatch} = useContext(Task_Context)
  const [select,Setselect] = useState([])
  const [todos, setTodos] = useState([])
  const [progress, setProgress] = useState([])
  const [completed, setCompleted] = useState([])

  useEffect(()=>{
    const Todo = initialstate.filter((a) => a.Task_status === "To-Do");
    
     const Progress =  initialstate.filter((a)=> a.Task_status==="In-Progress")

   const Completed =  initialstate.filter((a)=>a.Task_status==="Completed")
      
    
    setCompleted(Completed)
    setProgress(Progress)
    setTodos(Todo)
 
   
  },[initialstate])

  return (
   
     <div style={{position:"relative"}}>
    
      <Dashboard></Dashboard>
      <div style={{display:"flex", justifyContent:"space-between", width:"80%" , fontSize:"14px", paddingLeft:"20px"}}>
        <div>Task name</div>
        <div>Due on <span></span></div>
        <div>Task Status</div>
        <div>Task Category</div>
      </div>
      <TodoContainer select= {select} Setselect ={Setselect} todos={todos} status={"To-Do"} ></TodoContainer>
      <TodoContainer select= {select} Setselect ={Setselect} todos={progress} backgroundColor={"#85D9F1"} status={"In-Progress"}></TodoContainer>
      <TodoContainer select= {select} Setselect ={Setselect} todos={completed} backgroundColor={"#CEFFCE"} status={"Completed"}></TodoContainer>
        
       {select.length>0?<DeleteSelected length= {select.length} data={select} Setselect={Setselect}></DeleteSelected>:""} 
   

       </div>
  );
}

export default App;


/*** */






      