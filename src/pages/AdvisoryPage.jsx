import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const floatingStats = [
  {
    number: 22,
    suffix: "+",
    label: "Year Experience",
  },
  {
    number: 12,
    suffix: "+",
    label: "Years EHR delivery",
  },

   {
    number: 16,
    suffix: "+",
    label: "Major go-lives supported",
  },
  {
    number: 5,
    suffix: "",
    label: "Countries of programme experience",
  },
  
 
 
 
  
];

const styles = `

  :root{
    --red:#E64013;
    --green:#2A6049;
    --sage:#3D8A68;
    --mint:#F5FAF7;
    --tint:#E8F4EF;
    --night:#0F2318;
    --ink:#0F2318;
    --body:#36443D;
    --white:#ffffff;
    --line:rgba(15,35,24,.10);
    --shadow:0 1px 2px rgba(15,35,24,.04), 0 12px 32px rgba(15,35,24,.06);
    --shadow-lift:0 4px 10px rgba(15,35,24,.06), 0 24px 56px rgba(15,35,24,.12);
    --r:18px;
     --maxw:1360px;

  
  }

  *{box-sizing:border-box;margin:0;padding:}
  html{scroll-behavior:smooth}
  body{
    font-family:'Montserrat',sans-serif;
    color:var(--body);
    background:var(--white);
    line-height:1.5;
    font-weight:400;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  h1,h2,h3,h4,.display{font-family:'Comfortaa',cursive;color:var(--ink);line-height:1.18;letter-spacing:-.01em}
  h1{font-weight:700}
  h2{font-weight:600}
  h3,h4{font-weight:600}
  p{margin:0 0 1rem}
  p:last-child{margin-bottom:0}
  a{color:inherit;text-decoration:none}
  ul{list-style:none}


         

  section{padding:clamp(72px,11vw,128px) 0}

  .eyebrow{
    display:inline-block;font-family:'Montserrat',sans-serif;font-weight:600;
    font-size:.74rem;letter-spacing:.16em;text-transform:uppercase;color:var(--red);
    margin-bottom:18px;
  }
  .eyebrow.on-dark{color:#ff8a63}
  .lead{font-size:clamp(1.02rem,1.6vw,1.18rem);color:var(--body)}
  .muted{color:rgba(15,35,24,.62)}

  /* ---------- Buttons ---------- */
  .btn{
    display:inline-flex;align-items:center;gap:.55em;
    font-family:'Montserrat',sans-serif;font-weight:600;font-size:.95rem;
    padding:15px 28px;border-radius:999px;border:1.5px solid transparent;
    cursor:pointer;transition:transform .25s ease,background .25s ease,color .25s ease,box-shadow .25s ease,border-color .25s ease;
  }

  /* ---------- Hero ---------- */
  .hero{
    background:
      radial-gradient(900px 520px at 88% -8%, rgba(61,138,104,.16), transparent 60%),
      radial-gradient(700px 480px at -6% 30%, rgba(230,64,19,.06), transparent 55%),
      var(--mint);
    overflow:hidden;
  }
  .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
  .hero h1{font-size:clamp(2.1rem,4.4vw,3.35rem)}
  .hero .lead{margin-top:22px;max-width:33em}
  .hero .sub{margin-top:14px;font-size:.99rem;color:rgba(15,35,24,.66);max-width:34em}
  .hero-cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}

  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:54px}
  .stat{
    background:var(--tint);border:1px solid rgba(42,96,73,.10);border-radius:16px;
    padding:20px 18px;position:relative;overflow:hidden;
  }
  .stat .num{font-family:'Comfortaa',cursive;font-weight:700;font-size:clamp(1.5rem,3vw,2rem);color:var(--green);line-height:1}
  .stat .num .plus{color:var(--red)}
  .stat .lab{font-size:.78rem;font-weight:500;color:rgba(15,35,24,.66);margin-top:9px;line-height:1.35}
  @media(max-width:560px){.stats{grid-template-columns:repeat(2,1fr)}}

  .hero-visual{position:relative;aspect-ratio:1/1;width:100%;max-width:520px;margin-left:auto}
  @media(max-width:920px){
    .hero-grid{grid-template-columns:1fr;gap:40px}
    .hero-visual{
  max-width:440px;
  margin:0 auto;
  order:1;
}
  }

  /* network svg */
  .net-line{stroke:var(--sage);stroke-width:1.6;opacity:.45}
  .net-dot{fill:var(--red)}
  .center-node{fill:var(--green)}
  .sat{fill:#fff;stroke:rgba(42,96,73,.30);stroke-width:1.4}
  .sat-label{font-family:'Montserrat',sans-serif;font-size:13px;font-weight:600;fill:var(--ink)}
  .center-label{font-family:'Comfortaa',cursive;font-size:16px;font-weight:700;fill:#fff}

  /* ---------- Generic section heads ---------- */
  .sec-head{max-width:900px}
  .sec-head.center{margin:0 auto;text-align:center}
  .sec-head h2{font-size:clamp(1.7rem,3.2vw,2.5rem)}
  .sec-head .lead{margin-top:18px; }

  /* ---------- Section 2: cost ---------- */
  .cost-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;margin-top:56px}
  @media(max-width:880px){.cost-grid{grid-template-columns:1fr;gap:40px}}
  .risk-list li{
    display:flex;gap:14px;align-items:flex-start;padding:13px 0;border-bottom:1px solid var(--line);
    font-size:.98rem;color:var(--ink)
  }
  .risk-list li:last-child{border-bottom:0}
  .risk-list .tick{
    flex:none;width:22px;height:22px;border-radius:7px;background:var(--tint);color:var(--green);
    display:grid;place-items:center;margin-top:1px
  }
  .callout{
    margin-top:34px;background:var(--tint);border-left:4px solid var(--red);
    border-radius:0 14px 14px 0;padding:22px 26px;font-family:'Comfortaa',cursive;
    font-weight:600;font-size:1.08rem;color:var(--ink)
  }
  .roadmap{background:var(--mint);border:1px solid rgba(42,96,73,.12);border-radius:var(--r);padding:26px;box-shadow:var(--shadow)}
  .roadmap .cap{font-size:.78rem;font-weight:600;letter-spacing:.04em;color:rgba(15,35,24,.55);margin-bottom:10px}

  /* ---------- Capability grid ---------- */
  .alt-tint{background:var(--tint)}
  .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:52px}
  @media(max-width:860px){.grid-3{grid-template-columns:1fr}}
  @media(min-width:861px) and (max-width:1040px){.grid-3{grid-template-columns:repeat(2,1fr)}}
  .card{
    background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:28px;
    box-shadow:var(--shadow);transition:transform .3s ease,box-shadow .3s ease,border-color .3s;
    position:relative;overflow:hidden;height:100%;
  }
  .card:hover{transform:translateY(-6px);box-shadow:var(--shadow-lift);border-color:rgba(42,96,73,.25)}
  .card .ico{
    width:48px;height:48px;border-radius:13px;background:var(--tint);display:grid;place-items:center;
    margin-bottom:18px;color:var(--green);transition:background .3s,color .3s
  }
  .card:hover .ico{background:var(--green);color:#fff}
  .card h3{font-size:1.16rem;margin-bottom:9px}
  .card p{font-size:.94rem;color:var(--body)}
  .card .topbar{position:absolute;top:0;left:0;height:3px;width:0;background:var(--red);transition:width .35s ease}
  .card:hover .topbar{width:100%}

  /* numbered services */
  .card .idx{position:absolute;top:24px;right:26px;font-family:'Comfortaa',cursive;font-weight:700;font-size:1.05rem;color:rgba(42,96,73,.16)}

/* ---------- How we work (timeline) ---------- */
.work{
  background:#eef7f1;
  color:#071E14;
}

.work h2,
.work h3{
  color:#071E14;
}

.work .sec-head .lead{
  color:#5d7268;
}

.timeline{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:18px;
  margin-top:58px;
  position:relative;
}

.timeline:before{
  content:"";
  position:absolute;
  top:21px;
  left:6%;
  right:6%;
  height:2px;
  background:#b8d3c3;
}

.step{position:relative}

.step .node{
  width:44px;
  height:44px;
  border-radius:50%;
  transform:scale(1.08);
  transform-origin:center center;
  background:#2A6049;
  border:2px solid #8ebfa5;
  display:grid;
  place-items:center;
  margin:0 auto 16px;
  position:relative;
  z-index:2;
  transition:background .3s,border-color .3s;
}

.step:hover .node{
  background:#E64013;
  border-color:#E64013;
}

.step h4{
  color:#071E14;
  font-size:1.02rem;
  text-align:center;
  margin-bottom:6px;
}

.step p{
  font-size:.84rem;
  color:#5d7268;
  text-align:center;
}

.step .node{
  color:#ffffff;
}

@media (max-width:1100px){

  .timeline{
    display:flex;
    flex-direction:column;
    gap:32px;
    margin-top:40px;
    position:relative;
    padding-left:0;
  }

  .timeline:before{
    content:"";
    position:absolute;
    left:22px;
    top:22px;
    bottom:22px;
    width:2px;
    background:#b8d3c3;
  }

  .step{
    display:flex;
    align-items:flex-start;
    gap:16px;
    width:100%;
    position:relative;
  }

  .step .node{
    flex-shrink:0;
    width:44px;
    height:44px;
    margin:0;
    transform:none;
  }

  .step h4{
    margin:0 0 6px;
    text-align:left;
    font-size:1rem;
  }

  .step p{
    margin:0;
    text-align:left;
    font-size:.9rem;
    line-height:1.6;
  }

  .step > div:last-child{
    flex:1;
    min-width:0;
  }
}

  /* ---------- Case studies ---------- */
  .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:52px}
  @media(max-width:760px){.grid-2{grid-template-columns:1fr}}
  .grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:52px}
  @media(min-width:861px) and (max-width:1040px){.grid-4{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:860px){.grid-4{grid-template-columns:1fr}}
  .case{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:30px;box-shadow:var(--shadow);transition:transform .3s,box-shadow .3s;position:relative;overflow:hidden}
  .case:hover{transform:translateY(-5px);box-shadow:var(--shadow-lift)}
  .case .tag{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--red);margin-bottom:12px}
  .case h3{font-size:1.22rem;margin-bottom:10px}
  .case p{font-size:.94rem}
  .case .accent{position:absolute;right:-30px;top:-30px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(61,138,104,.12),transparent 70%)}

  /* ---------- Orgs ---------- */
/* ---------- Orgs ---------- */
  .org-grid{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:16px;
    margin-top:48px;
  }
  .org{
    /* Calculate precise 3-column width accounting for the 16px gaps */
    width:calc(33.333% - 11px);
    background:#fff;
    border:1px solid rgba(42,96,73,.14);
    border-radius:14px;
    padding:24px 18px;
    text-align:center;
    font-family:'Comfortaa',cursive;
    font-weight:600;
    color:var(--ink);
    font-size:1rem;
    transition:transform .3s,box-shadow .3s,color .3s;
    display:flex;
    flex-direction:column; /* Safely stacks text and .ctry elements */
    align-items:center;
    justify-content:center;
    min-height:88px;
    line-height:1.3;
  }
  .org:hover{
    transform:translateY(-4px);
    box-shadow:var(--shadow);
    color:var(--green);
  }
  .org .ctry{
    display:block;
    font-family:'Montserrat',sans-serif;
    font-weight:500;
    font-size:.72rem;
    color:rgba(15,35,24,.5);
    margin-top:5px;
  }
  
  /* Responsive Org grid */
  @media(max-width:860px){
    .org{ width:calc(50% - 8px); } /* 2 columns, centered orphan items */
  }
  @media(max-width:480px){
    .org{ width:100%; } /* 1 column on very small mobile */
  }

  .org-foot{
    margin-top:32px;text-align:center;max-width:680px;
    margin-left:auto;margin-right:auto;font-size:.96rem;color:rgba(15,35,24,.66)
  }
  /* ---------- Engagement models ---------- */
  .model{background:#fff;border:1px solid var(--line);border-radius:var(--r);padding:30px;box-shadow:var(--shadow);transition:transform .3s,box-shadow .3s,border-color .3s;height:100%}
  .model:hover{transform:translateY(-6px);box-shadow:var(--shadow-lift);border-color:rgba(230,64,19,.3)}
  .model .pill{display:inline-block;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--sage);background:var(--tint);padding:6px 12px;border-radius:999px;margin-bottom:16px}
  .model h3{font-size:1.2rem;margin-bottom:10px}

  /* ---------- Final CTA ---------- */
  .final{
background:
  radial-gradient(
    700px 380px at 95% 0%,
    rgba(14, 127, 94, 0.35),
    transparent 60%
  ),
  radial-gradient(
    700px 380px at 0% 90%,
    rgba(14, 127, 94, 0.35),
    transparent 60%
  );
        var(--night);
    text-align:center;color:#fff
  }
.final h2{
  color: #14532d;
  font-size: clamp(1.9rem,3.6vw,2.8rem);
  max-width: 18em;
  margin: 0 auto;
}

.final p{
  margin: 22px auto 0;
  max-width: 42em;
  color: #166534;
  font-size: 1.04rem;
}
    .final .btn-primary{margin-top:34px;padding:17px 38px;font-size:1.02rem}


  /* ---------- Reveal animation ---------- */
  .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){
    .reveal{opacity:1;transform:none;transition:none}
    *{animation:none!important}
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


.hero-floating-stats-wrap {
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export default function App() {

   const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll reveal with stagger inside grids
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){ 
          e.target.classList.add('in'); 
          io.unobserve(e.target); 
        }
      });
    }, {threshold: .14, rootMargin: '0px 0px -8% 0px'});

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Stagger siblings within the same grid
    document.querySelectorAll('.grid-3, .grid-2, .grid-4, .timeline, .org-grid, .stats').forEach(grid => {
      [...grid.querySelectorAll('.reveal')].forEach((el, i) => {
        el.style.transitionDelay = (i * 70) + 'ms';
      });
    });

    // Animated counters
    const fmt = n => n.toString();
    const runCount = (el) => {
      const target = +el.dataset.count;
      const dur = 1300; 
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if(e.isIntersecting){ 
          runCount(e.target); 
          counterIO.unobserve(e.target); 
        }
      });
    }, {threshold: .6});

    document.querySelectorAll('[data-count]').forEach(el => counterIO.observe(el));

    // Cleanup observers on unmount
    return () => {
      io.disconnect();
      counterIO.disconnect();
    };
  }, []);

  return (
    <>
      <style>{styles}</style>

      

      <main id="top">

        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="reveal">
              <br/><br/><br/><br/>
              <p className="hero-eyebrow">
                Independent EHR Advisory
              </p>
              {/* <span className="eyebrow">Independent EHR Advisory</span> */}
              <h1>Independent EHR advisory for complex healthcare transformation</h1>
              <p className="lead">Successful programmes are built on good decisions made early.</p>
              <p className="sub">Silke IT advises healthcare organisations through EHR implementation, optimisation and recovery. We combine strategic thinking with hands-on delivery across 16+ major deployments, helping leadership teams identify risk early and make better decisions.</p>
              <div className="hero-cta">
                <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Book an advisory"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
  Book an advisory
</button>
                {/* <a className="btn btn-ghost" href="#cases">View experience</a> */}
              </div>

              {/* <div className="stats">
                <div className="stat"><div className="num"><span data-count="22">0</span><span className="plus">+</span></div><div className="lab">Years in healthcare IT</div></div>
                <div className="stat"><div className="num"><span data-count="12">0</span><span className="plus">+</span></div><div className="lab">Years EHR delivery</div></div>
                <div className="stat"><div className="num"><span data-count="16">0</span><span className="plus">+</span></div><div className="lab">Major go-lives supported</div></div>
                <div className="stat"><div className="num"><span data-count="5">0</span></div><div className="lab">Countries of programme experience</div></div>
              </div> */}
            </div>

            <div className="hero-visual reveal">
              <svg viewBox="0 0 500 500" width="100%" height="100%" role="img" aria-label="EHR programme connected to governance, clinical workflows, technology, data and reporting, delivery and risk management">
                {/* connecting lines */}
                <g className="lines">
                  <line className="net-line" x1="250" y1="250" x2="250" y2="86" />
                  <line className="net-line" x1="250" y1="250" x2="397" y2="166" />
                  <line className="net-line" x1="250" y1="250" x2="397" y2="334" />
                  <line className="net-line" x1="250" y1="250" x2="250" y2="414" />
                  <line className="net-line" x1="250" y1="250" x2="103" y2="334" />
                  <line className="net-line" x1="250" y1="250" x2="103" y2="166" />
                </g>
                {/* travelling dots */}
                <circle className="net-dot" r="3.4"><animateMotion dur="3.4s" repeatCount="indefinite" path="M250,250 L250,86" /></circle>
                <circle className="net-dot" r="3.4"><animateMotion dur="3.9s" begin="0.5s" repeatCount="indefinite" path="M250,250 L397,334" /></circle>
                <circle className="net-dot" r="3.4"><animateMotion dur="3.6s" begin="1.1s" repeatCount="indefinite" path="M250,250 L103,166" /></circle>
                <circle className="net-dot" r="3.4"><animateMotion dur="4.1s" begin="1.6s" repeatCount="indefinite" path="M250,250 L250,414" /></circle>

                {/* satellite nodes */}
                <g>
                  <rect className="sat" x="190" y="64" width="120" height="44" rx="14" />
                  <text className="sat-label" x="250" y="91" textAnchor="middle">Governance</text>

                  <rect className="sat" x="330" y="144" width="136" height="44" rx="14" />
                  <text className="sat-label" x="398" y="171" textAnchor="middle">Technology</text>

                  <rect className="sat" x="326" y="312" width="144" height="44" rx="14" />
                  <text className="sat-label" x="398" y="339" textAnchor="middle">Delivery</text>

                  <rect className="sat" x="174" y="392" width="152" height="44" rx="14" />
                  <text className="sat-label" x="250" y="419" textAnchor="middle">Risk management</text>

                  <rect className="sat" x="22" y="312" width="150" height="44" rx="14" />
                  <text className="sat-label" x="97" y="339" textAnchor="middle">Data &amp; reporting</text>

                  <rect className="sat" x="24" y="144" width="152" height="44" rx="14" />
                  <text className="sat-label" x="100" y="171" textAnchor="middle">Clinical workflows</text>
                </g>

                {/* centre node */}
                <circle className="center-node" cx="250" cy="250" r="62" />
                <circle cx="250" cy="250" r="62" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="1.5">
                  <animate attributeName="r" values="62;72;62" dur="3.2s" repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity" values=".25;0;.25" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <text className="center-label" x="250" y="246" textAnchor="middle">EHR</text>
                <text className="center-label" x="250" y="266" textAnchor="middle">Programme</text>
              </svg>
            </div>
          </div>
        </section>

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
              data-count={item.number} /* FIX: Changed from data-target to data-count */
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

        {}
        <section id="why ">
          <div className="wrap ">
            <div className="sec-head center reveal ">
               <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
          The cost of poor decisions
        </span>
        
              
              <h2>Why independent advisory matters</h2>
              <p className="lead">Many EHR programmes meet avoidable challenges long before go-live.</p>
              <p className="muted" style={{ marginTop: '10px' }}>Problems rarely come from configuration alone. They tend to start with unclear governance, competing priorities, thin experience or decisions made too late.</p>
            </div>

            <div className="cost-grid">
              <div className="reveal">
                <div className="roadmap">
                  <div className="cap">PROGRAMME TIMELINE — RISK COMPOUNDS BEFORE EACH MILESTONE</div>
                  <svg viewBox="0 0 520 230" width="100%" role="img" aria-label="A programme roadmap showing warning markers building before each major milestone">
                    <path d="M30,170 C120,170 120,90 210,90 C300,90 300,150 390,150 C450,150 460,70 490,60"
                          fill="none" stroke="var(--sage)" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 7" opacity=".55" />
                    {/* milestones */}
                    <g fontFamily="Montserrat" fontSize="11" fontWeight="600" fill="var(--ink)" textAnchor="middle">
                      <circle cx="30" cy="170" r="9" fill="var(--green)" /><text x="30" y="200">Discovery</text>
                      <circle cx="210" cy="90" r="9" fill="var(--green)" /><text x="210" y="62">Design</text>
                      <circle cx="390" cy="150" r="9" fill="var(--green)" /><text x="390" y="180">Build &amp; test</text>
                      <circle cx="490" cy="60" r="11" fill="var(--red)" /><text x="486" y="34">Go-live</text>
                    </g>
                    {/* warning markers before milestones */}
                    <g fill="var(--red)" opacity=".9">
                      <path d="M150,118 l9,16 h-18 z" />
                      <path d="M320,128 l8,14 h-16 z" />
                      <path d="M448,96 l9,16 h-18 z" />
                    </g>
                    <g fill="#fff" fontFamily="Comfortaa" fontSize="11" fontWeight="700" textAnchor="middle">
                      <text x="150" y="132">!</text><text x="320" y="141">!</text><text x="448" y="110">!</text>
                    </g>
                  </svg>
                  <p className="muted" style={{ fontSize: '.86rem', marginTop: '6px' }}>Each unresolved risk carries forward and grows more expensive at every stage.</p>
                </div>
              </div>

              <div className="reveal">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Common programme risks</h3>
                <ul className="risk-list">
                  <li><span className="tick">✓</span> Scope expansion without governance</li>
                  <li><span className="tick">✓</span> Clinical requirements with no operational alignment</li>
                  <li><span className="tick">✓</span> Underestimated integration complexity</li>
                  <li><span className="tick">✓</span> Poor reporting and data visibility</li>
                  <li><span className="tick">✓</span> Insufficient stakeholder engagement</li>
                  <li><span className="tick">✓</span> Teams operating in silos</li>
                  <li><span className="tick">✓</span> Recovery plans developed too late</li>
                </ul>
                <div className="callout">The earlier risks are identified, the less expensive they become to resolve.</div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="alt-tint">
          <div className="wrap">
            <div className="sec-head  center reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
          What makes Silke IT different
        </span>
              <h2>Advisory backed by real delivery experience</h2>
              <p className="lead">Most consultants specialise in a single area.</p>
              <p className="muted" style={{ marginTop: '10px' }}>Silke IT works across strategy, architecture, implementation, optimisation and recovery — a broader vantage point when weighing decisions and spotting risk.</p>
            </div>

            <div className="grid-3">
              <div className="card reveal"><div className="topbar"></div>
                <div className="ico">◆</div><h3>Programme strategy</h3>
                <p>Aligning programme objectives with operational priorities.</p></div>
              <div className="card reveal"><div className="topbar"></div>
                <div className="ico">✚</div><h3>Clinical transformation</h3>
                <p>Supporting future-state workflow design and adoption.</p></div>
              <div className="card reveal"><div className="topbar"></div>
                <div className="ico">⬡</div><h3>Technical architecture</h3>
                <p>Infrastructure, interoperability and platform planning.</p></div>
              <div className="card reveal"><div className="topbar"></div>
                <div className="ico">▤</div><h3>Data &amp; analytics</h3>
                <p>Operational reporting, performance insight and governance.</p></div>
              <div className="card reveal"><div className="topbar"></div>
                <div className="ico">◎</div><h3>Programme assurance</h3>
                <p>Independent assessment of delivery health and risk.</p></div>
              <div className="card reveal"><div className="topbar"></div>
                <div className="ico">↗</div><h3>Leadership &amp; mentoring</h3>
                <p>Developing teams and supporting programme leadership.</p></div>
            </div>
          </div>
        </section>

        {}
        <section id="services">
          <div className="wrap">
            <div className="sec-head center reveal">
                      <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
          What we do
        </span>

              
              <h2>Advisory services</h2>
            </div>
            <div className="grid-3">
              <div className="card reveal"><div className="topbar"></div><span className="idx">01</span>
                <h3>Strategic programme reviews</h3>
                <p>Independent assessment of programme direction, governance and delivery readiness.</p></div>
              <div className="card reveal"><div className="topbar"></div><span className="idx">02</span>
                <h3>EHR governance</h3>
                <p>Decision frameworks, escalation structures and accountability models.</p></div>
              <div className="card reveal"><div className="topbar"></div><span className="idx">03</span>
                <h3>Clinical workflow advisory</h3>
                <p>Reviewing workflows to improve efficiency, safety and usability.</p></div>
              <div className="card reveal"><div className="topbar"></div><span className="idx">04</span>
                <h3>Delivery assurance</h3>
                <p>Independent oversight through implementation and optimisation programmes.</p></div>
              <div className="card reveal"><div className="topbar"></div><span className="idx">05</span>
                <h3>Data &amp; reporting strategy</h3>
                <p>Helping organisations gain meaningful insight from operational and clinical data.</p></div>
              <div className="card reveal"><div className="topbar"></div><span className="idx">06</span>
                <h3>Vendor &amp; supplier management</h3>
                <p>Supporting leadership with technical challenge and supplier engagement.</p></div>
            </div>
          </div>
        </section>

        {}
        <section id="approach" className="work">
          <div className="wrap">
            <div className="sec-head center reveal" style={{ maxWidth: '560px' }}>
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
         How we work
        </span>
              
              <h2>A structured advisory approach</h2>
              <p className="lead">Six clear stages, from first conversation to measured outcomes.</p>
            </div>
            <div className="timeline">
<div className="step reveal">
  <div className="node">01</div>

  <div className="step-content">
    <h4>Assess</h4>
    <p>Understand objectives, risks and current challenges.</p>
  </div>
</div>

<div className="step reveal">
  <div className="node">02</div>
  <div className="step-content">
    <h4>Analyse</h4>
    <p>Review workflows, governance, data and delivery models.</p>
  </div>
</div>

<div className="step reveal">
  <div className="node">03</div>
  <div className="step-content">
    <h4>Recommend</h4>
    <p>Provide practical, prioritised recommendations.</p>
  </div>
</div>

<div className="step reveal">
  <div className="node">04</div>
  <div className="step-content">
    <h4>Plan</h4>
    <p>Develop realistic implementation strategies.</p>
  </div>
</div>

<div className="step reveal">
  <div className="node">05</div>
  <div className="step-content">
    <h4>Support</h4>
    <p>Guide teams through delivery and decision-making.</p>
  </div>
</div>

<div className="step reveal">
  <div className="node">06</div>
  <div className="step-content">
    <h4>Measure</h4>
    <p>Track outcomes and identify future improvements.</p>
  </div>
</div>
            </div>
          </div>
        </section>

        {}
        <section id="cases">
          <div className="wrap">
            <div className="sec-head center reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
         Advisory in practice
        </span>
             
              <h2>Examples of advisory engagements</h2>
              <p className="muted" style={{ marginTop: '10px' }}>Real engagements rather than testimonials.</p>
            </div>
            <div className="grid-2">
              <div className="case reveal"><span className="accent"></span>
                <div className="tag">Paediatric cancer programme</div>
                <h3>Design &amp; delivery coordination across organisations</h3>
                <p>Led design and delivery coordination for paediatric cancer, palliative care and pain services across multiple trusts, aligning clinical and operational stakeholders.</p></div>
              <div className="case reveal"><span className="accent"></span>
                <div className="tag">Community transformation</div>
                <h3>Strategy &amp; integration leadership at scale</h3>
                <p>Provided strategic guidance, stakeholder management and integration leadership for large-scale community services, including national and local data integration.</p></div>
              <div className="case reveal"><span className="accent"></span>
                <div className="tag">International rehabilitation</div>
                <h3>Pathway design across specialist services</h3>
                <p>Supported pathway design, mentoring and operational workflow development across cardiac and pulmonary rehabilitation services in the Netherlands.</p></div>
              <div className="case reveal"><span className="accent"></span>
                <div className="tag">Reporting &amp; risk management</div>
                <h3>Governance to support leadership decisions</h3>
                <p>Developed operational reporting and governance processes that gave leadership real-time visibility for decisions with organisation-wide impact.</p></div>
            </div>
          </div>
        </section>

        {}
        <section className="alt-tint">
          <div className="wrap">
            <div className="sec-head center reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
         organisations supported
        </span>
              <h2>Trusted across healthcare organisations</h2>
            </div>
            <div className="org-grid">
              <div className="org reveal">Guy's &amp; St Thomas'<span className="ctry">UK</span></div>
              <div className="org reveal">University College London Hospitals<span className="ctry">UK</span></div>
              <div className="org reveal">Maastricht UMC+<span className="ctry">Netherlands</span></div>
              <div className="org reveal">Ciro<span className="ctry">Netherlands</span></div>
              <div className="org reveal">Saint-Luc<span className="ctry">Belgium</span></div>
              <div className="org reveal">Royal Devon<span className="ctry">UK</span></div>
              <div className="org reveal">North Devon<span className="ctry">UK</span></div>
              <div className="org reveal">Mount Sinai<span className="ctry">USA</span></div>
              <div className="org reveal">University College San Francisco<span className="ctry">USA</span></div>
            </div>
            <p className="org-foot reveal">Supporting public healthcare providers, academic medical centres, specialist hospitals and research institutions across Europe and North America.</p>
          </div>
        </section>

        {}
        <section>
          <div className="wrap">
            <div className="sec-head center reveal">
               <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
         Why clients engage Silke IT
        </span>
              <h2>Why organisations choose Silke IT</h2>
            </div>
            <div className="grid-4">
              <div className="card reveal"><div className="topbar"></div><h3 style={{ fontSize: '1.1rem' }}>Independent perspective</h3><p>Advice focused on organisational outcomes, not software delivery.</p></div>
              <div className="card reveal"><div className="topbar"></div><h3 style={{ fontSize: '1.1rem' }}>Broad experience</h3><p>Across clinical, technical, operational and leadership domains.</p></div>
              <div className="card reveal"><div className="topbar"></div><h3 style={{ fontSize: '1.1rem' }}>Proven delivery</h3><p>Implementations, optimisation programmes and recovery initiatives.</p></div>
              <div className="card reveal"><div className="topbar"></div><h3 style={{ fontSize: '1.1rem' }}>Practical recommendations</h3><p>Clear actions you can implement, not theory.</p></div>
            </div>
          </div>
        </section>

        {}
        <section id="engage" style={{ background: 'var(--mint)' }}>
          <div className="wrap">
            <div className="sec-head center reveal">
                       <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
        Engagement models
        </span>
              <h2>Flexible engagement options</h2>
            </div>
            <div className="grid-3">
              <div className="model reveal"><span className="pill">Focused</span><h3>Advisory workshops</h3><p>Focused reviews for specific challenges or programme decisions.</p></div>
              <div className="model reveal"><span className="pill">Ongoing</span><h3>Programme assurance</h3><p>Ongoing strategic advisory support throughout delivery.</p></div>
              <div className="model reveal"><span className="pill">Senior</span><h3>Fractional EHR leadership</h3><p>Senior expertise without the permanent leadership overhead.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="final">
          <div className="wrap reveal">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
        Let's talk
        </span>
            <h2>Need an experienced voice around the table?</h2>
            <p>Whether you are planning a new implementation, navigating programme challenges or seeking independent assurance, Silke IT provides practical advisory support grounded in real delivery experience.</p>

<button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Book an advisory"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
  Book an advisory
</button>
          </div>
        </section>

      </main>

    </>
  );
}