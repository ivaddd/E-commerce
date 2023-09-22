import React from "react";

const CardProduct = (props) => {
  return (
    <div className=" w-32  lg:w-[170px] lg:h-[138px]  bg-[#F5F5F5] flex items-center justify-center ">
      {props.children}
    </div>
  );
};

export default CardProduct;
