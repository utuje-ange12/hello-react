import Navbar from "./components/Navbar.jsx";
import ProfileHeader from "./components/ProfileHeader.jsx";
import SkillList from "./components/SkillList.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "A responsive portfolio built with HTML, CSS and JavaScript.",
    link: "https://github.com/utuje-ange12",
  },
  {
    id: 2,
    title: "Task Tracker",
    description: "A to-do app using the state → render pattern.",
    link: "https://github.com/utuje-ange12",
  },
];

export default function App() {
  return (
      <>
        <Navbar name="Utuje Ange" />
        <main className="mx-auto max-w-3xl space-y-10 p-6 sm:p-8">
          <ProfileHeader
              name="Utuje Ange"
              role="Frontend Learner"
              city="Kigali, Rwanda"
              bio="I'm learning to build modern, accessible web interfaces with React."
          />

          <section id="skills">
            <h2 className="mb-3 text-xl font-semibold">Skills</h2>
            <SkillList skills={skills} />
          </section>

          <section id="projects">
            <h2 className="mb-3 text-xl font-semibold">Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                  <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      link={project.link}
                  />
              ))}
            </div>
          </section>
        </main>
      </>
  );
}