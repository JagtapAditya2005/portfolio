import { useEffect, useState } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(API_BASE_URL + "/api/experience/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch experiences");
        }
        return response.json();
      })
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Experience API Error:", error);
        setError("Unable to load experience.");
        setLoading(false);
      });
  }, []);

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getDuration = (experience) => {
    const start = formatDate(experience.start_date);

    if (experience.is_current) {
      return `${start} - Present`;
    }

    const end = formatDate(experience.end_date);

    return `${start}${end ? ` - ${end}` : ""}`;
  };

  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Professional Experience
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My professional experience, internships and practical industry
            exposure.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-8 text-center">
            <p className="text-red-400">{error}</p>

            <p className="mt-2 text-sm text-slate-500">
              Make sure the Django server is running.
            </p>
          </div>
        )}

        {/* Experience Timeline */}
        {!loading && !error && experiences.length > 0 && (
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-cyan-400 via-cyan-400/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            {experiences.map((experience, index) => {
              const technologies = experience.technologies
                ? experience.technologies
                    .split(",")
                    .map((tech) => tech.trim())
                    .filter(Boolean)
                : [];

              return (
                <div
                  key={experience.id}
                  className={`relative mb-14 flex w-full ${
                    index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-3 top-8 z-10 -translate-x-1/2 sm:left-1/2">
                    <div className="relative flex h-5 w-5 items-center justify-center">
                      {experience.is_current && (
                        <span className="absolute h-6 w-6 animate-ping rounded-full bg-cyan-400 opacity-30" />
                      )}

                      <span className="relative h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-10 w-[calc(100%-2.5rem)] sm:ml-0 sm:w-[46%] ${
                      index % 2 === 0
                        ? "sm:mr-auto sm:pr-10"
                        : "sm:ml-auto sm:pl-10"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50">
                      {/* Glow */}
                      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                      {/* Current Badge */}
                      {experience.is_current && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                          Currently Working
                        </div>
                      )}

                      {/* Date */}
                      <div className="relative">
                        <span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                          {getDuration(experience)}
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="relative mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                        {experience.job_title}
                      </h3>

                      {/* Company */}
                      {experience.company_url ? (
                        <a
                          href={experience.company_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative mt-2 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
                        >
                          {experience.company} ↗
                        </a>
                      ) : (
                        <p className="relative mt-2 font-semibold text-cyan-400">
                          {experience.company}
                        </p>
                      )}

                      {/* Location */}
                      {experience.location && (
                        <p className="relative mt-2 text-sm text-slate-500">
                          📍 {experience.location}
                        </p>
                      )}

                      {/* Description */}
                      <p className="relative mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                        {experience.description}
                      </p>

                      {/* Technologies */}
                      {technologies.length > 0 && (
                        <div className="relative mt-6 flex flex-wrap gap-2">
                          {technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-cyan-400/10 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bottom Accent */}
                      <div className="relative mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && experiences.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
            <p className="text-slate-400">No experience records found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experience;
