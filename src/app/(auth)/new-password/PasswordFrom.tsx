"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const PasswordFrom = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
            className=" lg:mt-40 mt-20 flex flex-col lg:flex-row  items-center justify-center lg:gap-16 "
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white px-6 rounded-lg shadow-lg shadow-[#EDEDED40] lg:w-[496px] w-full py-8 border  lg:py-16 "
            >
                <h2 className="lg:text-[28px] text-xl  text-center text-[#000030] font-bold ">
                    Create a new password
                </h2>
                <p className="text-center text-[#888888] text-xs mt-2 pb-8 lg:pb-16  ">
                    You have to update your password for log in.
                </p>

                <form>





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






                    <motion.div >
                        <Button className="w-full mt-14 font-semibold text-xl " variant="gold">
                            Update
                        </Button>
                    </motion.div>



                </form>




            </motion.div>

            <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                <Image src="/passwordSet.png" alt="Milly & Rio logo" width={543} height={460} />
            </motion.div>

        </motion.div>
    );
};

export default PasswordFrom;
