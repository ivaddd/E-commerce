import React from "react";
import Button from "../../UI/Button";
import ButtonCart from "../../UI/ButtonCart";

const Coupon = () => {
  return (
    <div className="flex justify-between h-full lg:gap-2 ">
      <input
        className="border-2  py-1 px-4 lg:py-2 lg:pr-36"
        type="text"
        name=""
        id=""
        placeholder="Coupon code"
      />
      {/* <ButtonCart warna="bg-[#DB4444]" text="text-white">
        Apply Coupon
      </ButtonCart> */}
      <button className=" text-xs border-2 bg-[#DB4444] text-white  font-medium py-3 px-4  md:py-4 md:px-2 w-54 rounded  hover:text-white hover:bg-[#DB4444]  duration-500">
        Apply Coupon
      </button>
    </div>
  );
};

export default Coupon;
