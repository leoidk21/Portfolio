import Reveal from "../HomeComponents/Reveal";

function WorkTitle({ text = "Section" }) {
    return (
        <Reveal>
            <div className="flex flex-col items-center justify-center mt-20 lg:mt-70">
                <h1 className="font-kugile-demo text-2xl lg:text-6xl uppercase text-center tracking-tighter text-zinc-400">{text}</h1>
            </div>
        </Reveal>
    );
}

export default WorkTitle;