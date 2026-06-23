const CONFIG = {
  brand: "KRUDDPIPPIN",
  fullName: "Opara, Precious Chibuzor",
  role: "We build landing pages that load fast and convert — shipped in 72 hours.",
  location: "Abuja, Nigeria · Working with clients worldwide",
  email: "precious.op2013@gmail.com",
  calendly: "#",
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
        "Payment feature integration if needed",
        "3 rounds of revisions",
      ],
    },
    {
      name: "Mobile App",
      price: "$650",
      tag: "New",
      featured: false,
      blurb: "A custom app that connects your business to customers and tracks everything.",
      features: [
        "Cross-platform: iOS & Android",
        "Customer-facing: browse, order, book",
        "Business dashboard & analytics",
        "Inventory & sales tracking",
        "Push notifications",
        "3 rounds of revisions",
      ],
    },
    {
      name: "Care Plan",
      price: "$50",
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
      title: "DIDI COUTURE",
      type: "Pixel-perfect rebuild",
      stack: ["React", "Vite", "Routing"],
      grad: "linear-gradient(135deg,#1b3a2e,#3f7d5b 55%,#a8e6b0)",
      screenshot: "/didi-couture.jpg.png",
      live: "https://didi-couture.vercel.app/",
    },
    {
      title: "Mayen's Touch",
      type: "Fashion House landing page",
      stack: ["Landing", "Conversion"],
      grad: "linear-gradient(135deg,#3a1d5e,#8b5cf6 60%,#ffb4a2)",
      screenshot: "/mayen-s-touch.jpg.png",
      live: "https://mayen-s-touch.vercel.app/",
    },
    {
      title: "Sable Skincare",
      type: "DTC product page",
      stack: ["E-commerce", "Animation"],
      grad: "linear-gradient(135deg,#5e1d2e,#ff6b57 55%,#ffd6a5)",
      screenshot: "/skin-care,jpg.png",
      live: "#",
    },
    {
      title: "Northwind Studio",
      type: "Full website for a creative studio",
      stack: ["Brand", "Motion"],
      grad: "linear-gradient(135deg,#0f2a3a,#2dd4bf 60%,#a5f3fc)",
      screenshot: "/photo-studio.jpg.png",
      live: "#",
    },
    {
      title: "Hotel Management System",
      type: "Full-stack hotel management platform",
      stack: ["Full-Stack", "Dashboard"],
      grad: "linear-gradient(135deg,#1a1a2e,#16213e 55%,#0f3460)",
      screenshot: "/stayflow.png",
      live: "https://stayflow-hms.vercel.app",
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

export default CONFIG;
