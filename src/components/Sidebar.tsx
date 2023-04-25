import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { GiAbstract116 } from "react-icons/gi";
import { links } from "../assets/constants";

const NavLinks = (handleClick: any) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="md:flex hidden text-white flex-col w-[240px] py-10 px-4 bg-black">
      <img className="w-full h-14 object-contain" />
      <NavLinks handleClick={true} />
    </div>
  );
};

export default Sidebar;
