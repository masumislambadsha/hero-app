import React from "react";
import download  from '../assets/download.png'
import ratings  from '../assets/star.png'

const HomeApps = ({data}) => {
  const {image, title, downloads, ratingAvg} = data

  return (
    <div className="card pt-10 bg-base-100 shadow-sm transition duration-500  hover:-translate-y-6 ">
      <figure>
        <img
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-[20px] text-[#001931] font-medium ">
           {title}
        </h2>
        <div className="card-actions justify-between">
          <div className="bg-[#f1f5e8] px-4 pt-4 badge text-[#00D390]"><img src={download} alt="" /> {downloads}</div>
          <div className="bg-[#f1f5e8] p-4 badge text-[#FF8811] "><img src={ratings} alt="" /> {ratingAvg}</div>
        </div>
      </div>
      
    </div>
  );
};

export default HomeApps;
