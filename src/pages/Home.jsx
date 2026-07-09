import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import developerText from "../assets/images/DEVELOPER.png";
import Divider from "../components/HomeComponents/Divider";
import TechCard from "../components/HomeComponents/TechCard";
import Button from "../components/HomeComponents/Button";
import Intro from "../components/HomeComponents/Intro";
import ProjectCard from "../components/HomeComponents/ProjectCard";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/HomeComponents/Footer";
import Reveal from "../components/HomeComponents/Reveal";

function Home() {
  return (
    <>
    <main>
        <section className="relative flex flex-col lg:min-h-screen p-5 md:p-10 justify-end sm:min-h-0">
            <div className="flex flex-col w-full mt-20 mb-16 overflow-hidden">
                <motion.h1 
                    className="font-piala-regular text-3xl sm:text-4xl md:text-5xl lg:text-8xl tracking-tighter"
                        initial={{
                            opacity: 0,
                            x: 100
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                    front-End
                </motion.h1>
                <motion.img
                    src={developerText} 
                    alt="Developer Text"
                    
                    initial={{
                        opacity: 0,
                        x: -100
                    }} 
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                />
            </div>
        </section>
        
        <section className="bg-white-2 text-black flex flex-col items-center p-8 sm:p-12 lg:mt-30 mt-15">
            <Reveal>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl lg:tracking-[-8px] tracking-[-2.5px] font-montserrat-black text-center">Design, <span className="font-kugile-demo">Develop </span> <span className="font-piala-regular">'n</span> Deploy.</h3>
            </Reveal>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Reveal>
                <Divider text="Intro" />
            </Reveal>

            <Reveal delay={0.156}>
                <Intro />
            </Reveal>
        </section>

        <section>
            <Reveal delay={0.15}>
                <TechCard />
            </Reveal>
        </section>

        <section className="mt-12 mb-12 lg:mt-24 flex justify-center">
            <Reveal delay={0.4}>
                <NavLink to="/certifications">
                    <Button text="View Certifications" />
                </NavLink>
            </Reveal>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Reveal>
                <Divider text="Works" />
            </Reveal>

            <Reveal>
                <ProjectCard />
            </Reveal>   

            <section className="mt-12 mb-12 lg:mt-24 flex justify-center">
                <Reveal delay={0.4}>
                    <NavLink to="/works">
                        <Button text="View Work Details" />
                    </NavLink>
                </Reveal>
            </section>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Reveal>
                <Divider text="Contact" />
            </Reveal>

            <Reveal delay={0.156}>
                <Contact />
            </Reveal>

            <section className="mt-12 mb-12 lg:mt-24 flex justify-center">
                <Reveal delay={0.4}>
                    <NavLink 
                        target="_blank"
                        to="https://drive.google.com/file/d/1J1jNKbhgchisFhCVt34JpYivBR-mHFBd/view">
                        <Button text="View Resume" />
                    </NavLink>
                </Reveal>
            </section>
        </section>

        <section>
            <Reveal delay={0.3}>
                <Footer />
            </Reveal>
        </section>
    </main>
    </>
  );
}

export default Home;