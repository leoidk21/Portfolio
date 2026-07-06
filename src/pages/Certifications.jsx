                import PageTitle from "../components/PageTitle";
                import Reveal from "../components/Reveal";
                import cert1 from "../assets/certificates/DOCQUEUE.jpg";
                import cert2 from "../assets/certificates/BSIT_Pre_Deployment.jpg";
                import cert3 from "../assets/certificates/ICS_Seminar.jpg";
                import cert4 from "../assets/certificates/freeCodeCamp.png";
                import cert5 from "../assets/certificates/Developing_Design_for_User_Interface.jpg";
                import cert6 from "../assets/certificates/Digital_ Safety.jpg";
                import cert7 from "../assets/certificates/Game_Art_Webinar.jpg";
                import cert8 from "../assets/certificates/Intro_to_Data_Analytics.jpg";
                import cert9 from "../assets/certificates/Intro_to_SharePoint.jpg";

                function Certifications() {
                    const certificate = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9];

                    return (
                        <>
                            <main>
                                <Reveal>
                                    <PageTitle text="Certifications"/>
                                    
                                    <div className="w-full pl-10 lg:pl-40 ">
                                        <div className="mt-96 mb-30">
                                            <div className="lg:w-330 w-88 mb-10 lg:mb-30 relative isolate">
                                                <Reveal delay={0.2}>
                                                    <p className="font-neuehaas text-[20px] lg:text-5xl leading-tight">
                                                        A collection of my{" "}
                                                        <span className="relative inline-block z-10 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[45%] after:bg-neutral-500 after:-z-10">
                                                            academic certificates,
                                                        </span>{" "}
                                                        government-accredited{" "}
                                                        <span className="relative inline-block z-10 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[45%] after:bg-neutral-500 after:-z-10">
                                                            IT certifications,
                                                        </span>{" "}
                                                        and professional credentials in{" "}
                                                        <span className="relative inline-block z-10 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[45%] after:bg-neutral-500 after:-z-10">
                                                            web and responsive design.
                                                        </span>
                                                    </p>
                                                </Reveal>
                                            </div>

                                            <div className="flex w-full overflow-x-auto items-center gap-5 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
                                                {certificate.map((certs, index) => (
                                                    <div
                                                        key={index}
                                                        className="shrink-0"
                                                    >
                                                        <Reveal delay={0.4}>
                                                            <img
                                                                src={certs}
                                                                alt={`Certificate ${index + 1}`}
                                                                className="h-50 w-70 lg:h-85 lg:w-120 object-cover rounded-lg"
                                                            />
                                                        </Reveal>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                
                                </Reveal>
                            </main>
                        </>
                    );
                }

                export default Certifications;