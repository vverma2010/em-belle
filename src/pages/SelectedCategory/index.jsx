import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { productsData } from "../../assets/constants";
import { Button, Divider, Select, Slider, Spin, Switch } from "antd";
import Icon from "@ant-design/icons";
import { LogoSpinnerSvg } from "../../assets";
import { ProductCard } from "../../components";

export const SelectedCategory = () => {
  const [loading, setLoading] = useState(false);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [SelectedIcon, setSelectedIcon] = useState(null);
  const [sliderValues, setSliderValues] = useState([0, 15000]);
  const [filters, setFilters] = useState({
    sortBy: "recommended",
    // sortBy: "",
    materials: [],
    priceRange: [0, 100000],
    inStock: true,
    onSale: false,
  });

  const [filteredProducts, setFilteredProducts] = useState(
    selectedCategoryProducts
  );

  const LogoSpinner = (props) => <Icon component={LogoSpinnerSvg} {...props} />;

  const filterSelectedCategoryProducts = (category) => {
    let data = productsData.filter((product) =>
      product.categories.includes(category)
    );
    setSelectedCategoryProducts(data);
    setFilteredProducts(data);
    applyFilters(data);
    setTimeout(() => setLoading(false), 1000);
  };

  const location = useLocation();

  const loadAndSetIcon = async (category) => {
    try {
      const module = await import(`../../assets/svg/${category}.svg`);
      setSelectedIcon(module.default);
    } catch (error) {
      console.error("Failed to load icon:", error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      loadAndSetIcon(selectedCategory);
    }
  }, [selectedCategory]);

  const applyFilters = (data) => {
    let dataToFilter = data || selectedCategoryProducts;
    setLoading(true);
    let filteredData = dataToFilter.filter((product) => {
      // Filter by materials
      if (
        filters.materials.length > 0 &&
        !filters.materials.includes(
          product.additionalInfo.material.toLowerCase()
        )
      ) {
        return false;
      }

      // Filter by price range
      if (
        product.price < filters.priceRange[0] ||
        product.price > filters.priceRange[1]
      ) {
        return false;
      }

      // Filter by in stock
      if (filters.inStock && product.maxQuantity <= 0) {
        return false;
      }

      // Filter by on sale
      if (filters.onSale && !product.onSale) {
        return false;
      }
      return true;
    });
    // console.log(filteredData, "DATA");
    setFilteredProducts(filteredData);
    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    setLoading(true);
    let category = location.pathname.split("/")[2];
    setSelectedCategory(category);
    filterSelectedCategoryProducts(category);
  }, [location.pathname]);

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
          <div className="w-full flex flex-col gap-8">
            <div className="bg-primary rounded-2xl h-1/5 flex-col flex justify-center items-center md:h-1/4 xl:h-1/3">
              {SelectedIcon && (
                <img
                  src={SelectedIcon}
                  alt={selectedCategory}
                  className="w-[70px]  md:w-[100px]"
                />
              )}
              <h2 className="font-semibold text-2xl text-white uppercase md:text-4xl lg:text-5xl xl:text-6xl">
                {selectedCategory}
              </h2>
            </div>
            <div className="flex relative">
              <div className="flex flex-1 gap-4">
                <div className="hidden flex-col items-start lg:flex w-1/4">
                  <h3 className="text-xl font-semibold">Filters</h3>
                  <div className="flex flex-col gap-4 w-full p-4">
                    <div className="flex w-full flex-col items-start gap-1">
                      <h3 className="text-base">Sort by:</h3>
                      <Select
                        className="w-full text-left"
                        defaultValue="Recommended"
                        value={filters.sortBy}
                        // disabled
                        size="large"
                        onChange={(value) =>
                          setFilters({ ...filters, sortBy: value })
                        }
                        options={[
                          {
                            value: "recommended",
                            label: "Recommended",
                          },
                          {
                            value: "newest",
                            label: "Newest",
                          },
                          {
                            value: "low-to-high",
                            label: "Price: Low to High",
                          },
                          {
                            value: "high-to-low",
                            label: "Price: High to Low",
                          },
                        ]}
                      />
                    </div>
                    <div className="flex w-full flex-col items-start gap-1">
                      <h3 className="text-base">Choose Material:</h3>
                      <Select
                        className="w-full text-left"
                        placeholder="Select material"
                        size="large"
                        mode="multiple"
                        maxTagCount="responsive"
                        value={filters.materials}
                        allowClear
                        onChange={(value) =>
                          setFilters({ ...filters, materials: value })
                        }
                        options={[
                          {
                            value: "gold",
                            label: "Gold",
                          },
                          {
                            value: "silver",
                            label: "Silver",
                          },
                          {
                            value: "diamond",
                            label: "Diamond",
                          },
                          {
                            value: "platinum",
                            label: "Platinum",
                          },
                        ]}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base mr-auto">Price:</h3>
                      <Slider
                        min={0}
                        max={100000}
                        range
                        defaultValue={[0, 15000]}
                        value={filters.priceRange}
                        onChange={(value) => {
                          setSliderValues(value);
                          setFilters({ ...filters, priceRange: value });
                        }}
                      />
                      <p className="ml-auto">
                        Price: ₹{sliderValues[0].toLocaleString()} - ₹
                        {sliderValues[1].toLocaleString()}
                      </p>
                    </div>
                    <div className="flex flex-1 justify-between items-center">
                      <Switch
                        checked={filters.inStock}
                        onChange={(checked) =>
                          setFilters({ ...filters, inStock: checked })
                        }
                      />
                      <span>In Stock</span>
                    </div>
                    <div className="flex flex-1 justify-between items-center">
                      <Switch
                        checked={filters.onSale}
                        value={filters.onSale}
                        onChange={(checked) =>
                          setFilters({ ...filters, onSale: checked })
                        }
                      />
                      <span>On Sale</span>
                    </div>
                    <Button type="primary" onClick={applyFilters}>
                      Apply
                    </Button>
                  </div>
                </div>
                <Divider type="vertical" className="hidden h-full lg:block" />
                <div className=" w-3/4 h-full grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {filteredProducts.map((product, product_index) => {
                    return (
                      // <Link
                      //   key={product_index + product.sku}
                      //   to={`${location.pathname}/${product.sku.toLowerCase()}`}
                      // >
                      <div key={product_index + product.sku} className="group">
                        <ProductCard
                          product={product}
                          index={product_index}
                          path={location.pathname}
                        />
                      </div>
                      // </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
