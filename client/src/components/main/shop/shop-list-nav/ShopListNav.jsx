import React from "react";
import {Link, useParams} from "react-router-dom";
import {shopListNav} from "@/utils/constsShopListNav";
import {SHOP_COLLECTIONS, SHOP_ROUTE} from "@/utils/constsRoutes";

const ShopListNav = () => {
  const {collection} = useParams();

  const {title, description} = shopListNav[collection] ?? {};

  const collections = [
    {name: "Air Purifying", link: SHOP_COLLECTIONS.airPurifying.link, active: collection === SHOP_COLLECTIONS.airPurifying.name},
    {name: "Beginner Friendly", link: SHOP_COLLECTIONS.beginner.link, active: collection === SHOP_COLLECTIONS.beginner.name},
    {name: "Pet Friendly", link: SHOP_COLLECTIONS.petFriendly.link, active: collection === SHOP_COLLECTIONS.petFriendly.name},
    {name: "Succulents", link: SHOP_COLLECTIONS.succulents.link, active: collection === SHOP_COLLECTIONS.succulents.name},
  ];

  return (
    <div className="overflow-hidden">
      <div className="font-display mt-12 mb-2 text-3xl md:text-4xl font-medium text-center text-gray-700">
        <h1>{collection ? title : "Bloom's Collection"}</h1>
      </div>
      <div className="font-body text-gray-600 text-center">
        {collection ?
          description :
          "Shopping for plants has never been easier"}
      </div>
      <div className="flex flex-wrap space-y-2 md:space-y-0 space-x-2 md:space-x-4 w-full items-end
            justify-center md:mt-6 mb-6 md:mb-12 font-body text-gray-700">
        <Link to={SHOP_ROUTE} className={collection ? "" : "hidden"}>
          <button className="p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">Shop All</button>
        </Link>
        {collections.map((el) => (
          <Link to={el.link} key={el.name} className={el.active ? "hidden" : ""}>
            <button className="p-2 border-2 rounded-lg bg-gray-200 bg-opacity-40 hover:bg-gray-300 hover:bg-opacity-40">{el.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export {ShopListNav};
