import React from "react";
import { useState } from "react";
import product from "../../../5c7f6eaadf370.jpeg.jpg";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="w-full h-full flex gap-36 ">
      <div class="max-w-sm rounded overflow-hidden   w-full ">
        <div className="relative overflow-hidden">
          <div className="bg-red-600 rounded top-0 text-white left-0  absolute ml-2 mt-2 h-5 w-11 flex items-center justify-center text-xs">
            {/* -{disc}% */}
            -40%
          </div>
          <div className="grid grid-cols-1 absolute  top-0 right-0">
            <button className="md:h-8  w-6 md:w-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-slate-200 text-sm md:text-xl pt-1 mr-2 mt-2">
              <span>
                <ion-icon
                  name="heart-outline"
                  className="w-8 h-8 pt-1"
                ></ion-icon>
              </span>
            </button>
            <Link to="/detail">
              <button className="md:h-8 w-6 md:w-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-slate-200 text-sm md:text-xl pt-1 mr-2 mt-2">
                <span>
                  <ion-icon
                    name="eye-outline"
                    className="w-8 h-8 pt-1"
                  ></ion-icon>
                </span>
              </button>
            </Link>
          </div>
          <img
            class="w-[100%] h-[100%] object-cover"
            src={product}
            alt="Sunset in the mountains"
          />
          <div class="absolute h-[60%] md:h-[40%] w-full bg-black flex items-center justify-center mb-5 text-start -bottom-12 group-hover:bottom-0  opacity-0 hover:opacity-100 transition-all duration-300 pb-5">
            <button class="bg-black text-white py-2 md:py-4 px-5 font-medium  text-sm md:text-lgfont-medium">
              Add to cart
            </button>
          </div>
          <div></div>
        </div>

        <div class="px-3 py-4">
          <div class="font-medium  font-text-sm lg:text-xl mb-2">
            Keyboard razer
          </div>
          <div className="flex gap-2">
            <p className=" text-[#DB4444]  text-sm font-medium md:text-lg  ">
              {props.price}
            </p>
            <p className="line-through  opacity-50  text-sm font-medium md:text-lg ">
              $400
            </p>
          </div>
          <div class="flex items-center pt-3">
            <svg
              class="md:w-5 md:h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="md:w-5 md:h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="md:w-5 md:h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="md:w-5 md:h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              class="md:w-5 md:h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="opacity-50 text-sm lg:text-lg">(90)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
