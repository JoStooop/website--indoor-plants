import React from "react";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import {useSelector} from "react-redux";
import {ShopTopBlock} from "@/components/main/shop/shop-top-block/ShopTopBlock";
import {ShopListCards} from "@/components/main/shop/shop-list-cards/ShopListCards";
import {ShopListNav} from "@/components/main/shop/shop-list-nav/ShopListNav";
import {getFlowers} from "@/redux/reducers/flowers/flowersSelector";

const ShopPage = () => {
  const flowers = useSelector(getFlowers);

  return (
    <>
      <Header/>
      <ShopTopBlock/>
      <ShopListNav/>
      <ShopListCards cards={flowers}/>
      <Footer/>
    </>
  );
};

export default ShopPage;
