import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-500 p-6">
      {/* desktop and tab */}
      <div className="hidden md:block w-full h-full  "></div>

      {/* mobile */}
      <div className="block md:hidden w-full h-full "></div>
    </div>
  );
};

export default Header;
