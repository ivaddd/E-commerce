import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-[#DB4444]  text-white font-sans py-3 px-8  md:py-4 md:px-10 rounded md:ml-8 hover:bg-indigo-400 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
