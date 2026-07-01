


import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
// Requested Image Imports
import kennyImage from "../assets/KennyAbout.png";
import avinashImage from "../assets/Avinash.png";
import marcImage from "../assets/Marc.png";
import melanieImage from "../assets/Melanie.png";
import API from "../services/api";

const floatingStats = [
  {
    number: 2022,
    suffix: "",
    label: "FOUNDED",
  },
  {
    number: 15,
    suffix: "+",
    label: "Years EHR Experience",
  },
  {
    number: 16,
    suffix: "+",
    label: "Epic Go-Lives",
  },
  {
    number: 5,
    suffix: "",
    label: "Countries",
  },
  {
    number: "Epic & Cerner",
    suffix: "",
    label: "EHR Platforms",
  },
  {
    number: "NHS & Academic",
    suffix: "",
    label: "Healthcare Organisations",
  },
  
];

// const TESTIMONIALS = [
//   {
//     id: 1,
//     initials: "JS",
//     name: "Mr Jack Soudant",
//     role: "Ambulatory Specialist / Team Lead, Maastricht UMC+",
//     text: "I had the pleasure of working with Kenny during both the project phase and the go-live period at Maastricht UMC+. During this time, Kenny consistently demonstrated strong expertise, professionalism, and commitment to delivering high-quality results.\n\nKenny was highly approachable and easy to work with, even in challenging and fast-paced situations. He showed excellent knowledge of Epic workflows and was able to translate complex issues into practical solutions for the team. His support during go-live was particularly valuable, where he remained calm, proactive, and focused on ensuring a smooth transition for end users.\n\nI appreciated Kenny’s collaborative attitude and his ability to work effectively with different stakeholders across the organisation. He made a positive contribution to the success of the project and was a trusted partner throughout the engagement.\n\nI would gladly recommend Kenny for future healthcare IT and Epic consulting projects."
//   },
//   {
//     id: 2,
//     initials: "RV",
//     name: "Mr René van de Klomp",
//     role: "Managing Partner (Strategy & Programmes), Joined Healthcare",
//     text: "I worked with Kenny on an Epic implementation at an academic hospital in the Netherlands. It was a privilege for me to work with him.\n\nKenny is a very pleasant person with a tremendous amount of (Epic) knowledge. He knows how to approach a project to achieve a good result. He is a hard worker and knows how to motivate others, but also how to improve their work as Epic application specialists.\n\nKenny is the kind of person every hospital would love to have!"
//   },
//   {
//     id: 3,
//     initials: "DC",
//     name: "Mr Denis Cordier",
//     role: "Ambulatory Application Manager, Cliniques universitaires Saint-Luc (UCLouvain)",
//     text: "I worked with Kenny for approximately 1.5 years during the Saint-Luc Epic implementation. During this time, he was hired as an experienced external Consultant within the Ambulatory team and owned a variety of complex topics due to his experience, including the development of SmartForms for Dermatology, Vaccination Registries, Chart Abstraction and MyChart integration. He also mentored many of the analysts.\n\nKenny is consistently engaged in his work and demonstrated a high level of expertise, transparency, flexibility and managed expectations beyond expectations. He is willing to adjust his working hours when necessary to ensure tasks are completed on time and to a high standard.\n\nWhen faced with unfamiliar challenges, Kenny proactively consults available documentation and comes back with well-thought-out proposals and focussed outcomes. He also places strong importance on fully understanding each request, ensuring that requirements are clearly defined before proceeding."
//   },
//   {
//     id: 4,
//     initials: "MT",
//     name: "Dr Melanie Tan",
//     role: "Epic Lead for Digital Transformation, Theatres and Anaesthesia at UCLH / Director of Medical Informatics at Cleveland Clinic London",
//     text: "As a clinician needing rapid solutions to frontline issues to be built or demo’ed I find Kenny has always been approachable, friendly, helpful and highly effective. He has the technological background and capabilities way beyond my understanding. He also has a unique mix of intellectual capability, ability to understand my best articulation of a problem I don’t fully understand, give a series of options for me to choose from then help me to weigh up & decide on a suitable solution then to rapidly design and build this.\n\nI have 100% found him to be one of our most effective builders on the team and I recommend him if you’re looking for a highly effective builder/analyst."
//   },
//   {
//     id: 5,
//     initials: "KP",
//     name: "Mr Kevin Pochatila",
//     role: "Epic Orders and EDI TS (2010-2019), Mount Sinai Health System",
//     text: "Over my time at Epic I've worked with well over a hundred consultants, FTEs, clinicians and IT professionals. Kenny stood out among all of these as an individual with a rare combination of skill, diligence, enthusiasm and drive to improve patient and clinician experiences through electronic medical records.\n\nKenny was staffed as an Analyst with the Inpatient and Ambulatory teams at Mt Sinai during my time as a Technical Services Engineer at Epic. Kenny always showed a particular eagerness and zeal to tackle complex issues and provide complete solutions. He helped lead an effort to revamp post-go orders and medication errors and was able to correct a large number of inefficiencies that had been neglected since go-live. He took on this project early in his tenure on the Inpatient team and used it as an opportunity to learn the nuances of the application on the fly as well as make improvements to its deployment at Mt Sinai.\n\nHe was particularly able to coordinate with colleagues from other teams in the Mt. Sinai IT department to move projects and initiatives forward. I would often work with Kenny on requests brought from Clinicians and was impressed with his ability to distill and identify from general requests and dissatisfaction the real issues (or bugs in the software) and work to determine a plan of action to resolve them.\n\nMy favorite thing about working with Kenny was his good-natured spirit that improved the work experience of those around him. Whether it was a cheerful greeting, genuine thanks, or sharing an entertaining story - every interaction with Kenny had an air of positivity."
//   },
//   {
//     id: 6,
//     initials: "RC",
//     name: "Mr Ralph Commins",
//     role: "Senior Manager, Immunocore",
//     text: "I had the pleasure of working closely with Kenny for approximately two years and would not hesitate to recommend him.\n\n Kenny is one of the strongest analysts I have worked with. He combines deep technical expertise with a strong understanding of clinical and operational workflows, and how they should be represented within systems such as Epic and other electronic patient record platforms. \n\nHe has a natural ability to solve complex problems quickly and effectively. Kenny is often at his best when brought into challenging situations that require structure, clarity and delivery focus. He is equally comfortable working with clinicians, administrators and senior leaders, and has a talent for explaining complex concepts in a clear and patient manner. \n\nKenny is also an exceptional team player. He consistently goes above and beyond, putting in significant effort behind the scenes to ensure successful outcomes. Much of this work goes unseen, but the results rarely do. \n\n If I were to summarise Kenny in a few words, I would describe him as a highly capable tactican and problem solver with an outstanding work ethic who, on many occasions, operates like an entire team in one person."


