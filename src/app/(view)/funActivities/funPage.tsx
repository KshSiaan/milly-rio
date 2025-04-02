"use client"; // Ensure animations work properly in Next.js App Router
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FunData {
    id: number;
    title: string;
    description: string;
}

const fun: FunData[] = [
    {
        id: 1,
        title: "✅ Rio’s Super Sniffer Challenges 🐶🔍",
        description: "Help Rio use his super sniffer to detect hidden objects and alert Milly when it’s time to check her glucose levels! Can you complete all the challenges?",
    },
    {
        id: 2,
        title: "✅ Milly’s Magical Maze 🏃‍♀️🛑",
        description: "Guide Milly & Rio through a fun maze inside the hospital as they find their way to the diabetes clinic. Watch out for tricky turns!",
    },
    {
        id: 3,
        title: "✅ Find the Hidden Objects 🔎✨",
        description: "Search for hidden diabetes care tools, healthy snacks, and fun surprises in an exciting interactive scene! Can you find them all?",
    },
    {
        id: 4,
        title: "✅ Super Sniffer Hide & Seek 👀🐾",
        description: "Rio is hiding—can you find him? Solve the clues and learn about diabetes care tools along the way!",
    },
    {
        id: 5,
        title: "✅ Coloring Pages & Printables 🎨🖍️",
        description: "Download and print fun coloring pages featuring Milly, Rio, and their adventures! Grab your crayons and get creative!",
    },
    {
        id: 6,
        title: "✅ Milly’s Magical CGM Game ⏳📲",
        description: "Learn how Milly’s Continuous Glucose Monitor (CGM) works in a fun, interactive way. Help Milly track her blood sugar and stay active!",
    },
];

interface Game {
    id: number;
    img: string;
    title: string;
}

const gamesData: Game[] = [
    { id : 1,  img: "/image/game1.png", title: "Coloring Pages" },
    { id :2 ,  img: "/image/game2.png", title: "Puzzle Game" },
    { id :3 ,  img: "/image/game3.png", title: "Find The Hidden Objects" },
    { id :4 ,  img: "/image/game4.png", title: "Matching Game" },
    { id :5 ,   img: "/image/game5.png", title: "Maze Challenge" },
    { id :6 ,  img: "/image/game6.png", title: "Create Your Own Story" },
    { id :7 ,  img: "/image/game7.png", title: "Carbohydrate Counting Game" },
    { id : 8,  img: "/image/game8.png", title: "Spot The Difference" },
    { id : 9,  img: "/image/game9.png", title: "Design Rio’s Superpower" },
    { id : 10,  img: "/image/game10.png", title: "T1D Quiz Game" },
];

const FunPage = () => {
    return (
        <div className="bg-[#f5f8fc] pt-10 pb-24">
            <div className="max-w-[1216px] mx-auto lg:px-0 px-4">

                {/* Header Section with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-3xl text-[#000030] font-semibold">Welcome to the Fun Zone! 🚀✨</h1>
                    <p className="text-sm text-[#000030] mt-4">
                        Join Milly & Rio on exciting adventures with fun, interactive activities designed just
                        for kids! This page is packed with engaging games, puzzles, and challenges that make
                        learning about Type 1 Diabetes fun and easy.
                    </p>
                </motion.div>

                {/* Activities Section with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-8"
                >
                    <h2 className="text-[#000000] text-2xl font-semibold">🌟 Explore Our Fun Activities!</h2>

                    <div className="mt-4 space-y-4">
                        {fun.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-sm text-[#000030]">{item.title}</h3>
                                <p className="text-sm text-[#000030] mt-1.5">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Games Section with Responsive Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="mt-10"
                >
                    <h2 className="text-[#000030] text-2xl font-semibold">🎮 Fun Games & Challenges</h2>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {gamesData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 "
                            >
                                {
                                    index % 2 == 0 ?
                                        <div>
                                            <Link href={`/funActivities/${item.id}`}>
                                                <Image src={item.img} width={254} height={100} className="rounded-xl" alt={item.title} />
                                                <h3 className="text-sm text-[#000030] mt-2">{item.title}</h3>
                                            </Link>
                                        </div>
                                        :
                                        <div>
                                            <Image src={item.img} width={254} height={100} className="rounded-xl" alt={item.title} />
                                            <h3 className="text-sm text-[#000030] mt-2">{item.title}</h3>
                                        </div>
                                }
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default FunPage;
