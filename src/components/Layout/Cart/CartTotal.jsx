import React from "react";
import Button from "../../UI/Button";
import ButtonCart from "../../UI/ButtonCart";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className=" w-[100%] pt-3 py-3 font-medium border-[2px] border-black rounded-sm ">
      <div className=" flex flex-col gap-3 px-4  md:py-3">
        <h1 className="font-bold">Cart Total</h1>
        <div className="flex justify-between border-b-[1px] border-black border-opacity-40 py-1 md:py-2">
          <h1>Subtotal</h1>
          <h1>$1750</h1>
        </div>
        <div className="flex justify-between border-b-[1px] border-black border-opacity-40 md:py-2">
          <h1>Shiping</h1>
          <h1>free</h1>
        </div>
        <div className="flex justify-between  md:py-2">
          <h1>Total</h1>
          <h1>$3000</h1>
        </div>
        <div className=" pt-3   flex justify-center lg:px-36">
          <Link to="/checkout">
            <ButtonCart warna="bg-[#DB4444]" text="text-white">
              Procees to checkout
            </ButtonCart>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
