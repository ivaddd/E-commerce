import React from "react";
import { useState } from "react";
const ButtonNumber = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="mb-4 flex">
      <div className=" flex border">
        <button
          className="bg-gray-white px-3 py-2  border-[1px] border-black rounded-sm border-opacity-50"
          onClick={handleDecrease}
        >
          -
        </button>
        <div className="px-8 py-2 border-t border-b border-black  border-opacity-50 text-bold text-xl">
          {quantity}
        </div>
        <button
          className="bg-[#DB4444] px-3 py-2 border-[1px] border-black rounded border-opacity-50 "
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonNumber;
