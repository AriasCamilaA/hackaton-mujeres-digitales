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
    <div className="flex flex-col justify-center gap-3 p-3 m-2 overflow-auto rounded-lg bg-primary md:h-auto md:w-60">
        
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="flex flex-col items-center justify-center h-20 p-4 text-white border border-white rounded-lg hover:bg-customPurple-light1 md:h-auto md:flex-col md:gap-2"
        >
          <i className={`${item.icon} text-lg`}></i>
          <span className="hidden mt-2 text-xs md:text-base md:mt-0 md:inline lg:inline-block">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;



