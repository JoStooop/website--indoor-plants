import React from "react";
import snake2 from "@/assets/snake2.jpg";
import collection from "@/assets/collection.jpg";
import petFriendly from "@/assets/petFriendly.jpg";
import succulents from "@/assets/succulents.jpg";
import {Link} from "react-router-dom";
import {SHOP_COLLECTIONS} from "@/utils/constsRoutes";

const collections = [
  {image: snake2, title: "Beginner Friendly", link: SHOP_COLLECTIONS.beginner.link},
  {image: collection, title: "Air Purifiers", link: SHOP_COLLECTIONS.airPurifying.link},
  {image: petFriendly, title: "Pet Friendly", link: SHOP_COLLECTIONS.petFriendly.link},
  {image: succulents, title: "Shop Succulents", link: SHOP_COLLECTIONS.succulents.link},
];

const FeaturedCollections = () => {
  return (
    <div className="w-full bg-white mb-20">
      <h1 className="pl-7 pt-14 pb-8 md:pb-20 font-display text-gray-800 text-3xl lg:text-6xl 2xl:w-3/4 m-auto">Featured Collections</h1>
      <ul className="flex flex-col md:flex-row space-y-12 md:space-y-0 m-auto text-center md:justify-around md:justify-between text-2xl 2xl:w-3/4 ">
        {collections.map((collection) =>
          <Link key={collection.link} to={collection.link}>
            <li className="space-y-6 w-3/4 md:w-full text-center m-auto cursor-pointer transform hover:scale-105 hover:text-red-500 duration-200">
              <img className="h-96 w-full shadow-xl" src={collection.image} alt=""/>
              <p className="font-body">{collection.title}</p>
            </li>
          </Link>,
        )}
      </ul>
    </div>
  );
};

export {FeaturedCollections};
