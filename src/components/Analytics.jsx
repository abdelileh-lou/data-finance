import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div>
          <p>DATA ANALYTICS DASHBOARD</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
            ipsa, id quo aliquam quas aspernatur ex? Ducimus quis facere sint
            in. Saepe ex ipsam sed excepturi, veniam architecto tempora tenetur.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
