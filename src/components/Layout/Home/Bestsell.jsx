import React from "react";
import Card from "./Card";
import Button from "../../UI/Button";

const Bestsell = () => {
  return (
    <div className="  pt-10 lg:pt-10 w-full h-full lg:pb- ">
      <div className="flex items-center w-full gap-3 lg:pb-12">
        <div className="h-10 w-5 bg-red-600 rounded-md "></div>
        <p className="text-sm lg:text-lg font-bold  text-[#DB4444]">
          {" "}
          This month
        </p>
      </div>
      <div className="w-full h-full">
        <div className=" flex flex-row items-center  lg:items-center justify-between lg:pb-5">
          <div className="flex items-center  ">
            <h2 className=" pt-2 lg:pt-0 lg:pl-0 text-lg lg:text-3xl font-semibold font-semibold  tracking-wider">
              Best Selling Products
            </h2>
          </div>

          <div className=" lg:gap-4   lg:pr-10 py-5">
            <Button>View all</Button>
          </div>
        </div>
        {/* <div className=" lg:gap-4  pt-5 pb-5 lg:pb-0 lg:pt-0 lg:hidden lg:pr-10 flex w-full justify-center ">
          <Button>View all</Button>
        </div> */}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-4 lg:pt-5 lg:gap-10">
        <Card price="$200"></Card>
        <Card price="$200"></Card>
        <Card price="$200"></Card>
        <Card price="$200"></Card>
      </div>
    </div>
  );
};

export default Bestsell;
