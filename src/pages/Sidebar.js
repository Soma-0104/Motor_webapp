import React, { useState } from "react";
import { FiBarChart, FiMessageSquare } from "react-icons/fi";
import control from "../assests/control.png";
import logo from "../assests/logo.png";

const Sidebar = ({ maintenance }) => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const Menus = [
    { title: "Motor Dashboard", icon: <FiBarChart />, path: "/connect" },
    { title: "Battery Dashboard", icon: <FiBarChart />, path: "/connection" },
    { title: "About", icon: <FiMessageSquare />, path: "https://teamaurora.info", external: true },
  ];

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  return (
    <div className="flex h-full">
      <div
        className={`${
          open ? "w-72" : "w-20 "
        } ${maintenance === 'No maintenance required' ? 'bg-blue-900 border-blue-200' : 'bg-blue-900 border-blue-200'} h-full p-5  pt-8 relative duration-300 font-bold text-white`}
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
            } text-white`}
          >
            Aurora Motor Monitor
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index} className="mt-2">
              <div
                className={`flex rounded-md p-2 cursor-pointer 
                  text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : ""}
                  ${selectedMenu === index ? "bg-gray-200" : ""}
                  ${!Menu.external && "hover:bg-gray-300"}
                  ${open ? "" : "origin-left duration-200 scale-0"}`}
                onClick={() => {
                  handleMenuClick(index);
                  if (Menu.external) {
                    window.open(Menu.path, "_blank");
                  } else {
                    window.location.href = Menu.path;
                  }
                }}
              >
                {Menu.icon}
                <span className={`${!open && "hidden"} origin-left duration-200 text-white`}>
                  {Menu.title}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* Content for the rest of the screen */}
      </div>
    </div>
  );
};

export default Sidebar;
