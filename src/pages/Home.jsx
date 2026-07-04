import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import developerText from "../assets/images/DEVELOPER.png";
import Divider from "../components/Divider";
import TechCard from "../components/TechCard";
import Button from "../components/Button";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <>
    <main>
        <section className="relative flex flex-col lg:min-h-screen p-5 md:p-10 justify-end sm:min-h-0">
            <div className="flex flex-col w-full mb-16 overflow-hidden">
                <h1 className="font-piala-regular text-3xl sm:text-4xl md:text-5xl lg:text-8xl tracking-tighter">
                    front-End
                </h1>
                <img src={developerText} alt="Developer Text" />
            </div>
        </section>
      
        <section className="bg-white-2 text-black flex flex-col items-center p-8 sm:p-12 lg:mt-30">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl lg:tracking-[-8px] tracking-[-2.5px] font-montserrat-black text-center">Design, Develop <span className="font-montserrat-black-italic">'n</span> Deploy.</h3>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Divider text="Intro" />
            <Intro />
        </section>

        <section>
            <TechCard />
        </section>

        <section>
            <NavLink to="/certifications">
                <Button text="View Certifications" />
            </NavLink>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Divider text="Works" />
            <ProjectCard />
            <NavLink to="/works">
                <Button text="View Work Details" />
            </NavLink>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Divider text="Contact" />
        </section>
    </main>
    </>
  );
}

export default Home;