//   },
//   {
//     id: 7,
//     initials: "JS",
//     name: "Mrs Jacqui Seward",
//     role: "Consulting Director, Procea Limited",
//     text: "I had the pleasure of working with Kenny on multiple occasions at Royal Devon - Northern Devon and Maastricht UMC+.\n\nKenny consistently demonstrated outstanding technical capability, exceptional stakeholder engagement, and a strong work ethic. Throughout his engagement, he showed a deep and practical understanding of EPR systems, including configuration, integration, and optimisation. With the ability to quickly grasp complex technical requirements and translate them into effective, scalable solutions Kenny was instrumental in delivering high-quality outcomes. Comfortable working across multidisciplinary environments he can confidently bridge the gap between technical teams and clinical or operational stakeholders.\n\nOne of Kenny's standout strengths is his approach to stakeholder engagement, building trust quickly, communicating clearly, and adapting style to suit different audiences - from frontline users to senior leadership. He actively listens, manages expectations well, and ensures that stakeholders feel heard and supported throughout projects. This has contributed significantly to user adoption and overall project success.\n\nIn addition, he is highly motivated and dependable, consistently going the extra mile to meet deadlines, resolve issues, and ensure deliverables are of the highest standard.\n\nOverall, Kenny is a highly capable, professional, and dedicated addition to any team and I would strongly recommend him without hesitation."
//   }

// ];

