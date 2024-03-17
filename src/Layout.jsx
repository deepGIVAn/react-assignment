import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/sidebar/Index";

const Layout = ({ children }) => {
  return (
    <div className="bg-black h-[100vh] min-w-screen relative">
      <div className="absolute -top-[0%] right-[5%] bg-gradient-to-b from-[#FF00FF] to-[#00EEC5] h-[70%] w-[40%] rounded-full filter blur-[200px] opacity-60 animate-blob "></div>
      <div className="absolute -bottom-[0%] left-[5%] bg-gradient-to-b from-[#8F00FF] to-[#00C8FF] h-[70%] w-[40%] rounded-full filter blur-[200px] opacity-60 animate-blob2"></div>
      <div className="h-full  relative z-10 px-3 sm:px-9">
        <main className="h-[100vh] flex flex-col gap-5 justify-center">
          <Header className="h-[20vh]" />
          <div className="h-[80vh] flex flex-row gap-0 sm:gap-5 justify-center ">
            <Sidebar />
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
