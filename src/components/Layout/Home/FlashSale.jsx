import React from "react";
import Card from "./Card";
import Button from "../../UI/Button";

const FlashSale = () => {
  return (
    <div className=" pt-10 lg:pt-32 w-full h-full ">
      <div className="flex items-center w-full gap-3">
        <div className="h-10 w-5 bg-red-600 rounded-md "></div>
        <p className=" text-sm lg:text-lg font-semibold  text-[#DB4444] ">
          {" "}
          Today's
        </p>
      </div>
      <div className="w-full h-full">
        <div className="pt-10 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between ">
          <div className="flex items-center  gap-8 lg:gap-36 ">
            <h2 className=" pl-2 lg:pl-0 text-sm lg:text-3xl font-semibold   tracking-wider">
              Flash Sales
            </h2>
            <div>
              <div className="grid  grid-flow-col gap-1 lg:gap-4 text-center auto-cols-max font-bold">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <h1 className="text-left">Days</h1>
                  <span className="countdown  text-sm lg:text-4xl">
                    <span>03</span>
                  </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <h1 className="text-left">Hours</h1>
                  <span className="countdown  text-sm lg:text-4xl">
                    <div>
                      <span>23</span>
                    </div>
                  </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <h1 className="text-left">Minutes</h1>
                  <span className="countdown  text-sm lg:text-4xl">
                    <span>19</span>
                  </span>
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <h1 className="text-left">Sec</h1>
                  <span className="countdown lg:text-4xl">
                    <span>56</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden gap-4   md:flex ">
            <button className="h-10 w-10 rounded-full   bg-[#F5F5F5] ">
              <span>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </span>
            </button>
            <button className="h-10 w-10 rounded-full  bg-[#F5F5F5]">
              <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="gap-4 pt-5 flex justify-center pb-4 md:hidden ">
        <button className="h-10 w-10 rounded-full  bg-[#F5F5F5]  ">
          <span>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
        </button>
        <button className="h-10 w-10 rounded-full bg-[#F5F5F5] ">
          <span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center lg:pt-5 lg:gap-10 gap-4">
        <Card price="$200"></Card>
        <Card price="$300"></Card>
        <Card price="$200"></Card>
        <Card price="$100"></Card>
      </div>
      <div className="pt-10 flex justify-center">
        <Button>View all product</Button>
      </div>
    </div>
  );
};

export default FlashSale;
