import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainDashBoard = () => {
  return (
    <main className="dashBoard">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default MainDashBoard;
