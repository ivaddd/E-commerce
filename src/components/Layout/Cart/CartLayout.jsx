import React from "react";
import Button from "../../UI/Button";
import CartProduct from "./CartProduct";
import Footer from "../../UI/Footer";

const CartLayout = () => {
  return (
    <div className="w-full h-full mt-28 md:pt-20">
      <div>
        <h2 className="font-Medium text-sm  md:text-base ">
          <span className="opacity-50">Home </span>
          <span className="opacity-100">/ Cart</span>
        </h2>
      </div>
      <div className="lg:pt-16">
        <CartProduct></CartProduct>
      </div>
    </div>
  );
};

export default CartLayout;
