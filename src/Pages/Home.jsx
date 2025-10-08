import React from "react";
import appStore from "../assets/appstore.png";
import playStore from "../assets/playstore.png";
import heroImg from "../assets/hero.png";
import AppCard from "../compoenets/HomeApps";
import { Link } from "react-router";
import LoadingSpinner from "../compoenets/LoadingSpinner";
import useAllAppsData from "../Hooks/useAllAppsData";

const HomePage = () => {
  const { datas, loading } = useAllAppsData();

  const homeData = datas.slice(16, 24);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="my-[80px] ">
      <h1 className="text-[#192f45]  text-6xl text-center mx-auto font-bold md:w-[530px] leading-20">
        We Build{" "}
        <span
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
             bg-clip-text text-transparent"
        >
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-[#627382] mt-5  md:w-[750px] mx-auto text-center">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex justify-center items-center md:flex-row flex-col md:gap-0 gap-3 md:space-x-4 my-10 mx-auto w-full text-center ">
        <a href="https://play.google.com/">
  <button className="btn bg-white/20 backdrop-blur-md border border-white/30 font-bold text-[#001931] p-6 hover:bg-white/30 hover:border-white/40 hover:scale-104 hover:shadow-2xl  transition-all duration-300 shadow-lg  flex items-center gap-2">
    <img src={playStore} alt="" className="w-6 h-6" />
    Google Play
  </button>
</a>

<a href="https://www.apple.com/app-store/">
  <button className="btn bg-white/20 backdrop-blur-md border border-white/30 font-bold text-[#001931] p-6  hover:bg-white/30 hover:border-white/40  hover:scale-104 hover:shadow-2xl transition-all duration-300 shadow-lg   flex items-center gap-2">
    <img src={appStore} alt="" className="w-6 h-6" />
    Apple Store
  </button>
</a>

      </div>
      <img src={heroImg} className="mx-auto" alt="" />
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium mb-2 opacity-90">
                Total Downloads
              </p>
              <h3 className="text-5xl md:text-6xl font-bold mb-2">29.6M</h3>
              <p className="text-sm opacity-80">21% More Than Last Month</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-sm font-medium mb-2 opacity-90">
                Total Reviews
              </p>
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
        <h3 className="font-bold text-5xl text-[#001931] mb-4">
          Trending Apps
        </h3>
        <p className="font-normal text-lg text-[#627382]  mb-10">
          Explore All Trending Apps on the Market developed by us{" "}
        </p>
      </div>
      <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-5 gap-5 md:gap-10 ">
        {homeData.map((data) => (
          <AppCard key={data.id} data={data}></AppCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          to="/apps"
          className="btn rounded-lg px-[30px] py-[25px] text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
