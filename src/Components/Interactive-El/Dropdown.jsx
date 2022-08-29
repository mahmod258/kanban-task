import React, { useState } from "react";

const Dropdown = () => {
  const status = ["Todo", "Doing", "Done"];
  const [chosen, setChosen] = useState("Todo");
  const [toggler, setToggler] = useState(false);
  return (
    <div className="dropdown">
      <div onClick={() => setToggler((state) => !state)}>
        <p>{chosen}</p>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#635FC7"
            stroke-width="2"
            fill="none"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>
      {toggler ? (
        <div className="dropdown-input">
          {status.map((title) => (
            <div
              onClick={() => {
                setChosen(title);
                setToggler(false);
              }}
            >
              {title}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
