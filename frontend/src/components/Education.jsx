import { useEffect, useState } from "react";

function Education() {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(API_BASE_URL+"/api/education/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch education");
        }
        return response.json();
      })
      .then((data) => {
        setEducation(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Education API Error:", error);
        setError("Unable to load education.");
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="education"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADING ================= */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Academic Journey
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My educational journey, achievements and academic milestones.
          </p>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
          </div>
        )}

        {/* ================= ERROR ================= */}
        {error && !loading && (
          <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-8 text-center">
            <p className="text-red-400">{error}</p>

            <p className="mt-2 text-sm text-slate-500">
              Make sure the Django server is running.
            </p>
          </div>
        )}

        {/* ================= TIMELINE ================= */}
        {!loading && !error && education.length > 0 && (
          <div className="relative">

            {/* Main Timeline Line */}
            <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-cyan-400 via-cyan-400/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

            {education.map((item, index) => (
              <div
                key={item.id}
                className={`relative mb-14 flex w-full items-center ${
                  index % 2 === 0
                    ? "sm:justify-start"
                    : "sm:justify-end"
                }`}
              >

                {/* ================= DOT ================= */}
                <div className="absolute left-3 z-10 -translate-x-1/2 sm:left-1/2">
                  <div className="relative flex h-5 w-5 items-center justify-center">

                    {/* Pulse */}
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-cyan-400 opacity-30" />

                    {/* Outer */}
                    <span className="relative h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                  </div>
                </div>

                {/* ================= CARD ================= */}
                <div
                  className={`ml-10 w-[calc(100%-2.5rem)] sm:ml-0 sm:w-[46%] ${
                    index % 2 === 0
                      ? "sm:mr-auto sm:pr-10"
                      : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-cyan-400/10">

                    {/* Glow */}
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                    {/* Year + Grade */}
                    <div className="relative flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                        {item.start_year || "N/A"} -{" "}
                        {item.end_year || "Present"}
                      </span>

                      {item.grade && (
                        <span className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-400">
                          {item.grade}
                        </span>
                      )}
                    </div>

                    {/* Degree */}
                    <h3 className="relative mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                      {item.degree}
                    </h3>

                    {/* Institution */}
                    <p className="relative mt-2 font-medium text-slate-300">
                      {item.institution}
                    </p>

                    {/* Location */}
                    {item.location && (
                      <p className="relative mt-2 text-sm text-cyan-400/80">
                        📍 {item.location}
                      </p>
                    )}

                    {/* Description */}
                    {item.description && (
                      <p className="relative mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                        {item.description}
                      </p>
                    )}

                    {/* Bottom Accent */}
                    <div className="relative mt-6 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= EMPTY ================= */}
        {!loading && !error && education.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 text-center">
            <p className="text-slate-400">
              No education records found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Education;