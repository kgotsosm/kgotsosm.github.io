import projects from "../data.js";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full bg-[#0a192f] text-gray-300 mt-16"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl md:text-6xl text-gray-300 font-bold inline border-b-4 border-[#2097F3]">
            Projects
          </p>
          <p className="py-4">Some of the projects I&apos;ve worked on recently.</p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col">
              <img
                className="w-full h-40 object-fill"
                src={project.image}
                alt={project.title}
              />
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xl font-bold mb-4">{project.title}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between mt-auto font-bold">
                  <a
                    className="text-[#2097F3] hover:text-yellow-400"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  {project.url && (
                    <a
                      className="text-[#2097F3] hover:text-yellow-400"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
