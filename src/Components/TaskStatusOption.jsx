import React from 'react'
import { useContext } from 'react'
import { Task_Context } from '../Context/TaskContext'


const TaskStatusOption = ({ backgroundColor, Fontcolor, data, width, setStatus, AddTask, setCategory,setSelect }) => {
  const { dispatch } = useContext(Task_Context);

  const HandleCategory = (category) => {
    setCategory(category);
  };

  const HandleAddTask = (task) => {
    setStatus(task);
  };

  const HandleTaskStatus = (task) => {
    if (AddTask) {
      HandleAddTask(task);
    } else {
      const v = data.map((d) => ({
        id: d,
        Task_status: task,
        Activity: `Task updated at ${Date.now()}`,
      }));
      console.log(v, "consoling v");

      dispatch({ type: "MultiUpdate", payload: v });
      setSelect([])
    }
  };

  const statusOption = () => (
    <div
      style={{
        position: "absolute",
        backgroundColor: backgroundColor || "white",
        left: setSelect ? "-100%":"100%",
        fontSize: "14px",
        width: "120px",
        padding: "10px",
        fontWeight: "600",
        top: setSelect?"-500%":"100%",
        borderRadius: "12px",
        color: Fontcolor || "black",
        zIndex: 1,
      }}
    >
      <div onClick={() => HandleTaskStatus("To-Do")}>Todo</div>
      <div onClick={() => HandleTaskStatus("In-Progress")}>In-Progress</div>
      <div onClick={() => HandleTaskStatus("Completed")}>Completed</div>
    </div>
  );

  const categoryOption = () => (
    <div
      style={{
        position: "absolute",
        backgroundColor: backgroundColor || "white",
        left: "100%",
        fontSize: "14px",
        width: "120px",
        padding: "10px",
        fontWeight: "600",
        top: "100%",
        borderRadius: "12px",
        color: Fontcolor || "black",
        zIndex: 1,
      }}
    >
      <div onClick={() => HandleCategory("Work")}>Work</div>
      <div onClick={() => HandleCategory("Personal")}>Personal</div>
    </div>
  );

  return setCategory ? categoryOption() : statusOption();
};


export default TaskStatusOption
