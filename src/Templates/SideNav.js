import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-200 p-3 mt-1">
      <h1 className="text-2xl text-white font-bold flex">
        <i class="text-[#6556CD] ri-tv-fill mr-2  "></i>
        <span className="">Ultimate.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-8  " >
          New Feeds
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
          <i class="mr-2 ri-fire-fill"></i> Trending
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
        <i class="mr-2 ri-bard-fill"></i>Popular
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
        <i class="mr-2 ri-movie-2-fill"></i> Movies
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
        <i class="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
        <i class="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>

    <hr className="border-node h-[1px] bg-zinc-400 mb-1"/>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">

      <h1 className="text-white font-semibold text-xl mt-4 " >
          Website Info
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
            <i class="mr-2 ri-information-fill"></i>About
        </Link>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-500 rounded-lg p-5">
          <i class="mr-2 ri-phone-fill"></i>Contact
        </Link>
  
      </nav>
    </div>
  );
};

export default SideNav;
