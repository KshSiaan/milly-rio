"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import PaymentForm from "./payment-form";
import { Allproducts } from "@/lib/products";

interface productType {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
}
const Page = ({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) => {
  const [formFilled, setFormFilled] = useState(false);
  const [productData, setProductData] = useState<productType | null>(null);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  useEffect(() => {
    const allFilled =
      country.trim() && state.trim() && city.trim() && zip.trim();
    setFormFilled(Boolean(allFilled));
  }, [country, state, city, zip]);

  // const singleProduct: product = {
  //   id: 1,
  //   image: "/product/product2.png",
  //   name: "T-shirts for children",
  //   price: 4820.0,
  //   description:
  //     "Introducing the Gizmo Pro, the ultimate gadget for tech enthusiasts! With its sleek design and cutting-edge features, this device is perfect for anyone looking to enhance their daily routine. The Gizmo Pro boasts a powerful battery life, ensuring you stay connected throughout the day. Its user-friendly interface makes navigation a breeze, while the high-resolution display brings your content to life. Whether you're streaming your favorite shows or tackling work projects, the Gizmo Pro delivers exceptional performance. Upgrade your tech game with the Gizmo Pro today!",
  // };

  useEffect(() => {
    async function Logger() {
      const { id: fixedId } = await params;

      const foundProduct = Allproducts.find((x) => String(x.id) === fixedId);

      if (foundProduct) {
        setProductData(foundProduct);
      } else {
        setProductData(null); // or handle this case as needed
      }
    }

    Logger();
  }, [params]);

  return (
    <div className="bg-[#f5f8fc]">
      <div className="max-w-[1216px] !mx-auto !pt-5 lg:!pt-10 !pb-12 lg:!pb-24 !px-3 lg:!px-0">
        <div className="flex items-center gap-2.5">
          <div>
            <Link href={"/allProducts"}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_269_793"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="56"
                  height="56"
                >
                  <rect width="56" height="56" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_269_793)">
                  <path
                    d="M37.3333 51.3333L14 28L37.3333 4.66666L41.475 8.80832L22.2833 28L41.475 47.1917L37.3333 51.3333Z"
                    fill="#000030"
                  />
                </g>
              </svg>
            </Link>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-[#000030]">Back</h1>
          </div>
        </div>

        {/* product description */}
        <div className="!mt-6 flex flex-col lg:flex-row gap-6">
          {/* left side */}
          <div className="max-w-[699px]">
            <Image
              src={
                productData?.image
                  ? productData?.image
                  : "/product/product1.png"
              }
              width={699}
              height={424}
              className="rounded-3xl h-[424px] object-cover"
              alt=""
            />
            <div className="flex flex-col lg:flex-row justify-between items-center !mt-6">
              <div>
                <h1 className="text-[#000030] font-semibold text-[16px]">
                  {productData?.name}
                </h1>
              </div>
              <div>
                <p className="text-[#FFC107] font-semibold text-xl">
                  ${productData?.price}
                </p>
              </div>
            </div>
            <div className="!mt-4">
              <p className="text-[#000030] text-[16px]">
                {productData?.description}
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <div className="bg-white !p-4 rounded-2xl">
              <h1 className="text-[#000030] font-semibold text-xl">
                Shipping Address
              </h1>
              <div className="flex flex-col !mt-6">
                <input
                  type="text"
                  className="!p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D]"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <input
                  type="text"
                  className="!mt-4 !p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D]"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  type="text"
                  className="!mt-4 !p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D]"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  type="number"
                  className="!mt-4 !p-2 rounded-[8px] border-none hover:outline-0 focus:outline-0 bg-[#F6F6F6] placeholder:text-[#6D6D6D]"
                  placeholder="ZIP Code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>

            {/* card information */}
            <PaymentForm formFilled={formFilled} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
