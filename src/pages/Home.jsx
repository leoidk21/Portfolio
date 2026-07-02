import developerText from "../assets/images/DEVELOPER.png";
import Divider from "../components/Divider";
import profile from "../assets/images/Profile.jpg";

function Home() {
    const info = ['i. Leo Chavez', 'ii. 23_', 'iii. Rodriguez, Rizal, Philippines', 'iv. Bachelor of Science in Information Technology  |  Graduate '];
    const skills = ['I. Web Development', 'II. UI/UX Design', 'III. Mobile Development', 'IV. Full Stack Integration'];
    const parag = [ 
        'I’m a junior front-end developer based in the Philippines. Constantly looking for opportunities to level up my skills from junior to mid-level and higher.',
        'Exploring visual design while writing clean, efficient code. I’ve been captivated by digital aesthetics since coding and developing my first web interface.'
     ]
   
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
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl tracking-tighter font-montserrat-black text-center">Design, Develop <span className="font-montserrat-black-italic">'n</span> Deploy.</h3>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Divider text="Intro" />
            
            <article className="flex flex-col xl:flex-row gap-10 lg:gap-10 items-center mt-20 lg:mt-40">
                {/* left column */}
                <div className="w-full max-w-200 shrink-0">
                    <div className="relative flex flex-col w-full overflow-hidden">
                        <img
                            src={profile} 
                            alt="Profile"
                            className="w-full h-auto sm:h-80 md:h-96 lg:h-115 object-cover"
                        />
                        <div className="absolute bottom-0 w-full bg-opacity lg:p-6 flex flex-col gap-4 p-6">
                            {info.map((infos, index) => (
                                <p 
                                    key={index}
                                    className="font-neuehaas tracking-wide"
                                >
                                    {infos}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 w-full gap-4 mt-4 cursor-pointer">
                        {skills.map((skill, index) => (
                            <p 
                                key={index}
                                className="bg-opacity border border-border rounded-sm p-3 text-center"
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

                {/* right column */}
                <div className="flex-1 flex flex-col gap-9">
                    {parag.map((parags, index) => (
                        <p
                            key={index}
                            className="font-neuehaas tracking-tighter sm:text-2xl md:text-2xl lg:text-[32px] text-justify"
                        >
                            {parags}
                        </p>
                    ))}
                </div>
            </article>
        </section>

        <section className="lg:mt-44 mt-10 p-5 lg:p-10">
            <Divider text="Works" />
        </section>
    </main>
    </>
  );
}

export default Home;