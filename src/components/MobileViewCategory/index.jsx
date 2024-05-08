import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const MobileViewCategory = () => {
  const navigate = useNavigate();

  let category = [
    "Pendants",
    "Bracelets",
    "Rings",
    "Cufflinks",
    "Noserings",
    "Anklets",
    "Earrings",
    "Necklaces",
  ];

  const handlePageRedirection = (type) => {
    let category = type.toLowerCase();
    navigate(`/jewellery/${category}`);
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
