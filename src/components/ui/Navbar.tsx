import { NavLink } from "react-router-dom";
import key from "../../assets/images/key.jpg";
import { FaCartPlus } from "react-icons/fa";

import { Badge } from "../ui/badge";
import { useAppSelector } from "@/redux/hooks/hook";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#4A249D] flex items-center justify-between font-medium  h-[70px] p-4 md:px-12  text-white ">
      {/* keyboard logo or name */}
      <div className="flex gap-2 items-center">
        <img
          src={key}
          className="md:w-12 md:h-10 w-6 h-6 rounded-full"
          alt=""
        />
        <h2 className="text-xl md:text-2xl">
          Mechanical <span className="text-[#ECC500]">Keyboard</span> Shop
        </h2>
      </div>
      {/* others */}
      <div>
        <ul
          className={`md:flex gap-8 z-10 md:bg-transparent text-white  font-medium md:static absolute text-xl items-center ${
            open
              ? "top-20 right-7 p-3 bg-[#736100] text-black"
              : "-top-48 right-0"
          } `}
        >
          <li className="text-xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? " text-[#ECC500]" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? " text-[#ECC500]" : "")}
            >
              Products
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? " text-[#ECC500]" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? " text-[#ECC500]" : "")}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="text-xl">
            <NavLink
              to="/product-dashboard"
              className={({ isActive }) => (isActive ? " text-[#ECC500]" : "")}
            >
              Product Management
            </NavLink>
          </li>
        </ul>
      </div>
      {/* cart icon */}

      <NavLink to="/cart" className="flex items-center w-3/12  md:w-1/12 p-3">
        <Badge className="bg-white text-[#4A249D] -top-2 -right-2 text-sm md:text-lg relative md:-right-16 md:-top-3">
          {cartItems?.length > 0 ? cartItems.length : 0}
        </Badge>
        <FaCartPlus className="text-[#ECC500] text-2xl  md:text-4xl " />
      </NavLink>

      {/* hambarg menu */}
      <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
        {open ? <ImCross /> : <FaHamburger />}
      </div>
    </div>
  );
};

export default Navbar;
