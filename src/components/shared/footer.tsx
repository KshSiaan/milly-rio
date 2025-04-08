import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" !pt-10">
      <div className="max-w-[90%] !mx-auto !px-6 sm:!px-10 md:!px-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
          {/* item 1 */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Image
                src={"/logo.png"}
                width={56}
                height={56}
                className="rounded-[8px]"
                alt="logo"
              />
            </div>
            <div className="!pt-6 text-[16px] text-[#000000CC]">
              <p>Milly & Rio</p>
              <p>P.O. BOX 2025</p>
              <p>St. Louis, MO 63104</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 !pt-4">
              <MdEmail className="text-[#000030] text-lg" />
              <p className="underline text-[16px] text-[#000000CC]">
                Info@millyandrio.com
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="text-center md:text-left">
            <h1 className="text-[#000000] font-bold text-[16px]">Programs</h1>
            <ul className="!mt-6 space-y-2">
              <li>
                <Link className="text-[#000000CC] text-[16px]" href={""}>
                  Books
                </Link>
              </li>
              <li>
                <Link className="text-[#000000CC] text-[16px]" href={""}>
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-[#000000CC] text-[16px]" href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#000000CC] text-[16px]"
                  href={"/contact"}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          {/* item 3 */}
          <div className="text-center md:text-left">
            <h1 className="text-[#000000] font-bold text-[16px]">
              Help & Support
            </h1>
            <ul className="!mt-6 space-y-2">
              <li>
                <Link className="text-[#000000CC] text-[16px]" href={""}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-[#000000CC] text-[16px]" href={""}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="text-[#000000CC] text-[16px]" href={"/about"}>
                  Terms & conditions
                </Link>
              </li>
            </ul>
          </div>
          {/* item 4 */}
          <div className="text-center md:text-left">
            <h1 className="text-[#000000] font-bold text-[16px]">
              Social Media
            </h1>
            <div className="!mt-6 flex justify-center md:justify-start gap-6 text-2xl">
              <Link href={"https://www.facebook.com/"}>
                <FaFacebook />
              </Link>
              <Link href={"https://www.google.com/"}>
                <FcGoogle />
              </Link>
              <Link href={"https://www.youtube.com/"}>
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="border border-[#000000] !mt-[74px] "></div>
        <p className=" text-center text-[#1F0000] text-sm !mt-7  ">
          © milly&rio 2024 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
