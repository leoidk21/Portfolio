import { motion } from "framer-motion";
import togaPic from "../../assets/images/Toga-Pic.png";
import Reveal from "../HomeComponents/Reveal";

function Greet() {
    // const history = [
    //     'It all started back in my second year when we were given a project to create a website. I jumped straight into designing with pure CSS, right after structuring the html. I loved what I saw on the screen, so I decided to keep focusing on the interface; and on frontend development.',
    //     'It wasnt easy, as our classes only covered the basics of development. As IT students, we had to take the initiative to self-study, spending countless hours watching YouTube tutorials, learning how to effectively use AI tools, and experimenting until we could get the required features to work fine.',
    //     'Now, with all the improvement I made, I want to take the next step by working with modern frontend technologies, while looking for the right opportunities to expand my skills toward full-stack development.',
    // ];

    // const sentence = { 
    //     hidden: {}, 
    //     visible: { 
    //         transition: { 
    //             staggerChildren: 0.02,
    //         }, 
    //     }, 
    // }; 
    
    // const letter = { 
    //     hidden: { 
    //         opacity: 0, 
    //     }, 
    //     visible: { 
    //         opacity: 1, 
    //     }, 
    // };

    return (
        <>
            <div className="border-t border-b border-zinc-800 bg-zinc-950 text-white mt-96 px-6 py-12">
                <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                    {/* left side */}
                    <Reveal className="relative md:col-span-5 md:justify-start mt-12 flex justify-center ">
                        <div 
                            className="absolute -top-10 -left-12 lg:w-[80%] w-full h-full bg-zinc-900 rounded-2xl z-0" 
                            aria-hidden="true"
                        />
                        <img 
                            src={togaPic} 
                            alt="Grad Pic"
                            className="relative z-10 h-auto w-full max-w-xs lg:max-w-sm object-cover rounded-2xl border border-zinc-800"
                        />
                    </Reveal>

                    {/* right side */}
                    <Reveal delay={0.3} className="md:col-span-7">
                        <div className="flex flex-col justify-center text-left mt-8">
                            <h1 className="font-kugile-demo text-4xl sm:text-5xl lg:text-6xl tracking-[-2px] text-zinc-100">
                                Hi there! Leo here.
                            </h1>

                            <p className="border-b w-2/4 pb-1 mb-6 mt-3"></p>
                            
                            <div className="space-y-2">
                                <p className="font-neuehaas text-xl sm:text-2xl font-medium text-zinc-300">
                                    Bachelor of Science in Information Technology Graduate
                                </p>
                                <p className="font-neuehaas mt-4 text-lg font-semibold tracking-wider text-zinc-500 uppercase">
                                    Class of 2026
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            
            {/* <div className="lg:p-16 p-10 mt-80">
                {history.map((story, index) => (
                    <motion.h1
                        key={index}
                        variants={sentence}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-montserrat-regular text-center text-2xl lg:text-5xl mb-200"
                    >
                        {story.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letter}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>
                ))}
            </div> */}
        </>
    );
}

export default Greet;