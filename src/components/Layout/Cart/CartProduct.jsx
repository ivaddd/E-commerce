import React from "react";
// import image from "../../../5c7f6eaadf370.jpeg";
import CartProductItems from "./CartProductItems";
import Button from "../../UI/Button";
import ButtonCart from "../../UI/ButtonCart";
import Coupon from "./Coupon";
import CartTotal from "./CartTotal";
import { useState } from "react";
const CartProduct = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-6 pt-5 md:pt-0 ">
      <div className=" text-sm md:text-base font-medium flex justify-between w-full px-3 shadow py-2 text-center">
        <h1 className="w-3/12">Product</h1>
        <h1 className="w-3/12">Price</h1>
        <h1 className="w-3/12">Quantity</h1>
        <h1 className="w-3/12">SubTotal</h1>
      </div>

      <CartProductItems></CartProductItems>
      <div className="flex justify-between">
        <ButtonCart>Return To Shop</ButtonCart>
        <ButtonCart>Update Cart</ButtonCart>
      </div>
      <div className="lg:flex justify-between lg:pt-10">
        <div className="flex justify-between h-full lg:gap-2 ">
          <input
            className="border-2  px-3 lg:py-4 lg:pr-36"
            type="text"
            name=""
            id=""
            placeholder="Coupon code"
          />

          <button className=" texr-xs border-2 bg-[#DB4444] text-white  font-medium py-2 px-8   md:px-8 rounded  hover:text-white hover:bg-[#DB4444]  duration-500">
            Apply Coupon
          </button>
        </div>
        <div className="pt-4 md:pt-0">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
