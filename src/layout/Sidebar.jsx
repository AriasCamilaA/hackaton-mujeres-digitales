import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Dashboard",
    icon: "fas fa-home",
    href: "/",
  },
  {
    name: "Posts",
    icon: "fas fa-newspaper",
    href: "/posts",
  },
  {
    name: "Users",
    icon: "fas fa-users",
    href: "/users",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-row lg:justify-start gap-3 p-3 m-2 overflow-auto rounded-lg bg-primary md:flex-col md:h-auto md:w-60 justify-center">
        
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="flex items-center justify-center h-20 p-4 text-white border border-white rounded-lg hover:bg-customPurple-light1  md:flex-col md:gap-2 sm:gap-2 sm:p-4 sm:h-auto md:p-4 md:h-auto"
        >
          <i className={`${item.icon} text-lg`}></i>
          <span className="hidden mt-2 text-xs md:inline-block md:text-base md:mt-0">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;



