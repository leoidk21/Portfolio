import Reveal from "../HomeComponents/Reveal";
import { Code2, Smartphone, Palette, Database } from 'lucide-react';

function Services() {
    const serviceIcon = [
        {
            name: "Web Development",
            icon: Code2,
            parag: "Building responsive and interactive web applications with modern frontend technologies.",
        },
        {
            name: "UI/UX Design",
            icon: Palette,
            parag: "Creating user-centered interfaces by combining visual design and usability principles.",
        },
        {
            name: "Mobile Development",
            icon: Smartphone,
            parag: "Developing mobile applications with a focus on functionality, performance, and user experience.",
        },
        {
            name: "Full-Stack Integration",
            icon: Database,
            parag: "Experience building complete applications involving frontend, backend, and database integration.",
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center mt-50">
                <Reveal>
                    <div className="relative">
                        <h1 className="font-neuehaas text-3xl sm:text-5xl uppercase mb:3 lg:mb-6">Services / Skills</h1>
                    </div>
                </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6 py-12">
                        {serviceIcon.map((service) => {
                            const Icon = service.icon;

                            return (
                                <Reveal delay={0.33}>
                                    <div
                                        key={service.name}  
                                        className="border border-zinc-700 bg-zinc-950 text-center flex flex-col items-center rounded-3xl w-full max-w-sm h-full py-16 px-6"                        
                                    >
                                        <Icon
                                            size={64}
                                            strokeWidth={1.8}
                                        />

                                        <span 
                                            className="font-neuehaas mt-12 text-[26px] text-gray-400"
                                        >
                                            {service.name}
                                        </span>
                                        <p className="font-montserrat-regular mt-6 text-[18px]">{service.parag}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
            </div>
        </>
    );
}

export default Services;