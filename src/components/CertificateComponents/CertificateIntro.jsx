import Reveal from "../HomeComponents/Reveal";

function CertificateIntro() {
    return (
        <div className="flex items-center justify-center">
            <div className="border-t border-b border-zinc-700 bg-zinc-950 text-white mt-96 relative isolate lg:pt-14 lg:pb-14 lg:pr-50 lg:pl-50 p-6">
                <Reveal delay={0.2}>
                    <p className="font-neuehaas text-[20px] lg:text-5xl leading-tight">
                        A collection of my{" "}
                        <span className="text-zinc-500 font-montserrat-black">
                            academic certificates,
                        </span>{" "}
                        government-issued{" "}
                        <span className="text-zinc-500 font-montserrat-black">
                            webinar certificates,
                        </span>{" "}
                        and professional credentials in{" "}
                        <span className="text-zinc-500 font-montserrat-black">
                            web and responsive design.
                        </span>
                    </p>
                </Reveal>
            </div>
        </div>
    );
}

export default CertificateIntro;