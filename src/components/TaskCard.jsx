import { useTasks } from "../components/TaskContext";
function TaskCard({ task }) {
  const { dispatch } = useTasks();
  const { title, ...taskDetails } = task;  
  return (
    <div
      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-5"
    >
      <div className="flex items-center gap-4">
        <div
          onClick={() =>
            dispatch({
              type: "TOGGLE_TASK",
              payload: task.id,
            })
          }
          className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border ${
            taskDetails.completed
              ? "border-cyan-400 bg-cyan-400"
              : "border-slate-600"
          }`}
        >
          {taskDetails.completed && (
            <span className="text-sm text-slate-950">✓</span>
          )}
        </div>

        <div>
          <h2 className="font-medium text-white">
            {title}
          </h2>

          <p className="text-sm text-slate-400">
            {taskDetails.category}
          </p>
        </div>
      </div>

      <span
        className={`rounded-full px-2 py-1 text-xs ${
          taskDetails.completed
            ? "bg-cyan-400/20 text-cyan-300"
            : "bg-slate-700 text-slate-300"
        }`}
      >
        {taskDetails.completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
}

export default TaskCard;