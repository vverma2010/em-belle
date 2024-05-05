import React, { useState } from "react";
import { mainLogo } from "../../assets";
import { menu } from "../../assets/constants";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Badge, Divider, Drawer } from "antd";
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleDrawer = () => {
    setOpenMenu(true);
  };

  const onClose = () => {
    setOpenMenu(false);
  };

  let count = 2;
  return (
    <div className="flex py-8 justify-between flex-1">
      <div>
        <Link to="/">
          <img src={mainLogo} className="w-24 md:w-48" alt="em'Belle" />
        </Link>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="menu-container flex gap-10 font-semibold mx-4 text-base">
          {menu.map((menuItem, menuIndex) => (
            <p key={menuIndex}>
              <Link to={menuItem.path}>{menuItem.label}</Link>
            </p>
          ))}
        </div>
        <Divider type="vertical" />
        <div className="action-menu-wrapper flex gap-10 mx-4 mr-0">
          <p>
            <Link to="/search">
              <SearchOutlined style={{ fontSize: "1.5rem" }} />
            </Link>
          </p>
          <p>
            <Link to="/cart">
              <Badge overflowCount={10} count={count} color="#A18A68">
                <ShoppingCartOutlined style={{ fontSize: "1.5rem" }} />
              </Badge>
            </Link>
          </p>
          <p>
            <Link to="/profile">
              <UserOutlined style={{ fontSize: "1.5rem" }} />
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 lg:hidden">
        <Link to="/cart">
          <Badge overflowCount={10} count={count} color="#A18A68">
            <ShoppingCartOutlined style={{ fontSize: "1.5rem" }} />
          </Badge>
        </Link>
        <MenuOutlined onClick={handleDrawer} />
      </div>
      <Drawer open={openMenu} onClose={onClose}>
        <div className="flex flex-col gap-8">
          {menu.map((menuItem, menuIndex) => (
            <p key={menuIndex}>
              <Link to={menuItem.path}>
                <span className="flex justify-normal items-center gap-8 text-lg font-normal ">
                  {menuItem.icon} {menuItem.label}
                </span>
              </Link>
            </p>
          ))}
          <p>
            <Link to="/wishlist">
              <span className="flex justify-normal items-center gap-8 text-lg font-normal ">
                {" "}
                <HeartOutlined className="text-3xl" /> Wishlist
              </span>
            </Link>
          </p>
        </div>
      </Drawer>
    </div>
  );
};
