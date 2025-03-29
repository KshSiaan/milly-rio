"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const SignupForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" lg:mt-20 mt-[20%] flex flex-col lg:flex-row  items-center justify-center lg:gap-16 "
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white px-6 rounded-lg shadow-lg shadow-[#EDEDED40] lg:w-[496px] w-full py-8 border  lg:py-16 "
            >
                <h2 className="lg:text-[28px] text-xl  text-center text-[#000030] font-bold ">
                    Sign up
                </h2>
                <p className="text-center text-[#888888] text-xs mt-2 pb-8 lg:pb-16  ">
                    Give us some information to create Milly & Rio account.
                </p>

                <form>
                    <motion.fieldset
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`relative border border-gray-300 rounded-lg px-3 py-2 transition-all ${nameFocused || name ? "border-blue-500" : ""}`}
                    >
                        {/* Full Name */}


                        <legend
                            className={`absolute text-sm transition-all ${nameFocused || name
                                ? "-top-3 left-2 text-[#F6BB09] px-1 text-[16px] bg-white"
                                : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030] px-1 text-[16px]"}`}
                        >
                            Full Name
                        </legend>
                        <input
                            type="text"
                            className="w-full placeholder-[#000030] outline-none bg-transparent text-gray-700 py-1"
                            placeholder={nameFocused ? "Enter your full name" : ""}
                            value={name}
                            onFocus={() => setNameFocused(true)}
                            onBlur={(e) => {
                                setNameFocused(e.target.value !== "");
                            }}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </motion.fieldset>

                    {/* Email */}

                    <motion.fieldset
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`relative border mt-4 border-gray-300 rounded-lg px-3 py-2 transition-all ${emailFocused || email ? "border-blue-500" : ""}`}
                    >
                        <legend
                            className={`absolute text-sm transition-all ${emailFocused || email
                                ? "-top-3 left-2 text-[#F6BB09] px-1 text-[16px] bg-white"
                                : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030] px-1 text-[16px]"}`}
                        >
                            Email
                        </legend>
                        <input
                            type="email"
                            className="w-full placeholder-[#000030] outline-none bg-transparent text-gray-700 py-1"
                            placeholder={emailFocused ? "Enter your email" : ""}
                            value={email}
                            onFocus={() => setEmailFocused(true)}
                            onBlur={(e) => {
                                setEmailFocused(e.target.value !== "");
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </motion.fieldset>

                    {/* Password */}

                    <motion.fieldset
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`relative border border-gray-300 rounded-lg mt-4 px-3 py-2 transition-all ${passwordFocused || password ? "border-blue-500" : ""}`}
                    >
                        <legend
                            className={`absolute text-sm transition-all ${passwordFocused || password
                                ? "-top-3 left-2 text-[#F6BB09] px-1 bg-white text-[16px] "
                                : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030] text-[16px] "}`}
                        >
                            Password
                        </legend>
                        <input
                            type={passwordVisible ? "text" : "password"}
                            className="w-full placeholder-[#000030] outline-none bg-transparent text-gray-700 py-1"
                            placeholder={passwordFocused ? "Enter your password" : ""}
                            value={password}
                            onFocus={() => setPasswordFocused(true)}
                            onBlur={(e) => {
                                setPasswordFocused(e.target.value !== "");
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Password Toggle */}
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={togglePasswordVisibility}
                        >
                            {passwordVisible ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )}
                        </button>
                    </motion.fieldset>

                    {/* Confirm Password */}
                    <motion.fieldset
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className={`relative border border-gray-300 rounded-lg mt-4 px-3 py-2 transition-all ${confirmPasswordFocused || confirmPassword ? "border-blue-500" : ""}`}
                    >
                        <legend
                            className={`absolute text-sm transition-all ${confirmPasswordFocused || confirmPassword
                                ? "-top-3 left-2 text-[#F6BB09] text-[16px] px-1 bg-white"
                                : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030] text-[16px]  "}`}
                        >
                            Confirm Password
                        </legend>
                        <input
                            type={confirmPasswordVisible ? "text" : "password"}
                            className="w-full placeholder-[#000030] outline-none bg-transparent text-gray-700 py-1"
                            placeholder={confirmPasswordFocused ? "Confirm your password" : ""}
                            value={confirmPassword}
                            onFocus={() => setConfirmPasswordFocused(true)}
                            onBlur={(e) => {
                                setConfirmPasswordFocused(e.target.value !== "");
                            }}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {/* Confirm Password Toggle */}
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            {confirmPasswordVisible ? (
                                <FaEyeSlash className="text-gray-500" />
                            ) : (
                                <FaEye className="text-gray-500" />
                            )}
                        </button>
                    </motion.fieldset>


                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mt-1"
                    >
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"

                                className="form-checkbox h-5 w-5 text-blue-500"
                            />
                            <span className="text-sm text-[#000030] pt-3  ">
                                By creating this account, you agree to the <span className=" text-[#FFC107] font-semibold " >terms of use</span> & <span className=" text-[#FFC107] font-semibold " >privacy policy</span>
                            </span>
                        </label>
                    </motion.div>



                    <motion.div >
                        <Button className="w-full mt-14 font-semibold" variant="gold">
                            Sign up
                        </Button>
                    </motion.div>



                </form>

                <motion.div className="flex justify-center items-center mt-2 text-[#000030] text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                Have an account? <Link className=" text-[#FFC107] font-semibold text-sm " href="/login"> Sign In </Link>
                     
                </motion.div>


            </motion.div>

            <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Image src="/loginImg.png" alt="Milly & Rio logo" width={543} height={460} />
            </motion.div>

        </motion.div>
    );
};

export default SignupForm;
