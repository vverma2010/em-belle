import Icon, { ShoppingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { BlogSvg, HomeBanner, earringBanner, jewelleryBanner } from ".";
import { original } from "@reduxjs/toolkit";

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

export const productsData = [
  {
    name: "Earring Set",
    price: 15000.0,
    starRatings: 4.5,
    onSale: false,
    description:
      "A beautiful set of earrings with a unique design, perfect for adding a touch of elegance to your outfit.",
    maxQuantity: 100,
    sku: "JWL-EAR-001",
    categories: ["earrings", "gold"],
    additionalInfo: {
      weight: "0.5 grams",
      dimensions: "1.5 cm x 1.5 cm",
      colors: ["Gold", "Silver"],
      material: "Gold",
    },
    primaryImage:
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/f/pf25et106rp_4.jpg?rnd=20200526195200&tr=w-512",
    images: [
      {
        original:
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/f/pf25et106rp_4.jpg?rnd=20200526195200&tr=w-512",
        thumbnail:
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/f/pf25et106rp_4.jpg?rnd=20200526195200&tr=w-512",
      },
      {
        original:
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/f/pf25et106rp_4.jpg?rnd=20200526195200&tr=w-512",
        thumbnail:
          "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/p/f/pf25et106rp_4.jpg?rnd=20200526195200&tr=w-512",
      },
    ],
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
    price: 20000.0,
    starRatings: 4.0,
    onSale: false,
    description:
      "A stylish bracelet that adds a touch of elegance, perfect for any occasion.",
    maxQuantity: 50,
    sku: "JWL-BR-002",
    categories: ["bracelets", "silver"],
    additionalInfo: {
      weight: "0.2 grams",
      dimensions: "20 cm",
      colors: ["Silver"],
      material: "Silver",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/J/T/JT01389-1YP900_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/T/JT01389-1YP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/T/JT01389-1YP900_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/T/JT01389-1YP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/T/JT01389-1YP900_1_lar.jpg",
      },
    ],
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
    price: 90000.0,
    starRatings: 4.0,
    onSale: false,
    description:
      "A luxurious necklace that exudes elegance and sophistication, perfect for a night out or a special occasion.",
    maxQuantity: 80,
    sku: "JWL-NECK-003",
    categories: ["necklaces", "gold"],
    additionalInfo: {
      weight: "0.3 grams",
      dimensions: "25 cm",
      colors: ["Gold"],
      material: "Gold",
    },
    primaryImage:
      "https://ranialankar.com/wp-content/uploads/2022/07/20220705_200554.jpg",
    images: [
      {
        original:
          "https://ranialankar.com/wp-content/uploads/2022/07/20220705_200554.jpg",
        thumbnail:
          "https://ranialankar.com/wp-content/uploads/2022/07/20220705_200554.jpg",
      },
      {
        original:
          "https://ranialankar.com/wp-content/uploads/2022/07/20220705_200554.jpg",
        thumbnail:
          "https://ranialankar.com/wp-content/uploads/2022/07/20220705_200554.jpg",
      },
    ],
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
    price: 10800.0,
    starRatings: 4.5,
    onSale: false,
    description:
      "A stunning ring that combines classic design with modern elegance, perfect for those who appreciate timeless beauty.",
    maxQuantity: 70,
    sku: "JWL-RING-004",
    categories: ["rings", "gold"],
    additionalInfo: {
      weight: "0.4 grams",
      dimensions: "1.5 cm x 1.5 cm",
      colors: ["Gold"],
      material: "Gold",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR05976-1YP600_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR05976-1YP600_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR05976-1YP600_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR05976-1YP600_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR05976-1YP600_1_lar.jpg",
      },
    ],
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
    price: 7000.0,
    starRatings: 4.0,
    onSale: false,
    salePrice: 5000,
    description:
      "A delicate pendant that adds a touch of elegance to your neckline, perfect for a sophisticated look.",
    maxQuantity: 120,
    sku: "JWL-PND-005",
    categories: ["pendants", "silver"],
    additionalInfo: {
      weight: "0.1 grams",
      dimensions: "2 cm x 2 cm",
      colors: ["Silver"],
      material: "Silver",
    },
    primaryImage:
      "https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/emmaline-iolite-pendant.jpg",
    images: [
      {
        original:
          "https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/emmaline-iolite-pendant.jpg",
        thumbnail:
          "https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/emmaline-iolite-pendant.jpg",
      },
      {
        original:
          "https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/emmaline-iolite-pendant.jpg",
        thumbnail:
          "https://www.kalyanjewellers.net/images/Jewellery/Pendant/images/emmaline-iolite-pendant.jpg",
      },
    ],
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
    price: 5000.0,
    starRatings: 4.0,
    onSale: false,
    description:
      "A lightweight anklet that adds a touch of elegance to your footwear, perfect for a casual yet chic look.",
    maxQuantity: 200,
    sku: "JWL-ANK-006",
    categories: ["anklets", "silver"],
    additionalInfo: {
      weight: "0.05 grams",
      dimensions: "10 cm",
      colors: ["Silver"],
      material: "Silver",
    },
    primaryImage:
      "https://images.cltstatic.com/media/product/350/AI00077-SS0000-bridechilla-anklets-in-gold-plated--silver-prd-6-pd.jpg",
    images: [
      {
        original:
          "https://images.cltstatic.com/media/product/350/AI00077-SS0000-bridechilla-anklets-in-gold-plated--silver-prd-6-pd.jpg",
        thumbnail:
          "https://images.cltstatic.com/media/product/350/AI00077-SS0000-bridechilla-anklets-in-gold-plated--silver-prd-6-pd.jpg",
      },
      {
        original:
          "https://images.cltstatic.com/media/product/350/AI00077-SS0000-bridechilla-anklets-in-gold-plated--silver-prd-6-pd.jpg",
        thumbnail:
          "https://images.cltstatic.com/media/product/350/AI00077-SS0000-bridechilla-anklets-in-gold-plated--silver-prd-6-pd.jpg",
      },
    ],
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
    price: 1500.0,
    starRatings: 4.5,
    onSale: false,
    description:
      "A pair of cufflinks that adds a touch of elegance to your wrist, perfect for a formal or semi-formal occasion.",
    maxQuantity: 80,
    sku: "JWL-CUF-007",
    categories: ["cufflinks", "gold"],
    additionalInfo: {
      weight: "0.3 grams",
      dimensions: "1 cm x 1 cm",
      colors: ["Gold"],
      material: "Gold",
    },
    primaryImage:
      "https://static-01.daraz.pk/p/01d16839c2c4ba28ed19eff64e74618c.jpg_750x400.jpg_.webp",
    images: [
      {
        original:
          "https://static-01.daraz.pk/p/01d16839c2c4ba28ed19eff64e74618c.jpg_750x400.jpg_.webp",
        thumbnail:
          "https://static-01.daraz.pk/p/01d16839c2c4ba28ed19eff64e74618c.jpg_750x400.jpg_.webp",
      },
      {
        original:
          "https://static-01.daraz.pk/p/01d16839c2c4ba28ed19eff64e74618c.jpg_750x400.jpg_.webp",
        thumbnail:
          "https://static-01.daraz.pk/p/01d16839c2c4ba28ed19eff64e74618c.jpg_750x400.jpg_.webp",
      },
    ],
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
  {
    name: "Diamond Stud Earrings",
    price: 35000.0,
    starRatings: 4.8,
    onSale: false,
    description:
      "Exquisite diamond stud earrings that sparkle with elegance and sophistication, perfect for special occasions.",
    maxQuantity: 50,
    sku: "JWL-DIA-EAR-008",
    categories: ["earrings", "diamond"],
    additionalInfo: {
      weight: "1 gram",
      dimensions: "0.5 cm x 0.5 cm",
      colors: ["White Gold", "Yellow Gold"],
      material: "Gold",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/J/E/JE04319-YGP900_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/E/JE04319-YGP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/E/JE04319-YGP900_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/E/JE04319-YGP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/E/JE04319-YGP900_1_lar.jpg",
      },
    ],
    reviews: [
      {
        reviewerName: "Emma Watson",
        date: "2023-05-10T10:00:00Z",
        starRatings: 5,
        review:
          "Absolutely stunning! These earrings are a must-have for any jewelry collection.",
      },
    ],
  },
  {
    name: "Pearl Necklace",
    price: 55000.0,
    starRatings: 4.7,
    onSale: false,
    description:
      "A timeless pearl necklace that radiates elegance and grace, perfect for both formal and casual occasions.",
    maxQuantity: 40,
    sku: "JWL-PRL-NECK-009",
    categories: ["necklaces", "pearl"],
    additionalInfo: {
      weight: "0.8 grams",
      dimensions: "30 cm",
      colors: ["White"],
      material: "Pearl",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/J/P/JP00232-YGP9PE_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/P/JP00232-YGP9PE_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/P/JP00232-YGP9PE_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/P/JP00232-YGP9PE_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/P/JP00232-YGP9PE_1_lar.jpg",
      },
    ],
    reviews: [
      {
        reviewerName: "Olivia Brown",
        date: "2023-05-12T12:00:00Z",
        starRatings: 4.8,
        review: "Absolutely beautiful! This necklace exceeded my expectations.",
      },
    ],
  },
  {
    name: "Sapphire and Diamond Ring",
    price: 45000.0,
    starRatings: 4.9,
    onSale: false,
    description:
      "A breathtaking ring featuring a stunning sapphire gemstone surrounded by dazzling diamonds, truly a showstopper.",
    maxQuantity: 30,
    sku: "JWL-SAP-DIA-RING-010",
    categories: ["rings", "sapphire", "diamond"],
    additionalInfo: {
      weight: "0.6 grams",
      dimensions: "1.8 cm x 1.8 cm",
      colors: ["White Gold", "Blue Sapphire"],
      material: "Platinum",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR00299-WGP6BG_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR00299-WGP6BG_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR00299-WGP6BG_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR00299-WGP6BG_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR00299-WGP6BG_1_lar.jpg",
      },
    ],
    reviews: [
      {
        reviewerName: "Sophia Lee",
        date: "2023-05-15T10:00:00Z",
        starRatings: 5,
        review:
          "Absolutely stunning! This ring is even more beautiful in person.",
      },
    ],
  },
  {
    name: "Emerald Drop Earrings",
    price: 60000.0,
    starRatings: 4.7,
    onSale: false,
    description:
      "Exquisite emerald drop earrings that exude sophistication and luxury, perfect for making a statement.",
    maxQuantity: 25,
    sku: "JWL-EMR-EAR-011",
    categories: ["earrings", "emerald"],
    additionalInfo: {
      weight: "0.7 grams",
      dimensions: "2 cm x 1 cm",
      colors: ["White Gold", "Emerald"],
      material: "Diamond",
    },
    primaryImage:
      "https://therose.in/wp-content/uploads/2023/05/3STK20327-1.jpg",
    images: [
      {
        original:
          "https://therose.in/wp-content/uploads/2023/05/3STK20327-1.jpg",
        thumbnail:
          "https://therose.in/wp-content/uploads/2023/05/3STK20327-1.jpg",
      },
      {
        original:
          "https://therose.in/wp-content/uploads/2023/05/3STK20327-1.jpg",
        thumbnail:
          "https://therose.in/wp-content/uploads/2023/05/3STK20327-1.jpg",
      },
    ],

    reviews: [
      {
        reviewerName: "Ava Martinez",
        date: "2023-05-17T12:00:00Z",
        starRatings: 4.8,
        review: "Absolutely stunning! These earrings are a true work of art.",
      },
    ],
  },
  {
    name: "Ruby Tennis Bracelet",
    price: 75000.0,
    starRatings: 4.6,
    onSale: false,
    description:
      "A classic tennis bracelet adorned with vibrant rubies, adding a pop of color and elegance to any wrist.",
    maxQuantity: 20,
    sku: "JWL-RBY-BR-012",
    categories: ["bracelets", "ruby"],
    additionalInfo: {
      weight: "1.5 grams",
      dimensions: "18 cm",
      colors: ["White Gold", "Ruby"],
      material: "Silver",
    },
    primaryImage:
      "https://www.gleamjewels.com/wp-content/uploads/2020/10/ruby-tennis-bracelet.jpg",
    images: [
      {
        original:
          "https://www.gleamjewels.com/wp-content/uploads/2020/10/ruby-tennis-bracelet.jpg",
        thumbnail:
          "https://www.gleamjewels.com/wp-content/uploads/2020/10/ruby-tennis-bracelet.jpg",
      },
      {
        original:
          "https://www.gleamjewels.com/wp-content/uploads/2020/10/ruby-tennis-bracelet.jpg",
        thumbnail:
          "https://www.gleamjewels.com/wp-content/uploads/2020/10/ruby-tennis-bracelet.jpg",
      },
    ],
    reviews: [
      {
        reviewerName: "Mia Taylor",
        date: "2023-05-20T14:00:00Z",
        starRatings: 4.7,
        review: "Absolutely love this bracelet! The rubies are stunning.",
      },
    ],
  },
  {
    name: "Diamond Solitaire Pendant",
    price: 35000.0,
    starRatings: 4.7,
    onSale: false,
    description:
      "A classic diamond solitaire pendant that radiates timeless elegance and sophistication, perfect for everyday wear or special occasions.",
    maxQuantity: 40,
    sku: "JWL-DIA-PND-016",
    categories: ["pendants", "diamond"],
    additionalInfo: {
      weight: "0.5 grams",
      dimensions: "1 cm x 0.5 cm",
      colors: ["White"],
      material: "Diamond",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/S/P/SP00039-WGP900_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/S/P/SP00039-WGP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/S/P/SP00039-WGP900_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/S/P/SP00039-WGP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/S/P/SP00039-WGP900_1_lar.jpg",
      },
    ],
    reviews: [
      {
        reviewerName: "Sophie Turner",
        date: "2023-06-01T10:00:00Z",
        starRatings: 4.8,
        review: "Absolutely stunning! This pendant is a timeless piece.",
      },
    ],
  },
  {
    name: "Diamond Cluster Ring",
    price: 42000.0,
    starRatings: 4.5,
    onSale: false,
    description:
      "A dazzling diamond cluster ring featuring a unique arrangement of sparkling diamonds, sure to captivate attention and admiration.",
    maxQuantity: 35,
    sku: "JWL-DIA-CLSTR-RING-017",
    categories: ["rings", "diamond"],
    additionalInfo: {
      weight: "0.8 grams",
      dimensions: "1.5 cm x 1.5 cm",
      colors: ["White"],
      material: "Diamond",
    },
    primaryImage:
      "https://cdn.caratlane.com/media/catalog/product/J/R/JR03123-YGP900_1_lar.jpg",
    images: [
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR03123-YGP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR03123-YGP900_1_lar.jpg",
      },
      {
        original:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR03123-YGP900_1_lar.jpg",
        thumbnail:
          "https://cdn.caratlane.com/media/catalog/product/J/R/JR03123-YGP900_1_lar.jpg",
      },
    ],
    reviews: [
      {
        reviewerName: "William Clark",
        date: "2023-06-03T12:00:00Z",
        starRatings: 4.7,
        review: "Absolutely stunning! This ring is truly breathtaking.",
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

export const wishListData = [];
