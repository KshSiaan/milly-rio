"use client"

import { createContext, useEffect, useState } from "react";
interface ThemeContextType {
    isDrakMode: boolean,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDrakMode, setIsDrakMode] = useState(false);
    const toggleTheme = () => {
        setIsDrakMode(!isDrakMode);
        console.log(`theme changes`);
        console.log(isDrakMode)
    };
    useEffect(() => {
        if (isDrakMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDrakMode])
    return (
        <ThemeContext.Provider value={{ isDrakMode, toggleTheme }} >
            {
                children
            }
        </ThemeContext.Provider>
    )
}