import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
const styles = `

  :root {
    --red: #E64013;
    --red-deep: #C8350F;
    --forest: #2A6049;
    --sage: #3D8A68;
    --mint: #F5FAF7;
    --tint: #E8F4EF;
    --night: #0F2318;
    --white: #FFFFFF;
    --ink: #16261D;
    --muted: #4A5A50;
    --line: #DCE8E2;
    --shadow: 0 1px 2px rgba(15,35,24,.04),0 8px 24px rgba(15,35,24,.06);
    --shadow-lg: 0 24px 60px rgba(15,35,24,.12);
    --radius: 18px;
    --maxw:1360px;
  }
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--ink);
    background: var(--white);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  
  .eyebrow {
    font-family: 'Comfortaa', cursive;
    font-weight: 600;
    letter-spacing: .22em;
    text-transform: uppercase;
    font-size: .72rem;
    color: var(--sage);
    display: inline-flex; align-items: center; gap: 10px;
  }
  .eyebrow::before { content: ""; width: 26px; height: 2px; background: var(--red); border-radius: 2px; }
  .eyebrow.on-dark { color: #9CCBB6; }
  
  h1,h2,h3,h4,.display{font-family:'Comfortaa',cursive;color:var(--ink);line-height:1.18;letter-spacing:-.01em}
  h1 { font-size: clamp(2.5rem, 4.9vw, 3.9rem); font-weight: 500; }
  h2 { font-size: clamp(1.7rem, 3.2vw, 2.5rem); font-weight: 700; }
  h3 { font-size: 1.18rem; font-weight: 700; }
  p { color: var(--muted);  }
  a { text-decoration: none; color: inherit; }
  section { position: relative; }

  .btn { display: inline-flex; align-items: center; gap: 9px; font-weight: 600; font-size: .92rem; padding: 14px 26px; border-radius: 44px; cursor: pointer; transition: .24s; border: 1.5px solid transparent; }
  .btn-primary { background: var(--red); color: #fff; box-shadow: 0 10px 26px rgba(230,64,19,.26); }
  .btn-primary:hover { background: var(--red-deep); transform: translateY(-2px); box-shadow: 0 16px 34px rgba(230,64,19,.32); }
  .btn-ghost { background: transparent; color: var(--forest); border-color: var(--line); }
  .btn-ghost:hover { border-color: var(--forest); background: rgba(42,96,73,.04); }
  .btn-light { background: #fff; color: var(--red); }
  .btn-light:hover { transform: translateY(-2px); box-shadow: var(--shadow-lg); }
  .btn svg { width: 16px; height: 16px; transition: transform .24s; }
  .btn:hover svg { transform: translateX(3px); }

  .hero { background: var(--mint); padding: 100px 0 96px; overflow: hidden; }
  .hero-grid { display: grid; grid-template-columns: 1.3fr .7fr; gap: 60px; align-items: center; }
  .hero-copy { display: flex; flex-direction: column; }
  .hero h1 {
  margin: 0 0 22px;
  max-width: 25ch;
}
  .hero .lead { font-size: 1.12rem; color: var(--ink); max-width: 66ch; margin-bottom: 14px; font-weight: 500; }
  .hero .sub { font-size: 1rem; max-width: 70ch; margin-bottom: 34px; font-weight: 400; }
  .hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
  .hero-visual { position: relative; display: flex; justify-content: center; align-items: center; min-height: 420px; }

  .sec { padding: 96px 0; }
  .sec-head {
  max-width: 1100px;
  margin-bottom: 54px;
  text-align: center;
}
  .sec-head.center { margin-left: auto; margin-right: auto; text-align: center; }
  .sec-head h2 { margin: 16px 0 14px;  }
  .sec-head p { font-size: 1.05rem; }
  .bg-tint { background: var(--tint); }
  .bg-forest { background: var(--forest); }
  .bg-forest h2, .bg-forest h3 { color: #fff; }
  .bg-forest p { color: #CFE3D9; }

  .journey { display: flex; align-items: stretch; gap: 0; margin: 0 auto 64px; max-width: 1000px; flex-wrap: wrap; justify-content: center; }
  .j-step { flex: 1; min-width: 120px; text-align: center; position: relative; padding: 0 6px; }
  .j-dot { width: 54px; height: 54px; border-radius: 50%; margin: 0 auto 14px; display: flex; align-items: center; justify-content: center; background: var(--tint); border: 2px solid var(--line); position: relative; z-index: 2; transition: .3s; }
  .j-dot svg { width: 24px; height: 24px; stroke: var(--forest); }
  .j-step .j-label { font-weight: 600; font-size: .92rem; color: var(--night); }
  .j-step .j-note { font-size: .76rem; color: var(--muted); margin-top: 4px; }
  .j-line { position: absolute; top: 27px; left: 50%; width: 100%; height: 2px; background: var(--line); z-index: 1; }
  .j-step:last-child .j-line { display: none; }
  .j-step.peak .j-dot { background: var(--red); border-color: var(--red); box-shadow: 0 8px 22px rgba(230,64,19,.3); }
  .j-step.peak .j-dot svg { stroke: #fff; }
  .j-step.peak .j-label { color: var(--red); }
  .j-step.goal .j-dot { background: var(--forest); border-color: var(--forest); }
  .j-step.goal .j-dot svg { stroke: #fff; }
  .j-step.goal .j-label { color: var(--forest); }

  .grid { display: grid; gap: 22px; }
  .g3 { grid-template-columns: repeat(3, 1fr); }
  .g2 { grid-template-columns: repeat(2, 1fr); }
  .card {
    background: #fff; border: 1px solid var(--line); border-radius: var(--radius);
    padding: 30px; transition: .3s; position: relative; overflow: hidden;
  }
  .card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); border-color: transparent; }
  .card .ic { width: 48px; height: 48px; border-radius: 13px; background: var(--tint); display: flex; align-items: center; justify-content: center; margin-bottom: 18px; transition: .3s; }
  .card .ic svg { width: 24px; height: 24px; stroke: var(--forest); fill: none; stroke-width: 1.7; }
  .card:hover .ic { background: var(--red); }
  .card:hover .ic svg { stroke: #fff; }
  .card h3 { margin-bottom: 9px; font-weight: 700; }
  .card p { font-size: .92rem; font-weight: 400; }
  .card.on-tint { background: #fff; }

  .support { max-width: 60ch; margin: 48px auto 0; text-align: center; font-size: 1.05rem; color: var(--ink); font-weight: 500; line-height: 1.7; }
  .support span { color: var(--muted); font-weight: 400; }

  .diff-intro {
  max-width: 900px;
  margin: 0 auto 50px;
  text-align: center;
}
  .diff-intro .big { font-size: 1.35rem; font-weight: 600; color: var(--night); line-height: 1.45; margin-bottom: 16px; }
  .diff-intro .big em { color: var(--red); font-style: normal; }

  /* capability cards w/ chips */
  .cap-card .chips { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 16px; }
  .chip { font-size: .74rem; font-weight: 500; color: var(--forest); background: var(--tint); border-radius: 30px; padding: 5px 12px; border: 1px solid var(--line); }

  .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .stat-list { display: grid; grid-template-columns: 1fr 1fr; gap: 30px 24px; }
  .stat { border-left: 3px solid var(--red); padding-left: 18px; }
  .stat .num { font-size: 2.7rem; font-weight: 800; color: var(--night); line-height: 1; font-family: 'Montserrat', sans-serif; }
  .stat .num small { font-size: 1.4rem; color: var(--red); vertical-align: super; font-weight: 700; }
  .stat .lbl { font-size: .84rem; color: var(--muted); margin-top: 6px; font-weight: 500; }
  .stat.wide { grid-column: 1/-1; border-left-color: var(--forest); }
  .stat.wide .num { font-size: 1.55rem; color: var(--forest); }
  .stat-copy h3 { font-size: 1.5rem; margin-bottom: 18px; }
  .stat-copy ul { list-style: none; margin: 18px 0 0; }
  .stat-copy li { position: relative; padding-left: 26px; margin-bottom: 11px; font-size: .96rem; color: var(--ink); font-weight: 400; }
  .stat-copy li::before { content: ""; position: absolute; left: 0; top: 9px; width: 9px; height: 9px; border-radius: 50%; background: var(--sage); }

  .insight { padding: 104px 0; }
  .insight-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 56px; align-items: start; margin-bottom: 54px; }
  .insight-h { font-size: clamp(1.8rem, 3vw, 2.45rem); line-height: 1.18; color: #fff; max-width: 15ch; margin-top: 18px; }
  .insight-lead { font-size: 1.2rem; font-weight: 600; color: #fff; margin-bottom: 16px; line-height: 1.5; }
  .insight-sub { color: #CFE3D9; font-size: 1rem; line-height: 1.7; font-weight: 400; }
  .chain { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; padding: 24px 0; border-top: 1px solid rgba(255,255,255,.14); border-bottom: 1px solid rgba(255,255,255,.14); }
  .chain-item { display: flex; align-items: center; gap: 11px; font-family: 'Comfortaa', cursive; font-weight: 600; font-size: .92rem; color: #fff; padding: 6px 26px; position: relative; }
  .chain-item:not(:last-child)::after { content: ""; width: 1px; height: 18px; background: rgba(255,255,255,.2); position: absolute; right: 0; top: 50%; transform: translateY(-50%); }
  .chain-dot { width: 9px; height: 9px; border-radius: 50%; background: #7FC3A4; box-shadow: 0 0 0 4px rgba(127,195,164,.16); flex-shrink: 0; }
  .chain-caption { text-align: center; color: #9CCBB6; font-size: .96rem; margin-top: 26px; font-weight: 500; }
  @media(max-width: 920px) { .insight-grid { grid-template-columns: 1fr; gap: 26px; margin-bottom: 42px; } .insight-h { margin-top: 0; } }
  @media(max-width: 600px) { .chain-item { padding: 9px 16px; font-size: .84rem; } .chain-item:not(:last-child)::after { display: none; } }

  .ev-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
  .ev { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 32px; transition: .3s; position: relative; }
  .ev::before { content: ""; position: absolute; top: 0; left: 32px; right: 32px; height: 3px; background: linear-gradient(90deg, var(--forest), var(--sage)); border-radius: 0 0 3px 3px; }
  .ev:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }
  .ev .org { font-size: .78rem; font-weight: 600; letter-spacing: .04em; color: var(--sage); text-transform: uppercase; }
  .ev h3 { margin: 7px 0 18px; font-size: 1.2rem; }
  .ev .metric { display: flex; align-items: baseline; gap: 10px; background: var(--tint); border-radius: 12px; padding: 14px 16px; margin-bottom: 16px; }
  .ev .metric .mv { font-size: 1.7rem; font-weight: 800; color: var(--red); font-family: 'Montserrat'; }
  .ev .metric .mt { font-size: .84rem; color: var(--ink); font-weight: 500; }
  .ev ul { list-style: none; }
  .ev li { position: relative; padding-left: 22px; font-size: .9rem; color: var(--muted); margin-bottom: 8px; font-weight: 400; }
  .ev li::before { content: ""; position: absolute; left: 0; top: 8px; width: 6px; height: 6px; border-radius: 50%; background: var(--sage); }

  .flow { display: flex; align-items: flex-start; justify-content: space-between; gap: 0; max-width: 1040px; margin: 0 auto; flex-wrap: wrap; }
  .f-step { flex: 1; min-width: 150px; text-align: center; padding: 0 10px; position: relative; }
  .f-num { width: 60px; height: 60px; border-radius: 50%; background: #fff; border: 2px solid var(--sage); color: var(--forest); font-family: 'Comfortaa', cursive; font-weight: 700; font-size: 1.25rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; position: relative; z-index: 2; transition: .3s; flex-shrink: 0; }
  .f-step:hover .f-num { background: var(--forest); color: #fff; border-color: var(--forest); }
  .f-arrow { position: absolute; top: 28px; right: -12px; color: var(--sage); font-size: 1.3rem; z-index: 1; }
  .f-step:last-child .f-arrow { display: none; }
  .f-step h3 { font-size: 1.05rem; margin-bottom: 6px; font-weight: 700; }
  .f-step p { font-size: .85rem; font-weight: 400; }
  .f-content { display: flex; flex-direction: column; }
  .flow-note { text-align: center; max-width: 54ch; margin: 48px auto 0; font-size: 1rem; color: var(--ink); font-weight: 500; }

  .cta {  background:#2F6F52; text-align: center; padding: 92px 0; position: relative; overflow: hidden; }
  .cta::before { width: 340px; height: 340px; top: -120px; left: -80px; }
  .cta::after { width: 260px; height: 260px; bottom: -120px; right: -60px; }
  .cta .wrap { position: relative; z-index: 2; }
  .cta h2 { color: #fff; max-width:90ch; margin: 0 auto 20px; }
  .cta p { color: rgba(255,255,255,.92); max-width: 90ch; margin: 0 auto 34px; font-size: 1.05rem; font-weight: 400; }


  
  .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.in { opacity: 1; transform: none; }
  .reveal[data-d="1"] { transition-delay: .08s; }
  .reveal[data-d="2"] { transition-delay: .16s; }
  .reveal[data-d="3"] { transition-delay: .24s; }
  .reveal[data-d="4"] { transition-delay: .32s; }
  .reveal[data-d="5"] { transition-delay: .4s; }

  .node-pulse { transform-box: fill-box; transform-origin: center; }
  @keyframes dash { to { stroke-dashoffset: -26; } }
  @keyframes floaty { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
  @keyframes coreglow { 0%, 100% { opacity: .35; r: 60; } 50% { opacity: .6; r: 66; } }
  .hero-svg .flow-line { stroke-dasharray: 5 8; animation: dash 1.4s linear infinite; }
  .hero-svg .orbit { animation: floaty 6s ease-in-out infinite; }
  .hero-svg .orbit:nth-child(odd) { animation-duration: 7.5s; animation-delay: -2s; }
  .hero-svg .core-glow { animation: coreglow 4s ease-in-out infinite; }

  @media(max-width: 920px) {
    /* Move graphic below text */
    .hero-grid { grid-template-columns: 1fr; gap: 40px; }
    .hero-copy { order: 1; }
    .hero-visual { min-height: 340px; order: 2; } 
    .stats-grid { grid-template-columns: 1fr; gap: 44px; }
    .ev-grid, .g2 { grid-template-columns: 1fr; }
    .g3 { grid-template-columns: repeat(2, 1fr); }
  }
  @media(max-width: 600px) {
    .g3 { grid-template-columns: 1fr; }
    .stat-list { grid-template-columns: 1fr; gap: 24px; } /* Stack stat numbers */
    .hero { padding: 120px 0 70px; }
    .sec { padding: 68px 0; }
    
    /* Journey Timeline - Mobile Fix */
    .journey { display: flex; flex-direction: column; gap: 24px; align-items: flex-start; }
    .j-step { min-width: 100%; display: flex; align-items: flex-start; gap: 16px; text-align: left; padding: 0; }
    .j-dot { margin: 0; flex-shrink: 0; }
    .j-line { display: none; }
    
    .j-text { display: flex; flex-direction: column; padding-top: 8px; } /* Align text with dot */

    /* Framework Flow - Mobile Fix */
    .flow { display: flex; flex-direction: column; gap: 20px; }
    .f-arrow { display: none; }
    .f-step { min-width: 100%; display: flex; align-items: flex-start; gap: 16px; text-align: left; margin-bottom: 0; padding: 0; }
    .f-num { margin: 0; }
    .f-content { padding-top: 6px; } /* Push text down slightly to align with circle */
    
    /* Reduce bold weights globally for mobile */
    .hero .lead, .support { font-weight: 400; }
    h1 { font-weight: 700; }
    h2 { font-weight: 600; }
    .stat .lbl, .insight-lead, .card p { font-weight: 400; }
    .ev .metric .mt { font-weight: 400; }
  }
  @media(prefers-reduced-motion: reduce) {
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
    padding: 0 20px;
  }
}
`;

