import React from "react";
import fiddle from "@/assets/fiddle.jpg";

const ShopTopBlock = () => {
  return (
    <div className={"bg-center md:bg-cover bg-fixed bg-no-repeat h-[600px] md:w-full"}
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${fiddle})`}}>
      <h1 className="flex text-3xl md:text-5xl h-full m-auto md:ml-auto md:mt-auto w-4/5 md:w-1/2
           text-white font-display justify-center items-center">
        A Plant for Every Space
      </h1>
    </div>
  );
};

export {ShopTopBlock};
