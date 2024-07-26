import React from "react";

function Button({ text, color, bg, border, borderColor, width, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bg, color: color, borderColor: borderColor }}
      className={` border-2 font-bold p-4 px-12 w-[${width}%] text-center text-xl rounded-full capitalize`}
    >
      {text}
    </button>
  );
}

export default Button;
