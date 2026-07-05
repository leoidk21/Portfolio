import linkedIn from "../assets/images/LinkedIn.svg";
import email from "../assets/images/Email.svg";
import facebook from "../assets/images/Facebook.svg";
import github from "../assets/images/GitHub.svg";

function Contact() {
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
        <div className="flex flex-col items-center justify-center lg:mt-38 mt-16 text-center">
            <h1 className="font-kugile-demo lg:text-6xl text-4xl tracking-tighter lg:mb-12 mb-8">I would love to join your team!</h1>
            <p className="font-neuehaas lg:text-[20px] text-[14px] lg:mb-12 mb-8 max-w-185">Fresh graduate, open to roles in front-end development, web development, and mobile app development.</p>
        
            <div className="flex gap-5">
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
        </div>
    );
}

export default Contact;