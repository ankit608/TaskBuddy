
import './App.css';
import Dashboard from './Components/dashboard';
import TodoContainer from './Components/TodoContainer';

function App() {
  return (
   
     <>
      <Dashboard></Dashboard>
      <div style={{display:"flex", justifyContent:"space-between", width:"80%" , fontSize:"14px",}}>
        <div>Task name</div>
        <div>Due on <span></span></div>
        <div>Task Status</div>
        <div>Task Category</div>
      </div>
      <TodoContainer></TodoContainer>
     </>
  );
}

export default App;
