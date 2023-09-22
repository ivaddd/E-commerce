import React from "react";
import { useContext } from "react";
import { Cartcontext } from "../../Context/Context";
import { useState } from "react";
const CartProductItems = (props) => {
  const [quantity, setquantity] = useState("");
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;
  // const dispatch = GlobalState.dispatch;

  if (state.length === 0) {
    return <p className="text-center">No data cart</p>;
  }
  return (
    <div>
      {state.map((item, index) => {
        return (
          <div
            key={index}
            className=" text-sm md:text-base font-Medium flex  justify-between w-full px-3 shadow py-2 text-center items-center"
          >
            <div className=" flex flex-col  lg:flex-row md:items-center w-3/12  pl-3  gap-2 md:lg-0  ">
              <img
                className="bg-cover w-[90%] md:w-[30%]"
                src={item.image}
                alt=""
              />
              <p className="md:pl-4 text-xs text-left ">{item.title}</p>
            </div>
            <div className=" w-3/12  ">
              <h1>${item.price}</h1>
            </div>
            <div className="w-3/12 ">
              <div>
                <input
                  onChange={(e) => setquantity(e.target.value)}
                  type="number"
                  id="quantity"
                  min="1"
                  max="5"
                  className="border-2  border-black  opacity-50 rounded-md px-2 w-11/12 md:w-1/5"
                />
              </div>
            </div>
            <div className="w-3/12 ">
              <h1>${item.price * quantity}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProductItems;