export default function App() {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  // Listen to window size to know how many cards are visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 680) {
        setCardsToShow(1); // Mobile
      } else if (window.innerWidth <= 980) {
        setCardsToShow(2); // Tablet
      } else {
        setCardsToShow(3); // Desktop
      }
    };

    handleResize(); // Check immediately on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(
    0,
    testimonials.length - cardsToShow
  );


  useEffect(() => {
  const loadTestimonials = async () => {
    try {
      const res = await API.get("/testimonials");

      const published = res.data.filter(
        (t) => t.published === true
      );

      setTestimonials(published);
      console.log(published);
    } catch (err) {
      console.error(err);
    }
  };

  loadTestimonials();
}, []);

  // Prevent getting stuck on an empty screen if resizing from mobile to desktop
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  // Determine exactly how far to slide the track based on screen size
  let translateString = `calc(-${currentIndex} * (33.333% + 8px))`; // 3 cards
  if (cardsToShow === 2) translateString = `calc(-${currentIndex} * (50% + 12px))`; // 2 cards
  if (cardsToShow === 1) translateString = `calc(-${currentIndex} * (100% + 24px))`; // 1 card


  // Dynamic Array for the SVG Network Reach Diagram
  const mapDots = [];
  for (let y = 20; y < 290; y += 18) {
    for (let x = 20; x < 470; x += 18) {
      mapDots.push(
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.1" className="grid-dot" />
      );
    }
  }


  useEffect(() => {
    if (location.hash) {
      // Remove the '#' to get the exact ID
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Smooth scroll to the section
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If no hash, scroll to top of page
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);



  // Effect to handle intersection observers, scroll events and number counters
  useEffect(() => {
    // 1. Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => revealObs.observe(el));

    // 2. Sticky nav shadow
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Animated counters
// 3. Animated counters
    // 3. Animated counters
    function animateCounter(el) {
      const rawValue = el.dataset.count;
      const target = parseInt(rawValue, 10); 
      
      // FIX: If the value is text (Not a Number), just print it and skip animation
      if (isNaN(target)) {
        el.textContent = rawValue;
        return; 
      }

      const duration = 1500, start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target);
        if (p < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target;
        }
      };
      requestAnimationFrame(tick);
    }
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          counterObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    // FIX 2: Change '.counter' to '.count-up'
    document.querySelectorAll('.count-up').forEach(el => counterObs.observe(el));
    // Cleanup 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObs.disconnect();
      counterObs.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        /* ── TOKENS ──────────────────────────────────────────── */
        :root {
          --red:        #E64013;
          --red-dark:   #C5360F;
          --forest:     #2A6049;
          --sage:       #3D8A68;
          --mint:       #F5FAF7;
          --tint:       #E8F4EF;
          --night:      #0F2318;
          --white:      #FFFFFF;
          --border:     rgba(42,96,73,.15);
          --shadow-sm:  0 2px 12px rgba(15,35,24,.08);
          --shadow-md:  0 8px 32px rgba(15,35,24,.12);
          --shadow-lg:  0 20px 60px rgba(15,35,24,.16);
          --r-sm: 8px; --r-md: 16px; --r-lg: 24px;
          --font-h: 'Comfortaa', sans-serif;
          --font-b: 'Montserrat', sans-serif;
          --maxw:1360px;
        }

        /* ── RESET ───────────────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: var(--font-b);
          color: var(--night);
          background: var(--white);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }
        img { display: block; max-width: 100%; }
        a { text-decoration: none; color: inherit; }
        ul { list-style: none; }



        /* ── SHARED ──────────────────────────────────────────── */
        .section { padding: 96px 40px; }
        .section--tint { background: var(--tint); }
        .section--mint { background: var(--mint); }
        .section--forest { background: var(--forest); }
        .container { max-width: 1460px; margin: 0 auto; }
        .eyebrow {
          font-size: .73rem; font-weight: 700;
          letter-spacing: .16em; text-transform: uppercase;
          color: var(--red); margin-bottom: 12px;
          display: flex; align-items: center; gap: 10px;
        }
        .eyebrow::before { content: ''; width: 20px; height: 2px; background: var(--red); }
        .eyebrow--center { justify-content: center; }
        .eyebrow--light { color: rgba(255,255,255,.6); }
        .eyebrow--light::before { background: var(--red); }
        .section-title {
          font-family: var(--font-h);
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          font-weight: 700; line-height: 1.2;
          color: var(--night); margin-bottom: 16px;
        }
        .section-title--white { color: var(--white); }
        .section-lead {
          font-size: 1rem; color: rgba(15,35,24,.6);
          max-width: 640px; line-height: 1.8; margin-bottom: 56px;
        }
        .section-lead--white { color: rgba(255,255,255,.72); }
        .head-center { text-align: center; max-width: 620px; margin: 0 auto 56px; }
        .head-center .section-lead { margin: 0 auto; }

        .btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 28px; border-radius: 50px;
          font-size: .88rem; font-weight: 600; letter-spacing: .04em;
          cursor: pointer; transition: all .25s; border: 2px solid transparent;
        }
        .btn--red { background: var(--red); color: var(--white); }
        .btn--red:hover { background: var(--red-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(230,64,19,.3); }
        .btn--outline { background: transparent; border-color: var(--forest); color: var(--forest); }
        .btn--outline:hover { background: var(--forest); color: var(--white); transform: translateY(-2px); }
        .btn--white { background: var(--white); color: var(--forest); }
        .btn--white:hover { background: var(--mint); transform: translateY(-2px); }
        .btn--ghost { background: transparent; border: 2px solid rgba(255,255,255,.35); color: var(--white); }
        .btn--ghost:hover { border-color: rgba(255,255,255,.8); background: rgba(255,255,255,.1); transform: translateY(-2px); }

        /* ── HERO ────────────────────────────────────────────── */
        .hero {
          padding-top: 70px; background: var(--mint);
          position: relative; overflow: hidden;
        }
        .hero__grid-dots {
          position: absolute; inset: 0; z-index: 0;
          background-image: radial-gradient(circle, rgba(42,96,73,.12) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.5), transparent 75%);
        }
        .hero__accent {
          position: absolute; bottom: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(to right, var(--red) 0%, var(--forest) 60%, var(--sage) 100%);
        }
        .hero__inner {
          position: relative; z-index: 1;
          max-width:1420px; margin: 0 auto; padding: 76px 40px 80px;
          display: grid; grid-template-columns: 1.25fr 1fr; gap: 56px; align-items: center;
        }
        .hero__title {
          font-family: var(--font-h);
          font-size: clamp(2.2rem, 3.1vw, 3.5rem);
          font-weight: 700; line-height: 1.16; color: var(--night);
          margin-bottom: 22px;
        }
        .hero__title em { font-style: normal; color: var(--forest); position: relative; }
        .hero__title em::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 4px;
          height: 3px; background: var(--red); border-radius: 2px; opacity: .5;
        }
        .hero__sub {
          font-size: 1.02rem; color: rgba(15,35,24,.66);
          max-width: 520px; line-height: 1.8; margin-bottom: 34px;
        }
        .hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

        /* Hero visual — expertise evolution rail */
        .evo {
          background: rgba(255,255,255,.65);
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 30px 30px 26px;
          box-shadow: var(--shadow-md);
          backdrop-filter: blur(6px);
        }
        .evo__label {
          font-size: .68rem; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: var(--forest); margin-bottom: 22px;
        }
        .evo__step {
          position: relative; padding: 0 0 22px 28px;
        }
        .evo__step:last-child { padding-bottom: 0; }
        .evo__step::before {
          content: ''; position: absolute; left: 5px; top: 16px; bottom: -4px;
          width: 2px; background: linear-gradient(var(--sage), rgba(61,138,104,.25));
        }
        .evo__step:last-child::before { display: none; }
        .evo__dot {
          position: absolute; left: 0; top: 4px;
          width: 12px; height: 12px; border-radius: 50%;
          background: var(--white); border: 3px solid var(--sage);
        }
        .evo__step--end .evo__dot { border-color: var(--red); background: var(--red); }
        .evo__name { font-family: var(--font-h); font-weight: 600; font-size: .92rem; color: var(--night); }
        .evo__meta { font-size: .72rem; color: rgba(15,35,24,.5); }

        /* ── STAT STRIP ──────────────────────────────────────── */
        .stats { background: var(--forest); padding: 0 40px; }
        .stats__inner {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(6, 1fr);
          border-left: 1px solid rgba(255,255,255,.1);
        }
        .stat {
          padding: 32px 22px; border-right: 1px solid rgba(255,255,255,.1);
          transition: background .25s;
        }
        .stat:hover { background: rgba(255,255,255,.05); }
        .stat__num {
          font-family: var(--font-h); font-size: 2.1rem; font-weight: 700;
          color: var(--white); line-height: 1; display: flex; align-items: baseline; gap: 2px;
        }
        .stat__num .plus { font-size: 1.3rem; color: var(--red); }
        .stat__val {
          font-family: var(--font-h); font-size: 1.15rem; font-weight: 600;
          color: var(--white); line-height: 1.25;
        }
        .stat__label {
          font-size: .72rem; font-weight: 500; letter-spacing: .06em;
          text-transform: uppercase; color: rgba(255,255,255,.55); margin-top: 10px;
        }

        /* ── STORY ───────────────────────────────────────────── */
        .story__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .story__body p { font-size: .97rem; line-height: 1.9; color: rgba(15,35,24,.75); }
        .story__body p + p { margin-top: 16px; }
        .story__pull {
          background: var(--tint); border-left: 4px solid var(--red);
          border-radius: 0 var(--r-md) var(--r-md) 0;
          padding: 26px 30px;
        }
        .story__pull strong { font-family: var(--font-h); color: var(--forest); }
        .story__quote {
          font-family: var(--font-h); font-size: 1.35rem; font-weight: 600;
          line-height: 1.45; color: var(--night);
        }
        .story__quote span { color: var(--red); }
        .story__quote-meta { margin-top: 16px; font-size: .8rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: rgba(15,35,24,.5); }

        /* ── LIFECYCLE TIMELINE (vertical spine) ─────────────── */
        .life { position: relative; max-width: 860px; margin: 0 auto; }
        .life::before {
          content: ''; position: absolute; left: 50%; top: 6px; bottom: 6px;
          width: 2px; transform: translateX(-50%);
          background: linear-gradient(var(--sage), var(--forest));
        }
        .life__row { position: relative; display: flex; margin-bottom: 14px; }
        .life__row:last-child { margin-bottom: 0; }
        .life__row--l { justify-content: flex-start; }
        .life__row--r { justify-content: flex-end; }
        .life__node {
          position: absolute; left: 50%; top: 18px; transform: translate(-50%, 0);
          width: 16px; height: 16px; border-radius: 50%;
          background: var(--white); border: 4px solid var(--sage); z-index: 2;
        }
        .life__row--end .life__node { border-color: var(--red); background: var(--red); }
        .life__card {
          width: calc(50% - 36px);
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-md); padding: 16px 20px;
          box-shadow: var(--shadow-sm); transition: box-shadow .3s, transform .3s;
        }
        .life__card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
        .life__step { font-size: .68rem; font-weight: 700; letter-spacing: .1em; color: var(--red); }
        .life__title { font-family: var(--font-h); font-weight: 700; font-size: .98rem; color: var(--night); margin: 3px 0 4px; }
        .life__desc { font-size: .82rem; line-height: 1.55; color: rgba(15,35,24,.6); }

        /* ── DIFFERENTIATORS ─────────────────────────────────── */
        .diff__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .diff-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); padding: 32px 30px;
          position: relative; overflow: hidden; transition: box-shadow .3s, transform .3s;
        }
        .diff-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(to right, var(--forest), var(--sage));
          opacity: 0; transition: opacity .3s;
        }
        .diff-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
        .diff-card:hover::before { opacity: 1; }
        .diff-card__icon {
          width: 50px; height: 50px; border-radius: var(--r-sm);
          background: var(--tint); display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
        }
        .diff-card__icon svg { width: 24px; height: 24px; color: var(--forest); }
        .diff-card__title { font-family: var(--font-h); font-weight: 700; font-size: 1.02rem; color: var(--night); margin-bottom: 9px; }
        .diff-card__text { font-size: .86rem; line-height: 1.75; color: rgba(15,35,24,.62); }

        /* ── CERTIFICATIONS ──────────────────────────────────── */
        .certs__header { display: grid; grid-template-columns: 1fr 480px; gap: 64px; align-items: start; margin-bottom: 52px; }
        .certs__outcomes {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); padding: 30px 34px; box-shadow: var(--shadow-sm);
        }
        .certs__outcomes h4 { font-family: var(--font-h); font-size: .95rem; font-weight: 700; color: var(--forest); margin-bottom: 16px; }
        .outcome {
          display: flex; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border);
          font-size: .87rem; color: rgba(15,35,24,.75); line-height: 1.55;
        }
        .outcome:last-child { border-bottom: none; }
        .outcome::before { content: ''; width: 6px; height: 6px; background: var(--red); border-radius: 50%; flex-shrink: 0; margin-top: 7px; }
        .certs__cats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .cert-cat {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); overflow: hidden; transition: box-shadow .3s;
        }
        .cert-cat:hover { box-shadow: var(--shadow-md); }
        .cert-cat__head { background: var(--forest); padding: 16px 22px; display: flex; align-items: center; gap: 12px; }
        .cert-cat__head svg { color: rgba(255,255,255,.75); width: 18px; height: 18px; flex-shrink: 0; }
        .cert-cat__head h3 { font-family: var(--font-h); font-size: .88rem; font-weight: 700; color: var(--white); line-height: 1.3; }
        .cert-cat__body { padding: 18px 22px; }
        .cert-item { padding: 10px 0; border-bottom: 1px solid var(--border); display: flex; gap: 10px; }
        .cert-item:last-child { border-bottom: none; }
        .cert-item__dot { width: 7px; height: 7px; background: var(--sage); border-radius: 50%; flex-shrink: 0; margin-top: 8px; }
        .cert-item__name { font-family: var(--font-h); font-size: .86rem; font-weight: 600; color: var(--night); }
        .cert-item__desc { font-size: .77rem; color: rgba(15,35,24,.55); line-height: 1.5; margin-top: 2px; }

        /* ── EXPERTISE AREAS ─────────────────────────────────── */
        .areas__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .area {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); padding: 28px 26px; transition: box-shadow .3s, transform .3s;
        }
        .area:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
        .area__head { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .area__head svg { width: 22px; height: 22px; color: var(--red); }
        .area__head h3 { font-family: var(--font-h); font-size: 1rem; font-weight: 700; color: var(--night); }
        .area__pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .pill {
          background: var(--tint); color: var(--forest);
          font-size: .76rem; font-weight: 600;
          padding: 6px 13px; border-radius: 50px; border: 1px solid var(--border);
        }

        /* ── TEAM ────────────────────────────────────────────── */
        .team__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        .team-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); overflow: hidden; position: relative;
          transition: box-shadow .3s, transform .3s;
        }
        .team-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-6px); }
        .team-card__img-wrap { width: 100%; aspect-ratio: 3/4; overflow: hidden; background: var(--tint); position: relative; }
        .team-card__img { width: 100%; height: 100%; object-fit: cover; object-position: top; transition: transform .5s; }
        .team-card:hover .team-card__img { transform: scale(1.04); }
        .team-card__overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,35,24,.85) 0%, transparent 50%); opacity: 0; transition: opacity .3s; }
        .team-card:hover .team-card__overlay { opacity: 1; }
        .team-card__linkedin {
          position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
          background: var(--white); color: var(--forest);
          padding: 8px 20px; border-radius: 50px; font-size: .75rem; font-weight: 700;
          letter-spacing: .04em; opacity: 0; transition: opacity .3s; white-space: nowrap;
          display: flex; align-items: center; gap: 6px;
        }
        .team-card:hover .team-card__linkedin { opacity: 1; }
        .team-card__info { padding: 22px 20px; }
        .team-card__name { font-family: var(--font-h); font-size: 1rem; font-weight: 700; color: var(--night); margin-bottom: 5px; }
        .team-card__role { font-size: .78rem; font-weight: 600; color: var(--forest); line-height: 1.4; }
        .team-card__tag {
          display: inline-block; margin-top: 10px; background: var(--tint); color: var(--forest);
          font-size: .7rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 50px;
        }

        /* ── INTERNATIONAL REACH (custom network diagram) ─────── */
        .reach__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .reach__map { width: 100%; height: auto; }
        .reach__map .grid-dot { fill: rgba(255,255,255,.10); }
        .reach__map .arc { fill: none; stroke: rgba(245,250,247,.35); stroke-width: 1.5; stroke-dasharray: 4 5; }
        .reach__map .marker-ring { fill: none; stroke: var(--red); stroke-width: 2; opacity: .6; transform-box: fill-box; transform-origin: center; animation: pulse 2.6s ease-out infinite; }
        .reach__map .marker { fill: var(--red); }
        .reach__map .marker-core { fill: var(--white); }
        .reach__map .m-label { fill: rgba(255,255,255,.85); font-family: var(--font-b); font-size: 11px; font-weight: 600; }
        @keyframes pulse { 0% { r: 6; opacity: .7; } 100% { r: 20; opacity: 0; } }
        .reach__flags { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
        .reach-flag {
          display: flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14);
          border-radius: 50px; padding: 9px 18px; transition: background .25s, transform .25s;
        }
        .reach-flag:hover { background: rgba(255,255,255,.16); transform: translateY(-2px); }
        .reach-flag__emoji { font-size: 1.2rem; }
        .reach-flag__name { font-family: var(--font-h); font-size: .82rem; font-weight: 600; color: rgba(255,255,255,.92); }

        /* ── JOURNEY (horizontal rail) ───────────────────────── */
        .journey { position: relative; padding: 20px 0 0; }
        .journey__rail { position: relative; display: grid; grid-template-columns: repeat(6, 1fr); gap: 35px; }
        .journey__rail::before {
          content: ''; position: absolute; left: 7%; right: 7%; top: 11px; height: 2px;
          background: linear-gradient(to right, var(--sage), var(--forest));
        }
        .jstep { position: relative; text-align: center; padding: 0 8px; }
        .jstep__dot {
          width: 22px; height: 22px; border-radius: 50%; margin: 0 auto 16px;
          background: var(--white); border: 4px solid var(--sage); position: relative; z-index: 1;
        }
        .jstep--end .jstep__dot { border-color: var(--red); background: var(--red); }
        .jstep__name { font-family: var(--font-h); font-size: .82rem; font-weight: 600; color: var(--night); line-height: 1.35; }
        .journey__note { max-width: 720px; margin: 48px auto 0; text-align: center; font-size: .92rem; line-height: 1.85; color: rgba(15,35,24,.65); }

        /* ── HOW WE WORK ─────────────────────────────────────── */
        .work__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .work-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); padding: 30px 26px; text-align: left;
          transition: box-shadow .3s, transform .3s;
        }
        .work-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
        .work-card__num { font-family: var(--font-h); font-size: .85rem; font-weight: 700; color: var(--red); margin-bottom: 14px; }
        .work-card__title { font-family: var(--font-h); font-size: 1.02rem; font-weight: 700; color: var(--night); margin-bottom: 9px; }
        .work-card__text { font-size: .85rem; line-height: 1.7; color: rgba(15,35,24,.62); }

        /* ── TESTIMONIALS ────────────────────────────────────── */
        .tst__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        .tst-card {
          background: var(--white); border: 1px solid var(--border);
          border-radius: var(--r-lg); padding: 36px 32px; position: relative;
          transition: box-shadow .3s, transform .3s;
        }
        .tst-card:hover { box-shadow: var(--shadow-md); transform: translateY(-4px); }
        .tst-card__mark { position: absolute; top: 24px; right: 28px; font-size: 5rem; line-height: 1; font-family: Georgia, serif; color: var(--tint); user-select: none; }
        .tst-card__stars { color: #F4B84A; font-size: 1rem; letter-spacing: 2px; margin-bottom: 16px; }
        .tst-card__text { font-size: .9rem; line-height: 1.85; color: rgba(15,35,24,.72); margin-bottom: 22px; font-style: italic; }
        .tst-card__author { display: flex; align-items: center; gap: 12px; }
        .tst-card__avatar {
          width: 42px; height: 42px; border-radius: 50%; background: var(--tint);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-h); font-weight: 700; color: var(--forest); font-size: .95rem; flex-shrink: 0;
        }
        .tst-card__name { font-family: var(--font-h); font-weight: 700; font-size: .9rem; color: var(--night); }
        .tst-card__org { font-size: .75rem; color: rgba(15,35,24,.45); font-weight: 500; }

        /* ── CTA ─────────────────────────────────────────────── */
        .cta {
          padding: 92px 40px; text-align: center; position: relative; overflow: hidden;
          background: linear-gradient(135deg, var(--forest) 0%, var(--sage) 100%);
        }
        .cta::before {
          content: ''; position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,.06) 1.5px, transparent 1.5px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse at center, rgba(0,0,0,.5), transparent 70%);
        }
        .cta__inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
        .cta__title { font-family: var(--font-h); font-size: clamp(1.9rem, 3.5vw, 2.8rem); font-weight: 700; color: var(--white); line-height: 1.2; margin-bottom: 18px; }
        .cta__sub { font-size: 1rem; color: rgba(255,255,255,.82); line-height: 1.8; margin-bottom: 38px; }
        .cta__actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }


        /* ── REVEAL ──────────────────────────────────────────── */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal--delay-1 { transition-delay: .08s; }
        .reveal--delay-2 { transition-delay: .16s; }
        .reveal--delay-3 { transition-delay: .24s; }
        .reveal--delay-4 { transition-delay: .32s; }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .reach__map .marker-ring { animation: none; }
          html { scroll-behavior: auto; }
        }

        /* ── RESPONSIVE ──────────────────────────────────────── */
        @media (max-width: 1060px) {
          .hero__inner { grid-template-columns: 1fr; gap: 40px; }
          .evo { max-width: 460px; }
          .stats__inner { grid-template-columns: repeat(3, 1fr); }
          .story__grid { grid-template-columns: 1fr; gap: 40px; }
          .diff__grid { grid-template-columns: repeat(2, 1fr); }
          .certs__header { grid-template-columns: 1fr; }
          .areas__grid { grid-template-columns: 1fr; }
          .team__grid { grid-template-columns: repeat(2, 1fr); }
          .reach__grid { grid-template-columns: 1fr; gap: 36px; }
          .work__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 760px) {
          .nav { padding: 0 24px; }
          .nav__links li:not(:last-child) { display: none; }
          .section { padding: 64px 24px; }
          .hero__inner { padding: 56px 24px 64px; }
          .stats { padding: 0 24px; }
          .stats__inner { grid-template-columns: repeat(2, 1fr); }
          .diff__grid { grid-template-columns: 1fr; }
          .certs__cats { grid-template-columns: 1fr; }
          .tst__grid { grid-template-columns: 1fr; }
          .work__grid { grid-template-columns: 1fr; }
          /* lifecycle: collapse to single column */
          .life::before { left: 7px; }
          .life__node { left: 7px; }
          .life__row { justify-content: flex-end; }
          .life__card { width: calc(100% - 36px); }
          /* journey: stack */
          .journey__rail { grid-template-columns: 1fr; gap: 18px; }
          .journey__rail::before { left: 10px; right: auto; top: 0; bottom: 0; width: 2px; height: auto; }
          .jstep { text-align: left; padding-left: 34px; }
          .jstep__dot { position: absolute; left: 0; top: 0; margin: 0; }
          .footer { padding: 28px 24px; flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .team__grid { grid-template-columns: 1fr; }
          .stats__inner { grid-template-columns: 1fr; }
        }


        
/* ---------- Testimonial Carousel & Modal ---------- */
.carousel-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}
.carousel-viewport {
  overflow: hidden;
  width: 100%;
}
.carousel-track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.carousel-track > * {
  /* Defaults to showing 3 cards at a time on desktop */
  flex: 0 0 calc(33.333% - 16px);
}

