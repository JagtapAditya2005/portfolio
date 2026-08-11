function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Aditya Jagtap. All rights reserved.
        </p>

        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          Back to Top ↑
        </a>

      </div>
    </footer>
  );
}

export default Footer;