import React from "react";
import download from "../assets/download.png";
import ratings from "../assets/star.png";
import { Link } from "react-router";

const AppCard = ({ data }) => {
  const { image, title, downloads, ratingAvg, id } = data;

  return (
    <div>
      <Link to={`/apps/${id}`}>
        <div className="card bg-[white] backdrop-blur-lg border border-white/20 shadow-xl transition-all duration-500 h-[325px] md:p-0 hover:-translate-y-4 hover:bg-white/20 hover:shadow-2xl rounded-4xl">
          <figure className="h-48  backdrop-blur-sm flex items-center justify-center p-6 border-b border-white/10">
            <img
              src={image}
              alt={title}
              className="w-32 h-32 object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/200x200?text=No+Image";
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="text-[18px] text-[#001931] font-medium line-clamp-2">
              {title}
            </h2>
            <div className="card-actions justify-between mt-2">
              <div className="bg-[#F1F5E8] backdrop-blur-md px-3 py-1.5 rounded-full text-[#00D390] text-sm gap-1.5 flex items-center border border-white/40 hover:bg-white/40 transition-all duration-300">
                <img src={download} alt="" className="w-3.5 h-3.5" />
                {downloads}M
              </div>
              <div className="bg-[#F1F5E8] backdrop-blur-md px-3 py-1.5 rounded-full text-[#FF8811] text-sm gap-1.5 flex items-center border border-white/40 hover:bg-white/40 transition-all duration-300">
                <img src={ratings} alt="" className="w-3.5 h-3.5" />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
