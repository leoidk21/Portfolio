import WebDev from "../../assets/images/WebDev.svg";
import Design from "../../assets/images/UI-UX.svg";
import MobApp from "../../assets/images/MobApp.svg";
import FullStack from "../../assets/images/FullStack.svg";

function Services() {
    const serviceIcon = [
        {
            name: "Web Development",
            icon: WebDev,
            parag: "Building responsive and interactive web applications with modern frontend technologies.",
        },
        {
            name: "UI/UX Design",
            icon: Design,
            parag: "Creating user-centered interfaces by combining visual design and usability principles.",
        },
        {
            name: "Mobile Development",
            icon: MobApp,
            parag: "Developing mobile applications with a focus on functionality, performance, and user experience.",
        },
        {
            name: "Full-Stack Integration",
            icon: FullStack,
            parag: "Experience building complete applications involving frontend, backend, and database integration.",
        },
    ];

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-neuehaas text-4xl">Services/Skills</h1>

                <div className="flex gap-8 m-20">
                    {serviceIcon.map((service) => (
                        <div
                            key={service.name}
                            className="bg-[#FFFBF1] text-gray-800 text-center flex flex-col items-center p-8 rounded-xl h-auto w-84"                        
                        >
                            <div className="w-20 h-20 border">
                                <img src={service.icon} alt={service.name} />
                            </div>
                            <span className="font-neuehaas mt-8 text-2xl">{service.name}</span>
                            <p className="font-neuehaas mt-6 mb-6">{service.parag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Services;