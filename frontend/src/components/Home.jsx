import { useEffect, useState } from "react";
import { profile } from "../data/portfolioData";


const roles = [
  "Python Full Stack Developer",
  "AI / ML Enthusiast",
  "Data Analyst",
  "Software Developer",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);

  // ==============================
  // ANIMATED ROLE
  // ==============================
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleVisible(false);

      setTimeout(() => {
        setRoleIndex((previous) => {
          return (previous + 1) % roles.length;
        });

        setRoleVisible(true);
      }, 350);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleInternalLink = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      id="home"
      className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 sm:px-8 lg:px-12 flex-col"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================== */}

      <div className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 animate-pulse rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      {/* =========================================
          MAIN CONTAINER
      ========================================== */}

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* =====================================
            LEFT CONTENT
        ====================================== */}

        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* Availability */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-400 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </div>

          {/* Greeting */}

          <p className="text-lg font-semibold text-cyan-400">Hello, I'm</p>

          {/* Name */}

          <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          {/* =================================
              ANIMATED ROLE
          ================================== */}

          <div className="mt-5 min-h-[48px] overflow-hidden sm:min-h-[55px]">
            <h2
              className={`text-xl font-bold text-slate-200 transition-all duration-300 sm:text-2xl ${
                roleVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-3 opacity-0"
              }`}
            >
              {roles[roleIndex]}
            </h2>
          </div>

          {/* Animated underline */}

          <div className="mt-2 flex justify-center lg:justify-start">
            <div className="h-1 w-20 animate-pulse rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0">
            I build modern web applications using Python, Django and React.js
            while exploring Data Analytics, Artificial Intelligence and Machine
            Learning to solve real-world problems.
          </p>

          {/* =================================
              BUTTONS
          ================================== */}

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            {/* Resume */}

            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/20"
            >
              Download Resume 
            </a>

            {/* Projects */}

            <a
              href="#projects"
              onClick={(e) => handleInternalLink(e, "projects")}
              className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              View Projects 
            </a>

            {/* Contact */}

            <a
              href="#contact"
              onClick={(e) => handleInternalLink(e, "contact")}
              className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          {/* =================================
              SOCIAL LINKS
          ================================== */}

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {profile.github_url && (
              <a
                href={profile.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                GitHub
              </a>
            )}

            {profile.linkedin_url && (
              <a
                href={profile.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* =====================================
            RIGHT PROFILE IMAGE
        ====================================== */}

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            {/* Large Glow */}

            <div className="absolute inset-0 scale-75 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Outer rotating ring */}

            <div className="absolute -inset-6 animate-[spin_15s_linear_infinite] rounded-full border border-cyan-400/20" />

            {/* Second ring */}

            <div className="absolute -inset-3 rounded-full border border-cyan-400/30" />

            {/* Image */}

            <div className="relative h-54 w-54 overflow-hidden rounded-full border-4 border-cyan-400/80 bg-slate-900 shadow-2xl shadow-cyan-400/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              {profile.profile_image ? (
                <img
                  src={profile.profile_image}
                  alt={profile.name}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-500/10">
                  <span className="text-8xl font-black text-cyan-400">
                    {profile.name?.charAt(0) || "A"}
                  </span>
                </div>
              )}
            </div>

            {/* =================================
                SPECIALIZATION BADGE
            ================================== */}

            <div className="absolute -bottom-5 -left-8 rounded-2xl border border-white/10 bg-slate-900/95 px-5 py-3 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <p className="text-xs text-slate-500">Specialization</p>

              <p className="mt-1 text-sm font-bold text-cyan-400">
                Full Stack • AI/ML • Data
              </p>
            </div>


            
          </div>
        </div>
      </div>

      {/* =========================================
          CONTACT INFO BOTTOM
      ========================================== */}

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-8 text-xs text-slate-500 xl:flex">
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-cyan-400"
          >
            ✉ {profile.email}
          </a>
        )}

        {profile.phone && (
          <a
            href={`tel:${profile.phone}`}
            className="transition-colors hover:text-cyan-400"
          >
            ☎ {profile.phone}
          </a>
        )}

        {profile.location && <span>📍 {profile.location}</span>}
      </div>

      {/* =========================================
          SCROLL INDICATOR
      ========================================== */}

      <a
        href="#about"
        onClick={(e) => handleInternalLink(e, "about")}
        className="absolute bottom-7 right-8 hidden flex-col items-center gap-2 text-xs text-slate-600 transition hover:text-cyan-400 lg:flex"
      >
        <span>Scroll</span>

        <span className="h-10 w-px animate-pulse bg-cyan-400/50" />
      </a>

    </main>
  );
}

export default Home;
