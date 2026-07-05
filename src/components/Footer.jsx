import { NavLink } from "react-router-dom";
import EmailIcon from "../assets/images/EmailBlack.svg";
import FacebookIcon from "../assets/images/FacebookBlack.svg";

function Footer() {
    const navigate = [
        {
            name: 'Home',
            NavLink: "/home",
        },
        {
            name: 'Works',
            NavLink: "/works",
        },
        {
            name: 'Certifications',
            NavLink: "/certifications",
        }
    ];

    const contact = [
        {
            name: 'chavezleo518@gmail.com',
            icon: EmailIcon,
        },
        {
            name: 'Leo Chavez',
            icon: FacebookIcon,
        }
    ];

    return (
        <div className="flex flex-col-reverse xl:flex-row lg:mt-20 gap-10 lg:gap-30 pt-6 pl-3 lg:pt-32 lg:pl-5 bg-[#FFFBF1] text-black">
            <div className="flex flex-col overflow-hidden lg:gap-45 gap-14 lg:pb-0 pb-2">
                <p className="font-montserrat-regular tracking-tighter lg:tracking-[-3px] text-[16px] lg:text-4xl lg:pl-3">All rights reserved © 2026</p>
                <h1 className="font-kugile-demo lg:text-[400px] md:text-9xl text-7xl uppercase leading-[0.4]">Leo</h1>
            </div>

            <div className="flex gap-8 lg:gap-24 lg:pl-6">
                <div className="flex flex-col gap-4">
                    <p className="font-montserrat-regular lg:text-[20px] tracking-tighter">Navigate</p>
                    {navigate.map((nav) => (
                        <a
                            key={nav.name}
                            href={nav.NavLink}
                            className="flex items-center font-montserrat-regular text-[#433939] lg:text-[18px] tracking-tighter"
                        >
                            {nav.name}
                        </a>
                    ))}
                </div>

                <div className="flex flex-col gap-6">
                    <p className="font-montserrat-regular lg:text-[20px] tracking-tighter">Contact</p>
                    {contact.map((contacts) => (
                        <div className="flex items-center gap-4">
                            <img 
                                src={contacts.icon}
                                alt={contacts.name}
                                className="w-6 h-5 lg:w-9 lg:h-8"
                            />
                            <p
                                className="font-montserrat-regular text-[#433939] lg:text-[18px] tracking-tighter overflow-hidden truncate"
                            >
                                {contacts.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;