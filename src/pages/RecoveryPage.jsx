import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
const floatingStats = [
  {
    number: 22,
    suffix: "+",
    label: "Year Experience",
  },
  {
    number: 16,
    suffix: "+",
    label: "Large-scale EHR go-lives",
  },

   {
    number: 5,
    suffix: "",
    label: "Countries",
  },
  {
    number: "Clinical, Operational, Technical",
    suffix: "",
    label: "Cross-Functional Expertise",
  },
  {
    number: "Team Leadership & Recovery",
    suffix: "",
    label: "Programme Leadership",
  },
  

  
];


const styles = `
  :root {
    --silke-red: #E64013;
    --silke-red-dk: #C8350F;
    --forest-green: #2A6049;
    --sage-mid: #3D8A68;
    --soft-mint: #F5FAF7;
    --green-tint: #E8F4EF;
    --forest-night: #0F2318;
    --white: #FFFFFF;
    --ink: #0F2318;
    --muted: #4B5F55;
    --line: #D8E8E0;
    --radius: 18px;
    --shadow-sm: 0 2px 10px rgba(15,35,24,.06);
    --shadow-md: 0 14px 36px rgba(15,35,24,.10);
    --shadow-lg: 0 26px 60px rgba(15,35,24,.16);
    --maxw:1360px;
  }
  
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--ink);
    background: var(--white);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: clip !important;
  }
  a { color: inherit; text-decoration: none; }
  
  
    h1,h2,h3,h4,.display{font-family:'Comfortaa',cursive;color:var(--ink);line-height:1.18;letter-spacing:-.01em}

  h2 { font-size: clamp(1.7rem, 3.2vw, 2.5rem); font-weight: 500; }
  h3 { font-size: 1.18rem; font-weight: 700; }
  p { color: var(--muted); margin-top: 0; margin-bottom: 1rem; }
  
  .eyebrow {
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .16em;
    font-size: .72rem;
    color: var(--sage-mid);
    display: block;
    margin-bottom: 8px;
  }

  /* ---------- BUTTONS ---------- */
  .btn {
    display: inline-flex; align-items: center; gap: 9px; font-weight: 500; font-size: .92rem;
    padding: 12px 22px; border-radius: 999px; border: 1.5px solid transparent; cursor: pointer;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
    margin: 0;
  }
  .btn-primary { background: var(--silke-red); color: #fff; box-shadow: 0 8px 20px rgba(230,64,19,.28); }
  .btn-primary:hover { background: var(--silke-red-dk); transform: translateY(-2px); box-shadow: 0 12px 26px rgba(230,64,19,.34); }
  .btn-ghost { background: transparent; color: var(--forest-green); border-color: var(--sage-mid); }
  .btn-ghost:hover { background: var(--green-tint); transform: translateY(-2px); }
  .btn-light { background: #fff; color: var(--forest-green); }
  .btn-light:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
  .btn-outline-light { background: transparent; color: #fff; border-color: rgba(255,255,255,.55); }
  .btn-outline-light:hover { background: rgba(255,255,255,.12); transform: translateY(-2px); }
  .arrow { transition: transform .2s ease; }
  .btn:hover .arrow { transform: translateX(3px); }

  /* ---------- HERO ---------- */
  .hero { background: linear-gradient(170deg, var(--soft-mint) 0%, #EEF7F2 100%); position: relative; overflow: hidden; }
  .hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(900px 500px at 88% 8%, rgba(61,138,104,.10), transparent 60%);
    pointer-events: none;
  }
  
  /* FIXED: using padding-top and padding-bottom so it doesn't overwrite the left/right .wrap padding */
  .hero-grid { 
    display: grid; grid-template-columns: 1.04fr .96fr; gap: 56px; align-items: center; 
    padding-top: 74px; padding-bottom: 84px; position: relative; 
  }
  
  .pill {
    display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid var(--line);
    padding: 7px 14px; border-radius: 999px; font-size: .78rem; font-weight: 500; color: var(--forest-green); box-shadow: var(--shadow-sm);
    margin-bottom: 16px;
  }
  .pill .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--silke-red); box-shadow: 0 0 0 4px rgba(230,64,19,.16); }
  .hero h1 { font-size: clamp(2.05rem, 4.4vw, 4.35rem); font-weight: 500; margin: 0 0 18px 0; color: var(--forest-night); }
  .hero h1 .hl { color: var(--forest-green); }
  .hero .lead { font-size: 1.12rem; color: var(--muted); max-width: 560px; margin-bottom: 14px; }
  .hero .sub { font-size: 1rem; color: var(--muted); max-width: 560px; margin-bottom: 30px; }
  .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
  .hero-visual { position: relative; }
  .dash-card { background: #fff; border: 1px solid var(--line); border-radius: 24px; box-shadow: var(--shadow-lg); overflow: hidden; }
  
  /* ---------- TRUST BAR ---------- */
  .trust { background: var(--forest-green); color: #fff; }
  /* FIXED: using padding-top and padding-bottom */
  .trust-inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 24px; padding-top: 30px; padding-bottom: 30px; }
  .trust-item { display: flex; flex-direction: column; gap: 2px; min-width: 150px; flex: 1; }
  .trust-num { font-size: 1.9rem; font-weight: 500; letter-spacing: -.02em; line-height: 1; margin: 0; }
  .trust-num .pls { color: #F4B9A6; }
  .trust-label { font-size: .82rem; color: rgba(255,255,255,.82); font-weight: 500; text-transform: uppercase; letter-spacing: .04em; }
  .trust-sep { width: 1px; background: rgba(255,255,255,.18); align-self: stretch; }

  /* ---------- SECTION SHELLS ---------- */
  section.band { padding: 88px 0; }
  .band.white { background: #fff; }
  .band.mint { background: var(--soft-mint); }
  .band.tint { background: var(--green-tint); }
  .band.green { background: var(--forest-green); color: #fff; }
 .sec-head{
  max-width: 900px;
  margin: 0 auto 46px;
  text-align: center;
}
  .sec-head.center { margin-left: auto; margin-right: auto; text-align: center; }
  .sec-head h2{
  text-align: center;
}
  .band.green .sec-head h2, .band.green p { color: #fff; }
  .band.green p { color: rgba(255,255,255,.85); }
  .band.green .eyebrow { color: #9FD9BF; }
.sec-head p{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
}

  /* ---------- CARD GRIDS ---------- */
  .grid { display: grid; gap: 22px; }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .card {
    background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 28px;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    position: relative; overflow: hidden;
  }
  .band.white .card { background: var(--soft-mint); }
  .card:hover { transform: translateY(-6px); box-shadow: var(--shadow-md); border-color: var(--sage-mid); }
  .card .ico {
    width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center;
    background: var(--green-tint); color: var(--forest-green); margin-bottom: 18px; transition: .25s;
  }
  .card:hover .ico { background: var(--forest-green); color: #fff; }
  .card.warn .ico { background: rgba(230,64,19,.10); color: var(--silke-red); }
  .card.warn:hover { border-color: var(--silke-red); }
  .card.warn:hover .ico { background: var(--silke-red); color: #fff; }
  .card h3 { margin-bottom: 8px; color: var(--forest-night); }
  .card p { font-size: .95rem; margin-bottom: 0; }
  .card .topbar { position: absolute; top: 0; left: 0; height: 4px; width: 0; background: var(--silke-red); transition: width .3s ease; }
  .card:hover .topbar { width: 100%; }
  .card.svc:hover .topbar { background: var(--forest-green); }

  /* ---------- ROOT CAUSE 3-COLUMN ---------- */
  .rc-flow { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 14px; align-items: stretch; }
  .rc-col { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow-sm); }
  .rc-col.symptoms { border-top: 4px solid var(--silke-red); }
  .rc-col.roots { border-top: 4px solid var(--sage-mid); }
  .rc-col.recovery { border-top: 4px solid var(--forest-green); }
  .rc-col h4 { font-size: 1rem; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; color: var(--forest-night); }
  .rc-col .tag { font-size: .66rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; padding: 3px 9px; border-radius: 999px; }
  .rc-col.symptoms .tag { background: rgba(230,64,19,.10); color: var(--silke-red); }
  .rc-col.roots .tag { background: var(--green-tint); color: var(--sage-mid); }
  .rc-col.recovery .tag { background: var(--green-tint); color: var(--forest-green); }
  .rc-list { list-style: none; display: flex; flex-direction: column; gap: 9px; margin: 0; padding: 0; }
  .rc-list li { font-size: .9rem; color: var(--muted); display: flex; gap: 9px; align-items: flex-start; }
  .rc-list li svg { flex: 0 0 auto; margin-top: 3px; }
  .rc-arrow { display: flex; align-items: center; justify-content: center; color: var(--sage-mid); }
  .rc-note { margin-top: 26px; background: var(--soft-mint); border-left: 4px solid var(--forest-green); border-radius: 12px; padding: 20px 24px; max-width: auto; }
  .rc-note p { color: var(--forest-night); font-size: .98rem; margin: 0; }

  /* ---------- BROADER PERSPECTIVE ---------- */
  .persp { display: grid; grid-template-columns: .92fr 1.08fr; gap: 48px; align-items: center; }
  .hub-card { background: #fff; border: 1px solid var(--line); border-radius: 24px; padding: 18px; box-shadow: var(--shadow-md); }
  .persp ul { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 22px; margin-top: 18px; padding: 0; }
  .persp ul li { display: flex; gap: 10px; align-items: flex-start; font-size: .96rem; color: var(--forest-night); font-weight: 500; }
  .persp ul li svg { flex: 0 0 auto; margin-top: 4px; }
  .persp .closing { margin-top: 24px; font-size: .98rem; }

  /* ---------- FRAMEWORK TIMELINE ---------- */
  .tl { position: relative; margin-top: 20px; }
  .tl-track { display: grid; grid-template-columns: repeat(6, 1fr); gap: 0; position: relative; }
  .tl-line { position: absolute; top: 31px; left: 8%; right: 8%; height: 2px; background: rgba(255,255,255,.28); }
  .tl-line .fill { position: absolute; left: 0; top: 0; height: 100%; width: 0; background: #fff; transition: width 1.4s ease; }
  .tl-node { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0 10px; position: relative; z-index: 2; }
  .tl-dot {
    width: 62px; height: 62px; border-radius: 50%; background: var(--forest-green); border: 2px solid rgba(255,255,255,.4);
    display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 1.2rem; color: #fff; margin-bottom: 16px;
    transition: transform .3s ease, background .3s ease, box-shadow .3s ease; box-shadow: 0 0 0 0 rgba(255,255,255,0);
  }
  .tl-node:hover .tl-dot { background: var(--silke-red); transform: translateY(-4px) scale(1.06); box-shadow: 0 0 0 7px rgba(255,255,255,.10); }
  .tl-node h4 { color: #fff; font-size: 1rem; margin-bottom: 6px; }
  .tl-node p { color: rgba(255,255,255,.78); font-size: .83rem; line-height: 1.5; margin: 0; }

  /* ---------- OUTCOMES ---------- */
  .out-card { background: var(--soft-mint); border: 1px solid var(--line); border-radius: var(--radius); padding: 30px 28px; transition: .25s; border-left: 4px solid var(--forest-green); }
  .out-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
  .out-metric { font-size: 2.2rem; font-weight: 600; color: var(--forest-green); letter-spacing: -.02em; line-height: 1; }
  .out-metric .u { font-size: 1.2rem; color: var(--sage-mid); }
  .out-card h3 { margin: 14px 0 8px; color: var(--forest-night); font-size: 1.05rem; }
  .out-card p { font-size: .92rem; margin: 0; }

  /* ---------- COMPARISON ---------- */
  .cmp { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow-sm); }
  .cmp-head { display: grid; grid-template-columns: 1fr 1fr; }
  .cmp-head > div { padding: 20px 26px; font-weight: 700; font-size: .95rem; }
  .cmp-head .a { background: #fff; color: var(--muted); border-bottom: 1px solid var(--line); }
  .cmp-head .b { background: var(--forest-green); color: #fff; }
  .cmp-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--line); }
  .cmp-row:last-child { border-bottom: none; }
  .cmp-row > div { padding: 17px 26px; font-size: .93rem; display: flex; align-items: center; gap: 11px; }
  .cmp-row .a { color: var(--muted); }
  .cmp-row .b { color: var(--forest-night); font-weight: 600; background: var(--soft-mint); }
  .cmp-row svg { flex: 0 0 auto; }

  /* ---------- READINESS CHECKLIST ---------- */
  .ck-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .ck-item {
    display: flex; align-items: center; gap: 14px; background: #fff; border: 1px solid var(--line); border-radius: 14px;
    padding: 16px 18px; cursor: pointer; transition: .2s; user-select: none;
  }
  .ck-item:hover { border-color: var(--sage-mid); box-shadow: var(--shadow-sm); }
  .ck-box {
    width: 24px; height: 24px; border-radius: 7px; border: 2px solid var(--sage-mid); flex: 0 0 auto;
    display: flex; align-items: center; justify-content: center; transition: .2s;
  }
  .ck-box svg { opacity: 0; transform: scale(.5); transition: .2s; }
  .ck-item.checked { border-color: var(--silke-red); background: rgba(230,64,19,.045); }
  .ck-item.checked .ck-box { background: var(--silke-red); border-color: var(--silke-red); }
  .ck-item.checked .ck-box svg { opacity: 1; transform: scale(1); }
  .ck-item span { font-size: .95rem; font-weight: 500; color: var(--forest-night); }
  .ck-callout {
    margin-top: 26px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
    padding: 26px 30px; display: flex; gap: 22px; align-items: center; flex-wrap: wrap; box-shadow: var(--shadow-sm);
    border-left: 4px solid var(--forest-green); transition: border-color .3s ease;
  }
  .ck-callout.alert { border-left-color: var(--silke-red); }
  .ck-score { font-size: 2.6rem; font-weight: 800; color: var(--forest-green); line-height: 1; min-width: 90px; margin: 0; }
  .ck-callout.alert .ck-score { color: var(--silke-red); }
  .ck-msg { flex: 1; min-width: 240px; }
  .ck-msg p { font-size: .96rem; color: var(--forest-night); margin: 0; }

  /* ---------- FINAL CTA ---------- */
  .final { background: linear-gradient(120deg, var(--forest-green) 0%, var(--sage-mid) 100%); color: #fff; text-align: center; position: relative; overflow: hidden; }
  .final::after { content: ""; position: absolute; inset: 0; background: radial-gradient(700px 380px at 80% 120%, rgba(255,255,255,.10), transparent 60%); pointer-events: none; }
  
  /* FIXED: using padding-top and padding-bottom */
  .final-inner { padding-top: 78px; padding-bottom: 78px; position: relative; z-index: 2; }
  
  .final h2 { color: #fff; font-size: clamp(1.8rem, 3.6vw, 2.7rem); margin-bottom: 16px; }
  .final p { color: rgba(255,255,255,.9); max-width: 620px; margin: 0 auto 30px; font-size: 1.08rem; }
  .final-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

  /* ---------- REVEAL ---------- */
  .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.in { opacity: 1; transform: none; }
  .reveal.d1 { transition-delay: .08s; }
  .reveal.d2 { transition-delay: .16s; }
  .reveal.d3 { transition-delay: .24s; }
  .reveal.d4 { transition-delay: .32s; }
  .reveal.d5 { transition-delay: .40s; }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 980px) {
    /* FIXED: Prevent padding shorthand from overriding .wrap padding on mobile */
    .hero-grid { grid-template-columns: 1fr; gap: 40px; padding-top: 48px; padding-bottom: 60px; }
    .hero-copy { order: 1;  }
    .hero-visual { order: 2; max-width: 480px; margin: 0 auto; }
    .persp { grid-template-columns: 1fr; gap: 34px; }
    .grid-3 { grid-template-columns: 1fr 1fr; }
    .rc-flow { grid-template-columns: 1fr; gap: 8px; }
    .rc-arrow { transform: rotate(90deg); padding: 4px 0; }
    .tl-track { grid-template-columns: 1fr 1fr; gap: 30px 0; }
    .tl-line { display: none; }
  }
  @media (max-width: 680px) {
    .grid-3, .grid-2, .persp ul, .ck-grid, .cmp-head, .cmp-row { grid-template-columns: 1fr; }
    .cmp-head .a { display: none; }
    .cmp-row .a { background: #fff; font-style: italic; opacity: .7; }
    .trust-sep { display: none; }
    .trust-item { min-width: 46%; }
    
    /* Using padding-top and padding-bottom here too just to be safe */
    section.band { padding-top: 60px; padding-bottom: 60px; padding-left: 0; padding-right: 0; }
    
    /* Better stacking for Framework Timeline */
    .tl-track { grid-template-columns: 1fr; gap: 24px 0; }
    .tl-node { align-items: flex-start; text-align: left; flex-direction: row; gap: 16px; padding: 0; }
    .tl-dot { margin-bottom: 0; flex-shrink: 0; width: 54px; height: 54px; font-size: 1.05rem; }
    .tl-node h4 { margin-top: 4px; }
    
    /* Reduce bold weights globally for mobile */
    h1 { font-weight: 700; }
    h2 { font-weight: 700; }
    .hero .lead, .trust-label, .card p, .out-card p, .ck-item span { font-weight: 400; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
    .reveal { opacity: 1; transform: none; }
    html { scroll-behavior: auto; }
  }

  @media (max-width: 768px){
  .wrap{
    padding: 0 24px;
    
    
  }
}

@media (max-width: 480px){
  .wrap{
    padding: 60px 20px;
    
  }
}


.hero-floating-stats-wrap {
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 10px 35px rgba(15, 35, 24, 0.05);
  isolation: isolate;
}













/* --- Responsive Rules for Floating Stats --- */

@media (max-width: 1060px) {
  .hero-floating-stats-wrap {
    /* Switch to 3 columns on tablets */
    grid-template-columns: repeat(3, 1fr);
    margin: 0 24px; /* Give it breathing room on the sides */
  }
  .hero-floating-stat-card {
    border-bottom: 1px solid rgba(42, 96, 73, 0.1);
  }
  /* Remove the right border on the 3rd item of every row */
  .hero-floating-stat-card:nth-child(3n) {
    border-right: none;
  }
}

@media (max-width: 680px) {
  .hero-floating-stats-wrap {
    /* Stack into 1 column on mobile */
    grid-template-columns: 1fr; 
    border-radius: 16px;
  }
  .hero-floating-stat-card {
    border-right: none !important; /* Remove side borders entirely */
    padding: 24px 20px;
  }
  .hero-floating-stat-card:last-child {
    border-bottom: none; /* Remove bottom border on the very last item */
  }
}
`;

