import React from "react";
// import {Link} from "react-router-dom";
import ButtonCart from "../../UI/ButtonCart";
import Coupon from "../Cart/Coupon";
import image from "../../../5c7f6eaadf370.jpeg.jpg";
import bank from "../../../Asset/payment.png";
const CheckoutPay = () => {
  return (
    <div className=" w-full lg:w-[80%] pt-3 py-3 font-medium rounded-sm ">
      <div className=" flex flex-col gap-3  md:py-3">
        <div className="flex justify-between  py-1 md:py-2 items-center">
          <div className="flex items-center gap-2">
            <img className="w-[25%] lg:w-[15%]" src={image} alt="" />
            <p>keyboard</p>
          </div>
          <h1>$1750</h1>
        </div>
        <div className="flex justify-between  py-1 md:py-2 items-center">
          <div className="flex items-center gap-2">
            <img className="w-[25%] lg:w-[15%]" src={image} alt="" />
            <p>keyboard</p>
          </div>
          <h1>$1750</h1>
        </div>
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
          <h1>$3500</h1>
        </div>
        <div className="flex justify-between  md:py-2">
          <input
            type="radio"
            name="payment"
            id="pay"
            className="w-5 accent-[#000000]"
          />
          <img src={bank} alt="" />
        </div>
        <div className="flex gap-3  md:py-2">
          <input
            type="radio"
            name="payment"
            id="pay"
            className="w-5 accent-[#000000]"
          />
          <p>Cash On Delivery</p>
        </div>
      </div>
      <div className=" pt-3    ">
        <Coupon></Coupon>
        <div className="pt-5 lg:pt-3">
          <ButtonCart warna="bg-[#DB4444]" text="text-white">
            Procees to checkout
          </ButtonCart>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPay;
