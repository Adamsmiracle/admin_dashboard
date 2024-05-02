import React from "react";

const Button = ({bgColor, color, text, borderRadius, size, doSomething}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={doSomething}
    >
      {text}
    </button>
  )
};

export default Button;
