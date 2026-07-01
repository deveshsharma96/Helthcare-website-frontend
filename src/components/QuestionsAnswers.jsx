import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EpicFAQSection() {
  // We use React state to track which FAQ is open. 
  // Default is 0 (the first one is open). Use -1 if you want all closed by default.
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do we support Epic Optimisation programmes?',
      tags: ['Optimisation', 'Workflow', 'Efficiency'],
      answer: (
        <div className="space-y-4">
          <p>
            We help healthcare organisations improve how their EHR supports clinicians, operational teams and patients by making workflows more efficient, intuitive and aligned to operational objectives.
          </p>
          <p>
            Our optimisation approach combines clinical workflow understanding, technical configuration expertise and stakeholder engagement to identify inefficiencies, reduce unnecessary complexity and improve usability across the system.
          </p>
          <p className="pt-2">This includes:</p>
          <ul className="space-y-2.5">
            {[
              'Workflow and process optimisation',
              'Build and configuration review',
              'Documentation and order set refinement',
              'Governance and change control support',
              'User adoption and post go-live stabilisation'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E64013] mt-2 flex-shrink-0" />
                <span className="text-[#0F2318]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="pt-2">
            Our focus is outcome driven - improving user experience, supporting safer and more efficient workflows, increasing adoption and helping organisations realise greater long-term value from their EHR investment.
          </p>
        </div>
      ),
    },
    {
      question: 'How do you approach clinical workflow standardisation?',
      tags: ['Standardisation', 'Clinical Safety'],
      answer: (
        <div className="space-y-4">
          <p>
            We begin by understanding how teams operate day to day. Every organisation has different workflows, operational pressures and clinical requirements.
          </p>
          <p>
            Our approach focuses on balancing clinical safety, operational efficiency and user adoption while reducing unnecessary complexity and variation across workflows.
          </p>
          <p className="pt-2">This typically includes:</p>
          <ul className="space-y-2.5">
            {[
              'Reviewing workflows across departments and specialties',
              'Identifying duplication, inconsistency and manual effort',
              'Aligning processes with operational and clinical objectives',
              'Supporting stakeholder engagement and governance',
              'Designing scalable and sustainable workflows'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E64013] mt-2 flex-shrink-0" />
                <span className="text-[#0F2318]">{item}</span>
              </li>
            ))}
          </ul>
          {/* Highlighted Outcome Box matching the screenshot */}
          <div className="bg-[#EEF4F0] p-5 rounded-lg border-l-4 border-[#2A6049] text-[#0F2318] mt-6">
            The outcome is more consistent, efficient and user-friendly workflows that support safer patient care, stronger operational oversight and improved long-term sustainability across the organisation.
          </div>
        </div>
      ),
    },
    {
      question: 'Can you support multi-site Epic delivery programmes?',
      tags: ['Multi-Site Delivery', 'Governance', 'Alignment'],
      answer: (
        <div className="space-y-4">
          <p>
            We bring structure, consistency and clear communication to complex multi-site Epic delivery programmes, helping organisations align clinical, operational and technical teams across different hospitals and healthcare systems.
          </p>
          <p>
            Our approach balances organisation-wide standardisation with local operational requirements, ensuring workflows and configuration decisions remain clinically appropriate, scalable and sustainable.
          </p>
          <p className="pt-2">This typically includes:</p>
          <ul className="space-y-2.5">
            {[
              'Multi-site workflow and operational alignment',
              'Stakeholder engagement and governance support',
              'Cross-site optimisation and standardisation',
              'Go-live planning, stabilisation and recovery support',
              'Early identification and management of delivery risks'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E64013] mt-2 flex-shrink-0" />
                <span className="text-[#0F2318]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="pt-2">
            We work closely with programme leadership and frontline teams to improve coordination, reduce delivery risk and support stronger operational, clinical and user outcomes across the programme.
          </p>
        </div>
      ),
    },
    {
      question: 'What healthcare organisations have you worked with?',
      tags: ['Experience', 'Global Reach'],
      answer: (
        <div className="space-y-6">
          <p>
            We have a proven track record working with leading NHS trusts, academic medical centres and international healthcare systems across the UK, Europe and the United States.
          </p>
          
          {/* Cards Grid matching the screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
            {/* London Card */}
            <div className="border border-[#DCE8E2] rounded-xl p-5 bg-[#FBFDFD]">
              <h4 className="text-[#E64013] text-[0.8rem] tracking-wider mb-4 font-semibold uppercase flex gap-2 items-center">
                <span className="font-extrabold text-[0.65rem]">GB</span> LONDON, UK
              </h4>
              <ul className="space-y-2 text-[0.95rem] text-[#0F2318]">
                <li>Guy's and St Thomas' Hospitals</li>
                <li>King's College London</li>
                <li>University College London Hospitals</li>
              </ul>
            </div>

            {/* Devon Card */}
            <div className="border border-[#DCE8E2] rounded-xl p-5 bg-[#FBFDFD]">
              <h4 className="text-[#E64013] text-[0.8rem] tracking-wider mb-4 font-semibold uppercase flex gap-2 items-center">
                <span className="font-extrabold text-[0.65rem]">GB</span> DEVON, UK
              </h4>
              <ul className="space-y-2 text-[0.95rem] text-[#0F2318]">
                <li>Royal Devon and Exeter NHS Foundation Trust</li>
                <li>Northern Devon Healthcare NHS Trust</li>
              </ul>
            </div>

            {/* Holland Card */}
            <div className="border border-[#DCE8E2] rounded-xl p-5 bg-[#FBFDFD]">
              <h4 className="text-[#E64013] text-[0.8rem] tracking-wider mb-4 font-semibold uppercase flex gap-2 items-center">
                <span className="font-extrabold text-[0.65rem]">NL</span> HOLLAND
              </h4>
              <ul className="space-y-2 text-[0.95rem] text-[#0F2318]">
                <li>Maastricht UMC+</li>
                <li>Ciro</li>
              </ul>
            </div>

            {/* Belgium Card */}
            <div className="border border-[#DCE8E2] rounded-xl p-5 bg-[#FBFDFD]">
              <h4 className="text-[#E64013] text-[0.8rem] tracking-wider mb-4 font-semibold uppercase flex gap-2 items-center">
                <span className="font-extrabold text-[0.65rem]">BE</span> BRUSSELS, BELGIUM
              </h4>
              <ul className="space-y-2 text-[0.95rem] text-[#0F2318]">
                <li>Cliniques Universitaires Saint-Luc (UCLouvain)</li>
              </ul>
            </div>

            {/* USA Card (Full Width with 2 columns inside) */}
            <div className="border border-[#DCE8E2] rounded-xl p-5 bg-[#FBFDFD] md:col-span-2">
              <h4 className="text-[#E64013] text-[0.8rem] tracking-wider mb-4 font-semibold uppercase flex gap-2 items-center">
                <span className="font-extrabold text-[0.65rem]">US</span> UNITED STATES
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
                <ul className="space-y-2 text-[0.95rem] text-[#0F2318]">
                  <li>University of California San Francisco</li>
                  <li>Mount Sinai Hospital System</li>
                  <li>NYC Health+Hospitals</li>
                </ul>
                <ul className="space-y-2 text-[0.95rem] text-[#0F2318]">
                  <li>Benioff Children's Hospital, Oakland</li>
                  <li>Beth Israel Medical Center</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      ),
    },
    {
      question: 'How do you support multi-site Epic delivery programmes?',
      answer: 'We support complex multi-site Epic programmes by aligning clinical, operational and technical workflows across organisations. This includes governance support, workflow harmonisation, stakeholder engagement and delivery coordination to help reduce programme risk while improving adoption and operational consistency.',
      tags: ['Multi-Site Delivery', 'Governance', 'Workflow Alignment'],
    },
    {
      question: 'Can you support optimisation after go-live?',
      answer: 'Yes. We help healthcare organisations stabilise and optimise Epic environments following deployment by identifying workflow inefficiencies, improving usability, reducing manual processes and supporting operational teams through structured optimisation initiatives.',
      tags: ['Optimisation', 'Operational Efficiency', 'Adoption'],
    },
    {
      question: 'Do you support interoperability and integration programmes?',
      answer: 'We support complex interoperability initiatives involving downstream systems, national services and event-driven integrations. Our focus is ensuring integrations are clinically safe, operationally sustainable and aligned to programme outcomes.',
      tags: ['Interoperability', 'Integration', 'National Services'],
    },
    {
      question: 'Have you worked across different healthcare organisations internationally?',
      answer: 'Our experience spans healthcare organisations across the UK, Ireland, the United States, Belgium and the Netherlands, supporting implementation, optimisation and recovery programmes within large-scale healthcare environments.',
      tags: ['International Experience', 'Programme Delivery', 'Advisory'],
    },
    {
      question: 'What makes your approach different from a large consultancy?',
      answer: 'As an independent specialist, every engagement is led hands-on by someone who has configured Epic across five countries — no handoffs, no knowledge gaps between a senior partner and a junior sub-contractor. Clinical and operational teams get direct access to the expertise they are paying for.',
      tags: [],
    },
        {
      question: 'Can you work on a programme that already live but underperforming?',
      answer: 'Epic Recovery is one of our core service lines. Programmes stall for many reasons: scope drift, workforce gaps, design decisions made under pressure. I can assess the current state, identify root causes and build a targeted recovery plan — with measurable milestones.',
      tags: [],
    },

        {
      question: 'How do you approach sensitive workflows such as HIV or SRH services?',
      answer: 'Confidentiality design is built in from the start, not retrofitted. I have direct experience designing Separate and Shared record structures, MyChart access controls and correspondence workflows for sensitive specialties, aligned with NHS Caldicott and IG requirements.',
      tags: [],
    },
    {
      question: 'Do you have experience with national dataset and Spine integrations?',
      answer: 'Yes. I led the first NHS organisation to implement a one-way NEMS Spine interface into Epic — a landmark project requiring coordination with NHS Digital, Epic and multiple clinical stakeholders. I also have experience with NIPE, air quality LSOA datasets and population health integration.',
      tags: [],
    },

  ];

  // Animation Orchestration (Staggered Children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each item appearing
        delayChildren: 0.1,    // Initial delay before starting
      },
    },
  };

  // Individual element fade-up animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: [0.25, 0.4, 0.25, 1] // Super smooth custom easing
      } 
    },
  };

  return (
    <section className="bg-[#F5FAF7] py-20 lg:py-32 px-6 lg:px-12 font-['Montserrat',sans-serif] text-[#0F2318]">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-[1180px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start"
      >
        
        {/* ============ LEFT CONTENT (Sticky on Desktop) ============ */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 relative z-10">
          
          {/* Eyebrow Label with Custom Silke IT Theme Dot */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
            
                    <p className="hero-eyebrow">
           Client Questions
              </p>
          
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-[2.8rem] leading-[1.15] font-medium text-[#0F2318] mb-6 tracking-tight">
            Questions Clients<br className="hidden lg:block"/> Commonly Ask
          </motion.h2>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-[1.05rem] leading-[1.7] text-[#4B5F55] mb-10 max-w-[480px]">
            Delivering and optimising Epic EHR programmes involves clinical,
            operational and technical complexity. These are some of the
            questions healthcare organisations commonly ask when engaging with
            our consultancy services.
          </motion.p>

          {/* Focus Areas List */}
          <motion.div variants={itemVariants} className="border-l-[3px] border-[#E64013] pl-6 py-1">
            <p className="font-['Comfortaa',cursive] text-[0.72rem] uppercase tracking-[0.16em] text-[#2A6049] mb-4 font-bold">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['Epic Delivery', 'Optimisation', 'Integration', 'Recovery'].map((item) => (
                <span
                  key={item}
                  className="bg-white text-[#2A6049] border border-[#DCE8E2] px-4 py-1.5 rounded-full text-[0.82rem] font-semibold shadow-sm transition-colors hover:border-[#3D8A68]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============ RIGHT CONTENT (Accordion) ============ */}
        <div className="lg:col-span-7 space-y-5 relative z-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className={`bg-white rounded-[24px] border transition-all duration-300 overflow-hidden cursor-pointer
                  ${isOpen 
                    ? 'border-[#3D8A68] shadow-[0_16px_40px_rgba(15,35,24,0.08)]' 
                    : 'border-[#DCE8E2] shadow-[0_2px_10px_rgba(15,35,24,0.03)] hover:border-[#3D8A68]/60 hover:shadow-[0_10px_24px_rgba(15,35,24,0.06)]'
                  }`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {/* Accordion Header */}
                <div className="px-6 py-6 lg:px-8 lg:py-7 flex items-start justify-between gap-6 group">
                  <h3 className={`text-[1.1rem] lg:text-[1.2rem] leading-[1.4] font-bold mt-1 transition-colors duration-300 ${isOpen ? 'text-[#2A6049]' : 'text-[#0F2318] group-hover:text-[#2A6049]'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Plus/Cross Icon */}
                  <div className={`min-w-[44px] h-[44px] rounded-full flex items-center justify-center text-[1.4rem] font-light transition-all duration-300
                    ${isOpen 
                      ? 'bg-[#E64013] text-white rotate-45 shadow-[0_4px_12px_rgba(230,64,19,0.25)]' 
                      : 'bg-[#F0F8F4] text-[#2A6049] group-hover:bg-[#E8F4EF]'
                    }`}
                  >
                    +
                  </div>
                </div>

                {/* Accordion Body (Smooth CSS Grid Animation) */}
                <div 
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 pt-0">
                      
                      <div className="w-full h-px bg-[#F0F8F4] mb-6" />
                      
                      {/* Render either JSX or a string safely */}
                      <div className="text-[0.95rem] leading-[1.75] text-[#4B5F55] mb-8 max-w-3xl">
                        {faq.answer}
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-[#F5FAF7] text-[#3D8A68] border border-[#E8F4EF] px-3.5 py-1 rounded-full text-[0.75rem] font-bold tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                
              </motion.div>
            );
          })}
        </div>
        

      </motion.div>
    </section>
  );
}