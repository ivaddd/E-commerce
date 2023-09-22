import React from "react";
import { Fragment } from "react";
import Nav from "../UI/Nav";
import Footer from "../UI/Footer";
import LoginLayout from "../Layout/SignUP/LoginLayout";

const Login = () => {
  return (
    <Fragment>
      <div className="h-full w-full pl-[] pr-[8%]">
        <Nav></Nav>
        <LoginLayout></LoginLayout>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default Login;
