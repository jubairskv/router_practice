import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Dashborad = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashborad;
