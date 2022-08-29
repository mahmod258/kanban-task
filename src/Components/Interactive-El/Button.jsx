import React from "react";

const Button = ({
  text = "no given text",
  bgColor = "purple",
  color = "var(--white)",
  className = "button-1",
}) => {
  return (
    <button className={className + " h-M " + bgColor} style={{ color: color }}>
      {text}
    </button>
  );
};

export default Button;
