"use client"; // Required for animations in Next.js App Router
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const BlogPage = () => {
  interface Blog {
    id: number;
    img: string;
    title: string;
    description: string;
  }

  const blogList: Blog[] = [
    {
      id: 1,
      img: "/blog/blog1.png",
      title: "A Day in Milly’s Shoes: Life with Type 1 Dia...",
      description:
        "Discover the power of play in developing young minds. Creative activities that turn education into an....",
    },
    {
      id: 2,
      img: "/blog/blog2.png",
      title: "Milly’s Magical CGM: A Superpower For Ty...",
      description:
        "Discover the power of play in developing young minds. Creative activities that turn education into an....",
    },
    {
      id: 3,
      img: "/blog/blog3.png",
      title: "How Friends Can Help: Being A Great Frie...",
      description:
        "Discover the power of play in developing young minds. Creative activities that turn education into an....",
    },
  ];

  return (
    <div className="!pt-10 !pb-16">
      <div className="max-w-[1216px] !mx-auto !px-4">
        {/* Title Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-[#000030] font-semibold text-3xl !mb-6">
            Latest Blogs
          </h1>
        </motion.div>

        {/* Blog List Section with Responsive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogList.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl !p-4 bg-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.03] border border-transparent hover:border-amber-500 cursor-pointer"
            >
              <Image
                src={blog.img}
                width={357}
                height={500}
                className="rounded-2xl object-cover w-full h-auto"
                alt={blog.title}
              />
              <div className="!mt-4">
                <h2 className="text-[#000030] font-semibold text-lg">
                  {blog.title}
                </h2>
                <p className="!mt-2 text-[#6D6D6D] text-sm">
                  {blog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
