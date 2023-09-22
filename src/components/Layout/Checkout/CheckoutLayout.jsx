import React from "react";
import FormCheckout from "./FormCheckout";
import CheckoutPay from "./CheckoutPay";

const CheckoutLayout = () => {
  return (
    <div className="w-full h-full mt-28 md:pt-20 ">
      <div>
        <h2 className="font-['Poppins'] text-xs  md:text-base ">
          <span className="opacity-50">
            Account / My Account / Product / View Cart{" "}
          </span>
          <span className="opacity-100">/ Cart</span>
        </h2>
      </div>
      <div className="lg:flex justify-between">
        <div className="  lg:w-1/2">
          <FormCheckout></FormCheckout>
        </div>
        <div className="w-full lg:w-1/2 lg:pt-16">
          <CheckoutPay></CheckoutPay>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
