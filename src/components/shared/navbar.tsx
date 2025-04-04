"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Switch from "../ui/switch";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname: string = usePathname();
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [activeExplore, setActiveExplore] = useState<string | null>(null);
  const [activeShop, setActiveShop] = useState<string | null>(null);

  const exploreRef = useRef(null);
  const shopRef = useRef(null);

  const handleExploreMenuToggle = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsShopOpen(false);  // Close Shop menu when Explore is opened
  };

  const handleShopMenuToggle = () => {
    setIsShopOpen(!isShopOpen);
    setIsExploreOpen(false);  // Close Explore menu when Shop is opened
  };

  const handleExploreMenuItemClick = (href: string) => {
    setActiveExplore(href);
    setIsExploreOpen(false); // Close the dropdown
  };

  const handleShopMenuItemClick = (href: string) => {
    setActiveShop(href);
    setIsShopOpen(false); // Close the dropdown
  };

  // Reset "Explore" when navigating to Home
  useEffect(() => {
    if (pathname === "/") {
      setActiveExplore(null);
      setActiveShop(null);  // Reset Shop state on Home page
    }
  }, [pathname]);

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
    <>
      <nav className="bg-primary">
        <div className="max-w-[1216px] mx-auto h-[64px] w-dvw  sticky top-0 flex flex-row justify-between items-center z-50 relative">
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
          <div>
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex font-medium items-center gap-8 text-[#000030]">
                <li>
                  <Link
                    href="/"
                    onClick={() => {
                      setActiveExplore(null);
                      setActiveShop(null);  // Reset active states when navigating to Home
                    }}
                    className={`${pathname === "/" ? "font-bold text-white" : ""}`}
                  >
                    Home
                  </Link>
                </li>

                {/* Explore Dropdown */}
                <li ref={exploreRef} className="relative">
                  <button
                    className={`cursor-pointer flex items-center ${activeExplore ? "text-white font-bold" : ""}`}
                    onClick={handleExploreMenuToggle}
                  >
                    Explore <span className="text-[12px] ml-1">▼</span>
                  </button>
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isExploreOpen ? 1 : 0, y: isExploreOpen ? 0 : -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute px-3.5 cursor-pointer top-full left-0 w-[216px] py-4 text-[#000030] rounded-2xl mt-5 bg-white shadow-lg z-50 ${isExploreOpen ? "block" : "hidden"}`}
                  >
                    {[
                      { href: "/funActivities", label: "Fun Activities" },
                      { href: "/bookStory", label: "Books & Stories" },
                      { href: "/explore1", label: "Games" },
                      { href: "/explore1", label: "Meet Milly & Rio" },
                      { href: "/explore1", label: "Educational Resources" },
                      { href: "/explore1", label: "Community & Events" },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className={`p-2 hover:bg-gray-200 transition-all ease-in-out rounded-4xl ${activeExplore === item.href ? "font-bold text-blue-600" : ""}`}
                      >
                        <Link href={item.href} onClick={() => handleExploreMenuItemClick(item.href)}>
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </li>

                {/* Shop Dropdown */}
                <li ref={shopRef} className="relative">
                  <button
                    className={` flex items-center cursor-pointer ${activeShop ? "text-white font-bold" : ""} `}
                    onClick={handleShopMenuToggle}
                  >
                    Shop <span className="text-[12px] ml-1">▼</span>
                  </button>
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: isShopOpen ? 1 : 0, y: isShopOpen ? 0 : -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`  absolute px-3.5 cursor-pointer top-full left-0 w-[216px] py-4 text-[#000030] rounded-2xl mt-5 bg-white shadow-lg z-50 ${isShopOpen ? "block" : "hidden"}`}
                  >
                    {[
                      { href: "/shop1", label: "Gift Sets" },
                      { href: "/allProducts", label: "All Products" },
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
                        className={` ${activeShop === item.href ? "font-bold text-blue-600" : ""} p-2  transition-all ease-in-out rounded-4xl`}
                      >
                        <Link className={``} href={item.href} onClick={() => handleShopMenuItemClick(item.href)}>
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </li>

                <li>
                  <Link href="/about" className={`${pathname === "/about" ? "font-bold text-white" : ""}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className={`${pathname === "/blogs" ? "font-bold text-white" : ""}`}>
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`${pathname === "/contact" ? "font-bold text-white" : ""}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex flex-row justify-end items-center gap-4">
            <Switch />
            <Link href={"/login"}>
              <Button variant="gold" className="font-semibold">
                Log in
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
