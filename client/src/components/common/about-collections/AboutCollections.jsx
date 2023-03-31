import React from "react";
import windowImg from "@/assets/window.jpg";
import workImg from "@/assets/work.jpg";
import {Link} from "react-router-dom";
import {SHOP_COLLECTIONS, SHOP_ROUTE} from "@/utils/constsRoutes";


const ABOUT_COLLECTIONS = [
  {
    title: "Brighten Your Living Space",
    description:
      "Bring nature home with you. Styling your home with plants is an easy and inexpensive way to bring the most boring rooms to life.",
    link: SHOP_ROUTE,
    buttonText: "Shop Now",
    image: windowImg,
  },
  {
    title: "Breathe Better. Live Better.",
    description:
      "Healthy air quality should be a top priority. Plants release oxygen and remove toxins from the air so you can work, breathe, and sleep easier.",
    link: SHOP_COLLECTIONS.airPurifying.link,
    buttonText: "Shop Air Purifiers",
    image: workImg,
  },
];

const AboutCollections = () => {
  return (
    <div className="my-24 py-24 bg-gray-200 bg-opacity-40 w-full">
      <div className="2xl:w-3/4 m-auto space-y-16">
        {ABOUT_COLLECTIONS.map(({title, description, link, buttonText, image}, index) => (
          <div key={index} className={`flex justify-between w-full space-y-8 md:space-y-0 ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
            <div className="flex flex-col md:w-5/12 justify-center text-center md:text-left mx-4 md:mr-6 2xl:mr-0">
              <h2 className="font-display text-2xl md:text-4xl">{title}</h2>
              <p className="font-body text-lg md:text-xl tracking-wide break-words leading-loose">{description}</p>
              <Link to={link}>
                <button className="p-4 w-60 mt-10 md:w-56 bg-red-500 font-body rounded-md text-white text-sm md:text-xl transform duration-200 hover:-translate-y-1 hover:bg-red-600">{buttonText}</button>
              </Link>
            </div>
            <div className="flex justify-start md:w-1/2 mx-3 md:mx-0">
              <img src={image} alt="" className={`about-image ${index % 2 === 1 ? "reverse" : ""}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {AboutCollections};


