import React from "react";
//Icons
import {
  UserIcon,
  StarIcon,
  ShoppingBagIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="header max-w-7xl mx-auto">
      <div className="top_header grid grid-cols-3 items-center  py-5 border-b-8 border-pitch-black  ">
        <div>
          <UserIcon className="h-6 text-gray-400 stroke-1" />
        </div>
        <div className=" items-center text-center">
          <h1 className="font-lato text-3xl ">MR PORTER</h1>
        </div>
        <div className="flex text-right justify-end">
          <div className="search_container flex items-center">
            <SearchIcon className="h-5 text-gray-400 cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none focus:outline-none pl-3"
            />
          </div>
          <StarIcon className="h-6 text-gray-400 " />
          <ShoppingBagIcon className="h-6 text-gray-400 pl-6" />
        </div>
      </div>
      <div className="bottom_header max-w-6xl mx-auto flex space-x-6 whitespace-nowrap text-sm justify-center pt-5 pb-5 border-gray-400 border-b">
        <p>What's New</p>
        <p>Designers</p>
        <p>Clothing</p>
        <p>Shoes</p>
        <p> Accessories</p>
        <p> Grooming</p>
        <p> Luxury Watches</p>
        <p> Home</p>
        <p> Gifts</p>
        <p> Sport</p>
        <p> Mr P.</p>
        <p> The Journal</p>
      </div>
    </div>
  );
};

export default Header;
