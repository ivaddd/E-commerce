import React from "react";
import Start from "../../UI/Start";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineLoop } from "react-icons/md";
import { useState } from "react";
import ButtonNumber from "./ButtonNumber";
import Button from "../../UI/Button";

const ProductChekout = (props) => {
  return (
    <div>
      <div className="font-inter font-semibold text-lg lg:text-2xl  pt-5 lg:pt-0">
        <h1 className="text-2xl pb-2">{props.title}</h1>
      </div>
      <div className="flex lg:gap-5 lg:pt-5">
        <Start></Start>
        <h1 className="font-medium">|</h1>
        <span className="text-[#00FF66] "> In Stock</span>
      </div>
      <div>
        <h1 className=" font-inter font-normal text-xl pt-3">${props.price}</h1>
      </div>
      <div className="font-medium lg:w-[80%] text-justify border-b-[1px] border-black pb-2 lg:pb-8 lg:text-sm pr-2 pt-6">
        {props.text}
        {/* PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive. */}
      </div>
      <div className="flex gap-3 lg:pt-5 pt-2">
        <h1 className="font-inter text-lg">Colors :</h1>
        <div className="flex gap-2  accent-[#000000] ">
          <input type="radio" id="color" name="color" className="w-4" />
          <input type="radio" id="color" name="color" className="w-4" />
        </div>
      </div>
      <div className="flex gap-3 pt-5 ">
        <h1 className="font-inter text-lg">Size:</h1>
        <div className="flex gap-2   ">
          <div className=" flex items-center w-8 py-1 justify-center border-2 rounded-lg  border-black  border-opacity-50">
            <input type="radio" id="xs" name="color" className="w-3 hidden  " />
            <label htmlFor="xs">XS</label>
          </div>
          <div className=" flex items-center w-8 justify-center border-2  rounded-lg  border-black  border-opacity-50">
            <input
              type="radio"
              id="s"
              name="color"
              className="w-3 hidden checked:bg-green-500  "
            />
            <label htmlFor="xs">S</label>
          </div>
          <div className=" flex items-center w-8 justify-center border-2  rounded-lg border-black  border-opacity-50 ">
            <input
              type="radio"
              id="m"
              name="color"
              className="w-3 hidden checked:bg-blue-500 "
            />
            <label htmlFor="xs">M</label>
          </div>
          <div className=" flex items-center w-8 justify-center border-2  rounded-lg  border-black  border-opacity-50">
            <input
              type="radio"
              id="l"
              name="color"
              className="w-3 hidden checked:bg-blue-500 "
            />
            <label htmlFor="xs">L</label>
          </div>
          <div className=" flex items-center w-8 justify-center border-2  rounded-lg  border-black   border-opacity-50 ">
            <input
              type="radio"
              id="xl"
              name="color"
              className="w-3 hidden checked:bg-blue-500  text-indigo-600 bg-indigo-100 border-indigo-200 focus:ring-indigo-300"
            />
            <label htmlFor="xs">Xl</label>
          </div>

          <input type="radio" id="color" name="color" className="w-3" />
        </div>
      </div>
      <div className="lg:pt-8 pt-5 flex lg:gap-6 gap-2">
        <ButtonNumber></ButtonNumber>
        <button className="bg-[#DB4444]  text-white font-sans   h-full w-32 py-3 lg:w-40 lg:py-3 rounded  hover:bg-indigo-400  duration-500">
          Buy Now
        </button>
        <div className=" flex items-center  w-10 lg:w-12  py-3  h-full justify-center border-2  text-sm lg:text-xl border-black rounded-md">
          <ion-icon name="heart-outline"></ion-icon>
        </div>
      </div>

      <div className="lg:pt-6 pt-4">
        <div className="flex flex-col  lg:w-[80%]">
          <div className="flex  border-2 border-b-0">
            <div className=" flex items-center text-3xl px-2">
              <TbTruckDelivery />
            </div>
            <div className="lg:pl-1 py-5">
              <h1 className=" font-medium text-base">Free Delivery</h1>
              <h1 className=" font-medium text-xs">
                Enter your postal code for Delivery Availability
              </h1>
            </div>
          </div>
          <div className="flex pt border-2">
            <div className=" flex items-center text-3xl px-2">
              <MdOutlineLoop />
            </div>
            <div className="lg:pl-1 py-5">
              <h1 className=" font-medium text-base">Return Delivery</h1>
              <h1 className=" font-medium text-xs">
                Free 30 Days Delivery Returns. Details
              </h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductChekout;
