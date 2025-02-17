
import './App.css';
import Dashboard from './Components/dashboard';
import TodoContainer from './Components/TodoContainer';
import InProgress from './Components/InProgress';
import DraggableComponent from './Components/DraggableComponent';
import TaskContext from './Context/TaskContext';

function App() {
  return (
   
     <>
     <TaskContext>
      <Dashboard></Dashboard>
      <div style={{display:"flex", justifyContent:"space-between", width:"80%" , fontSize:"14px", paddingLeft:"20px"}}>
        <div>Task name</div>
        <div>Due on <span></span></div>
        <div>Task Status</div>
        <div>Task Category</div>
      </div>
      <TodoContainer></TodoContainer>
      <InProgress></InProgress>
      </TaskContext>

     </>
  );
}

export default App;


/*** */






      