const checklistItems = [
  "Timelines have moved more than once without a clear reason",
  "Clinicians work around the system rather than through it",
  "The same issues keep returning after being \"fixed\"",
  "No one can give a reliable, single view of status",
  "Decisions stall because ownership isn't clear",
  "The team is firefighting instead of improving the build",
  "Confidence in the programme is quietly draining away",
  "Critical knowledge sits with only one or two people"
];

export default function Recovery() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState(new Set());

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach(r => r.classList.add('in'));
    } else {
      const ro = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            ro.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(r => ro.observe(r));
    }

    // Number Counter Observer
    // Number Counter Observer
    const runCount = (el) => {
      const rawValue = el.getAttribute('data-count'); // FIX: Read data-count
      const to = parseInt(rawValue, 10);
      
      // FIX: If it's text (NaN), just display it and exit the function
      if (isNaN(to)) {
        el.textContent = rawValue;
        return;
      }

      if (reduce) { el.textContent = to; return; }
      let start = null;
      const dur = 1200;
      const step = (t) => {
        if (!start) start = t;
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * to);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    // FIX: Change selector to match your JSX (.count-up)
    const counts = document.querySelectorAll('.count-up'); 
    if ('IntersectionObserver' in window) {
      const co = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount(e.target);
            co.unobserve(e.target);
          }
        });
      }, { threshold: 0.6 });
      counts.forEach((c) => co.observe(c));
    } else {
      counts.forEach(runCount);
    }

    // Timeline line fill animation
    const fill = document.getElementById('tlFill');
    if (fill) {
      if (reduce) { fill.style.width = '100%'; }
      else if ('IntersectionObserver' in window) {
        const to2 = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) { fill.style.width = '100%'; to2.unobserve(e.target); }
          });
        }, { threshold: 0.4 });
        const line = document.getElementById('tlLine');
        if (line) to2.observe(line);
      } else { fill.style.width = '100%'; }
    }
  }, []);

  const toggleChecklist = (index) => {
    const newSet = new Set(checkedItems);
    if (newSet.has(index)) newSet.delete(index);
    else newSet.add(index);
    setCheckedItems(newSet);
  };

  const score = checkedItems.size;
  let message = '';
  if (score === 0) {
    message = 'Select the signs that apply to your programme. An independent recovery assessment can help identify the underlying causes and set out a structured path forward.';
  } else if (score < 3) {
    message = 'A couple of these are worth watching. Catching them early is usually far easier than recovering once they compound — a short assessment can confirm whether action is needed now.';
  } else if (score < 6) {
    message = 'Several of these are present together. That pattern often points to a shared root cause rather than separate problems — an independent recovery assessment can pinpoint it and set a clear path forward.';
  } else {
    message = 'Most of these signs are present. A programme under this much pressure benefits from a structured, independent recovery assessment to stabilise delivery and rebuild confidence quickly.';
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap hero-grid">
          
          <div className="hero-copy reveal">
            <br/>
                <p className="hero-eyebrow">
              Independent Programme Recovery
              </p>
            <h1>Recovering EHR programmes <span className="hl">before problems become programme risks</span></h1>
            <p className="lead">Support for healthcare organisations when delivery stalls, adoption declines, risks escalate or confidence begins to erode.</p>
            <p className="sub">Drawing on experience across implementation, design, optimisation, infrastructure, data analysis and programme leadership, Silke IT helps organisations identify root causes, stabilise delivery and restore momentum.</p>
            <div className="hero-cta">
              
           
              <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Request Recovery Assessment"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Request Recovery Assessment 
</button>
              {/* <a href="#recovery-discussion" className="btn btn-ghost">Discuss Your Programme Challenges</a> */}
            </div>
          </div>

{/* Recovery dashboard infographic */}
<div className="hero-visual reveal d2">
  <div className="dash-card">
    <svg viewBox="0 0 520 520" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recovery dashboard showing risk indicators decreasing, the programme timeline stabilising, and clinical, operational and technical teams reconnecting around the EHR platform.">
      <defs>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" /><stop offset="1" stopColor="#F5FAF7" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="520" height="520" fill="url(#bgGrad)" />

      {/* header row */}
      <circle cx="34" cy="34" r="6" fill="#E64013"><animate attributeName="opacity" values="1;.35;1" dur="2.4s" repeatCount="indefinite" /></circle>
      <text x="50" y="39" fontFamily="Montserrat,sans-serif" fontSize="14" fontWeight="700" fill="#0F2318">Programme Recovery — Live View</text>
      <line x1="24" y1="56" x2="496" y2="56" stroke="#E8F4EF" strokeWidth="2" />

      {/* LEFT panel: risk indicators decreasing */}
      <text x="24" y="86" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="600" fill="#4B5F55">RISK INDICATORS</text>
      <text x="222" y="86" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="700" fill="#2A6049" textAnchor="end">Decreasing</text>
      <g>
        <rect x="24" y="100" width="40" height="78" rx="6" fill="#E64013" opacity="0.92">
          <animate attributeName="height" values="78;78;58" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="100;100;120" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="74" y="118" width="40" height="60" rx="6" fill="#EF7A52" opacity="0.92">
          <animate attributeName="height" values="60;60;42" dur="3s" begin="0.1s" repeatCount="indefinite" />
          <animate attributeName="y" values="118;118;136" dur="3s" begin="0.1s" repeatCount="indefinite" />
        </rect>
        <rect x="124" y="138" width="40" height="40" rx="6" fill="#3D8A68" opacity="0.92">
          <animate attributeName="height" values="40;40;30" dur="3s" begin="0.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="138;138;148" dur="3s" begin="0.2s" repeatCount="indefinite" />
        </rect>
        <rect x="174" y="154" width="40" height="24" rx="6" fill="#2A6049" opacity="0.92">
          <animate attributeName="height" values="24;24;18" dur="3s" begin="0.3s" repeatCount="indefinite" />
          <animate attributeName="y" values="154;154;160" dur="3s" begin="0.3s" repeatCount="indefinite" />
        </rect>
      </g>
      <line x1="24" y1="178" x2="222" y2="178" stroke="#D8E8E0" strokeWidth="2" />

      {/* RIGHT panel: timeline stabilising */}
      <text x="262" y="86" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="600" fill="#4B5F55">DELIVERY TIMELINE</text>
      <text x="496" y="86" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="700" fill="#2A6049" textAnchor="end">Stabilising</text>
      <rect x="262" y="98" width="234" height="80" rx="10" fill="#F5FAF7" stroke="#E8F4EF" strokeWidth="1.5" />
      <polyline points="272,150 292,120 312,158 332,118 352,150 372,132 392,138 412,134 432,136 452,135 486,135"
        fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="420" strokeDashoffset="420">
        <animate attributeName="stroke-dashoffset" values="420;0" dur="2.2s" fill="freeze" />
      </polyline>
      <line x1="372" y1="106" x2="372" y2="170" stroke="#D8E8E0" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="486" cy="135" r="4.5" fill="#2A6049"><animate attributeName="r" values="4.5;7;4.5" dur="2s" repeatCount="indefinite" /></circle>

     {/* CENTRE: teams reconnecting around EHR platform */}
{/* CENTRE: teams reconnecting around EHR platform */}
<text x="24" y="226" fontFamily="Montserrat,sans-serif" fontSize="11.5" fontWeight="600" fill="#4B5F55">TEAMS RECONNECTING</text>

<g stroke="#3D8A68" strokeWidth="2.5" fill="none" strokeLinecap="round">
  <line x1="120" y1="300" x2="240" y2="360" strokeDasharray="140" strokeDashoffset="140"><animate attributeName="stroke-dashoffset" values="140;0" dur="1.2s" begin="0.6s" fill="freeze" /></line>
  <line x1="400" y1="300" x2="280" y2="360" strokeDasharray="140" strokeDashoffset="140"><animate attributeName="stroke-dashoffset" values="140;0" dur="1.2s" begin="0.8s" fill="freeze" /></line>
  
  {/* LONGER LINE: y1 is bottom of EHR (364 + 46 = 410), y2 is top of new Operational position (475 - 34 = 441) */}
  <line x1="260" y1="410" x2="260" y2="441" strokeDasharray="40" strokeDashoffset="40"><animate attributeName="stroke-dashoffset" values="40;0" dur="1s" begin="1s" fill="freeze" /></line>
</g>

<circle cx="260" cy="364" r="46" fill="#2A6049" />
<circle cx="260" cy="364" r="46" fill="none" stroke="#3D8A68" strokeWidth="2" opacity="0.6">
  <animate attributeName="r" values="46;58;46" dur="3s" repeatCount="indefinite" />
  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
</circle>
<text x="260" y="369" fontFamily="Montserrat,sans-serif" fontSize="16" fontWeight="800" fill="#fff" textAnchor="middle">EHR</text>

<g fontFamily="Montserrat,sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">
  <circle cx="100" cy="288" r="34" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" />
  <text x="100" y="285" fill="#0F2318">Clinical</text><text x="100" y="298" fill="#4B5F55" fontSize="8.5" fontWeight="600">team</text>
  <circle cx="420" cy="288" r="34" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" />
  <text x="420" y="285" fill="#0F2318">Technical</text><text x="420" y="298" fill="#4B5F55" fontSize="8.5" fontWeight="600">team</text>
  
  {/* MOVED DOWN: cy increased to 475 to create more space */}
  <circle cx="260" cy="475" r="34" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" />
  <text x="260" y="479" fill="#0F2318" fontSize="10">Operational</text>
</g>
    </svg>
  </div>
</div>
        </div>
      </section>
      <div className="hero-floating-stats-wrap">
      {floatingStats.map((item, index) => {
        // Evaluate if the item is text
        const isText = isNaN(Number(item.number));

        return (
          <div
            key={index}
            className="hero-floating-stat-card"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="hero-floating-stat-number">
              <span
                className="count-up"
                data-count={item.number}
                // Apply specific styling if it is text
                style={isText ? { 
                  fontSize: '1.0rem', 
                  lineHeight: '0',
                  fontWeight: 'bold',
                  fontFamily: "'Comfortaa', 'Montserrat', sans-serif"
                } : {}}
              >
                {/* Render the text immediately, otherwise render 0 for the animation to grab */}
                {isText ? item.number : 0}
              </span>
              <span className="hero-floating-accent">
                {item.suffix}
              </span>
            </div>
            <div className="hero-floating-stat-label">
              {item.label}
            </div>
          </div>
        );
      })}
    </div>

      {/* ============ TRUST BAR ============ */}
      {/* <section className="trust">
        <div className="wrap trust-inner">
          <div className="trust-item"><span className="trust-num"><span className="count" data-to="22">0</span><span className="pls">+</span></span><span className="trust-label">Years Technology Experience</span></div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-num"><span className="count" data-to="16">0</span><span className="pls">+</span></span><span className="trust-label">Major EHR Go-Lives</span></div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-num"><span className="count" data-to="5">0</span></span><span className="trust-label">Countries Delivered Across</span></div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-num" style={{ fontSize: '1.05rem', lineHeight: 1.25, fontWeight: 700 }}>Clinical · Operational<br />· Technical</span><span className="trust-label">Cross-Functional Expertise</span></div>
          <div className="trust-sep"></div>
          <div className="trust-item"><span className="trust-num" style={{ fontSize: '1.05rem', lineHeight: 1.25, fontWeight: 700 }}>Team Leadership<br />&amp; Recovery</span><span className="trust-label">Programme Leadership</span></div>
        </div>
      </section> */}

      {/* ============ SECTION 1: DRIFT ============ */}
      <section className="band white" id="warning-signs">
        <div className="wrap">
          <div className="sec-head reveal">
                               <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
When Things Start To Slip
        </span>
            <h2>When EHR programmes start to drift</h2>
            <p>These are the signs leadership tends to notice first — often before anyone agrees the programme is in trouble. On their own each looks manageable. Together they point to something that needs attention.</p>
          </div>
          <div className="grid grid-3">
            <div className="card warn reveal d1"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></div>
              <h3>Delivery delays</h3>
              <p>Milestones keep slipping despite teams putting in more and more effort.</p>
            </div>
            <div className="card warn reveal d2"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l2-7 4 14 2-7h6" /></svg></div>
              <h3>Clinical frustration</h3>
              <p>Workflows don't support the day-to-day reality of clinical and operational work.</p>
            </div>
            <div className="card warn reveal d3"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 12l9 4 9-4" /><path d="M3 17l9 4 9-4" /></svg></div>
              <h3>Growing backlogs</h3>
              <p>Teams spend more time reacting to issues than improving the build.</p>
            </div>
            <div className="card warn reveal d1"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-6" /><path d="M20 20v-3" strokeDasharray="2 3" /></svg></div>
              <h3>Reporting gaps</h3>
              <p>Leadership lacks confidence in the information they're being shown.</p>
            </div>
            <div className="card warn reveal d2"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 16H3z" /><path d="M12 10v4M12 17h.01" /></svg></div>
              <h3>Escalating risks</h3>
              <p>Known issues keep returning without ever being properly resolved.</p>
            </div>
            <div className="card warn reveal d3"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l6 6 4-4 8 8" /><path d="M21 17v-5h-5" /></svg></div>
              <h3>Declining confidence</h3>
              <p>Stakeholders start to lose trust in the direction of the programme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: ROOT CAUSE ============ */}
      <section className="band tint" id="root-cause">
        <div className="wrap">
          <div className="sec-head reveal">
                                           <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Treat The Cause, Not The Symptom
        </span>
            <h2>Recovery starts with understanding the root cause</h2>
            <p>The signs above rarely exist on their own. Each one usually traces back to something deeper in the programme — governance, design, capability or technical debt. Recovery works by following that trail, not by treating each symptom in isolation.</p>
          </div>

          <div className="rc-flow reveal d1">
            <div className="rc-col symptoms">
              <h4><span className="tag">Symptoms</span></h4>
              <ul className="rc-list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E64013" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>User dissatisfaction</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E64013" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>Poor adoption</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E64013" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>Missed deadlines</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E64013" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>Rising support tickets</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E64013" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>Interface failures</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E64013" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>Reporting issues</li>
              </ul>
            </div>
            <div className="rc-arrow"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
            <div className="rc-col roots">
              <h4><span className="tag">Root Causes</span></h4>
              <ul className="rc-list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>Unclear ownership</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>Design weaknesses</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>Governance gaps</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>Knowledge shortages</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>Integration complexity</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3D8A68" strokeWidth="3" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>Technical debt</li>
              </ul>
            </div>
            <div className="rc-arrow"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
            <div className="rc-col recovery">
              <h4><span className="tag">Sustainable Recovery</span></h4>
              <ul className="rc-list">
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Clear priorities</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Better workflows</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Stronger governance</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Improved communication</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Better reporting</li>
                <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Long-term stability</li>
              </ul>
            </div>
          </div>

          <div className="rc-note reveal d2">
            <p>The symptoms are what get noticed first — but fixing them in isolation rarely holds. Recovery works by tracing each symptom back to its cause, then putting changes in place that keep the programme steady well after the engagement ends.</p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: BROADER PERSPECTIVE ============ */}
      <section className="band mint" id="perspective">
        <div className="wrap">
          <div className="persp">
            <div className="hub-card reveal">
              <svg viewBox="0 0 440 400" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recovery at the centre, connected to clinical, operational, technical, and data and reporting domains.">
                <defs>
                  <radialGradient id="hubG" cx="50%" cy="50%" r="50%">
                    <stop offset="0" stopColor="#3D8A68" /><stop offset="1" stopColor="#2A6049" />
                  </radialGradient>
                </defs>
                <g stroke="#3D8A68" strokeWidth="2.5" opacity="0.55">
                  <line x1="220" y1="200" x2="220" y2="78" />
                  <line x1="220" y1="200" x2="92" y2="200" />
                  <line x1="220" y1="200" x2="348" y2="200" />
                  <line x1="220" y1="200" x2="220" y2="322" />
                </g>
                <g fill="#E64013">
                  <circle r="4" cx="220" cy="200"><animate attributeName="cy" values="200;78" dur="2.4s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2.4s" repeatCount="indefinite" /></circle>
                  <circle r="4" cx="220" cy="200"><animate attributeName="cx" values="220;92" dur="2.4s" begin="0.6s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2.4s" begin="0.6s" repeatCount="indefinite" /></circle>
                  <circle r="4" cx="220" cy="200"><animate attributeName="cx" values="220;348" dur="2.4s" begin="1.2s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2.4s" begin="1.2s" repeatCount="indefinite" /></circle>
                  <circle r="4" cx="220" cy="200"><animate attributeName="cy" values="200;322" dur="2.4s" begin="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values="1;0" dur="2.4s" begin="1.8s" repeatCount="indefinite" /></circle>
                </g>
                <g fontFamily="Montserrat,sans-serif" textAnchor="middle">
                  <circle cx="220" cy="58" r="44" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" /><text x="220" y="63" fontSize="13" fontWeight="700" fill="#0F2318">Clinical</text>
                  <circle cx="72" cy="200" r="44" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" /><text x="72" y="198" fontSize="12" fontWeight="700" fill="#0F2318">Opera-</text><text x="72" y="212" fontSize="12" fontWeight="700" fill="#0F2318">tional</text>
                  <circle cx="368" cy="200" r="44" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" /><text x="368" y="205" fontSize="13" fontWeight="700" fill="#0F2318">Technical</text>
                  <circle cx="220" cy="342" r="44" fill="#fff" stroke="#3D8A68" strokeWidth="2.5" /><text x="220" y="340" fontSize="11" fontWeight="700" fill="#0F2318">Data &amp;</text><text x="220" y="353" fontSize="11" fontWeight="700" fill="#0F2318">Reporting</text>
                  <circle cx="220" cy="200" r="54" fill="url(#hubG)" />
                  <circle cx="220" cy="200" r="54" fill="none" stroke="#3D8A68" strokeWidth="2" opacity="0.5"><animate attributeName="r" values="54;66;54" dur="3s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" /></circle>
                  <text x="220" y="205" fontSize="16" fontWeight="800" fill="#fff">Recovery</text>
                </g>
              </svg>
            </div>

            <div className="reveal d1">
