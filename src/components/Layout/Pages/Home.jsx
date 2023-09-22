import React, { Fragment } from "react";
import Nav from "../UI/Nav";
import Hero from "../Home/Hero";
import FlashSale from "../Home/FlashSaleV2";
import Category from "../Home/Category";
import Footer from "../UI/Footer";
import Bestsell from "../Home/BestsellV2";

const Home = () => {
  return (
    <Fragment>
      <div className="w-full h-full   pl-[8%] pr-[8%]">
        <Nav></Nav>
        <Hero></Hero>
        <FlashSale></FlashSale>
        <Category></Category>
        <Bestsell></Bestsell>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Home;
