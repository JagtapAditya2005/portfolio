import { experience } from "../data/portfolioData";

function Experience() {
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const getDuration = (exp) => {
    const start = formatDate(exp.start_date);
    if (exp.is_current) return `${start} - Present`;
    const end = formatDate(exp.end_date);
    return `${start}${end ? ` - ${end}` : ""}`;
  };

  return (
    <section id="experience" className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Experience</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">Professional Experience</h2>
          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My professional experience, internships and practical industry exposure.
          </p>
        </div>

        {/* Experience Timeline */}
        {experience.length > 0 && (
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-cyan-400 via-cyan-400/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />
            {experience.map((exp, index) => {
              const technologies = exp.technologies
                ? exp.technologies.split(",").map((t) => t.trim()).filter(Boolean)
                : [];
              return (
                <div key={exp.id} className={`relative mb-14 flex w-full ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                  <div className="absolute left-3 top-8 z-10 -translate-x-1/2 sm:left-1/2">
                    <div className="relative flex h-5 w-5 items-center justify-center">
                      {exp.is_current && <span className="absolute h-6 w-6 animate-ping rounded-full bg-cyan-400 opacity-30" />}
                      <span className="relative h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                    </div>
                  </div>
                  <div className={`ml-10 w-[calc(100%-2.5rem)] sm:ml-0 sm:w-[46%] ${index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:pl-10"}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50">
                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />
                      {exp.is_current && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Currently Working
                        </div>
                      )}
                      <div className="relative">
                        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">{getDuration(exp)}</span>
                      </div>
                      <h3 className="relative mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">{exp.job_title}</h3>
                      {exp.company_url ? (
                        <a href={exp.company_url} target="_blank" rel="noopener noreferrer" className="relative mt-2 inline-block font-semibold text-cyan-400 hover:text-cyan-300">{exp.company} ↗</a>
                      ) : (
                        <p className="relative mt-2 font-semibold text-cyan-400">{exp.company}</p>
                      )}
                      {exp.location && <p className="relative mt-2 text-sm text-slate-500">📍 {exp.location}</p>}
                      <p className="relative mt-5 text-sm leading-7 text-slate-400 sm:text-base">{exp.description}</p>
                      {technologies.length > 0 && (
                        <div className="relative mt-6 flex flex-wrap gap-2">
                          {technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-cyan-400/10 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/20">{tech}</span>
                          ))}
                        </div>
                      )}
                      <div className="relative mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {experience.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
            <p className="text-slate-400">No experience records found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
