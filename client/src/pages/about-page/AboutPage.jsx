import React from "react";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import {AboutTopBlock} from "@/components/main/about/about-top-block/AboutTopBlock";
import {AboutInfo} from "@/components/main/about/about-info/AboutInfo";

const AboutPage = () => {
  return (
    <>
      <Header/>
      <AboutTopBlock/>
      <AboutInfo />
      <Footer/>
    </>
  );
};

export default AboutPage;
