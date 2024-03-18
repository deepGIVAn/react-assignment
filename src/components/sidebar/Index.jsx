import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import SubMenu from "./Submenu";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  const subMenusList1 = [
    {
      name: "Events",
      menus: [
        { link: "/addevent", name: "New Requests" },
        { link: "/", name: "Estimate" },
        { link: "/", name: "Events" },
        { link: "/", name: "Partial Requests" },
      ],
    },
  ];

  const subMenusList2 = [
    {
      name: "Users",
      menus: [
        { link: "/", name: "Admins" },
        { link: "/", name: "Clients" },
        { link: "/", name: "Coordinators" },
      ],
    },
  ];

  return (
    <div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="text-white z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed h-full border-2 border-[#D175B6] rounded-xl custom-shadow p-4
         "
      >
        <div className="flex flex-col h-full relative">
          <ul className="text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100">
            {(open || isTabletMid) && (
              <div className="">
                {subMenusList1?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-2">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li className="text-lg font-medium ml-3">Positions</li>
            <li className="text-lg font-medium ml-3">Contractors</li>
            {(open || isTabletMid) && (
              <div className="">
                {subMenusList2?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-2">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}
            <li className="text-lg font-medium ml-3">Profile</li>
          </ul>
          <div className="absolute bottom-0 rounded-lg w-full">
            <div className="relative">
              <div className="absolute inset-0.5 bg-[#D175B6] rounded-lg blur"></div>
              <div className="relative bg-black text-center p-2 rounded-lg cursor-pointer">
                Logout
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div className="m-3 md:hidden text-white" onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div> */}
    </div>
  );
};

export default Sidebar;
