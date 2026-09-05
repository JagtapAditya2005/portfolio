import { useMemo, useState } from "react";
import { skills } from "../data/portfolioData";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ============================================================
  // CATEGORIES
  // ============================================================

  const categories = useMemo(() => {
    const unique = [
      ...new Set(skills.map((skill) => skill.category).filter(Boolean)),
    ];

    return ["All", ...unique];
  }, []);

  // ============================================================
  // GROUP SKILLS
  // ============================================================

  const groupedSkills = useMemo(() => {
    return skills.reduce((groups, skill) => {
      const category = skill.category || "Other";

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(skill);

      return groups;
    }, {});
  }, []);

  // ============================================================
  // VISIBLE GROUPS
  // ============================================================

  const visibleGroups = useMemo(() => {
    if (activeCategory === "All") {
      return Object.entries(groupedSkills);
    }

    return Object.entries(groupedSkills).filter(
      ([category]) => category === activeCategory
    );
  }, [activeCategory, groupedSkills]);

  // ============================================================
  // CATEGORY ICON
  // ============================================================

  const getCategoryIcon = (category) => {
    const icons = {
      Frontend: "🎨",
      Backend: "⚙️",
      Tools: "🛠️",
      Competencies: "💡",
      Database: "🗄️",
      DevOps: "🚀",
      "AI & ML": "🤖",
      "Machine Learning": "🧠",
      Other: "📦",
    };

    return icons[category] || "🔹";
  };

  // ============================================================
  // RETURN
  // ============================================================

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
            My Skills
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A collection of technologies, frameworks and tools I use to build
            modern applications and solve real-world problems.
          </p>
        </div>

        {/* ======================================================
            CATEGORY FILTER
        ====================================================== */}

        <div className="mb-12 flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "border-slate-700 bg-slate-900/70 text-slate-400 hover:border-slate-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ======================================================
            GROUPED SKILLS
        ====================================================== */}

        {skills.length > 0 && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {visibleGroups.map(([category, categorySkills]) => (
              <div
                key={category}
                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 sm:p-7"
              >
                {/* CATEGORY TITLE */}

                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-lg">
                    {getCategoryIcon(category)}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {category}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {categorySkills.length}{" "}
                      {categorySkills.length === 1
                        ? "skill"
                        : "skills"}
                    </p>
                  </div>
                </div>

                {/* SKILL TAGS */}

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={skill.id || `${category}-${index}`}
                      className="group/skill rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <span className="text-sm">
                            {skill.icon}
                          </span>
                        )}

                        <span>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ======================================================
            EMPTY STATE
        ====================================================== */}

        {visibleGroups.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-slate-500">
              No skills found in this category.
            </p>
          </div>
        )}

        {/* ======================================================
            FOOTER MESSAGE
        ====================================================== */}

        <div className="mt-12 text-center">
          <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-slate-900/50 px-4 py-3 sm:px-5">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-xs text-slate-400">
              Always learning • Always building • Always improving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;