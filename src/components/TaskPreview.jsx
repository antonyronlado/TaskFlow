import { useState, useEffect } from "react";
import { useTasks } from "../components/TaskContext";
import TaskCard from "./TaskCard";

function TaskPreview() {

  const { state, dispatch } = useTasks();
  const { tasks, filter } = state;
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);  

  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  const addTask = () => {
    if (newTaskTitle.trim() === "") return;

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      category: "Learning",
      completed: false,
    };  

    dispatch({
      type: "ADD_TASK",
      payload: newTask,
    });
    setNewTaskTitle("");
  };

  return (
    <section id="Tasks" className="p-6">
      <div className="mx-auto max-w-2xl">

        <div className="mb-2">
          <h1 className="text-3xl font-bold">
            Your tasks
          </h1>
          
          <div className="mt-4 flex gap-6 text-sm">
            <p>Total: {tasks.length}</p>
            <p>Completed: {completedTasks.length}</p>
            <p>Pending: {pendingTasks.length}</p>
          </div>

          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter a task"
            className="mt-4 w-full rounded-lg border border-slate-700 border-2 bg-slate-900 px-4 py-3 text-white outline-none"
          />

          <button
            onClick={addTask}
            className="mt-4 rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-slate-950"
          >
            Add Task
          </button>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => dispatch({ type: "SET_FILTER", payload: "all", }) }
            className={`rounded-lg px-4 py-2 ${
              filter === "all"
                ? "bg-cyan-400 text-slate-950"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            All
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "SET_FILTER",
                payload: "completed",
              })
            }
            className={`rounded-lg px-4 py-2 ${
              filter === "completed"
                ? "bg-cyan-400 text-slate-950"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            Completed
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "SET_FILTER",
                payload: "pending",
              })
            }
            className={`rounded-lg px-4 py-2 ${
              filter === "pending"
                ? "bg-cyan-400 text-slate-950"
                : "bg-slate-800 text-slate-300"
            }`}
          >
            Pending
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default TaskPreview;