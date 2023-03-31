import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Header} from "@/components/header/Header";
import {ShopTopBlock} from "@/components/main/shop/shop-top-block/ShopTopBlock";
import {ShopListNav} from "@/components/main/shop/shop-list-nav/ShopListNav";
import {Footer} from "@/components/footer/Footer";
import {
  ShopCollectionListCards,
} from "@/components/main/shop-collection/shop-collection-list-cards/ShopCollectionListCards";
import {getFlowers} from "@/redux/reducers/flowers/flowersSelector";

const filterOptions = {
  airPurifying: (item) => item.purify,
  beginner: (item) => item.beginner,
  petFriendly: (item) => item.petFriendly,
  succulents: (item) => item.succulent,
};
const ShopCollectionPage = () => {
  const {collection} = useParams();

  const flowers = useSelector(getFlowers);

  const currentPlantCollection = filterOptions[collection] ?
    flowers.filter(filterOptions[collection]) :
    flowers;

  return (
    <div className="h-screen relative">
      <Header/>
      <ShopTopBlock />
      <ShopListNav />
      <ShopCollectionListCards cards={currentPlantCollection} collection={collection}/>
      <Footer/>
    </div>
  );
};

export default ShopCollectionPage;
