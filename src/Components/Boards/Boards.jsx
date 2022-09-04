import React from "react";
import Column from "./Column";
const Boards = ({ data }) => {
  return (
    <div className="boards">
      {data.map((column) => (
        <Column />
      ))}
    </div>
  );
};

export default Boards;
