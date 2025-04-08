"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-[#f5f8fc] !py-10 !px-4">
      <div className="max-w-[1216px] !mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#000030] text-3xl font-semibold !mb-2 text-center sm:text-left">
            Contact Us
          </h1>
          <p className="mb-10 text-[#000030] text-center sm:text-left">
            Let’s connect. We are here to help & we’d love to hear from you.
            Whether you have a question, a comment, or just want to chat, you
            can reach out to us through the contact form on this page.
          </p>
        </motion.div>

        {/* Form & Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col lg:flex-row justify-between items-center rounded-2xl bg-[#FFFFFF] !p-7 gap-6 shadow-lg"
        >
          {/* Form Section */}
          <div className="flex-1 w-full">
            <h1 className="text-[#000030] text-2xl font-semibold !mb-6 text-center lg:text-left">
              You can reach us anytime.
            </h1>
            <form onSubmit={handleSubmit} className="!space-y-4">
              {/* Email Field */}
              <div>
                <label className="block text-[#000000] text-[16px] font-medium !mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full !px-3 !py-3 border border-[#D1D1D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Full Name Field */}
              <div>
                <label className="block text-[#000000] text-[16px] font-medium !mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full !px-3 !py-3 border border-[#D1D1D1] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Description Field */}
              <div>
                <label className="block text-[#000000] text-[16px] font-medium !mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full !px-3 !py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Enter your message..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" variant="gold">
                Submit
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1  "
          >
            <Image
              src="/contactImg.png"
              className="rounded-xl"
              width={576}
              height={576}
              alt="Contact"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
