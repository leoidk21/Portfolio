import { motion } from "framer-motion";

export default function Reveal({
    children,
    className = "",
    delay = 0,
    y = 50,
}) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}