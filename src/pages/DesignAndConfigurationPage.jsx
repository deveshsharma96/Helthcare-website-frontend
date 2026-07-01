import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
// --- DATA ---
const badItems = ["Duplicate content", "Analyst inconsistency", "Workflow workarounds", "Excessive customisation", "Governance challenges", "Delayed testing cycles", "Higher optimisation costs", "Lower clinician satisfaction"];
const goodItems = ["Strong stakeholder engagement", "Clear workflow ownership", "Governance and standards", "Scalable build principles", "Cross-application thinking", "Early risk identification", "Measurable outcomes"];

const deliver = [
  { ic: 'flow', t: 'Clinical Workflow Design', d: 'Turn clinical and operational requirements into workflows that support frontline teams — and stay scalable and maintainable.' },
  { ic: 'lead', t: 'Configuration Leadership', d: 'Guide and oversee analysts so configuration stays consistent, high-quality and aligned to programme goals.' },
  { ic: 'gov', t: 'Governance & Standards', d: 'Set design principles, review processes and build standards that reduce risk and improve long-term supportability.' },
  { ic: 'content', t: 'Content Design', d: 'Design and configure the building blocks of clinical content:', tags: ['SmartForms', 'Order Sets', 'Activities', 'Navigators', 'SmartTools', 'Questionnaires', 'Registries', 'Health Maintenance', 'Results Routing'] },
  { ic: 'test', t: 'Testing Readiness', d: 'Bring teams to a confident testing position:', tags: ['Design validation', 'Integrated testing', 'Workflow reviews', 'Defect analysis', 'Config QA'] },
  { ic: 'mentor', t: 'Analyst Mentoring', d: 'Build analyst capability through coaching, knowledge transfer and practical guidance drawn from real delivery.' }
];

const philosophy = [
  { n: 1, t: 'Understand', d: 'Review existing workflows, pain points and operational requirements.' },
  { n: 2, t: 'Challenge', d: 'Identify unnecessary complexity and the real opportunities to improve.' },
  { n: 3, t: 'Simplify', d: 'Design workflows that support users rather than adding to their burden.' },
  { n: 4, t: 'Configure', d: 'Build scalable solutions aligned to governance standards.' },
  { n: 5, t: 'Validate', d: 'Confirm outcomes through testing, reporting and stakeholder feedback.' },
  { n: 6, t: 'Optimise', d: 'Keep improving workflows based on real operational experience.' }
];

const clusters = [
  { tag: 'Clinical', ic: 'clinical', items: ['Ambulatory', 'Community', 'Orders', 'ClinDoc', 'Beacon', 'Referrals', 'Grand Central', 'Cadence'] },
  { tag: 'Workflow', ic: 'workflow', items: ['SmartForms', 'SmartTools', 'Activities', 'Navigators', 'Questionnaires', 'Therapy Plans', 'Treatment Plans'] },
  { tag: 'Operational', ic: 'ops', items: ['Results Routing', 'In-Basket', 'Pools', 'Security', 'Reporting Workbench', 'Chart Abstraction'] },
  { tag: 'Technical', ic: 'tech', items: ['FHIR Integration', 'MyChart', 'EpicCare Link', 'Data Courier', 'Facility Structure', 'Hyperdrive'] }
];

const cases = [
  { badge: 'Multi-Organisation', t: 'Paediatric Cancer Services', d: 'Led design and build supporting paediatric cancer, pain management and palliative care workflows across multiple organisations.', focus: ['Cross-organisational alignment', 'Stakeholder coordination', 'Workflow standardisation', 'Operational reporting'] },
  { badge: 'Community Services', t: 'HIV & Sexual Health', d: 'Led strategic design and clinical workflow development for large-scale community services.', focus: ['Service redesign', 'Workflow optimisation', 'Data integration', 'Stakeholder engagement'] },
  { badge: 'Specialist Care', t: 'Dental & Surgical Services', d: 'Designed and delivered workflows across dental and surgical specialties, including local and general anaesthesia pathways.', focus: ['Complex clinical workflows', 'Procedural documentation', 'Specialty-specific requirements', 'Governance and sign-off'] }
];

const diffMost = ["Focus on individual build tasks", "Limited exposure beyond one application", "Reactive problem solving", "Dependent on vendor guidance", "Limited programme visibility"];
const diffSilke = ["Clinical, operational and technical perspective", "Multi-application experience", "Programme-wide thinking", "Strong governance focus", "Leadership, mentoring and international delivery"];

const principles = [
  { ic: 'simple', t: 'Simplicity', d: 'Reduce unnecessary complexity.' },
  { ic: 'consist', t: 'Consistency', d: 'Standardise where possible.' },
  { ic: 'scale', t: 'Scalability', d: 'Support future growth.' },
  { ic: 'usab', t: 'Usability', d: 'Improve user adoption.' },
  { ic: 'maint', t: 'Maintainability', d: 'Reduce long-term support burden.' }
];

