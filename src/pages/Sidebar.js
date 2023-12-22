import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiBarChart, FiMessageSquare } from "react-icons/fi";
import control from "../assests/control.png";
import logo from "../assests/logo.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Motor Dashboard", icon: <FiBarChart />, path: "/connect" },
    { title: "Battery Dashboard", icon: <FiBarChart />, path: "/connection" },
    { title: "About", icon: <FiMessageSquare />, path: "https://teamaurora.info", external: true }, // External link for "About"
  ];

  return (
    <div className={`flex h-full`}>
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } bg-green-200 h-full p-5  pt-8 relative duration-300 font-bold`}
      >
        <img
          src={control} alt="logo"
          className={`absolute cursor-pointer -right-3 top-9 w-7 bg-cyan-700
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img alt="logo"
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Aurora Motor Monitor
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.external ? ( // Check if the link is external
                <a href={Menu.path} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-2">
                  {Menu.icon}
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </a>
              ) : (
                <NavLink
                  to={Menu.path}
                  className="flex items-center gap-x-2"
                  activeClassName="bg-light-white"
                >
                  {Menu.icon}
                  <span className={`${!open && "hidden"} origin-left duration-200`}>
                    {Menu.title}
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        
      </div>
    </div>
  );
};

export default Sidebar;