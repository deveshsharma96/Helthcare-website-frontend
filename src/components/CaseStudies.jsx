

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

const floatingStats = [
  {
    number: 22,
    suffix: "+",
    label: "Year Experience",
  },
  {
    number: 5,
    suffix: "",
    label: "Countries Delivered",
  },
  {
    number: 11,
    suffix: "+",
    label: "Healthcare Systems",
  },
  {
    number: 16,
    suffix: "+",
    label: "Go-Live Delivered",
  },
  {
    number: 65,
    suffix: "+",
    label: "Clinical Specialties",
  },
  {
    number: 75,
    suffix: "%",
    label: "Routing Errors Reduced",
  },
  {
    number: 750,
    suffix: "k",
    label: "Order Records Analysed",
  },
];

// NEW DATA: Static Featured Projects from Word File (Updated with Bullet Points & Bold Text)
const staticFeaturedProjects = [
  {
    title: "Infection Control Integration and Critical Alerts",
    category: "Data Analysis, Clinical Decision Support",
    summary: "Led design and integration of infection control alerts and critical patient status indicators within Epic workflows.",
    outcomes: [
      "Real time clinician awareness for hygiene, transfusion and infection control alerts,",
      "Improved clinical responsiveness and compliance with safety protocols."
    ]
  },
  {
    title: "Falls and Clinical Safety Alerts (OPAs)",
    category: "Clinical Decision Support",
    summary: "Designed and implemented targeted Best Practice Advisory (BPA) alerts for Falls prevention, Social Determinants of Health (SDOH) and clinical safety triggers.",
    outcomes: [
      "Improved compliance with NHS national standards.",
      "Enhanced patient safety and reduced missed critical interventions."
    ]
  },
  {
    title: "NEMS Integration / Data Migration for Air Pollution and LSOA",
    category: "Data and System Integration",
    summary: (
      <>
        Integrated NHS national datasets to support research and population health by post code including <strong>Air Pollution</strong> (NO2, PM2.5), <strong>Borough</strong> and <strong>LSOA Indexes</strong> for deprivation factors weighing on neighbourhoods in England.
      </>
    ),
    outcomes: [
      "Open visibility for clinicians in Storyboard.",
      "Enabled advanced research health insights by location.",
      "Supports strategic planning and targeted interventions for at-risk cohorts."
    ]
  },
  {
    title: "Genomics Integration and Specialist Workflows",
    category: "Data and System Integration",
    summary: "Designed bespoke discreet documentation workflows and data integrations for Clinical Genetics and Genomics services.",
    outcomes: [
      "Delivered specialised care pathways with structured data capture for Genomic Name and Indications.",
      "Advanced diagnostics, activity coding and research-based outcomes."
    ]
  },
  {
    title: "Reporting Workbench Insights",
    category: "Reporting Outcomes",
    summary: "Developed real-time Workbench Reports and Dashboards to facilitate with analysis tools to monitor confidential addresses, day cases, referrals, episodes and other exams impacting operational performance.",
    outcomes: [
      "Enabled senior leadership to use these tools to make data-driven decisions to identify workflows that need improving for patient outcomes at scale."
    ]
  }
];

