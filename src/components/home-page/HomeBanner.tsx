"use client"; // Ensures animations work in Next.js App Router

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div className="bg-primary relative">
      {/* Background Image */}
      <div className="bg-[url('/homeBgImg.png')] h-[calc(100dvh-64px)] w-full bg-contain bg-no-repeat bg-center !mx-auto"></div>

      {/* Content Wrapper */}
      <motion.div
        className="absolute top-20 md:top-[18%] lg:top-[22%] left-1/2 transform -translate-x-1/2 w-full !px-4 lg:!px-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full lg:w-3/4 !mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Left Section */}
          <motion.div
            className="w-full lg:w-[602px] text-center lg:text-left"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#000030] font-bold leading-tight">
              Milly & Rio
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-[#000030] !mt-2">
              Adventures in learning, friendship & discovering!
            </p>

            {/* Buttons Animation */}
            <motion.div
              className="!mt-6 lg:!mt-16 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                className="w-full sm:w-[200px] lg:w-[286px] rounded-4xl text-white text-lg lg:text-xl font-bold hover:text-[#FFC107] hover:bg-white"
                variant={"gold"}
                size="lg"
                asChild
              >
                <Link href="/bookStory">Explore books</Link>
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-[200px] lg:w-[286px] rounded-4xl bg-white text-[#000030] text-lg hover:bg-white hover:border-2 border-[#FFC107] lg:text-xl font-bold hover:text-[#FFC107]"
              >
                <Link href="/funActivities">Fun activities</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Image Animation */}
          <motion.div
            className="!mt-8 lg:!mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              className="rounded-full object-contain w-[250px] md:w-[400px] lg:w-[550px] xl:w-[610px] h-auto"
              src={"/homeImg1.png"}
              width={610}
              height={610}
              alt="Milly & Rio"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeBanner;
