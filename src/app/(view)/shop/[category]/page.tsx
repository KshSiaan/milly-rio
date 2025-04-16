import React from "react";
import ShopPage from "./shop-page";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

const Allproducts: Product[] = [
  {
    id: 1,
    image: "/product1.png",
    name: "Milly & Rio Hoodies",
    price: 4820.0,
  },
  {
    id: 2,
    image: "/product/product2.png",
    name: "Shocks for children",
    price: 6150.0,
  },
  {
    id: 3,
    image: "/product/product3.jpg",
    name: "SmartSphere",
    price: 3990.0,
  },
  {
    id: 4,
    image: "/product/product4.png",
    name: "InnovaGear",
    price: 7500.0,
  },
  {
    id: 5,
    image: "/product/product5.png",
    name: "T-shirts for children",
    price: 9100.0,
  },
  {
    id: 6,
    image: "/product/product6.png",
    name: "Visionary Hub",
    price: 5400.0,
  },
  {
    id: 7,
    image: "/product/product7.jpg",
    name: "QuantumLeap",
    price: 8300.0,
  },
  {
    id: 8,
    image: "/product/product8.jpg",
    name: "EcoFusi2675",
    price: 2675.0,
  },
];

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;
  let filteredProducts: Product[] = [];

  switch (category.toLowerCase()) {
    case "all":
      filteredProducts = Allproducts;
      break;
    case "tshirt":
      filteredProducts = Allproducts.filter((product) =>
        product.name.toLowerCase().includes("t-shirt")
      );
      break;
    case "hoodies":
      filteredProducts = Allproducts.filter(
        (product) =>
          product.name.toLowerCase().includes("hoodie") ||
          product.name.toLowerCase().includes("sweatshirt")
      );
      break;
    case "kids":
      filteredProducts = Allproducts.filter(
        (product) =>
          product.name.toLowerCase().includes("children") ||
          product.name.toLowerCase().includes("kids")
      );
      break;
    case "gift":
    case "accessories":
      filteredProducts = Allproducts.filter(
        (product) =>
          product.name.toLowerCase().includes("ecofusi") ||
          product.name.toLowerCase().includes("quantum") ||
          product.name.toLowerCase().includes("sphere")
      );
      break;
    default:
      filteredProducts = Allproducts;
      break;
  }

  return <ShopPage product={filteredProducts} />;
};

export default Page;
