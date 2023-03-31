import React from "react";
import homeImg from "@/assets/bg-home.jpeg";
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "@/utils/constsRoutes";

const HomeTopBlock = () => {
  return (
    <div className="bg-center bg-cover bg-fixed bg-no-repeat h-screen md:w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${homeImg})`,
      }}
    >
      <div className="flex text-left flex-col h-full px-4 md:ml-auto md:mt-auto w-full md:w-1/2 justify-center text-white font-display space-y-4 md:space-y-6">
        <p className="text-3xl md:text-5xl">
          Beautiful Plants <br /> Right to your Doorstep
        </p>
        <p className="font-light text-lg sm:text-2xl">
          Shopping for Plants Has Never Been Easier
        </p>
        <Link to={SHOP_ROUTE} className="inline-block">
          <button className="bg-red-500 font-body rounded-md text-lg sm:text-2xl p-2 sm:p-4 w-32 sm:w-48 transform duration-200 hover:-translate-y-1 hover:bg-red-600">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export {HomeTopBlock};
