
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import kennyImage from "../assets/KennyHome.jpg";
import earthImage from "../assets/earth.png";
import API from "../services/api";
import gsttLogo from "../assets/SilkeIT-Client-GSTT-Logo-TBG.png";
import mumcLogo from "../assets/SilkeIT-Client-MUMC-Logo-TGB.png";
import ciroLogo from "../assets/SilkeIT-Client-Ciro-Logo-TBG.png";
import aumcLogo from "../assets/SilkeIT-Client-AUMC-LogoTP.png";
import { FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import advisoryImg from "../assets/design-build.jpg";
import implementationImg from "../assets/implementation.png";
import designBuildImg from "../assets/recovery.png";
import optimisationImg from "../assets/recovery1.png";
import recoveryImg from "../assets/recovery3.png";
import { Link } from "react-router-dom";

/* ---------------- CLIENT DATA ---------------- */
const clients = [
  { name: "King's College Hospital", type: "text" },
  { name: "Guy's and St Thomas' NHS Foundation Trust", type: "text" },
  { name: "Ciro", type: "image", src: ciroLogo },
  { name: "Maastricht UMC+", type: "image", src: mumcLogo },
  { name: "Cliniques Universitaires Saint-Luc (UCLouvain)", type: "text" },
  { name: "Royal Devon University Healthcare NHS Foundation Trust", type: "text" },
  { name: "North Devon District Hospital", type: "text" },
  { name: "University College London Hospitals NHS Foundation Trust", type: "text" },
  { name: "University College San Francisco", type: "text" },
  { name: "UCSF Benioff Children’s Hospital", type: "text" },
  { name: "Beth Israel Medical Centre", type: "text" },
  { name: "Mount Sinai Health System", type: "text" },
];


const countryCases = {
  uk: {
    title: "United Kingdom",
    location: "London, Devon, UK",
    flag: "https://flagcdn.com/w160/gb.png",
    services: [
      "Guy's and St Thomas' Hospitals",
      "University College London Hospitals (UCLH)",
      "Royal Devon and Exeter NHS Foundation Trust",
      "Northern Devon Healthcare NHS"
    ],
  },

  netherlands: {
    title: "Netherlands",
    location: "Maastricht",
    flag: "https://flagcdn.com/w160/nl.png",

    services: [
      "Maastrichat UMC+",
      "Ciro"

    ],
  },

  belgium: {
    title: "Belgium",
    location: "Brussels",
    flag: "https://flagcdn.com/w160/be.png",
    services: [
      "Cliniques Universitaires Saint-Luc (UCLouvain)"
    ],
  },

  usa: {
    title: "United States",
    location: "United States",
    flag: "https://flagcdn.com/w160/us.png",
    challenge:
      "UCSF, Benioff Children's Hospital Oakland, Mount Sinai Hospital System, Beth Israel Medical Center",
    services: [
      "University College San Francisco",
      "Benioff Children's Hospital Oakland",
      "Mount Sinai Hospital System",
      "Beth Israel Medical Center"
    ],
  }
};



const serviceSolutions = [
  {
    id: "advisory",
    route: "/advisory",
    title: "Advisory",
    subtitle: "Help make informed Epic EHR decisions through clear, practical and outcome-focused guidance.",
    image: advisoryImg,

    problem: "Healthcare organisations often know Epic is not working as well as it should but lack the independent, experienced perspective to understand why or where to start.",
    whatWeDo: [
      "Implementation planning and programme readiness",
      "Workflow optimisation and clinical alignment",
      "Change management and staff engagement",
      "Go-live readiness assessment, Staff augmentation and specialist cover",
      "Best practices and governance",


    ],
    outcome: "Clearer direction, stronger adoption and a system that works for the people using it every day."
  },
  {
    id: "implementation",
    route: "/epicimplementation",
    title: "Implementation",
    subtitle: "Supporting successful Epic EHR deployments with structured delivery, stakeholder coordination, and operational readiness.",
    image: implementationImg,


    problem: "Implementations often fail due to misaligned build, poor stakeholder engagement and insufficient validation processes.",
    whatWeDo: [
      "Programme delivery oversight",
      "Build and configuration validation",
      "Stakeholder coordination",
      "Go-live planning and execution",
    ],
    outcome: "A stable, predictable implementation with reduced operational and clinical risk."
  },
  {
    id: "design-build",
    route: "/design-and-configuration",
    title: "Design and Configuration",
    subtitle: "Designing and configuring Epic workflows that align clinical, operational, and organisational needs. ",
    image: designBuildImg,


    problem: "Fragmented design decisions and poor clinical-technical alignment create downstream inefficiencies and systemic risk.",
    whatWeDo: [
      "End-to-end workflow design and validation",
      "Clinical and operational alignment",
      "Data structure and navigation design",
      "Governance model definition",

    ],
    outcome: "A clinically aligned, future-proof EHR design that supports safe, efficient care delivery."
  },
  {
    id: "optimisation",
    route: "/optimisation",
    title: "Optimisation",
    subtitle: "Improving Epic performance, usability and efficiency to help teams get more value from their EHR investment.",
    image: optimisationImg,

    problem: "Post-go-live often accumulate inefficiencies, workarounds and fragmented workflows that degrade performance over time.",
    whatWeDo: [
      "Workflow redesign and simplification",
      "Performance and usability improvements",
      "Data centralisation strategies",
      "User experience refinement",
    ],
    outcome: "A streamlined experience that measurably improves productivity and user satisfaction."
  },
  {
    id: "recovery",
    route: "/recovery",
    title: "Recovery",
    subtitle: "Stabilising challenged Epic programmes by identifying risks, restoring direction and rebuilding delivery confidence.",
    image: recoveryImg,


    problem: "Some programmes face significant delivery or adoption challenges requiring rapid intervention and structured recovery planning.",
    whatWeDo: [
      "Programme assessment and diagnostics",
      "Risk identification and mitigation",
      "Recovery roadmap definition",
      "Stakeholder realignment",
    ],
    outcome: "A stabilised system with a clear, actionable recovery roadmap."
  },
];

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
  {
    number: 15,
    suffix: "+",
    label: "Epic Certifications",
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



export default function Hero() {




  const navigate = useNavigate();

  const [activeCountry, setActiveCountry] = useState("uk");

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(serviceSolutions[0].id);



  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [activeModal, setActiveModal] = useState(null);
  // const [cardsToShow, setCardsToShow] = useState(3);

  const [currentIndex, setCurrentIndex] = useState(0);

const [activeModal, setActiveModal] = useState(null);

const [cardsToShow, setCardsToShow] = useState(3);

const [testimonials, setTestimonials] = useState([]);


useEffect(() => {

    const loadTestimonials = async () => {

        try {

            const res = await API.get("/testimonials");

            const published = res.data.filter(
              (t) => t.published === true
            );

            setTestimonials(published);

        }

        catch(err){

            console.error(err);

        }

    };

    loadTestimonials();

},[]);

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




  // const maxIndex = Math.max(0, TESTIMONIALS.length - cardsToShow);
  const maxIndex =
    Math.max(
        0,
        testimonials.length-cardsToShow
    );

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






  const getFlexContainerClass = () => {
    return "w-full flex flex-col lg:flex-row gap-3 lg:gap-4 min-h-[850px] lg:min-h-[600px]";
  };




  const getCardClasses = (isActive) => {
const baseClasses =
  "relative w-full rounded-[24px] lg:rounded-[32px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.3,1)] flex flex-col lg:flex-row overflow-hidden border backdrop-blur-[12px] shadow-sm transform-gpu";
    return `${baseClasses} ${isActive
        ? "flex-[9] min-h-[650px] lg:min-h-[610px] bg-[#cce6d8] border-[#a5ccb5]"
        : "flex-[0.8] min-h-[70px] lg:min-h-[615px] border-white/60 bg-white/20 hover:flex-[1] hover:bg-white/30"
      }`;
  };



  const diffData = [
    { title: "EHR Vendor", desc: "Designed and supported healthcare software, building a deep understanding of how clinical systems work beneath the surface.", bg: "bg-[#2A6049]", text: "text-white", icon: "..." },
    { title: "Infrastructure", desc: "Architected enterprise platforms, networks, databases and environments underpinning critical healthcare services.", bg: "bg-white", text: "text-[#0F2318]", icon: "..." },
    { title: "Data & Analytics", desc: "Analysed large datasets and translated information into practical decisions and operational improvements.", bg: "bg-white", text: "text-[#0F2318]", icon: "..." },
    { title: "EHR Consulting", desc: "Delivered design, implementation, optimisation and recovery across major healthcare organisations internationally.", bg: "bg-white", text: "text-[#0F2318]", icon: "..." },
    { title: "Strategic Advisory", desc: "Leadership, programme direction and recovery expertise aligning technology, clinical operations and organisational goals.", bg: "bg-[#E64013]", text: "text-white", icon: "..." }
  ];

  const chips = [
    "Clinical Workflows", "Data & Reporting", "Infrastructure", "Integration",
    "Programme Delivery", "Team Leadership", "Stakeholder Management", "Programme Recovery"
  ];


  const statsData = [
    { val: "95%", desc: "Reduction in interface errors at Saint-Luc from 800k+", type: "light" },
    { val: "75%", desc: "Reduction in order result routing errors across 65 specialties", type: "dark" },
    { val: "50–70%", desc: "Improvement in SLA resolution time at Mount Sinai", type: "light" },
    { val: "65+", desc: "Clinical specialties supported through go-live", type: "light" },
    { val: "17", desc: "Analysts led and mentored across a single team", type: "dark" },
    { val: "5", desc: "Countries and international healthcare systems delivered in", type: "light" },
  ];


  const engagements = [
    { tag: "PAEDIATRIC ONCOLOGY", title: "Paediatric Cancer Transformation", desc: "Leading design and coordination of cancer, palliative care and pain services across specialist organisations, including Health Maintenance and real-time operational reporting.", border: "border-t-[#2A6049]" },
    { tag: "COMMUNITY", title: "Sexual Health and HIV", desc: "Strategic Community workflow leadership across trusts, integrating national data sources and leading complex data migration for research at scale.", border: "border-t-[#E64013]" },
    { tag: "RESEARCH & ANALYTICS", title: "Data Migration and Air Quality Research", desc: "Architecting large-scale data migration frameworks to support environmental health research and community-based health reporting.", border: "border-t-[#2A6049]" },
    { tag: "SPECIALIST CARE", title: "Dental Transformation", desc: "End-to-end configuration of specialist dental workflows, focusing on patient access, clinical documentation, and efficient chair-side operations.", border: "border-t-[#E64013]" }
  ];

  const getMorphingTitleClass = (isActive) => {
    const base =
      "absolute transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.3,1)] select-none whitespace-nowrap transform-gpu z-20";

    return `${base} ${isActive
        ? "top-6 left-6 lg:top-10 lg:left-14 rotate-0 text-[#0d2418] text-lg sm:text-xl lg:text-2xl xl:text-[34px] font-extrabold tracking-tight"
        : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:-rotate-90 text-white/90 text-[14px] tracking-[0.16em] font-semibold uppercase origin-center"
      }`;
  };

  const getMiniIconClass = (isActive) => {
    const base =
      "absolute transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.3,1)] flex items-center justify-center rounded-full z-20 transform-gpu";

    return `${base} ${isActive
        /* Change h-16 w-16 to your desired size, like h-12 w-12 */
        ? "top-6 right-6 lg:top-10 lg:right-10 h-14 w-14 bg-[#b2d9c4] border border-[#8ebf9f] text-[#0d2418]"

        /* You may also want to shrink the inactive state to keep it proportional */
        : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-10 h-10 w-10 bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm opacity-0 lg:opacity-100"
      }`;
  };

  const getContentPaddingClass = () => {
    return "pt-[90px] lg:pt-[110px] px-6 lg:px-14 pb-6 lg:pb-10";
  };

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".reveal")
      .forEach((r) => revealObs.observe(r));

    const animateCount = (el) => {
      const target = parseInt(el.dataset.target, 10);

      const start = performance.now();

      const update = (now) => {
        const p = Math.min((now - start) / 1400, 1);

        const ease = 1 - Math.pow(1 - p, 3);

        el.textContent = Math.round(ease * target);

        if (p < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    };

    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target
              .querySelectorAll(".count-up")
              .forEach(animateCount);

            countObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll(
        ".hero-stats-grid, .hero-floating-stats-wrap"
      )
      .forEach((g) => countObs.observe(g));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealObs.disconnect();
      countObs.disconnect();
    };

  }, []);




  return (
    <>


      <style>{`

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

:root {

  --ff-display: 'Comfortaa', cursive;
  --ff-body: 'Montserrat', sans-serif;
}



h1, h2, h3, h4, h5, h6 {
  font-family: var(--ff-display);

}

        .wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px}

  

/* =========================================
   VERTICAL TAB TEXT OVERLAP FIX
   ========================================= */
.vertical-text-fix {
  font-size: clamp(11px, 1.8vh, 15px) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  
  /* REMOVE OR COMMENT OUT THESE LINES TO STOP TRUNCATION */
  /* max-width: 220px !important; 
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important; */
  
  /* ALLOW IT TO BE A SINGLE LONG LINE */
  white-space: nowrap !important;
  
  /* Ensure it stays perfectly centered */
  margin: 0 auto !important;
}

/* Tighter constraints for shorter laptop/mobile screens */
@media (max-height: 800px) {
  .vertical-text-fix {
    max-width: 170px !important;
    
  }
}

@media (max-height: 650px) {
  .vertical-text-fix {
    max-width: 130px !important;
    
  }
}

    /* ---------- different / timeline ---------- */
        .diff{background:var(--soft-mint);text-align:center;position:relative}
        .diff .intro{max-width:720px;margin:16px auto 70px;font-size:1.05rem}
        .timeline{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;align-items:end;position:relative;max-width:1100px;margin:0 auto}
        .tl-track{position:absolute;top:auto;bottom: 4px;;left:0;width:100%;height:6px;border-radius:6px;
          background:linear-gradient(90deg,var(--forest-green),var(--sage-mid),var(--silke-red));z-index:0}
        .tstep{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center}
        .tcard{
          background:#fff;border-radius:18px;padding:26px 20px;text-align:left;width:100%;
          box-shadow:0 10px 30px rgba(15,35,24,.08);transition:transform .3s ease,box-shadow .3s ease;
        }
        .tcard:hover{transform:translateY(-6px);box-shadow:0 20px 44px rgba(15,35,24,.14)}
        .tcard .ico{width:34px;height:34px;color:var(--forest-green);margin-bottom:14px}
        .tcard h4{font-size:1rem;color:var(--forest-night);margin-bottom:9px}
        .tcard p{font-size:.82rem;line-height:1.5}
        .tcard.green{background:var(--forest-green)}
        .tcard.green .ico,.tcard.green h4{color:#fff}
        .tcard.green p{color:rgba(255,255,255,.85)}
        .tcard.red{background:var(--silke-red);transform:translateY(-14px)}
        .tcard.red:hover{transform:translateY(-20px)}
        .tcard.red .ico,.tcard.red h4{color:#fff}
        .tcard.red p{color:rgba(255,255,255,.9)}
        .dot{width:15px;height:15px;border-radius:50%;background:var(--sage-mid);border:3px solid var(--soft-mint);margin-top:18px;box-shadow:0 0 0 2px var(--sage-mid)}
        .step:first-child .dot{background:var(--forest-green);box-shadow:0 0 0 2px var(--forest-green)}
        .step:last-child .dot{background:var(--silke-red);box-shadow:0 0 0 2px var(--silke-red)}

        .result{margin-top:70px;max-width:820px;margin-left:auto;margin-right:auto}
        .result .rlabel{font-family:'Comfortaa',sans-serif;font-weight:600;letter-spacing:.16em;text-transform:uppercase;font-size:.8rem;color:var(--silke-red);margin-bottom:12px}
        .result p{font-size:1.15rem;color:var(--forest-night);margin-bottom:26px}
        .chips{display:flex;flex-wrap:wrap;gap:11px;justify-content:center}
        .chip{background:#fff;border:1px solid #dbe7e1;border-radius:30px;padding:9px 18px;font-size:.84rem;font-weight:500;color:var(--forest-green);display:inline-flex;align-items:center;gap:7px}
        .chip svg{width:15px;height:15px;color:var(--silke-red)}



        
        

        /* ---------- why engage ---------- */
        .why{background:var(--green-tint);text-align:center}
        .why h2{max-width:760px;margin:0 auto 56px}
        .cards3{display:grid;grid-template-columns:repeat(4,1fr);gap:26px}
        .pcard{
          background:#fff;border-radius:20px;padding:38px 30px;text-align:left;
          box-shadow:0 8px 30px rgba(15,35,24,.06);
          transition:transform .3s ease,box-shadow .3s ease;
          border-top:3px solid transparent;
        }


        /* ---------- engagements ---------- */
        .engage{background:var(--green-tint);text-align:center}
        .engage h2{margin-bottom:56px}
        .ecard{background:#fff;border-radius:20px;overflow:hidden;text-align:left;box-shadow:0 8px 30px rgba(15,35,24,.06);transition:transform .3s ease,box-shadow .3s ease}
        .ecard:hover{transform:translateY(-6px);box-shadow:0 22px 48px rgba(15,35,24,.12)}
        .ecard .top{height:8px;background:linear-gradient(90deg,var(--forest-green),var(--sage-mid))}
        .ecard:nth-child(2) .top{background:linear-gradient(90deg,var(--sage-mid),var(--silke-red))}
        .ecard:nth-child(3) .top{background:linear-gradient(90deg,var(--silke-red),var(--forest-green))}
        .ecard .body{padding:32px 28px}
        .ecard .tag{font-family:'Comfortaa',sans-serif;font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--silke-red);font-weight:600}
        .ecard h4{font-size:1.18rem;margin:12px 0 10px;color:var(--forest-night)}
        .ecard p{font-size:.9rem}









             /* ---------- capability network graphic ---------- */
.netfig{position:relative;width:100%;aspect-ratio:1/1;max-width:520px;margin:70px auto}        .netfig svg.lines path{fill:none;stroke:var(--sage-mid);stroke-width:2;stroke-linecap:round;opacity:.55}
        .netfig svg.lines path.pulse{stroke-dasharray:6 10;animation:flow 2.4s linear infinite}
        @keyframes flow{to{stroke-dashoffset:-32}}

        .node{
          position:absolute;z-index:2;
          width:30%;
          transform:translate(-50%,-50%);
        }
        .node .card{
          background:rgba(255,255,255,.85);backdrop-filter:blur(8px);
          border:1px solid rgba(42,96,73,.14);
          border-radius:18px;padding:14px 12px;text-align:center;
          box-shadow:0 12px 30px rgba(15,35,24,.08);
          transition:transform .3s ease,box-shadow .3s ease;
          cursor:default;
        }
        .node:hover .card{transform:translateY(-5px);box-shadow:0 20px 40px rgba(15,35,24,.16)}
        .node .ico{width:30px;height:30px;margin:0 auto 8px;color:var(--forest-green)}
        .node .nm{font-size:.74rem;font-weight:600;color:var(--forest-night);line-height:1.25}
        .node.red .card{background:var(--silke-red);border-color:var(--silke-red)}
        .node.red .ico,.node.red .nm{color:#fff}
        .node .tip{
          position:absolute;left:50%;bottom:calc(100% + 10px);transform:translateX(-50%) translateY(6px);
          background:var(--forest-night);color:#fff;font-size:.68rem;font-weight:500;line-height:1.35;
          padding:9px 12px;border-radius:10px;width:170px;text-align:center;
          opacity:0;visibility:hidden;transition:all .25s ease;pointer-events:none;z-index:5;
        }
        .node:hover .tip{opacity:1;visibility:visible;transform:translateX(-50%) translateY(0)}

        .hub{
          position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:3;
          width:38%;aspect-ratio:1/1;border-radius:50%;
          background:radial-gradient(circle at 35% 30%,var(--sage-mid),var(--forest-green));
          display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;
          color:#fff;box-shadow:0 20px 50px rgba(42,96,73,.35);
          padding:14px;
        }
        .hub .ico{width:30px;height:30px;margin-bottom:8px;color:#fff}
        .hub .t{font-size:.86rem;font-weight:700;line-height:1.2}
        .hub::after{content:"";position:absolute;inset:-10px;border-radius:50%;border:1px solid rgba(42,96,73,.18);animation:halo 4s ease-in-out infinite}
        @keyframes halo{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.06);opacity:.15}}

        /* node positions (hexagonal) */
        .n1{top:8%;left:50%}     /* clinical workflows - top */
        .n2{top:30%;left:90%}    /* data & reporting - top right */
        .n3{top:70%;left:90%}    /* integration & fhir - bottom right */
        .n4{top:92%;left:50%}    /* programme delivery - bottom */
        .n5{top:70%;left:10%}    /* programme recovery - bottom left */
        .n6{top:30%;left:10%}    /* infrastructure - top left */

   
/* =========================================
   TOOLTIP POSITIONING FIX
   ========================================= */

/* 1. Bring the hovered node to the very front to prevent any hub overlap */
.node:hover {
  z-index: 10; 
}

/* 2. Target the bottom 3 nodes (n3, n4, n5) to display tooltips BELOW */
.n3 .tip, 
.n4 .tip, 
.n5 .tip {
  bottom: auto; /* Remove the top-anchored position */
  top: calc(100% + 10px); /* Anchor to the bottom instead */
  transform: translateX(-50%) translateY(-6px); /* Adjust the starting animation position */
}

/* 3. Reset the transform on hover for the bottom 3 nodes so the animation works smoothly */
.n3:hover .tip, 
.n4:hover .tip, 
.n5:hover .tip {
  transform: translateX(-50%) translateY(0);
}



/* =========================================
   MOBILE TOOLTIP & OVERFLOW FIXES
   ========================================= */
@media (max-width: 768px) {
  /* 1. Prevent tooltips from hiding behind the country flags/text */
  .hero-right, .netfig {
    position: relative;
    z-index: 50; 
  }

  /* 2. Slightly reduce tooltip width to fit smaller screens better */
  .node .tip {
    width: 135px;
    font-size: 0.65rem;
  }

  /* 3. Left-edge nodes (n5, n6): Anchor to the left, push inwards */
  .n5 .tip, .n6 .tip {
    left: -10px; /* Align slightly inset from the node's left edge */
  }
  
  /* Remove the -50% shift for left nodes */
  .n6 .tip { transform: translateX(0) translateY(6px); }
  .n6:hover .tip { transform: translateX(0) translateY(0); }
  
  .n5 .tip { transform: translateX(0) translateY(-6px); }
  .n5:hover .tip { transform: translateX(0) translateY(0); }

  /* 4. Right-edge nodes (n2, n3): Anchor to the right, push inwards */
  .n2 .tip, .n3 .tip {
    left: auto;
    right: -10px; /* Align slightly inset from the node's right edge */
  }
  
  /* Remove the -50% shift for right nodes */
  .n2 .tip { transform: translateX(0) translateY(6px); }
  .n2:hover .tip { transform: translateX(0) translateY(0); }
  
  .n3 .tip { transform: translateX(0) translateY(-6px); }
  .n3:hover .tip { transform: translateX(0) translateY(0); }
}

        /* ---------- responsive ---------- */
        @media(max-width:980px){
          .hero-grid{grid-template-columns:1fr;gap:48px}
          .netfig{max-width:420px;order:-1}
          .cards3,.quotes{grid-template-columns:1fr}
          .cards5{grid-template-columns:repeat(2,1fr)}
          .stats{grid-template-columns:1fr}
          .about-grid{grid-template-columns:1fr;gap:40px}
          .portrait{max-width:380px;margin:0 auto}
          .timeline{grid-template-columns:1fr;gap:14px}
          .tl-track{display:none}
          .tcard.red{transform:none}
          .tcard.red:hover{transform:translateY(-6px)}
          .dot{display:none}
          .foot-grid{grid-template-columns:1fr 1fr}
          .nav-links{display:none}
          .nav-links.open{display:flex;position:absolute;top:var(--nav-h);left:0;width:100%;flex-direction:column;background:rgba(15,35,24,.98);padding:24px 32px;gap:18px}
          .nav-links.open .submenu{position:static;transform:none;opacity:1;visibility:visible;box-shadow:none;background:rgba(255,255,255,.06);margin-top:8px}
          .nav-links.open .submenu a{color:rgba(255,255,255,.85)}
          .burger{display:flex}
        }
        @media(max-width:560px){
          .metrics{grid-template-columns:repeat(2,1fr);gap:26px}
          .cards5{grid-template-columns:1fr}
          .foot-grid{grid-template-columns:1fr}
          .wrap{padding:0 22px}
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



/* =========================================================
   GLOBAL REACH
========================================================= */
.section-reach {
  padding: 110px 0;
  background: white;
}

.reach-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 90px);
  align-items: stretch;
}

.reach-locations {
  margin-top: 40px;
}

.reach-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  padding: 22px 0;
  border-bottom:
    1px solid var(--border);
}

.reach-item:first-child {
  border-top:
    1px solid var(--border);
}

.reach-flag {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  overflow: hidden;
  background: #e6f0eb;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.8);
}

.reach-flag img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.reach-city {
  margin-bottom: 3px;
  font-size: 15px;
  font-weight: 700;
  color: var(--body);
}

.reach-orgs {
  font-size: 13px;
  line-height: 1.6;
  color: var(--muted);
}

.reach-right {
  padding-top: 55px;
  height: 100%; /* <-- ADD THIS */
  display: flex; /* <-- ADD THIS */
  flex-direction: column; /* <-- ADD THIS */
  
}

.reach-right h2 {
  margin:
    10px 0 18px;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.2;
  color: var(--body);
}

.reach-right p {
  margin-bottom: 34px;
  font-size: 15px;
  line-height: 1.9;
  color: var(--muted);
}

.reach-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.reach-stat {
  padding: 22px;
  border-radius: 16px;
  background: var(--green-tint);
}

.reach-stat-num {
  margin-bottom: 4px;
  font-size: 34px;
  color: var(--green-deep);
}

.reach-stat-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}


/* =========================================================
   GLOBAL REACH - MOBILE
========================================================= */
@media (max-width: 768px) {
  .section-reach {
    padding: 70px 0;
  }

  .reach-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .reach-right {
    padding-top: 0;
    order: -1; /* show content before locations */
  }

  .reach-right h2 {
    font-size: 32px;
    text-align: center;
  }

  .reach-right p {
    text-align: center;
    margin-bottom: 24px;
  }

  .reach-locations {
    margin-top: 20px;
  }

  .reach-item {
    gap: 12px;
    padding: 18px 0;
    align-items: center;
  }

  .reach-flag {
    width: 46px;
    height: 46px;
    border-radius: 12px;
  }

  .reach-flag img {
    width: 24px;
    height: 24px;
  }

  .reach-city {
    font-size: 14px;
  }

  .reach-orgs {
    font-size: 12px;
    line-height: 1.5;
  }

  .reach-stats {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .reach-stat {
    padding: 18px;
    text-align: center;
  }

  .reach-stat-num {
    font-size: 28px;
  }

  .reach-stat-label {
    font-size: 10px;
  }
}

/* Extra Small Devices */
@media (max-width: 480px) {
  .reach-stats {
    grid-template-columns: 1fr;
  }

  .reach-right h2 {
    font-size: 28px;
  }

  .reach-item {
    grid-template-columns: 46px 1fr;
  }
}

      `}</style>


      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          position: "relative",
        }}
      >



        <section className="hero-services-wrap">

          <div className="shared-earth">
            <img src={earthImage} alt="" />
          </div>

          <section className="hero">
            <div className="hero-geo"></div>
            <div className="hero-inner">
              <div className="hero-left reveal">
                <p className="hero-eyebrow">
                  Epic EHR Specialist Consultancy
                </p>
                <h1 className="hero-h1">
                  <span className="hero-dark">Delivering Successful</span>{" "}
                  <span className="hero-orange">EHR Transformation</span>
                  <br />
                  <span className="hero-green">Where Experience Matters Most</span>
                </h1>
                <p className="hero-sub">
                  Independent senior-level expertise supporting healthcare organisations through implementation, optimisation, and programme recovery with 22+ years of healthcare technology expertise and extensive international EHR delivery experience.
                </p>
                <div className="hero-actions">
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
                  {/* <a href="#services" className="btn-outline">
                  View Services
                </a> */}
                </div>
                <div className="hero-country-strip">
                  <br />
                  <span className="hero-country-label">
                    Global Experience in
                  </span>
                  <div className="hero-country-pills">
                    <div className="hero-country-pill">
                      <img src="https://flagcdn.com/w40/gb.png" alt="United Kingdom" />
                      <span>United Kingdom</span>
                    </div>
                    <div className="hero-country-pill">
                      <img src="https://flagcdn.com/w40/us.png" alt="United States" />
                      <span>United States</span>
                    </div>
                    <div className="hero-country-pill">
                      <img src="https://flagcdn.com/w40/ie.png" alt="Ireland" />
                      <span>Ireland</span>
                    </div>
                    <div className="hero-country-pill">
                      <img src="https://flagcdn.com/w40/nl.png" alt="Netherlands" />
                      <span>Netherlands</span>
                    </div>
                    <div className="hero-country-pill">
                      <img src="https://flagcdn.com/w40/be.png" alt="Belgium" />
                      <span>Belgium</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hero-right reveal">
                <div className="netfig">
                  <svg className="lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path className="pulse" d="M50,50 L50,12" />
                    <path className="pulse" d="M50,50 L88,30" />
                    <path className="pulse" d="M50,50 L88,70" />
                    <path className="pulse" d="M50,50 L50,90" />
                    <path className="pulse" d="M50,50 L12,70" />
                    <path className="pulse" d="M50,50 L12,30" />
                  </svg>

                  <div className="hub">
                    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>
                    <div className="t">EHR Platform</div>
                  </div>

                  <div className="node n1">
                    <div className="tip">Specialty design, operational pathways and clinician adoption.</div>
                    <div className="card">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h4l2 13 4-18 2 9h6" /></svg>
                      <div className="nm">Clinical Workflows</div>
                    </div>
                  </div>

                  <div className="node n2">
                    <div className="tip">Reporting Workbench, analytics and operational insight.</div>
                    <div className="card">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" /></svg>
                      <div className="nm">Data &amp; Reporting</div>
                    </div>
                  </div>

                  <div className="node n3">
                    <div className="tip">Interoperability, third-party systems and data exchange.</div>
                    <div className="card">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M6 9v6a3 3 0 0 0 3 3h6" /></svg>
                      <div className="nm">Integration &amp; FHIR</div>
                    </div>
                  </div>

                  <div className="node n4 red">
                    <div className="tip">Implementation leadership, governance and stakeholder coordination.</div>
                    <div className="card">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                      <div className="nm">Programme Delivery</div>
                    </div>
                  </div>

                  <div className="node n5 red">
                    <div className="tip">Risk mitigation, stabilisation and recovery planning.</div>
                    <div className="card">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
                      <div className="nm">Programme Recovery</div>
                    </div>
                  </div>

                  <div className="node n6">
                    <div className="tip">Architecture, performance and reliability.</div>
                    <div className="card">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1" /><rect x="3" y="11" width="18" height="5" rx="1" /><path d="M7 7h.01M7 14h.01" /></svg>
                      <div className="nm">Infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FLOATING STATS */}

          <section className="section-services">

            <section className="hero-floating-stats-section">

              <div className="hero-floating-stats-wrap">

                {floatingStats.map((item, index) => (

                  <div
                    key={index}
                    className="hero-floating-stat-card"
                    style={{
                      animationDelay: `${index * 0.12}s`,
                    }}
                  >

                    <div className="hero-floating-stat-number">

                      <span
                        className="count-up"
                        data-target={item.number}
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

            <br /> <br />




            {/* LOGOS */}



            {/* INJECTED CSS FOR MARQUEE ANIMATION */}
            <style>{`
    @keyframes infinite-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: infinite-scroll 50s linear infinite;
    }
  `}</style>

            <div className="container mx-auto px-4 md:px-6 max-w-[1050px]">

              {/* HEADINGS */}
              <div className="text-center mb-10">
                <p className="logos-label reveal">
                  Our team is trusted by leading organisations
                </p>
                <p className="section-services-sub reveal">
                  Supporting public hospitals, academic medical centres and specialist healthcare providers across the UK, Europe, and the USA.
                </p>
              </div>

              {/* INFINITE SCROLL MARQUEE CONTAINER (Now with True Transparent Mask Fade) */}
              <div
                className="relative w-full overflow-hidden flex items-center group py-4"
                style={{
                  /* This creates the true transparent fade on the left and right edges */
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                  maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
                }}
              >

                {/* MARQUEE TRACK (Pauses on group hover) */}
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center gap-6 pr-6">

                  {/* We map the array TWICE to create the seamless infinite loop illusion */}
                  {[...clients, ...clients].map((client, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex items-center justify-center px-6 py-4 bg-transparent h-20 cursor-pointer grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-[1.05]"
                    >
                      {client.type === "image" ? (
                        <img
                          src={client.src}
                          alt={client.name}
                          className="h-10 md:h-16 w-auto object-contain"
                        />
                      ) : (
                        <span className="font-['Comfortaa'] bg-gradient-to-r from-blue-500 via-[#e4542d] to-[#23c390] bg-clip-text text-transparent font-black text-[18px] md:text-[30px] whitespace-nowrap">
                          {client.name}
                        </span>
                      )}
                    </div>
                  ))}

                </div>
              </div>

              <br />  <br />  <br />

            </div>

            <section className="section-logos py-16 bg-transparent overflow-hidden">

              <div className="max-w-[1280px] mx-auto px-6">

                <span className="block w-full text-center text-[#E64013] text-[13px] font-bold tracking-[0.35em] uppercase mb-8">
                  Why Organisations Bring Us In
                </span>

                <h2
                  className="max-w-[760px] mx-auto mb-14 text-center text-[#071E14] font-bold"
                  style={{ fontSize: "clamp(1.9rem,3.6vw,3rem)" }}
                >
                  Strategic expertise beyond system configuration
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px]">

                  {/* Card 1 */}
                  <div className="relative z-20 bg-white rounded-[20px] p-[38px_30px] text-left shadow-[0_8px_30px_rgba(15,35,24,0.06)] transition-all duration-300 border-t-[3px] border-transparent hover:-translate-y-[6px] hover:shadow-[0_22px_48px_rgba(15,35,24,0.12)] hover:border-t-[#E64013]">        <div className="w-[46px] h-[46px] rounded-[13px] bg-[#DCE5E1] flex items-center justify-center text-[#2A6049] mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5l-8-3Z" />
                    </svg>
                  </div>

                    <h3 className="text-[1.2rem] font-semibold mb-3 text-[#071E14]">
                      Programme Advisory
                    </h3>

                    <p className="text-[0.94rem] leading-7 text-[#556C61]">
                      Providing independent guidance, delivery oversight, and strategic direction to reduce risk and improve programme outcomes.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="relative z-20 bg-white rounded-[20px] p-[38px_30px] text-left shadow-[0_8px_30px_rgba(15,35,24,0.06)] transition-all duration-300 border-t-[3px] border-transparent hover:-translate-y-[6px] hover:shadow-[0_22px_48px_rgba(15,35,24,0.12)] hover:border-t-[#E64013]">
                    <div className="w-[46px] h-[46px] rounded-[13px] bg-[#DCE5E1] flex items-center justify-center text-[#2A6049] mb-5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>

                    <h3 className="text-[1.2rem] font-semibold mb-3 text-[#071E14]">
                      Optimisation
                    </h3>

                    <p className="text-[0.94rem] leading-7 text-[#556C61]">
                      Improving workflows, data quality and clinical efficiency through practical analysis and measurable improvements.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="relative z-20 bg-white rounded-[20px] p-[38px_30px] text-left shadow-[0_8px_30px_rgba(15,35,24,0.06)] transition-all duration-300 border-t-[3px] border-transparent hover:-translate-y-[6px] hover:shadow-[0_22px_48px_rgba(15,35,24,0.12)] hover:border-t-[#E64013]">

                    <div className="w-[46px] h-[46px] rounded-[13px] bg-[#DCE5E1] flex items-center justify-center text-[#2A6049] mb-5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M3 12a9 9 0 1 0 9-9" />
                        <path d="M3 3v5h5" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>

                    <h3 className="text-[1.2rem] font-semibold mb-3 text-[#071E14]">
                      Recovery
                    </h3>

                    <p className="text-[0.94rem] leading-7 text-[#556C61]">
                      Helping struggling programmes regain stability, confidence and momentum through experienced leadership and structured recovery planning.
                    </p>
                  </div>

                </div>
              </div>

            </section>



            <section className="diff reveal">
              <br /> <br /><br /><br />

              <div className="wrap">

                <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
                  What Makes Silke IT Different
                </span>

                <h2
                  className="font-bold text-[#071E14]"
                  style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
                >
                  A broader perspective on EHR transformation
                </h2>
                <p className="section-services-sub reveal">Most EHR consultants understand configuration. Few have experience spanning vendor development, infrastructure, data analysis, programme leadership and international EHR delivery.</p>

                <div className="timeline">
                  <div className="tl-track"></div>
                  <div className="step">
                    <div className="tcard green">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
                      <h4>Analysts</h4>
                      <p>Designed and supported healthcare software, building a deep understanding of how clinical systems work beneath the surface.</p>
                    </div>
                    <div className="dot"></div>
                  </div>
                  <div className="step">
                    <div className="tcard">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="5" rx="1" /><rect x="3" y="11" width="18" height="5" rx="1" /><path d="M7 7h.01M7 14h.01" /></svg>
                      <h4>Infrastructure</h4>
                      <p>Architected enterprise platforms, networks, databases and environments underpinning critical healthcare services.</p>
                    </div>
                    <div className="dot"></div>
                  </div>
                  <div className="step">
                    <div className="tcard">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" /></svg>
                      <h4>Data &amp; Analytics</h4>
                      <p>Analysed large datasets and translated information into practical decisions and operational improvements.</p>
                    </div>
                    <div className="dot"></div>
                  </div>
                  <div className="step">
                    <div className="tcard">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>
                      <h4>EHR Consulting</h4>
                      <p>Delivered design, implementation, optimisation and recovery across major healthcare organisations internationally.</p>
                    </div>
                    <div className="dot"></div>
                  </div>
                  <div className="step">
                    <div className="tcard red">
                      <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><circle cx="12" cy="12" r="4" /></svg>
                      <h4>Strategic Advisory</h4>
                      <p>Leadership, programme direction and recovery expertise aligning technology, clinical operations and organisational goals.</p>
                    </div>
                    <div className="dot"></div>
                  </div>
                </div>

                <div className="result">
                  <div className="rlabel">The Result</div>
                  <p>A consultant who understands healthcare transformation from multiple perspectives and not just application build.</p>
                  <div className="chips">
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Clinical Workflows</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Data &amp; Reporting</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Integration</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Architecture</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Project Leadership</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Stakeholder Management</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Team Development</span>
                    <span className="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>Programme Recovery</span>
                  </div>
                </div>
              </div>
              <br /> <br /><br /> <br />
            </section>




            {/* SERVICES */}


            <div className="relative z-10 max-w-[1380px] mx-auto">

              <br /> <br /><br /><br />
              <div className="text-center mb-8 md:mb-12">

                <span className="block w-full text-center text-[#E64013] text-[13px] font-bold tracking-[0.35em] uppercase mb-8">
                  Our Most Popular Solutions
                </span>
                <h2 className="section-h2 reveal">
                  Our Core <span>EHR Services</span>
                </h2>
                <p className="section-services-sub reveal">
                  From first blueprint to post-live refinement — we deliver across
                  every stage of the Epic lifecycle.
                </p>

              </div>

              <div className={getFlexContainerClass()}>
                {serviceSolutions.map((item, index) => {
                  const isActive = activeTab === item.id;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      onMouseEnter={() => setActiveTab(item.id)}
                      onFocus={() => setActiveTab(item.id)}
                      onClick={() => {
                          
                      }}

                     
                      tabIndex={0}
                      className={`group relative bg-[#0d2418] ${getCardClasses(isActive)}`}
                    >
                      {/* BACKGROUND IMAGE - Optimised for performance */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1000ms] ease-out transform-gpu z-0"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          // Adding 'will-change' to help the browser GPU prepare
                          willChange: "transform",
                          transform: isActive ? "scale(1)" : "scale(1.05)",
                        }}
                      />

                      {/* DIMMING OVERLAY */}
                      <div
                        className={`absolute inset-0 transition-all duration-[800ms] z-10 ${isActive ? "bg-[#cce6d8]/95" : "bg-black/60 md:bg-black/40 hover:bg-black/30"
                          }`}
                      />
                      <div
                        className={`absolute inset-0 transition-all duration-[800ms] z-10 ${isActive
                            ? "opacity-0"
                            : "opacity-100 bg-gradient-to-br from-emerald-900/50 to-emerald-900/50"
                          }`}
                      />

                      {/* TEXT & ICON */}
                      {/* TEXT & ICON */}
                      <h3 className={`${getMorphingTitleClass(isActive)} ${!isActive ? "vertical-text-fix" : ""}`}>
                        {item.title}
                      </h3>



                      {/* INNER CONTENT */}
                      {/* INNER CONTENT */}
                      {/* INNER CONTENT */}
                      <div
                        className={`flex flex-col justify-start z-20 ${getContentPaddingClass()} transition-opacity duration-[600ms] ease-in-out ${isActive
                            ? "relative opacity-100 pointer-events-auto delay-300"
                            : "absolute inset-0 opacity-0 pointer-events-none"
                          } 
/* - Mobile: Default (w-full)
   - lg: (1024px+): 740px
   - xl: (1280px+): 880px
   - 2xl: (1536px+): 980px
*/
w-full lg:w-[740px] xl:w-[980px] 2xl:w-[980px] lg:shrink-0 mx-auto`}
                      >
                        <div className={`transform transition-all duration-700 ease-out ${isActive ? "translate-y-0" : "translate-y-4"}`}>

                          <p className="text-[12px] sm:text-[13px] md:text-[15px] mb-5 text-[#1d6f45] leading-[1.6] font-medium max-w-3xl">
                            {item.subtitle}
                          </p>
                          <div className="mb-4 md:mb-5">
                            <p className="text-[#0b5630] text-[14px] md:text-[15px] mb-1 font-semibold ">The Challenge</p>
                            <p className="text-[13px] md:text-[15px]  text-[#1d6f45] leading-[1.6] font-medium max-w-3xl">{item.problem}</p>
                          </div>
                          <div className="mb-5">
                            <p className="text-[#0b5630] text-[14px] md:text-[15px] mb-1 font-semibold">What We Do</p>
                            <ul className="space-y-1 max-w-3xl">
                              {item.whatWeDo.map((point, i) => (
                                <li key={i} className="flex items-start text-[14px] text-[#0d522e]">
                                  <span className="mr-2 mt-0.5">✓</span> {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mb-5 p-3.5 bg-white/50 border border-[#a6cfb7] rounded-xl max-w-[810px]">
                            <p className="text-[#0b5630] text-[15px] mb-1 font-semibold">Outcome</p>
                            <p className="text-[15px] text-[#0b6637]">{item.outcome}</p>
                          </div>

                          {/* Read More Button */}
                          <div className="mt-2 pb-6 md:pb-0">

                            <button
                              onClick={() => navigate(item.route)}
                              className="group inline-flex items-center justify-center rounded-full border border-[#E64013]/30 bg-transparent px-7 py-3 text-[14px] sm:text-[15px] font-bold text-[#E64013] transition-all duration-300 hover:bg-[rgba(230,64,19,0.08)] hover:border-[#E64013]/50"
                            >
                              Read More

                              <svg
                                className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                              </svg>

                            </button>

                          </div>
                        </div>
                      </div>

                      <div
                        className="
    absolute
    top-0
    left-0
    h-[5px]
    w-0
    bg-[#1E4535]
    transition-all
    duration-700
    ease-out
    group-hover:w-0
    z-50
  "
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>



          </section>


          {/* COMPARISON */}
          <section className="py-20 bg-white">
            <br /> <br />
            <div className="max-w-[1240px] mx-auto px-6 text-center">
              <span className="text-[#E64013] font-comfortaa text-[0.8rem] font-bold uppercase tracking-[0.2em] mb-4 block">
                OUTCOMES
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-[#0F2318] mb-4">
                Delivering measurable results
              </h2>

              <p className="text-[#4B5F55] text-lg max-w-2xl mx-auto mb-16">
                Outcomes from real programmes — not job descriptions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statsData.map((item, i) => {
                  // Make the middle cards (index 1 and 4) dark
                  const isDark = i === 1 || i === 4;

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.15,
                        ease: "easeOut",
                      }}
                      className={`p-10 rounded-[1.5rem] text-left transition-transform hover:-translate-y-1 hover:shadow-lg ${isDark
                          ? "bg-[#2A6049] text-white" /* Dark Green Background */
                          : "bg-[#F0F8F4] text-[#0F2318]" /* Light Mint Background */
                        }`}
                    >
                      <div
                        className={`text-[3.5rem] font-bold leading-none mb-4 ${isDark ? "text-white" : "text-[#2A6049]"
                          }`}
                      >
                        {item.val.includes("%") ? (
                          <>
                            {item.val.replace("%", "")}
                            <span
                              className={`text-[0.45em] align-super ml-1 ${isDark ? "text-[#E64013]" : "text-[#E64013]"
                                }`}
                            >
                              %
                            </span>
                          </>
                        ) : item.val.includes("+") ? (
                          <>
                            {item.val.replace("+", "")}
                            <span
                              className={`text-[0.45em] align-super ml-1 ${isDark ? "text-[#E64013]" : "text-[#E64013]"
                                }`}
                            >
                              +
                            </span>
                          </>
                        ) : (
                          item.val
                        )}
                      </div>

                      <p
                        className={`text-[1rem] font-medium leading-relaxed ${isDark ? "text-white opacity-90" : "text-[#4B5F55]"
                          }`}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <br /> <br />
          </section>


          {/* ============ ENGAGEMENTS ============ */}
          <section className="engage reveal">
            <br />
            <br />  <br />  <br />  <br />
            <div className="wrap">
              <span className="block text-[#E64013] text-[13px] font-bold tracking-[0.35em] uppercase mb-8">
                Selected Programme Experience
              </span>

              <h2
                className="font-bold text-[#071E14]"
                style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
              >
                Featured engagements
              </h2>

              <div className="cards3">
                <div className="ecard">
                  <div className="top"></div>
                  <div className="body">
                    <span className="tag">Paediatric Oncology</span>
                    <h4>Paediatric Cancer Transformation</h4>
                    <p>Leading design and coordination of cancer, palliative care and pain services across four specialist organisations, including Health Maintenance, Registries and real-time operational reporting.</p>
                  </div>
                </div>
                <div className="ecard">
                  <div className="top"></div>
                  <div className="body">
                    <span className="tag">Community</span>
                    <h4>Sexual Health &amp; HIV Transformation</h4>
                    <p>Strategic Community workflow leadership across two trusts, integrating national data sources and leading data migration for research at scale.</p>
                  </div>
                </div>
                <div className="ecard">
                  <div className="top"></div>
                  <div className="body">
                    <span className="tag">Research & Analytics</span>
                    <h4>Data Migration & Air Quality Research</h4>
                    <p>
                      Delivering accurate data migration, environmental analytics and air quality research solutions that support informed decision-making, regulatory compliance and sustainable outcomes.
                    </p>
                  </div>
                </div>
                <div className="ecard">
                  <div className="top"></div>
                  <div className="body">
                    <span className="tag">Dental Excellence</span>
                    <h4>Dental Transformation Programmes</h4>
                    <p>
                      Helping dental organisations modernise clinical workflows, enhance patient
                      experiences and improve operational efficiency through strategic digital
                      transformation and optimisation initiatives.
                    </p>
                  </div>
                </div>
              </div>


            </div>
            <br />  <br />  <br /> <br /> <br />
          </section>

          {/* TESTIMONIALS */}
          {testimonials.length > 0 && (
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
                          {[...Array(testimonial.rating || 5)].map((_, idx) => (
                            <svg key={idx} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* 5-Line clamp class applied here */}
                        <div className="line-clamp-5 text-[#5B6F65] text-sm md:text-base" style={{ textAlign: 'justify' }}>
                          {/* Splits the text by \n\n to render proper paragraphs */}
                          {testimonial.testimonial.split('\n\n').map((para, pIdx) => (
                            <p key={pIdx} style={{ marginBottom: '10px' }}>{para}</p>
                          ))}
                        </div>

                        <div className="testimonial-author" style={{ marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                          <div className="author-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E8F4EF', color: '#2A6049', display: 'grid', placeItems: 'center', fontWeight: 'bold' }}>
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
          )}

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
                  {[...Array(activeModal.rating || 5)].map((_, idx) => (
                    <svg key={idx} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Increased lineHeight slightly to 1.8 to match the open design */}
                <div style={{ color: '#071E14', lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
                  {activeModal.testimonial.split('\n\n').map((para, pIdx) => (
                    <p key={pIdx} style={{ marginBottom: '20px' }}>{para}</p>
                  ))}
                </div>

                <div className="testimonial-author" style={{ marginTop: '40px', display: 'flex', gap: '16px', alignItems: 'center', paddingTop: '28px', borderTop: '1px solid #DCEAE3' }}>
                  <div className="author-avatar" style={{ width: '54px', height: '54px', borderRadius: '50%', background: '#E8F4EF', color: '#2A6049', display: 'grid', placeItems: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
{activeModal.avatar || "NA"}
                  </div>
                  <div>
                    <p className="author-name" style={{ fontWeight: 'bold', color: '#071E14', fontSize: '1.05rem' }}>{activeModal.name}</p>
                    <p className="author-org" style={{ color: '#5B6F65', fontSize: '0.95rem' }}>{activeModal.designation}</p>
                  </div>
                </div>

              </div>
            </div>
          )}


          {/* ABOUT SECTION */}

          <section className="section-about">
            <h2 className="section-h2 reveal">
              About <span> Silke IT</span>
            </h2>

            <p className="section-services-sub reveal">
              We believe in total transparency. Compare our senior-led delivery model against traditional consultancy standards.
            </p>





            <div className="container">

              <div className="about-grid">

                <div className="about-img-wrap reveal">

                  <div className="about-img-bg"></div>

                  <div className="about-img-accent"></div>

                  <img
                    src={kennyImage}
                    alt="Kenny Silke"
                  />

                  <div className="about-img-badge">

                    <div className="badge-icon">

                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2A6049"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>

                    </div>

                    <div className="badge-text">

                      <p>Multi-Certified</p>

                      <p>Epic EHR Specialist</p>

                    </div>

                  </div>

                </div>


                <div className="about-content reveal">




                  <h2>Meet Kenny Silke</h2>

                  <div className="about-role">
                    Founder and Director
                  </div>

                  <p className="text-justify">
                    Computer Science background with 22+ years of healthcare technology experience and 15+ years delivering large-scale EHR programmes internationally.
                  </p>
                  <p className="text-justify">
                    Known for combining technical expertise, structured problem solving and practical leadership to help organisations navigate and deliver safer, more efficient, and clinically effective solutions in complex digital transformation programmes.
                  </p>
                  <ul className="leader-highlights">
                    <li>22+ years Digital Healthcare</li>
                    <li>12+ years Epic</li>
                    <li>3 years Cerner</li>
                    <li>15+ Epic Certifications and Badges</li>
                    <li>International Delivery Experience</li>
                    <li>International Delivery</li>
                    <li>EHRS Champion of the Year nominee</li>
                    <li>Mentor</li>
                    <li>Programme advisor</li>
                    <li>Data and Workflow Expertise</li>
                    <li>Tactician and Strategist</li>
                  </ul>







                  <div className="about-cta">

                    <a
                      href="https://www.linkedin.com/company/silke-it/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="about-linkedin"
                    >
                      <FaLinkedinIn />
                    </a>


                    <Link to="/about-us#team" className="about-Team">
                      Meet The Team
                    </Link>


                  </div>

                </div>

              </div>

            </div>

          </section>













          {/* COMPARISON */}
          <section className="section-compare">
            <div className="container">


              <span className="block w-full text-center text-[#E64013] text-[13px] font-bold tracking-[0.35em] uppercase mb-8">
                Why Engage Silke IT
              </span>


              <h2 className="section-h2 reveal">
                Typical Consultant  <span>vs Silke IT</span>
              </h2>

              <p className="section-services-sub reveal">
                We believe in total transparency. Compare our senior-led delivery model against traditional consultancy standards.
              </p>

              <div className="compare-wrap reveal">

                {/* LEFT SIDE: TYPICAL CONSULTANCY */}
                <div className="compare-col-theirs">

                  <div className="compare-header">
                    <p className="compare-header-eyebrow">
                      Standard Approach
                    </p>
                    <h3>Typical Consultant</h3>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Team</div>
                      <div className="compare-row-val">
                        Junior-heavy delivery with limited senior oversight
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Alignment</div>
                      <div className="compare-row-val">
                        Vendor-aligned decisions that may not serve the client
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Experience</div>
                      <div className="compare-row-val">
                        Generic best practices applied across all clients
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Accountability</div>
                      <div className="compare-row-val">
                        Limited accountability for real-world outcomes
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Perspective</div>
                      <div className="compare-row-val">
                        Siloed, single-country viewpoint
                      </div>
                    </div>
                  </div>
                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Strategy</div>
                      <div className="compare-row-val">
                        High-level theory disconnected from operational reality
                      </div>
                    </div>
                  </div>
                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Lifecycle</div>
                      <div className="compare-row-val">
                        Fragmented support limited to specific implementation phases
                      </div>
                    </div>
                  </div>
                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Collaboration</div>
                      <div className="compare-row-val">
                        Isolated technical delivery disconnected from end-users
                      </div>
                    </div>
                  </div>


                </div>

                {/* RIGHT SIDE: SILKE IT */}
                <div className="compare-col-ours">

                  <div className="compare-header">
                    <p className="compare-header-eyebrow">
                      The Silke IT Way
                    </p>
                    <h3>Silke IT</h3>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Team</div>
                      <div className="compare-row-val">
                        Senior-only delivery on every engagement
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Alignment</div>
                      <div className="compare-row-val">
                        Client-first advocacy — always on your side
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Experience</div>
                      <div className="compare-row-val">
                        Tailored real-world solutions from 16+ programmes
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Accountability</div>
                      <div className="compare-row-val">
                        Direct accountability for measurable outcomes
                      </div>
                    </div>
                  </div>

                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Perspective</div>
                      <div className="compare-row-val">
                        Multi-country insight from 5 health systems
                      </div>
                    </div>
                  </div>
                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Strategy</div>
                      <div className="compare-row-val">
                        Deep practical expertise bridging strategy and real-world delivery
                      </div>
                    </div>
                  </div>
                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Lifecycle</div>
                      <div className="compare-row-val">
                        Comprehensive services across the full EHR lifecycle
                      </div>
                    </div>
                  </div>
                  <div className="compare-row">
                    <div className="compare-dot"></div>
                    <div>
                      <div className="compare-row-label">Collaboration</div>
                      <div className="compare-row-val">
                        Close partnership with clinical, operational, and technical teams
                      </div>
                    </div>
                  </div>


                </div>

              </div>

            </div>
          </section>






          {/* GLOBAL REACH */}

          {/* GLOBAL REACH */}


          <section className="section-reach">


            <span className="block w-full text-center text-[#E64013] text-[13px] font-bold tracking-[0.35em] uppercase mb-8">
              Global Reach
            </span>


            <h2
              className="font-bold text-[#071E14] text-center"
              style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
            >
              Delivering Impact Worldwide
            </h2>
            <br />


            <div className="container">


              <div className="reach-grid">

                {/* LEFT SIDE */}

                <div>



                  {/* <p className="section-label reveal"
        style={{ fontSize: "18px" }}
        >
          Global Reach
        </p> */}


                  <div className="reach-locations">

                    {/* ITEM 1 */}
                    <div
                      className="reach-item reveal flex items-center"
                      onMouseEnter={() => setActiveCountry("uk")}
                    >
                      <div className="reach-flag">
                        <img
                          src="https://flagcdn.com/w40/gb.png"
                          alt="UK Flag"
                        />
                      </div>
                      <div>
                        <p className="reach-city m-0 leading-none">
                          London, Devon, UK
                        </p>
                      </div>
                    </div>

                    {/* ITEM 2 */}
                    <div
                      className="reach-item reveal flex items-center"
                      style={{ transitionDelay: "0.16s" }}
                      onMouseEnter={() => setActiveCountry("netherlands")}
                    >
                      <div className="reach-flag">
                        <img
                          src="https://flagcdn.com/w40/nl.png"
                          alt="Netherlands Flag"
                        />
                      </div>
                      <div>
                        <p className="reach-city m-0 leading-none">
                          Maastricht, Netherlands
                        </p>
                      </div>
                    </div>

                    {/* ITEM 3 */}
                    <div
                      className="reach-item reveal flex items-center"
                      style={{ transitionDelay: "0.24s" }}
                      onMouseEnter={() => setActiveCountry("belgium")}
                    >
                      <div className="reach-flag">
                        <img
                          src="https://flagcdn.com/w40/be.png"
                          alt="Belgium Flag"
                        />
                      </div>
                      <div>
                        <p className="reach-city m-0 leading-none">
                          Brussels, Belgium
                        </p>
                      </div>
                    </div>

                    {/* ITEM 4 */}
                    <div
                      className="reach-item reveal flex items-center"
                      style={{ transitionDelay: "0.32s" }}
                      onMouseEnter={() => setActiveCountry("usa")}
                    >
                      <div className="reach-flag">
                        <img
                          src="https://flagcdn.com/w40/us.png"
                          alt="USA Flag"
                        />
                      </div>
                      <div>
                        <p className="reach-city m-0 leading-none">
                          United States
                        </p>
                      </div>
                    </div>

                  </div>



                </div>


                {/* RIGHT SIDE */}

                <div
                  className="reach-right reveal"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div
                    key={activeCountry}
                    className="service-card country-card"
                  >

                    <img
                      src={countryCases[activeCountry].flag}
                      alt={countryCases[activeCountry].title}
                      className="country-card-flag"
                    />



                    <h3>
                      {countryCases[activeCountry].title}
                    </h3>

                    <div className="country-location">
                      {countryCases[activeCountry].location}
                    </div>

                    <br />

                    <ul>
                      {countryCases[activeCountry].services.map(
                        (item, index) => (
                          <li key={index} style={{ fontWeight: 600 }}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

              </div>

            </div>

          </section>










          {/* CTA SECTION */}

          <section className="section-cta">

            <div className="container">

              <div className="cta-inner reveal">


                <span className="block w-full text-center text-[#E64013] text-[16px] font-bold tracking-[0.35em] uppercase mb-8">
                  Need Experienced EHR Leadership?
                </span>


                <h2
                  className="font-bold text-[#071E14] text-center"
                  style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)" }}
                >
                  Transform Your Healthcare Digital Experience
                </h2>

                <p className="section-services-sub reveal">
                  Whether your organisation is preparing for implementation, optimisation, or programme recovery, Silke IT provides practical guidance grounded in real-world delivery experience.
                </p>

                <div className="cta-actions">

  <a
    href="/contact"
    className="btn-primary"
    onClick={(e) => {
      e.preventDefault();

      sessionStorage.setItem(
        "buttonSource",
        "Connect with EHR Expert"
      );

      navigate("/contact", {
          state: {
              scrollToForm: true,
          },
      });
    }}
  >
    Connect with EHR Expert
  </a>

</div>

              </div>

            </div>


          </section>















        </section>



      </div>

    </>
  );
}