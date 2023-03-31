import React from "react";
import {ShopCard} from "@/components/main/shop/shop-card/ShopCard";

const ShopListCards = (props) => {
  const {cards} = props;

  return (
    <div className="grid grid-cols-2  md:grid-cols-3 mx-8 mb-14 gap-x-8 gap-y-12 mt-14">
      {cards.map((card) =>
        <ShopCard key={card.id} card={card}/>,
      )}
    </div>
  );
};

export {ShopListCards};
