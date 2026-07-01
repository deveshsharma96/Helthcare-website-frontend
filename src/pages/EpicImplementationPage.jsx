import React, { useEffect } from 'react';
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
    number: 65,
    suffix: "+",
    label: "Clinical specialties supported",
  },
  

  
];


const globalStyles = `

  :root{
    --red:#E64013;
    --red-deep:#C4350F;
    --forest:#2A6049;
    --sage:#3D8A68;
    --mint:#F5FAF7;
    --tint:#E8F4EF;
    --night:#0F2318;
    --night-soft:#1c3a2a;
    --line:rgba(15,35,24,.10);
    --shadow-sm:0 2px 8px rgba(15,35,24,.06);
    --shadow-md:0 14px 38px -18px rgba(15,35,24,.30);
    --shadow-lg:0 30px 70px -30px rgba(15,35,24,.45);
    --display:'Comfortaa',sans-serif;
    --body:'Montserrat',sans-serif;
    --maxw:1360px;
  }

  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
  body{
    font-family:var(--body);
    color:var(--night);
    background:var(--mint);
    line-height:1.5;
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
  }

  a{color:inherit;text-decoration:none}


  /* ---------- Type ---------- */
  h1,h2,h3,.display{font-family:var(--display);font-weight:600;letter-spacing:-.01em;line-height:1.12}
  .eyebrow{
    font-family:var(--body);font-weight:600;font-size:.74rem;
    letter-spacing:.22em;text-transform:uppercase;
    display:inline-flex;align-items:center;gap:.6rem;
  }
  .eyebrow::before{content:"";width:26px;height:2px;background:var(--red);border-radius:2px}
  .eyebrow.on-dark::before{background:var(--red)}
  .lead{font-size:1.06rem;color:#33483c}

  /* ---------- Buttons ---------- */
  .btn{
    display:inline-flex;align-items:center;gap:.55rem;
    font-family:var(--body);font-weight:600;font-size:.95rem;
    padding:.92rem 1.6rem;border-radius:999px;cursor:pointer;
    transition:transform .25s ease,box-shadow .25s ease,background .25s ease,color .25s ease,border-color .25s ease;
    border:1.6px solid transparent;white-space:nowrap;
  }
  .btn-outline{border-color:var(--forest);color:var(--forest);background:transparent}
  .btn-outline:hover{background:var(--forest);color:#fff;transform:translateY(-2px)}
  .btn-light{background:#fff;color:var(--forest)}
  .btn-light:hover{transform:translateY(-2px);box-shadow:var(--shadow-md)}
  .btn-ghost-light{border-color:rgba(255,255,255,.55);color:#fff;background:transparent}
  .btn-ghost-light:hover{background:rgba(255,255,255,.12);transform:translateY(-2px)}

  

  /* ---------- Reveal animation ---------- */
  .reveal{opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
  .reveal.in{opacity:1;transform:none}
  [data-delay="1"]{transition-delay:.08s}
  [data-delay="2"]{transition-delay:.16s}
  [data-delay="3"]{transition-delay:.24s}
  [data-delay="4"]{transition-delay:.32s}
  [data-delay="5"]{transition-delay:.40s}

  /* ---------- Hero ---------- */
  .hero{position:relative;padding:84px 0 96px;overflow:hidden}
  .hero::before{
    content:"";position:absolute;inset:0;z-index:0;
    background:
      radial-gradient(60% 55% at 78% 18%,rgba(61,138,104,.16),transparent 60%),
      radial-gradient(48% 50% at 8% 90%,rgba(42,96,73,.12),transparent 60%);
  }
  .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
  .hero h1{font-size:clamp(2.5rem,5vw,3.85rem);margin:1rem 0 rem}
  .hero h1 .accent{color:var(--forest)}
  .hero .sub{font-size:1.16rem;font-weight:600;color:var(--sage);margin-bottom:1.1rem;font-family:var(--display)}
  .hero p.lead{max-width:33rem;margin-bottom:2rem}
  .hero-cta{display:flex;gap:.9rem;flex-wrap:wrap;margin-bottom:2.6rem}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
  .stat{background:rgba(255,255,255,.6);border:1px solid var(--line);border-radius:16px;padding:16px 14px;backdrop-filter:blur(4px)}
  .stat .num{font-family:var(--display);font-weight:700;font-size:1.55rem;color:var(--forest);line-height:1}
  .stat .lbl{font-size:.72rem;color:#4a5e51;margin-top:.45rem;font-weight:500;line-height:1.3}
@media (max-width: 768px){

  .hero{
    padding-bottom: 40px;
  }

  .hero-grid{
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .hero-visual{
    width: 100%;
    max-width: 320px;
    margin: 20px auto 0;
  }

  .node-svg{
    width: 100%;
    height: auto;
    display: block;
  }

  .trust{
    margin-top: 0;
    padding-top: 50px;
  }
    

}  @media(max-width:560px){.stats{grid-template-columns:repeat(2,1fr)}}

  
  /* node diagram */
  .hero-visual{position:relative}
  .node-svg{width:100%;height:auto}
  .conn{stroke:var(--sage);stroke-width:1.6;fill:none;opacity:.55;stroke-dasharray:5 7;animation:dash 7s linear infinite}
  @keyframes dash{to{stroke-dashoffset:-120}}
  .pulse{fill:var(--red)}
  .node-card{fill:#fff;stroke:var(--line);stroke-width:1}
  .node-core{fill:var(--forest)}
  .node-label{font-family:var(--body);font-weight:600;font-size:11px;fill:var(--night)}
  .node-core-label{font-family:var(--display);font-weight:700;fill:#fff}
  .float{animation:float 6s ease-in-out infinite}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}



  
  /* ---------- Trust bar ---------- */
.trust{
   background:#2F6F52;
  color:#fff;
  padding:46px 0;
}

.trust .wrap{
  text-align:center;
}

.trust h3{
  font-size:1.45rem;
  margin-bottom:.4rem;
}

.trust .lead{
  color:rgba(255,255,255,.82);
}

.trust-top{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  gap:12px;
  margin-bottom:26px;
}

.trust .eyebrow{
  justify-content:center;
}

.flags{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:10px;
}

.flag{
  display:flex;
  align-items:center;
  gap:.5rem;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.18);
  border-radius:999px;
  padding:.5rem 1rem;
  font-size:.86rem;
  font-weight:500;
}

.flag .pin{
  width:7px;
  height:7px;
  border-radius:50%;
  background:var(--red);
}

.trust .note{
  color:rgba(255,255,255,.7);
  font-size:.9rem;
  margin:18px auto 0;
  max-width:900px;
  text-align:center;
}

  /* ---------- Section scaffold ---------- */
  section.block{padding:96px 0}
.sec-head{
  max-width:70rem;
  margin:0 auto 48px;
  text-align:center;
}
  .sec-head h2{font-size:clamp(1.9rem,3.4vw,2.7rem);margin:.9rem 0}
  .bg-mint{background:var(--mint)}
  .bg-tint{background:var(--tint)}
  .bg-white{background:#fff}

  /* ---------- Struggle (sec2) ---------- */
  .two-col{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center}
  @media(max-width:920px){.two-col{grid-template-columns:1fr;gap:40px}}
  .struggle-art{width:100%;height:auto}
  .cause-list{list-style:none;display:grid;gap:12px;margin:1.4rem 0 1.6rem}
  .cause-list li{display:flex;align-items:center;gap:.85rem;background:#fff;border:1px solid var(--line);border-radius:12px;padding:.85rem 1.1rem;font-weight:500;box-shadow:var(--shadow-sm)}
  .cause-list li .x{flex:0 0 22px;height:22px;border-radius:50%;background:rgba(230,64,19,.12);color:var(--red);display:grid;place-items:center;font-size:.8rem;font-weight:700}
  .struggle-note{font-weight:600;color:var(--forest);font-family:var(--display);font-size:1.05rem}

  /* ---------- Value cards (sec3) ---------- */
  .cards-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
  @media(max-width:920px){.cards-3{grid-template-columns:1fr}}
  .vcard{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:30px 28px;box-shadow:var(--shadow-sm);transition:transform .3s ease,box-shadow .3s ease;overflow:hidden}
  .vcard::before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--red),var(--sage));transform:scaleX(0);transform-origin:left;transition:transform .35s ease}
  .vcard:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg)}
  .vcard:hover::before{transform:scaleX(1)}
  .vcard .ic{width:52px;height:52px;border-radius:14px;background:var(--tint);display:grid;place-items:center;margin-bottom:18px}
  .vcard h3{font-size:1.32rem;margin-bottom:.5rem}
  .vcard p{font-size:.95rem;color:#41564a;margin-bottom:1.1rem}
  .vcard .tag-title{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--sage);font-weight:600;margin-bottom:.7rem}
  .tags{display:flex;flex-wrap:wrap;gap:8px}
  .tag{font-size:.78rem;background:var(--mint);border:1px solid var(--line);border-radius:999px;padding:.34rem .72rem;font-weight:500;color:#33483c}

  /* ---------- Journey (sec4) ---------- */
/* ---------- Journey (Dark Forest Green) ---------- */
.journey{
    background:#2F6F52;   /* Change this color if you want darker/lighter */
    color:#fff;
    padding:96px 0;
    position:relative;
    overflow:hidden;
}

.journey::before,
.journey::after{
    display:none;
}

.journey .wrap{
    position:relative;
    z-index:2;
}

.journey h2{
    color:#fff;
}

.journey .eyebrow{
    color:rgba(255,255,255,.75);
}

/* Timeline */
.timeline-h{
    display:grid;
    grid-template-columns:repeat(6,1fr);
    gap:0;
    margin-top:54px;
    position:relative;
}

.timeline-h::before{
    content:"";
    position:absolute;
    top:13px;
    left:8%;
    right:8%;
    height:2px;
    background:linear-gradient(
        90deg,
        #6FB58A,
        #E64013
    );
}

/* Phase */
.phase{
    position:relative;
    padding:0 12px;
    text-align:center;
}

.phase .pnode{
    width:28px;
    height:28px;
    border-radius:50%;
    background:#163726;
    border:2px solid #6FB58A;
    margin:0 auto 18px;
    display:grid;
    place-items:center;
    position:relative;
    z-index:2;
    transition:all .3s ease;
}

.phase .pnode span{
    width:9px;
    height:9px;
    border-radius:50%;
    background:#6FB58A;
    transition:all .3s ease;
}

.phase:hover .pnode{
    transform:scale(1.18);
    border-color:#E64013;
    background:#214D37;
    box-shadow:0 0 18px rgba(111,181,138,.35);
}

.phase:hover .pnode span{
    background:#E64013;
}

.phase h4{
    font-family:var(--display);
    font-weight:600;
    font-size:1.05rem;
    margin-bottom:.7rem;
    color:#fff;
}

.phase ul{
    list-style:none;
    display:grid;
    gap:.4rem;
    padding:0;
    margin:0;
}

.phase li{
    font-size:.84rem;
    color:rgba(255,255,255,.76);
    line-height:1.6;
}
  @media(max-width:920px){
    .timeline-h{grid-template-columns:1fr;gap:32px}
    
    .timeline-h::before{
      top:14px; 
      bottom:14px; 
      left:14px; 
      right:auto;
      width:2px;
      height:auto;
      transform:translateX(-50%); 
      background:linear-gradient(180deg,var(--sage),var(--red)); 
    }
    
    .phase{
      text-align:left;
      display:grid;
      grid-template-columns:46px 1fr;
      align-items:start;
      padding:0;
    }
    
    /* Force the node to stay in col 1 and span down */
    .phase .pnode{
      margin:0;
      grid-column: 1;
      grid-row: 1 / span 2;
    }
    
    /* Force the heading to stay in col 2, row 1 */
    .phase h4 {
      margin-top:3px; 
      margin-bottom:.4rem;
      grid-column: 2;
      grid-row: 1;
    }
    
    /* Force the list to stay in col 2, row 2 */
    .phase ul {
      grid-column: 2;
      grid-row: 2;
    }
  }

  /* ---------- Experience timeline (sec5) ---------- */
/* =========================================
   REAL PROGRAMME EXPERIENCE TIMELINE
========================================= */

.exp-wrap{
  margin-top:60px;
}

.exp{
  position:relative;
  display:grid;
  grid-template-columns:140px 1fr;
  gap:40px;
  margin-bottom:38px;
}

.exp:last-child{
  margin-bottom:0;
}

/* LEFT SIDE TIMELINE */

.exp .rail{
  position:relative;
}

.exp .rail::before{
  content:"";
  position:absolute;
  left:22px;
  top:24px;
  bottom:-55px;
  width:2px;
  background:#d7e7df;
}

.exp:last-child .rail::before{
  display:none;
}

.exp .yr{
  display:flex;
  align-items:flex-start;
  gap:14px;
}

.exp .marker{
  width:26px;
  height:26px;
  border-radius:50%;
  background:#fff;
  border:2px solid #3D8A68;

  display:flex;
  align-items:center;
  justify-content:center;

  flex-shrink:0;
  position:relative;
  z-index:2;

  transition:all .35s ease;
}

.exp .marker i{
  width:8px;
  height:8px;
  border-radius:50%;
  background:#3D8A68;

  transition:all .35s ease;
}

.exp .y{
  min-width:80px;
  font-size:18px;
  font-weight:700;
  line-height:1.3;
  color:#264035;
}

/* CARD */

.exp-card{
  background:#fff;
  border:1px solid #d7e7df;
  border-radius:20px;
  padding:28px;
  transition:all .35s ease;

  box-shadow:
    0 4px 12px rgba(0,0,0,.04);
}

.exp-card h3{
  font-size:1.35rem;
  margin-bottom:10px;
  color:#071E14;
}

.exp-card h4{font-size:1.18rem;margin-bottom:.35rem}
  .exp-card .place-flag{font-size:.74rem;font-weight:600;color:var(--sage);letter-spacing:.08em;text-transform:uppercase;margin-bottom:.5rem}
  .exp-card p{font-size:.93rem;color:#41564a}
  
.exp-card p{
  color:#556C61;
  line-height:1.8;
  margin-bottom:16px;
}


.exp-card ul{
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}

.exp-card ul li{
  background:#F5FAF7;
  border:1px solid #d7e7df;
  padding:8px 14px;
  border-radius:999px;
  font-size:.85rem;
  color:#264035;
  transition:.3s ease;
}

/* HOVER EFFECT */

.exp:hover .marker{
  background:#E64013;
  border-color:#E64013;
  transform:scale(1.08);
}

.exp:hover .marker i{
  background:#fff;
}

.exp-card:hover{
  transform:translateY(-6px);
  border-color:transparent;

  box-shadow:
    0 20px 45px rgba(15,35,24,.12);
}

.exp-card ul li:hover{
  background:#2A6049;
  border-color:#2A6049;
  color:#fff;
}

/* =========================================
   TABLET
========================================= */

@media (max-width:992px){

  .exp{
    grid-template-columns:110px 1fr;
    gap:24px;
  }

  .exp-card{
    padding:24px;
  }

}

/* =========================================
   MOBILE
========================================= */

@media (max-width:768px){

  .exp{
    grid-template-columns:1fr;
    gap:14px;
    margin-bottom:34px;
  }

  .exp .rail{
    display:block;
    padding-left:4px;
  }

  .exp .rail::before{
    left:13px;
    top:22px;
    bottom:-45px;
  }

  .exp .yr{
    gap:12px;
  }

  .exp .marker{
    width:24px;
    height:24px;
  }

  .exp .y{
    font-size:16px;
    min-width:auto;
  }

  .exp-card{
    margin-left:36px;
    padding:22px;
  }

  .exp-card h3{
    font-size:1.15rem;
  }

}

/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width:480px){

  .exp-card{
    margin-left:30px;
    padding:18px;
  }

  .exp-card ul{
    gap:8px;
  }

  .exp-card ul li{
    font-size:.8rem;
    padding:6px 12px;
  }

}

  


  /* ---------- Metrics (sec6) ---------- */
  .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;margin-top:44px}
  @media(max-width:880px){.metrics{grid-template-columns:repeat(2,1fr)}}
  .metric{background:#fff;border:1px solid var(--line);border-radius:20px;padding:34px 26px;text-align:center;box-shadow:var(--shadow-sm);position:relative;overflow:hidden}
  .metric::after{content:"";position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:42px;height:4px;border-radius:4px;background:var(--red)}
  .metric .big{font-family:var(--display);font-weight:700;font-size:clamp(2.4rem,4vw,3.1rem);color:var(--forest);line-height:1}
  .metric .desc{font-size:.92rem;color:#41564a;margin-top:.8rem;font-weight:500}

  /* ---------- Differentiators (sec7) ---------- */
  .diff{display:grid;gap:22px;margin-top:44px}
  .diff-row{display:grid;grid-template-columns:64px 1fr;gap:26px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:30px 32px;align-items:start;box-shadow:var(--shadow-sm);transition:transform .3s ease,box-shadow .3s ease}
  .diff-row:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
  .diff-row .badge{width:64px;height:64px;border-radius:16px;background:var(--forest);color:#fff;display:grid;place-items:center;font-family:var(--display);font-weight:700;font-size:1.4rem}
  .diff-row h3{font-size:1.3rem;margin-bottom:.55rem}
  .diff-row p{font-size:.96rem;color:#41564a;margin-bottom:.5rem}
  .diff-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:.7rem}
  @media(max-width:680px){.diff-row{grid-template-columns:1fr;gap:16px}}

  /* ---------- Challenges (sec8) ---------- */
  .chal-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:44px}
  @media(max-width:1000px){.chal-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:520px){.chal-grid{grid-template-columns:1fr}}
  .chal{background:#fff;border:1px solid var(--line);border-radius:16px;padding:24px 22px;cursor:default;transition:transform .3s ease,box-shadow .3s ease,background .3s ease;position:relative;overflow:hidden}
  .chal .ch-head{display:flex;align-items:center;gap:.7rem;font-family:var(--display);font-weight:600;font-size:1.02rem}
  .chal .ch-dot{width:10px;height:10px;border-radius:50%;background:var(--red);flex:0 0 auto;transition:transform .3s ease}
  .chal .ch-body{max-height:0;opacity:0;overflow:hidden;transition:max-height .4s ease,opacity .35s ease,margin .35s ease;font-size:.9rem;color:#41564a;margin-top:0}
  .chal:hover{transform:translateY(-5px);box-shadow:var(--shadow-md);background:var(--mint)}
  .chal:hover .ch-dot{transform:scale(1.4)}
  .chal:hover .ch-body{max-height:140px;opacity:1;margin-top:.8rem}

  /* ---------- Final CTA ---------- */
.final{
    position:relative;
    padding:100px 0;
    background:#2F6F52;
    color:#fff;
    overflow:hidden;
}

.final::before,
.final::after{
    display:none;
}


.final .wrap{
  position:relative;
  z-index:2;
  max-width:960px;
  margin:0 auto;
  text-align:center;
}

.final h2{
  font-size:clamp(2rem,4vw,3rem);
  margin:1rem 0;
}

.final p{
  color:rgba(255,255,255,.85);
  font-size:1.06rem;
  max-width:42rem;
  margin:0 auto 2rem;
}

.final-cta{
  display:flex;
  justify-content:center;
  gap:1rem;
  flex-wrap:wrap;
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
    // Scroll reveal logic
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Count-up animation logic
    function runCount(el) {
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      const dur = 1400;
      const t0 = performance.now();
      
      function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    
    const co = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          runCount(e.target);
          co.unobserve(e.target);
        }
      });
    }, { threshold: 0.6 });
    
    document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

    return () => {
      io.disconnect();
      co.disconnect();
    };
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
    
     

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <br/> 
            <p className="hero-eyebrow">
                EHR Implementation
              </p>
            <h1 className="reveal" data-delay="1">
              Delivering successful EHR programmes through <span className="accent">experience</span>, not theory
            </h1>
            <p className="lead reveal" data-delay="2">
              Implementing an Electronic Health Record is one of the most complex transformations a healthcare organisation can undertake.
            </p>
            <p className="lead reveal" data-delay="2">
              Silke IT supports organisations across design, build, testing, integration, go-live and stabilisation — combining deep technical expertise with practical programme leadership.
            </p>
            <div className="hero-cta reveal" data-delay="3">
              
               <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Discuss your programme "
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Discuss your programme 
</button>
              {/* <a className="btn btn-outline" href="#experience">View experience</a> */}
            </div>
            {/* <div className="stats reveal" data-delay="4">
              <div className="stat"><div className="num" data-count="22" data-suffix="">0</div><div className="lbl">Years healthcare IT experience</div></div>
              <div className="stat"><div className="num" data-count="16" data-suffix="+">0</div><div className="lbl">Large-scale EHR go-lives</div></div>
              <div className="stat"><div className="num" data-count="5" data-suffix="">0</div><div className="lbl">Countries</div></div>
              <div className="stat"><div className="num" data-count="65" data-suffix="+">0</div><div className="lbl">Clinical specialties supported</div></div>
            </div> */}
          </div>

          {}
          <div className="hero-visual reveal" data-delay="2">
            <svg className="node-svg" viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EHR programme connected to clinical workflows, design and build, testing and readiness, integration and FHIR, data and reporting, and go-live support">
              <defs>
                <radialGradient id="coreGrad" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#3D8A68"/>
                  <stop offset="100%" stopColor="#2A6049"/>
                </radialGradient>
              </defs>
              <g>
                <path className="conn" d="M230,230 L230,70"/>
                <path className="conn" d="M230,230 L388,150"/>
                <path className="conn" d="M230,230 L388,318"/>
                <path className="conn" d="M230,230 L230,392"/>
                <path className="conn" d="M230,230 L72,318"/>
                <path className="conn" d="M230,230 L72,150"/>
              </g>
              <circle className="pulse" r="3.5"><animateMotion dur="3.2s" repeatCount="indefinite" path="M230,230 L230,70"/></circle>
              <circle className="pulse" r="3.5"><animateMotion dur="3.8s" repeatCount="indefinite" path="M230,230 L388,150"/></circle>
              <circle className="pulse" r="3.5"><animateMotion dur="4.3s" repeatCount="indefinite" path="M230,230 L388,318"/></circle>
              <circle className="pulse" r="3.5"><animateMotion dur="3.5s" repeatCount="indefinite" path="M230,230 L230,392"/></circle>
              <circle className="pulse" r="3.5"><animateMotion dur="4.0s" repeatCount="indefinite" path="M230,230 L72,318"/></circle>
              <circle className="pulse" r="3.5"><animateMotion dur="3.0s" repeatCount="indefinite" path="M230,230 L72,150"/></circle>

              <g className="float" style={{ transformOrigin: '230px 70px' }}>
                <rect className="node-card" x="160" y="46" width="140" height="46" rx="12"/>
                <text className="node-label" x="230" y="74" textAnchor="middle">Clinical Workflows</text>
              </g>
              <g className="float" style={{ animationDelay: '.6s', transformOrigin: '388px 150px' }}>
                <rect className="node-card" x="330" y="128" width="120" height="46" rx="12"/>
                <text className="node-label" x="390" y="156" textAnchor="middle">Design &amp; Build</text>
              </g>
              <g className="float" style={{ animationDelay: '1.2s', transformOrigin: '388px 318px' }}>
                <rect className="node-card" x="322" y="296" width="136" height="46" rx="12"/>
                <text className="node-label" x="390" y="318" textAnchor="middle">Testing &amp;</text>
                <text className="node-label" x="390" y="332" textAnchor="middle">Readiness</text>
              </g>
              <g className="float" style={{ animationDelay: '.9s', transformOrigin: '230px 392px' }}>
                <rect className="node-card" x="158" y="370" width="144" height="46" rx="12"/>
                <text className="node-label" x="230" y="398" textAnchor="middle">Integration &amp; FHIR</text>
              </g>
              <g className="float" style={{ animationDelay: '1.5s', transformOrigin: '72px 318px' }}>
                <rect className="node-card" x="12" y="296" width="130" height="46" rx="12"/>
                <text className="node-label" x="77" y="318" textAnchor="middle">Data &amp;</text>
                <text className="node-label" x="77" y="332" textAnchor="middle">Reporting</text>
              </g>
              <g className="float" style={{ animationDelay: '.3s', transformOrigin: '72px 150px' }}>
                <rect className="node-card" x="12" y="128" width="126" height="46" rx="12"/>
                <text className="node-label" x="75" y="156" textAnchor="middle">Go-Live Support</text>
              </g>

              <circle cx="230" cy="230" r="58" fill="url(#coreGrad)"/>
              <circle cx="230" cy="230" r="58" fill="none" stroke="rgba(230,64,19,.5)" strokeWidth="2">
                <animate attributeName="r" values="58;66;58" dur="3.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values=".5;0;.5" dur="3.5s" repeatCount="indefinite"/>
              </circle>
              <text className="node-core-label" x="230" y="226" textAnchor="middle" fontSize="15">EHR</text>
              <text className="node-core-label" x="230" y="244" textAnchor="middle" fontSize="13">Programme</text>
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
      
      <section className="trust">
        <div className="wrap">
          <div className="trust-top">
            <div className="reveal">
              
              <span className="eyebrow on-dark" style={{ color: 'rgba(255,255,255,.7)' }}>Track record</span>
              <h3 style={{ marginTop: '.7rem' }}>Trusted across public, private and academic healthcare</h3>
            </div>
          </div>
          <div className="flags reveal" data-delay="1">
            <span className="flag"><span className="pin"></span>United Kingdom</span>
            <span className="flag"><span className="pin"></span>United States</span>
            <span className="flag"><span className="pin"></span>Netherlands</span>
            <span className="flag"><span className="pin"></span>Belgium</span>
            <span className="flag"><span className="pin"></span>Ireland</span>
          </div>
          <p className="note reveal" data-delay="2">
            Supporting programmes across major teaching hospitals, research institutions and regional healthcare organisations.
          </p>
        </div>
      </section>

      <section className="block bg-mint">
        <div className="wrap two-col">
          <div className="reveal">
            <svg className="struggle-art" viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a broken implementation roadmap with warning markers and disconnected teams">
              <defs>
                <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3D8A68"/><stop offset="100%" stopColor="#2A6049"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="420" height="360" rx="22" fill="#fff" stroke="rgba(15,35,24,.08)"/>
              <path d="M40,300 C90,300 100,210 150,205" fill="none" stroke="url(#pathGrad)" strokeWidth="8" strokeLinecap="round"/>
              <path d="M185,200 C235,196 240,120 290,118" fill="none" stroke="#2A6049" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 16"/>
              <path d="M320,112 C360,110 370,70 388,66" fill="none" stroke="rgba(15,35,24,.25)" strokeWidth="8" strokeLinecap="round" strokeDasharray="2 14"/>
              <line x1="160" y1="186" x2="178" y2="222" stroke="#E64013" strokeWidth="3" strokeLinecap="round"/>
              <line x1="300" y1="100" x2="314" y2="130" stroke="#E64013" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="40" cy="300" r="13" fill="#2A6049"/><circle cx="40" cy="300" r="5" fill="#fff"/>
              <circle cx="388" cy="66" r="13" fill="rgba(15,35,24,.25)"/><circle cx="388" cy="66" r="5" fill="#fff"/>
              <g transform="translate(150,150)">
                <path d="M16,0 L32,28 L0,28 Z" fill="#E64013"/><rect x="14.5" y="9" width="3" height="10" rx="1.5" fill="#fff"/><circle cx="16" cy="23" r="1.8" fill="#fff"/>
              </g>
              <g transform="translate(252,168)">
                <path d="M14,0 L28,24 L0,24 Z" fill="#E64013" opacity=".85"/><rect x="12.7" y="8" width="2.6" height="8" rx="1.3" fill="#fff"/><circle cx="14" cy="20" r="1.6" fill="#fff"/>
              </g>
              <g opacity=".9">
                <circle cx="70" cy="80" r="14" fill="#E8F4EF" stroke="#3D8A68" strokeWidth="1.5"/>
                <circle cx="108" cy="64" r="11" fill="#E8F4EF" stroke="#3D8A68" strokeWidth="1.5"/>
                <circle cx="100" cy="108" r="10" fill="#E8F4EF" stroke="#3D8A68" strokeWidth="1.5"/>
                <line x1="70" y1="80" x2="108" y2="64" stroke="rgba(15,35,24,.18)" strokeWidth="1.5" strokeDasharray="3 4"/>
                <line x1="70" y1="80" x2="100" y2="108" stroke="rgba(15,35,24,.18)" strokeWidth="1.5" strokeDasharray="3 4"/>
              </g>
              <g opacity=".9">
                <circle cx="340" cy="250" r="13" fill="#E8F4EF" stroke="#3D8A68" strokeWidth="1.5"/>
                <circle cx="378" cy="270" r="10" fill="#E8F4EF" stroke="#3D8A68" strokeWidth="1.5"/>
                <circle cx="350" cy="290" r="9" fill="#E8F4EF" stroke="#3D8A68" strokeWidth="1.5"/>
                <line x1="340" y1="250" x2="378" y2="270" stroke="rgba(15,35,24,.18)" strokeWidth="1.5" strokeDasharray="3 4"/>
              </g>
              <line x1="120" y1="120" x2="320" y2="240" stroke="rgba(230,64,19,.35)" strokeWidth="2" strokeDasharray="6 10"/>
            </svg>
          </div>
          <div className="reveal" data-delay="1">
        <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
          Why programmes struggle
        </span>
            
            <h2 style={{ fontSize: 'clamp(1.8rem,3.2vw,2.5rem)', margin: '.9rem 0 1.1rem' }}>
              Technology rarely causes programme failure
            </h2>
            <p className="lead">Most implementation challenges originate elsewhere:</p>
            <ul className="cause-list">
              <li><span className="x">!</span>Unclear ownership</li>
              <li><span className="x">!</span>Poor workflow design</li>
              <li><span className="x">!</span>Weak governance</li>
              <li><span className="x">!</span>Insufficient testing</li>
              <li><span className="x">!</span>Stakeholder misalignment</li>
              <li><span className="x">!</span>Lack of implementation experience</li>
            </ul>
            <p className="struggle-note">
              The software is only one part of the equation. Successful programmes depend on connecting people, processes, technology and decision making.
            </p>
          </div>
        </div>
      </section>

      {}
      <section className="block bg-white">
        <div className="wrap">
          <div className="sec-head reveal">
             <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Where Silke IT adds value
        </span>
            
            <h2>Three areas where programmes live or die</h2>
            <p className="lead">Support spans clinical thinking, technical delivery and the leadership that keeps everything moving.</p>
          </div>
          <div className="cards-3">
            <div className="vcard reveal">
              <div className="ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="1.8">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/>
                </svg>
              </div>
              <h3>Clinical Design</h3>
              <p>Ensuring workflows support clinicians rather than forcing inefficient workarounds.</p>
              <div className="tag-title">Examples</div>
              <div className="tags">
                <span className="tag">Outpatient</span><span className="tag">Inpatient</span><span className="tag">Community</span>
                <span className="tag">Cancer pathways</span><span className="tag">Cardiology</span><span className="tag">Genetics</span>
                <span className="tag">Rehabilitation</span><span className="tag">Sexual Health</span>
              </div>
            </div>
            <div className="vcard reveal" data-delay="1">
              <div className="ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="1.8">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <h3>Technical Delivery</h3>
              <p>Practical guidance throughout build, integration and testing.</p>
              <div className="tag-title">Examples</div>
              <div className="tags">
                <span className="tag">Configuration reviews</span><span className="tag">Build governance</span><span className="tag">Integration strategy</span>
                <span className="tag">Data migration</span><span className="tag">Reporting validation</span><span className="tag">Security reviews</span>
                <span className="tag">Interface troubleshooting</span>
              </div>
            </div>
            <div className="vcard reveal" data-delay="2">
              <div className="ic">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2A6049" strokeWidth="1.8">
                  <path d="M3 17l5-5 4 3 7-8"/><path d="M3 21h18"/>
                </svg>
              </div>
              <h3>Programme Leadership</h3>
              <p>Helping organisations make informed decisions while maintaining delivery momentum.</p>
              <div className="tag-title">Examples</div>
              <div className="tags">
                <span className="tag">Stakeholder engagement</span><span className="tag">Risk management</span><span className="tag">Scope control</span>
                <span className="tag">Cross-team coordination</span><span className="tag">Vendor liaison</span><span className="tag">Escalation management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="journey">
        <div className="wrap">
          <div className="sec-head reveal" style={{ marginBottom: 0 }}>
            <span className="eyebrow">End to end</span>
            <h2>Support across the entire journey</h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,.78)' }}>From current-state review through to a stabilised, optimised system.</p>
          </div>
          <div className="timeline-h">
            <div className="phase reveal"><div className="pnode"><span></span></div><h4>Discover</h4><ul><li>Current state reviews</li><li>Workflow assessments</li><li>Gap analysis</li></ul></div>
            <div className="phase reveal" data-delay="1"><div className="pnode"><span></span></div><h4>Design</h4><ul><li>Clinical workshops</li><li>Future-state workflows</li><li>Requirements gathering</li></ul></div>
            <div className="phase reveal" data-delay="2"><div className="pnode"><span></span></div><h4>Build</h4><ul><li>Configuration</li><li>Quality reviews</li><li>Standards governance</li></ul></div>
            <div className="phase reveal" data-delay="3"><div className="pnode"><span></span></div><h4>Test</h4><ul><li>Integrated testing</li><li>End user testing</li><li>Defect management</li></ul></div>
            <div className="phase reveal" data-delay="4"><div className="pnode"><span></span></div><h4>Go-Live</h4><ul><li>Floor support</li><li>Command centre support</li><li>Rapid issue resolution</li></ul></div>
            <div className="phase reveal" data-delay="5"><div className="pnode"><span></span></div><h4>Stabilise</h4><ul><li>Post go-live optimisation</li><li>Workflow refinement</li><li>Performance improvement</li></ul></div>
          </div>
        </div>
      </section>

      <section className="block bg-tint" id="experience">
        <div className="wrap">
          <div className="sec-head reveal">
                         <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
         Real programme experience
        </span>
            
            <h2>Experience across international healthcare organisations</h2>
            <p className="lead">A continuous record of hands-on delivery in complex public, private and academic environments.</p>
          </div>
          <div className="exp-wrap">
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2025<br />Present</span></div></div>
              <div className="exp-card"><div className="place-flag">United Kingdom</div><h4>Guy's &amp; St Thomas'</h4><p>Leading design and build across Paediatric Cancer, Palliative Care and Pain services.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2024<br />2025</span></div></div>
              <div className="exp-card"><div className="place-flag">Netherlands</div><h4>Maastricht UMC+ / Ciro</h4><p>Leading strategy, workflow design and implementation across Cardiology, Genetics and Rehabilitation.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2022<br />2024</span></div></div>
              <div className="exp-card"><div className="place-flag">United Kingdom</div><h4>Guy's &amp; St Thomas'</h4><p>Leading Community, Sexual Health and HIV implementation programmes.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2022</span></div></div>
              <div className="exp-card"><div className="place-flag">United Kingdom</div><h4>Royal Devon &amp; Exeter</h4><p>Clinical workflow design, build and go-live support.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2019<br />2021</span></div></div>
              <div className="exp-card"><div className="place-flag">Belgium</div><h4>Saint-Luc University Hospital</h4><p>Ambulatory and Orders implementation lead supporting multiple specialties and integrations.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2017<br />2019</span></div></div>
              <div className="exp-card"><div className="place-flag">United Kingdom</div><h4>University College London hospitals</h4><p>Clinical design and implementation lead across multiple specialist services.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2015<br />2017</span></div></div>
              <div className="exp-card"><div className="place-flag">United States</div><h4>Mount Sinai Hospital</h4><p>Team Lead supporting implementation and go-live across 65 clinical specialties.</p></div>
            </div>
            <div className="exp reveal">
              <div className="rail"><div className="yr"><span className="marker"><i></i></span><span className="y">2017</span></div></div>
              <div className="exp-card"><div className="place-flag">United States</div><h4>University College San Francisco</h4><p>Orders Team Lead supporting upgrade implementation and governance.</p></div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="block bg-white">
        <div className="wrap">
          <div className="sec-head reveal">
       <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
        Measurable outcomes
        </span>
            <h2>Results that show up in the data</h2>
          </div>
          <div className="metrics">
            <div className="metric reveal"><div className="big"><span data-count="95" data-suffix="%">0</span></div><div className="desc">Reduction in ambulatory interface errors</div></div>
            <div className="metric reveal" data-delay="1"><div className="big"><span data-count="75" data-suffix="%">0</span></div><div className="desc">Reduction in result routing errors</div></div>
            <div className="metric reveal" data-delay="2"><div className="big">50–70%</div><div className="desc">Improvement in SLA resolution performance</div></div>
            <div className="metric reveal" data-delay="3"><div className="big"><span data-count="65" data-suffix="+">0</span></div><div className="desc">Clinical specialties supported during implementation</div></div>
          </div>
        </div>
      </section>

      <section className="block bg-tint">
        <div className="wrap">
          <div className="sec-head reveal">
              <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
        What makes Silke IT different
        </span>
           
            <h2>More than a build resource</h2>
            <p className="lead">The difference between an analyst and a partner who has repeatedly delivered.</p>
          </div>
          <div className="diff">
            <div className="diff-row reveal">
              <div className="badge">01</div>
              <div>
                <h3>Not just build</h3>
                <p>Many consultants focus solely on configuration.</p>
                <p>Silke IT works out <strong>why</strong> a workflow exists before deciding <strong>how</strong> it should be implemented.</p>
              </div>
            </div>
            <div className="diff-row reveal" data-delay="1">
              <div className="badge">02</div>
              <div>
                <h3>Technical and operational perspective</h3>
                <p>Decisions are stronger when they combine more than one viewpoint.</p>
                <div className="diff-tags tags">
                  <span className="tag">Clinical workflow</span><span className="tag">Data analysis</span><span className="tag">Infrastructure</span>
                  <span className="tag">Integration</span><span className="tag">Programme delivery</span>
                </div>
              </div>
            </div>
            <div className="diff-row reveal" data-delay="2">
              <div className="badge">03</div>
              <div>
                <h3>Independent advice</h3>
                <p>Recommendations are driven by organisational outcomes, not software preferences.</p>
              </div>
            </div>
            <div className="diff-row reveal" data-delay="3">
              <div className="badge">04</div>
              <div>
                <h3>Experience across multiple healthcare systems</h3>
                <p>A single-programme background sees one way of working. Silke IT has worked across many.</p>
                <div className="diff-tags tags">
                  <span className="tag">NHS organisations</span><span className="tag">Academic Medical Centres</span>
                  <span className="tag">Research Hospitals</span><span className="tag">Private Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block bg-white">
        <div className="wrap">
          <div className="sec-head reveal">
       <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
        Common challenges
        </span>
           
            <h2>Where Silke IT is often called in</h2>
            <p className="lead">Hover to see how each is approached.</p>
          </div>
          <div className="chal-grid">
            <div className="chal reveal"><div className="ch-head"><span className="ch-dot"></span>Programme behind schedule</div><div className="ch-body">Re-baselining scope and sequencing the critical path so the right work happens first.</div></div>
            <div className="chal reveal" data-delay="1"><div className="ch-head"><span className="ch-dot"></span>Design decisions stalled</div><div className="ch-body">Facilitating clinical sign-off with clear options and a recommendation, not open debate.</div></div>
            <div className="chal reveal" data-delay="2"><div className="ch-head"><span className="ch-dot"></span>Build quality concerns</div><div className="ch-body">Configuration reviews and build standards that catch issues before testing does.</div></div>
            <div className="chal reveal" data-delay="3"><div className="ch-head"><span className="ch-dot"></span>Stakeholder misalignment</div><div className="ch-body">Bringing clinical, operational and technical teams to a shared, documented decision.</div></div>
            <div className="chal reveal"><div className="ch-head"><span className="ch-dot"></span>Testing delays</div><div className="ch-body">Practical test planning and defect triage that keeps readiness on track.</div></div>
            <div className="chal reveal" data-delay="1"><div className="ch-head"><span className="ch-dot"></span>Go-live readiness issues</div><div className="ch-body">Honest readiness assessment and the support model to back it up.</div></div>
            <div className="chal reveal" data-delay="2"><div className="ch-head"><span className="ch-dot"></span>Integration problems</div><div className="ch-body">Interface and FHIR troubleshooting across systems and vendors.</div></div>
            <div className="chal reveal" data-delay="3"><div className="ch-head"><span className="ch-dot"></span>Adoption challenges</div><div className="ch-body">Refining workflows post go-live so clinicians actually want to use them.</div></div>
          </div>
        </div>
      </section>

      {}
      <section className="final">
        <div className="wrap">
          <span className="eyebrow on-dark" style={{ color: 'rgba(255,255,255,.75)' }}>Let's talk</span>
          <h2>Planning an EHR implementation?</h2>
          <p>Whether you need implementation leadership, specialist expertise, workflow design, testing guidance or go-live support, Silke IT brings practical experience from large-scale healthcare transformations across multiple countries and systems.</p>
          <div className="final-cta">
 <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Book a consultation"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
 Book a consultation
</button>
            {/* <a className="btn btn-ghost-light" href="https://silkeit.pages.dev/advisory">View advisory services</a> */}
          </div>
        </div>
      </section>

  
    </>
  );
}