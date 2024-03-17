import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

const Header = () => {
  return (
    <div className="flex flex-row gap-5 justify-center items-center text-white">
      <div>
        <InfoOutlinedIcon sx={{ fontSize: 30, color: "white" }} />
      </div>
      <div className="relative">
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 30, color: "white" }} />
        <div className="absolute w-2 h-2 rounded-full bg-[#D175B6] top-1 right-2 custom-shadow"></div>
      </div>
      <div className="flex flex-row gap-2 justify-between items-center">
        <div className="flex flex-col justify-between">
          <span>
            Hi, <span className="text-teal-300">Muhammad Asad</span>{" "}
          </span>
          <span>Welcome back!</span>
        </div>
        <div className="h-[60px] w-[60px] rounded-full overflow-hidden border-2 border-[#D175B6] custom-shadow">
          <img src="images/pic.jpeg" alt="pic" className="h-full w-full " />
        </div>
      </div>
    </div>
  );
};

export default Header;
