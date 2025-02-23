// TaskContext.js
import React, { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';

export const Task_Context = createContext();

// Define the initial state as an empty array
const initialState = [];

// Reducer expecting an action with a type and payload
const reducer = (state, action) => {
  switch (action.type) {
    
    case "ADD": 
          console.log(action.payload)
          return [...state,action.payload]

    case "DELETE":
    return state.filter((todo) => !action.payload.includes(todo.id));
 
    case "UPDATE":
        return state.map((u)=>{  if(action.payload.id===u.id){return action.payload} return u})

    case "MultiUpdate":
        return state.map((item) => {
            console.log("inside Reducer",action.payload)
            const updatedItem = action.payload.find((u) => u.id === item.id);
            if(updatedItem){
              item.Task_status = updatedItem.Task_status
              return  item;
            }
            return item
          });
          
    case "SET_TODOS":
      return action.payload; // Replace state with the fetched todos array
    // You can add additional cases ("ADD", "UPDATE", etc.) as needed
    default:
      return state;
  }
};



const TaskContext = ({ children }) => {
    const [page, setPage] = useState(1); // Track current page
    const limit = 10; // Number of items per page
    const [initialstate, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      const fetchTodos = async () => {
        try {
          console.log("Fetching page:", page);
          const response = await axios.get(
            `http://localhost:3000/todos?_page=${page}&_limit=${limit}&_timestamp=${Date.now()}`
          );
          console.log("API Response:", response.data);
          dispatch({ type: "SET_TODOS", payload: response.data || [] });
        } catch (error) {
          console.error("Error fetching todos:", error);
          dispatch({ type: "SET_TODOS", payload: [] });
        }
      };
  
      fetchTodos();
    }, [page, limit]);
  
    return (
      <Task_Context.Provider value={{ dispatch, initialstate }}>
        <div>
          {children}
          <div>
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <button onClick={() => setPage((prev) => prev + 1)}>
              Next
            </button>
          </div>
        </div>
      </Task_Context.Provider>
    );
  };
  
  export default TaskContext;
  