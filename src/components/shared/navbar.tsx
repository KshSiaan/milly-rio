"use client";
import Image from "next/image";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Switch from "../ui/switch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Howl } from "howler";
import { Button } from "../ui/button";
// Define types for menu items
interface MenuItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const pathname: string = usePathname();
  const [isExploreOpen, setIsExploreOpen] = useState(false); // desktop
  const [isShopOpen, setIsShopOpen] = useState(false); // desktop
  const [isExploreMobileOpen, setIsExploreMobileOpen] = useState(false);
  const [isShopMobileOpen, setIsShopMobileOpen] = useState(false);

  const [activeExplore, setActiveExplore] = useState<string | null>(null);
  const [activeShop, setActiveShop] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const [songPlaying, setSongPlaying] = useState(true);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/music/Milly and Rio Hospital Adventure .mp3"],
      loop: true,
    });

    if (songPlaying) {
      soundRef.current.play();
    }

    return () => {
      soundRef.current?.stop();
      soundRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    const sound = soundRef.current;
    if (!sound) return;

    if (songPlaying) {
      if (!sound.playing()) sound.play();
    } else {
      sound.pause();
    }
  }, [songPlaying]);

  //?? Others
  const openMenu = () => {
    setOpenMobileMenu((prev) => !prev);
  };

  const exploreRef = useRef<HTMLLIElement>(null);
  const shopRef = useRef<HTMLLIElement>(null);

  const handleExploreMenuToggle = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsShopOpen(false); // Close Shop menu when Explore is opened
  };

  const handleShopMenuToggle = () => {
    setIsShopOpen(!isShopOpen);
    setIsExploreOpen(false);
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
      setActiveShop(null); // Reset Shop state on Home page
    }
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target as Node) &&
        shopRef.current &&
        !shopRef.current.contains(event.target as Node)
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

  // Define menu items to avoid repetition
  const exploreItems: MenuItem[] = [
    { href: "/funActivities", label: "Fun Activities" },
    { href: "/bookStory", label: "Books & Stories" },
    { href: "#", label: "Games" },
    { href: "/explore1", label: "Meet Milly & Rio" },
    { href: "/explore1", label: "Educational Resources" },
    { href: "/explore1", label: "Community & Events" },
  ];

  const shopItems: MenuItem[] = [
    { href: "/shop1", label: "Gift Sets" },
    { href: "/allProducts", label: "All Products" },
    { href: "/shop1", label: "T-Shirts" },
    { href: "/shop1", label: "Hoodies & Sweatshirts" },
    { href: "/shop1", label: "Kids' Collection" },
    { href: "/shop1", label: "Diabetes Awareness" },
    { href: "/shop1", label: "Accessories" },
    { href: "/shop1", label: "Limited Edition" },
  ];

  return (
    <>
      <nav className="bg-primary fixed top-0 left-0 w-full z-30">
        <div>
          <div className="w-full lg:max-w-2/3 !mx-auto h-[64px] sticky top-0 flex flex-row justify-between items-center z-50 !px-3 lg:!px-2">
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
                        setActiveShop(null); // Reset active states when navigating to Home
                      }}
                      className={`${
                        pathname === "/" ? "font-bold text-black" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  {/* Explore Dropdown */}
                  <li ref={exploreRef} className="relative">
                    <button
                      className={`cursor-pointer flex items-center ${
                        activeExplore ? "text-white font-bold" : ""
                      }`}
                      onClick={handleExploreMenuToggle}
                      type="button"
                    >
                      Explore{" "}
                      <span className="!ml-1">
                        <ChevronDownIcon size={16} />
                      </span>
                    </button>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: isExploreOpen ? 1 : 0,
                        y: isExploreOpen ? 0 : -10,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`absolute !px-3.5 cursor-pointer top-full left-0 w-[216px] !py-4 text-[#000030] rounded-lg !mt-5 bg-white shadow-lg z-50 ${
                        isExploreOpen ? "block" : "hidden"
                      }`}
                    >
                      {exploreItems.map((item, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className={`!p-2 transition-all ease-in-out rounded-none ${
                            activeExplore === item.href
                              ? "font-bold text-blue-600"
                              : ""
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={() =>
                              handleExploreMenuItemClick(item.href)
                            }
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </li>

                  {/* Shop Dropdown */}
                  <li ref={shopRef} className="relative">
                    <button
                      className={`flex items-center cursor-pointer ${
                        activeShop ? "text-white font-bold" : ""
                      }`}
                      onClick={handleShopMenuToggle}
                      type="button"
                    >
                      Shop{" "}
                      <span className="!ml-1">
                        <ChevronDownIcon size={16} />
                      </span>
                    </button>
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: isShopOpen ? 1 : 0,
                        y: isShopOpen ? 0 : -10,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`absolute !px-3.5 cursor-pointer top-full left-0 w-[216px] !py-4 text-[#000030] rounded-2xl !mt-5 bg-white shadow-lg z-50 ${
                        isShopOpen ? "block" : "hidden"
                      }`}
                    >
                      {shopItems.map((item, index) => (
                        <motion.li
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className={`${
                            activeShop === item.href
                              ? "font-bold text-blue-600"
                              : ""
                          } !p-2 transition-all ease-in-out rounded-4xl`}
                        >
                          <Link
                            className=""
                            href={item.href}
                            onClick={() => handleShopMenuItemClick(item.href)}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </li>

                  <li>
                    <Link
                      href="/about"
                      className={`${
                        pathname === "/about" ? "font-bold text-white" : ""
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blogs"
                      className={`${
                        pathname === "/blogs" ? "font-bold text-white" : ""
                      }`}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={`${
                        pathname === "/contact" ? "font-bold text-white" : ""
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="hidden lg:flex flex-row justify-end items-center gap-4">
              <div>
                <Switch play={songPlaying} setPlay={setSongPlaying} />
              </div>

              <Button variant="gold" className="font-semibold" asChild>
                <Link href="/login">Log in</Link>
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={openMenu}
              className="lg:hidden block text-2xl font-semibold cursor-pointer"
              type="button"
              aria-label={openMobileMenu ? "Close menu" : "Open menu"}
            >
              {openMobileMenu ? (
                <IoClose className="text-4xl font-bold block" />
              ) : (
                <IoMenu className="text-4xl font-bold block" />
              )}
            </button>

            <AnimatePresence>
              {openMobileMenu && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="fixed right-0 w-2/3 top-16 bg-gray-100 h-full shadow-lg z-50 !p-6"
                >
                  <div>
                    {/* Mobile Navigation */}
                    <nav>
                      <ul className="flex flex-col font-medium gap-4 text-[#000030]">
                        {/* Home */}
                        <li>
                          <Link
                            href="/"
                            onClick={() => {
                              setActiveExplore(null);
                              setActiveShop(null);
                              setOpenMobileMenu(false);
                            }}
                            className={`${
                              pathname === "/" ? "font-bold text-black" : ""
                            }`}
                          >
                            Home
                          </Link>
                        </li>

                        {/* Explore Dropdown */}
                        <li className="relative">
                          <button
                            className="flex items-center gap-2"
                            onClick={() =>
                              setIsExploreMobileOpen(!isExploreMobileOpen)
                            }
                          >
                            Explore
                            {isExploreMobileOpen ? (
                              <ChevronUpIcon size={20} />
                            ) : (
                              <ChevronDownIcon size={20} />
                            )}
                          </button>

                          <AnimatePresence>
                            {isExploreMobileOpen && (
                              <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="absolute !px-3.5 top-full left-0 w-[216px] !py-4 text-[#000030] !mt-5 bg-white shadow-lg z-50"
                              >
                                {exploreItems.map((item, index) => (
                                  <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: "easeInOut",
                                    }}
                                    className={`!p-2 hover:bg-gray-200 transition-all ${
                                      activeExplore === item.href
                                        ? "font-bold text-blue-600"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={() => {
                                        handleExploreMenuItemClick(item.href);
                                        setOpenMobileMenu(false);
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>

                        {/* Shop Dropdown */}
                        <li className="relative">
                          <button
                            className={`flex items-center cursor-pointer ${
                              activeShop ? "text-black font-bold" : ""
                            }`}
                            onClick={() =>
                              setIsShopMobileOpen(!isShopMobileOpen)
                            }
                            type="button"
                          >
                            Shop{" "}
                            <span className="text-[12px] !ml-1">
                              {isShopMobileOpen ? (
                                <ChevronUpIcon size={20} />
                              ) : (
                                <ChevronDownIcon size={20} />
                              )}
                            </span>
                          </button>

                          <AnimatePresence>
                            {isShopMobileOpen && (
                              <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="absolute !px-3.5 top-full left-0 w-[216px] !py-4 text-[#000030] !mt-5 bg-white shadow-lg z-40"
                              >
                                {shopItems.map((item, index) => (
                                  <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: "easeInOut",
                                    }}
                                    className={`!p-2 hover:bg-gray-200 transition-all rounded-lg ${
                                      activeShop === item.href
                                        ? "font-bold text-blue-600"
                                        : ""
                                    }`}
                                  >
                                    <Link
                                      href={item.href}
                                      onClick={() => {
                                        handleShopMenuItemClick(item.href);
                                        setOpenMobileMenu(false);
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </li>

                        {/* Other Links */}
                        <li>
                          <Link
                            href="/about"
                            onClick={() => setOpenMobileMenu(false)}
                            className={`${
                              pathname === "/about"
                                ? "font-bold text-black"
                                : ""
                            }`}
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/blogs"
                            onClick={() => setOpenMobileMenu(false)}
                            className={`${
                              pathname === "/blogs"
                                ? "font-bold text-black"
                                : ""
                            }`}
                          >
                            Blogs
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/contact"
                            onClick={() => setOpenMobileMenu(false)}
                            className={`${
                              pathname === "/contact"
                                ? "font-bold text-black"
                                : ""
                            }`}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <div className="flex flex-col items-end w-full !mt-10 gap-4">
                      <Switch setPlay={setSongPlaying} play={songPlaying} />

                      <Button
                        variant="gold"
                        className="font-semibold !mt-3 w-full"
                        asChild
                      >
                        <Link href="/login">Log in</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="h-[64px] w-full"></div>
    </>
  );
}
