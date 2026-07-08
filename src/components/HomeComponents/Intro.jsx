import profile from "../../assets/images/Profile.jpg";
import Reveal from "./Reveal";

function Intro() {
    const info = ['i. Leo Chavez', 'ii. 23_', 'iii. Rodriguez, Rizal, Philippines', 'iv. Bachelor of Science in Information Technology  |  Graduate '];
    const skills = ['I. Web Development', 'II. UI/UX Design', 'III. Mobile Development', 'IV. Full Stack Integration'];
    const parag = [ 
        <>
            I’m a{' '}
            <span className="p-1 bg-[#FFFBF1] text-black">
                junior front-end developer
            </span>{' '}
            based in the Philippines. Constantly looking for opportunities to level up my skills from junior to mid-level and higher.,
        </>,
        <>
            Exploring{' '}
            <span className="p-1 bg-[#FFFBF1] text-black">
                visual design while writing clean, efficient code.
            </span>{' '}
            I’ve been captivated by digital aesthetics since coding and developing my first web interface.
        </>
    ];
    
    return (
        <article className="flex flex-col xl:flex-row gap-10 lg:gap-10 items-center mt-20 lg:mt-40">
            {/* left column */}
            <div className="w-full max-w-180 shrink-0">
                <div className="relative flex flex-col w-full overflow-hidden">
                    <img
                        src={profile} 
                        alt="Profile"
                        className="w-full h-auto sm:h-80 md:h-96 lg:h-115 object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                    <div className="absolute bottom-0 w-full h-auto bg-opacity lg:p-6 flex flex-col gap-2 p-4">
                        {info.map((infos, index) => (
                            <p 
                                key={index}
                                className="font-extralight"
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
                            className="bg-opacity border border-zinc-600 rounded-sm p-3 text-center font-extralight hover:rotate-1 transition-transform duration-300"
                        >
                            {skill}
                        </p>
                    ))}
                </div>
            </div>

            {/* right column */}
            <Reveal delay={0.7}>
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
            </Reveal>
        </article>
    );
}

export default Intro;