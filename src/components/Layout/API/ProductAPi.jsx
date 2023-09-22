import React, { useContext } from "react";
import { useRef, useEffect, useState } from "react";

// import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import CardApi from "./CardApi";
import CardDiscount from "./CardDiscount";
import { Cartcontext } from "../../Context/Context";
// import "./slider.css";

const ProductAPi = (props) => {
  const [ProductData, setProductData] = useState([]);
  const swiperRef = useRef();
  const sliderSettings = {
    300: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductData(data);
      });
  };
  useEffect(() => {
    fetchUserData();
    console.log(ProductData);
  }, []);
  const GlobalState = useContext(Cartcontext);
  const dispatch = GlobalState.dispatch;
  console.log(GlobalState);
  return (
    <div className="  w-full h-full pt-10  ">
      <div className="grid grid-cols-1 gap-5  justify-center pt-5 lg:pt-0">
        <div>
          {ProductData.length > 0 && (
            <Swiper
              breakpoints={sliderSettings}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {ProductData.map((product, index) => (
                // <li key={user.id}>{user.name}</li>
                <SwiperSlide key={index}>
                  <CardApi
                    id={product.id}
                    onClick={() => dispatch({ type: "ADD", payload: product })}
                    price={product.price}
                    image={product.image}
                    name={product.title}
                  ></CardApi>
                  {/* <CardDiscount price={product.price} image={product.image} name={product.title}></CardDiscount> */}
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ProductAPi;
