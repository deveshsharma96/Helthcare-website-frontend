import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { PopupButton } from "react-calendly";
const floatingStats = [
  {
    number: 22,
    suffix: "+",
    label: "Year Experience",
  },
  {
    number: 16,
    suffix: "+",
    label: "EHR Programmes",
  },
  {
    number: 12,
    suffix: "+",
    label: "Health Systems",
  },
  {
    number: 5,
    suffix: "",
    label: "Countries",
  },
  
];

const styles = `

:root {
  --red: #E64013;
  --forest: #2A6049;
  --sage: #3D8A68;
  --mint: #F5FAF7;
  --tint: #E8F4EF;
  --night: #0F2318;
  --ink: #13261D;
  --muted: #5B6F65;
  --line: #DCEAE3;
  --white: #FFFFFF;
  --shadow: 0 1px 2px rgba(15,35,24,.04),0 8px 30px rgba(15,35,24,.06);
  --shadow-lg: 0 2px 4px rgba(15,35,24,.05),0 24px 60px rgba(15,35,24,.12);
  --radius: 18px;
  --maxw:1360px;
  --font-h: 'Comfortaa', sans-serif;
  --font-b: 'Montserrat', sans-serif;
}
* { box-sizing: border-box; margin: 0; padding: 0 }
html { scroll-behavior: smooth }
body {
  font-family: 'Montserrat', system-ui, sans-serif;
  color: var(--ink);
  background: var(--white);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none }

.eyebrow {
  font-family: 'Comfortaa', cursive;
  font-size: .78rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--sage);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: .6em;
}
.eyebrow::before { content: ""; width: 26px; height: 2px; background: var(--red); border-radius: 2px }
h1, h2, h3, h4 { font-family: 'Montserrat', sans-serif; line-height: 1.15; color: var(--night); font-weight: 700 }
h2 { font-size: clamp(1.7rem, 3.4vw, 2.5rem); letter-spacing: -.01em }
h3 { font-size: 1.18rem; letter-spacing: -.005em }
p { color: var(--muted) }
section { padding: 74px 0 }
.lead { font-size: 1.08rem; color: var(--muted); max-width: 62ch }

/* ---------- Reveal ---------- */
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1) }
.reveal.in { opacity: 1; transform: none }
.reveal.d1 { transition-delay: .08s }
.reveal.d2 { transition-delay: .16s }
.reveal.d3 { transition-delay: .24s }
.reveal.d4 { transition-delay: .32s }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none }
  html { scroll-behavior: auto }
  .pulse, .flow, .float, .mk-ring { animation: none !important }
}

/* ---------- Buttons ---------- */
.btn { display: inline-flex; align-items: center; gap: .55em; padding: 14px 26px; border-radius: 999px; font-weight: 600; font-size: .95rem; cursor: pointer; border: 0; transition: transform .2s, background .2s, box-shadow .2s; font-family: inherit }
.btn-primary { background: var(--red); color: #fff }
.btn-primary:hover { background: var(--sage); transform: translateY(-2px); box-shadow: 0 12px 28px rgba(230,64,19,.22) }
.btn-ghost { background: transparent; color: var(--forest); border: 1.5px solid var(--line) }
.btn-ghost:hover { border-color: var(--sage); background: var(--tint); transform: translateY(-2px) }
.btn svg { width: 17px; height: 17px }

/* ---------- Hero ---------- */
.hero {
  position: relative; overflow: hidden;
  background: radial-gradient(circle at 82% 12%, rgba(61,138,104,.10), transparent 42%), radial-gradient(circle at 12% 88%, rgba(230,64,19,.06), transparent 40%), linear-gradient(170deg, var(--mint) 0%, #EFF7F2 60%, var(--tint) 100%);
  padding: 64px 0 78px;
}
.hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 54px; align-items: center }
.hero h1 { font-family: var(--font-h); font-size: clamp(2.2rem, 3.1vw, 3.5rem); font-weight: 700; line-height: 1.16; color: var(--night); margin-bottom: 22px;}
.hero h1 em { font-style: normal; color: var(--red) }


.hero p.lead { margin-bottom: 26px }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 30px }
.hl { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 22px; max-width: 520px }
.hl li { list-style: none; display: flex; align-items: flex-start; gap: 10px; font-size: .92rem; font-weight: 500; color: var(--ink) }
.hl .ck { flex: 0 0 20px; width: 20px; height: 20px; border-radius: 50%; background: var(--tint); display: grid; place-items: center; margin-top: 1px }
.hl .ck svg { width: 11px; height: 11px; stroke: var(--forest); stroke-width: 3; fill: none }

/* floating shapes */
.float { position: absolute; border-radius: 30%; filter: blur(2px); opacity: .5; animation: float 9s ease-in-out infinite }
.float.a { width: 70px; height: 70px; background: rgba(61,138,104,.18); top: 14%; right: 46%; animation-delay: 0s }
.float.b { width: 40px; height: 40px; background: rgba(230,64,19,.14); bottom: 18%; right: 8%; animation-delay: 2s }
@keyframes float { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-16px) } }

/* hero svg network */
.hero-vis { position: relative }
.hero-vis svg { width: 100%; height: auto; overflow: visible }
.flow { stroke-dasharray: 5 9; animation: flow 2.4s linear infinite }
@keyframes flow { to { stroke-dashoffset: -28 } }
.pulse { transform-origin: center; animation: pulse 3s ease-in-out infinite }
@keyframes pulse { 0%, 100% { opacity: .35; r: 5 } 50% { opacity: 1; r: 7 } }
.node-label { font-family: 'Montserrat'; font-size: 11px; font-weight: 600; fill: var(--night) }
.node-core { font-family: 'Montserrat'; font-size: 12.5px; font-weight: 700; fill: #fff }

/* ---------- Why contact (cards) ---------- */
.band { background: var(--mint) }
.head-block{
  max-width: 1100px;
  margin: 0 auto 40px;
  text-align: center;
}

.head-block h2{
  margin-top: 14px;
}

.head-block p{
  margin: 14px auto 0;
  max-width: 900px;
}
.cards-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px }
.card { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 30px; box-shadow: var(--shadow); transition: transform .25s, box-shadow .25s, border-color .25s }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--tint) }
.card .ic { width: 46px; height: 46px; border-radius: 13px; background: var(--tint); display: grid; place-items: center; margin-bottom: 18px }
.card .ic svg { width: 23px; height: 23px; stroke: var(--forest); fill: none; stroke-width: 1.8 }
.card h3 { margin-bottom: 10px }
.card p { font-size: .94rem }
.card ul { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px }
.card ul li { list-style: none; font-size: .8rem; font-weight: 600; color: var(--forest); background: var(--tint); padding: 5px 11px; border-radius: 999px }

/* ---------- Process timeline ---------- */
.proc { position: relative; margin-top: 46px }
.proc-track { display: grid; grid-template-columns: repeat(5,1fr); gap: 18px; position: relative }
.proc-track::before { content: ""; position: absolute; top: 21px; left: 6%; right: 6%; height: 2px; background: linear-gradient(90deg, var(--tint), var(--sage), var(--tint)); z-index: 0 }
.step { position: relative; z-index: 1; text-align: center }
.step .num { width: 44px; height: 44px; border-radius: 50%; background: var(--white); border: 2px solid var(--sage); color: var(--forest); font-weight: 700; display: grid; place-items: center; margin: 0 auto 16px; font-size: 1.02rem; box-shadow: 0 0 0 6px var(--mint); transition: background .3s, color .3s, transform .3s }
.step.in .num { background: var(--forest); color: #fff; transform: scale(1.04) }
.step h4 { font-size: .98rem; color: var(--night); margin-bottom: 7px }
.step p { font-size: .85rem }

/* ---------- Service selector ---------- */
.svc-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 40px }
.svc { cursor: pointer; text-align: left; background: var(--white); border: 1.5px solid var(--line); border-radius: 15px; padding: 20px; transition: transform .2s, border-color .2s, box-shadow .2s, background .2s; font-family: inherit }
.svc:hover { transform: translateY(-3px); border-color: var(--sage); box-shadow: var(--shadow) }
.svc.sel { border-color: var(--red); background: linear-gradient(180deg, #fff, var(--tint)); box-shadow: 0 0 0 3px rgba(230,64,19,.12) }
.svc .si { width: 38px; height: 38px; border-radius: 11px; background: var(--tint); display: grid; place-items: center; margin-bottom: 13px; transition: background .2s }
.svc.sel .si { background: var(--red) }
.svc .si svg { width: 20px; height: 20px; stroke: var(--forest); fill: none; stroke-width: 1.7; transition: stroke .2s }
.svc.sel .si svg { stroke: #fff }
.svc h4 { font-size: .95rem; color: var(--night); margin-bottom: 5px }
.svc p { font-size: .8rem; line-height: 1.45 }
.svc-hint { margin-top: 18px; font-size: .85rem; color: var(--sage); font-weight: 500; display: flex; align-items: center; gap: 8px }
.svc-hint svg { width: 15px; height: 15px; stroke: var(--sage); fill: none; stroke-width: 2 }

/* ---------- Form ---------- */
.form-wrap { display: grid; grid-template-columns: .85fr 1.15fr; gap: 48px; position: relative; }
.form-aside-wrapper { height: 100%; }
.form-aside { 
  position: -webkit-sticky; 
  position: sticky; 
  top: 40px; 
}
.form-aside h2 { margin: 14px 0 16px }
.form-aside p { font-size: .96rem; margin-bottom: 24px }
.aside-points li { list-style: none; display: flex; gap: 12px; align-items: flex-start; padding: 13px 0; border-top: 1px solid var(--line); font-size: .9rem; color: var(--ink) }
.aside-points li:last-child { border-bottom: 1px solid var(--line) }
.aside-points .dot { flex: 0 0 9px; width: 9px; height: 9px; border-radius: 50%; background: var(--red); margin-top: 7px }

form#enq { background: var(--white); border: 1px solid var(--line); border-radius: 22px; padding: 34px; box-shadow: var(--shadow-lg); align-self: start; }
.fset { border: 0; margin-bottom: 26px }
.fset legend { font-family: 'Comfortaa', cursive; font-size: .72rem; letter-spacing: .16em; text-transform: uppercase; color: var(--sage); font-weight: 600; margin-bottom: 16px; width: 100%; padding-bottom: 9px; border-bottom: 1px solid var(--line) }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px }
.field { display: flex; flex-direction: column; margin-bottom: 15px }
.field.full { grid-column: 1/-1 }
.field label { font-size: .82rem; font-weight: 600; color: var(--night); margin-bottom: 7px }
.field label .req { color: var(--red) }
.field input, .field select, .field textarea {
  font-family: inherit; font-size: .92rem; color: var(--ink);
  padding: 12px 14px; border: 1.5px solid var(--line); border-radius: 11px; background: var(--mint);
  transition: border-color .2s, box-shadow .2s, background .2s; width: 100%;
}
.field textarea { resize: vertical; min-height: 120px }
.field input:focus, .field select:focus, .field textarea:focus {
  outline: none; border-color: var(--sage); background: #fff; box-shadow: 0 0 0 3px rgba(61,138,104,.14)
}
.field input.err, .field select.err, .field textarea.err { border-color: var(--red); box-shadow: 0 0 0 3px rgba(230,64,19,.12) }
.field .msg { font-size: .74rem; color: var(--red); margin-top: 5px; min-height: 1px }
.upload { display: flex; flex-direction: column; align-items: center; border: 1.5px dashed var(--line); border-radius: 13px; padding: 24px 22px; text-align: center; background: var(--mint); cursor: pointer; transition: border-color .2s, background .2s }
.upload p, .upload span { max-width: 46ch }
.upload:hover { border-color: var(--sage); background: var(--tint) }
.upload svg { width: 26px; height: 26px; stroke: var(--sage); fill: none; stroke-width: 1.6; margin: 0 auto 10px }
.upload p { font-size: .86rem; color: var(--ink); font-weight: 500 }
.upload span { font-size: .76rem; color: var(--muted) }
.filelist { margin-top: 12px; display: flex; flex-direction: column; gap: 7px }
.filelist .f { display: flex; align-items: center; justify-content: space-between; background: var(--tint); border-radius: 9px; padding: 8px 12px; font-size: .8rem; color: var(--forest); font-weight: 500 }
.filelist .f button { background: none; border: 0; color: var(--red); cursor: pointer; font-size: 1rem; line-height: 1 }
.consent { display: flex; gap: 11px; align-items: flex-start; font-size: .84rem; color: var(--muted) }
.consent-error{
  border:1px solid #E64013;
  padding:12px;
  border-radius:10px;
  background:rgba(230,64,19,.05);
}

.consent input { flex: 0 0 18px; width: 18px; height: 18px; margin-top: 3px; accent-color: var(--forest) }
.consent a { color: var(--forest); text-decoration: underline }
.submit-row { margin-top: 24px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap }
.submit-row .btn-primary { font-size: 1rem; padding: 15px 32px }
.form-note { font-size: .78rem; color: var(--muted) }
.form-ok { display: none; text-align: center; padding: 30px 10px }
.form-ok.show { display: block }
.form-ok .tick { width: 62px; height: 62px; border-radius: 50%; background: var(--tint); display: grid; place-items: center; margin: 0 auto 18px }
.form-ok .tick svg { width: 30px; height: 30px; stroke: var(--forest); fill: none; stroke-width: 2.4 }
.form-ok h3 { font-size: 1.4rem; margin-bottom: 10px }

/* ---------- Map ---------- */
.map-sec { background: var(--mint); position: relative }
.map-shell { position: relative; border-radius: 24px; overflow: hidden; border: 1px solid var(--line); background: linear-gradient(180deg, #F2F9F5, #E8F4EF); box-shadow: var(--shadow) }
.map-shell svg { width: 100%; height: auto; display: block }
.land { fill: #D6E8DF; stroke: #C2DDD0; stroke-width: 1 }
.arc { fill: none; stroke: var(--red); stroke-width: 1.6; opacity: .55; stroke-dasharray: 4 7; animation: flow 3s linear infinite }
.mk-ring { fill: none; stroke: var(--sage); stroke-width: 1.6; transform-origin: center; animation: ring 3s ease-out infinite }
@keyframes ring { 0% { r: 4; opacity: .9 } 70% { r: 16; opacity: 0 } 100% { opacity: 0 } }
.mk-dot { fill: var(--red) }
.mk-txt { font-family: 'Montserrat'; font-size: 11px; font-weight: 600; fill: var(--night) }
.glass {
  position: absolute; top: 50%; left: 36px; transform: translateY(-50%); max-width: 330px;
  background: rgba(255,255,255,.72); backdrop-filter: blur(16px) saturate(140%);
  border: 1px solid rgba(255,255,255,.6); border-radius: 18px; padding: 26px;
  box-shadow: 0 18px 50px rgba(15,35,24,.16);
}
.glass h3 { margin-bottom: 14px; font-size: 1.2rem }
.glass ul li { list-style: none; display: flex; align-items: center; gap: 10px; font-size: .9rem; font-weight: 500; color: var(--ink); padding: 6px 0 }
.glass ul li::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--sage) }

/* ---------- Alt contact ---------- */
.alt-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-top: 42px }
.alt { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; text-align: center; transition: transform .25s, box-shadow .25s, border-color .25s }
.alt:hover { transform: translateY(-5px); box-shadow: 0 18px 40px rgba(42,96,73,.16); border-color: var(--sage) }
.alt .ai { width: 50px; height: 50px; border-radius: 14px; background: var(--tint); display: grid; place-items: center; margin: 0 auto 16px; transition: background .25s }
.alt:hover .ai { background: var(--forest) }
.alt .ai svg { width: 24px; height: 24px; stroke: var(--forest); fill: none; stroke-width: 1.7; transition: stroke .25s }
.alt:hover .ai svg { stroke: #fff }
.alt h4 { font-size: 1rem; margin-bottom: 7px }
.alt p { font-size: .85rem }
.alt a.link { display: inline-block; margin-top: 12px; font-size: .83rem; font-weight: 600; color: var(--red) }

/* ---------- Stats ---------- */
.stats-sec { background: var(--mint) }
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 42px }
.stat { background: linear-gradient(180deg, #fff, var(--tint)); border: 1px solid var(--line); border-radius: var(--radius); padding: 30px 24px; text-align: center; box-shadow: var(--shadow) }
.stat .big { font-size: clamp(2.2rem, 4vw, 2.9rem); font-weight: 800; color: var(--forest); letter-spacing: -.02em; line-height: 1 }
.stat .big.red { color: var(--red) }
.stat .lab { margin-top: 10px; font-size: .88rem; font-weight: 600; color: var(--night) }

/* ---------- Final CTA ---------- */
.final {
  background: linear-gradient(120deg, var(--forest) 0%, var(--sage) 100%);
  position: relative; overflow: hidden; text-align: center; color: #fff;
}
.final::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 80% 20%, rgba(230,64,19,.22), transparent 45%); pointer-events: none }
.final .container{
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 24px;
}
.final h2 { color: #fff; max-width: 18ch; margin: 14px auto 18px }
.final p { color: rgba(255,255,255,.9); max-width: 60ch; margin: 0 auto 28px }
.final .eyebrow { color: #CFE8DC }
.final .eyebrow::before { background: var(--red) }
.final-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap }
.final .btn-ghost { color: #fff; border-color: rgba(255,255,255,.5) }
.final .btn-ghost:hover { background: rgba(255,255,255,.12); border-color: #fff }

/* ---------- Responsive ---------- */
@media (max-width: 980px) {
  .hero-grid { grid-template-columns: 1fr; gap: 38px }
  .hero-vis { max-width: 480px; margin: 0 auto; } /* Removed order: -1, added margin for centering */
  .cards-3 { grid-template-columns: 1fr }
  .svc-grid { grid-template-columns: repeat(2,1fr) }
  .alt-grid { grid-template-columns: repeat(2,1fr) }
  .stats-grid { grid-template-columns: repeat(2,1fr) }
  .form-wrap { grid-template-columns: 1fr; gap: 30px }
  .form-aside { position: static }
  .proc-track { grid-template-columns: 1fr 1fr; gap: 30px 18px }
  .proc-track::before { display: none }
  .glass { position: static; transform: none; max-width: none; margin: 18px; backdrop-filter: none; background: rgba(255,255,255,.92) }
}
@media (max-width: 680px) {
  section { padding: 56px 0 }
  .grid2 { grid-template-columns: 1fr }
  .svc-grid, .alt-grid, .proc-track { grid-template-columns: 1fr }
  .stats-grid { grid-template-columns: 1fr 1fr }
  .hl { grid-template-columns: 1fr }
  form#enq { padding: 24px }
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


/* ── Calendly Discovery Call Section ─────────────────────────────────── */
/* ── Compact Meeting Call Section ─────────────────────────────────── */
.calendly-section {
  margin-top: 15px;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  background: linear-gradient(180deg, #F5FAF7 0%, #FFFFFF 100%);
  border: 1px solid #E8F4EF;
}

.calendar-tag {
  font-family: 'Comfortaa', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #E64013;
  font-weight: 800;
  margin-bottom: 4px;
  display: block;
}

.calendly-section h3 {
  font-family: 'Comfortaa', sans-serif;
  font-size: 1.4rem;
  color: #0F2318;
  margin-bottom: 4px;
}

.calendly-section p {
  color: #5A6E62;
  font-size: 0.85rem;
  margin-bottom: 16px;
}

.calendly-card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #FFFFFF;
  border: 1px solid #DCEAE3;
  border-radius: 16px;
  padding: 16px 20px;
  box-shadow: 0 5px 15px rgba(15,35,24,0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.booking-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.booking-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.booking-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.booking-content li {
  font-size: 0.8rem;
  color: #2A6049;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.booking-content li::before {
  content: "✦";
  margin-right: 8px;
  color: #E64013;
  font-size: 0.7rem;
}

.calendar-btn {
  white-space: nowrap;
  border: none;
  background: #E64013;
  color: #fff;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(230, 64, 19, 0.2);
}

.calendar-btn:hover {
  background:#409767; /* Darker shade of your red */
 
  box-shadow: 0 10px 15px -3px rgba(230, 64, 19, 0.3); /* Deeper, softer shadow */
}

.calendar-btn:active {
  transform: translateY(0); /* Return to original position on click */
}


.btn:disabled { opacity: 0.85; cursor: not-allowed; pointer-events: none; }
.spinner { animation: spin 0.8s linear infinite; }
@keyframes spin { 100% { transform: rotate(360deg); } }

`;

