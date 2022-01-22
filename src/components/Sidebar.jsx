import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  RiHome2Fill,
  RiMovie2Fill,
  RiCommunityLine,
  RiCompass3Line,
  RiTimerFlashLine,
  RiUserHeartLine,
  RiUserLine,
  RiSettings5Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

import { CgMediaLive } from "react-icons/cg";

const isNotActiveStyle =
  "flex text-base font-bold  text-zinc-500  pl-1 gap-2 items-center pl-14";

const isActiveStyle =
  "flex text-base font-bold text-white gap-2 items-center border-r-4 border-red-700 pl-14";

const Sidebar = () => {
  return (
    <div className="  flex flex-col justify-between h-full w-1/5 min-w-210 hide-scrollbar border-r border-zinc-800	 ">
      <div className="fixed flex flex-col  text-white gap-6">
        <Link
          to="/"
          className="flex flex-row items-center gap-1 py-10 pb-6 px-12"
        >
          <RiMovie2Fill fontSize={30} className="text-primary " />{" "}
          <span className="font-bold text-xl">Exxmon</span>
        </Link>

        <p className="flex text-base font-bold text-zinc-400 mt-4  px-12">
          MENU
        </p>

        <Link to="/" className={isActiveStyle}>
          <RiHome2Fill fontSize={20} />
          Home
        </Link>
        <Link to="/" className={isNotActiveStyle}>
          <RiCommunityLine fontSize={20} />
          Community
        </Link>

        <Link to="/" className={isNotActiveStyle}>
          <RiCompass3Line fontSize={20} />
          Discovery
        </Link>
        <Link to="/" className={isNotActiveStyle}>
          <RiTimerFlashLine fontSize={20} />
          Coming soon
        </Link>

        <p className="flex text-base font-bold text-zinc-400  mt-4 px-12">
          SOCIAL
        </p>

        <Link to="/" className={isNotActiveStyle}>
          <RiUserLine fontSize={20} />
          Friends
        </Link>
        <Link to="/" className={isNotActiveStyle}>
          <RiUserHeartLine fontSize={20} />
          Parties
        </Link>

        <Link to="/" className={isNotActiveStyle}>
          <CgMediaLive fontSize={20} />
          Media
        </Link>

        <p className="flex text-base font-bold text-zinc-400  mt-4 px-12">
          GENERAL
        </p>

        <Link to="/" className={isNotActiveStyle}>
          <RiSettings5Line fontSize={20} />
          Setting
        </Link>
        <Link to="/" className={isNotActiveStyle}>
          <RiLogoutBoxRLine fontSize={20} />
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
