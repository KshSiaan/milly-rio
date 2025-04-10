"use client";

import { JSX, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpVerify = (): JSX.Element => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  // Handle submit
  const handleSubmit = (): void => {
    console.log("Entered OTP:", value);
    alert(`Entered OTP: ${value}`);

    if (value.length === 6) {
      router.push("/new-password");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:!mt-40 !mt-16 justify-center items-center lg:gap-16 gap-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white !py-16 !px-6 rounded-lg shadow-lg lg:w-[496px] w-full relative"
      >
        {/* Title */}
        <h2 className="text-[28px] font-bold text-center text-[#000030]">
          Verify OTP
        </h2>
        <p className="text-center text-gray-500 !mt-1 !pb-16">
          We&apos;ve sent a 6-digit code to milly12***@gmail.com
        </p>

        {/* OTP Inputs */}
        <div className="w-full flex justify-center !mt-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-sm"
          >
            <InputOTP value={value} onChange={setValue} maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            className="w-full !mt-14 font-semibold bg-yellow-500 hover:bg-yellow-600 text-white"
            onClick={handleSubmit}
            disabled={value.length !== 6}
          >
            Submit
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src="/otpVerifyImg.png"
          alt="Verify OTP"
          width={576}
          height={576}
        />
      </motion.div>
    </div>
  );
};

export default OtpVerify;