export default function App() {
  const [selectedService, setSelectedService] = useState('Other');
  const [files, setFiles] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const enquiryRef = useRef(null);
  const location = useLocation();
  const [overview, setOverview] = useState("");
  const [additional, setAdditional] = useState("");
  const [formErrors, setFormErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const buttonSource =
      sessionStorage.getItem("buttonSource") ||
      "Contact Page";
  


  useEffect(() => {
    if (location.state?.scrollToForm) {
        setTimeout(() => {
            enquiryRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 150);
    }
}, [location]);

  // Scroll animations and counter effect
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const elements = document.querySelectorAll('.reveal, .step, [data-count]');

    const countUp = (el) => {
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      if (reduce) {
        el.textContent = target + suffix;
        return;
      }
      let start = null;
      const dur = 1300;
      
      const tick = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(tick);
    };


    
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target;
          el.classList.add('in');
          
          if (el.hasAttribute('data-count') && !el.classList.contains('counted')) {
            el.classList.add('counted');
            countUp(el);
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.50, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // File handling
  const handleFileDrop = (e) => {
    e.preventDefault();
    e.currentTarget.style.borderColor = '';
    if (e.dataTransfer && e.dataTransfer.files) {
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
      e.target.value = '';
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    let ok = true;

    const fieldNames = {
  firstName: "First Name",
  lastName: "Last Name",
  organisation: "Organisation",
  email: "Business Email",
  service: "Service Required",
  overview: "Project Overview",
  consent: "Privacy Policy Consent"
};
    const missingFields = [];
    const requiredFields = form.querySelectorAll('[required]');
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    requiredFields.forEach((el) => {
      if (el.type === 'checkbox') {
        if (!el.checked) {
          ok = false;
          newErrors.consent =
            'Please accept the Privacy Policy and consent before submitting.';
        }
      } else if (!el.value.trim()) {
        ok = false;
       const fieldLabel =
              fieldNames[el.name] || el.name;

            newErrors[el.name] =
              `${fieldLabel} is required.`;

            missingFields.push(fieldLabel);
      } else if (el.type === 'email' && !EMAIL_REGEX.test(el.value.trim())) {
        ok = false;
        newErrors[el.name] = 'Enter a valid email address.';
      }
    });
    setFormErrors(missingFields);
    setErrors(newErrors);

    if (ok) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      data.service = selectedService;
      data.files = files.map((f) => f.name);
      data.submittedAt = new Date().toISOString();

      // NEW
      data.buttonSource = buttonSource;
      setIsLoading(true);
      try {

  const response = await fetch(
  `${import.meta.env.VITE_API_URL}/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (result.success) {
    sessionStorage.removeItem("buttonSource");

    setIsSubmitted(true);

    form.reset();

    setSelectedService("Other");

    setFiles([]);


    setTimeout(() => {
  enquiryRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}, 100);



  } else {

    alert("Failed to submit enquiry.");

  }

} catch (error) {

  console.error(error);

  alert("Server error. Please try again.");

}finally {
        setIsLoading(false); // 2. Turn off loading when the request finishes
      }
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="float a"></div><div className="float b"></div>
        <div className="container">
            <br/>   <br/>
          <div className="hero-grid">
            <div className="hero-copy">
                                <p className="hero-eyebrow">
           Start a conversation
              </p>
              <h1 className="reveal d1">Let's discuss your <em>EHR challenge</em></h1>
              <p className="lead reveal d2">Planning a new implementation, improving an existing environment, recovering a programme under pressure, or seeking independent strategic guidance — Silke IT works across the full Electronic Health Record lifecycle.</p>
              <div className="hero-cta reveal d3">
                <a href="#enquiry" className="btn btn-primary">Request a consultation

                </a>
                {/* <a href="#services" className="btn btn-ghost">Explore services</a> */}
              </div>
              <ul className="hl reveal d4">
                <li><span className="ck"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>22+ years in digital healthcare</li>
                <li><span className="ck"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>International programme delivery</li>
                <li><span className="ck"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Advisory through recovery</li>
                <li><span className="ck"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round"/></svg></span>Independent &amp; vendor-neutral</li>
              </ul>
            </div>
            <div className="hero-vis reveal d2">
              <svg viewBox="0 0 460 420" role="img" aria-label="EHR capability network connecting clinical workflows, data, interoperability, programme delivery, infrastructure and optimisation">
                <defs>
                  <linearGradient id="core" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#2A6049"/><stop offset="1" stopColor="#3D8A68"/>
                  </linearGradient>
                  <linearGradient id="nodefill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#F0F8F4"/>
                  </linearGradient>
                </defs>
                <g strokeLinecap="round">
                  <line className="flow" x1="230" y1="210" x2="230" y2="70" stroke="#3D8A68" strokeWidth="1.6"/>
                  <line className="flow" x1="230" y1="210" x2="400" y2="135" stroke="#E64013" strokeWidth="1.6"/>
                  <line className="flow" x1="230" y1="210" x2="400" y2="290" stroke="#3D8A68" strokeWidth="1.6"/>
                  <line className="flow" x1="230" y1="210" x2="230" y2="355" stroke="#3D8A68" strokeWidth="1.6"/>
                  <line className="flow" x1="230" y1="210" x2="60" y2="290" stroke="#E64013" strokeWidth="1.6"/>
                  <line className="flow" x1="230" y1="210" x2="60" y2="135" stroke="#3D8A68" strokeWidth="1.6"/>
                </g>
                <g>
                  <g><circle cx="230" cy="70" r="34" fill="url(#nodefill)" stroke="#DCEAE3"/><text className="node-label" x="230" y="67" textAnchor="middle">Clinical</text><text className="node-label" x="230" y="80" textAnchor="middle">Workflows</text></g>
                  <g><circle cx="400" cy="135" r="34" fill="url(#nodefill)" stroke="#DCEAE3"/><text className="node-label" x="400" y="132" textAnchor="middle">Data &amp;</text><text className="node-label" x="400" y="145" textAnchor="middle">Reporting</text></g>
                  <g><circle cx="400" cy="290" r="34" fill="url(#nodefill)" stroke="#DCEAE3"/><text className="node-label" x="400" y="294" textAnchor="middle">Interop</text></g>
                  <g><circle cx="230" cy="355" r="34" fill="url(#nodefill)" stroke="#DCEAE3"/><text className="node-label" x="230" y="352" textAnchor="middle">Programme</text><text className="node-label" x="230" y="365" textAnchor="middle">Delivery</text></g>
                  <g><circle cx="60" cy="290" r="34" fill="url(#nodefill)" stroke="#DCEAE3"/><text className="node-label" x="60" y="294" textAnchor="middle">Infra</text></g>
                  <g><circle cx="60" cy="135" r="34" fill="url(#nodefill)" stroke="#DCEAE3"/><text className="node-label" x="60" y="138" textAnchor="middle">Optimise</text></g>
                </g>
                <circle className="pulse mk-dot" cx="230" cy="140" r="5"/><circle className="pulse" cx="315" cy="172" r="5" fill="#E64013" style={{animationDelay: '.6s'}}/>
                <circle className="pulse" cx="315" cy="250" r="5" fill="#3D8A68" style={{animationDelay: '1s'}}/><circle className="pulse" cx="145" cy="250" r="5" fill="#E64013" style={{animationDelay: '1.4s'}}/>
                <circle cx="230" cy="210" r="52" fill="url(#core)"/>
                <circle cx="230" cy="210" r="52" fill="none" stroke="#E64013" strokeWidth="2" opacity=".55"/>
                <text className="node-core" x="230" y="206" textAnchor="middle">EHR</text>
                <text className="node-core" x="230" y="222" textAnchor="middle">Platform</text>
              </svg>
            </div>
          </div>
        </div>
      </section>


      <section className="stats-sec">
        <div className="container">
          <div className="head-block reveal">
              <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Why clients choose Silke IT
        </span>
            <h2>Experienced support where it matters most</h2>
          </div>

          
          {/* <div className="stats-grid">
            <div className="stat reveal d1"><div className="big" data-count="22" data-suffix="+">0</div><div className="lab">Years experience</div></div>
            <div className="stat reveal d2"><div className="big" data-count="16" data-suffix="+">0</div><div className="lab">Large EHR programmes</div></div>
            <div className="stat reveal d3"><div className="big red" data-count="5">0</div><div className="lab">Countries supported</div></div>
            <div className="stat reveal d4"><div className="big" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>End&#8209;to&#8209;End</div><div className="lab">Advisory through recovery</div></div>
          </div> */}
          
 
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
  

        </div>
        
        
      </section>



      {/* ============ WHY ORGANISATIONS CONTACT ============ */}
      <section className="band">
        <div className="container">
          <div className="head-block reveal">
                                <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Why organisations get in touch
        </span>
            <h2>Experienced support for complex healthcare programmes</h2>
            <p className="lead">Most enquiries arrive at a turning point — a programme that needs to move faster, a decision that needs an independent view, or an environment that should be working harder than it is.</p>
          </div>
          <div className="cards-3">
            <div className="card reveal d1">
              <div className="ic"><svg viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Independent expertise</h3>
              <p>Vendor-neutral advice shaped entirely around your objectives and operational realities — not a supplier's roadmap.</p>
            </div>
            <div className="card reveal d2">
              <div className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" strokeLinecap="round"/></svg></div>
              <h3>End-to-end capability</h3>
              <p>One point of accountability across the whole lifecycle.</p>
              <ul><li>Strategy</li><li>Design</li><li>Configuration</li><li>Implementation</li><li>Optimisation</li><li>Recovery</li></ul>
            </div>
            <div className="card reveal d3">
              <div className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></svg></div>
              <h3>Proven programme experience</h3>
              <p>Delivery across multiple countries, healthcare systems and large-scale EHR transformation programmes — public, private and research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}

      <section>
        <div className="container">
          <div className="head-block reveal">
                                            <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
What happens next
        </span>
            <h2>A clear, low-pressure engagement process</h2>
            <p>From first enquiry to active support, you always know what comes next.</p>
          </div>
          <div className="proc">
            <div className="proc-track">
              <div className="step reveal d1"><div className="num">1</div><h4>Submit your enquiry</h4><p>Share your objectives, challenges and priorities.</p></div>
              <div className="step reveal d2"><div className="num">2</div><h4>Initial review</h4><p>Your enquiry is read and assessed personally.</p></div>
              <div className="step reveal d3"><div className="num">3</div><h4>Discovery discussion</h4><p>A focused conversation to understand requirements.</p></div>
              <div className="step reveal d4"><div className="num">4</div><h4>Recommended approach</h4><p>Practical recommendations and engagement options.</p></div>
              <div className="step reveal d4"><div className="num">5</div><h4>Programme support</h4><p>Delivery of targeted consultancy services.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICE SELECTOR ============ */}
<section id="services" className="band">
  <div className="container">
    <div className="head-block reveal">
                                                  <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
How can we help?
        </span>
    
      <h2>Choose the area you'd like to discuss</h2>
      <p>Select a service and it will pre-fill the enquiry form below. You can change it at any time.</p>
    </div>
    
    <div className="svc-grid" id="svcGrid">
      {[
        { id: 'Advisory', title: 'Advisory & Strategy', desc: 'Strategic guidance and programme planning.', delay: 'd1', svg: <><path d="M12 3v6M12 21v-3M5 8l3 3M19 8l-3 3" strokeLinecap="round"/><circle cx="12" cy="14" r="3"/></> },
        { id: 'Implementation', title: 'Implementation', desc: 'Implementation leadership and delivery support.', delay: 'd1', svg: <><path d="M4 18V8l8-4 8 4v10M4 18h16M9 18v-5h6v5" strokeLinejoin="round"/></> },
        { id: 'Design & Configuration', title: 'Design & Configuration', desc: 'Clinical workflow design and system build.', delay: 'd2', svg: <><path d="M3 7l4-4 3 3-4 4zM7 11l9 9 4-4-9-9" strokeLinejoin="round"/></> },
        { id: 'Optimisation', title: 'Optimisation', desc: 'Improving efficiency, adoption and outcomes.', delay: 'd2', svg: <><path d="M4 16l5-6 4 3 6-8" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5h4v4" strokeLinecap="round" strokeLinejoin="round"/></> },
        { id: 'Recovery', title: 'Programme Recovery', desc: 'Stabilising and recovering struggling programmes.', delay: 'd1', svg: <><path d="M20 12a8 8 0 11-2.3-5.6M20 4v4h-4" strokeLinecap="round" strokeLinejoin="round"/></> },
        { id: 'Infrastructure', title: 'Infrastructure & Technical', desc: 'Architecture, environments and technical advisory.', delay: 'd2', svg: <><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01" strokeLinecap="round"/></> },
        { id: 'Integration', title: 'Integration & Interoperability', desc: 'FHIR, interfaces and connected systems.', delay: 'd3', svg: <><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="12" cy="18" r="2.5"/><path d="M6 8.5v3a2 2 0 002 2h2M18 8.5v3a2 2 0 01-2 2h-2" strokeLinecap="round"/></> },
        { id: 'Other', title: 'Other', desc: 'Custom consultancy requirements.', delay: 'd3', svg: <><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></> }
      ].map(svc => (
        
        /* 
          1. The wrapper takes the scroll animation classes (.reveal). 
             React won't touch this class list when state changes.
          2. display: 'flex' ensures the grid height behaves normally.
        */
        <div key={svc.id} className={`reveal ${svc.delay}`} style={{ display: 'flex' }}>
          
          {/* The button strictly handles the React state class (.sel) */}
          <button 
            type="button" 
            className={`svc ${selectedService === svc.id ? 'sel' : ''}`} 
            onClick={() => setSelectedService(svc.id)}
            style={{ width: '100%' }}
          >
            <div className="si"><svg viewBox="0 0 24 24">{svc.svg}</svg></div>
            <h4>{svc.title}</h4><p>{svc.desc}</p>
          </button>
          
        </div>
        
      ))}
    </div>

    <div
  style={{
    marginTop: "20px",
    fontWeight: 600,
    color: "#2A6049",
    fontSize: "16px"
  }}
>
  Selected Service: {selectedService}
</div>
    
    <p className="svc-hint reveal"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>Your selection carries straight into the form below.</p>
  </div>
</section>

      {/* ============ FORM ============ */}
      <section id="enquiry" ref={enquiryRef}>
        <div className="container">
          <div className="form-wrap">
            {/* By nesting the 'sticky' element inside a wrapper that fills 
              the full height of the grid track, we ensure cross-browser 
              compatibility so it floats perfectly from top to bottom.
            */}
            <div className="form-aside-wrapper">
              <aside className="form-aside">
                   <br/>   <br/>
                               <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Tell us about your programme
        </span>
                <h2>The more you share, the better prepared we'll be</h2>
                <p>A short overview of your organisation, objectives and current challenges is enough to start. Everything you send is treated as confidential.</p>
                <ul className="aside-points">
                  <li><span className="dot"></span>Read and assessed personally — not routed through a call centre.</li>
                  <li><span className="dot"></span>No obligation. The first conversation is about fit, not a sales pitch.</li>
                  <li><span className="dot"></span>Typical reply within two working days.</li>
                </ul>

<div className="calendly-section">
  <span className="calendar-tag">PREFER TO TALK?</span>
  <h3>Book a Discovery Call</h3>
  <p>Book a confidential video meeting at a time that suits you.</p>

  <div className="calendly-card">
    <div className="booking-card">
      <div className="booking-content">
        <ul>
          <li>Choose your own time</li>
          <li>Secure, private video link</li>
        </ul>
      </div>

      <PopupButton
        url="https://calendly.com/silkeit"
        rootElement={document.getElementById("root")}
        text="Book Discovery Call"
        className="calendar-btn"
      />
    </div>
  </div>
</div>
  


              </aside>
            </div>

            {!isSubmitted ? (
<form
  id="enq"
  
  noValidate
  onSubmit={handleSubmit}
>
              {/* Personal */}
              <fieldset className="fset">
                <legend>Personal information</legend>
                <div className="grid2">
                  <div className="field"><label>First name <span className="req">*</span></label><input type="text" name="firstName"  maxLength={50} required className={errors.firstName ? 'err' : ''} onChange={() => setErrors({...errors, firstName: ''})}/><div className="msg">{errors.firstName}</div></div>
                  <div className="field"><label>Last name <span className="req">*</span></label><input type="text" name="lastName"  maxLength={50} required className={errors.lastName ? 'err' : ''} onChange={() => setErrors({...errors, lastName: ''})}/><div className="msg">{errors.lastName}</div></div>
                  <div className="field"><label>Job title</label><input type="text" name="jobTitle"  maxLength={100} /></div>
                  <div className="field"><label>Organisation <span className="req">*</span></label><input type="text" name="organisation"  maxLength={100} required className={errors.organisation ? 'err' : ''} onChange={() => setErrors({...errors, organisation: ''})}/><div className="msg">{errors.organisation}</div></div>
                </div>
              </fieldset>

              {/* Contact */}
              <fieldset className="fset">
                <legend>Contact information</legend>
                <div className="grid2">
                  <div className="field"><label>Business email <span className="req">*</span></label><input type="email" name="email" required className={errors.email ? 'err' : ''} onChange={() => setErrors({...errors, email: ''})}/><div className="msg">{errors.email}</div></div>
                  <div className="field"><label>Telephone number</label><input type="tel" name="phone"  maxLength={20}/></div>
                  <div className="field full"><label>Preferred contact method</label>
                    <select name="contactMethod"><option value="">Select…</option><option>Email</option><option>Telephone</option><option>Video call</option></select>
                  </div>
                </div>
              </fieldset>

              {/* Organisation */}
              <fieldset className="fset">
                <legend>Organisation</legend>
                <div className="grid2">
                  <div className="field"><label>Organisation type</label>
                    <select name="orgType"><option value="">Select…</option><option>NHS Trust</option><option>Private Hospital</option><option>Community Provider</option><option>Research Organisation</option><option>Healthcare Technology Supplier</option><option>Government Agency</option><option>Other</option></select>
                  </div>
                  <div className="field"><label>Organisation size</label>
                    <select name="orgSize"><option value="">Select…</option><option>Small Provider</option><option>Medium Healthcare Organisation</option><option>Large Healthcare Organisation</option><option>Regional Programme</option><option>National Programme</option></select>
                  </div>
                </div>
              </fieldset>

              {/* Programme */}
              <fieldset className="fset">
                <legend>Programme</legend>
                <div className="grid2">
                  <div className="field">
  <label>
    Service required <span className="req">*</span>
  </label>

  <select
    name="service"
    required
    value={selectedService}
    onChange={(e) => setSelectedService(e.target.value)}
    className={errors.service ? "err" : ""}
  >
    <option value="Advisory">Advisory & Strategy</option>
    <option value="Implementation">Implementation</option>
    <option value="Design & Configuration">Design & Configuration</option>
    <option value="Optimisation">Optimisation</option>
    <option value="Recovery">Programme Recovery</option>
    <option value="Infrastructure">Infrastructure & Technical</option>
    <option value="Integration">Integration & Interoperability</option>
    <option value="Other">Other</option>
  </select>

  <div className="msg">{errors.service}</div>
</div>
                  <div className="field"><label>Current programme stage</label>
                    <select name="stage"><option value="">Select…</option><option>Exploring Options</option><option>Business Case</option><option>Procurement</option><option>Design</option><option>Build</option><option>Testing</option><option>Go-Live Preparation</option><option>Live Optimisation</option><option>Recovery Programme</option></select>
                  </div>
                  <div className="field"><label>Desired timescale</label>
                    <select name="timescale"><option value="">Select…</option><option>Immediate</option><option>Within 1 Month</option><option>1–3 Months</option><option>3–6 Months</option><option>6+ Months</option></select>
                  </div>
                  <div className="field"><label>EHR platform</label>
                    <select name="platform"><option value="">Select…</option><option>Epic</option><option>Oracle Health</option><option>MEDITECH</option><option>Altera</option><option>Multiple Systems</option><option>Not Yet Selected</option><option>Other</option></select>
                  </div>
                  <div className="field full"><label>How did you hear about us?</label>
                    <select name="source"><option value="">Select…</option><option>Referral</option><option>LinkedIn</option><option>Search Engine</option><option>Previous Client</option><option>Recruitment Partner</option><option>Other</option></select>
                  </div>
                </div>
                <div className="field full" style={{ marginTop: '4px' }}><label>Project overview <span className="req">*</span></label>
<textarea
  name="overview"
  required
  maxLength={2000}
  value={overview}
  placeholder="An overview of your programme, objectives, current challenges, timeline, and any specific areas where support may be required."
  className={errors.overview ? 'err' : ''}
  onChange={(e) => {
    setOverview(e.target.value);
    setErrors({...errors, overview: ''});
  }}
/>

<div className="msg">
  {overview.length}/2000 characters
</div>

{overview.length === 2000 && (
  <div className="msg">
    Maximum 2000 characters reached.
  </div>
)}
                  <div className="msg">{errors.overview}</div>
                </div>
                <div className="field full"><label>Additional information</label>
<textarea
  name="additional"
  maxLength={1000}
  value={additional}
  style={{ minHeight: '90px' }}
  placeholder="Anything else that would help us understand your requirements."
  onChange={(e) => setAdditional(e.target.value)}
/>

<div className="msg">
  {additional.length}/1000 characters
</div>

{additional.length === 1000 && (
  <div className="msg">
    Maximum 1000 characters reached.
  </div>
)}                </div>
              </fieldset>

              {/* Documents */}
              {/* <fieldset className="fset">
                <legend>Supporting documents</legend>
                <label className="upload" htmlFor="fileInput" onDrop={handleFileDrop} onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--sage)' }} onDragLeave={(e) => { e.preventDefault(); e.currentTarget.style.borderColor = '' }}>
                  <svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" strokeLinecap="round"/></svg>
                  <p>Click to upload, or drag files here</p>
                  <span>Requirements docs, programme plans, gap analyses, recovery assessments — PDF, DOCX, XLSX, PPTX</span>
                </label>
                <input type="file" id="fileInput" ref={fileInputRef} onChange={handleFileInput} multiple accept=".pdf,.docx,.xlsx,.pptx" style={{ display: 'none' }} />
                <div className="filelist" id="fileList">
                  {files.map((file, idx) => (
                    <div className="f" key={idx}>
                      <span>{file.name} · {(file.size / 1024).toFixed(0)} KB</span>
                      <button type="button" aria-label="Remove file" onClick={() => removeFile(idx)}>×</button>
                    </div>
                  ))}
                </div>
              </fieldset> */}

              {/* Consent */}
              <div className="field full">
                <label className="consent"><input type="checkbox" name="consent" required onChange={() => setErrors({...errors, consent: ''})} />
                  <span>I consent to Silke IT contacting me regarding my enquiry and understand my information will be handled in line with the <a href="/contactconsent">Privacy Policy</a>. <span className="req">*</span></span>
                </label>
                <div className="msg">{errors.consent}</div>

{formErrors.length > 0 && (
  <div
    style={{
      marginTop: "10px",
      padding: "12px",
      border: "1px solid #E64013",
      borderRadius: "10px",
      background: "rgba(230,64,19,.05)",
      color: "#E64013",
      fontSize: "14px",
    }}
  >
    <strong>Please complete:</strong>

    <ul style={{ marginTop: "8px", paddingLeft: "18px" }}>
      {formErrors.map((field) => (
        <li key={field}>{field}</li>
      ))}
    </ul>
  </div>
)}
              </div>

              <div className="submit-row">
  <button 
    type="submit" 
    className="btn btn-primary" 
    disabled={isLoading}
  >
    {isLoading ? (
      <>
        Submitting...
        <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"/>
          <path d="M12 2 a10 10 0 0 1 10 10" stroke="#fff"/>
        </svg>
      </>
    ) : (
      <>
        Request consultation
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </>
    )}
  </button>
  <span className="form-note">We reply within two working days.</span>
</div>
            </form>

         
) : (
  <div
    className="form-ok show"
    style={{
      background: "#fff",
      border: "1px solid #DCEAE3",
      borderRadius: "22px",
      padding: "50px",
      boxShadow: "var(--shadow-lg)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
                <div className="tick"><svg viewBox="0 0 24 24"><path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h3>Thank you — your enquiry is on its way</h3>
                <p style={{ maxWidth: '46ch', margin: '0 auto' }}>We'll review the details and come back to you within two working days to arrange a discovery discussion.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="map-sec">
        <div className="container">
          <div className="head-block reveal">
                  <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Where we work
        </span>
            <h2>Supporting healthcare organisations internationally</h2>
            <p>Programme delivery across five countries — public, private and research healthcare.</p>
          </div>
          <div className="map-shell reveal d1">
            <svg viewBox="0 0 900 440" role="img" aria-label="Map showing programme experience">
              <g stroke="#CFE5DA" strokeWidth=".6" opacity=".7">
                <path d="M0 90 H900 M0 175 H900 M0 260 H900 M0 345 H900"/>
                <path d="M150 0 V440 M300 0 V440 M450 0 V440 M600 0 V440 M750 0 V440"/>
              </g>
              <path className="land" d="M70,80 C130,62 210,66 258,88 C306,108 348,98 366,128 C381,152 364,182 332,196 C302,210 308,240 286,260 C264,280 236,264 222,238 C208,212 174,218 150,238 C120,262 88,252 80,222 C72,198 98,174 92,152 C86,126 54,116 70,80 Z"/>
              <path className="land" d="M652,120 C694,104 744,110 786,99 C826,90 860,110 854,142 C848,168 816,172 802,194 C788,214 762,208 742,224 C722,240 696,229 686,208 C676,188 650,188 646,162 C643,142 632,132 652,120 Z"/>
              <path className="land" d="M608,132 C621,124 632,135 629,150 C627,167 616,178 605,171 C597,166 597,147 608,132 Z"/>
              <path className="land" d="M585,150 C594,145 603,153 598,163 C593,174 582,171 580,162 C578,155 580,153 585,150 Z"/>
              
              <path className="arc" d="M250,150 Q440,52 620,148"/>
              <path className="arc" d="M250,150 Q470,46 692,150" style={{animationDelay: '1.2s'}}/>

              <g>
                <circle className="mk-ring" cx="250" cy="150"/><circle className="mk-dot" cx="250" cy="150" r="4.5"/>
                <text className="mk-txt" x="250" y="178" textAnchor="middle">United States</text>
                
                <line x1="591" y1="160" x2="520" y2="150" stroke="#9CC2B2" strokeWidth=".8"/>
                <circle className="mk-ring" cx="591" cy="160" style={{animationDelay: '.4s'}}/><circle className="mk-dot" cx="591" cy="160" r="4.5"/>
                <text className="mk-txt" x="514" y="153" textAnchor="end">Ireland</text>
                
                <line x1="618" y1="150" x2="566" y2="112" stroke="#9CC2B2" strokeWidth=".8"/>
                <circle className="mk-ring" cx="618" cy="150" style={{animationDelay: '.8s'}}/><circle className="mk-dot" cx="618" cy="150" r="4.5"/>
                <text className="mk-txt" x="560" y="108" textAnchor="end">United Kingdom</text>
                
                <line x1="690" y1="150" x2="788" y2="128" stroke="#9CC2B2" strokeWidth=".8"/>
                <circle className="mk-ring" cx="690" cy="150" style={{animationDelay: '1.2s'}}/><circle className="mk-dot" cx="690" cy="150" r="4.5"/>
                <text className="mk-txt" x="794" y="131" textAnchor="start">Netherlands</text>
                
                <line x1="688" y1="170" x2="788" y2="184" stroke="#9CC2B2" strokeWidth=".8"/>
                <circle className="mk-ring" cx="688" cy="170" style={{animationDelay: '1.6s'}}/><circle className="mk-dot" cx="688" cy="170" r="4.5"/>
                <text className="mk-txt" x="794" y="187" textAnchor="start">Belgium</text>
              </g>
            </svg>
            <div className="glass reveal d2">
              <h3>International consultancy support</h3>
              <ul>
                <li>Public healthcare</li>
                <li>Private healthcare</li>
                <li>Research hospitals</li>
                <li>Digital transformation programmes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALT CONTACT ============ */}
      {/* <section>
        <div className="container">
          <div className="head-block reveal">
            <span className="eyebrow">Other ways to connect</span>
            <h2>Connect with Silke IT</h2>
          </div>
          <div className="alt-grid">
            <div className="alt reveal d1">
              <div className="ai"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M8 14h3" strokeLinecap="round"/></svg></div>
              <h4>Consultation request</h4><p>Discuss your programme requirements.</p>
              <a className="link" href="#enquiry">Start enquiry →</a>
            </div>
            <div className="alt reveal d2">
              <div className="ai"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7.2 10v6M7.2 7.1v.01M11 16v-3.1a1.8 1.8 0 013.6 0V16" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h4>Professional networking</h4><p>Connect professionally on LinkedIn.</p>
              <a className="link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Connect →</a>
            </div>
            <div className="alt reveal d3">
              <div className="ai"><svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 13h18" strokeLinejoin="round"/></svg></div>
              <h4>Project enquiries</h4><p>Submit a specific project enquiry.</p>
              <a className="link" href="#enquiry">Submit →</a>
            </div>
            <div className="alt reveal d4">
              <div className="ai"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H8l-4 4V6a2 2 0 012-2h13a2 2 0 012 2z" strokeLinejoin="round"/><path d="M9 10h6M9 13h4" strokeLinecap="round"/></svg></div>
              <h4>Strategic discussions</h4><p>Talk through programme challenges.</p>
              <a className="link" href="#enquiry">Discuss →</a>
            </div>
          </div>
        </div>
      </section>
 */}
      {/* ============ STATS ============ */}
      

  {/* FLOATING STATS */}

{/* FLOATING STATS */}


      {/* ============ FINAL CTA ============ */}
      {/* <section className="final">
        <div className="container">
          <span className="eyebrow reveal">Ready when you are</span>
          <h2 className="reveal d1">Ready to move your programme forward?</h2>
          <p className="reveal d2">Whether you're planning a new implementation, optimising existing workflows, recovering a programme under pressure, or seeking experienced independent guidance — Silke IT can help.</p>
          <div className="final-cta reveal d3">
            <a href="#enquiry" className="btn btn-primary">Request consultation</a>
            <a href="#services" className="btn btn-ghost">Explore services</a>
          </div>
        </div>
      </section> */}
    </>
  );
}