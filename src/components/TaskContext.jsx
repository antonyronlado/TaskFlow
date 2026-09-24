import { createContext, useContext, useEffect, useReducer } from "react";
import initialTasks from "../mockdata/Tasks";

const defaultTaskState = {
  tasks: Array.isArray(JSON.parse(localStorage.getItem("tasks"))) ? JSON.parse(localStorage.getItem("tasks")) : initialTasks,
  filter: "all",
};

const TaskContext = createContext({
  state: defaultTaskState,
  dispatch: () => {},
});

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || initialTasks,
  filter: "all",
};

function taskReducer(state, action) {
  switch (action.type) {

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? {
                ...task,
                completed: !task.completed,
              }
            : task
        ),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(state.tasks)
    );
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    return {
      state: defaultTaskState,
      dispatch: () => {},
    };
  }

  return context;
}