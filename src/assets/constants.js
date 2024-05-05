import Icon, { ShoppingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { BlogSvg, HomeBanner, earringBanner, jewelleryBanner } from ".";

let BlogIcon = (props) => <Icon component={BlogSvg} {...props} />;

export const menu = [
  {
    label: "Shop",
    path: "/shop",
    icon: <ShoppingOutlined className="text-3xl" />,
  },
  {
    label: "Blogs",
    path: "/blogs",
    icon: <BlogIcon className="text-3xl" />,
  },
  {
    label: "Our Story",
    path: "/our-story",
    icon: <InfoCircleOutlined className="text-3xl" />,
  },
];

export const bannerData = [
  {
    label: "Golden Earrings",
    image: earringBanner,
    link: "",
  },
  {
    label: "Designer Earrings",
    image: HomeBanner,
    link: "",
  },
  {
    label: "Ethinic Jewellery",
    image: jewelleryBanner,
    link: "",
  },
];

const productsData = [
  {
    name: "Earring Set",
    price: 150.0,
    starRatings: 4.5,
    description:
      "A beautiful set of earrings with a unique design, perfect for adding a touch of elegance to your outfit.",
    maxQuantity: 100,
    sku: "JWL-EAR-001",
    categories: ["Earrings", "Gold"],
    additionalInfo: {
      weight: "0.5 grams",
      dimensions: "1.5 cm x 1.5 cm",
      colors: ["Gold", "Silver"],
      material: "Gold Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Jane Doe",
        date: "2023-05-01T10:00:00Z",
        starRatings: 5,
        review: "These earrings are stunning and the quality is excellent.",
      },
      {
        reviewerName: "John Smith",
        date: "2023-04-25T14:30:00Z",
        starRatings: 4,
        review: "Great value for the price. I love the design.",
      },
    ],
  },
  {
    name: "Bracelet",
    price: 200.0,
    starRatings: 4.0,
    description:
      "A stylish bracelet that adds a touch of elegance, perfect for any occasion.",
    maxQuantity: 50,
    sku: "JWL-BR-002",
    categories: ["Bracelets", "Silver"],
    additionalInfo: {
      weight: "0.2 grams",
      dimensions: "20 cm",
      colors: ["Silver"],
      material: "Silver Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Emily Johnson",
        date: "2023-05-03T12:00:00Z",
        starRatings: 4.5,
        review: "The bracelet is beautiful and very comfortable to wear.",
      },
    ],
  },
  {
    name: "Necklace",
    price: 120.0,
    starRatings: 4.2,
    description:
      "A luxurious necklace that exudes elegance and sophistication, perfect for a night out or a special occasion.",
    maxQuantity: 80,
    sku: "JWL-NECK-003",
    categories: ["Necklaces", "Gold"],
    additionalInfo: {
      weight: "0.3 grams",
      dimensions: "25 cm",
      colors: ["Gold"],
      material: "Gold Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Sarah Brown",
        date: "2023-05-05T14:00:00Z",
        starRatings: 4.5,
        review:
          "The necklace is exquisite and has become my go-to piece for special events.",
      },
    ],
  },
  {
    name: "Ring",
    price: 180.0,
    starRatings: 4.3,
    description:
      "A stunning ring that combines classic design with modern elegance, perfect for those who appreciate timeless beauty.",
    maxQuantity: 70,
    sku: "JWL-RING-004",
    categories: ["Rings", "Gold"],
    additionalInfo: {
      weight: "0.4 grams",
      dimensions: "1.5 cm x 1.5 cm",
      colors: ["Gold"],
      material: "Gold Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Michael Green",
        date: "2023-05-02T16:00:00Z",
        starRatings: 4.5,
        review:
          "The ring is beautifully crafted and has become a cherished piece of my jewelry collection.",
      },
    ],
  },
  {
    name: "Pendant",
    price: 100.0,
    starRatings: 4.4,
    description:
      "A delicate pendant that adds a touch of elegance to your neckline, perfect for a sophisticated look.",
    maxQuantity: 120,
    sku: "JWL-PND-005",
    categories: ["Pendants", "Silver"],
    additionalInfo: {
      weight: "0.1 grams",
      dimensions: "2 cm x 2 cm",
      colors: ["Silver"],
      material: "Silver Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Lisa White",
        date: "2023-05-06T10:00:00Z",
        starRatings: 4.5,
        review:
          "The pendant is beautifully crafted and has become my favorite piece.",
      },
    ],
  },
  {
    name: "Anklet",
    price: 50.0,
    starRatings: 4.1,
    description:
      "A lightweight anklet that adds a touch of elegance to your footwear, perfect for a casual yet chic look.",
    maxQuantity: 200,
    sku: "JWL-ANK-006",
    categories: ["Anklets", "Silver"],
    additionalInfo: {
      weight: "0.05 grams",
      dimensions: "10 cm",
      colors: ["Silver"],
      material: "Silver Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Tom Brown",
        date: "2023-05-07T12:00:00Z",
        starRatings: 4.0,
        review: "The anklet is comfortable and adds a nice touch to my outfit.",
      },
    ],
  },
  {
    name: "Cufflinks",
    price: 150.0,
    starRatings: 4.3,
    description:
      "A pair of cufflinks that adds a touch of elegance to your wrist, perfect for a formal or semi-formal occasion.",
    maxQuantity: 80,
    sku: "JWL-CUF-007",
    categories: ["Cufflinks", "Gold"],
    additionalInfo: {
      weight: "0.3 grams",
      dimensions: "1 cm x 1 cm",
      colors: ["Gold"],
      material: "Gold Plated",
    },
    primaryImage: "url_to_primary_image",
    images: ["url_to_image1", "url_to_image2"],
    reviews: [
      {
        reviewerName: "Sara Green",
        date: "2023-05-08T14:00:00Z",
        starRatings: 4.5,
        review:
          "The cufflinks are beautifully crafted and have become a staple in my wardrobe.",
      },
    ],
  },
];

export const cartData = {
  id: 1,
  products: [
    {
      id: 101,
      title: "Gold Earring Set",
      price: 150.0,
      quantity: 1,
      total: 150.0,
      discountPercentage: 0,
      discountedPrice: 150.0,
      thumbnail:
        "https://www.jewelegance.com/cdn/shop/products/JGS-2208-07185.jpg?v=1675447130",
      link: "https://example.com/products/gold-earring-set",
    },
    {
      id: 102,
      title: "Silver Bracelet",
      price: 200.0,
      quantity: 1,
      total: 200.0,
      discountPercentage: 0,
      discountedPrice: 200.0,
      thumbnail:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe29d1833/images/hi-res/A14019BVEAA00_2.jpg?sw=640&sh=640",
      link: "https://example.com/products/silver-bracelet",
    },
    {
      id: 103,
      title: "Gold Necklace",
      price: 120.0,
      quantity: 1,
      total: 120.0,
      discountPercentage: 0,
      discountedPrice: 120.0,
      thumbnail:
        "https://www.voylla.com/cdn/shop/products/BCJAI20104_03.jpg?v=1676960817",
      link: "https://example.com/products/gold-necklace",
    },
  ],
  total: 470.0,
  discountedTotal: 470.0,
  userId: 1,
  totalProducts: 3,
  totalQuantity: 3,
};
