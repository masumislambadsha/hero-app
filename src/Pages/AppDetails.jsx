import React, { useState } from "react";
import { useParams } from "react-router";
import useAllAppsData from "../Hooks/useAllAppsData";
import LoadingSpinner from "../compoenets/LoadingSpinner";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import star from "../assets/icon-ratings.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const AppDetails = () => {
  const { datas, loading } = useAllAppsData();
  const params = useParams();
  const id = parseInt(params.id);

  const [installed, setInstalled] = useState(() => {
    const storedApps = JSON.parse(localStorage.getItem("installed"));
    if (storedApps) {
      return storedApps.some((p) => p.id === id);
    }
    return false;
  });

  const app = datas.find((data) => data.id === id);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!app) {
    return <div className="text-center py-20">App not found!</div>;
  }

  const handleInstall = () => {
    const storedApps = JSON.parse(localStorage.getItem("installed"));
    let updated = [];
    if (storedApps) {
      const repeated = storedApps.some((p) => p.id === app.id);
      if (repeated) {
        toast.error("Already exists");
        return;
      }
      updated = [...storedApps, app];
    } else {
      updated.push(app);
    }
    localStorage.setItem("installed", JSON.stringify(updated));
    setInstalled(true);
    Swal.fire({
      title: "Good job!",
      html: `<h2 class="font-medium text-lg">You Have Installed ${app.title}</h2>`,
      icon: "success",
    });

    // toast.success("App installed successfully!", {
    //   autoClose: 3000,
    //   position: "top-right",
    // });
  };

  const chartData = [...app.ratings].reverse().map((rating, index) => ({
    name: rating.name,
    count: rating.count,
    star: 5 - index,
  }));

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto py-10">
        <div className=" px-4">
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6 ">
            <div className="flex  justify-evenly flex-col md:flex-row items-center md:items-start md:gap-[100px]">
              <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-sm">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-32 h-32 object-contain"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {app.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4">
                  Developed by{" "}
                  <span className="font-bold text-[#632EE3]">
                    {app.companyName}
                  </span>
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-6">
                  <div className="text-center">
                    <div className="flex flex-col items-center justify-center gap-2 text-green-600 mb-1">
                      <img src={download} alt="" />
                      <span className="text-xs font-medium">Downloads</span>
                    </div>
                    <p className="text-2xl font-bold text-[#001931]">
                      {app.downloads}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex flex-col items-center justify-center gap-2 text-orange-500 mb-1">
                      <img src={star} alt="" />
                      <span className="text-xs font-medium">
                        Average Ratings
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-[#001931]">
                      {app.ratingAvg}
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="flex flex-col items-center justify-center gap-2 text-purple-600 mb-1">
                      <img src={review} alt="" />
                      <span className="text-xs font-medium">Total Reviews</span>
                    </div>
                    <p className="text-2xl font-bold text-[#001931]">
                      {(app.reviews / 1000).toFixed(0)}K
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleInstall}
                  disabled={installed}
                  className={`${
                    installed
                      ? "bg-green-500 disabled"
                      : "bg-[#00D390] hover:bg-green-500"
                  } text-white font-semibold px-8 py-3 rounded-lg transition duration-300`}
                >
                  {installed ? "Installed" : `Install Now (${app.size} MB)`}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold text-[#001931] mb-6">Ratings</h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip
                  formatter={(value) => [value.toLocaleString(), "Reviews"]}
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                  }}
                />
                <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#FF8C42" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {app.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
