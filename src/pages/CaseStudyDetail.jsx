


import React, { useEffect, useState } from 'react';
import API from "../services/api";
import { useParams, Link,  useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [relatedStudies, setRelatedStudies] = useState([]);

  const { slug } = useParams();

  // Load current case study
  useEffect(() => {
    API
  .get(`/case-studies/${slug}`)
  .then((res) => {
    setCaseStudy(res.data);
  })
  .catch(console.error);
  }, [slug]);

  // Load related studies
  const fetchRelatedStudies = async () => {
    try {
      const res = await API.get(
          "/case-studies"
        );
      const filtered = res.data.filter(
        (item) => item.slug !== slug
      );
      console.log("Related Studies:", filtered);
      setRelatedStudies(filtered);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRelatedStudies();
  }, [slug]);

  // Loading state
if (!caseStudy) {
  return (
    <div className="loading-screen">
      <div className="loader-logo">SILKE IT</div>

      <div className="loading-bar">
        <span></span>
      </div>

      <p>Loading Case Study...</p>
    </div>
  );
}
  return (
    <div className="app-container">
      <style>{`

        /* ── Variables ─────────────────────────────────────────────── */
        :root {
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
        }

        /* ── Reset & Base ──────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* Changed overflow-x: hidden to clip to allow sticky positioning to work */
        html, body { overflow-x: clip; width: 100%; } 
        html { scroll-behavior: smooth; }
        .app-container {
          font-family: 'Montserrat', sans-serif;
          color: var(--night);
          background: var(--white);
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          overflow-x: clip; /* Changed from hidden to clip */
          width: 100%;
          max-width: 100vw;
        }
        h1, h2, h3, h4 { font-family: 'Comfortaa', sans-serif; line-height: 1.3; }
        a { color: inherit; text-decoration: none; }
        p { margin-bottom: 1em; }
        p:last-child { margin-bottom: 0; }

        /* ── Buttons ───────────────────────────────────────────────── */
        .btn {
          display: inline-flex; align-items: center; gap: 8px; justify-content: center;
          font-family: 'Montserrat', sans-serif; font-size: .875rem;
          font-weight: 600; padding: 13px 26px; border-radius: var(--r);
          cursor: pointer; border: none; transition: all .18s;
          text-align: center;
        }
        .btn-red  { background: var(--red);    color: var(--white); }
        .btn-red:hover { background: var(--red-dk); transform: translateY(-1px); }
        .btn-forest { background: var(--forest); color: var(--white); }
        .btn-forest:hover { background: var(--forest-dk); transform: translateY(-1px); }
        .btn-outline {
          background: transparent; color: var(--forest);
          border: 1.5px solid var(--forest);
        }
        .btn-outline:hover { background: var(--tint); }

        .breadcrumb{
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:24px;
          font-size:14px;
          font-weight:700;
          letter-spacing:.5px;
          text-transform:uppercase;
        }

        .breadcrumb a{
          color:#2A6049; 
          text-decoration:none;
          transition:.25s;
        }

        .breadcrumb a:hover{ color:#E64013; }

        .breadcrumb-arrow{
          color:#5A6E62; 
          font-size:18px;
        }

        .breadcrumb-current{
          color:#2A6049; 
          opacity:.75;
        }

        @media (max-width: 768px){
          .breadcrumb{ font-size: 11px; gap: 6px; flex-wrap: wrap; align-items: flex-start; }
          .breadcrumb-current{ flex: 1; min-width: 0; white-space: normal; word-break: break-word; line-height: 1.4; }
        }

        

/* =========================================================
   CASE STUDY Detail CSS
========================================================= */




       /* ── Case study hero ────────────────────────────────────────── */
        .cs-hero {
          background: var(--tint);
          background-image:
            radial-gradient(
              ellipse 70% 90% at 100% 0%,
              rgba(109, 201, 160, 0.35) 0%,
              rgba(109, 201, 160, 0.18) 6%,
              transparent 85%
            ),
            radial-gradient(
              ellipse 40% 50% at 0% 100%,
              rgba(230,64,19,.06) 0%,
              transparent 55%
            );
          padding: 60px 48px 0px;
        }
        .cs-hero-inner { max-width: 1180px; margin: 0 auto; }

        .cs-hero h1 {
          font-size: clamp(1.7rem, 3.5vw, 2.4rem);
          color: var(--night); max-width: 780px;
          margin-bottom: 18px; font-weight: 700;
          word-wrap: break-word;
        }
        .cs-hero-sub {
          font-size: .95rem; font-weight: 300;
          color: var(--forest); max-width: 600px; line-height: 1.8;
        }

        /* ── Case study hero layout ─────────────────────────────────── */
        .hero-content-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px; 
        }

        .hero-text { flex: 1; }

        .landmark-banner{
          background: rgba(230,64,19,.12);
          border: 1px solid rgba(230,64,19,.35);
          border-radius: var(--r);
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          width: 420px;
          flex-shrink: 0;
        } 

        .lm-star {
          font-size: 1.4rem; flex-shrink: 0;
          width: 44px; height: 44px;
          background: rgba(230,64,19,.15); border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .lm-label {
          font-size: .68rem; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: #FF9070; margin-bottom: 4px;
        }
        .lm-text {
          font-size: .875rem; color: var(--night);
          font-weight: 400; line-height: 1.5;
        }

        /* ── Main layout (content + sidebar) ──────────────────────── */
        .cs-layout {
          max-width: 1180px; margin: 0 auto;
          padding: 60px 48px;
          display: grid; 
          grid-template-columns: minmax(0, 1fr) 360px; 
          gap: 56px;
          align-items: start;
        }
        
        .cs-layout > main, .cs-layout > aside {
          min-width: 0; 
          max-width: 100%;
        }

        /* ── Sidebar & New Interactive Container ──────────────────── */
        .sidebar { position: sticky; top: 60px; z-index: 10; }
        
        .sidebar-interactive-container {
          display: grid;
          position: relative;
          margin-top: 30px;
        }

        /* Forces both elements into the same cell, overlapping them */
        .sidebar-interactive-container > * {
          grid-area: 1 / 1;
        }

        /* JUMP NAV Base */
        .jump-nav { 
          border: 1px solid var(--border); 
          padding: 24px; 
          border-radius: var(--r-lg); 
          max-width: 280px;
          background: var(--white);
          transition: opacity 0.3s ease;
          /* Ensure jump nav defines the grid cell height */
          height: fit-content; 
        }

        .jump-label {
          font-size: .68rem; font-weight: 700; letter-spacing: 1.4px;
          text-transform: uppercase; color: var(--muted); margin-bottom: 10px;
        }

        .jump-links { display: flex; flex-direction: column; gap: 0; }
        .jump-links a {
          font-size: .82rem; font-weight: 500; color: var(--muted);
          padding: 9px 0; border-bottom: 1px solid var(--border);
          display: flex; align-items: center; gap: 8px;
          transition: color .18s;
        }
        .jump-links a:last-child { border-bottom: none; }
        .jump-links a:hover { color: var(--forest); }

        .jump-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--border); flex-shrink: 0; transition: background .18s;
        }
        .jump-links a:hover .jump-dot { background: var(--forest); }

        /* SIDEBAR CARD Base (Collapsed State) */
        .sidebar-card {
       
          background: var(--forest);
          background-image: radial-gradient(ellipse 80% 60% at 100% 0%, rgba(61,138,104,.5) 0%, transparent 65%);
          border-radius: var(--r-lg);
          overflow: hidden;
          box-shadow: var(--sh-md);
          
          /* Interactive Layout Properties */
          justify-self: end;
          width: 48px; /* Red box width */
          max-height: 280px; /* Starting height matches jump-nav */
          display: flex;
          flex-direction: row;
          cursor: pointer;
          /* Animate width and max-height for smooth expansion */
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }

        /* Vertical Strip Styling */
        .card-strip {
        
          width: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent; 
          border-right: none; 
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); /* Animate collapse */
          overflow: hidden;
        }

        .strip-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          color: var(--white);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }

        /* Inner Content Wrapper */
        .card-content-wrapper {
          width: 360px; /* Full width so it fills perfectly when strip collapses */
          flex-shrink: 0;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.4s ease;
          pointer-events: none;
        }

        /* ── INTERACTIVE HOVER STATES (UPDATED) ── */
        /* Only hover the small right-side card to trigger */
        .sidebar-card:hover {
          width: 100%; /* Expands to full 360px */
          max-height: 1000px; /* Smooth height transition trick */
          cursor: default;
        }

        /* Use CSS sibling selector (~) to hide the jump nav ONLY when sidebar card is hovered */
        .sidebar-card:hover ~ .jump-nav {
          opacity: 0;
          pointer-events: none;
        }

        .sidebar-card:hover .card-strip {
          width: 0; /* Collapses the strip to shift content left */
        }

        .sidebar-card:hover .strip-text {
          opacity: 0; /* Fade out vertical text */
        }

        .sidebar-card:hover .card-content-wrapper {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        /* Original Sidebar Card Inner Content Styles */
        .sb-head {
          padding: 22px 26px 18px;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .sb-eyebrow {
          font-size: .68rem; font-weight: 700; letter-spacing: 1.6px;
          text-transform: uppercase; color: rgba(255,255,255,.5); margin-bottom: 4px;
        }
        .sb-title {
          font-family: 'Comfortaa', sans-serif;
          font-size: 1.05rem; font-weight: 700; color: var(--white);
        }
        .sb-rows { padding: 6px 0 8px; }
        .sb-row {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 26px; border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .sb-row:last-child { border-bottom: none; }
        .sb-ico { font-size: 1rem; flex-shrink: 0; margin-top: 1px; opacity: .7; }
        .sb-k {
          font-size: .68rem; font-weight: 700; letter-spacing: .6px;
          text-transform: uppercase; color: rgba(255,255,255,.45); margin-bottom: 3px;
        }
        .sb-v {
          font-size: .82rem; color: rgba(255,255,255,.88); font-weight: 400; line-height: 1.5;
          word-wrap: break-word; overflow-wrap: break-word; 
        }
        .sb-badge {
          display: inline-block; margin-top: 3px; margin-bottom: 3px;
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2);
          color: rgba(255,255,255,.8); font-size: .66rem; font-weight: 600;
          padding: 2px 9px; border-radius: 100px; letter-spacing: .3px;
        }
        .sb-cta {
          padding: 18px 26px; border-top: 1px solid rgba(255,255,255,.12);
        }
        .sb-cta .btn {
          width: 100%; justify-content: center; font-size: .82rem; padding: 11px 16px;
          background: var(--red); color: var(--white);
        }
        .sb-cta .btn:hover { background: var(--red-dk); }
        .sb-cta .btn-sec {
          margin-top: 8px; width: 100%; justify-content: center;
          font-size: .82rem; padding: 10px 16px; background: transparent; color: rgba(255,255,255,.75);
          border: 1px solid rgba(255,255,255,.25); border-radius: var(--r);
          display: flex; align-items: center; gap: 6px; font-weight: 500; transition: background .18s;
        }
        .sb-cta .btn-sec:hover { background: rgba(255,255,255,.1); }

        /* ── Content sections ──────────────────────────────────────── */
        .cs-section { margin-bottom: 52px; width: 100%; }
        .cs-section:last-child { margin-bottom: 0; }
        .section-label {
          display: inline-flex; align-items: center; gap: 8px; font-size: .68rem; font-weight: 700; 
          letter-spacing: 1.8px; text-transform: uppercase; color: var(--sage); margin-bottom: 12px;
        }
        .section-label::before { content: ''; display: block; width: 20px; height: 2px; background: var(--sage); border-radius: 2px; }
        .cs-section h2 { font-size: 1.4rem; color: var(--night); margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--border); }
        .cs-section p { font-size: .9rem; color: var(--muted); line-height: 1.8; }

        /* Context box */
        .context-box { background: var(--mint); border: 1px solid var(--border); border-radius: var(--r-lg); padding: 26px 28px; margin-bottom: 20px; }
        .context-box p { font-size: .875rem; color: var(--night); line-height: 1.8; margin-bottom: 14px; }
        .context-box p:last-child { margin-bottom: 0; }

        /* NEMS event table */
        .table-responsive { width: 100%; max-width: 100%; overflow-x: auto; display: block; margin-top: 16px; }
        .nems-table { width: 100%; border-collapse: collapse; font-size: .82rem; }
        .nems-table th { background: var(--tint); color: var(--forest); font-size: .68rem; font-weight: 700; letter-spacing: .8px; text-transform: uppercase; padding: 10px 14px; text-align: left; border-bottom: 2px solid var(--border); }
        .nems-table td { padding: 9px 14px; color: var(--muted); border-bottom: 1px solid var(--border); width: 50%; }
        .nems-table tr:last-child td { border-bottom: none; }
        .nems-table tr:hover td { background: var(--mint); }

        /* Problem box */
        .problem-box { background: #FEF3EF; border: 1px solid #FAD4C3; border-left: 4px solid var(--red); border-radius: var(--r); padding: 22px 24px; word-wrap: break-word; overflow-wrap: break-word; }
        .problem-box p { font-size: .875rem; color: #5C2D1A; line-height: 1.8; }

        /* Intervention list */
        .int-list { list-style: none; margin-top: 4px; }
        .int-list li { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border); font-size: .875rem; color: var(--muted); line-height: 1.7; word-wrap: break-word; }
        .int-list li:last-child { border-bottom: none; }
        .int-bullet { width: 22px; height: 22px; border-radius: 6px; background: var(--tint); border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; font-size: .7rem; font-weight: 700; color: var(--forest); }

        /* Outcome grid */
        .outcome-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .out-card { background: var(--tint); border: 1px solid var(--border); border-radius: var(--r); padding: 18px 20px; }
        .out-icon { font-size: 1.15rem; margin-bottom: 8px; display: block; }
        .out-text { font-size: .845rem; color: var(--night); line-height: 1.65; font-weight: 500; }

        /* Stat callout */
        .stat-callout { background: var(--forest); border-radius: var(--r-lg); padding: 28px 32px; display: flex; gap: 32px; flex-wrap: wrap; margin-top: 24px; }
        .sc-item { text-align: center; flex: 1; min-width: 100px; }
        .sc-n { font-family: 'Comfortaa', sans-serif; font-size: 1.9rem; font-weight: 700; color: var(--white); display: block; line-height: 1; margin-bottom: 6px; }
        .sc-l { font-size: .75rem; color: rgba(255,255,255,.6); font-weight: 500; letter-spacing: .4px; }
        .sc-divider { width: 1px; background: rgba(255,255,255,.15); align-self: stretch; }

        /* Landmark highlight */
        .landmark-section { background: var(--forest-xdk); border-radius: var(--r-lg); padding: 32px 36px; margin-top: 28px; display: flex; gap: 22px; align-items: flex-start; }
        .lm-icon-lg { font-size: 1.8rem; flex-shrink: 0; width: 52px; height: 52px; background: rgba(230,64,19,.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .landmark-section h3 { font-size: 1.1rem; color: var(--white); margin-bottom: 8px; }
        .landmark-section p { font-size: .875rem; color: rgba(255,255,255,.68); line-height: 1.75; margin-bottom: 0; }

        /* ── Related projects ──────────────────────────────────────── */
        .related { background: var(--mint); padding: 60px 48px; border-top: 1px solid var(--border); }
        .related-inner { max-width: 1180px; margin: 0 auto; }
        .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; margin-top: 36px; }
        .rel-card { background: var(--white); border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--sh-sm); transition: box-shadow .22s, transform .2s; display: flex; flex-direction: column; }
        .rel-card:hover { box-shadow: var(--sh-md); transform: translateY(-3px); }
        .rel-stripe { height: 4px; background: var(--sage); }
        .rel-stripe.forest { background: var(--forest); }
        .rel-body { padding: 22px 22px 14px; flex: 1; }
        .rel-meta { display: flex; gap: 7px; flex-wrap: wrap; margin-bottom: 10px; }
        .rmc { font-size: .67rem; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
        .rmc-opt { background: #DFF2EA; color: var(--sage); }
        .rmc-db  { background: var(--tint); color: var(--forest); }
        .rmc-loc { background: var(--night); color: rgba(255,255,255,.8); font-size: .65rem; }
        .rel-title { font-size: .92rem; font-weight: 700; color: var(--night); margin-bottom: 6px; line-height: 1.4; }
        .rel-org { font-size: .74rem; color: var(--sage); font-weight: 600; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 10px; }
        .rel-excerpt { font-size: .82rem; color: var(--muted); line-height: 1.65; }
        .rel-foot { padding: 12px 22px; border-top: 1px solid var(--tint); display: flex; justify-content: flex-end; }
        .rel-link { font-size: .78rem; font-weight: 700; color: var(--forest); display: flex; align-items: center; gap: 4px; transition: color .18s, gap .15s; }
        .rel-link:hover { color: var(--red); gap: 8px; }

        /* ── Bottom CTA ────────────────────────────────────────────── */
        .bottom-cta { background: var(--tint); padding: 72px 48px; text-align: center; border-top: 1px solid var(--border); }
        .bottom-cta-inner { max-width: 560px; margin: 0 auto; }
        .bc-eye { font-size: .72rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--sage); margin-bottom: 12px; }
        .bottom-cta h2 { font-size: clamp(1.4rem,3vw,1.9rem); color: var(--night); margin-bottom: 14px; }
        .bottom-cta p { font-size: .92rem; color: var(--muted); margin-bottom: 28px; line-height: 1.75; }
        .cta-btns { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }

        /* ── RESPONSIVE MEDIA QUERIES ─────────────────────────────── */
        @media (max-width: 1024px) {
          .cs-layout { grid-template-columns: minmax(0, 1fr); gap: 48px; padding: 48px 32px; }
          .cs-layout > main { order: 2; }
          .cs-layout > aside { order: 1; }
          .sidebar { position: static; }
          .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          
          /* Override Interactive Sidebar for Tablets/Mobile (Since hover doesn't exist) */
          .sidebar-interactive-container { display: flex; flex-direction: column; gap: 24px; }
          .sidebar-interactive-container .sidebar-card { width: 100%; max-height: 2000px; flex-direction: column; }
          .card-strip { display: none; }
          .card-content-wrapper { width: 100%; opacity: 1; pointer-events: auto; transform: none; }
          .sidebar-interactive-container .jump-nav { opacity: 1 !important; pointer-events: auto !important; margin-bottom: 0; max-width: 100%; }
        }

        @media (max-width: 768px) {
          .cs-hero { padding: 40px 24px; }
          .cs-layout { padding: 40px 24px; }
          .related { padding: 48px 24px; }
          .bottom-cta { padding: 56px 24px; }
          .cs-hero h1 { font-size: 1.7rem; margin-bottom: 12px; }
          .cs-hero-sub { font-size: .9rem; line-height: 1.6; }
          .cs-section h2 { font-size: 1.25rem; }
          .landmark-banner { flex-direction: column; align-items: flex-start; gap: 12px; padding: 16px; width: 100%; flex-direction: row; align-items: center; }
          .context-box { padding: 20px; }
          .problem-box { padding: 16px 20px; }
          .nems-table, .nems-table tbody, .nems-table tr, .nems-table td { display: block; width: 100%; }
          .nems-table tr { display: flex; flex-direction: column; }
          .nems-table td { border-bottom: 1px solid var(--border) !important; }
          .nems-table td:empty { display: none; }
          .nems-table tr:last-child td:last-child { border-bottom: none !important; }
          .outcome-grid { grid-template-columns: minmax(0, 1fr); }
          .stat-callout { flex-direction: column; gap: 16px; padding: 24px; }
          .sc-divider { width: 100%; height: 1px; margin: 0; }
          .sc-item { text-align: left; }
          .landmark-section { flex-direction: column; padding: 24px; gap: 16px; }
          .related-grid { grid-template-columns: minmax(0, 1fr); }
          .cta-btns { flex-direction: column; width: 100%; }
          .cta-btns .btn { width: 100%; }
          .hero-content-wrapper { flex-direction: column; gap: 24px; }
        }
      
  
      `}</style>


      {/* ── CASE STUDY HERO ─────────────────────────────────────── */}
      <header className="cs-hero">
        <div className="cs-hero-inner">
          <br/><br/>

          <div className="breadcrumb">
            <Link to="/case-studies">CASE STUDIES</Link>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-current">{caseStudy.slug}</span>
          </div>

          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1 className="fi-2">{caseStudy.title}</h1>
              <p className="cs-hero-sub fi-2">{caseStudy.subtitle}</p>
            </div>
            <div className="landmark-banner fi-3">
              <div className="lm-star">★</div>
              <div>
                <div className="lm-label">Landmark Achievement</div>
                <div className="lm-text">{caseStudy.landmark_banner}</div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
      </header>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────────── */}
      <div className="cs-layout">

        <main>
          {/* Context */}
          <section className="cs-section" id="context">
            <span className="section-label">Context</span>
            <h2>Background &amp; Setting</h2>
            <div className="context-box">
              {caseStudy.backgrounds?.map((item,index)=>(
                <p key={index}>
                {item}
                </p>
                ))}
            </div>
            <table className="nems-table">
              <thead>
                <tr>
                  <th>Key Workflow Drivers</th>
                </tr>
              </thead>
              <tbody>
                {caseStudy.event_types?.map((event, index) => (
                  <tr key={index}>
                    <td>🟢 {event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Problem */}
          <section className="cs-section" id="problem">
            <span className="section-label">Problem</span>
            <h2>The Challenge</h2>
            <div className="problem-box">
              {caseStudy.challenges?.map((item,index)=>(
                <p key={index}>
                {item}
                </p>
                ))}
            </div>
          </section>

          {/* Intervention */}
          <section className="cs-section" id="intervention">
            <span className="section-label">Intervention</span>
            <h2>What Was Done</h2>
            <p style={{ fontSize: '.875rem', color: 'var(--muted)', marginBottom: '18px' }}>
              {caseStudy.intervention_intro}
            </p>
            <ul className="int-list">
              {caseStudy.steps?.map((step, index) => (
                <li key={index}>
                  <span className="int-bullet">{(index + 1).toString().padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section className="cs-section" id="outcome">
            <span className="section-label">Outcome</span>
            <h2>Results &amp; Impact</h2>
            <div className="outcome-grid">
              {caseStudy.results?.map((result, index) => (
                <div className="out-card" key={index}>
                  <span className="out-icon">{result.icon}</span>
                  <p className="out-text">{result.text}</p>
                </div>
              ))}
            </div>
            <div className="stat-callout">
              {caseStudy.stats?.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="sc-item">
                    <span className="sc-n">{stat.number}</span>
                    <span className="sc-l">{stat.label}</span>
                  </div>
                  {index < caseStudy.stats.length - 1 && <div className="sc-divider"></div>}
                </React.Fragment>
              ))}
            </div>
            <div className="landmark-section">
              <div className="lm-icon-lg">🏆</div>
              <div>
                <h3>{caseStudy.landmark_title}</h3>
                <p>{caseStudy.landmark_description}</p>
              </div>
            </div>
          </section>
        </main>

        {/* ── RIGHT: Sidebar ─────────────────────────────────────── */}
        <aside className="sidebar">
          
          {/* NEW: Interactive Wrapper Container */}
          <div className="sidebar-interactive-container">

            {/* 1. AT A GLANCE (Layer 2 - Expands on hover) */}
            {/* Placed first in DOM to use CSS sibling selector (~) to hide jump-nav */}
            <div className="sidebar-card">
              
              {/* Vertical Strip visible when collapsed */}
              <div className="card-strip">
                <span className="strip-text">PROJECT SUMMARY</span>
              </div>

              {/* Wrapped content, revealed upon expanding */}
              <div className="card-content-wrapper">
                <div className="sb-head">
                  <p className="sb-eyebrow">At a Glance</p>
                  <p className="sb-title">Project Summary</p>
                </div>
                
                <div className="sb-rows">
                  <div className="sb-row">
                    <span className="sb-ico">🏥</span>
                    <div>
                      <p className="sb-k">Organisation</p>
                      <p className="sb-v">{caseStudy.project_summary?.organisation}</p>
                    </div>
                  </div>
                  <div className="sb-row">
                    <span className="sb-ico">🌍</span>
                    <div>
                      <p className="sb-k">Region</p>
                      <p className="sb-v">{caseStudy.project_summary?.region}</p>
                    </div>
                  </div>
                  <div className="sb-row">
                    <span className="sb-ico">🔧</span>
                    <div>
                      <p className="sb-k">Service Type</p>
                      {caseStudy.project_summary?.service_types?.map((item, index) => (
                        <span key={index} className="sb-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sb-row">
                    <span className="sb-ico">💻</span>
                    <div>
                      <p className="sb-k">Epic Modules</p>
                      {caseStudy.project_summary?.epic_modules?.map((item, index) => (
                        <span key={index} className="sb-badge">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="sb-row">
                    <span className="sb-ico">🗂️</span>
                    <div>
                      <p className="sb-k">Specialties / Scope</p>
                      <p className="sb-v">{caseStudy.project_summary?.specialties}</p>    
                    </div>
                  </div>
                  <div className="sb-row">
                    <span className="sb-ico">⭐</span>
                    <div>
                      <p className="sb-k">Landmark</p>
                      <p className="sb-v">{caseStudy.project_summary?.landmark}</p>
                    </div>
                  </div>
                </div>

                <div className="sb-cta">

<button
  className="btn"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      `Case Study - ${caseStudy.title} - Book a Similar Project`
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
  Book a Similar Project
</button>
                  <a href="/case-studies" className="btn-sec">← Back to Case Studies</a>
                </div>
              </div>
            </div>

            {/* 2. JUMP NAV (Layer 1 - Fades out on hover) */}
            <div className="jump-nav">
              <p className="jump-label">Jump to Section</p>
              <div className="jump-links">
                <a href="#context"><span className="jump-dot"></span>Context</a>
                <a href="#problem"><span className="jump-dot"></span>The Challenge</a>
                <a href="#intervention"><span className="jump-dot"></span>What Was Done</a>
                <a href="#outcome"><span className="jump-dot"></span>Results &amp; Impact</a>
                <a href="#related"><span className="jump-dot"></span>Related Projects</a>
              </div>
            </div>

          </div>
        </aside>

      </div>

      {/* ── RELATED PROJECTS ─────────────────────────────────────── */}
      <section className="related" id="related">
        <div className="related-inner">
          <p className="s-eye" style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '8px' }}>More Projects</p>
          <h2 style={{ fontFamily: "'Comfortaa', sans-serif", fontSize: '1.8rem', color: 'var(--night)', marginBottom: '6px' }}>Related Case Studies</h2>
          <p style={{ fontSize: '.9rem', color: 'var(--muted)' }}>Other projects where similar skills were applied in complex clinical environments.</p>
          <div className="related-grid">
            {relatedStudies.map((study) => (
              <div key={study.slug} className="rel-card">
                <div className="rel-stripe"></div>
                <div className="rel-body">
                  <div className="rel-meta">
                    <span className="rmc rmc-db">{study.project_summary?.service_types?.[0] || "Project"}</span>
                    <span className="rmc rmc-loc">{study.project_summary?.region || "Global"}</span>
                  </div>
                  <h3 className="rel-title">{study.title}</h3>
                  <p className="rel-org">{study.project_summary?.organisation}</p>
                  <p className="rel-excerpt">{study.subtitle}</p>
                </div>
                <div className="rel-foot">
                  <Link to={`/case-study/${study.slug}`} className="rel-link">Read more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="bottom-cta">
        <div className="bottom-cta-inner">
          <p className="bc-eye">Let's Talk</p>
          <h2>Working on something similar?</h2>
          <p>Whether it's a national dataset integration, a new Epic build or an optimisation programme — get in touch to discuss how I can help deliver it.</p>
          <div className="cta-btns">
            <a href="#contact" className="btn btn-red">Book a Consultation →</a>
            <a href="#case-studies" className="btn btn-forest">All Case Studies</a>
          </div>
        </div>
      </section>
    </div>
  );
}
