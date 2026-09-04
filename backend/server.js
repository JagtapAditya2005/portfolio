const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// ============================================================
// APP SETUP
// ============================================================

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://adityajagtap.vercel.app",
    ],
  })
);

// ============================================================
// NODEMAILER TRANSPORTER (Brevo SMTP Relay)
// ============================================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // TLS on port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  authMethod: "LOGIN",
});

// Verify SMTP connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection failed:", error.message);
  } else {
    console.log("✅ SMTP connection ready");
  }
});

// ============================================================
// ROUTES
// ============================================================

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Portfolio backend is running" });
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "All fields are required (name, email, subject, message)",
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22d3ee; border-bottom: 2px solid #22d3ee; padding-bottom: 10px;">
            New Portfolio Contact Message
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Name:</td>
              <td style="padding: 8px 12px;">${name}</td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Email:</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #64748b;">Subject:</td>
              <td style="padding: 8px 12px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #f1f5f9; border-radius: 8px;">
            <p style="font-weight: bold; color: #64748b; margin: 0 0 8px 0;">Message:</p>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    res.status(201).json({
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({
      error: "Failed to send email. Please try again later.",
    });
  }
});

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
