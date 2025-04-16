"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Product } from "./page";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const ShopPage = ({ product }: { product: Product[] }) => {
  return (
    <div className="bg-[#f5f8fc] !pb-7 lg:!pb-14 !pt-5 lg:!pt-10 !px-3 lg:!px-0 ">
      <div className="max-w-[1216px] !mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-[#000030] font-semibold text-3xl !mb-3">
            Milly & Rio’s Shop
          </h1>
          <p className="text-[#000030] !mb-10">
            Step into the world of Milly & Rio with our exclusive collection of
            fun and vibrant merchandise! From stylish apparel to must-have
            accessories, each item is designed to bring joy, adventure, and a
            touch of Milly & Rio magic into your everyday life. Explore our shop
            and find the perfect gear to showcase your love for learning,
            friendship, and Type 1 Diabetes awareness!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product.map((product) => (
            <motion.div
              key={product.id}
              className="w-[286px] !mx-auto !p-4 bg-white rounded-3xl hover:border border-amber-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Link href={`allProducts/${product.id}/`}>
                <Image
                  width={254}
                  height={216}
                  src={product.image}
                  alt={product.name}
                  className="object-contain rounded-lg h-[216px] w-full "
                />
                <h2 className="!mt-4 text-[#000030] font-semibold text-[16px]">
                  {product.name}
                </h2>
                <p className="!mt-2 hover:text-yellow-300 text-[#6D6D6D]">
                  $ {product.price.toFixed(2)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex lg:flex-row flex-col items-center !space-x-2 bg-white !px-3 !py-2  rounded-lg !mt-[46px] ">
   
            <button className="flex items-center !px-3 !py-1 text-[#000030] rounded-md hover:bg-gray-200">
              <ChevronLeft size={18} />
              <span className="ml-1">Previous</span>
            </button>


            <button className="!px-3 !py-1 text-[#000030] hover:bg-gray-200 rounded-md">
              1
            </button>
            <button className="!px-3 !py-1 border border-gray-400 bg-white rounded-md">
              2
            </button>
            <button className="!px-3 !py-1 text-[#000030] hover:bg-gray-200 rounded-md">
              3
            </button>
            <span className="!px-3 !py-1 text-[#000030]">...</span>
            <button className="!px-3 !py-1 text-[#000030] hover:bg-gray-200 rounded-md">
              9
            </button>
            <button className="flex items-center !px-3 !py-1 text-[#000030] rounded-md hover:bg-gray-200">
              <span className="!mr-1">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default ShopPage;
