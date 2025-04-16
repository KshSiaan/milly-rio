import React, { FC } from "react";
import ShopPage from "./shop-page";
import { Allproducts } from "@/lib/products";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface PageProps {
  params: {
    category: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  console.log(params.category);
  let filteredProducts: Product[] = [];

  switch (params.category) {
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
      filteredProducts = Allproducts.filter(
        (product) =>
          product.name.toLowerCase().includes("ecofusi") ||
          product.name.toLowerCase().includes("quantum") ||
          product.name.toLowerCase().includes("sphere")
      );
      break;
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

  return (
    <div>
      <ShopPage product={filteredProducts} />
    </div>
  );
};

export default Page;
