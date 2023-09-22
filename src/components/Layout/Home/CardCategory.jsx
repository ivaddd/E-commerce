import React from "react";
// import product from "../../../5c7f6eaadf370.jpeg";

const CardCategory = (props) => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden  bg-white">
        <div
          className={`h-full w-full flex items-center justify-center flex-col border-2 hover:text-white   transition-all duration-300 hover:bg-[#DB4444] shadow-sm p-10 `}
        >
          <div
            className={`text-4xl hover:text-white transition-all duration-300 flex flex-col items-center`}
          >
            <ion-icon name={props.name}></ion-icon>
            <div className="text-xs md:text-sm text-center pt-3">
              {props.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
