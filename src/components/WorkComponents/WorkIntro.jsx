import Reveal from "../HomeComponents/Reveal";

function WorkIntro() {
    return (
        <div className="border-t border-b border-zinc-700 bg-zinc-950 text-white mt-96 mb-30 relative isolate lg:pt-14 lg:pb-14 lg:pr-50 lg:pl-50 p-6">
            <Reveal delay={0.3}>
                <p className="font-neuehaas text-[20px] lg:text-4xl leading-tight">
                    A dive into the{" "}
                    <span className="text-zinc-500 font-montserrat-black rounded-sm">
                        web development and design
                    </span>{" "}  
                    projects I’ve built over the years. This collection highlights a live promotional website created for a{" "} 
                    <span className="text-zinc-500 font-montserrat-black rounded-sm">
                        community partner,
                    </span>{" "}
                    responsive coding challenges from{" "}
                    <span className="text-zinc-500 font-montserrat-black rounded-sm">
                        Frontend Mentor,
                    </span>{" "}
                    and conceptual UI designs for{" "}
                    <span className="text-zinc-500 font-montserrat-black rounded-sm">
                        mobile, web, and desktop
                    </span>{" "}
                    applications crafted in Figma.
                </p>
            </Reveal>
        </div>
    );
}

export default WorkIntro;