import PageTitle from "../components/PageTitle";
import Reveal from "../components/HomeComponents/Reveal";
import Greet from "../components/AboutComponents/Greet";
import Services from "../components/AboutComponents/Services";
import AboutFooter from "../components/AboutComponents/AboutFooter";

function About() {
    return (
        <>
            <Reveal>
                <PageTitle text="About"/>
            </Reveal>
            
            <Greet />
            <Services />
            <AboutFooter />
        </>
    );
}

export default About;