import React, { Fragment } from "react";
import CardProduct from "../../UI/CardProduct";
// import ps1 from "../../../asset/ps1.png";
// import ps2 from "../../../asset/ps2.png";
// import ps3 from "../../../asset/ps3.png";
// import ps4 from "../../../asset/ps4.png";
import { useParams } from "react-router";
// import heroPs from "../../../asset/image 63.png";
import ProductChekout from "./ProductChekout";
import ProductCategory from "./ProductSlider";
import { useEffect, useState } from "react";

const ProductDet_Layout = () => {
  const [ProductDetail, setProductDetail] = useState("");
  const { productId } = useParams();
  console.log(productId);
  const fetchUserData = () => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductDetail(data);
      });
  };
  useEffect(() => {
    fetchUserData();
  }, [productId]);

  return (
    <Fragment>
      <div className="w-full h-full mt-28 md:pt-20 ">
        <div>
          <h2 className="font-medium text-xs  md:text-base ">
            <span className="opacity-50">Account / Gaming </span>
            <span className="opacity-100">/{ProductDetail.title}</span>
          </h2>
        </div>
        <div className=" pt-4 lg:pt-14 flex flex-col lg:flex-row">
          <div className="flex flex-row  gap-2 lg:gap-6 ">
            <div className="flex flex-col gap-1 lg:gap-8">
              <CardProduct>
                <img src={ProductDetail.image} alt="" />
              </CardProduct>
              <CardProduct>
                <img src={ProductDetail.image} alt="" />
              </CardProduct>
              <CardProduct>
                <img src={ProductDetail.image} alt="" />
              </CardProduct>
              <CardProduct>
                <img src={ProductDetail.image} alt="" />
              </CardProduct>
            </div>
            <div className="bg-[#F5F5F5] flex items-center w-[500px] ">
              <img src={ProductDetail.image} alt="" className="px-8" />
            </div>
          </div>
          <div className="lg:ml-20">
            <ProductChekout
              text={ProductDetail.description}
              price={ProductDetail.price}
              title={ProductDetail.title}
            ></ProductChekout>
          </div>
        </div>
        <div className="lg:mt-24">
          <ProductCategory></ProductCategory>
        </div>
      </div>
      ;
      {/* //   <div>
      //     <h2 className="font-['Poppins'] text-xs  md:text-base ">
      //       <span className="opacity-50">Account / Gaming </span>
      //       <span className="opacity-100">/ Havic HV G-92 Gamepad</span>
      //     </h2>
      //   </div>
      //   <div className=" pt-4 lg:pt-14 flex flex-col lg:flex-row">
      //     <div className="flex flex-row  gap-2 lg:gap-6 ">
      //       <div className="flex flex-col gap-1 lg:gap-6">
      //         <CardProduct>
      //           <img src={ps1} alt="" />
      //         </CardProduct>
      //         <CardProduct>
      //           <img src={ps2} alt="" />
      //         </CardProduct>
      //         <CardProduct>
      //           <img src={ps3} alt="" />
      //         </CardProduct>
      //         <CardProduct>
      //           <img src={ps4} alt="" />
      //         </CardProduct>
      //       </div>
      //       <div className="bg-[#F5F5F5] flex items-center w-[500px] ">
      //         <img src={heroPs} alt="" className="px-8" />
      //       </div>
      //     </div>
      //     <div className="lg:ml-20">
      //       <ProductChekout></ProductChekout>
      //     </div>
      //   </div>
      //   <div className="lg:mt-24">
      //     <ProductCategory></ProductCategory>
      //   </div>
      // </div> */}
    </Fragment>
  );
};

export default ProductDet_Layout;
