// capstone
import project1 from "../assets/images/Project1.png";
import project2 from "../assets/images/Project4.png";
import project3 from "../assets/images/Project5.png";

// frontend mentor
import project4 from "../assets/images/project2.png";
import project5 from "../assets/images/project3.png";

// other school based
import project6 from "../assets/images/project6.png";

const workProject = [
    // capstone
    {
        id: 1,
        direction: "normal",
        category: "capstone",
        title: "I. Orchestrated by HIStory Promotional Website",
        img: project1,
        parag: "This website serve as the official promotional platform of the event management system, where users can view basic information about available services, sample events, featured packages, testimonials, and event galleries.",
        technologies: [
            "React.js", 
            "JavaScript", 
            "JSX", 
            "CSS"   
        ],
        actions: [
            {
                label: "View Live Site",
                url: "https://orchestratedbyhistory-rho.vercel.app/",
                variant: "primary"
            },
            {
                label: "View Code",
                url: "https://github.com/leoidk21/OBH_Website_v2",
                variant: "secondary"
            }
        ],
    },

    // frontend mentor
    {
        id: 2,
        direction: "reverse",
        category: "capstone",
        title: "II. Orchestrated by HIStory Desktop App",
        img: project2,
        parag: "A two way desktop dashboard designed for event management. It allows regular admins to monitor upcoming events, track bookings, and approve or reject user event proposals. To maintain system security, a super admin oversees the platform by approving new admin registrations and monitoring all internal system activity.",
        technologies: [
            "FIGMA"
        ],
        actions: [
            {
                label: "View in Figma",
                url: "",
                variant: "primary"
            },
            {
                label: "View code",
                url: "",
                variant: "secondary"
            },
        ],
    },
    {
        id: 3,
        direction: "normal",
        category: "capstone",
        title: "III. Orchestrated by HIStory Mobile App",
        img: project3,
        parag: "This mobile application that simplifies the registration process for users by allowing them to create and submit event requests, track the progress of their events, and receive real-time updates for payment reminders.",
        technologies: [
            "FIGMA"
        ],
        actions: [
            {
                label: "View in Figma",
                url: "",
                variant: "primary"
            },
            {
                label: "View code",
                url: "",
                variant: "secondary"
            },
        ],
    },
    {
        id: 4,
        direction: "reverse",
        category: "frontend-mentor",
        title: "I. E-commerce product page",
        img: project4,
        parag: "An e-commerce product page challenge focused on building a responsive layout with interactive UI elements. Key features include a clickable thumbnail system with a lightbox image gallery, a functional shopping cart with add-to-remove capabilities.",
        technologies: [
            "HTML",
            "Vanilla JS",
            "CSS"
        ],
        actions: [
            {
                label: "View Live Site",
                url: "https://leoidk21.github.io/E-commerce-product-page/",
                variant: "primary"
            },
            {
                label: "View Code",
                url: "https://github.com/leoidk21/E-commerce-product-page",
                variant: "secondary"
            }
        ],
    },
    {
        id: 5,
        direction: "normal",
        category: "frontend-mentor",
        title: "II. Weather App",
        img: project5,
        parag: "A weather app with search functionality, unit conversion, and detailed forecasts using the Open-Meteo API.",
        technologies: [
            "React",
            "Open Mateo Geocoding",
            "Vite",
            "Forecast APIs"
        ],
        actions: [
            {
                label: "View Live Site",
                url: "https://leoidk21.github.io/Weather-App/",
                variant: "primary"
            },
            {
                label: "View Code",
                url: "https://github.com/leoidk21/Weather-App",
                variant: "secondary"
            }
        ],
    },

    // other school based
    {
        id: 6,
        direction: "reverse",
        category: "school-based",
        title: "Elder Living E-commerce Website",
        img: project6,
        parag: "Elder Living is a dedicated e-commerce platform designed with senior accessibility at its core. It makes shopping easy for older adults by using large, clear text, simple page layouts, and an easy checkout process that removes the usual confusion of online shopping.",
        technologies: [
            "FIGMA"
        ],
        actions: [
            {
                label: "View in Figma",
                url: "",
                variant: "primary"
            },
        ],
    },
];

export default workProject;