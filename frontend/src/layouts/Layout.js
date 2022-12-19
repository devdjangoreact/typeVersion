// ** React Imports
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Sidebar } from "../components/Sidebar";
import { SidebarMini } from "../components/SidebarMini";
import { NavBar } from "../components/NavBar";

import { useStateContext } from "../contexts/ContextProvider";

import useWindowDimensions from "../hooks/useWindowDimensions";

const BlankLayout = () => {
  const { windowDimensions, mobile, tablet, desktop } = useWindowDimensions();
  const { menuState, NavbarState } = useStateContext();
  return (
    <div className="flex justify-center items-start h-screen p-1 bg-orange-50">
      {desktop && (
        <>
          <SidebarMini />
          {menuState && <Sidebar />}
        </>
      )}
      <div className="w-full h-full">
        {NavbarState && <NavBar />}
        <div className="rounded-lg bg-red-100 h-[calc(100%-58px)] p-1 border overflow-y-scroll no-scrollbar">
          <Outlet />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BlankLayout;
