import { useState } from "react";
import { motion, AnimatePresence, easeInOut, easeIn, scale } from "framer-motion";
import project1 from "../../assets/images/Project1.png";
import project2 from "../../assets/images/Project2.png";
import project3 from "../../assets/images/Project3.png";
import Reveal from "./Reveal";

function ProjectCard() {
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            title: "01: Event Management Promotional Website",
            image: project1,
        },
        {
            title: "02: Ecommerce Product Page",
            image: project2,
        },
        {
            title: "03: Weather App",
            image: project3,
        },
    ];

    const figmaDesign = [
        {
            title: "01: ELDER LIVING ECOMMERCE WEBSITE",
            details: "An e-commerce website built as a school project to help elderly users shop online easily. The design focuses on large typography, simple navigation, and clear layouts to make technology stress-free for older generations."
        },
        {
            title: "02: ORCHESTRATED BY HISTORY MOBILE APP",
            details: "A mobile app built as a capstone project for an event management community partner. The system simplifies how users register, book, and schedule their events through a clean, intuitive interface."
        },
        {
            title: "03: ORCHESTRATED BY HISTORY DESKTOP APP",
            details: "An admin desktop app that connects with our event mobile application. It helps the event management team easily track user registrations, manage bookings, and handle event schedules from a dashboard."
        }
    ];

    return (
        <>
            <div className="text-center lg:mt-32 mt-16 relative">
                {/* titles */}
                <div className="flex flex-col gap-2 mb-6 lg:mb-0">
                    {projects.map((project, index) => (
                        <p 
                            key={index}
                            className={`lg:text-4xl text-2xl font-bold transition ${
                                activeProject === index 
                                ? "text-white" 
                                : "text-gray-500"
                            }`}
                        >
                            {project.title}
                        </p>
                    ))}
                </div>

                {/* images */}
                <div className="w-full aspect-video max-h-162.5 flex mt-14 lg:mt-0 items-center justify-center overflow-hidden">
                    {projects.map((project, index) => {
                        const position = (index - activeProject + projects.length) % projects.length;

                        let scale;
                        let y;
                        let zIndex;

                        if (position === 0) {
                            scale = 1;
                            y = 0;
                            zIndex = 3;
                        }
                        else if (position === 1) {
                            scale = 0.95;
                            y = -25;
                            zIndex = 2;
                        }
                        else {
                            scale = 0.90;
                            y = -50;
                            zIndex = 1;
                        }

                        return (
                            <motion.img
                                key={index}
                                src={project.image}
                                alt={project.title}
                                className="absolute w-[95%] md:w-full max-w-5xl h-auto rounded-3xl border-3 border-[#433939] shadow-xl object-cover"
                                style={{
                                    zIndex,
                                }}
                                animate={{
                                    scale,
                                    y,
                                    zIndex,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                onClick={() =>  
                                    setActiveProject(
                                        (prev) => (prev + 1) % projects.length
                                    )
                                }
                            />
                        );
                    })}
                </div>
            </div>
            
            <div className="lg:mt-32 mt-16 w-full">
                <div className="w-full lg:max-w-[60%] mx-auto">
                    <h1 className="font-kugile-demo tracking-tighter uppercase text-2xl lg:text-4xl mb-4 lg:mb-8">
                        Figma Designs
                    </h1>
                        <div className="flex flex-col gap-8">
                            {figmaDesign.map((figma, index) => (
                                <Reveal delay={0.156}>
                                    <div 
                                        key={index}
                                        className="border-2 border-[#433939] p-8 relative rounded-md"
                                    >
                                        <h1 className="font-neuehaas text-[20px] lg:text-[26px] mb-2">
                                            {figma.title}
                                        </h1>
                                        <p className="font-medium text-grey-1 max-w-200">
                                            {figma.details}
                                        </p>

                                        <div className="flex justify-end mt-6 cursor-pointer">
                                            <a
                                                href={figma.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-centertext-white border border-[#433939] px-10 py-2 transitionhover:bg-neutral-200 hover:text-black"
                                            >
                                                View in Figma
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                </div>
            </div>
        </>  
    );
}

export default ProjectCard;