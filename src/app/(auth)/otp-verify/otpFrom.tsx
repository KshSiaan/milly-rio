"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion"; // Import motion for animations
import { useRouter } from 'next/navigation';

const OtpVerify = () => {
    const router = useRouter()
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

    // Handle input change
    const handleChange = (index: any, value: any) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1); // Keep only last entered digit
        setOtp(newOtp);

        // Move to next input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle key press for backspace navigation
    const handleKeyDown = (index: any, e: any) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Handle submit
    const handleSubmit = () => {
        const enteredOTP = otp.join("");
        console.log("Entered OTP:", enteredOTP);
        alert(`Entered OTP: ${enteredOTP}`);
        router.push("/new-password");
        
    };

    return (
        <div className="flex flex-col lg:flex-row lg:mt-40 mt-16 justify-center items-center lg:gap-16 gap-4">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white py-16 px-6 rounded-lg shadow-lg lg:w-[496px] w-full relative"
            >
                {/* Close Button */}
                <button className="absolute -top-4 lg:-right-2 right-0 text-yellow-500 text-lg font-bold">
                    <RxCross2 className="text-yellow-400 shadow rounded-full" size={24} />
                </button>

                {/* Title */}
                <h2 className="text-[28px] font-bold text-center text-[#000030]">
                    Verify OTP
                </h2>
                <p className="text-center text-gray-500 mt-1 pb-16">
                    We've sent a 6-digit code to milly12***@gmail.com
                </p>

                {/* OTP Inputs */}
                <div className="flex justify-center lg:gap-3 gap-1.5 mt-6">
                    {otp.map((digit, index) => (
                        <motion.input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            value={digit}
                            maxLength={1}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-lg font-bold outline-none focus:border-yellow-500"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }} // Stagger the animation for each input
                        />
                    ))}
                </div>

                {/* Submit Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Button className="w-full mt-14 font-semibold" variant="gold" onClick={handleSubmit}>
                        Submit
                    </Button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Image src="/otpVerifyImg.png" alt="Verify OTP" width={576} height={576} />
            </motion.div>
        </div>
    );
};

export default OtpVerify;
