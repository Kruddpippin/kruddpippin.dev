import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu, X, Sun, Moon, ArrowUpRight, ArrowRight, ArrowUp, Check, Copy,
  Mail, Github, Linkedin, Zap, Clock, Code2, Sparkles, Rocket,
  ChevronDown, Plus, Star, Quote, Gauge, Layers, MousePointerClick,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   EDIT THIS BLOCK — everything you'd want to change lives here.
   Swap the name, email, links, prices, projects and testimonials, and the
   whole site updates. No other code changes needed.
   ───────────────────────────────────────────────────────────────────────── */
const CONFIG = {
  brand: "KRUDDPIPPIN",
  fullName: "Opara, Precious Chibuzor",
  role: "I build landing pages that load fast and convert — shipped in 72 hours.",
  location: "Abuja, Nigeria · Working with clients worldwide",
  email: "precious.op2013@gmail.com",          // ← put your real email
  calendly: "#",                        // ← paste your Calendly link, or leave "#"
  socials: {
    github: "https://github.com/kruddpippin",
    linkedin: "https://linkedin.com/in/precious-opara-511827231",
    x: "https://x.com/kruddpippin",
  },
  stats: [
    { value: 30, suffix: "+", label: "Pages shipped" },
    { value: 72, suffix: "h", label: "Average turnaround" },
    { value: 1.2, suffix: "s", label: "Typical load time", decimals: 1 },
    { value: 100, suffix: "%", label: "Money-back if late" },
  ],
  packages: [
    {
      name: "Express Page",
      price: "$180",
      tag: "Most popular",
      featured: true,
      blurb: "One high-converting landing page, live in 72 hours.",
      features: [
        "Single conversion-focused page",
        "Mobile-first, responsive build",
        "Copy polish + clear call-to-action",
        "Deployed live (you keep the code)",
        "2 rounds of revisions",
      ],
    },
    {
      name: "Full Site",
      price: "$420",
      tag: null,
      featured: false,
      blurb: "Up to 5 pages for a brand that needs the whole thing.",
      features: [
        "Up to 5 connected pages",
        "Reusable components + routing",
        "Contact form + basic SEO setup",
        "Animation & micro-interactions",
        "3 rounds of revisions",
      ],
    },
    {
      name: "Care Plan",
      price: "$40",
      priceSuffix: "/mo",
      tag: "Recurring",
      featured: false,
      blurb: "Keep it fresh — edits, fixes and uptime, handled.",
      features: [
        "Unlimited small edits",
        "Monthly performance check",
        "Priority response window",
        "Hosting & uptime monitoring",
        "Cancel anytime",
      ],
    },
  ],
  projects: [
    {
      title: "Odd Ritual Golf",
      type: "Pixel-perfect rebuild",
      stack: ["React", "Vite", "Routing"],
      grad: "linear-gradient(135deg,#1b3a2e,#3f7d5b 55%,#a8e6b0)",
      live: "#",
    },
    {
      title: "Lumen Coaching",
      type: "Coach landing page",
      stack: ["Landing", "Conversion"],
      grad: "linear-gradient(135deg,#3a1d5e,#8b5cf6 60%,#ffb4a2)",
      live: "#",
    },
    {
      title: "Sable Skincare",
      type: "DTC product page",
      stack: ["E-commerce", "Animation"],
      grad: "linear-gradient(135deg,#5e1d2e,#ff6b57 55%,#ffd6a5)",
      live: "#",
    },
    {
      title: "Northwind Studio",
      type: "Agency one-pager",
      stack: ["Brand", "Motion"],
      grad: "linear-gradient(135deg,#0f2a3a,#2dd4bf 60%,#a5f3fc)",
      live: "#",
    },
  ],
  testimonials: [
    {
      quote:
        "Sent the brief on Monday, had a live page Thursday. It loaded faster than anything we'd had before and bookings went up the same week.",
      name: "Amara Ahuchogu.",
      role: "Wellness coach",
    },
    {
      quote:
        "Most developers go quiet for a week. This was the opposite — clear updates the whole way, and the page just worked.",
      name: "David Oyeniyi.",
      role: "Founder, DTC brand",
    },
    {
      quote:
        "Fixed price, fixed deadline, no surprises. I knew exactly what I was getting and got more.",
      name: "Sarah Yohanna.",
      role: "Marketing lead",
    },
  ],
  faqs: [
    {
      q: "Can you really deliver in 72 hours?",
      a: "Yes — that's the whole point of the Express Page. Once I have your content and brand assets, the clock starts and your page is live in three days. If I'm ever late, you get your money back.",
    },
    {
      q: "What do you need from me to start?",
      a: "Your text (or rough notes I can polish), your logo and any brand colours, and one example of a site you like. That's enough to begin.",
    },
    {
      q: "Do I own the code?",
      a: "Completely. I hand over the full project and deploy it under your account, so you're never locked in.",
    },
    {
      q: "How do payments work?",
      a: "50% to start, 50% on delivery. I accept Payoneer, bank transfer and USDT, so paying from anywhere is straightforward.",
    },
  ],
};

