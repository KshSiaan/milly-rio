"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import motion for animations

const EmailFrom = () => {
    const [email, setEmail] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        alert("Email sent successfully. Please check your email for further instructions.");
        setEmail("");
        setEmailFocused(false);
        router.push("/otp-verify");
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16 lg:mt-40 mt-[20%] relative">
            <motion.div
                initial={{ opacity: 0, x: -50 }} // Start off-screen with no opacity
                animate={{ opacity: 1, x: 0 }} // Animate to full opacity and center position
                transition={{ duration: 0.6 }} // Smooth transition duration
            >
                <div>
                    <span className="absolute -right-[7%] -top-2 w-14 h-14 rounded-full cursor-pointer">
                        <RxCross2 className="text-[#FFC107] shadow rounded-full" size={24} />
                    </span>
                </div>
                <div className="bg-white px-6 rounded-lg shadow-lg lg:w-[496px] w-full py-8 lg:py-16">
                    <h2 className="lg:text-[28px] text-xl text-center text-[#000030] font-bold">
                        Forget password?
                    </h2>
                    <p className="text-center text-[#888888] text-xs mt-2 pb-8 lg:pb-16">
                        You have to verify your email id for reset your password.
                    </p>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <fieldset
                            className={`relative border border-gray-300 rounded-lg px-3 py-2 transition-all ${emailFocused || email ? "border-blue-500" : ""}`}
                        >
                            <legend
                                className={`absolute text-sm transition-all ${emailFocused || email ? "-top-3 left-2 text-[#FFC107] px-1 text-[16px] bg-white" : "top-1/2 left-3 transform -translate-y-1/2 text-[#000030] px-1 text-[16px]"}`}
                            >
                                Email
                            </legend>
                            <input
                                type="email"
                                className="w-full outline-none placeholder-[#000030] bg-transparent text-gray-700 py-1"
                                placeholder={emailFocused ? "Enter your email" : ""}
                                value={email}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={(e) => { setEmailFocused(e.target.value !== ""); }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </fieldset>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }} // Adding delay to animation
                        >
                            <Button className="w-full mt-14 font-semibold" variant="gold">
                                Verify
                            </Button>
                        </motion.div>
                    </motion.form>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Image
                    src="/emailVerifyImg.png"
                    alt="Milly & Rio logo"
                    width={596}
                    height={350}
                />
            </motion.div>
        </div>
    );
};

export default EmailFrom;
