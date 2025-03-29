"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Switch from "../ui/switch";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Refs for dropdowns
  const exploreRef = useRef(null);
  const shopRef = useRef(null);

  const handleExploreMenuToggle = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsShopOpen(false);
  };

  const handleShopMenuToggle = () => {
    setIsShopOpen(!isShopOpen);
    setIsExploreOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target) &&
        shopRef.current &&
        !shopRef.current.contains(event.target)
      ) {
        setIsExploreOpen(false);
        setIsShopOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <nav className="h-[64px] w-dvw bg-primary shadow-sm sticky flex flex-row justify-between   items-center !px-[7%]">
      <div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex flex-row justify-start items-center gap-4"
        >
          <Image
            src="/image/logo.webp"
            height={48}
            width={48}
            alt="logo"
            className="rounded-md"
          />
          <h1 className="font-bold font-baloo text-2xl">Milly & Rio</h1>
        </motion.div>
      </div>
      <div className=" ">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex font-medium items-center gap-8 text-[#000030]">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>

            {/* Explore Dropdown */}
            <li ref={exploreRef} className="relative">
              <button
                className="hover:text-gray-700 cursor-pointer flex items-center"
                onClick={handleExploreMenuToggle}
              >
                Explore <span className="text-[12px] ml-1">▼</span>
              </button>
              <motion.ul
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: isExploreOpen ? 1 : 0, y: isExploreOpen ? 0 : -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute px-3.5 cursor-pointer top-full left-0 w-[216px] py-4 text-[#000030] rounded-2xl mt-5 bg-white shadow-md ${isExploreOpen ? "block" : "hidden"
                  }`}
              >
                {[
                  { href: "/explore1", label: "Fun Activities" },
                  { href: "/explore1", label: "Books & Stories" },
                  { href: "/explore1", label: "Games" },
                  { href: "/explore1", label: "Meet Milly & Rio" },
                  { href: "/explore1", label: "Educational Resources" },
                  { href: "/explore1", label: "Community & Events" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-2 hover:bg-gray-200 transition-all ease-in-out rounded-4xl"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </li>

            {/* Shop Dropdown */}
            <li ref={shopRef} className="relative">
              <button
                className="hover:text-gray-700 flex items-center cursor-pointer"
                onClick={handleShopMenuToggle}
              >
                Shop <span className="text-[12px] ml-1">▼</span>
              </button>
              <motion.ul
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: isShopOpen ? 1 : 0, y: isShopOpen ? 0 : -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute px-3.5 top-full left-0 w-[216px] text-[#000030] rounded-2xl py-4 mt-5 bg-white shadow-md ${isShopOpen ? "block" : "hidden"
                  }`}
              >
                {[
                  { href: "/shop1", label: "Gift Sets" },
                  { href: "/shop1", label: "All Products" },
                  { href: "/shop1", label: "T-Shirts" },
                  { href: "/shop1", label: "Hoodies & Sweatshirts" },
                  { href: "/shop1", label: "Kids’ Collection" },
                  { href: "/shop1", label: "Diabetes Awareness" },
                  { href: "/shop1", label: "Accessories" },
                  { href: "/shop1", label: "Limited Edition" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="p-2 hover:bg-gray-200 transition-all ease-in-out rounded-4xl"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </motion.li>
                ))}
              </motion.ul>
            </li>

            <li>
              <Link href="/about" className="hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-gray-700">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

      </div>
      <div className="flex flex-row justify-end items-center gap-4">
        <Switch />
        <Link href={"/login"}>
          <Button variant="gold" className="font-semibold">
            Log in
          </Button>
        </Link>
      </div>
    </nav>
  );
}
