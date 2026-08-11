import { useEffect, useState } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/certificates/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch certificates");
        }

        return response.json();
      })
      .then((data) => {
        setCertificates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Certificates API Error:", error);
        setError("Unable to load certificates.");
        setLoading(false);
      });
  }, []);

  const getImageUrl = (image) => {
    if (!image) return null;

    if (image.startsWith("http")) {
      return image;
    }

    return `${API_BASE_URL}${image}`;
  };

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section
      id="certificates"
      className="bg-slate-950 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Certifications
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Certificates & Achievements
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Certifications and professional training that reflect my continuous
            learning and technical growth.
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

        {/* ================= CERTIFICATES ================= */}
        {!loading && !error && certificates.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <article
                key={certificate.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/50 hover:shadow-cyan-400/10"
              >
                {/* ================= IMAGE ================= */}
                <div className="relative h-52 overflow-hidden">
                  {certificate.certificate_image ? (
                    <img
                      src={getImageUrl(certificate.certificate_image)}
                      alt={certificate.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-linear-to-br from-cyan-500/20 via-blue-500/10 to-slate-900">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-4xl text-cyan-400 transition duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20">
                        ✓
                      </div>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Certificate Badge */}
                  <div className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md">
                    Certificate
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {certificate.title}
                  </h3>

                  {/* Issuer */}
                  <p className="mt-2 font-medium text-slate-300">
                    {certificate.issuer}
                  </p>

                  {/* Date */}
                  {certificate.issue_date && (
                    <p className="mt-3 text-sm text-cyan-400">
                      Issued {formatDate(certificate.issue_date)}
                    </p>
                  )}

                  {/* Description */}
                  {certificate.description && (
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
                      {certificate.description}
                    </p>
                  )}

                  {/* View Certificate */}
                  <div className="mt-6 text-center">
                    <a
                      href={
                        certificate.certificate_url ||
                        getImageUrl(certificate.certificate_image)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      View Certificate ↗
                    </a>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 h-px w-0 bg-linear-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ================= EMPTY STATE ================= */}
        {!loading && !error && certificates.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-10 text-center">
            <p className="text-slate-400">No certificates available yet.</p>
          </div>
        )}

        {/* ================= COUNT ================= */}
        {!loading && !error && certificates.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              {certificates.length} certificate
              {certificates.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;
