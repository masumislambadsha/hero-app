import React from "react";
import appStore from '../assets/appstore.png'
import playStore from '../assets/playstore.png'
import heroImg from '../assets/hero.png'

const HomePage = () => {
  return (
    <div className="my-[80px] container mx-auto">
      <h1 className="text-[#192f45]  text-6xl text-center mx-auto font-bold md:w-[530px] leading-20">
        We Build {" "}
        <span
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
             bg-clip-text text-transparent"
        >
              Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382] mt-5  w-[750px] mx-auto text-center">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="space-x-4 my-10 mx-auto w-full text-center my-5">
        <button className="btn bg-transparent border-1 border-gray-300 font-bold text-[#001931] px-6 py-6  "><img src={playStore} alt="" /> Google Play</button>
        <button className="btn bg-transparent border-1 border-gray-300 font-bold text-[#001931] px-6 py-6  "><img src={appStore} alt="" />  App Store</button>
      </div>
      <img src={heroImg} className="mx-auto" alt="" />
    </div>
  );
};

export default HomePage;