const baBefore = ["Workflow uncertainty", "Build quality concerns", "Governance challenges", "Inexperienced teams", "Testing failures", "Escalating programme risk"];
const baAfter = ["Clear workflow direction", "Improved build consistency", "Stronger governance", "Better stakeholder confidence", "Increased testing readiness", "Reduced delivery risk"];

// --- ICONS COMPONENT ---
const Icon = ({ name, className }) => {
  const commonProps = { viewBox: "0 0 24 24", fill: "none", className };
  switch (name) {
    case 'x': return <svg {...commonProps} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'check': return <svg {...commonProps} stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12l5 5L20 6"/></svg>;
    case 'flow': return <svg {...commonProps} stroke="#2A6049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="15" y="15" width="6" height="6" rx="1.5"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></svg>;
    case 'lead': return <svg {...commonProps} stroke="#2A6049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M5 7l2.5 2.5M19 7l-2.5 2.5M3 14h4M17 14h4M7 21l2-5h6l2 5"/></svg>;
    case 'gov': return <svg {...commonProps} stroke="#2A6049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 4.5-3.2 7.5-8 9-4.8-1.5-8-4.5-8-9V7z"/><path d="M9 12l2 2 4-4"/></svg>;
    case 'content': return <svg {...commonProps} stroke="#2A6049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
    case 'test': return <svg {...commonProps} stroke="#2A6049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/></svg>;
    case 'mentor': return <svg {...commonProps} stroke="#2A6049" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 4.5a3 3 0 0 1 0 6M19 20a4.5 4.5 0 0 0-3-4.2"/></svg>;
    case 'clinical': return <svg {...commonProps} stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>;
    case 'workflow': return <svg {...commonProps} stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M6 8.5v3a4 4 0 0 0 4 4h5.5"/></svg>;
    case 'ops': return <svg {...commonProps} stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V9M10 19V5M16 19v-7M20 19h-2M6 19H4"/></svg>;
    case 'tech': return <svg {...commonProps} stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7l-4 5 4 5M15 7l4 5-4 5"/></svg>;
    case 'simple': return <svg {...commonProps} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M9 12h6"/></svg>;
    case 'consist': return <svg {...commonProps} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>;
    case 'scale': return <svg {...commonProps} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V8M4 8l4-4M4 8l4 4M20 20h-8M20 20l-4-4M20 20l-4 4M4 20h7"/></svg>;
    case 'usab': return <svg {...commonProps} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v8a7 7 0 0 0 14 0V3"/><path d="M9 21h6"/><circle cx="12" cy="11" r="2"/></svg>;
    case 'maint': return <svg {...commonProps} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4.5a4 4 0 0 0-5.3 5.3L4 15v5h5l5.2-5.2a4 4 0 0 0 5.3-5.3l-2.6 2.6-2.1-.4-.4-2.1z"/></svg>;
    case 'swap': return <svg {...commonProps} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    default: return null;
  }
};

