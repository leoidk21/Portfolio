import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function LoadingScreen() {
    const navigate = useNavigate();
    const text = "Loading...";

    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const letterVariants = {
        hidden: { y: 0 },
        visible: {
            y: [-20, 0],
            transition: {
                type: "spring",
                stiffness: 350,
                damping: 2,
                repeatType: "reverse",
            },
        },
    };

    return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="p-8">
                    <motion.h1
                        className="font-neuehaas text-3xl tracking-tighter whitespace-nowrap truncate p-8"
                        variants={parentVariants}
                        initial="hidden"
                        animate="visible"
                        onAnimationComplete={() =>{
                            navigate("/home");
                        }}
                    >
                        {text.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                style={{ display: "inline-block" }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </main>
    );
}

export default LoadingScreen;