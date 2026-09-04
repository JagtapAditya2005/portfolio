import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Contact API Error:", data);
        throw new Error(data.error || "Failed to send message");
      }

      setSuccess(
        "Thank you! Your message has been sent successfully. 📩"
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Error:", error);

      setError(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Have a project in mind?
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              I'm always interested in discussing new projects,
              opportunities and ideas. Feel free to get in touch.
            </p>

            <div className="mt-8 space-y-4">

              {/* Email */}
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">
                  Email
                </p>

                <p className="mt-1 text-slate-200">
                  aditya.a.jagtap77@gmail.com
                </p>
              </div>

              {/* Location */}
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm text-slate-400">
                  Location
                </p>

                <p className="mt-1 text-slate-200">
                  Pune, Maharashtra, India
                </p>
              </div>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8"
          >
            <div className="grid gap-5">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />

              {/* Message */}
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />

              {/* Success Message */}
              {success && (
                <div className="rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-center text-green-400">
                  {success}
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-center text-red-400">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;