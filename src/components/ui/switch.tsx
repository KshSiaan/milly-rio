"use client";

import { useState } from "react";
import { HeadphonesIcon as HeadphoneOffIcon, Music2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Switch({
  defaultChecked = false,
  onChange,
  className,
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={checked}
      className={cn(
        "relative inline-flex h-8 w-14 shrink-0 cursor-pointer rounded-full !p-1 transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className
      )}
      onClick={handleToggle}
      animate={{
        backgroundColor: checked ? "rgb(212, 212, 216)" : "rgb(212, 212, 216)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Track highlight */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          backgroundColor: checked ? "#D9D9D9" : "#F6BB09",
          opacity: 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Thumb */}
      <motion.div
        className={cn(
          "pointer-events-none relative flex size-6 items-center justify-center rounded-full shadow-lg ring-0"
        )}
        initial={false}
        animate={{
          x: checked ? 24 : 0,
          backgroundColor: checked ? "white" : "white",
          rotate: checked ? 0 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={checked ? "headphone-off" : "music"}
            initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 20 }}
            transition={{ duration: 0.2 }}
          >
            {checked ? (
              <HeadphoneOffIcon className="size-3 text-blue-900" />
            ) : (
              <Music2Icon className="size-3 text-blue-900" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Ripple effect when clicked */}
      <AnimatePresence mode="wait">
        {checked && (
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-200"
            initial={{ opacity: 0.8, scale: 0.5 }}
            animate={{ opacity: 0, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      <span className="sr-only">{checked ? "On" : "Off"}</span>
    </motion.button>
  );
}
