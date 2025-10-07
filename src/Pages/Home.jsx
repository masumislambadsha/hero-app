import React from "react";
import appStore from '../assets/appstore.png'
import playStore from '../assets/playstore.png'
import heroImg from '../assets/hero.png'

const HomePage = () => {
  return (
    <div className="my-[80px] ">
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
      <div className="space-x-4 my-10 mx-auto w-full text-center ">
        <button className="btn bg-transparent border-1 border-gray-300 font-bold text-[#001931] px-6 py-6  "><img src={playStore} alt="" /> Google Play</button>
        <button className="btn bg-transparent border-1 border-gray-300 font-bold text-[#001931] px-6 py-6  "><img src={appStore} alt="" />  App Store</button>
      </div>
      <img src={heroImg} className="mx-auto" alt="" />
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium mb-2 opacity-90">Total Downloads</p>
            <h3 className="text-5xl md:text-6xl font-bold mb-2">29.6M</h3>
            <p className="text-sm opacity-80">21% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-medium mb-2 opacity-90">Total Reviews</p>
            <h3 className="text-5xl md:text-6xl font-bold mb-2">906K</h3>
            <p className="text-sm opacity-80">46% More Than Last Month</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm font-medium mb-2 opacity-90">Active Apps</p>
            <h3 className="text-5xl md:text-6xl font-bold mb-2">132+</h3>
            <p className="text-sm opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </div>
       <div className="text-center mt-[80px]">
        <h3 className="font-bold text-5xl text-[#001931]  ">Trending Apps</h3>
        <p className="font-normal text-lg text-[#627382] ">Explore All Trending Apps on the Market developed by us </p>
       </div>
    </div>
  );
};

export default HomePage;
