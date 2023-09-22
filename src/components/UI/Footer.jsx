import React from "react";
import QR from "../../Asset/Qrcode.png";
import PlayStore from "../../Asset/GooglePlay.png";
import AppStore from "../../Asset/appstore.png";
import Facebook from "../../Asset/fb.png";
import Twitter from "../../Asset/tw.png";
import Instagram from "../../Asset/ig.png";
import Linkedin from "../../Asset/in.png";
import Copyr from "../../Asset/co.png";

function Footer() {
  return (
    <div className="w-full h-70 bg-black text-slate-200 font-sans mt-32 overflow-auto  ">
      <div className="lg:flex p-14 gap-5 ">
        <div className="lg:w-1/5">
          <h1 className="text-2xl font-semibold mb-5">Exclusive</h1>
          <a href="# " className="text-xl font-semibold  mb-5">
            Subscribe
          </a>
          <p className="mt-1 md:mt-5 ">
            Get 10% off your first order
            <div className="w-48 h-full bg-black border-2 border-slate-200 rounded flex items-center justify-start mt-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black py-2 pl-2 w-[160px] text-white text-base font-normal "
              />
              <div className="text-lg md:text-xl mr-2">
                <ion-icon name="send-outline" />
              </div>
            </div>
          </p>
        </div>
        <div className="lg:w-1/5 border-t md:border-none mt-5 md:mt-0">
          <h1 className="text-2xl font-semibold mb-5 mt-5 md:mt-0">Support</h1>
          <p className="mb-3">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mb-3">exclusive@gmail.com</p>
          <p className="mb-3">+88015-88888-9999</p>
        </div>

        <div className="lg:w-1/5 border-t md:border-none mt-5 md:mt-0">
          <h1 className="text-2xl font-semibold mb-5 mt-5 md:mt-0">Account</h1>
          <div className="grid grid-cols-2 lg:flex lg:flex-col">
            <a href="# " className="mb-3">
              My Account
            </a>
            <a href="# " className="mb-3">
              Login / register
            </a>
            <a href="# " className="mb-3">
              Cart
            </a>
            <a href="# " className="mb-3">
              Whishlist
            </a>
            <a href="# " className="mb-3">
              Shop
            </a>
          </div>
        </div>

        <div className="lg:w-1/5 border-t md:border-none mt-5 md:mt-0">
          <h1 className="text-2xl font-semibold mb-5 mt-5 md:mt-0">
            Quick Link
          </h1>
          <div className="grid grid-cols-2 lg:flex lg:flex-col">
            <a href="# " className="mb-3">
              Privacy Policy
            </a>
            <a href="# " className="mb-3">
              Terms Of Use
            </a>
            <a href="# " className="mb-3">
              FAQ
            </a>
            <a href="# " className="mb-3">
              Contact
            </a>
          </div>
        </div>

        <div className="lg:w-1/5 border-t md:border-none mt-5 md:mt-0">
          <h1 className="text-2xl font-semibold mb-5 mt-5 md:mt-0">
            Download App
          </h1>
          <p>Save $3 with App New User Only</p>

          <div className="flex mt-2 mb-5">
            <div className="w-1/2">
              <img src={QR} alt="" />
            </div>
            <div className="w-1/2 flex-none m-2 ">
              <img src={PlayStore} alt="" className="mb-2" />
              <img src={AppStore} alt="" />
            </div>
          </div>

          <div className="w-40 pr-3 h-6  flex justify-center lg:justify-between items-center">
            <img src={Facebook} alt="" className="px-3" />
            <img src={Twitter} alt="" className="px-3" />
            <img src={Instagram} alt="" className="px-3" />
            <img src={Linkedin} alt="" className="px-3" />
          </div>
        </div>
      </div>
      <div className="flex opacity-50 justify-center mb-2 border-t py-3">
        <img src={Copyr} alt="" className="w-4 h-4 mr-1" />
        <p className="font-sans  text-xs ">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