export default function Optimisation() {
  const navigate = useNavigate();
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const elements = document.querySelectorAll('.reveal');
    const countEls = document.querySelectorAll('[data-count]');
    

    // Reveal Observer
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach((el) => io.observe(el));

    // Count-up Observer
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.getAttribute('data-count');
        cio.unobserve(el);
        
        if (reduce) {
          el.childNodes[0].nodeValue = target;
          return;
        }
        
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) {
            cur = target;
            clearInterval(t);
          }
          el.childNodes[0].nodeValue = cur;
        }, 26);
      });
    }, { threshold: 0.6 });

    countEls.forEach((el) => cio.observe(el));

    return () => {
      io.disconnect();
      cio.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {}
      <header className="hero">
        <div className="wrap hero-grid">
       
          <div className="hero-copy">
               <br/>
             <p className="hero-eyebrow">
               Optimisation
              </p>
           
            <h1 className="reveal" data-d="1">Optimising EHR performance beyond configuration</h1>
            <p className="lead reveal" data-d="2">Your EHR is live — but clinicians stay frustrated, reporting lacks clarity, workflows feel inefficient, and improvement requests keep growing.</p>
            <p className="sub reveal" data-d="3">I help healthcare organisations find the root causes behind these challenges and deliver practical, measurable improvements across workflows, data, reporting and operations.</p>
            <div className="hero-cta reveal" data-d="4">
              
                   <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Discuss your optimisation challenges"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Discuss your optimisation challenges
</button>
              {/* <a href="#services" className="btn btn-ghost">View services</a> */}
            </div>
          </div>
          <div className="hero-visual reveal" data-d="2">
            <svg className="hero-svg" viewBox="0 0 460 440" width="100%" style={{ maxWidth: '480px' }} aria-label="EHR platform connected to clinical workflows, data and analytics, reporting, integration, governance and operations">
              <defs>
                <radialGradient id="coreG" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3D8A68" /><stop offset="100%" stopColor="#2A6049" />
                </radialGradient>
                <linearGradient id="ln" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3D8A68" /><stop offset="100%" stopColor="#9CCBB6" />
                </linearGradient>
              </defs>
              {/* connecting lines */}
              <g stroke="url(#ln)" strokeWidth="1.6" fill="none" opacity=".55">
                <line className="flow-line" x1="230" y1="220" x2="230" y2="70" />
                <line className="flow-line" x1="230" y1="220" x2="395" y2="135" />
                <line className="flow-line" x1="230" y1="220" x2="395" y2="305" />
                <line className="flow-line" x1="230" y1="220" x2="230" y2="370" />
                <line className="flow-line" x1="230" y1="220" x2="65" y2="305" />
                <line className="flow-line" x1="230" y1="220" x2="65" y2="135" />
              </g>
              {/* core */}
              <circle className="core-glow" cx="230" cy="220" r="60" fill="url(#coreG)" opacity=".35" />
              <circle cx="230" cy="220" r="50" fill="url(#coreG)" />
              <text x="230" y="214" textAnchor="middle" fill="#fff" fontFamily="Montserrat" fontWeight="700" fontSize="14">EHR</text>
              <text x="230" y="232" textAnchor="middle" fill="#CFE3D9" fontFamily="Montserrat" fontWeight="600" fontSize="10">Platform</text>
              {/* satellite nodes */}
              <g fontFamily="Montserrat" fontWeight="600" fontSize="10.5" fill="#16261D">
                <g className="orbit"><circle cx="230" cy="62" r="34" fill="#fff" stroke="#DCE8E2" /><text x="230" y="59" textAnchor="middle">Clinical</text><text x="230" y="72" textAnchor="middle">Workflows</text></g>
                <g className="orbit"><circle cx="395" cy="128" r="34" fill="#fff" stroke="#DCE8E2" /><text x="395" y="125" textAnchor="middle">Data &amp;</text><text x="395" y="138" textAnchor="middle">Analytics</text></g>
                <g className="orbit"><circle cx="395" cy="312" r="34" fill="#fff" stroke="#DCE8E2" /><text x="395" y="316" textAnchor="middle">Reporting</text></g>
                <g className="orbit"><circle cx="230" cy="378" r="34" fill="#fff" stroke="#DCE8E2" /><text x="230" y="382" textAnchor="middle">Integration</text></g>
                <g className="orbit"><circle cx="65" cy="312" r="34" fill="#fff" stroke="#DCE8E2" /><text x="65" y="316" textAnchor="middle">Operations</text></g>
                <g className="orbit"><circle cx="65" cy="128" r="34" fill="#fff" stroke="#DCE8E2" /><text x="65" y="131" textAnchor="middle">Governance</text></g>
              </g>
            </svg>
          </div>
        </div>
      </header>

      {}
      <section className="sec" id="services">
        <div className="wrap">
          <div className="sec-head center reveal">
                   <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         The Pattern
        </span>
         
            <h2>Most programmes reach a plateau</h2>
            <p>Performance climbs through implementation and stabilisation, then levels off. That plateau — not the go-live — is where lasting value is often won or lost.</p>
          </div>

          <div className="journey reveal" data-d="1">
            <div className="j-step">
              <div className="j-line"></div><div className="j-dot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M3 21h18M5 21V8l7-5 7 5v13" /></svg></div>
              <div className="j-text"><div className="j-label">Implementation</div></div>
            </div>
            <div className="j-step">
              <div className="j-line"></div><div className="j-dot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M12 2v6m0 0l3-3m-3 3L9 5M5 12h14M7 12v9h10v-9" /></svg></div>
              <div className="j-text"><div className="j-label">Go-Live</div></div>
            </div>
            <div className="j-step">
              <div className="j-line"></div><div className="j-dot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M3 12h4l3-7 4 14 3-7h4" /></svg></div>
              <div className="j-text"><div className="j-label">Stabilisation</div></div>
            </div>
            <div className="j-step peak">
              <div className="j-line"></div><div className="j-dot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M4 18L9 9l4 5 3-4 4 8M4 6h16" /></svg></div>
              <div className="j-text"><div className="j-label">Performance Plateau</div><div className="j-note">Improvements stall</div></div>
            </div>
            <div className="j-step goal">
              <div className="j-line"></div><div className="j-dot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M4 20L20 4M14 4h6v6" /></svg></div>
              <div className="j-text"><div className="j-label">Optimisation</div><div className="j-note">Momentum returns</div></div>
            </div>
          </div>
<br/><br/><br/><br/>
          <div className="sec-head center reveal" style={{ marginBottom: '34px' }}>                  
             <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Common Symptoms
        </span>
        </div>
          <div className="grid g3">
            <div className="card reveal" data-d="1"><div className="ic"><svg viewBox="0 0 24 24"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg></div><h3>Clinical frustration</h3><p>Excessive clicks and inefficient workflows that slow clinicians down.</p></div>
            <div className="card reveal" data-d="2"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 3v18h18M7 15l4-4 3 3 5-6" /></svg></div><h3>Reporting gaps</h3><p>The data exists, but meaningful insight is difficult to obtain.</p></div>
            <div className="card reveal" data-d="3"><div className="ic"><svg viewBox="0 0 24 24"><path d="M9 18l-6-6 6-6M15 6l6 6-6 6" /></svg></div><h3>Poor adoption</h3><p>Teams develop workarounds outside the EHR.</p></div>
            <div className="card reveal" data-d="1"><div className="ic"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h12M4 18h8M18 14v6m3-3h-6" /></svg></div><h3>Growing backlogs</h3><p>Enhancement requests continue to increase faster than they can be cleared.</p></div>
            <div className="card reveal" data-d="2"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 9v4m0 4h.01M10.3 3.86l-8 14A2 2 0 004 21h16a2 2 0 001.71-3.14l-8-14a2 2 0 00-3.42 0z" /></svg></div><h3>Data quality concerns</h3><p>Inconsistent or unreliable information undermines trust.</p></div>
            <div className="card reveal" data-d="3"><div className="ic"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div><h3>Governance challenges</h3><p>Competing priorities and unclear ownership of decisions.</p></div>
          </div>

          <p className="support reveal" data-d="1">These issues rarely come from a single application or team.<br /><span>They build up over years of configuration decisions, workflow changes, inconsistent governance and operational pressure that gradually erode efficiency.</span></p>
        </div>
      </section>

      {}
      <section className="sec bg-tint">
        <div className="wrap">
          <div className="diff-intro reveal">
                 <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         The Difference
        </span>
           
            <h2 style={{ margin: '16px 0 24px' }}>Looking beyond the symptom</h2>
            <p className="big">Many consultants fix individual requests. <em>I focus on understanding why those requests exist in the first place.</em></p>
            <p>Combining technical, operational and clinical perspectives lets me deliver improvements that create lasting value — not temporary fixes that resurface a quarter later.</p>
          </div>
          <div className="grid g3">
            <div className="card cap-card on-tint reveal" data-d="1"><div className="ic"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div><h3>Clinical workflow optimisation</h3><p>Improve usability and reduce documentation burden.</p><div className="chips"><span className="chip">Navigators</span><span className="chip">SmartForms</span><span className="chip">Documentation</span><span className="chip">Orders &amp; results</span><span className="chip">Clinical routing</span></div></div>
            <div className="card cap-card on-tint reveal" data-d="2"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 5c0-1.1 4-2 9-2s9 .9 9 2-4 2-9 2-9-.9-9-2zM3 5v14c0 1.1 4 2 9 2s9-.9 9-2V5M3 12c0 1.1 4 2 9 2s9-.9 9-2" /></svg></div><h3>Data quality improvement</h3><p>Improve trust in organisational data.</p><div className="chips"><span className="chip">Build audits</span><span className="chip">Standardisation</span><span className="chip">Duplicate content</span><span className="chip">Validation</span><span className="chip">Reporting accuracy</span></div></div>
            <div className="card cap-card on-tint reveal" data-d="3"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" /></svg></div><h3>Configuration review</h3><p>Identify technical debt and opportunities to improve.</p><div className="chips"><span className="chip">Preference Lists</span><span className="chip">Health Maintenance</span><span className="chip">Registries</span><span className="chip">SmartTools</span><span className="chip">Questionnaires</span></div></div>
            <div className="card cap-card on-tint reveal" data-d="1"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></svg></div><h3>Operational efficiency</h3><p>Support service performance and capacity planning.</p><div className="chips"><span className="chip">Scheduling</span><span className="chip">Referrals</span><span className="chip">Workqueues</span><span className="chip">Utilisation</span><span className="chip">Bottlenecks</span></div></div>
            <div className="card cap-card on-tint reveal" data-d="2"><div className="ic"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div><h3>Governance &amp; strategy</h3><p>Create sustainable decision-making processes.</p><div className="chips"><span className="chip">Prioritisation</span><span className="chip">Release planning</span><span className="chip">Change governance</span><span className="chip">Risk</span><span className="chip">Roadmaps</span></div></div>
            <div className="card cap-card on-tint reveal" data-d="3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--forest)', border: 'none' }}><h3 style={{ color: '#fff', fontSize: '1.25rem' }}>Not sure where the friction starts?</h3><p style={{ color: '#CFE3D9', margin: '10px 0 18px' }}>That's usually the point. A short review across these areas surfaces the connections others miss.</p><a href="#contact" className="btn btn-light" style={{ alignSelf: 'flex-start' }}>Start a review<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
          </div>
        </div>
      </section>

      {}
      <section className="sec">
        <div className="wrap">
          <div className="stats-grid">
            <div className="reveal">
                      <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Why Engage Silke IT
        </span>
              <div className="stat-list" style={{ marginTop: '30px' }}>
                <div className="stat"><div className="num" data-count="22">0<small>+</small></div><div className="lbl">Years technology experience</div></div>
                <div className="stat"><div className="num" data-count="12">0<small>+</small></div><div className="lbl">Years Epic experience</div></div>
                <div className="stat"><div className="num" data-count="16">0<small>+</small></div><div className="lbl">Major EHR go-lives</div></div>
                <div className="stat"><div className="num" data-count="5">0</div><div className="lbl">Countries delivered in</div></div>
                <div className="stat wide"><div className="num">Clinical · Operational · Technical · Strategic</div><div className="lbl">Multiple disciplines under one perspective</div></div>
              </div>
            </div>
            <div className="stat-copy reveal" data-d="1">
              <h3>Optimisation needs a broader perspective</h3>
              <p>Many optimisation efforts look only at configuration. The most effective improvements usually depend on understanding several things at once:</p>
              <ul>
                <li>Clinical workflows and how teams actually work</li>
                <li>Operational processes and capacity</li>
                <li>Underlying data structures</li>
                <li>Reporting requirements and decisions they feed</li>
                <li>Team dynamics and ways of working</li>
                <li>Governance models and ownership</li>
              </ul>
              <p style={{ marginTop: '18px' }}>My background spans implementation, design, analytics, infrastructure, integration and programme leadership — a wider lens than application-only consulting.</p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="sec bg-forest insight">
        <div className="wrap">
          <div className="insight-grid">
            <div className="reveal">
              <span className="eyebrow on-dark">The Core Insight</span>
              <h2 className="insight-h">Most optimisation problems aren't caused by a single workflow.</h2>
            </div>
            <div className="reveal" data-d="1">
              <p className="insight-lead">They come from disconnected decisions made over years — across design, configuration, data, reporting, governance and operations.</p>
              <p className="insight-sub">The friction a clinician feels at 9am is usually the downstream result of choices made in five other places. Seeing those connections — not just the symptom in front of you — is where a background spanning implementation, analytics, integration and programme leadership earns its keep.</p>
            </div>
          </div>
          <div className="chain reveal" data-d="2">
            <div className="chain-item"><span className="chain-dot"></span>Design</div>
            <div className="chain-item"><span className="chain-dot"></span>Configuration</div>
            <div className="chain-item"><span className="chain-dot"></span>Data</div>
            <div className="chain-item"><span className="chain-dot"></span>Reporting</div>
            <div className="chain-item"><span className="chain-dot"></span>Governance</div>
            <div className="chain-item"><span className="chain-dot"></span>Operations</div>
          </div>
          <p className="chain-caption reveal" data-d="3">The problem usually lives in the gaps between these — rarely inside any one of them.</p>
        </div>
      </section>

      {}
      <section className="sec" id="work">
        <div className="wrap">
          <div className="sec-head center reveal">
                            <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Evidence
        </span>
           
            <h2>Selected optimisation examples</h2><p>Drawn from real engagements across NHS, European and US healthcare organisations.</p></div>
          <div className="ev-grid">
            <div className="ev reveal" data-d="1">
              <span className="org">Guy's &amp; St Thomas'</span>
              <h3>Workflow efficiency &amp; data quality</h3>
              <ul>
                <li>Targeted build audits across Ambulatory and Community</li>
                <li>Preference List review and SNOMED cleanup</li>
                <li>Health Maintenance and Registry optimisation</li>
                <li>Reporting validation to confirm build quality</li>
              </ul>
            </div>
            <div className="ev reveal" data-d="2">
              <span className="org">Maastricht UMC+ &amp; Ciro</span>
              <h3>Workflow &amp; configuration review</h3>
              <ul>
                <li>Orders and Ambulatory optimisation</li>
                <li>Clinical pathway reviews with SMEs</li>
                <li>Data quality validation and cleanup planning</li>
                <li>Analyst mentoring on best-practice build</li>
              </ul>
            </div>
            <div className="ev reveal" data-d="1">
              <span className="org">Cliniques Universitaires Saint-Luc</span>
              <h3>Performance improvement</h3>
              <div className="metric"><span className="mv">95%+</span><span className="mt">reduction in Ambulatory interface errors, from 800k+</span></div>
              <ul>
                <li>Reporting improvements and workflow redesign</li>
                <li>In-Basket optimisation and automation</li>
              </ul>
            </div>
            <div className="ev reveal" data-d="2">
              <span className="org">Mount Sinai</span>
              <h3>Operational &amp; data optimisation</h3>
              <div className="metric"><span className="mv">75%</span><span className="mt">reduction across 750k+ order result routing errors</span></div>
              <ul>
                <li>Improved SLA resolution time across the team</li>
                <li>Large-scale workflow analysis across 65 specialties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="sec bg-tint">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         How I Work
        </span>
          
            <h2>The optimisation framework</h2><p>A repeatable approach that keeps improvements evidence-based and measurable.</p></div>
          <div className="flow">
            <div className="f-step reveal" data-d="1">
              <div className="f-num">1</div><span className="f-arrow">→</span>
              <div className="f-content"><h3>Discover</h3><p>Understand current challenges.</p></div>
            </div>
            <div className="f-step reveal" data-d="2">
              <div className="f-num">2</div><span className="f-arrow">→</span>
              <div className="f-content"><h3>Analyse</h3><p>Review workflows, data and configuration.</p></div>
            </div>
            <div className="f-step reveal" data-d="3">
              <div className="f-num">3</div><span className="f-arrow">→</span>
              <div className="f-content"><h3>Prioritise</h3><p>Identify the highest-value opportunities.</p></div>
            </div>
            <div className="f-step reveal" data-d="4">
              <div className="f-num">4</div><span className="f-arrow">→</span>
              <div className="f-content"><h3>Deliver</h3><p>Implement practical improvements.</p></div>
            </div>
            <div className="f-step reveal" data-d="5">
              <div className="f-num">5</div>
              <div className="f-content"><h3>Measure</h3><p>Validate outcomes and adoption.</p></div>
            </div>
          </div>
          <p className="flow-note reveal">Every recommendation is evidence-based, measurable and aligned to organisational objectives.</p>
        </div>
      </section>

      {}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head center reveal">
                   <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Who I Work With
        </span>
          <h2>Typical engagements</h2></div>
          <div className="grid g3">
            <div className="card reveal" data-d="1"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" /></svg></div><h3>NHS organisations</h3><p>Optimisation following implementation and stabilisation.</p></div>
            <div className="card reveal" data-d="2"><div className="ic"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" /></svg></div><h3>Private healthcare providers</h3><p>Workflow, efficiency and operational improvement.</p></div>
            <div className="card reveal" data-d="3"><div className="ic"><svg viewBox="0 0 24 24"><path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7z" /></svg></div><h3>Research &amp; specialist hospitals</h3><p>Complex pathways, specialised workflows and data-driven programmes.</p></div>
          </div>
        </div>
      </section>

      {}
      <section className="cta" id="contact">
        <div className="wrap">
          <span className="eyebrow on-dark reveal" style={{ color: 'rgba(255,255,255,.85)', justifyContent: 'center', marginBottom: '18px' }}>Let's Talk</span>
          <h2 className="reveal" data-d="1">Getting more from your EHR shouldn't require another implementation</h2>
          <p className="reveal" data-d="2">Whether you're facing workflow inefficiencies, reporting challenges, data quality concerns or growing user frustration, I can help identify practical improvements that deliver measurable value.</p>
         
<button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Book an initial discussion"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Book an initial discussion
</button>
        </div>
      </section>
    </>
  );
}