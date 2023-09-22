import React, { Fragment, useState } from "react";

import { SlBasket } from "react-icons/sl";
import Topheader from "./Topheader";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Nav = () => {
  const location = useLocation();
  const LocalStorageToken = localStorage.getItem("user");
  const [showDropdown, setshowDropdown] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("user");
    toast.success("Logout success");

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  let Links = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "#about" },
    { name: "About", link: "#contact" },
    { name: "Sign up", link: "/login" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="border-2 w-full fixed   top-0 left-0 z-50">
        <div>
          <Topheader></Topheader>
        </div>
        <div className="md:flex items-center justify-between bg-white  pt-2 lg:pt-6 pb-2 md:px-20 px-5">
          <div
            className="   font-bold text-xl  cursor-pointer flex items-center  lg:pl-10
    text-gray-800"
          >
            Exclusive
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-5 bottom-0 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <div className="w-[26%]  ">
            <ul
              className={`   -z-20 md:flex md:items-center  md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
                open ? "left-0" : " left-[120%]"
              }`}
            >
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="  font-semibold hover:underline transition-all duration-400 md:ml-8 text-sm lg:text-base md:pl-1 md:my-0 my-7 "
                >
                  <Link
                    to={link.link}
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <div className="relative flex sm:hidden pb-3 lg:pb-0">
                <span className=" absolute  top-0 right-44 ml-4 mt-1  bottom-10 text-lg ">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="What are you looking for?"
                  className=" border-2 form-input h-8 w-[100%]lg:w-1/2 px-8 lg:px-0 rounded-md"
                ></input>
              </div>
              <div className="pt-2 lg:pt-4">
                <span className=" text-xl sm:hidden lg:pt-0">
                  <ion-icon name="heart-outline"></ion-icon>
                </span>
                <span className="text-xl pt-5 sm:hidden">
                  <Link to="/cart">
                    <SlBasket />
                  </Link>
                </span>
              </div>
              <div className="pt-2 pl-[1px]  lg:pt-4">
                {location.pathname === "" ? (
                  <span className="text-xl sm:hidden">
                    <ion-icon name="person-outline"></ion-icon>
                  </span>
                ) : null}
              </div>
            </ul>
          </div>
          <div>
            <div className="flex pr-14">
              <div className="relative  hidden md:block ">
                <span className=" absolute top-2 right-1 text-2xl  ">
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="what are you looking for?"
                  className="bg-[#F5F5F5] text-sm form-input h-8 w-1/2 lg:w-full px-8 lg:px-20 py-5 rounded-sm"
                ></input>
              </div>
              <span className="px-5 text-3xl hidden md:block pt-1 ">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
              <span className="text-3xl pt-1 hidden md:block">
                <Link to="/cart">
                  <SlBasket />
                </Link>
              </span>
              {LocalStorageToken !== null ? (
                <div className="relative">
                  <button onClick={() => setshowDropdown(!showDropdown)}>
                    <span className=" px-5 text-3xl pt-1 hidden md:block ">
                      <ion-icon name="person-outline"></ion-icon>
                    </span>
                  </button>
                  <div className={showDropdown ? "opacity-100" : "opacity-0"}>
                    <div className=" backdrop-blur-md   text-white  left-[-164px] top-12 hidden  w-[250px] h-52 rounded-lg bg-gray-500 font-semibold text-sm shadow-xl bg-opacity-50 px-10 lg:flex flex-col   items-start absolute">
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="person-outline"></ion-icon>
                        </div>
                        <button>Manage My Account</button>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="bag-handle-outline"></ion-icon>
                        </div>
                        <button>My Order</button>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="trash-bin-outline"></ion-icon>
                        </div>
                        <button>My Cancellations</button>
                      </div>
                      <div className="flex gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="star-outline"></ion-icon>
                        </div>
                        <button>My Reviews</button>
                      </div>
                      <div className="flex  gap-3">
                        <div className="text-2xl pt-2">
                          <ion-icon name="log-out-outline"></ion-icon>
                        </div>
                        <button onClick={() => logoutHandler()}>Logout</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
