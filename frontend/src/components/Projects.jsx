import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">My Work</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Featured Projects</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of projects I have built using modern technologies and real-world development practices.
          </p>
        </div>

        {/* PROJECT GRID */}
        {projects.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const technologies = project.technologies
                ? project.technologies.split(",").map((t) => t.trim()).filter(Boolean)
                : [];
              return (
                <article key={project.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-cyan-400/10">
                  {project.featured && (
                    <div className="absolute left-4 top-4 z-20 rounded-full border border-cyan-400/30 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md">⭐ Featured</div>
                  )}
                  <div className="relative h-52 overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-slate-900">
                        <span className="text-7xl font-black text-cyan-400/70 transition duration-500 group-hover:scale-125 group-hover:text-cyan-400">{project.title?.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-7 text-slate-400">{project.description}</p>
                    {technologies.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <span key={tech} className="rounded-full border border-cyan-400/10 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/20">{tech}</span>
                        ))}
                      </div>
                    )}
                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github_url && (
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400">GitHub ↗</a>
                      )}
                      {project.demo_url && (
                        <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20">Live Demo ↗</a>
                      )}
                    </div>
                    <div className="mt-6 h-px w-0 bg-linear-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {projects.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-10 text-center">
            <p className="text-slate-400">No projects available yet.</p>
          </div>
        )}

        {projects.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">{projects.length} project{projects.length !== 1 ? "s" : ""} in portfolio</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;