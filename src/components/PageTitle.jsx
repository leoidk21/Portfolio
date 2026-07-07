import chevron from "../assets/images/chevron-down.png";
import Reveal from "./HomeComponents/Reveal";
import { motion } from "framer-motion";

function PageTitle({ text = "Section" }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="relative isolate mt-12 lg:mt-38">
                    <h3 className="font-kugile-demo text-5xl md:text-7xl lg:text-[200px] tracking-tighter relative z-20">
                        {text}
                    </h3>
                    
                    <div 
                        className="absolute bottom-0 left-1/4 w-3/4 h-1/2 bg-neutral-500 z-10 transform translate-x-0 translate-y-0" 
                        aria-hidden="true"
                    />
                </div>

                <Reveal delay={0.3}>
                    <div className="flex flex-col items-center mt-20 lg:mt-50 gap-24 lg:gap-36">
                        <motion.img 
                            src={chevron} 
                            alt="Chevron Down" 
                            animate={{
                                y: [0, 12, 0],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                </Reveal>
            </div>
        </>
    );
}

export default PageTitle;