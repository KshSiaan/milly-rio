"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  interface About {
    title: string;
    description: string;
  }

  const aboutData: About[] = [
    {
      title: "Meet Milly 💖",
      description:
        "Milly is a bright, brave, and curious 6-year-old girl who never lets anything slow her down—not even Type 1 Diabetes! She’s always eager to learn, explore, and solve mysteries. With her long black hair, expressive brown eyes, and signature orange-and-teal outfit, Milly is a role model for kids everywhere, teaching them that they can achieve anything with courage and knowledge. She always carries her diabetes kit and wears a medical alert bracelet to stay safe and prepared.",
    },
    {
      title: "Meet Rio 🐶",
      description:
        "Rio is Milly’s loyal Yorkshire Terrier and best friend! With his silky golden and gray fur, perky ears, and a tail that curls on his back, Rio is always by Milly’s side. But Rio isn’t just any pup—he has a super sniffer that can sense changes in Milly’s blood sugar levels! His nose glows softly when everything is okay and brightly when he senses a change, alerting Milly to check her glucose levels.",
    },
    {
      title: "Our Mission 🎯",
      description:
        "Milly & Rio are here to make learning about Type 1 Diabetes fun, engaging, and empowering for children and families. Whether it’s through books, games, or exciting adventures, Milly & Rio help kids understand their condition, build confidence, and know they’re never alone.",
    },
    {
      title: "Join the Adventure! 🚀",
      description:
        "Explore the world of Milly & Rio through books, interactive games, fun activities, and more! Stay tuned for exciting new stories, educational tools, and adorable Milly & Rio merchandise! Because every child deserves to feel brave, strong, and unstoppable—just like Milly! 💪✨",
    },
  ];

  return (
    <div className="!pt-10 bg-[#f5f8fc] !pb-20 !px-2">
      <div className="max-w-[1216px] !mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center sm:text-left"
        >
          <h1 className="text-3xl dark:text-white text-[#000030] font-semibold !mb-4">
            Welcome to the world of Milly & Rio! 🌟
          </h1>
          <p className="text-[#000030] mb-6">
            Milly & Rio is an inspiring and fun-filled brand designed to
            educate, empower, and entertain children, especially those living
            with Type 1 Diabetes. Through engaging stories, interactive
            activities, and adorable characters, Milly & Rio help kids and
            families learn about diabetes care while embracing adventure,
            friendship, and self-confidence.
          </p>
        </motion.div>

        {/* About Sections */}
        <div>
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="!mb-10"
            >
              <h2 className="text-2xl text-[#000030] font-semibold !mb-4">
                {item.title}
              </h2>
              <p className="text-[#000030]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
