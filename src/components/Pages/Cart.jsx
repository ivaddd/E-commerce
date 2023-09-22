import React, { Fragment } from "react";
import Nav from "../UI/Nav";
import CartLayout from "../Layout/Cart/CartLayout";
import Footer from "../UI/Footer";

const Cart = () => {
  return (
    <Fragment>
      <div className="h-full w-full pl-[6%] pr-[6%]">
        <Nav></Nav>
        <CartLayout></CartLayout>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Cart;
