import React from "react";

const InstalledApps = () => {
  const installedApps = JSON.parse(localStorage.getItem("installed"));
  console.log(installedApps);
  installedApps.map((installedApp) => {
    console.log(installedApp.title);

  });

  return (
    <div className="container mx-auto">
      {installedApps.map((installedApp) => {
        return(
             <h1>{installedApp.title}</h1>
        )

      })}
    </div>
  );
};

export default InstalledApps;
