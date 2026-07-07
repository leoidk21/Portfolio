import PageTitle from "../components/PageTitle";
import Reveal from "../components/HomeComponents/Reveal";
import WorkTitle from "../components/WorkComponents/WorkTitle";
import ProjectList from "../components/WorkComponents/ProjectList";
import workProject from "../data/project";
import WorkIntro from "../components/WorkComponents/WorkIntro";

function Works() {
    return (
        <>
            <Reveal>
                <PageTitle text="Works"/>
                <WorkIntro />
            </Reveal>

            <div>
                <WorkTitle text="Capstone Project" />
                {workProject
                    .filter(project => project.category === "capstone")
                    .map(project => (
                        <ProjectList
                            key={project.id}
                            project={project}
                        />
                    ))}
            </div>

            <div>
                <WorkTitle text="Frontend Mentor Challenges" />
                {workProject
                    .filter(project => project.category === "frontend-mentor")
                    .map(project => (
                        <ProjectList
                            key={project.id}
                            project={project}
                        />
                    ))}
            </div>

            <div>
                <WorkTitle text="School Based Project" />
                {workProject
                    .filter(project => project.category === "school-based")
                    .map(project => (
                        <ProjectList
                            key={project.id}
                            project={project}
                        />
                    ))}
            </div>
        </>
    );
}

export default Works;