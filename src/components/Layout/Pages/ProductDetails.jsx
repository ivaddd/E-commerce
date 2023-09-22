import React from "react";
import ProductDet_Layout from "../Layout/ProductDetail/ProductDet_Layout";
import { Fragment } from "react";
import Nav from "../UI/Nav";
import Footer from "../UI/Footer";

const ProductDetail = () => {
  return (
    <Fragment>
      <div className="h-full w-full pl-[8%] pr-[8%]">
        <Nav></Nav>
        <ProductDet_Layout></ProductDet_Layout>
      </div>

      <Footer></Footer>
    </Fragment>
  );
};

export default ProductDetail;
