"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Switch from "../ui/switch";

export default function Navbar() {
  return (
    <nav className="h-[64px] w-dvw bg-primary shadow-sm sticky flex flex-row justify-between items-center !px-[7%]">
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
      <div className="flex-1 h-full bg-pink-300 "></div>
      <div className="flex flex-row justify-end items-center gap-4">
        <Switch />
        <Button variant="gold" className="font-semibold">
          Log in
        </Button>
      </div>
    </nav>
  );
}
