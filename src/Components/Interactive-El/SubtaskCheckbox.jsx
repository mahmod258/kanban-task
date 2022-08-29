import React, { useState } from "react";

const SubtaskCheckbox = () => {
  const [subtasks, setSubtasks] = useState([
    { name: "idle", completed: false },
    { name: "Hovered", completed: false },
    { name: "Completed", completed: false },
  ]);

  return (
    <div className="subtask">
      {subtasks.map((subtask, i) => (
        <div>
          <div
            onClick={() => {
              setSubtasks((state) =>
                state.map((subtask, index) => {
                  return {
                    name: subtask.name,
                    completed:
                      i === index ? !subtask.completed : subtask.completed,
                  };
                })
              );
            }}
            className={subtask.completed ? "completed" : ""}
          >
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.27588 3.06605L4.03234 5.82251L9.03234 0.82251"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="body-L">{subtask.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SubtaskCheckbox;
