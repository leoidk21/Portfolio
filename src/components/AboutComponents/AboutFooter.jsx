import Reveal from "../HomeComponents/Reveal";
import linkedIn from "../../assets/svg/LinkedInBlack.svg";
import email from "../../assets/svg/EmailBlack.svg";
import facebook from "../../assets/svg/FacebookBlack.svg";
import github from "../../assets/svg/GitHubBlack.svg";

function AboutFooter() {
    const socialIcons = [
        {
            name: "LinkedIn",
            icon: linkedIn,
            url: "https://www.linkedin.com/in/leo-chavez-29a72033b/",
        },
        {
            name: "Email",
            icon: email,
            url: "mailto:chavezleo518@gmail.com",
        },
        {
            name: "Facebook",
            icon: facebook,
            url: "https://www.facebook.com/leo.chavez.30445/",
        },
        {
            name: "GitHub",
            icon: github,
            url: "https://github.com/leoidk21",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center lg:mt-56 mt-16 py-18 px-12 text-center bg-[#FFFBF1] text-black">
            <Reveal className="flex flex-col items-center justify-center">
                <h1 className="font-kugile-demo lg:text-6xl text-4xl tracking-tight lg:mb-10 mb-8">I would love to join your team!</h1>
                <p className="font-montserrat-regular lg:text-[20px] text-[14px] lg:mb-12 mb-8 max-w-185 text-zinc-600">Fresh graduate, open to roles in front-end development, web development, and mobile app development.</p>
            
                <div className="flex gap-3 lg:gap-5">
                    {socialIcons.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={social.icon}
                                alt={social.name}
                                className="w-9 h-8"
                            />
                        </a>
                    ))}
                </div>
            </Reveal>
        </div>
    );
}

export default AboutFooter;