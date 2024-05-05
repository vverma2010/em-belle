import React, { useEffect, useState } from "react";
import { mainLogo } from "../../assets";
import { cartData, menu } from "../../assets/constants";
import { Link, useLocation } from "react-router-dom";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
  HeartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Badge, Divider, Drawer, Popover, Space } from "antd";
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const location = useLocation();

  const handleDrawer = () => {
    setOpenMenu(true);
  };

  const onClose = () => {
    setOpenMenu(false);
  };

  const handleCartQuickDrawer = () => {
    setOpenCartDrawer(true);
  };

  const closeCartDrawer = () => {
    setOpenCartDrawer(false);
  };

  useEffect(() => {
    setOpenCartDrawer(false);
    setOpenMenu(false);
  }, [location.pathname]);

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
              <Link
                to={menuItem.path}
                className={
                  location.pathname === menuItem.path
                    ? "text-primary underline underline-offset-8"
                    : "text-black"
                }
              >
                {menuItem.label}
              </Link>
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
            {/* <Link to="/cart"> */}
            <Badge overflowCount={10} count={count} color="#A18A68">
              <ShoppingCartOutlined
                style={{ fontSize: "1.5rem" }}
                onClick={handleCartQuickDrawer}
              />
            </Badge>
            {/* </Link> */}
          </p>
          <p>
            {/* <Link to="/profile"> */}
            <Popover
              placement="bottomRight"
              content={
                <div className="p-2">
                  <Space className="flex flex-col items-start ">
                    <Link to="/profile">
                      <p className="flex gap-2 hover:text-primary text-base font-semibold">
                        <UserOutlined />
                        <span>Profile</span>
                      </p>
                    </Link>
                    <Link to="/wishlist">
                      {" "}
                      <p className="flex gap-2 hover:text-primary text-base font-semibold">
                        <HeartOutlined />
                        <span>Wishlist</span>
                      </p>
                    </Link>
                    <p className="flex gap-2 text-danger cursor-pointer hover:text-danger text-base font-semibold">
                      <LogoutOutlined />
                      <span>Logout</span>
                    </p>
                  </Space>
                </div>
              }
            >
              <UserOutlined style={{ fontSize: "1.5rem" }} />
            </Popover>
            {/* </Link> */}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 lg:hidden">
        {/* <Link to="/cart"> */}
        <Badge overflowCount={10} count={count} color="#A18A68">
          <ShoppingCartOutlined
            style={{ fontSize: "1.5rem" }}
            onClick={handleCartQuickDrawer}
          />
        </Badge>
        {/* </Link> */}
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
              <span className="flex justify-normal items-center gap-8 text-lg font-normal">
                {" "}
                <HeartOutlined className="text-3xl" /> Wishlist
              </span>
            </Link>
          </p>
        </div>
      </Drawer>

      {/* CART DRAWER */}

      <Drawer
        open={openCartDrawer}
        onClose={closeCartDrawer}
        title="Cart"
        className="cart-drawer"
        style={{
          padding: 0,
        }}
        styles={{
          body: {
            padding: 0,
            display: "flex",
            flex: 1,
          },
        }}
        extra={
          <Space>
            <Link to="/cart">Go to Cart</Link>
          </Space>
        }
      >
        <div className="pointer-events-none flex max-w-full">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="mt-8">
                  <div className="flow-root">
                    <div role="list" className="-my-6 divide-y divide-gray-200">
                      {cartData.products.map((product) => (
                        <div key={product.id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900 hover:text-gray-600">
                                <h3>
                                  <Link
                                    to={product.link}
                                    className="text-gray-900 hover:text-gray-600"
                                  >
                                    {product.title}
                                  </Link>
                                </h3>
                                <p className="ml-4">Rs. {product.price}</p>
                              </div>
                              {/* <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p> */}
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">
                                Qty {product.quantity}
                              </p>

                              <div className="flex">
                                <button
                                  type="button"
                                  className="font-medium text-danger hover:text-danger"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>Rs. {cartData.total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <Link
                    to="/checkout"
                    className="flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary hover:text-white"
                  >
                    Checkout
                  </Link>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="font-medium text-primary hover:text-primary"
                      onClick={() => setOpenCartDrawer(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
