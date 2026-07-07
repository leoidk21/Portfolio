import Reveal from "../HomeComponents/Reveal";

const buttonVariants = {
    primary: "bg-zinc-900 text-white hover:bg-[#FFFBF1] hover:text-black",
    secondary: "bg-[#FFFBF1] border-white text-black",
}

function ProjectList({ project }) {
    return (
        <div
            className={`flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 mt-12 lg:mt-24 gap-6 lg:gap-12 ${
                project.direction === "reverse"
                    ? "lg:flex-row-reverse"
                    : ""
            }`}
        >
            <Reveal>
                <div className="flex-1">
                    <h1 className="font-neuehaas text-2xl md:text-3xl mb-6 tracking-tight">{project.title}</h1>
                    
                    <img 
                        src={project.img}
                        alt={project.title}
                        className="h-auto w-full max-w-3xl object-cover rounded-2xl"
                    />
                </div>
            </Reveal>

            <Reveal delay={0.3}>
                <div className="flex-1">
                    <p className="font-montserrat-regular text-[16px] lg:text-[18px] max-w-xl leading-7 mb-6">{project.parag}</p>
                    <p className="font-neuehaas">Technologies use:</p>
                    <p className="border-b w-25 pb-1 mb-6"></p>

                    <div className="grid grid-cols-2 gap-3 font-neuehaas mb-10 w-fit">
                        {project.technologies.map((tech) => (
                        <div
                            key={tech}
                            className="relative inline-block z-10 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-[45%] after:bg-[#50746D] after:-z-10"
                        >
                            {tech}
                        </div>
                        ))}
                    </div>

                    <Reveal>
                        <div className="flex flex-wrap gap-5">
                            {project.actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-10 py-2.5 lg:w-50 md:w-50 w-full rounded-md transition-all text-center duration-300 font-montserrat-regular text-[16px]
                                    ${buttonVariants[action.variant]}
                                    `}
                                >
                                    {action.label}
                                </a>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </Reveal>
        </div>
    );
}

export default ProjectList;