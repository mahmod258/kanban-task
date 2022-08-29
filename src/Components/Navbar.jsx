import React from "react";
import Button from "./Interactive-El/Button";

const Navbar = () => {
  return (
    <nav>
      <h1>Platform Launch</h1>
      <div>
        <Button text="+ Add New Task" />
        <div>
          <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fill-rule="evenodd">
              <circle cx="2.308" cy="2.308" r="2.308" />
              <circle cx="2.308" cy="10" r="2.308" />
              <circle cx="2.308" cy="17.692" r="2.308" />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
