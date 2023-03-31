import React from "react";
import {Link} from "react-router-dom";
import {SHOP_ROUTE} from "@/utils/constsRoutes";

const ShopCard = (props) => {
  const {card, collection} = props;

  return (
    <div>
      <Link to={`${SHOP_ROUTE}/${collection ? collection : "collection"}/${card.name}`}>
        <img className="filter cursor-pointer rounded-md drop-shadow-md hover:opacity-75" src={card.img} alt=""/>
        <div className="font-body flex flex-col-reverse md:flex-row md:justify-between text-base md:text-xl py-3">
          <p>{card.name}</p>
          <p>${card.price}</p>
        </div>
      </Link>
    </div>
  );
};

export {ShopCard};
