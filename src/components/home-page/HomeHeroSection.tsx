"use client"; // Ensure animations work in Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";

export const HomeHeroSection = () => {
  interface ImageData {
    img: string;
  }

  const imageArray: ImageData[] = [
    { img: "img-1.png" },
    { img: "img-2.png" },
    { img: "img-3.png" },
    { img: "img-4.png" },
    { img: "img-5.png" },
  ];

  interface BlogData {
    img: string;
    title: string;
    description: string;
  }

  const blogData: BlogData[] = [
    {
      img: "blogImg1.png",
      title: "A Day in Milly’s Shoes: Life with Type 1 Dia...",
      description:
        "Discover the power of play in developing young minds. Creative activities that turn education into an...",
    },
    {
      img: "blogImg2.png",
      title: "Milly’s Magical CGM: A Superpower For Ty...",
      description:
        "Discover the power of play in developing young minds. Creative activities that turn education into an...",
    },
    {
      img: "blogImg3.png",
      title: "How Friends Can Help: Being A Great Frie...",
      description:
        "Discover the power of play in developing young minds. Creative activities that turn education into an...",
    },
  ];

  return (
    <div className="!py-20 bg-cover bg-center !mx-auto relative flex flex-col items-center ">
      {/* Image Grid Animation */}
      <motion.div
        className="w-2/3 !mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 !mb-10 "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        {imageArray.map((item, i) => (
          <motion.div
            key={i}
            className="flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <Image
              className="rounded-xl object-cover"
              src={`/${item.img}`}
              alt={`Illustration ${i + 1}`}
              width={132}
              height={132}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* Special Message Heading Animation */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center !m-0 !mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        A Special Message from Milly & Rio
      </motion.h1>

      {/* Hero Message Section Animation */}
      <motion.div
        className="bg-[#eaf9f6ad] border max-w-[90%] md:max-w-2/3 !m-0 !p-6 sm:!p-10 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Side - Text Content */}
          <motion.div
            className="max-w-lg text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-lg font-semibold">Hey there, friends!</p>
            <p className="mt-4">
              It’s Milly & Rio, and we’re so excited to welcome you to our
              world—a place where learning about Type 1 Diabetes is fun, easy,
              and filled with adventure!
            </p>
            <p className="mt-4">
              We know that having Type 1 Diabetes can sometimes feel like a big
              journey, but guess what? You’re never alone. Whether you’re just
              learning about T1D or you’ve been living with it for a while,
              we’re here to help with stories, games, and tips that make
              understanding diabetes SUPER cool!
            </p>
            <p className="!mt-6 font-semibold">
              With love and high-fives, <br /> Milly & Rio 🐶💙
            </p>
          </motion.div>

          {/* Right Side - Image Animation */}
          <motion.div
            className="w-full md:w-auto flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Image
              src="/img-6.png"
              className="object-cover rounded-3xl"
              width={400}
              height={400}
              alt="Milly & Rio illustration"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Latest Blogs Animation */}
      <motion.div
        className="max-w-[95%] md:max-w-[1216px] mx-auto !mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center !mb-6">
          Latest Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map((blog, i) => (
            <motion.div
              key={i}
              className="bg-white border hover:border-amber-300 !p-4 sm:p-6 rounded-3xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 + i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={`/${blog.img}`}
                alt={`Blog ${i + 1}`}
                width={357}
                height={242}
                className="rounded-2xl w-full"
              />
              <h2 className="text-[#000030] font-semibold text-lg !mt-4">
                {blog.title}
              </h2>
              <p className="!mt-2 text-[#6D6D6D] text-sm leading-7">
                {blog.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
