"use client";
import { FaChevronRight, FaChevronLeft, FaHome, FaCog } from "react-icons/fa";
import { FaBars, FaXmark, FaUsers } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bg-gray-800 text-white h-screen transition-all duration-300
          ${isSidebarVisible ? "translate-x-0" : "translate-x-full"
          } ${isCollapsed ? "w-11" : "w-64"} md:translate-x-0 md:relative`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 absolute top-4 right-0 transform -translate-x-1/2"
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        <nav className="flex flex-col justify-items-start mt-9 divide-y divide-dotted">
          <a href="/admin/dashboard" className="flex items-center p-2 mx-2 ">
            <FaHome className={`${isCollapsed ? "text-xl" : "text-2xl"}`} />
            {!isCollapsed && <span className="ml-2">Tổng quan</span>}
          </a>
          <a href="/admin/category" className="flex items-center p-2 mx-2 ">
            <MdOutlineCategory className={`${isCollapsed ? "text-xl" : "text-2xl"}`} />
            {!isCollapsed && <span className="ml-2">Phân loại</span>}
          </a>
          <a href="/admin/category" className="flex items-center p-2 mx-2 ">
            <FaUsers className={`${isCollapsed ? "text-xl" : "text-2xl"}`} />
            {!isCollapsed && <span className="ml-2">Người dùng</span>}
          </a>
        </nav>
      </div>
      {/* Toggle button for mobile view */}
      <button
        onClick={toggleSidebarVisibility}
        className="p-2 fixed top-4 right-4 bg-gray-800 text-white md:hidden z-50"
      >
        {isSidebarVisible ? <FaXmark /> : <FaBars />}
      </button>
    </div>
  );
};

export default Sidebar;
