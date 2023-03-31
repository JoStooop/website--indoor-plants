import React from "react";
import {HomeTopBlock} from "@/components/main/home/home-top-block/HomeTopBlock";
import {Header} from "@/components/header/Header";
import {FeaturedCollections} from "@/components/common/featured-collections/FeaturedCollections";
import {AboutCollections} from "@/components/common/about-collections/AboutCollections";
import {CircleCards} from "@/components/common/circle-cards/CircleCards";
import {Footer} from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HomeTopBlock />
      <FeaturedCollections />
      <AboutCollections />
      <CircleCards />
      <Footer />
    </>
  );
};

export default HomePage;
