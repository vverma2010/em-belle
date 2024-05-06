import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { productsData } from "../../assets/constants";
import { Spin } from "antd";
import Icon from "@ant-design/icons";
import { BlogSvg, LogoSpinnerSvg } from "../../assets";

export const SelectedCategory = () => {
  const [loading, setLoading] = useState(false);
  let [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);

  const LogoSpinner = (props) => <Icon component={LogoSpinnerSvg} {...props} />;

  const filterSelectedCategoryProducts = (category) => {
    console.log(category, "category");
    let data = productsData.filter((product) =>
      product.categories.includes(category)
    );
    console.log(data, "data");
    setSelectedCategoryProducts(data);
    setTimeout(() => setLoading(false), 5000);
  };

  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    let category = location.pathname.replace("/", "");
    filterSelectedCategoryProducts(category);
  }, []);
  return (
    <div className="min-h-screen flex flex-1">
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
        <>
          <p>{location.pathname}</p>
          <LogoSpinner />
        </>
      )}
    </div>
  );
};