<span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
A Broader Perspective
        </span>
              
              <h2 style={{ margin: '12px 0 14px' }}>Why recovery needs more than application knowledge</h2>
              <p>Many consultants specialise in a single application area. Recovery usually demands an understanding of how one decision ripples across the whole programme:</p>
              <ul>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Clinical workflows</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Operational processes</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Reporting &amp; analytics</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Data quality</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Integration pathways</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Infrastructure dependencies</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Delivery teams</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Executive stakeholders</li>
              </ul>
              <p className="closing">That perspective comes from working across implementation, architecture, analytics, leadership and large-scale healthcare transformation — not from a single module.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: SERVICES ============ */}
      <section className="band white" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
How I Can Help
        </span>
            <h2>Recovery services</h2>
            <p>Each engagement is shaped around where the programme actually is — not a fixed template.</p>
          </div>
          <div className="grid grid-3">
            <div className="card svc reveal d1"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h2l1 4 2-6 1 3h2" /></svg></div>
              <h3>Programme Health Assessment</h3>
              <p>An independent review of programme risks, dependencies and delivery challenges.</p>
            </div>
            <div className="card svc reveal d2"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /><path d="M8 11h6M11 8v6" /></svg></div>
              <h3>Build &amp; Workflow Audit</h3>
              <p>A review of configuration quality, workflow alignment and accumulated technical debt.</p>
            </div>
            <div className="card svc reveal d3"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3M12 18v3M4 7l2 2M18 15l2 2" /><circle cx="12" cy="12" r="5" /></svg></div>
              <h3>Delivery Stabilisation</h3>
              <p>Reducing operational risk and restoring control over the programme.</p>
            </div>
            <div className="card svc reveal d1"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="7" r="2.5" /><circle cx="18" cy="7" r="2.5" /><circle cx="12" cy="17" r="2.5" /><path d="M8 8.5l3 6M16 8.5l-3 6" /></svg></div>
              <h3>Stakeholder Alignment</h3>
              <p>Helping clinical, operational and technical teams work towards shared objectives.</p>
            </div>
            <div className="card svc reveal d2"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16" /><path d="M8 15l3-4 3 2 4-6" /></svg></div>
              <h3>Data &amp; Reporting Analysis</h3>
              <p>Improving visibility so leadership can make informed decisions with confidence.</p>
            </div>
            <div className="card svc reveal d3"><span className="topbar"></span>
              <div className="ico"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="3" /><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /></svg></div>
              <h3>Team Mentoring &amp; Leadership</h3>
              <p>Structure, guidance and capability development for analysts and leadership teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: FRAMEWORK ============ */}
      <section className="band green" id="framework">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">A Repeatable Approach</span>
            <h2>A structured recovery framework</h2>
            <p>How recovery engagements are structured — from first assessment through to a programme that can hold its own.</p>
          </div>
          <div className="tl reveal d1">
            <div className="tl-line" id="tlLine"><span className="fill" id="tlFill"></span></div>
            <div className="tl-track">
              <div className="tl-node"><div className="tl-dot">01</div><div><h4>Assess</h4><p>Understand current state, risks and dependencies.</p></div></div>
              <div className="tl-node"><div className="tl-dot">02</div><div><h4>Stabilise</h4><p>Reduce immediate delivery and operational risks.</p></div></div>
              <div className="tl-node"><div className="tl-dot">03</div><div><h4>Prioritise</h4><p>Focus effort on the highest-value activities.</p></div></div>
              <div className="tl-node"><div className="tl-dot">04</div><div><h4>Align</h4><p>Reconnect teams around clear objectives.</p></div></div>
              <div className="tl-node"><div className="tl-dot">05</div><div><h4>Deliver</h4><p>Implement practical improvements and monitor progress.</p></div></div>
              <div className="tl-node"><div className="tl-dot">06</div><div><h4>Strengthen</h4><p>Build sustainable capability and long-term resilience.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 6: OUTCOMES ============ */}
      <section className="band white" id="outcomes">
        <div className="wrap">
          <div className="sec-head reveal">
                        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Track Record
        </span>
            <h2>Examples of challenges previously addressed</h2>
            <p>Drawn from delivery across large public, private and research hospitals internationally.</p>
          </div>
          <div className="grid grid-3">
            <div className="out-card reveal d1">
              <div className="out-metric">95<span className="u">%+</span></div>
              <h3>Large-scale interface errors reduced</h3>
              <p>Led remediation that cut ambulatory interface errors by more than 95% from a backlog of over 800,000.</p>
            </div>
            <div className="out-card reveal d2">
              <div className="out-metric">750K</div>
              <h3>Results routing recovery</h3>
              <p>Analysed more than 750,000 routing errors and helped achieve a 75% reduction.</p>
            </div>
            <div className="out-card reveal d3">
              <div className="out-metric">5–17</div>
              <h3>Team leadership</h3>
              <p>Led and mentored analyst teams ranging from five to seventeen across large healthcare organisations.</p>
            </div>
            <div className="out-card reveal d1">
              <div className="out-metric">50–70<span className="u">%</span></div>
              <h3>Faster issue resolution</h3>
              <p>Identified recurring build issues and improved SLA resolution times by 50–70% through structured team review.</p>
            </div>
            <div className="out-card reveal d2">
              <div className="out-metric" style={{ fontSize: '1.5rem', paddingTop: '6px' }}>Post Go-Live</div>
              <h3>Stabilisation support</h3>
              <p>Provided strategic support and workflow improvements through critical post go-live recovery periods.</p>
            </div>
            <div className="out-card reveal d3">
              <div className="out-metric" style={{ fontSize: '1.5rem', paddingTop: '6px' }}>Audit-Led</div>
              <h3>Build quality improvement</h3>
              <p>Used audits, reporting analysis and workflow reviews to lift configuration quality and efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 7: COMPARISON ============ */}
      <section className="band tint" id="approach">
        <div className="wrap">
          <div className="sec-head reveal">
    <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Approach Under Pressure
        </span>
            <h2>A task-focused consultant vs a recovery-focused one</h2>
            <p>The difference shows up most when a programme is under pressure.</p>
          </div>
          <div className="cmp reveal d1">
            <div className="cmp-head">
              <div className="a">Task-Focused Consultant</div>
              <div className="b">Silke IT Recovery Approach</div>
            </div>
            <div className="cmp-row">
              <div className="a">Focused on individual tasks</div>
              <div className="b"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Focused on programme outcomes</div>
            </div>
            <div className="cmp-row">
              <div className="a">Works within assigned scope</div>
              <div className="b"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Investigates root causes</div>
            </div>
            <div className="cmp-row">
              <div className="a">Solves isolated issues</div>
              <div className="b"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Identifies wider impacts</div>
            </div>
            <div className="cmp-row">
              <div className="a">Tells you what you want to hear</div>
              <div className="b"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Raises difficult issues early and honestly</div>
            </div>
            <div className="cmp-row">
              <div className="a">Delivers configuration</div>
              <div className="b"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Builds capability and stability</div>
            </div>
            <div className="cmp-row">
              <div className="a">Reactive problem solving</div>
              <div className="b"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>Proactive risk identification</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 8: READINESS ============
      <section className="band mint" id="readiness">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Recovery Readiness</span>
            <h2>How many of these sound like your programme right now?</h2>
            <p>These go a level deeper than the signs further up the page. The more that apply, the more an independent view is likely to help.</p>
          </div>
          <div className="ck-grid reveal d1" id="checklist">
            {checklistItems.map((text, idx) => (
              <div key={idx} className={`ck-item ${checkedItems.has(idx) ? 'checked' : ''}`} onClick={() => toggleChecklist(idx)}>
                <div className="ck-box">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className={`ck-callout reveal d2 ${score >= 3 ? 'alert' : ''}`} id="ckCallout">
            <div className="ck-score" id="ckScore">{score}<span style={{ fontSize: '1.1rem', color: 'var(--muted)', fontWeight: 600 }}>/8</span></div>
            <div className="ck-msg">
              <p id="ckMsg">{message}</p>
              <div style={{ marginTop: '16px' }}><a href="#recovery-discussion" className="btn btn-primary" style={{ fontSize: '.88rem', padding: '11px 20px', margin: 0 }}>Request Recovery Assessment <span className="arrow">→</span></a></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ============ FINAL CTA ============ */}
      <section className="final" id="recovery-discussion">
        <div className="wrap final-inner reveal">
          <h2>Restore confidence. Reduce risk. Rebuild momentum.</h2>
          <p>When a programme begins to struggle, early intervention can stop small issues becoming major organisational challenges.</p>
          <div className="final-cta">
           
<button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Schedule a Recovery Discussion "
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Schedule a Recovery Discussion
</button>
            {/* <a href="#readiness" className="btn btn-outline-light">Request Recovery Assessment</a> */}
          </div>
        </div>
      </section>
    </>
  );
}