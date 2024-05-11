import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { productsData, wishListData } from "../../assets/constants";
import { Button, Rate, Spin, message } from "antd";
import { LogoSpinner } from "../../utils";
import ImageGallery from "react-image-gallery";
import {
  DeleteOutlined,
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/reducers/wishlist";

export const ProductDescription = () => {
  const [loading, setLoading] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const [thumbnailPosition, setThumbnailPosition] = useState("left");
  const [quantity, setQuantity] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  console.log(wishlist, "WISHLIST");

  const toggleWishlist = (sku, event) => {
    event.preventDefault();
    dispatch(sku in wishlist ? removeItem(sku) : addItem({ sku }));
  };

  let location = useLocation();

  const copyShareUrl = () => {
    const urlPath = window.location.href;
    console.log(urlPath, "PATH");

    navigator.clipboard
      .writeText(urlPath)
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Link copied to clipboard.",
        });
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: "Something went wrong. Please try again!",
        });
      });
  };

  useEffect(() => {
    setLoading(true);
    // filterData();
    let sku = location.pathname.split("/")[3];
    console.log(sku, "sku");
    let productDetails = productsData.filter(
      (product) => product.sku.toLowerCase() === sku
    );
    setProductDetail(productDetails[0]);
    setLoading(false);
  }, [location.pathname]);

  //   console.log(productDetail, "images");

  useEffect(() => {
    if (!loading && productDetail.images) {
      console.log(productDetail.starRatings, "Images loaded");
    }
  }, [productDetail, loading]);

  useEffect(() => {
    const updatePosition = () => {
      if (window.innerWidth <= 768) {
        // Adjust the breakpoint as needed
        setThumbnailPosition("bottom");
      } else {
        setThumbnailPosition("left");
      }
    };

    window.addEventListener("resize", updatePosition);
    updatePosition();

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  console.log(wishListData, "WISH");

  return (
    <div className="min-h-screen">
      {contextHolder}
      {loading ? (
        <Spin
          spinning={loading}
          indicator={
            <LogoSpinner
              className="brightness-200 animate-bounce"
              style={{
                fontSize: "5rem",
              }}
            />
          }
          fullscreen
        />
      ) : (
        productDetail && (
          <div className="h-screen">
            <div className="flex gap-8 flex-col lg:flex-row">
              <div className="image-gallery shadow rounded-lg lg:w-1/2">
                {productDetail.images && (
                  <ImageGallery
                    // lazyLoad={true}
                    showNav={false}
                    showPlayButton={false}
                    originalClass="gallery-image-class"
                    thumbnailPosition={thumbnailPosition}
                    items={productDetail.images}
                  />
                )}
              </div>
              <div className=" w-full flex flex-col items-start gap-4 lg:w-1/2 lg:gap-8">
                <div className="flex w-full justify-between ">
                  <div className="flex-col flex gap-4 items-start">
                    <h2 className="text-lg font-semibold lg:text-4xl">
                      {productDetail.name}
                    </h2>
                    <h4 className="text-primary text-lg font-medium">
                      <span className="text-2xl">₹</span>
                      {productDetail.price?.toLocaleString()}
                    </h4>
                  </div>
                  <div className="flex flex-col justify-between">
                    <ShareAltOutlined
                      className="text-lg cursor-pointer lgtext-3xl my-2"
                      onClick={copyShareUrl}
                    />
                    {wishlist.includes(productDetail.sku) ? (
                      <HeartFilled
                        className="text-lg cursor-pointer lgtext-3xl my-2"
                        style={{ color: "#E72929" }}
                        onClick={(event) =>
                          toggleWishlist(productDetail.sku, event)
                        }
                      />
                    ) : (
                      <HeartOutlined
                        className="text-lg cursor-pointer lgtext-3xl my-2"
                        onClick={(event) =>
                          toggleWishlist(productDetail.sku, event)
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  {productDetail.starRatings && (
                    <p className="flex gap-4">
                      <Rate
                        allowHalf
                        disabled
                        defaultValue={productDetail.starRatings}
                        className="text-primary"
                      />
                      <span className="font-semibold">
                        {productDetail.starRatings}
                      </span>
                    </p>
                  )}
                </div>
                <p className="text-darkGray text-left">
                  {productDetail.description}
                </p>
                <div className="flex gap-4 w-full items-center lg:gap-8">
                  <div className="flex bg-lightGray px-4 py-2 gap-2 items-center justify-between lg:gap-4">
                    <Button
                      type="text"
                      disabled={quantity === 1}
                      icon={<MinusOutlined />}
                      onClick={() =>
                        setQuantity((prevQuantity) => prevQuantity - 1)
                      }
                    />
                    {quantity}
                    <Button
                      type="text"
                      // disabled={quantity === productDetail.maxQuantity}
                      icon={
                        quantity === productDetail.maxQuantity ? (
                          <DeleteOutlined />
                        ) : (
                          <PlusOutlined />
                        )
                      }
                      onClick={() => {
                        if (quantity === productDetail.maxQuantity) {
                          setQuantity(0);
                        } else {
                          setQuantity((prevQuantity) => prevQuantity + 1);
                        }
                      }}
                    />
                  </div>
                  <Button
                    type="primary"
                    className="w-full rounded shadow-none"
                    size="large"
                    // styles={{
                    //   ".ant-btn-lg": {
                    //     paddingTop: "0.5rem",
                    //     paddingBottom: "0.5rem",
                    //   },
                    // }}
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "48px",
                      fontWeight: "bold",
                      letterSpacing: 1.5,
                    }}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
