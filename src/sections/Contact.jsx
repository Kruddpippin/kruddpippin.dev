import { useState } from "react";
import { Mail, Github, Linkedin, Check, Copy, ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import CONFIG from "../data/config.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const sendMessage = async () => {
    if (!form.name || !form.email || !form.message) {
      setSendError("Please fill in all fields.");
      return;
    }
    setSending(true);
    setSendError("");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setSendError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="wrap section">
      <div className="contact">
        <Reveal className="contact-left">
          <span className="kicker">Start here</span>
          <h2>Have a page that needs building?</h2>
          <p>
            Tell me what you're working on. I'll reply within a day with a
            clear price and a start date.
          </p>
          <button className="email-copy" onClick={copyEmail}>
            <Mail size={16} /> {CONFIG.email}
            <span className="copy-state">
              {copied
                ? (<><Check size={14} /> Copied</>)
                : (<><Copy size={14} /> Copy</>)
              }
            </span>
          </button>
          <div className="socials">
            <a href={CONFIG.socials.github} aria-label="GitHub"><Github size={18} /></a>
            <a href={CONFIG.socials.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={CONFIG.socials.x} aria-label="X">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7-6.2 7H1.6l8.1-9.3L1 2h7.1l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="contact-form">
          <label>
            Your name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jane Doe"
            />
          </label>
          <label>
            Your email
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="jane@brand.com"
            />
          </label>
          <label>
            What do you need?
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="A landing page for my coaching launch next month…"
            />
          </label>
          {sendError && (
            <p style={{ color: "var(--coral)", fontSize: 13, margin: 0 }}>{sendError}</p>
          )}
          {sent ? (
            <p style={{ color: "var(--mint)", fontSize: 14, fontWeight: 600, margin: 0 }}>
              <Check size={15} style={{ display: "inline", marginRight: 6 }} />
              Message sent — I'll be in touch soon.
            </p>
          ) : (
            <button
              className="btn btn-primary full"
              onClick={sendMessage}
              disabled={sending}
            >
              {sending ? "Sending…" : <> Send message <ArrowUpRight size={16} /> </>}
            </button>
          )}
        </Reveal>
      </div>
    </section>
  );
}
