"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LoginFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row justify-center !px-2 gap-3 items-center lg:gap-16"
    >
      <motion.div
        className="lg:!mt-20 !mt-10 items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white !px-6 rounded-4xl shadow-lg lg:w-[496px] w-full !py-8 lg:!py-16 border border-blue-200">
          <h2 className="lg:text-[28px] text-xl text-center text-[#000030] font-bold">
            Sign in
          </h2>
          <p className="text-center text-[#888888] text-xs !mt-2 !pb-8 lg:!pb-16">
            Enter correct information to sign in the Milly & Rio account.
          </p>
          <form>
            <motion.fieldset
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative border border-gray-300 rounded-lg !px-3 !py-2 transition-all ${
                emailFocused || email ? "border-blue-500" : ""
              }`}
            >
              <legend
                className={`absolute text-sm transition-all ${
                  emailFocused || email
                    ? "-top-3 left-2 text-[#F6BB09] px-1 bg-white"
                    : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030]"
                }`}
              >
                Email
              </legend>
              <input
                type="email"
                className="w-full placeholder-[#000030] outline-none bg-transparent text-gray-700 !py-1"
                placeholder={emailFocused ? "Enter your email" : ""}
                value={email}
                onFocus={() => setEmailFocused(true)}
                onBlur={(e) => setEmailFocused(e.target.value !== "")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.fieldset>
            <motion.fieldset
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative border border-gray-300 rounded-lg !mt-4 !px-3 !py-2 transition-all ${
                passwordFocused || password ? "border-blue-500" : ""
              }`}
            >
              <legend
                className={`absolute text-sm transition-all ${
                  passwordFocused || password
                    ? "-top-3 left-2 text-[#F6BB09] px-1 bg-white"
                    : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030]"
                }`}
              >
                Password
              </legend>
              <input
                type={passwordVisible ? "text" : "password"}
                className="w-full placeholder-[#000030] outline-none bg-transparent text-gray-700 py-1"
                placeholder={passwordFocused ? "Enter your password" : ""}
                value={password}
                onFocus={() => setPasswordFocused(true)}
                onBlur={(e) => setPasswordFocused(e.target.value !== "")}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </motion.fieldset>
            <div className="text-right !mt-2">
              <Link href="/forgot-password" className="text-yellow-500 text-sm">
                Forget password?
              </Link>
            </div>
            <motion.div>
              <Button
                className="w-full lg:!mt-14 !my-4 font-semibold"
                variant="gold"
              >
                Login
              </Button>
            </motion.div>
          </form>
          <p className="text-center text-gray-600 !mt-2">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-yellow-500 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
      <motion.div
        className="!mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/signUpImg.png.png"
          alt="Milly & Rio logo"
          width={543}
          height={460}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoginFrom;
