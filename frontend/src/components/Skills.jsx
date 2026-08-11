import { useEffect, useMemo, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/skills/";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // ==========================================
  // FETCH SKILLS FROM DJANGO
  // ==========================================

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch skills");
        }

        return response.json();
      })
      .then((data) => {
        setSkills(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Skills API Error:", error);
        setError("Unable to load skills.");
        setLoading(false);
      });
  }, []);

  // ==========================================
  // GET UNIQUE CATEGORIES
  // ==========================================

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        skills
          .map((skill) => skill.category)
          .filter(Boolean)
      ),
    ];

    return ["All", ...uniqueCategories];
  }, [skills]);

  // ==========================================
  // FILTER SKILLS
  // ==========================================

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [skills, activeCategory]);

  // ==========================================
  // AVERAGE SKILL
  // ==========================================

  const averageSkill = useMemo(() => {
    if (!skills.length) {
      return 0;
    }

    const total = skills.reduce(
      (sum, skill) => sum + Number(skill.percentage || 0),
      0
    );

    return Math.round(total / skills.length);
  }, [skills]);

  // ==========================================
  // SKILL LEVEL LABEL
  // ==========================================

  const getLevel = (percentage) => {
    if (percentage >= 90) return "Expert";
    if (percentage >= 80) return "Advanced";
    if (percentage >= 70) return "Intermediate";
    if (percentage >= 60) return "Familiar";

    return "Learning";
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:px-8 lg:px-12"
    >

      {/* ========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ========================================
            HEADER
        ========================================= */}

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of technologies, frameworks and tools I use
            to build modern applications and solve real-world problems.
          </p>
        </div>

        {/* ========================================
            LOADING
        ========================================= */}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">

            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-800 border-t-cyan-400" />

            <p className="mt-4 text-sm text-slate-500">
              Loading skills...
            </p>

          </div>
        )}

        {/* ========================================
            ERROR
        ========================================= */}

        {error && !loading && (
          <div className="mx-auto max-w-xl rounded-3xl border border-red-400/20 bg-red-400/5 p-8 text-center">

            <div className="text-4xl">
              ⚠️
            </div>

            <h3 className="mt-4 font-semibold text-red-400">
              {error}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Make sure your Django server is running.
            </p>

          </div>
        )}

        {/* ========================================
            MAIN SKILLS CONTENT
        ========================================= */}

        {!loading && !error && skills.length > 0 && (
          <>

            {/* ======================================
                STATISTICS
            ======================================= */}

            <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

              {/* Total */}

              <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    💻
                  </span>

                  <span className="text-xs text-slate-600">
                    01
                  </span>

                </div>

                <p className="mt-4 text-3xl font-black text-cyan-400">
                  {skills.length}+
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Technologies
                </p>

              </div>

              {/* Average */}

              <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    📊
                  </span>

                  <span className="text-xs text-slate-600">
                    02
                  </span>

                </div>

                <p className="mt-4 text-3xl font-black text-cyan-400">
                  {averageSkill}%
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Average Proficiency
                </p>

              </div>

              {/* Categories */}

              <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    🧩
                  </span>

                  <span className="text-xs text-slate-600">
                    03
                  </span>

                </div>

                <p className="mt-4 text-3xl font-black text-cyan-400">
                  {categories.length - 1}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Skill Categories
                </p>

              </div>

              {/* Focus */}

              <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    🚀
                  </span>

                  <span className="text-xs text-slate-600">
                    04
                  </span>

                </div>

                <p className="mt-4 text-xl font-black text-cyan-400">
                  Full Stack
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Primary Focus
                </p>

              </div>

            </div>

            {/* ======================================
                CATEGORY FILTER
            ======================================= */}

            <div className="mb-10 flex flex-wrap justify-center gap-3">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20"
                      : "border border-white/10 bg-slate-900/60 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-400"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>

            {/* ======================================
                SKILL CARDS
            ======================================= */}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {filteredSkills.map((skill, index) => {

                const percentage = Number(
                  skill.percentage || 0
                );

                const level = getLevel(percentage);

                return (
                  <div
                    key={skill.id}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-slate-900/80"
                  >

                    {/* Hover Glow */}

                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition duration-500 group-hover:bg-cyan-400/15" />

                    {/* Top */}

                    <div className="relative flex items-start justify-between">

                      <div className="flex items-center gap-4">

                        {/* Icon */}

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/10 text-xl text-cyan-400 transition duration-300 group-hover:scale-110">
                          {skill.icon || "⚡"}
                        </div>

                        <div>

                          <h3 className="font-bold text-white">
                            {skill.name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-500">
                            {skill.category || "Technology"}
                          </p>

                        </div>

                      </div>

                      {/* Percentage */}

                      <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-400">
                        {percentage}%
                      </span>

                    </div>

                    {/* Level */}

                    <div className="mt-6 flex items-center justify-between">

                      <span className="text-xs font-medium text-slate-500">
                        Proficiency
                      </span>

                      <span className="text-xs font-semibold text-cyan-400">
                        {level}
                      </span>

                    </div>

                    {/* Progress */}

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 transition-all duration-1000 ease-out"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />

                    </div>

                    {/* Bottom */}

                    <div className="mt-5 flex items-center justify-between">

                      <span className="text-[11px] text-slate-600">
                        Skill #{String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs text-slate-600 transition group-hover:text-cyan-400">
                        ●
                      </span>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* ======================================
                NO FILTER RESULTS
            ======================================= */}

            {filteredSkills.length === 0 && (
              <div className="py-12 text-center">

                <p className="text-slate-500">
                  No skills found in this category.
                </p>

              </div>
            )}

            {/* ======================================
                BOTTOM MESSAGE
            ======================================= */}

            <div className="mt-12 text-center">

              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/50 px-5 py-3">

                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

                <span className="text-xs text-slate-400">
                  Always learning • Always building • Always improving
                </span>

              </div>

            </div>

          </>
        )}

      </div>
    </section>
  );
}

export default Skills;