"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BookStoryPage = () => {
    interface BookData {
        id: number;
        img: string;
        title: string;
    }

    const books: BookData[] = [
        { id: 1, img: "/book1.png", title: "The ABCs Adventures - Type 1 Diabetes" },
        { id: 2, img: "/book2.png", title: "Rio’s Super Sniffer Adventure Milly" },
        { id: 3, img: "/book3.png", title: "Hospital Adventure - The ABC’s Of Type 1 Diabetes" },
        { id: 4, img: "/book4.png", title: "Hospital Adventure - The ABC’s Of Type 1 Diabetes" },
        { id: 5, img: "/book5.png", title: "The ABC’s Of Type 1 Diabetes" },
        { id: 6, img: "/book6.png", title: "The ABCs Adventures - Type 1 Diabetes" },
        { id: 7, img: "/book7.png", title: "Hospital Adventure - The ABC’s Of Type 1 Diabetes" },
        { id: 8, img: "/book8.png", title: "Hospital Adventure - The ABC’s Of Type 1 Diabetes" }
    ];

    return (
        <div className="bg-[#f5f8fc] ">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-[1216px] mx-auto py-16 ">
                {/* Header */}
                <motion.div

                    className="text-center"
                >
                    <h1 className="font-semibold text-[#000030] text-4xl leading-tight">
                        Welcome to Milly & Rio’s Book Nook! 📚
                    </h1>
                    <p className="mt-2 text-[#000030] text-base">
                        Get ready to dive into adventure, learning, and fun with Milly & Rio! Whether you’re solving mysteries,
                        exploring new places, or learning about Type 1 Diabetes in the most exciting way, these books are packed
                        with heartwarming stories and valuable lessons.
                    </p>
                    <span className="mt-4 text-[#000030] text-base block">
                        Grab your favorite book, curl up with Rio (or your own furry friend!), and let the adventure begin!
                        Which story will you explore first? 🚀🐶✨
                    </span>
                </motion.div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
                    {books.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="w-full bg-white rounded-2xl group transition-all duration-300 hover:shadow-lg hover:shadow-yellow-300"
                        >
                            <Link href={""}>
                                <Image
                                    width={286}
                                    height={291}
                                    src={book.img}
                                    alt={book.title}
                                    className="rounded-t-2xl w-full object-cover"
                                />
                                <div className="text-[#6D6D6D] hover:text-[#000000] transition-all duration-75 p-4 text-center border-b-4 border-transparent ">
                                    {book.title}
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>


                {/* pagenation  */}

                <motion.div
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div className="flex items-center space-x-2 bg-white px-3 py-2  rounded-lg mt-[46px] ">
                        {/* Previous Button */}
                        <button className="flex items-center px-3 py-1 text-[#000030] rounded-md hover:bg-gray-200">
                            <ChevronLeft size={18} />
                            <span className="ml-1">Previous</span>
                        </button>

                        {/* Page Numbers */}
                        <button className="px-3 py-1 text-[#000030] hover:bg-gray-200 rounded-md">1</button>
                        <button className="px-3 py-1 border border-gray-400 bg-white rounded-md">2</button>
                        <button className="px-3 py-1 text-[#000030] hover:bg-gray-200 rounded-md">3</button>
                        <span className="px-3 py-1 text-[#000030]">...</span>
                        <button className="px-3 py-1 text-[#000030] hover:bg-gray-200 rounded-md">9</button>

                        {/* Next Button */}
                        <button className="flex items-center px-3 py-1 text-[#000030] rounded-md hover:bg-gray-200">
                            <span className="mr-1">Next</span>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </motion.div>


            </motion.div>
        </div>
    );
};

export default BookStoryPage;
