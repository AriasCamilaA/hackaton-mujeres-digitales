import React from 'react';
import { Link } from 'react-router-dom';

const items = [
    {
        name: 'Dashboard',
        icon: 'fas fa-home',
        href: '/'
    },
    {
        name: 'Posts',
        icon: 'fas fa-newspaper',
        href: '/posts'
    },
    {
        name: 'Users',
        icon: 'fas fa-users',
        href: '/users'
    },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-3 bg-primary p-3 rounded-lg m-2 overflow-auto">
        {items.map((item, index) => (
            <Link key={index} to={item.href}  className="flex flex-col items-center justify-center text-white border border-white p-4 hover:bg-customPurple-light1 rounded-lg h-20">
                <i className={item.icon}></i>
                <span className='mt-2'>{item.name}</span>
            </Link>
        ))}
    </div>
  );
};

export default Sidebar;
