import {
  HeartFilled,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, notification } from "antd";
import React, { useState } from "react";
import { wishListData } from "../../assets/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/reducers/wishlist";

export const ProductCard = ({ product, index, path }) => {
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  console.log(wishlist, "LIST");

  const toggleWishlist = (sku, event) => {
    console.log(sku, "KKKK");
    event.preventDefault();
    if (wishlist.includes(sku)) {
      dispatch(removeItem(sku));
      notification.success({ message: "Product removed from wishlist" });
    } else {
      dispatch(addItem(sku));
      notification.success({ message: "Product added to wishlist" });
    }
  };

  const isInWishlist = wishlist.includes(product.sku);

  return (
    <>
      {contextHolder}
      <Link
        key={index + product.sku}
        to={`${path}/${product.sku.toLowerCase()}`}
      >
        <div className="flex flex-col items-start gap-2 shadow-sm p-2 rounded-lg">
          <div>
            <img
              src={product.primaryImage}
              alt={product.name}
              className="aspect-square object-cover rounded-lg group-hover:opacity-75"
            />
          </div>
          <div className="flex justify-between flex-col w-full">
            <span className="font-semibold">{product.name}</span>
            <p>
              {" "}
              <span className="font-bold text-xl">₹</span>{" "}
              <span
                className={
                  product.salePrice
                    ? "text-primary font-medium line-through opacity-50"
                    : "text-primary font-medium"
                }
              >
                {product.price}
              </span>{" "}
              <span className="text-primary text-xl font-medium">
                {product.salePrice}
              </span>
            </p>
          </div>
          <div className="flex w-full justify-between ">
            <Button
              type="primary"
              className="w-4/5 shadow-none"
              icon={<ShoppingCartOutlined />}
            >
              Add to Cart
            </Button>
            <Button
              className="w-full shadow-inner"
              icon={
                isInWishlist ? (
                  <HeartFilled style={{ color: "#E72929" }} />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={(event) => toggleWishlist(product.sku, event)}
            />
          </div>
        </div>
      </Link>
    </>
  );
};
