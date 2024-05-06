import { Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MobileViewCategory = () => {
  const navigate = useNavigate();

  let category = [
    "Pendents",
    "Bracelets",
    "Rings",
    "Cufflinks",
    "Nosepins",
    "Anklets",
    "Earrings",
    "Necklaces",
  ];

  const handlePageRedirection = (type) => {
    console.log(type, "type");
    let category = type.toLowerCase();
    navigate(`/${category}`);
  };

  return (
    <div className="flex mt-8 overflow-auto flex-nowrap gap-4">
      {category.map((type, index) => {
        return (
          <Button
            key={type + index}
            onClick={() => handlePageRedirection(type)}
          >
            {type}
          </Button>
        );
      })}
    </div>
  );
};