/* 5-Line Truncation */
.line-clamp-5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
/* Subtle fade at the bottom to indicate more text */
.line-clamp-5::after {
  content: "Read more...";
  display: block;
  font-weight: 600;
  color: var(--sage, #3D8A68);
  margin-top: 8px;
}

/* Circular Navigation Buttons */
.nav-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--white, #fff);
  border: 1px solid var(--line, #DCEAE3);
  display: grid;
  place-items: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(15,35,24,.06);
}
.nav-btn:hover:not(:disabled) {
  border-color: var(--sage, #3D8A68);
  color: var(--sage, #3D8A68);
  transform: scale(1.05);
}
.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  box-shadow: none;
}

/* Glassmorphism Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 35, 24, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}
.modal-content {
  background: #fff;
  border-radius: 24px;
  padding: 40px;
  max-width: 700px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 60px rgba(15,35,24,.15);
  transform: translateY(20px);
  animation: slideUp 0.3s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
}
.modal-close {
  position: absolute;
  top: 24px;
  right: 24px;
  background: var(--tint, #E8F4EF);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: var(--forest, #2A6049);
  transition: background 0.2s;
}
.modal-close:hover {
  background: #d1e6db;
}

@keyframes fadeIn { to { opacity: 1; } }
@keyframes slideUp { to { transform: translateY(0); } }

/* Responsive adjustments for the carousel */
@media (max-width: 980px) {
  .carousel-track > * { flex: 0 0 calc(50% - 12px); } /* 2 cards on tablet */
}
@media (max-width: 680px) {
  .carousel-track > * { flex: 0 0 100%; } /* 1 card on mobile */
  .carousel-wrap { flex-direction: column; }
  .nav-btn-container { display: flex; gap: 16px; margin-top: 16px; }
}

.hero-floating-stats-wrap {
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

      `}</style>


      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero__grid-dots"></div>
        <div className="hero__inner">
          <div className="reveal">
                  <p className="hero-eyebrow">
             About Silke IT
              </p>
          
            <h1 className="hero__title">Helping healthcare organisations deliver better EHR outcomes</h1>
            <p className="hero__sub">A UK-based specialist consultancy built on 15+ years in healthcare technology — combining strategy, clinical insight and hands-on delivery across implementation, optimisation and programme recovery.</p>
            <div className="hero__actions">
             
<button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Discuss Your Programme"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Discuss Your Programme
</button>
              {/* <a href="https://peru-hornet-299626.hostingersite.com/services/" className="btn btn--outline">Explore Services</a> */}
            </div>
          </div>

          <div className="evo reveal reveal--delay-2">
            <div className="evo__label">From software engineering to EHR consultancy</div>
            <div className="evo__step"><span className="evo__dot"></span><div className="evo__name">Software Engineering</div><div className="evo__meta">Foundations in building systems</div></div>
            <div className="evo__step"><span className="evo__dot"></span><div className="evo__name">Data &amp; Analytics</div><div className="evo__meta">Reporting, interoperability</div></div>
            <div className="evo__step"><span className="evo__dot"></span><div className="evo__name">Cerner EHR</div><div className="evo__meta">2.5 years clinical systems</div></div>
            <div className="evo__step"><span className="evo__dot"></span><div className="evo__name">Epic EHR</div><div className="evo__meta">12+ years, 5 countries</div></div>
            <div className="evo__step evo__step--end"><span className="evo__dot"></span><div className="evo__name">Silke IT</div><div className="evo__meta">Founded 2022</div></div>
          </div>
        </div>
        {/* <div className="hero__accent"></div> */}
        
      </section>
  <div className="hero-floating-stats-wrap">
      {floatingStats.map((item, index) => {
        // Check if the value is pure text (and not a number like 2022)
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
                // FIX: Shrink the font size and adjust line height if it is text
style={isText ? { 
  fontSize: '1.4rem', 
  lineHeight: '0',
  fontWeight: 'bold', /* Removes the bold styling */
  fontFamily: "'Comfortaa', 'Montserrat', sans-serif" /* Sets the fonts */
} : {}}              >
                {/* If it's text, show it instantly to avoid a flash of '0' */}
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


      {/* ══ STATS ═════════════════════════════════════════════ */}
      {/* <div className="stats">
        <div className="stats__inner">
          <div className="stat reveal"><div className="stat__num"><span className="counter" data-target="2022">0</span></div><div className="stat__label">Founded</div></div>
          <div className="stat reveal reveal--delay-1"><div className="stat__num"><span className="counter" data-target="15">0</span><span className="plus">+</span></div><div className="stat__label">Years EHR Experience</div></div>
          <div className="stat reveal reveal--delay-2"><div className="stat__num"><span className="counter" data-target="16">0</span><span className="plus">+</span></div><div className="stat__label">Epic Go-Lives</div></div>
          <div className="stat reveal reveal--delay-3"><div className="stat__num"><span className="counter" data-target="5">0</span></div><div className="stat__label">Countries</div></div>
          <div className="stat reveal reveal--delay-3"><div className="stat__val">Epic &amp; Cerner</div><div className="stat__label">EHR Platforms</div></div>
          <div className="stat reveal reveal--delay-4"><div className="stat__val">NHS &amp; Academic</div><div className="stat__label">Healthcare Organisations</div></div>
        </div>
      </div> */}

      {/* ══ OUR STORY ═════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="story__grid">
            <div className="reveal">
              <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Our Story
        </span>
              <h2 className="section-title">Why Silke IT was founded</h2>
              <div className="story__body">
                <p>Most EHR programmes don't struggle because of the technology. They struggle when strategy, governance, workflows and delivery drift out of step.</p>
                <p>After supporting more than 16 Epic go-lives across five countries, a pattern kept repeating: capable teams and serious investment, yet the same friction around decisions, workflow design, stakeholder alignment and adoption.</p>
                <p>Silke IT was founded in December 2022 to close that gap — pairing international EHR experience with systems analysis and programme leadership, so organisations can make informed decisions and deliver outcomes that hold up clinically, operationally and technically.</p>
              </div>
            </div>
            <div className="story__pull reveal reveal--delay-2">
              <p className="story__quote">Recommendations grounded in <span>real delivery</span> — not theory alone.</p>
              <div className="story__quote-meta">The Silke IT principle</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EHR LIFECYCLE ═════════════════════════════════════ */}
      <section className="section section--tint">
        <div className="container">
          <div className="head-center reveal">
<span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Full EHR Lifecycle
        </span>
            <h2 className="section-title">From strategy to long-term optimisation</h2>
            <p className="section-lead">Silke IT supports organisations at every stage of the EHR journey — not just one slice of delivery.</p>
          </div>
          <div className="life">
            <div className="life__row life__row--l reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 01</div><div className="life__title">Strategy</div><div className="life__desc">Programme direction, scope and the case for change.</div></div></div>
            <div className="life__row life__row--r reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 02</div><div className="life__title">Governance</div><div className="life__desc">Decision-making structures and accountability that hold under pressure.</div></div></div>
            <div className="life__row life__row--l reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 03</div><div className="life__title">Workflow Design</div><div className="life__desc">Clinical and operational workflows shaped with the people who use them.</div></div></div>
            <div className="life__row life__row--r reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 04</div><div className="life__title">Configuration</div><div className="life__desc">Build oversight and standards that keep the system maintainable.</div></div></div>
            <div className="life__row life__row--l reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 05</div><div className="life__title">Testing</div><div className="life__desc">Readiness assessment and validation ahead of go-live.</div></div></div>
            <div className="life__row life__row--r reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 06</div><div className="life__title">Go-Live</div><div className="life__desc">Cutover planning and command-centre support when it counts.</div></div></div>
            <div className="life__row life__row--l reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 07</div><div className="life__title">Stabilisation</div><div className="life__desc">Settling the build and resolving issues in the weeks after launch.</div></div></div>
            <div className="life__row life__row--r reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 08</div><div className="life__title">Optimisation</div><div className="life__desc">Performance improvement and measurable efficiency gains over time.</div></div></div>
            <div className="life__row life__row--l life__row--end reveal"><span className="life__node"></span><div className="life__card"><div className="life__step">STAGE 09</div><div className="life__title">Programme Recovery</div><div className="life__desc">Diagnosing root causes and rebuilding challenged programmes.</div></div></div>
          </div>
        </div>
      </section>

      {/* ══ DIFFERENTIATORS ═══════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="head-center reveal">
                                      <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
What Makes Us Different
        </span>
            <h2 className="section-title">More than configuration expertise</h2>
            <p className="section-lead">Most consultants specialise in one area. Silke IT works across the whole ecosystem that decides whether a programme succeeds.</p>
          </div>
          <div className="diff__grid">
            <div className="diff-card reveal reveal--delay-1">
              <div className="diff-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" /></svg></div>
              <div className="diff-card__title">Strategic Perspective</div>
              <div className="diff-card__text">Seeing how each decision affects governance, scope, risk, budget, adoption and long-term sustainability.</div>
            </div>
            <div className="diff-card reveal reveal--delay-2">
              <div className="diff-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <div className="diff-card__title">Clinical Workflow Insight</div>
              <div className="diff-card__text">Hands-on experience with clinicians, operational leads and SMEs to improve workflows and the user experience.</div>
            </div>
            <div className="diff-card reveal reveal--delay-3">
              <div className="diff-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg></div>
              <div className="diff-card__title">Technical Depth</div>
              <div className="diff-card__text">Interoperability, FHIR, data migration, reporting, analytics and infrastructure across the EHR estate.</div>
            </div>
            <div className="diff-card reveal reveal--delay-1">
              <div className="diff-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
              <div className="diff-card__title">Programme Recovery</div>
              <div className="diff-card__text">Finding the root causes behind delays and delivery challenges, then setting practical recovery plans.</div>
            </div>
            <div className="diff-card reveal reveal--delay-2">
              <div className="diff-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
              <div className="diff-card__title">Leadership &amp; Mentoring</div>
              <div className="diff-card__text">Coaching, knowledge transfer and capability building so improvements outlast the engagement.</div>
            </div>
            <div className="diff-card reveal reveal--delay-3">
              <div className="diff-card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></div>
              <div className="diff-card__title">Independent Advice</div>
              <div className="diff-card__text">Recommendations driven by your objectives, workflow efficiency and programme success — nothing else.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATIONS & EXPERTISE ════════════════════════ */}
      <section className="section section--tint">
        <div className="container">
          <div className="certs__header reveal">
            <div>
                          <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Certifications &amp; Expertise
        </span>
              <h2 className="section-title">Certified across the clinical and operational landscape</h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>Module certifications spanning the full delivery picture — so a single, accountable team can lead end to end.</p>
            </div>
            <div className="certs__outcomes reveal reveal--delay-2">
              <h4>The Silke IT difference</h4>
              <div className="outcome">Reduced delivery risk through expert-led design and governance</div>
              <div className="outcome">Faster recovery of underperforming or challenged builds</div>
              <div className="outcome">Improved workflow efficiency and sustained adoption</div>
              <div className="outcome">Scalable solutions aligned to organisational strategy</div>
            </div>
          </div>

          <div className="certs__cats">
            <div className="cert-cat reveal reveal--delay-1">
              <div className="cert-cat__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                <h3>Core Clinical &amp; Operational Delivery</h3>
              </div>
              <div className="cert-cat__body">
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Ambulatory</div><div className="cert-item__desc">Outpatient workflow design and optimisation across complex specialties</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Clinical Documentation</div><div className="cert-item__desc">Structured inpatient documentation for multidisciplinary teams and compliance</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Outpatient Departments</div><div className="cert-item__desc">Operational models configured across multi-site organisations</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Oncology</div><div className="cert-item__desc">Chemotherapy protocols and treatment-plan configuration</div></div></div>
              </div>
            </div>

            <div className="cert-cat reveal reveal--delay-2">
              <div className="cert-cat__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                <h3>Access, Scheduling &amp; Patient Flow</h3>
              </div>
              <div className="cert-cat__body">
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Scheduling</div><div className="cert-item__desc">Clinic templates, capacity planning and improved patient access</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">PAS / ADT</div><div className="cert-item__desc">Registration, patient movement and bed management</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Referrals &amp; Authorisations</div><div className="cert-item__desc">Referral pathways and approval workflow design</div></div></div>
              </div>
            </div>

            <div className="cert-cat reveal reveal--delay-3">
              <div className="cert-cat__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                <h3>Orders, Integration &amp; Interoperability</h3>
              </div>
              <div className="cert-cat__body">
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Order Management (CPOE)</div><div className="cert-item__desc">Labs, medications and procedures for safety and standardisation</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Order Transmittal</div><div className="cert-item__desc">Downstream routing and interface logic to ancillary systems</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">External Access</div><div className="cert-item__desc">Secure partner access supporting integrated care</div></div></div>
              </div>
            </div>

            <div className="cert-cat reveal reveal--delay-4">
              <div className="cert-cat__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                <h3>Data Capture &amp; Reporting</h3>
              </div>
              <div className="cert-cat__body">
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Structured Documentation Tools</div><div className="cert-item__desc">Dynamic forms for discrete data capture and decision support</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Data-Driven Optimisation</div><div className="cert-item__desc">Reporting and analytics used to drive measurable improvement</div></div></div>
                <div className="cert-item"><span className="cert-item__dot"></span><div><div className="cert-item__name">Compliance &amp; Governance</div><div className="cert-item__desc">Data quality, audit readiness and standards alignment</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXPERTISE AREAS ═══════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="head-center reveal">
            <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
Expertise Areas
        </span>
            <h2 className="section-title">Specialist knowledge across three domains</h2>
          </div>
          <div className="areas__grid">
            <div className="area reveal reveal--delay-1">
              <div className="area__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                <h3>Clinical &amp; Operational</h3>
              </div>
              <div className="area__pills">
                <span className="pill">Ambulatory</span><span className="pill">Community Care</span><span className="pill">Inpatient Workflows</span><span className="pill">Clinical Documentation</span><span className="pill">Orders Management</span><span className="pill">Scheduling &amp; Access</span><span className="pill">Referrals</span><span className="pill">Care Pathways</span>
              </div>
            </div>
            <div className="area reveal reveal--delay-2">
              <div className="area__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                <h3>Technical &amp; Integration</h3>
              </div>
              <div className="area__pills">
                <span className="pill">FHIR Integration</span><span className="pill">Third-Party Systems</span><span className="pill">Reporting</span><span className="pill">Data Analysis</span><span className="pill">Data Migration</span><span className="pill">Workflow Automation</span><span className="pill">Security &amp; Access</span><span className="pill">Interoperability</span>
              </div>
            </div>
            <div className="area reveal reveal--delay-3">
              <div className="area__head">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                <h3>Programme Delivery</h3>
              </div>
              <div className="area__pills">
                <span className="pill">Governance</span><span className="pill">Risk Management</span><span className="pill">Stakeholder Management</span><span className="pill">Vendor Coordination</span><span className="pill">Team Leadership</span><span className="pill">Delivery Planning</span><span className="pill">Recovery Programmes</span><span className="pill">Optimisation Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ══ MEET THE EXPERTS ══════════════════════════════════ */}
      <section id="team"className="section section--tint">
        <div className="container">
          <div className="head-center reveal">
<span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
The Team
        </span>
            <h2 className="section-title">Meet the experts</h2>
            <p className="section-lead">A multidisciplinary team pairing clinical insight with technical depth and international delivery experience.</p>
          </div>
          <div className="team__grid">
            <div className="team-card reveal reveal--delay-1">
              <div className="team-card__img-wrap">
                <img className="team-card__img" src={kennyImage} alt="Kenny Silke" />
                <div className="team-card__overlay"></div>
                <a href="https://www.linkedin.com/in/kenny-silke-18a6b66/" target="_blank" rel="noopener noreferrer" className="team-card__linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </a>
              </div>
              <div className="team-card__info">
                <div className="team-card__name">Kenny Silke</div>
                <div className="team-card__role">Founder &amp; Director</div>
                <span className="team-card__tag">EHR Specialist</span>
              </div>
            </div>

            <div className="team-card reveal reveal--delay-2">
              <div className="team-card__img-wrap">
                <img className="team-card__img" src={marcImage} alt="Dr Marc Bolger" />
                <div className="team-card__overlay"></div>
                <a href="https://www.linkedin.com/company/silke-it/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="team-card__linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </a>
              </div>
              <div className="team-card__info">
                <div className="team-card__name">Dr Marc Bolger</div>
                <div className="team-card__role">Neonatal Doctor &amp; EHR Specialist</div>
                <span className="team-card__tag">Clinical Lead</span>
              </div>
            </div>

            <div className="team-card reveal reveal--delay-3">
              <div className="team-card__img-wrap">
                <img className="team-card__img" src={melanieImage} alt="Melanie Grace Celespara" />
                <div className="team-card__overlay"></div>
                <a href="https://www.linkedin.com/in/melanie-grace-celespara-27061a204/" target="_blank" rel="noopener noreferrer" className="team-card__linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </a>
              </div>
              <div className="team-card__info">
                <div className="team-card__name">Melanie Grace Celespara</div>
                <div className="team-card__role">Clinical Nurse Research Specialist</div>
                <span className="team-card__tag">Clinical Advisory</span>
              </div>
            </div>

            <div className="team-card reveal reveal--delay-4">
              <div className="team-card__img-wrap">
                <img className="team-card__img" src={avinashImage} alt="Avinash Chander" />
                <div className="team-card__overlay"></div>
                <a href="https://www.linkedin.com/in/avinashchander-epicconsultant/" target="_blank" rel="noopener noreferrer" className="team-card__linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  LinkedIn
                </a>
              </div>
              <div className="team-card__info">
                <div className="team-card__name">Avinash Chander</div>
                <div className="team-card__role">Associate Advisor &amp; EHR Specialist</div>
                <span className="team-card__tag">EHR Advisory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INTERNATIONAL REACH ═══════════════════════════════ */}

      {/* ══ JOURNEY ═══════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="head-center reveal">
                                           <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
The Silke IT Journey
        </span>
            <h2 className="section-title">Built across the full technology stack</h2>
          </div>
          <div className="journey reveal reveal--delay-1">
            <div className="journey__rail">
              <div className="jstep"><span className="jstep__dot"></span><div className="jstep__name">Advisory</div></div>
              <div className="jstep"><span className="jstep__dot"></span><div className="jstep__name">Data Analysis &amp; Reporting</div></div>
              <div className="jstep"><span className="jstep__dot"></span><div className="jstep__name">Cerner EHR</div></div>
              <div className="jstep"><span className="jstep__dot"></span><div className="jstep__name">Epic EHR</div></div>
              <div className="jstep"><span className="jstep__dot"></span><div className="jstep__name">Programme Leadership</div></div>
              <div className="jstep jstep--end"><span className="jstep__dot"></span><div className="jstep__name">Silke IT</div></div>
            </div>
            <p className="journey__note">Silke IT wasn't built on configuration experience alone. It's the result of a career spanning engineering, architecture, analytics, interoperability and programme leadership — which is exactly why technology, data, workflows and people are treated as one problem, not four.</p>
          </div>
        </div>
      </section>

      {/* ══ HOW WE WORK ═══════════════════════════════════════ */}
      <section className="section section--tint">
        <div className="container">
          <div className="head-center reveal">
                               <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block ">
How We Work
        </span>
            <h2 className="section-title">Principles that guide every engagement</h2>
          </div>
          <div className="work__grid">
            <div className="work-card reveal reveal--delay-1"><div className="work-card__num">01</div><div className="work-card__title">Practical</div><div className="work-card__text">Recommendations grounded in real programme delivery, not theory.</div></div>
            <div className="work-card reveal reveal--delay-2"><div className="work-card__num">02</div><div className="work-card__title">Transparent</div><div className="work-card__text">Clear communication, honest assessments and early flagging of risk.</div></div>
            <div className="work-card reveal reveal--delay-3"><div className="work-card__num">03</div><div className="work-card__title">Collaborative</div><div className="work-card__text">Working alongside clinical, operational and technical teams toward shared goals.</div></div>
            <div className="work-card reveal reveal--delay-4"><div className="work-card__num">04</div><div className="work-card__title">Outcome Focused</div><div className="work-card__text">Measured by adoption, efficiency and real programme results.</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-testimonials">
        <div className="text-center mb-8 md:mb-12">
          <span className="block w-full text-center text-[#E64013] text-[13px] font-bold tracking-[0.35em] uppercase mb-8">
            Client Feedback
          </span>
          <h2
            className="font-bold text-[#071E14] text-center"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="container">
          <div className="carousel-wrap">

            {/* Left Arrow */}
            <button
              className="nav-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Carousel Viewport */}
            <div className="carousel-viewport">
              <div
                className="carousel-track"
                style={{ transform: `translateX(${translateString})` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div
                    key={testimonial._id}
                    className="testimonial-card"
                    onClick={() => setActiveModal(testimonial)}
                  >
                    <div className="testimonial-stars" style={{ color: '#E64013', display: 'flex', gap: '4px', marginBottom: '16px' }}>
                      {[...Array(5)].map((_, idx) => (
                        <svg key={idx} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* 5-Line clamp class applied here */}
                    <div className="line-clamp-5 text-[#5B6F65] text-sm md:text-base" style={{ textAlign: 'justify' }}>
                      {/* Splits the text by \n\n to render proper paragraphs */}
                      {(testimonial?.testimonial || "").split("\n\n").map((para, pIdx) => (
                        <p key={pIdx} style={{ marginBottom: '10px' }}>{para}</p>
                      ))}
                    </div>

                    <div className="testimonial-author" style={{ marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div
  className="author-avatar"
  style={{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#E8F4EF",
    color: "#2A6049",
    display: "grid",
    placeItems: "center",
    fontWeight: "bold"
  }}
>
  {testimonial.avatar || "NA"}
</div>
                      <div>
                        <p className="author-name " style={{ fontWeight: 'bold', color: '#071E14', fontSize: '0.9rem' }}>{testimonial.name}</p>
                        <p className="author-org" style={{ color: '#5B6F65', fontSize: '0.8rem' }}>{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              className="nav-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* ============ MODAL PORTAL ============ */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          {/* Added maxWidth and padding here to make it wider and more open */}
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '1200px', padding: '30px' }}
          >
            <button
              className="modal-close"
              onClick={() => setActiveModal(null)}
              style={{ zIndex: 50 }} /* Forces the button to the very top layer */
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ pointerEvents: 'none' }} /* Stops the icon from interfering with the button's click area */
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="testimonial-stars" style={{ color: '#E64013', display: 'flex', gap: '4px', marginBottom: '24px' }}>
              {[...Array(5)].map((_, idx) => (
                <svg key={idx} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Increased lineHeight slightly to 1.8 to match the open design */}
            <div style={{ color: '#071E14', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
              {(activeModal?.testimonial || "").split("\n\n").map((para, pIdx) => (
                <p key={pIdx} style={{ marginBottom: '20px' }}>{para}</p>
              ))}
            </div>

            <div className="testimonial-author" style={{ marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center', paddingTop: '28px', borderTop: '1px solid #DCEAE3' }}>
              <div className="author-avatar" style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#E8F4EF', color: '#2A6049', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {activeModal.avatar}
              </div>
              <div>
                <p className="author-name" style={{ fontWeight: 'bold', color: '#071E14', fontSize: '1.05rem' }}>{activeModal.name}</p>
                <p className="author-org" style={{ color: '#5B6F65', fontSize: '0.95rem' }}>{activeModal.designation}</p>
              </div>
            </div>

          </div>
        </div>
      )}



      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section className="cta">
        <div className="cta__inner reveal">
          <h2 className="cta__title">Need experienced EHR leadership?</h2>
          <p className="cta__sub">Whether you're planning a new implementation, optimising an existing environment or recovering a challenged programme, Silke IT brings the expertise and practical guidance to move it forward.</p>
          <div className="cta__actions">
            
            <button
  className="btn-primary"
  onClick={() => {
    sessionStorage.setItem(
      "buttonSource",
      "Schedule a Consultation"
    );

    navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
  }}
>
Schedule a Consultation
</button>
            {/* <a href="https://peru-hornet-299626.hostingersite.com/services/" className="btn btn--ghost">Explore Services</a> */}
          </div>
        </div>
      </section>


    </>
  );
}