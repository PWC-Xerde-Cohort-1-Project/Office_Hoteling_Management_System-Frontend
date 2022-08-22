import Image from "react-bootstrap";
import "./MerchantSidebar.css";
import { useState, FC } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { BiCog, BiChart, BiMenu } from "react-icons/bi";
import { TbArmchair2 } from "react-icons/tb";
import {
  BsGrid,
  BsEnvelope,
  BsCart,
  BsXSquare,
  BsCheckSquare,
  BsFileEarmarkText,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import logo from "../../utils/images/logo.svg";
import { NavLink } from "react-router-dom";
import MerchantSidebarItem from "./MerchantSubMenu";
import { SidebarData } from "./SidebarData";
import MerchantSubMenu from "./MerchantSubMenu";

const MerchantSidebar: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="wrapper">
        <div
          style={{
            width: isOpen ? "320px" : "100px",
            padding: isOpen ? "20px 40px" : "20px 20px",
          }}
          className="sidebar"
        >
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              <img src={logo} />
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <BiMenu onClick={toggle} />
            </div>
          </div>
          {/* {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              style={({ isActive }) =>
                isActive ? { color: " #1d4dca" } : { color: "#000" }
              }
              className="link"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))} */}
          {SidebarData.map((item, index) => (
            <MerchantSubMenu item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MerchantSidebar;
