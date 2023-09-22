import React, { Fragment } from "react";
import Nav from "../UI/Nav";
import Hero from "../Layout/Home/Hero";
import FlashSale from "../Layout/Home/FlashSaleV2";
import Category from "../Layout/Home/Category";
// import Bestsell from "../Layout/Home/BestSellV2";
import Footer from "../UI/Footer";
import Bestsell from "../Layout/Home/BestsellV2";

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