/* ── Small reusable scroll-reveal wrapper ─────────────────────────────────── */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── Count-up number that animates when scrolled into view ─────────────────── */
function CountUp({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.unobserve(el);
      const dur = 1400;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(value * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Portfolio() {
  const initialTheme =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  const [theme, setTheme] = useState(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  /* scroll progress + back-to-top visibility */
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(scrolled * 100);
      setShowTop(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* active section highlighting in the nav */
  useEffect(() => {
    const ids = ["home", "work", "services", "process", "about", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = useCallback((id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — ignore */
    }
  };

  const sendMessage = () => {
    const subject = encodeURIComponent(`New project enquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  };

  const nav = [
    ["work", "Work"],
    ["services", "Services"],
    ["process", "Process"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  return (
    <div data-theme={theme} className="root">
      <style>{CSS}</style>

      {/* scroll progress */}
      <div className="progress" style={{ width: `${progress}%` }} />

      {/* ── NAV ─────────────────────────────────────────────── */}
      <header className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Home">
          <span className="brand-dot" />
          {CONFIG.brand}
        </button>

        <nav className="nav-links">
          {nav.map(([id, label]) => (
            <button
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle colour theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="btn btn-primary nav-cta" onClick={() => go("contact")}>
            Start a project <ArrowRight size={16} />
          </button>
          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {nav.map(([id, label]) => (
          <button key={id} onClick={() => go(id)}>{label}</button>
        ))}
        <button className="btn btn-primary" onClick={() => go("contact")}>
          Start a project <ArrowRight size={16} />
        </button>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="aurora" aria-hidden />
        <div className="grain" aria-hidden />

        <div className="hero-inner">
          <Reveal className="eyebrow">
            <Sparkles size={14} /> Available for new projects
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title">
              Beautiful pages.
              <br />
              <span className="grad-text">Shipped in 72 hours.</span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="hero-sub">
            {CONFIG.role}
          </Reveal>

          {/* signature: live countdown */}
          <Reveal delay={220}>
            <Countdown />
          </Reveal>

          <Reveal delay={300} className="hero-cta">
            <button className="btn btn-primary big" onClick={() => go("contact")}>
              <Rocket size={18} /> Start a project
            </button>
            <button className="btn btn-ghost big" onClick={() => go("work")}>
              See the work <ArrowUpRight size={18} />
            </button>
          </Reveal>
        </div>

        {/* marquee */}
        <div className="marquee" aria-hidden>
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                React <Dot /> Vite <Dot /> Conversion <Dot /> Speed <Dot />
                Landing pages <Dot /> Clean code <Dot /> Mobile-first <Dot />
                72-hour delivery <Dot />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section className="stats wrap">
        {CONFIG.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="stat">
            <div className="stat-num">
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
            </div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </section>

      {/* ── WORK ────────────────────────────────────────────── */}
      <section id="work" className="wrap section">
        <SectionHead kicker="Selected work" title="Pages that earn their keep" />
        <div className="work-grid">
          {CONFIG.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="work-card">
              <a href={p.live} className="work-thumb" style={{ background: p.grad }}>
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="work-visit">
                  Visit <ArrowUpRight size={16} />
                </span>
              </a>
              <div className="work-meta">
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.type}</p>
                </div>
                <div className="tags">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICES / PRICING ──────────────────────────────── */}
      <section id="services" className="wrap section">
        <SectionHead
          kicker="Packages"
          title="One clear price. One clear deadline."
        />
        <div className="price-grid">
          {CONFIG.packages.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              delay={i * 90}
              className={`price-card ${pkg.featured ? "featured" : ""}`}
            >
              {pkg.tag && <span className="price-tag">{pkg.tag}</span>}
              <h3>{pkg.name}</h3>
              <div className="price">
                {pkg.price}
                {pkg.priceSuffix && <span>{pkg.priceSuffix}</span>}
              </div>
              <p className="price-blurb">{pkg.blurb}</p>
              <ul>
                {pkg.features.map((f) => (
                  <li key={f}>
                    <Check size={16} /> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${pkg.featured ? "btn-primary" : "btn-ghost"} full`}
                onClick={() => go("contact")}
              >
                Get started <ArrowRight size={16} />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section id="process" className="wrap section">
        <SectionHead kicker="How it works" title="From brief to live in three days" />
        <div className="process">
          {[
            { icon: <MousePointerClick size={20} />, day: "Day 0", t: "Brief", d: "You send your content, brand and one reference. The clock starts." },
            { icon: <Code2 size={20} />, day: "Day 1–2", t: "Build", d: "I design and build your page, sending updates so you're never in the dark." },
            { icon: <Gauge size={20} />, day: "Day 2", t: "Polish", d: "Speed, responsiveness and copy tightened until it's genuinely fast." },
            { icon: <Rocket size={20} />, day: "Day 3", t: "Ship", d: "Deployed live under your account, code handed over. You're ready to sell." },
          ].map((step, i) => (
            <Reveal key={step.t} delay={i * 100} className="step">
              <div className="step-top">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="step-icon">{step.icon}</span>
              </div>
              <span className="step-day">{step.day}</span>
              <h4>{step.t}</h4>
              <p>{step.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="wrap section">
        <SectionHead kicker="Words" title="What clients say" />
        <div className="quotes">
          {CONFIG.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className="quote-card">
              <Quote className="quote-mark" size={26} />
              <p>{t.quote}</p>
              <div className="quote-by">
                <div className="avatar">{t.name.charAt(0)}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={13} fill="currentColor" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────── */}
      <section id="about" className="wrap section about">
        <Reveal className="about-text">
          <span className="kicker">About</span>
          <h2>
            I'm {CONFIG.fullName}. I make small businesses look like they mean
            business.
          </h2>
          <p>
            I build fast, modern landing pages with React and Vite — the same
            tools the best product teams use. Most freelance work goes quiet for
            a week and shows up late. I do the opposite: a fixed price, a fixed
            deadline, and clear updates the whole way through.
          </p>
          <p className="muted-line">{CONFIG.location}</p>
          <div className="about-skills">
            {["React", "Vite", "Responsive design", "Performance", "Conversion copy", "Deployment"].map((s) => (
              <span key={s}><Layers size={13} /> {s}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="about-card">
          <div className="about-card-row"><Zap size={18} /> <div><strong>Fast by default</strong><span>Pages built to load in around a second.</span></div></div>
          <div className="about-card-row"><Clock size={18} /> <div><strong>On time, every time</strong><span>Late delivery means your money back.</span></div></div>
          <div className="about-card-row"><Check size={18} /> <div><strong>You own everything</strong><span>Full code handover, no lock-in.</span></div></div>
        </Reveal>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="wrap section">
        <SectionHead kicker="Questions" title="Good to know" />
        <div className="faq">
          {CONFIG.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <button
                className={`faq-item ${openFaq === i ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <span className="faq-q">
                  {f.q}
                  <ChevronDown size={18} className="faq-chev" />
                </span>
                <span className="faq-a">{f.a}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
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
                {copied ? (<><Check size={14} /> Copied</>) : (<><Copy size={14} /> Copy</>)}
              </span>
            </button>
            <div className="socials">
              <a href={CONFIG.socials.github} aria-label="GitHub"><Github size={18} /></a>
              <a href={CONFIG.socials.linkedin} aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={CONFIG.socials.x} aria-label="X">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7-6.2 7H1.6l8.1-9.3L1 2h7.1l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z"/></svg>
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
            <button className="btn btn-primary full" onClick={sendMessage}>
              Send message <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="footer wrap">
        <span>
          © {new Date().getFullYear()} {CONFIG.fullName}. Built fast, on purpose.
        </span>
        <button className="back-top-link" onClick={() => go("home")}>
          Back to top <ArrowUp size={14} />
        </button>
      </footer>

      {/* back-to-top floating */}
      <button
        className={`back-top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}

/* ── Helper components ─────────────────────────────────────────────────────── */
function SectionHead({ kicker, title }) {
  return (
    <Reveal className="section-head">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </Reveal>
  );
}
function Dot() {
  return <span className="mq-dot">◆</span>;
}
function Countdown() {
  const [t, setT] = useState(72 * 3600);
  useEffect(() => {
    const id = setInterval(() => {
      setT((prev) => (prev <= 0 ? 72 * 3600 : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(t / 3600)).padStart(2, "0");
  const mm = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const ss = String(t % 60).padStart(2, "0");
  return (
    <div className="countdown">
      <span className="cd-label">Your page, live in</span>
      <div className="cd-clock">
        <b>{hh}</b><i>:</i><b>{mm}</b><i>:</i><b>{ss}</b>
      </div>
    </div>
  );
}

/* ── Styles ────────────────────────────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap');

.root[data-theme="dark"]{
  --bg:#0A0710; --bg2:#120C1E; --surface:#150E22; --surface2:#1E1533;
  --border:rgba(255,255,255,.08); --border2:rgba(255,255,255,.15);
  --text:#F5F1FF; --muted:#ABA0C7;
  --coral:#FF6B57; --violet:#9D7BFF; --mint:#57E6C4;
  --grad:linear-gradient(110deg,#FF6B57,#9D7BFF 55%,#57E6C4);
  --glow:rgba(157,123,255,.35);
  --sunny-color:rgba(253,224,71,0.06);
}
.root[data-theme="light"]{
  --bg:#F6F4FF; --bg2:#FFFFFF; --surface:#FFFFFF; --surface2:#F0ECFF;
  --border:rgba(22,14,38,.10); --border2:rgba(22,14,38,.18);
  --text:#160E26; --muted:#6A6188;
  --coral:#EE4F38; --violet:#7C53F5; --mint:#10A988;
  --grad:linear-gradient(110deg,#EE4F38,#7C53F5 55%,#10A988);
  --glow:rgba(124,83,245,.20);
  --sunny-color:rgba(253,224,71,0.30);
}

.root{
  background-color:var(--bg);
  background-image:radial-gradient(circle at center, var(--sunny-color), transparent 70%);
  background-attachment:fixed;
  color:var(--text); min-height:100vh;
  font-family:'Inter',system-ui,sans-serif; line-height:1.6;
  overflow-x:hidden; transition:background .4s ease,color .4s ease;
  -webkit-font-smoothing:antialiased;
}
.root *{box-sizing:border-box;}
.root button{font-family:inherit; cursor:pointer; border:none; background:none; color:inherit;}
.wrap{max-width:1120px; margin:0 auto; padding:0 24px;}
.section{padding:96px 24px;}
.kicker{
  font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.18em;
  text-transform:uppercase; color:var(--violet); font-weight:700;
}

/* progress */
.progress{position:fixed; top:0; left:0; height:3px; background:var(--grad);
  z-index:60; transition:width .1s linear;}

/* nav */
.nav{position:sticky; top:0; z-index:50; display:flex; align-items:center;
  justify-content:space-between; padding:16px 24px; max-width:1120px; margin:0 auto;
  backdrop-filter:blur(14px);}
.nav::before{content:""; position:absolute; inset:0; background:var(--bg);
  opacity:.72; z-index:-1; border-bottom:1px solid var(--border);}
.brand{display:flex; align-items:center; gap:9px; font-family:'Bricolage Grotesque';
  font-weight:800; font-size:20px; letter-spacing:.04em;}
.brand-dot{width:11px; height:11px; border-radius:50%; background:var(--grad);
  box-shadow:0 0 16px var(--glow);}
.nav-links{display:flex; gap:4px;}
.nav-link{padding:8px 14px; border-radius:999px; font-size:14px; font-weight:500;
  color:var(--muted); transition:.2s;}
.nav-link:hover{color:var(--text);}
.nav-link.active{color:var(--text); background:var(--surface2);}
.nav-actions{display:flex; align-items:center; gap:10px;}
.icon-btn{width:38px; height:38px; display:grid; place-items:center; border-radius:10px;
  border:1px solid var(--border); color:var(--text); transition:.2s;}
.icon-btn:hover{background:var(--surface2); border-color:var(--border2);}
.menu-toggle{display:none;}

.btn{display:inline-flex; align-items:center; gap:8px; padding:11px 20px;
  border-radius:999px; font-weight:600; font-size:14px; transition:.22s; white-space:nowrap;}
.btn.big{padding:15px 26px; font-size:15px;}
.btn.full{width:100%; justify-content:center;}
.btn-primary{background:var(--grad); color:#fff; box-shadow:0 8px 24px -8px var(--glow);}
.btn-primary:hover{transform:translateY(-2px); box-shadow:0 14px 34px -8px var(--glow);}
.btn-ghost{border:1px solid var(--border2); color:var(--text);}
.btn-ghost:hover{background:var(--surface2); transform:translateY(-2px);}

/* mobile menu */
.mobile-menu{position:fixed; inset:64px 0 auto 0; z-index:45; background:var(--bg2);
  border-bottom:1px solid var(--border); display:flex; flex-direction:column; gap:6px;
  padding:18px 24px; transform:translateY(-130%); transition:transform .35s cubic-bezier(.2,.8,.2,1);}
.mobile-menu.open{transform:translateY(0);}
.mobile-menu button:not(.btn){padding:12px; text-align:left; font-size:16px;
  font-weight:500; border-radius:10px;}
.mobile-menu button:not(.btn):hover{background:var(--surface2);}

/* hero */
.hero{position:relative; padding:90px 24px 60px; overflow:hidden;}
.hero-inner{max-width:880px; margin:0 auto; text-align:center; position:relative; z-index:2;}
.aurora{position:absolute; inset:-20% -10% auto -10%; height:120%; z-index:0; filter:blur(60px);
  opacity:.55; pointer-events:none;
  background:
    radial-gradient(40% 50% at 20% 30%, var(--coral) 0%, transparent 60%),
    radial-gradient(45% 55% at 80% 25%, var(--violet) 0%, transparent 60%),
    radial-gradient(40% 50% at 55% 70%, var(--mint) 0%, transparent 62%);
  animation:drift 16s ease-in-out infinite alternate;}
@keyframes drift{
  0%{transform:translate3d(0,0,0) scale(1);}
  50%{transform:translate3d(3%,2%,0) scale(1.08);}
  100%{transform:translate3d(-3%,-2%,0) scale(1.04);}
}
.grain{position:absolute; inset:0; z-index:1; opacity:.05; pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}

.eyebrow{display:inline-flex; align-items:center; gap:8px; padding:7px 16px;
  border:1px solid var(--border2); border-radius:999px; font-size:13px; color:var(--muted);
  font-family:'JetBrains Mono',monospace; margin-bottom:26px;}
.eyebrow svg{color:var(--mint);}
.hero-title{font-family:'Bricolage Grotesque'; font-weight:800; line-height:1.02;
  font-size:clamp(42px,8vw,82px); letter-spacing:-.02em; margin:0 0 22px;}
.grad-text{background:var(--grad); -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent;}
.hero-sub{font-size:clamp(16px,2.4vw,20px); color:var(--muted); max-width:560px;
  margin:0 auto 30px;}
.hero-cta{display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-top:34px;}

/* countdown signature */
.countdown{display:inline-flex; flex-direction:column; align-items:center; gap:8px;
  padding:18px 30px; border:1px solid var(--border); border-radius:18px;
  background:var(--surface); box-shadow:0 20px 50px -24px var(--glow);}
.cd-label{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.2em;
  text-transform:uppercase; color:var(--muted);}
.cd-clock{display:flex; align-items:center; gap:4px; font-family:'JetBrains Mono',monospace;
  font-weight:700; font-size:clamp(30px,6vw,46px);}
.cd-clock b{background:var(--grad); -webkit-background-clip:text; background-clip:text;
  -webkit-text-fill-color:transparent; min-width:1.4ch; text-align:center;}
.cd-clock i{color:var(--muted); font-style:normal; animation:blink 1s steps(1) infinite;}
@keyframes blink{50%{opacity:.25;}}

/* marquee */
.marquee{margin-top:64px; overflow:hidden; border-top:1px solid var(--border);
  border-bottom:1px solid var(--border); padding:16px 0; -webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);}
.marquee-track{display:flex; width:max-content; animation:scroll 26s linear infinite;}
.marquee-track span{display:flex; align-items:center; gap:18px; padding-right:18px;
  font-family:'Bricolage Grotesque'; font-weight:600; font-size:20px; color:var(--muted);
  white-space:nowrap;}
.mq-dot{font-size:9px; color:var(--violet);}
@keyframes scroll{to{transform:translateX(-50%);}}

/* stats */
.stats{display:grid; grid-template-columns:repeat(4,1fr); gap:20px; padding-top:70px; padding-bottom:10px;}
.stat{padding:24px; border:1px solid var(--border); border-radius:16px; background:var(--surface); text-align:center;}
.stat-num{font-family:'Bricolage Grotesque'; font-weight:800; font-size:clamp(30px,5vw,44px);
  background:var(--grad); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;}
.stat-label{font-size:13px; color:var(--muted); margin-top:4px;}

/* section head */
.section-head{margin-bottom:44px;}
.section-head h2{font-family:'Bricolage Grotesque'; font-weight:700; font-size:clamp(28px,4.5vw,44px);
  letter-spacing:-.02em; margin:10px 0 0; max-width:14ch;}

/* work */
.work-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:26px;}
.work-card{border-radius:18px;}
.work-thumb{display:block; height:230px; border-radius:18px; position:relative; overflow:hidden;
  border:1px solid var(--border); transition:.35s;}
.work-thumb::after{content:""; position:absolute; inset:0; background:rgba(0,0,0,.12);}
.work-card:hover .work-thumb{transform:translateY(-6px); box-shadow:0 26px 50px -22px rgba(0,0,0,.5);}
.browser-dots{position:absolute; top:14px; left:16px; display:flex; gap:6px; z-index:2;}
.browser-dots i{width:9px; height:9px; border-radius:50%; background:rgba(255,255,255,.7);}
.work-visit{position:absolute; bottom:16px; right:18px; z-index:2; display:flex; align-items:center;
  gap:6px; color:#fff; font-weight:600; font-size:14px; opacity:0; transform:translateY(6px); transition:.3s;}
.work-card:hover .work-visit{opacity:1; transform:translateY(0);}
.work-meta{display:flex; justify-content:space-between; align-items:flex-start; gap:14px; padding:16px 4px 0;}
.work-meta h3{font-family:'Bricolage Grotesque'; font-weight:700; font-size:20px; margin:0;}
.work-meta p{color:var(--muted); font-size:14px; margin:2px 0 0;}
.tags{display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;}
.tags span{font-size:11px; font-family:'JetBrains Mono',monospace; padding:4px 9px;
  border:1px solid var(--border); border-radius:999px; color:var(--muted);}

/* pricing */
.price-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:22px; align-items:stretch;}
.price-card{position:relative; padding:30px 26px; border:1px solid var(--border); border-radius:20px;
  background:var(--surface); display:flex; flex-direction:column; transition:.3s;}
.price-card:hover{transform:translateY(-6px); border-color:var(--border2);}
.price-card.featured{border-color:transparent; background:
  linear-gradient(var(--surface),var(--surface)) padding-box,var(--grad) border-box;
  box-shadow:0 28px 60px -30px var(--glow);}
.price-tag{position:absolute; top:-12px; left:26px; font-size:11px; font-weight:700;
  font-family:'JetBrains Mono',monospace; letter-spacing:.08em; text-transform:uppercase;
  padding:5px 12px; border-radius:999px; background:var(--grad); color:#fff;}
.price-card h3{font-family:'Bricolage Grotesque'; font-weight:700; font-size:22px; margin:6px 0 0;}
.price{font-family:'Bricolage Grotesque'; font-weight:800; font-size:44px; margin:8px 0 2px;}
.price span{font-size:16px; color:var(--muted); font-weight:500;}
.price-blurb{color:var(--muted); font-size:14px; min-height:42px;}
.price-card ul{list-style:none; padding:0; margin:18px 0 24px; display:flex; flex-direction:column; gap:11px; flex:1;}
.price-card li{display:flex; align-items:flex-start; gap:9px; font-size:14px;}
.price-card li svg{color:var(--mint); flex-shrink:0; margin-top:3px;}

/* process */
.process{display:grid; grid-template-columns:repeat(4,1fr); gap:18px;}
.step{padding:26px 22px; border:1px solid var(--border); border-radius:18px; background:var(--surface);
  transition:.3s;}
.step:hover{transform:translateY(-5px); border-color:var(--border2);}
.step-top{display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;}
.step-num{font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--violet); font-weight:700;}
.step-icon{width:40px; height:40px; display:grid; place-items:center; border-radius:11px;
  background:var(--surface2); color:var(--coral);}
.step-day{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em;
  text-transform:uppercase; color:var(--muted);}
.step h4{font-family:'Bricolage Grotesque'; font-weight:700; font-size:19px; margin:6px 0 8px;}
.step p{font-size:14px; color:var(--muted); margin:0;}

/* quotes */
.quotes{display:grid; grid-template-columns:repeat(3,1fr); gap:22px;}
.quote-card{padding:28px; border:1px solid var(--border); border-radius:18px; background:var(--surface); position:relative;}
.quote-mark{color:var(--violet); opacity:.5; margin-bottom:10px;}
.quote-card p{font-size:15px; margin:0 0 22px;}
.quote-by{display:flex; align-items:center; gap:12px;}
.avatar{width:40px; height:40px; border-radius:50%; display:grid; place-items:center;
  font-family:'Bricolage Grotesque'; font-weight:700; color:#fff; background:var(--grad); flex-shrink:0;}
.quote-by strong{display:block; font-size:14px;}
.quote-by span{font-size:12px; color:var(--muted);}
.stars{margin-left:auto; display:flex; gap:1px; color:var(--coral);}

/* about */
.about{display:grid; grid-template-columns:1.4fr 1fr; gap:46px; align-items:center;}
.about-text h2{font-family:'Bricolage Grotesque'; font-weight:700; font-size:clamp(26px,3.6vw,38px);
  letter-spacing:-.02em; margin:12px 0 18px; line-height:1.12;}
.about-text p{color:var(--muted); margin:0 0 14px;}
.muted-line{font-family:'JetBrains Mono',monospace; font-size:12.5px;}
.about-skills{display:flex; flex-wrap:wrap; gap:8px; margin-top:20px;}
.about-skills span{display:inline-flex; align-items:center; gap:6px; font-size:12.5px;
  padding:6px 12px; border:1px solid var(--border); border-radius:999px;}
.about-skills svg{color:var(--mint);}
.about-card{display:flex; flex-direction:column; gap:6px; padding:14px; border:1px solid var(--border);
  border-radius:20px; background:var(--surface);}
.about-card-row{display:flex; gap:14px; align-items:flex-start; padding:16px; border-radius:14px;}
.about-card-row:hover{background:var(--surface2);}
.about-card-row svg{color:var(--coral); margin-top:3px; flex-shrink:0;}
.about-card-row strong{display:block; font-size:15px;}
.about-card-row span{font-size:13px; color:var(--muted);}

/* faq */
.faq{display:flex; flex-direction:column; gap:12px;}
.faq-item{text-align:left; width:100%; border:1px solid var(--border); border-radius:14px;
  background:var(--surface); padding:18px 22px; transition:.25s;}
.faq-item:hover{border-color:var(--border2);}
.faq-q{display:flex; justify-content:space-between; align-items:center; gap:14px;
  font-family:'Bricolage Grotesque'; font-weight:600; font-size:17px;}
.faq-chev{transition:.3s; color:var(--muted); flex-shrink:0;}
.faq-item.open .faq-chev{transform:rotate(180deg); color:var(--coral);}
.faq-a{display:grid; grid-template-rows:0fr; opacity:0; transition:.32s ease; color:var(--muted); font-size:14.5px;}
.faq-a > *{overflow:hidden;}
.faq-item.open .faq-a{grid-template-rows:1fr; opacity:1; margin-top:14px;}
.faq-a{overflow:hidden;}

/* contact */
.contact{display:grid; grid-template-columns:1fr 1fr; gap:46px; align-items:start;
  border:1px solid var(--border); border-radius:26px; padding:46px; background:var(--surface);}
.contact-left h2{font-family:'Bricolage Grotesque'; font-weight:700; font-size:clamp(26px,3.6vw,36px);
  margin:12px 0 14px; line-height:1.1;}
.contact-left p{color:var(--muted); margin:0 0 24px;}
.email-copy{display:flex; align-items:center; gap:10px; padding:14px 18px; border:1px solid var(--border2);
  border-radius:12px; font-family:'JetBrains Mono',monospace; font-size:13.5px; width:100%; transition:.2s;}
.email-copy:hover{background:var(--surface2);}
.copy-state{margin-left:auto; display:flex; align-items:center; gap:5px; font-size:12px; color:var(--violet);}
.socials{display:flex; gap:10px; margin-top:22px;}
.socials a{width:42px; height:42px; display:grid; place-items:center; border-radius:11px;
  border:1px solid var(--border); color:var(--text); transition:.2s;}
.socials a:hover{background:var(--grad); color:#fff; border-color:transparent; transform:translateY(-3px);}
.contact-form{display:flex; flex-direction:column; gap:14px;}
.contact-form label{display:flex; flex-direction:column; gap:7px; font-size:13px; font-weight:600; color:var(--muted);}
.contact-form input,.contact-form textarea{font-family:inherit; font-size:15px; color:var(--text);
  background:var(--bg); border:1px solid var(--border); border-radius:11px; padding:13px 15px; resize:vertical; transition:.2s;}
.contact-form input:focus,.contact-form textarea:focus{outline:none; border-color:var(--violet);
  box-shadow:0 0 0 3px var(--glow);}

/* footer */
.footer{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;
  padding:40px 24px; border-top:1px solid var(--border); font-size:13.5px; color:var(--muted);}
.back-top-link{display:inline-flex; align-items:center; gap:6px; font-size:13.5px; color:var(--muted);}
.back-top-link:hover{color:var(--text);}

/* floating back to top */
.back-top{position:fixed; bottom:26px; right:26px; z-index:40; width:48px; height:48px;
  border-radius:14px; background:var(--grad); color:#fff; display:grid; place-items:center;
  box-shadow:0 14px 30px -10px var(--glow); opacity:0; transform:translateY(20px) scale(.8);
  pointer-events:none; transition:.3s;}
.back-top.show{opacity:1; transform:translateY(0) scale(1); pointer-events:auto;}
.back-top:hover{transform:translateY(-3px) scale(1.05);}

/* reveal */
.reveal{opacity:0; transform:translateY(26px); transition:opacity .7s cubic-bezier(.2,.8,.2,1),
  transform .7s cubic-bezier(.2,.8,.2,1);}
.reveal.in{opacity:1; transform:translateY(0);}

/* focus visibility */
.root :focus-visible{outline:2px solid var(--violet); outline-offset:3px; border-radius:6px;}

/* responsive */
@media(max-width:900px){
  .nav-links{display:none;} .menu-toggle{display:grid;} .nav-cta{display:none;}
  .stats{grid-template-columns:repeat(2,1fr);}
  .work-grid,.price-grid,.process,.quotes{grid-template-columns:1fr;}
  .about,.contact{grid-template-columns:1fr; gap:28px;}
  .contact{padding:30px;}
  .section{padding:64px 24px;}
}
@media(max-width:560px){
  .stats{grid-template-columns:1fr;}
  .hero{padding-top:56px;}
}

/* respect reduced motion */
@media(prefers-reduced-motion:reduce){
  .aurora,.marquee-track,.cd-clock i{animation:none !important;}
  .reveal{transition:none; opacity:1; transform:none;}
  *{transition-duration:.01ms !important;}
}
`;
