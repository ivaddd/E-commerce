import React, { Fragment } from "react";
import Nav from "../UI/Nav";
import Footer from "../UI/Footer";
import CheckoutLayout from "../Layout/Checkout/CheckoutLayout";

const CheckOut = () => {
  return (
    <Fragment>
      <div className="h-full w-full pl-[6%] pr-[6%]">
        <Nav></Nav>
        <CheckoutLayout></CheckoutLayout>
      </div>

      <Footer></Footer>
    </Fragment>
  );
};

export default CheckOut;