export default function App() {
  
const navigate = useNavigate();
  useEffect(() => {
    // Scroll reveal logic
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    
    document.querySelectorAll('.reveal').forEach(n => io.observe(n));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <style>{`
        
        :root{
          --silke-red:#E64013;
          --forest:#2A6049;
          --sage:#3D8A68;
          --mint:#F5FAF7;
          --tint:#E8F4EF;
          --night:#0F2318;
          --white:#ffffff;
          --ink:#0F2318;
          --muted:#4a6357;
          --line:#d7e7df;
          --display:'Comfortaa',cursive;
          --body:'Montserrat',sans-serif;
          --radius:18px;
          --shadow-sm:0 2px 10px rgba(15,35,24,.05);
          --shadow-md:0 18px 50px -20px rgba(15,35,24,.22);
          --shadow-lg:0 40px 90px -40px rgba(15,35,24,.40);
          --maxw:1360px;
        }
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{
          font-family:var(--body);
          color:var(--ink);
          background:var(--white);
          line-height:1.5;
          -webkit-font-smoothing:antialiased;
          overflow-x:hidden;
        }
        h1,h2,h3,h4{font-family:var(--display);font-weight:600;line-height:1.18;letter-spacing:-.01em}

        section{position:relative}

        /* ---------- buttons ---------- */
        /* ---------- eyebrow + section heads ---------- */
        .eyebrow{
          display:inline-flex;align-items:center;gap:10px;
          font-family:var(--body);font-weight:600;font-size:.72rem;
          letter-spacing:.22em;text-transform:uppercase;color:var(--silke-red);
          margin-bottom:18px;
        }
        .eyebrow::before{content:"";width:26px;height:2px;background:var(--silke-red);display:inline-block; }
        .section-pad{padding:108px 0; }
        .section-head{
  max-width:720px;
  margin:0 auto 56px;
  text-align:center;
}
        .section-head h2{font-size:clamp(1.9rem,3.4vw,2.7rem);margin-bottom:14px; }
        .section-head p{color:var(--muted);font-size:1.06rem;}

        /* ---------- reveal animation ---------- */
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.3,1)}
        .reveal.in{opacity:1;transform:none}
        .reveal[data-d="1"]{transition-delay:.08s}
        .reveal[data-d="2"]{transition-delay:.16s}
        .reveal[data-d="3"]{transition-delay:.24s}
        .reveal[data-d="4"]{transition-delay:.32s}
        .reveal[data-d="5"]{transition-delay:.40s}

        /* ============ HERO ============ */
        .hero{
          background:
            radial-gradient(900px 500px at 12% -5%, #ffffff 0%, rgba(255,255,255,0) 55%),
            radial-gradient(700px 480px at 95% 110%, var(--tint) 0%, rgba(232,244,239,0) 60%),
            var(--mint);
          padding:72px 0 96px;
          overflow:hidden;
        }
        .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
        .hero h1{font-size:clamp(2.2rem,4.4vw,3.5rem);font-weight:700;margin-bottom:22px}
        .hero h1 .accent{color:var(--silke-red)}
        .hero .lead{color:var(--muted);font-size:1.12rem;max-width:520px;margin-bottom:14px}
        .hero .lead-list{list-style:none;margin:22px 0 32px;max-width:520px}
        .hero .lead-list li{position:relative;padding-left:28px;margin-bottom:11px;color:#27433a;font-size:1rem}
        .hero .lead-list li::before{
          content:"";position:absolute;left:0;top:9px;width:10px;height:10px;border-radius:3px;
          background:var(--forest);transform:rotate(45deg)
        }
        .hero-cta{display:flex;gap:14px;flex-wrap:wrap}

        /* hero infographic */
        .hero-art{position:relative}
        .hero-art svg{width:100%;height:auto;display:block;filter:drop-shadow(0 30px 60px rgba(15,35,24,.16))}
        .flow-card{transition:transform .3s}
        .node-sat{cursor:default}
        @keyframes dashmove{to{stroke-dashoffset:-1000}}
        .flow-line{stroke-dasharray:7 7;animation:dashmove 14s linear infinite}
        @keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}
        .pulse{animation:pulse 3s ease-in-out infinite}
        @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}

        /* ============ TRUST BAR ============ */
        .trust{ background:#2F6F52;color:#eaf4ee;padding:42px 0}
        .trust .label{font-size:.74rem;letter-spacing:.2em;text-transform:uppercase;color:#9fcab6;margin-bottom:18px;text-align:center}
        .trust .countries{display:flex;justify-content:center;flex-wrap:wrap;gap:10px 30px;font-family:var(--display);font-weight:600;font-size:1.05rem;margin-bottom:26px}
        .trust .countries span{display:inline-flex;align-items:center;gap:14px}
        .trust .countries span:not(:last-child)::after{content:"";width:5px;height:5px;border-radius:50%;background:var(--silke-red)}
        .trust .orgs{display:flex;justify-content:center;flex-wrap:wrap;gap:10px 12px}
        .trust .orgs span{
          font-size:.82rem;padding:7px 16px;border:1px solid rgba(255,255,255,.22);
          border-radius:50px;color:#cfe6da;
        }

        /* ============ SECTION 1 — why design ============ */
        .why{background:var(--white)}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px}
        .panel{border-radius:var(--radius);padding:38px 36px;border:1px solid var(--line)}
        .panel h3{font-size:1.4rem;margin-bottom:6px}
        .panel .sub{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;margin-bottom:24px}
        .panel-bad{background:#fdf4f1;border-color:#f6d8cd}
        .panel-bad .sub{color:var(--silke-red)}
        .panel-good{background:var(--tint);border-color:#cbe5d8}
        .panel-good .sub{color:var(--forest)}
        .checklist{list-style:none}
        .checklist li{display:flex;align-items:flex-start;gap:12px;padding:9px 0;font-size:.97rem;border-bottom:1px dashed rgba(15,35,24,.08)}
        .checklist li:last-child{border-bottom:none}
        .mark{flex:none;width:22px;height:22px;border-radius:6px;display:grid;place-items:center;margin-top:1px}
        .mark svg{width:13px;height:13px}
        .panel-bad .mark{background:rgba(230,64,19,.12);color:var(--silke-red)}
        .panel-good .mark{background:rgba(42,96,73,.14);color:var(--forest)}

        /* ============ SECTION 2 — deliver cards ============ */
        .deliver{background:var(--white)}
        .card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .dcard{
          background:#fff;border:1px solid var(--line);border-radius:var(--radius);
          padding:32px 28px;transition:.3s cubic-bezier(.2,.7,.3,1);position:relative;overflow:hidden;
        }
        .dcard::before{content:"";position:absolute;left:0;top:0;height:4px;width:0;background:var(--silke-red);transition:width .35s}
        .dcard:hover{transform:translateY(-6px);box-shadow:var(--shadow-md);border-color:transparent}
        .dcard:hover::before{width:100%}
        .dcard .ic{width:52px;height:52px;border-radius:14px;background:var(--tint);display:grid;place-items:center;margin-bottom:18px;transition:.3s}
        .dcard:hover .ic{background:var(--forest)}
        .dcard .ic svg{width:26px;height:26px;stroke:var(--forest);transition:.3s}
        .dcard:hover .ic svg{stroke:#fff}
        .dcard h3{font-size:1.22rem;margin-bottom:10px}
        .dcard p{color:var(--muted);font-size:.94rem}
        .dcard ul{list-style:none;margin-top:6px;display:flex;flex-wrap:wrap;gap:6px}
        .dcard ul li{font-size:.78rem;background:var(--tint);color:var(--forest);padding:4px 11px;border-radius:50px;font-weight:500}
.dcard p,
.dcard ul{
  opacity:0;
  max-height:0;
  overflow:hidden;
  transition:all .35s ease;
}

.dcard:hover p,
.dcard:hover ul{
  opacity:1;
  max-height:300px;
}
        /* ============ SECTION 3 — philosophy timeline ============ */
.philo{
  background:var(--tint);
}

.timeline{
  position:relative;
  max-width:1000px;
  margin:40px auto 0;
}

.timeline::before{
  content:"";
  position:absolute;
  left:40px;
  top:20px;
  bottom:20px;
  width:3px;
  background:#2A6049;
}

.tstep{
  position:relative;
  padding-left:110px;
  padding-bottom:50px;
}

.tstep:last-child{
  padding-bottom:0;
}

.tstep .dot{
  position:absolute;
  left:18px;
  top:0;

  width:46px;
  height:46px;
  border-radius:50%;

  background:#fff;
  border:3px solid #2A6049;

  display:flex;
  align-items:center;
  justify-content:center;

  font-weight:700;
  font-size:18px;

  color:#2A6049;
  z-index:2;

  transition:all .3s ease;
}

.tstep:hover .dot{
  background:#E64013;
  border-color:#E64013;
  color:#fff;
}

.tstep h3{
  font-size:1.2rem;
  margin-bottom:8px;
  color:#071E14;
}

.tstep p{
  font-size:0.95rem;
  line-height:1.7;
  color:#556C61;
  max-width:700px;
}
        /* ============ SECTION 4 — expertise grid ============ */
        .expertise{background:var(--white)}
        .exp-cluster{margin-bottom:34px}
        .exp-cluster:last-child{margin-bottom:0}
        .exp-cluster .ehead{display:flex;align-items:center;gap:14px;margin-bottom:18px}
        .exp-cluster .ehead .tag{
          font-family:var(--display);font-weight:600;font-size:1.05rem;color:var(--forest);
        }
        .exp-cluster .ehead .rule{flex:1;height:1px;background:var(--line)}
        .exp-cluster .ehead .ic{width:34px;height:34px;border-radius:9px;background:var(--silke-red);display:grid;place-items:center}
        .exp-cluster .ehead .ic svg{width:18px;height:18px;stroke:#fff}
        .chips{
  display:flex;
  flex-wrap:wrap;
  gap:12px;

  margin-left:0;
  padding-left:0;

  justify-content:flex-start;
  align-items:flex-start;
}
        .chip{
          font-size:.88rem;font-weight:500;padding:9px 18px;border-radius:11px;
          background:var(--mint);border:1px solid var(--line);color:#264035;transition:.25s;
        }
        .chip:hover{background:var(--forest);color:#fff;border-color:var(--forest);transform:translateY(-2px)}

        /* ============ SECTION 5 — case studies ============ */
        .cases{background:var(--white);border-top:1px solid var(--line)}
        .case-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
        .ccard{
          border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);
          display:flex;flex-direction:column;transition:.3s;background:#fff;
        }
        .ccard:hover{transform:translateY(-6px);box-shadow:var(--shadow-md)}
        .ccard .ctop{padding:26px 26px 22px;background:linear-gradient(135deg,var(--forest),var(--sage));color:#fff;position:relative}
        .ccard .ctop .badge{font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:#bfe2d3;margin-bottom:10px;display:block}
        .ccard .ctop h3{font-size:1.2rem;color:#fff}
        .ccard .cbody{padding:24px 26px 28px;flex:1;display:flex;flex-direction:column}
        .ccard .cbody p{color:var(--muted);font-size:.92rem;margin-bottom:18px}
        .ccard .focus-label{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;font-weight:600;color:var(--silke-red);margin-bottom:10px}
        .ccard ul{list-style:none;margin-top:auto}
        .ccard ul li{position:relative;padding-left:22px;font-size:.9rem;margin-bottom:8px;color:#28433a}
        .ccard ul li::before{content:"";position:absolute;left:0;top:8px;width:8px;height:8px;border-radius:2px;background:var(--forest);transform:rotate(45deg)}

        /* ============ SECTION 6 — differentiation ============ */
        .diff{background:var(--night);color:#dfeee6}
        .diff .section-head h2{color:#fff}
        .diff .section-head p{color:#9fc1b2}
        .diff .eyebrow{color:#ff7a52}
        .diff .eyebrow::before{background:#ff7a52}
        .diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
        .dpanel{border-radius:var(--radius);padding:34px 32px}
        .dpanel h3{font-size:1.3rem;margin-bottom:20px;display:flex;align-items:center;gap:12px}
        .dpanel.most{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1)}
        .dpanel.most h3{color:#c6d8cf}
        .dpanel.silke{background:linear-gradient(150deg,rgba(61,138,104,.28),rgba(42,96,73,.12));border:1px solid rgba(61,138,104,.45)}

.dpanel.silke h3{
  color:#071E14;
}

.dpanel.silke h3 .tagdot{
  width:9px;
  height:9px;
  border-radius:50%;
  background:var(--silke-red);
}        .dpanel ul{list-style:none}
        .dpanel li{display:flex;gap:13px;align-items:flex-start;padding:10px 0;font-size:.96rem;border-bottom:1px solid rgba(255,255,255,.07)}
        .dpanel li:last-child{border-bottom:none}
        .dpanel li svg{flex:none;width:18px;height:18px;margin-top:3px}
        .dpanel.most li svg{stroke:#6d8a7d}
        .dpanel.silke li svg{stroke:#5fd19f}
        .diff-note{
  margin-top:34px;
  text-align:center;
  color:#000;
  max-width:760px;
  margin-left:auto;
  margin-right:auto;
  font-size:1.02rem;
}

.diff-note b{
  color:#000;
  font-weight:600;
}


.timeline{
  display:block !important;
  height:auto !important;
  max-height:none !important;
}

.tstep{
  display:block !important;
  width:100% !important;
  height:auto !important;
  clear:both;
}
        /* ============ SECTION 7 — principles ============ */
        .principles{background:var(--white)}
        .prin-grid{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
        .prin{flex:1;min-width:160px;text-align:center}
        .prin .ring{
          width:96px;height:96px;border-radius:50%;margin:0 auto 18px;display:grid;place-items:center;
          background:var(--tint);border:2px solid var(--line);transition:.3s;position:relative;
        }
        .prin:hover .ring{border-color:var(--silke-red);transform:translateY(-5px);background:#fff;box-shadow:var(--shadow-md)}
        .prin .ring svg{width:40px;height:40px;stroke:var(--forest);transition:.3s}
        .prin:hover .ring svg{stroke:var(--silke-red)}
        .prin h3{font-size:1.1rem;margin-bottom:6px}
        .prin p{color:var(--muted);font-size:.88rem}

        /* ============ SECTION 8 — before/after ============ */
        .beforeafter{background:var(--tint)}
        .ba-grid{display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:stretch;background:#fff;border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-sm);border:1px solid var(--line)}
        .ba-col{padding:38px 36px}
        .ba-col h3{font-size:1.25rem;margin-bottom:22px;display:flex;align-items:center;gap:12px}
        .ba-before{background:#fdf4f1}
        .ba-before h3{color:var(--silke-red)}
        .ba-after{background:var(--tint)}
        .ba-after h3{color:var(--forest)}
        .ba-mid{width:64px;display:grid;place-items:center;background:linear-gradient(var(--silke-red),#cf3810)}
        .ba-mid svg{width:24px;height:24px;stroke:#fff}
        .ba-col ul{list-style:none}
        .ba-col li{padding:11px 0;font-size:.97rem;border-bottom:1px dashed rgba(15,35,24,.1);display:flex;gap:11px;align-items:center}
        .ba-col li:last-child{border-bottom:none}
        .ba-col li .d{width:7px;height:7px;flex:none;border-radius:2px;transform:rotate(45deg)}
        .ba-before li .d{background:var(--silke-red)}
        .ba-after li .d{background:var(--forest)}

        /* ============ FINAL CTA ============ */
        .finalcta{ background:#2F6F52; 0%,var(--sage) 100%);color:#fff;text-align:center;overflow:hidden}
        .finalcta::before{content:"";position:absolute;inset:0;background:radial-gradient(600px 400px at 80% 120%,rgba(230,64,19,.25),transparent 60%);pointer-events:none}
        .finalcta .wrap{position:relative;z-index:2}
        .finalcta h2{font-size:clamp(2rem,3.6vw,2.9rem);color:#fff;margin-bottom:18px;font-weight:700}
        .finalcta p{color:#dff0e8;max-width:640px;margin:0 auto 34px;font-size:1.08rem}
        .finalcta .hero-cta{justify-content:center}

        /* ============ responsive ============ */
        @media(max-width:980px){
          .hero-grid{grid-template-columns:1fr;gap:44px}
          .hero-art{max-width:480px;margin:0 auto}
          .why-grid,.diff-grid{grid-template-columns:1fr}
          .card-grid,.case-grid{grid-template-columns:1fr 1fr}
        }
        @media(max-width:680px){
          .wrap{padding:0 22px}
          .section-pad{padding:74px 0}
          .card-grid,.case-grid{grid-template-columns:1fr}
          .ba-grid{grid-template-columns:1fr}
          .ba-mid{width:100%;height:54px}
          .ba-mid svg{transform:rotate(90deg)}
          .prin{min-width:120px}
          .hero-cta .btn,.finalcta .btn{flex:1;justify-content:center}
        }


      `}</style>

      {/* ============ HERO ============ */}
      <section className="hero">
         
        <div className="wrap hero-grid">
        
          <div className="hero-copy reveal">
             <br/>  
             <p className="hero-eyebrow">
                Design & Configuration
              </p>
          
            <h1>Designing clinical workflows that <span className="accent">work in practice</span></h1>
            <p className="lead">Successful EHR programmes depend on far more than configuration. They depend on design decisions made early — and made well.</p>
            <ul className="lead-list">
              <li>Clear workflow design grounded in how clinicians actually work</li>
              <li>Strong governance and build standards that hold up at scale</li>
              <li>Complex clinical requirements translated into maintainable solutions</li>
            </ul>
            <div className="hero-cta">
             
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
              {/* <a href="#cases" className="btn btn-ghost">View Project Experience</a> */}
            </div>
          </div>

          <div className="hero-art reveal" data-d="2">
            <svg viewBox="0 0 520 560" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Workflow design network: clinical teams through to operational success, surrounded by six interconnected design domains">
              <defs>
                <linearGradient id="spine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2A6049"/><stop offset="1" stopColor="#3D8A68"/>
                </linearGradient>
                <linearGradient id="redg" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#E64013"/><stop offset="1" stopColor="#ff6a40"/>
                </linearGradient>
                <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="6" stdDeviation="9" floodColor="#0F2318" floodOpacity="0.12"/>
                </filter>
              </defs>

              <g stroke="#9cc6b3" strokeWidth="1.6" fill="none" opacity=".8">
                <path className="flow-line" d="M260 96 L90 60"/>
                <path className="flow-line" d="M260 200 L70 200"/>
                <path className="flow-line" d="M260 304 L92 360"/>
                <path className="flow-line" d="M260 96 L430 60"/>
                <path className="flow-line" d="M260 200 L450 200"/>
                <path className="flow-line" d="M260 304 L428 360"/>
              </g>

              <g stroke="url(#spine)" strokeWidth="3" fill="none">
                <line x1="260" y1="118" x2="260" y2="158"/>
                <line x1="260" y1="200" x2="260" y2="240"/>
                <line x1="260" y1="282" x2="260" y2="322"/>
                <line x1="260" y1="364" x2="260" y2="404"/>
              </g>
              <g fill="#3D8A68">
                <path d="M260 162 l-5 -9 h10 z"/><path d="M260 244 l-5 -9 h10 z"/>
                <path d="M260 326 l-5 -9 h10 z"/><path d="M260 408 l-5 -9 h10 z"/>
              </g>

              <g fontFamily="Comfortaa, sans-serif" textAnchor="middle">
                <g className="flow-card" filter="url(#soft)">
                  <rect x="160" y="66" width="200" height="46" rx="12" fill="#2A6049"/>
                  <text x="260" y="94" fill="#fff" fontSize="15" fontWeight="600">Clinical Teams</text>
                </g>
                <g className="flow-card" filter="url(#soft)">
                  <rect x="160" y="158" width="200" height="46" rx="12" fill="#fff" stroke="#cbe5d8"/>
                  <text x="260" y="186" fill="#2A6049" fontSize="15" fontWeight="600">Workflow Design</text>
                </g>
                <g className="flow-card" filter="url(#soft)">
                  <rect x="160" y="240" width="200" height="46" rx="12" fill="#fff" stroke="#cbe5d8"/>
                  <text x="260" y="268" fill="#2A6049" fontSize="15" fontWeight="600">Configuration</text>
                </g>
                <g className="flow-card" filter="url(#soft)">
                  <rect x="160" y="322" width="200" height="46" rx="12" fill="#fff" stroke="#cbe5d8"/>
                  <text x="260" y="350" fill="#2A6049" fontSize="15" fontWeight="600">Testing</text>
                </g>
                <g className="flow-card" filter="url(#soft)">
                  <rect x="160" y="404" width="200" height="50" rx="12" fill="url(#redg)"/>
                  <text x="260" y="434" fill="#fff" fontSize="15" fontWeight="700">Operational Success</text>
                </g>
              </g>

              <g fontFamily="Montserrat, sans-serif" textAnchor="middle" fontSize="11" fontWeight="600">
                <g><circle className="pulse" cx="62" cy="58" r="9" fill="#E64013"/><circle cx="62" cy="58" r="4" fill="#fff"/><text x="62" y="34" fill="#2A6049">Clinical</text><text x="62" y="47" fill="#2A6049">Workflows</text></g>
                <g><circle className="pulse" cx="48" cy="200" r="9" fill="#2A6049"/><circle cx="48" cy="200" r="4" fill="#fff"/><text x="46" y="180" fill="#2A6049">Operational</text></g>
                <g><circle className="pulse" cx="64" cy="372" r="9" fill="#2A6049"/><circle cx="64" cy="372" r="4" fill="#fff"/><text x="62" y="398" fill="#2A6049">Governance</text></g>
                <g><circle className="pulse" cx="458" cy="58" r="9" fill="#2A6049"/><circle cx="458" cy="58" r="4" fill="#fff"/><text x="458" y="40" fill="#2A6049">Reporting</text></g>
                <g><circle className="pulse" cx="472" cy="200" r="9" fill="#E64013"/><circle cx="472" cy="200" r="4" fill="#fff"/><text x="472" y="180" fill="#2A6049">Integration</text></g>
                <g><circle className="pulse" cx="456" cy="372" r="9" fill="#2A6049"/><circle cx="456" cy="372" r="4" fill="#fff"/><text x="456" y="398" fill="#2A6049">User</text><text x="456" y="411" fill="#2A6049">Experience</text></g>
              </g>

              <text x="260" y="510" textAnchor="middle" fontFamily="Montserrat" fontSize="12" fill="#6d8a7d">Six domains. One coherent design.</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="trust">
        <div className="wrap">
          <div className="label reveal">Experience supporting healthcare organisations across</div>
          <div className="countries reveal" data-d="1">
            <span>UK</span><span>Netherlands</span><span>Belgium</span><span>Ireland</span><span>United States</span>
          </div>
          <div className="orgs reveal" data-d="2">
            <span>Academic Medical Centres</span>
            <span>NHS Trusts</span>
            <span>Community Services</span>
            <span>Cancer Services</span>
            <span>Research Hospitals</span>
            <span>Private Healthcare</span>
          </div>
        </div>
      </section>

      {/* ============ SECTION 1 — WHY DESIGN MATTERS ============ */}
      <section className="deliver section-pad">
        <div className="wrap">
          <div className="section-head reveal">
                       <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
          Why EHR Design Matters
        </span>
            
            <h2>Most problems aren't born in testing. They're born in design.</h2>
            <p>When workflow decisions are rushed or poorly governed, the cost surfaces later — in failed test cycles, expensive optimisation, and clinicians who stop trusting the system.</p>
          </div>
          <div className="why-grid">
            <div className="panel panel-bad reveal" data-d="1">
              <span className="sub">The cost of poor design</span>
              <h3>What goes wrong</h3>
              <ul className="checklist">
                {badItems.map((item, idx) => (
                  <li key={idx}><span className="mark"><Icon name="x" /></span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel panel-good reveal" data-d="2">
              <span className="sub">A better approach</span>
              <h3>What good design requires</h3>
              <ul className="checklist">
                {goodItems.map((item, idx) => (
                  <li key={idx}><span className="mark"><Icon name="check" /></span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2 — WHAT I DELIVER ============ */}
      <section className="deliver section-pad">
        <div className="wrap">
          <div className="section-head reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
          What I Deliver
        </span>
           
            <h2>Design leadership across the full programme</h2>
            <p>Not analysis. Not build alone. A view that connects clinical workflow, operations, governance, reporting, integration and architecture.</p>
          </div>
          <div className="card-grid">
            {deliver.map((c, i) => (
              <div className="dcard reveal" data-d={(i % 3) + 1} key={i}>
                <div className="ic"><Icon name={c.ic} /></div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
                {c.tags && (
                  <ul>
                    {c.tags.map((t, tidx) => <li key={tidx}>{t}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3 — PHILOSOPHY ============ */}
      <section className="philo section-pad">
        <div className="wrap">
          <div className="section-head reveal">
             <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
          My Design Philosophy
        </span>
            
            <h2>Designing for long-term success</h2>
            <p>A repeatable approach that reduces complexity instead of adding to it.</p>
          </div>
          <div className="timeline">
            {philosophy.map((s, i) => (
              <div className="tstep reveal" data-d={Math.min(i + 1, 5)} key={i}>
                <span className="dot">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4 — EXPERTISE ============ */}
      <section className="expertise section-pad">
        <div className="wrap">
          <div className="section-head reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
          Areas of Design Expertise
        </span>
            
            <h2>Where I work, in detail</h2>
            <p>Hands-on design and configuration experience across clinical, workflow, operational and technical domains.</p>
          </div>
          <div>
            {clusters.map((c, i) => (
              <div className="exp-cluster reveal" data-d={i + 1} key={i}>
                <div className="ehead">
                  <span className="ic"><Icon name={c.ic} /></span>
                  <span className="tag">{c.tag}</span>
                  <span className="rule"></span>
                </div>
                <div className="chips">
                  {c.items.map((x, xidx) => <span className="chip" key={xidx}>{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5 — CASE STUDIES ============ */}
      <section className="cases section-pad" id="cases">
        <div className="wrap">
          <div className="section-head reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Design Challenges Solved
        </span>
          
            <h2>Selected programme work</h2>
            <p>Real delivery across complex, multi-organisation clinical environments.</p>
          </div>
          <div className="case-grid">
            {cases.map((c, i) => (
              <div className="ccard reveal" data-d={i + 1} key={i}>
                <div className="ctop">
                  <span className="badge">{c.badge}</span>
                  <h3>{c.t}</h3>
                </div>
                <div className="cbody">
                  <p>{c.d}</p>
                  <div className="focus-label">Focus areas</div>
                  <ul>
                    {c.focus.map((f, fidx) => <li key={fidx}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 6 — DIFFERENTIATION ============ */}
      <section className="deliver section-pad">
        <div className="wrap">
          <div className="section-head reveal">
               <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         What Makes Silke IT Different
        </span>
            <h2>A different vantage point</h2>
            <p>Most engagements bring a builder. This one brings a programme-wide perspective.</p>
          </div>
          <div className="diff-grid">
            <div className="dpanel silke reveal" data-d="1">
              <h3>Most Consultants</h3>
              <ul>
                {diffMost.map((t, i) => (
                  <li key={i}><Icon name="x" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="dpanel silke reveal" data-d="2">
              <h3><span className="tagdot"></span> Silke IT</h3>
              <ul>
                {diffSilke.map((t, i) => (
                  <li key={i}><Icon name="check" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="diff-note reveal" data-d="3">My experience spans <b>design, implementation, optimisation, reporting, integration, infrastructure and programme leadership</b> — not configuration alone.</p>
        </div>
      </section>

      {/* ============ SECTION 7 — PRINCIPLES ============ */}
      <section className="principles section-pad">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: '640px' }}>
  <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Design Principles
        </span>
            <h2>Five rules I design by</h2>
          </div>
          <div className="prin-grid">
            {principles.map((p, i) => (
              <div className="prin reveal" data-d={i + 1} key={i}>
                <div className="ring"><Icon name={p.ic} /></div>
                <h3>{p.t}</h3><p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 8 — BEFORE / AFTER ============ */}
      <section className="beforeafter section-pad">
        <div className="wrap">
          <div className="section-head reveal">
                        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Why Organisations Engage Me
        </span>
            <h2>From uncertainty to delivery confidence</h2>
            <p>The shift most teams are looking for when they bring me in.</p>
          </div>
          <div className="ba-grid reveal" data-d="1">
            <div className="ba-col ba-before">
              <h3>Before</h3>
              <ul>
                {baBefore.map((t, i) => <li key={i}><span className="d"></span>{t}</li>)}
              </ul>
            </div>
            <div className="ba-mid">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </div>
            <div className="ba-col ba-after">
              <h3>After</h3>
              <ul>
                {baAfter.map((t, i) => <li key={i}><span className="d"></span>{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="finalcta section-pad" id="contact">
        <div className="wrap">
          <h2 className="reveal">Need an experienced design lead?</h2>
          <p className="reveal" data-d="1">Whether you're planning a new implementation, reviewing existing workflows, or preparing for a critical programme milestone — I can help ensure your design decisions hold up for both go-live and the years after it.</p>
          <div className="hero-cta reveal" data-d="2">
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
            {/* <a href="/contact" className="btn btn-outline-light">Book a Consultation</a> */}
          </div>
        </div>
      </section>
    </>
  );
}