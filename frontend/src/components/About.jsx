function About() {
  const technologies = [
    "Python",
    "Django",
    "React.js",
    "JavaScript",
    "SQL",
    "REST API",
    "Pandas",
    "Machine Learning",
    "Power BI",
    "Git & GitHub",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================
            SECTION HEADING
        ========================================== */}

        <div className="mb-16 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            More Than Just a Developer
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A Computer Engineering student passionate about software
            development, data, artificial intelligence and building
            meaningful digital experiences.
          </p>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* =====================================
              LEFT — DEVELOPER PROFILE
          ====================================== */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-7 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 sm:p-10">

            {/* Card Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/15" />

            {/* Top Label */}

            <div className="relative flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl text-cyan-400">
                👨‍💻
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                  Developer Profile
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Python Full Stack Developer
                </h3>
              </div>
            </div>

            {/* Introduction */}

            <div className="relative mt-8">

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Building software.
                <br />

                <span className="text-cyan-400">
                  Learning every day.
                </span>
              </h3>

              <p className="mt-6 text-sm leading-8 text-slate-400 sm:text-base">
                I'm a Computer Engineering student passionate about
                building modern, responsive and user-focused web
                applications. I enjoy taking an idea and turning it
                into a practical software solution.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                My primary development stack includes{" "}
                <span className="font-medium text-slate-200">
                  Python, Django, React.js, JavaScript, SQL and REST APIs
                </span>
                . Alongside development, I'm exploring{" "}
                <span className="font-medium text-cyan-400">
                  Data Analytics, AI and Machine Learning
                </span>
                .
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                I believe in continuous learning, building real-world
                projects and improving my technical skills through
                practical experience.
              </p>
            </div>

            {/* Career Direction */}

            <div className="relative mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">

              <div className="flex items-start gap-4">

                <div className="mt-1 text-xl">
                  🎯
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Current Goal
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Growing as a strong{" "}
                    <span className="font-semibold text-white">
                      Full Stack Developer
                    </span>{" "}
                    while developing expertise in{" "}
                    <span className="font-semibold text-cyan-400">
                      Data Science, AI/ML and Data Analytics
                    </span>
                    .
                  </p>

                </div>
              </div>
            </div>

            {/* Technologies */}

            <div className="relative mt-8">

              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Technologies I Work With
              </p>

              <div className="flex flex-wrap gap-2.5">

                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-slate-950/70 px-3.5 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    {technology}
                  </span>
                ))}

              </div>
            </div>
          </div>

          {/* =====================================
              RIGHT — STATS + FOCUS
          ====================================== */}

          <div className="flex flex-col gap-6">

            {/* Stats */}

            <div className="grid grid-cols-2 gap-4">

              {/* SGPA */}

              <div className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    🎓
                  </span>

                  <span className="text-xs text-slate-600">
                    01
                  </span>

                </div>

                <h4 className="mt-6 text-3xl font-black text-cyan-400">
                  9.38
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Latest SGPA
                </p>

              </div>

              {/* Projects */}

              <div className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    🚀
                  </span>

                  <span className="text-xs text-slate-600">
                    02
                  </span>

                </div>

                <h4 className="mt-6 text-3xl font-black text-cyan-400">
                  5+
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Projects Built
                </p>

              </div>

              {/* Technologies */}

              <div className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    ⚡
                  </span>

                  <span className="text-xs text-slate-600">
                    03
                  </span>

                </div>

                <h4 className="mt-6 text-3xl font-black text-cyan-400">
                  10+
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Technologies
                </p>

              </div>

              {/* Graduation */}

              <div className="group rounded-3xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <span className="text-2xl">
                    🎯
                  </span>

                  <span className="text-xs text-slate-600">
                    04
                  </span>

                </div>

                <h4 className="mt-6 text-3xl font-black text-cyan-400">
                  2027
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Graduation
                </p>

              </div>
            </div>

            {/* =================================
                WHAT I DO
            ================================== */}

            <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  ✨
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    What I Do
                  </p>

                  <h3 className="text-lg font-bold text-white">
                    Areas I'm Exploring
                  </h3>
                </div>

              </div>

              <div className="mt-6 space-y-4">

                {/* Full Stack */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/50 p-4 transition hover:border-cyan-400/20">

                  <div className="text-xl">
                    💻
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      Full Stack Development
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Python • Django • React • REST APIs
                    </p>

                  </div>

                  <span className="text-cyan-400">
                    →
                  </span>

                </div>

                {/* Data */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/50 p-4 transition hover:border-cyan-400/20">

                  <div className="text-xl">
                    📊
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      Data Analytics
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Python • Pandas • Excel • Power BI
                    </p>

                  </div>

                  <span className="text-cyan-400">
                    →
                  </span>

                </div>

                {/* AI */}

                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/50 p-4 transition hover:border-cyan-400/20">

                  <div className="text-xl">
                    🤖
                  </div>

                  <div className="flex-1">

                    <p className="font-semibold text-white">
                      AI & Machine Learning
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      ML • Data Science • Intelligent Systems
                    </p>

                  </div>

                  <span className="text-cyan-400">
                    →
                  </span>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM CAREER STATEMENT
        ========================================== */}

        <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/5 via-slate-900/50 to-blue-400/5 p-6 text-center sm:p-8">

          <p className="text-sm leading-7 text-slate-400 sm:text-base">

            <span className="font-semibold text-white">
              "Build. Learn. Improve. Repeat."
            </span>

            <span className="mx-2 hidden text-slate-700 sm:inline">
              •
            </span>

            I'm focused on building practical projects,
            gaining real-world experience and becoming a
            better engineer every day.

          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
