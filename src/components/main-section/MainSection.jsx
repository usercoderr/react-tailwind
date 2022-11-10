import React from "react";
import mainImage from "../../images/image-hero-desktop.png";
import mainImageMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as Databiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import { Button } from "../button/Button";

export const MainSection = () => {
  return (
    <section className="flex w-full flex-col xl:flex-row mt-6 h-screen justify-around">
      <div className="relative order-2 xl:order-1 w-full xl:w-2/4  text-center  xl:text-left mt-6 xl:mt-6">
        <h1 className="text-3xl xl:text-8xl mt-6 font-black xl:whitespace-pre-line">{`Make\n remote work`}</h1>
        <p className="text-medium-gray whitespace-pre-line text-lg my-12">{`Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Architecto dolore quis alias iusto facilis cumque rem eaque!\n Delectus, veritatis minima.`}</p>
        <Button isFilled={true}>Learn More</Button>
        <div className="flex justify-around xl:absolute bottom-2 w-full ">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className=" hidden xl:flex w-2/4 mt-12 justify-end xl:order-2">
        <img src={mainImage} alt="men" />
      </div>
      <div className=" flex items-center xl:hidden w-full mt-12 justify-center mb-1 order-1">
        <img src={mainImageMobile} alt="men" />
      </div>
    </section>
  );
};