export default function CaseStudies() {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredStudy, setFeaturedStudy] = useState(null);
  const navigate = useNavigate();

  // Filtering Logic
  const filteredProjects = projects.filter((p) => {
    const matchSvc =
      serviceFilter === "all" ||
      p.service_types?.includes(serviceFilter);

    const matchLoc =
      regionFilter === "all" ||
      p.region?.toLowerCase().includes(regionFilter);

    return matchSvc && matchLoc;
  });

  useEffect(() => {
    fetchCaseStudies();
    fetchFeatured();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      const res = await API.get("/case-studies");
      console.log("Case Studies:", res.data);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchFeatured = async () => {
    try {
      const res = await API.get("/featured-case-study");
      setFeaturedStudy(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Counter Animation Logic
  useEffect(() => {
    const runCounter = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const dur = 1800;
      const t0 = performance.now();
      
      const step = (now) => {
        const p = Math.min((now - t0) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !e.target._done) {
            e.target._done = true;
            runCounter(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".count-up").forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, []);

  return (
    <div className="cs-page">
      <style>{`
        /* ── Variables & Scoped Reset ─────────────────────────────────────────────── */
        .cs-page {
          --red:        #E64013;
          --red-dk:     #C43410;
          --forest:     #2A6049;
          --forest-dk:  #1E4535;
          --forest-xdk: #0F2318;
          --sage:       #3D8A68;
          --mint:       #F5FAF7;
          --tint:       #E8F4EF;
          --night:      #0F2318;
          --white:      #ffffff;
          --muted:      #5A6E62;
          --border:     #C8DDD0;
          --r:          10px;
          --r-lg:       16px;
          --sh-sm:      0 2px 10px rgba(15,35,24,.07);
          --sh-md:      0 6px 24px rgba(15,35,24,.12);
          
          font-family: 'Montserrat', sans-serif;
          color: var(--night);
          background: var(--white);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }

        .cs-page * {
          box-sizing: border-box;
        }

        .cs-page h1, 
        .cs-page h2, 
        .cs-page h3, 
        .cs-page h4 { 
          font-family: 'Comfortaa', sans-serif; 
          line-height: 1.3; 
          margin: 0;
        }
        
        .cs-page a { color: inherit; text-decoration: none; }
        .cs-page p { margin: 0; }

        /* ── Skeleton Loading ────────────────────────────────────────────────────── */
        .cs-skeleton-card {
          position: relative;
          overflow: hidden;
          min-height: 200px;
          border-radius: 24px;
          background: linear-gradient(145deg, #ffffff, #f4faf7);
          border: 1px solid #d9ebe1;
          padding: 32px;
          box-shadow: 0 15px 40px rgba(15,35,24,.08), inset 0 1px 0 rgba(255,255,255,.8);
          transform-style: preserve-3d;
        }

        .cs-skeleton-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.7), transparent);
          animation: skeletonMove 1.6s infinite;
        }

        .cs-skeleton-header { width: 120px; height: 28px; border-radius: 50px; background: #dcebe3; margin-bottom: 28px; }
        .cs-skeleton-title { height: 24px; border-radius: 10px; background: #dcebe3; margin-bottom: 12px; }
        .cs-skeleton-title.short { width: 70%; }
        .cs-skeleton-text { height: 14px; border-radius: 8px; background: #e7f1ec; margin-bottom: 10px; }
        .cs-skeleton-text.small { width: 60%; }
        .cs-skeleton-tags { display: flex; gap: 10px; margin-top: 40px; }
        .cs-skeleton-tags span { width: 90px; height: 32px; border-radius: 50px; background: #dcebe3; }

        @keyframes skeletonMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* ── Hero Stats ──────────────────────────────────────────────────────────── */
        .hero-floating-stats-wrap {
          position: relative;
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 10px 35px rgba(15, 35, 24, 0.05);
          isolation: isolate;
        }

        .hero-floating-stat-number {
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 400;
          line-height: 1;
          color: #10261c;
          margin-bottom: 10px;
          letter-spacing: -0.05em;
          text-shadow: none;
        }

        @media (max-width: 1060px) {
          .hero-floating-stats-wrap {
            grid-template-columns: repeat(3, 1fr);
            margin: 0 24px;
          }
          .hero-floating-stat-card { border-bottom: 1px solid rgba(42, 96, 73, 0.1); }
          .hero-floating-stat-card:nth-child(3n) { border-right: none; }
        }

        @media (max-width: 680px) {
          .hero-floating-stats-wrap {
            grid-template-columns: 1fr; 
            border-radius: 16px;
          }
          .hero-floating-stat-card {
            border-right: none !important;
            padding: 24px 20px;
          }
          .hero-floating-stat-card:last-child { border-bottom: none; }
        }

        /* ── STATIC HOVER CARDS (Featured Work) ─────────────────────────────── */
        .cs-hover-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 40px;
        }

        .cs-hover-card {
          position: relative;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 32px;
          overflow: hidden;
          box-shadow: var(--sh-sm);
          transition: all 0.4s ease;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          cursor: default;
        }

        .cs-hover-card:hover {
          box-shadow: var(--sh-md);
          border-color: var(--sage);
        }

        .cs-hc-front {
          position: relative;
          z-index: 1;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .cs-hc-category {
          color: var(--red);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          display: block;
          text-align: left;
        }

        .cs-hc-title {
          font-size: 1.25rem;
          color: var(--forest-xdk);
          margin-bottom: 16px;
          font-family: 'Comfortaa', sans-serif;
          text-align: left;
        }

        .cs-hc-summary {
          font-size: 0.95rem;
          color: var(--muted);
          text-align: left;
          line-height: 1.6;
        }

        .cs-hc-hover {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(232, 244, 239, 0.96); 
          backdrop-filter: blur(8px);
          color: var(--forest-xdk);
          padding: 32px;
          transform: translateY(101%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          z-index: 2;
        }

        .cs-hover-card:hover .cs-hc-hover {
          transform: translateY(0);
        }

        .cs-hc-hover-title {
          color: var(--red);
          font-size: 0.85rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 12px;
          letter-spacing: 0.1em;
          text-align: left;
        }

        /* New styles for bulleted outcomes */
        .cs-hc-outcome-list {
          list-style-type: disc;
          padding-left: 20px;
          margin: 0;
          color: var(--forest-xdk);
        }

        .cs-hc-outcome-item {
          font-size: 0.95rem;
          line-height: 1.6;
          font-weight: 500;
          margin-bottom: 8px;
          text-align: left;
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="cs-hero">
        <div className="cs-hero-inner">
          <p className="hero-eyebrow">Portfolio of Work</p>
          <h1 className="cs-fadein-2">
            Real-world results.<br />
            Proven Epic expertise.
          </h1>
          <p className="cs-hero-sub cs-fadein-2">
            Over 12 years delivering Epic implementations, optimisations and
            recoveries across the NHS, US health systems and Europe — in some of
            the most complex clinical environments anywhere in the world.
          </p>
          <br/>
          <div className="cs-hero-actions cs-fadein-3">
<button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Book a Consultation"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
  Book a Consultation
</button>
          </div>
        </div>
        
        <div className="hero-floating-stats-wrap">
          {floatingStats.map((item, index) => (
            <div
              key={index}
              className="hero-floating-stat-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="hero-floating-stat-number">
                <span
                  className="count-up"
                  data-count={item.number}
                >
                  0
                </span>
                <span className="hero-floating-accent">
                  {item.suffix}
                </span>
              </div>
              <div className="hero-floating-stat-label">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATIC HOVER CARDS (Featured Projects) ────────── */}
      <section className="cs-s" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="cs-si">
          {/* Centered Header */}
          <div className="cs-s-hd flex flex-col items-center justify-center">
            <div className="text-center w-full max-w-3xl mx-auto">
              <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block text-center">
                Featured Highlights
              </span>
              <h2 className="cs-s-title" style={{ textAlign: 'center' }}>Critical Impact Deliverables</h2>
              <p className="cs-s-sub mx-auto" style={{ textAlign: 'center' }}>
                Hover over the cards below to see the specific outcomes and enhancements delivered across clinical systems.
              </p>
            </div>
          </div>
          
          <div className="cs-hover-grid">
            {staticFeaturedProjects.map((proj, idx) => (
              <div className="cs-hover-card" key={idx}>
                {/* Front of Card */}
                <div className="cs-hc-front">
                  <span className="cs-hc-category">{proj.category}</span>
                  <h3 className="cs-hc-title">{proj.title}</h3>
                  <p className="cs-hc-summary">{proj.summary}</p>
                </div>
                {/* Push-up Hover Effect */}
                <div className="cs-hc-hover">
                  <span className="cs-hc-hover-title">Outcome</span>
                  <ul className="cs-hc-outcome-list">
                    {proj.outcomes.map((bullet, i) => (
                      <li key={i} className="cs-hc-outcome-item">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DYNAMIC FEATURED PROJECT ─────────────────────────────────────── */}
      {featuredStudy && (
        <section className="cs-s">
          <div className="cs-si">
            {/* Centered Header */}
            <div className="cs-s-hd flex flex-col items-center justify-center">
              <div className="text-center w-full max-w-3xl mx-auto">
                <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block text-center">
                  Featured Case Study
                </span>
                <h2 className="cs-s-title" style={{ textAlign: 'center' }}>
                  {featuredStudy.landmark_title || "Featured Case Study"}
                </h2>
                <p className="cs-s-sub mx-auto" style={{ textAlign: 'center' }}>
                  {featuredStudy.landmark_description || featuredStudy.subtitle}
                </p>
              </div>
            </div>

            <div className="cs-featured-card">
              {/* LEFT SIDE */}
              <div className="cs-fc-body">
                <div className="cs-landmark">
                  ★ &nbsp; Landmark Achievement
                </div>
                <h2>{featuredStudy.title}</h2>
                <p>{featuredStudy.subtitle}</p>
                <div className="cs-chip-row">
                  {featuredStudy.project_summary?.service_types?.map((service, index) => (
                    <span key={index} className="cs-chip cs-chip-svc">
                      {service}
                    </span>
                  ))}
                  <span className="cs-chip cs-chip-loc">
                    🇬🇧 {featuredStudy.project_summary?.region}
                  </span>
                </div>
                <Link
                  to={`/case-study/${featuredStudy.slug}`}
                  className="cs-btn cs-btn-forest"
                  style={{ width: "fit-content", color: "white" }}
                >
                  Read Full Case Study →
                </Link>
              </div>

              {/* RIGHT SIDE */}
              <div className="cs-fc-stats">
                {featuredStudy.stats?.slice(0, 3).map((stat, index) => {
                  const icons = ["🔔", "⚡", "🏆"];
                  return (
                    <div key={index} className="cs-fc-s">
                      <div className="cs-fc-s-icon">{icons[index] || "📌"}</div>
                      <div>
                        <span className="cs-fc-s-num">{stat.number}</span>
                        <span className="cs-fc-s-desc">{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CARDS GRID ───────────────────────────────────────────── */}
      <section className="cs-s cs-cards-section" id="projects">
        <div className="cs-si">
          {/* Centered Header */}
          <div className="cs-s-hd flex flex-col items-center justify-center">
            <div className="text-center w-full max-w-3xl mx-auto">
              <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block text-center">
                All Projects
              </span>
              <h2 className="cs-s-title" style={{ textAlign: 'center' }}>More of our work</h2>
              <p className="cs-s-sub mx-auto" style={{ textAlign: 'center' }}>
                From pan-London cancer pathways to New York enterprise deployments — complex challenges, measurable outcomes.
              </p>
            </div>
          </div>

          <div className="cs-grid" id="grid">
            {loading ? (
              <>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="cs-skeleton-card">
                    <div className="cs-skeleton-shine"></div>
                    <div className="cs-skeleton-header"></div>
                    <div className="cs-skeleton-title"></div>
                    <div className="cs-skeleton-title short"></div>
                    <div className="cs-skeleton-text"></div>
                    <div className="cs-skeleton-text"></div>
                    <div className="cs-skeleton-text small"></div>
                    <div className="cs-skeleton-tags">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                ))}
              </>
            ) : filteredProjects.length === 0 ? (
              <div className="cs-empty-state">
                <div className="cs-empty-icon-wrap">
                  <div className="cs-empty-pulse"></div>
                  <svg className="cs-empty-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="cs-empty-title">Case Studies Coming Soon</h3>
                <p className="cs-empty-text">
                  We are currently preparing detailed project case studies that showcase
                  our experience across the UK and internationally.
                </p>
                <br/>
                <a href="/contact" className="cs-empty-btn">
                  Get in touch meanwhile
                </a>
              </div>
            ) : (
              filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/case-study/${project.slug}`}
                  className="cs-card-link"
                >
                  <div className="cs-card">
                    <div className="cs-card-stripe"></div>
                    <div className="cs-card-body-inner">
                      <div className="cs-card-meta">
                        <span className="cs-mc cs-mc-db">
                          {project.service_types?.[0] || "Case Study"}
                        </span>
                        <span className="cs-mc cs-mc-loc">
                          {project.project_summary?.region || "Global"}
                        </span>
                      </div>
                      <h3 className="cs-card-title">{project.title}</h3>
                      <p className="cs-card-org">
                        {project.project_summary?.organisation}
                      </p>
                      <p className="cs-card-text">
                        {project.subtitle?.slice(0, 180)}...
                      </p>
                    </div>
                    <div className="cs-card-foot">
                      <div className="cs-card-tags">
                        {project.service_types?.map((tag, i) => (
                          <span key={i} className="cs-ctag">{tag}</span>
                        ))}
                      </div>
                      <span className="cs-clink">Read More →</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="cs-cta-s">
        <span className="block w-full text-center text-[#E64013] text-[16px] font-bold tracking-[0.35em] uppercase mb-8">
          Start a Conversation
        </span>
        <h2>Working on something complex?</h2>
        <p>
          Whether you're planning an implementation, recovering a struggling
          programme or optimising an existing system — let's talk about how I
          can help.
        </p>
        <br/>
        <div className="cs-cta-btns">
          
           <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Share Your Challenge"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
  Share Your Challenge
</button>
        </div>
      </section>
    </div>
  );
}