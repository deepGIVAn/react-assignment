import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ data }) => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const [subMenuOpen, setSubMenuOpen] = useState(true);

  // useEffect(() => {
  //   for (let a in data.menus) {
  //     console.log(data.menus[a].link === pathname);

  //   }
  // }, []);

  return (
    <>
      <li
        className={`flex p-2 px-3 text-lg font-medium items-center ${
          // pathname === "/addevent" &&
          data.name === "Events" &&
          "bg-black custom-shadow mx-1 rounded-lg text-[#D175B6] border-2 border-[#D175B6] text-shadow-lg"
        }`}
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <p className="flex-1 capitalize items-center">{data.name}</p>
        <IoIosArrowDown
          className={` ${subMenuOpen && "rotate-180"} duration-200 `}
        />
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex flex-col pl-7 text-[0.9rem] font-normal overflow-hidden gap-3"
      >
        {data.menus?.map((menu, index) => (
          <li key={menu.name} className="">
            <NavLink
              to={menu.link}
              className="bg-transparent capitalize relative"
            >
              <span
                className={`${
                  // pathname === "/addevent" &&
                  "/addevent" === menu.link && "text-[#D175B6]"
                }   "relative z-10 px-3 py-2"`}
              >
                {menu.name}
              </span>
              <div
                className={`absolute h-[38px] w-[10px] rounded-bl-lg rounded-t-0 border-2 border-t-0 border-r-0 top-0 left-0 transform -translate-x-1/4 -translate-y-3/4 z-[10+${index}] ${
                  // pathname === "/addevent" &&
                  "/addevent" === menu.link
                    ? "border-[#D175B6] "
                    : "border-white"
                }`}
              ></div>
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SubMenu;
