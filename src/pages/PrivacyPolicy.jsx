// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const styles = `
//   :root {
//     --silke-red: #E64013;
//     --silke-red-dk: #C8350F;
//     --forest-green: #2A6049;
//     --sage-mid: #3D8A68;
//     --soft-mint: #F5FAF7;
//     --green-tint: #E8F4EF;
//     --forest-night: #0F2318;
//     --white: #FFFFFF;
//     --ink: #0F2318;
//     --muted: #4B5F55;
//     --line: #D8E8E0;
//     --radius: 18px;
//     --shadow-sm: 0 2px 10px rgba(15,35,24,.06);
//     --shadow-md: 0 14px 36px rgba(15,35,24,.10);
//     --shadow-lg: 0 26px 60px rgba(15,35,24,.16);
//     --maxw: 1360px;
//   }
  
//   * { box-sizing: border-box; }
//   html { scroll-behavior: smooth; }
//   body {
//     margin: 0;
//     padding: 0;
//     font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
//     color: var(--ink);
//     background: var(--white);
//     line-height: 1.5;
//     -webkit-font-smoothing: antialiased;
//   }
//   a { color: inherit; text-decoration: none; }
  
//   h1, h2, h3, h4 { 
//     font-family: 'Montserrat', sans-serif; 
//     line-height: 1.2; 
//     letter-spacing: -.015em; 
//     margin-top: 0;
//     color: var(--forest-night);
//   }
//   h1 { font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 600; margin-bottom: 16px; }
//   h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 600; margin-bottom: 20px; }
//   h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
//   p { color: var(--muted); margin-top: 0; margin-bottom: 1.2rem; font-size: 1.02rem; }
  
//   .eyebrow {
//     font-family: 'Comfortaa', cursive;
//     font-weight: 700;
//     text-transform: uppercase;
//     letter-spacing: .16em;
//     font-size: .75rem;
//     color: var(--sage-mid);
//     display: inline-flex;
//     align-items: center;
//     gap: 10px;
//     margin-bottom: 16px;
//   }
//   .eyebrow::before {
//     content: '';
//     width: 24px;
//     height: 2px;
//     background: var(--silke-red);
//   }

//   /* ---------- LAYOUT ---------- */
//   .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 40px; }
//   .band { padding: 80px 0; }
//   .band.white { background: #fff; }
//   .band.mint { background: var(--soft-mint); }
  
//   /* ---------- HERO ---------- */
//   .hero-legal { 
//     background: linear-gradient(170deg, var(--soft-mint) 0%, #EEF7F2 100%); 
//     padding: 100px 0 80px; 
//     text-align: center;
//     border-bottom: 1px solid var(--line);
//   }
//   .hero-legal p { max-width: 600px; margin: 0 auto; }
//   .update-tag {
//     display: inline-block;
//     background: var(--white);
//     border: 1px solid var(--line);
//     color: var(--forest-green);
//     font-size: 0.85rem;
//     font-weight: 600;
//     padding: 6px 16px;
//     border-radius: 50px;
//     margin-bottom: 24px;
//     box-shadow: var(--shadow-sm);
//   }

//   /* ---------- LEGAL CONTENT PROSE ---------- */
//   .legal-content {
//     max-width: 900px; /* Constrain width for readability */
//     margin: 0 auto;
//   }
//   .legal-section {
//     margin-bottom: 64px;
//   }
//   .legal-section:last-child {
//     margin-bottom: 0;
//   }
  
//   /* Custom Lists */
//   .legal-list {
//     list-style: none;
//     padding: 0;
//     margin: 0 0 24px 0;
//   }
//   .legal-list li {
//     position: relative;
//     padding-left: 32px;
//     margin-bottom: 12px;
//     color: var(--muted);
//     font-size: 1.02rem;
//   }
//   .legal-list li svg {
//     position: absolute;
//     left: 0;
//     top: 3px;
//     color: var(--sage-mid);
//     width: 20px;
//     height: 20px;
//   }

//   /* ---------- GRID & CARDS ---------- */
//   .grid { display: grid; gap: 24px; }
//   .grid-2 { grid-template-columns: repeat(2, 1fr); margin-top: 32px; }
//   .grid-3 { grid-template-columns: repeat(3, 1fr); margin-top: 32px; }
  
//   .card {
//     background: #fff; 
//     border: 1px solid var(--line); 
//     border-radius: var(--radius); 
//     padding: 32px 28px;
//     transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
//     position: relative; 
//     overflow: hidden;
//     box-shadow: var(--shadow-sm);
//   }
//   .card:hover { 
//     transform: translateY(-6px); 
//     box-shadow: var(--shadow-md); 
//     border-color: var(--sage-mid); 
//   }
//   .card .topbar { 
//     position: absolute; top: 0; left: 0; height: 4px; width: 0; 
//     background: var(--silke-red); transition: width .3s ease; 
//   }
//   .card:hover .topbar { width: 100%; }
//   .card .ico {
//     width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center;
//     background: var(--green-tint); color: var(--forest-green); margin-bottom: 20px; transition: .25s;
//   }
//   .card:hover .ico { background: var(--forest-green); color: #fff; }
//   .card p { font-size: 0.95rem; margin-bottom: 20px; }
  
//   /* Card internal list */
//   .card-list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--line); padding-top: 20px; }
//   .card-list li {
//     font-size: 0.88rem;
//     color: var(--forest-night);
//     font-weight: 500;
//     margin-bottom: 10px;
//     display: flex;
//     align-items: center;
//     gap: 8px;
//   }
//   .card-list li::before {
//     content: '';
//     width: 6px;
//     height: 6px;
//     border-radius: 50%;
//     background: var(--silke-red);
//   }
//   .card-list li:last-child { margin-bottom: 0; }

//   /* Info/Warning Boxes */
//   .highlight-box {
//     padding: 24px 30px; 
//     background: var(--soft-mint); 
//     border-left: 4px solid var(--forest-green); 
//     border-radius: 12px;
//     margin-top: 32px;
//   }
//   .highlight-box.warn {
//     border-left-color: var(--silke-red);
//     background: rgba(230,64,19,.03);
//   }
//   .highlight-box p {
//     margin-bottom: 0;
//     color: var(--forest-night);
//   }
  
//   /* Data Tables */
//   .legal-table {
//     width: 100%;
//     border-collapse: collapse;
//     margin: 24px 0;
//     background: #fff;
//     border-radius: 12px;
//     overflow: hidden;
//     box-shadow: var(--shadow-sm);
//     border: 1px solid var(--line);
//   }
//   .legal-table td {
//     padding: 16px 24px;
//     border-bottom: 1px solid var(--line);
//     font-size: 0.95rem;
//   }
//   .legal-table tr:last-child td { border-bottom: none; }
//   .legal-table td:first-child { 
//     font-weight: 600; 
//     color: var(--forest-night); 
//     background: var(--soft-mint); 
//     width: 35%;
//   }

//   /* ---------- REVEAL ANIMATIONS ---------- */
//   .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s cubic-bezier(0.2, 0.8, 0.2, 1); }
//   .reveal.in { opacity: 1; transform: none; }
//   .reveal.d1 { transition-delay: .08s; }
//   .reveal.d2 { transition-delay: .16s; }
//   .reveal.d3 { transition-delay: .24s; }

//   /* ---------- RESPONSIVE ---------- */
//   @media (max-width: 980px) {
//     .grid-2, .grid-3 { grid-template-columns: 1fr; }
//   }
//   @media (max-width: 768px) {
//     .wrap { padding: 0 24px; }
//     .band { padding: 60px 0; }
//     .hero-legal { padding: 80px 24px 60px; }
//     .legal-table td { display: block; width: 100% !important; }
//     .legal-table tr { border-bottom: 2px solid var(--line); }
//     .legal-table td:first-child { border-bottom: none; padding-bottom: 8px; }
//   }
//   @media (max-width: 680px) {
//     h1 { font-size: 2rem; }
//     h2 { font-size: 1.6rem; }
//   }
//   @media (prefers-reduced-motion: reduce) {
//     * { animation: none !important; transition: none !important; }
//     .reveal { opacity: 1; transform: none; }
//   }
// `;

// export default function PrivacyPolicy() {
//   useEffect(() => {
//     // Reveal Intersection Observer logic matching the rest of your site
//     const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//     const reveals = document.querySelectorAll('.reveal');
    
//     if (reduce || !('IntersectionObserver' in window)) {
//       reveals.forEach(r => r.classList.add('in'));
//     } else {
//       const ro = new IntersectionObserver((entries) => {
//         entries.forEach(e => {
//           if (e.isIntersecting) {
//             e.target.classList.add('in');
//             ro.unobserve(e.target);
//           }
//         });
//       }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      
//       reveals.forEach(r => ro.observe(r));
//     }
    
//     // Scroll to top on load
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: styles }} />

//       {/* ============ HERO ============ */}
//       <section className="hero-legal">
//         <div className="wrap">
//           <div className="reveal">
//             <span className="update-tag">Last updated: 23/06/2026</span>
//             <h1>Privacy Policy</h1>
//             <p>This statement applies to the <strong>silkeit.co.uk</strong> website and our contact form.</p>
//           </div>
//         </div>
//       </section>

//       {/* ============ MAIN CONTENT ============ */}
//       <section className="band white">
//         <div className="wrap">
//           <div className="legal-content">
            
//             {/* 1. Introduction */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">01. Overview</span>
//               <h2>Introduction</h2>
//               <p>
// Silke IT Limited ("Silke IT", "we", "our", or "us") is committed to protecting and respecting your privacy.               </p>
//               <p>
// This Privacy Policy explains how we collect, use, store, and protect personal information obtained through our website and business activities.               </p>
              
//               <ul className="card-list">
//                 <p>
// We process personal data in accordance with: 
//               </p>
//                     <li>UK General Data Protection Regulation (UK GDPR) </li>
//                     <li>Data Protection Act 2018 </li>
//                     <li>Privacy and Electronic Communications Regulations (PECR) </li>
//                   </ul>
//                   <p>
// By using our website, you acknowledge the practices described in this Privacy Policy. 
//               </p>
//               <ul className="card-list">
//                 <p>
// Contact Details  
//               </p>
//                     <li>Silke IT Limited </li>
//                     <li>Email: privacy@silkeit.co.uk </li>
//                     <li>Website: https://www.silkeit.co.uk  </li>
//                   </ul>
//             </div>

//             {/* 2. Who We Are */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">02. Controller Identity</span>
//               <h2>Who we are</h2>
//               <p>
// Silke IT Limited is a specialist Electronic Health Records (EHR) consultancy providing advisory, implementation, design and configuration, optimisation and programme recovery services to healthcare organisations.               </p>
//               <p>
// For the purposes of data protection legislation, Silke IT Limited acts as a Data Controller in relation to personal information collected through its website and business operations.               </p>

//               <table className="legal-table">
//                 <tbody>
//                   <tr>
//                     <td>Company</td>
//                     <td>Silke IT</td>
//                   </tr>
//                   <tr>
//                     <td>Registered in</td>
//                     <td>England and Wales</td>
//                   </tr>
//                   <tr>
//                     <td>Company number</td>
//                     <td>14525353</td>
//                   </tr>
//                   <tr>
//                     <td>VAT number</td>
//                     <td>449942349</td>
//                   </tr>
//                   <tr>
//                     <td>Registered address</td>
//                     <td>1 Grenville Mews, (Behind) 38 Grenville Road, London N19 4EQ, United Kingdom</td>
//                   </tr>
//                   <tr>
//                     <td>Contact</td>
//                     <td><a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a></td>
//                   </tr>
//                 </tbody>
                
//               </table>
//               <p>
// We are registered with the UK Information Commissioner’s Office (ICO), registration number [insert ICO registration number]. 
//    </p>

//             </div>

//             {/* 3. What we collect */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">03. Data Collection</span>
//     <div className="highlight-box" style={{ padding: '30px', textAlign: 'center', marginTop: '40px' }}>
//                 <h3 style={{ color: 'var(--forest-green)' }}>Silke IT Limited is the Data Controller responsible for your personal information.</h3>
//                 <p style={{ margin: 0 }}>Email: privacy@silkeit.co.uk </p>
//               </div>
//    </div>


//    <div className="legal-section reveal">
//               <span className="eyebrow">04. Information We Collect</span>
              
//               <div className="grid grid-2">
//                 <div className="card reveal d1">
//                   <span className="topbar"></span>
//                   <div className="ico">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
//                   </div>
//                   <h3>Direct Information</h3>
//                   <p>When you complete our contact form, we collect: </p>
//                   <ul className="card-list">
//                     <li>Your name</li>
//                     <li>Your organisation name</li>
//                     <li>Your email address</li>
//                     <li>Your phone number</li>
//                     <li>How you heard about Silke IT Limited</li>
//                     <li>Correspondence and communications</li>
//                     <li>Project or service requirements</li>
//                     <li>Date and Time of submission</li>
//                   </ul>
//                 </div>

//                 <div className="card reveal d2">
//                   <span className="topbar"></span>
//                   <div className="ico">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
//                   </div>
//                   <h3>Technical Information</h3>
//                   <p>Our website host may record limited technical data to keep the site secure and working correctly, such as:</p>
//                   <ul className="card-list">
//                     <li>IP address</li>
//                     <li>Browser type and version</li>
//                     <li>Device information</li>
//                     <li>Website usage data</li>
//                     <li>Referring websites</li>
//                     <li>Cookies and analytics data <br/></li>
//                   </ul>
//                 </div>

//               </div>


//               <div className="highlight-box warn">
//                 <p><strong>Important:</strong> We do not ask for, and you should not send us, sensitive information such as health, clinical or patient data through this form. </p>
//               </div>
//             </div>

//             {/* 4. Why we use it */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">05. How We Collect Information</span>
//               <h2>Why we use it, and our lawful basis</h2>
//               <p>We use the information you provide to:</p>
//               <ul className="legal-list">
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You complete a contact form</li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You communicate with us by email </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You communicate with us by telephone </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You interact with our website </li>

//               </ul>
//               {/* <p>
//                 Our lawful basis for this is our <strong>legitimate interests</strong> in operating and developing our consultancy and in maintaining a record of the people and organisations we deal with. We have weighed this against your interests and rights, and limit what we collect and keep to what is reasonable for that purpose.
//               </p> */}

              
//               {/* <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '0.9rem' }}>You can object to our use of your information at any time - see <em>Your rights</em> (section 08).</p> */}
//             </div>

//             {/* 5. Who we share it with */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">06. Why We Process your Data and Our Lawful Basis</span>
             
//               <p>We use the information you provide to: </p>
//               <ul className="legal-list">
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Respond to enquiries and requests </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Communicate regarding services </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Maintain records of business enquiries </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Develop and manage business relationships  </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Manage and improve our services and client relationships </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Protect website security and prevent misuse  </li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Comply with legal obligations </li>

//               </ul>
//             </div>

//             {/* 6. Where your info is stored */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">07. Our Lawful Basis for Processing </span>
//                 <h2>Under UK GDPR, our lawful bases include: </h2>
//               <div className="card" style={{ padding: '24px' }}>
//                   <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
//                       <h3>Legitimate Interests </h3>
//                     <p>To: </p>
//                     <li>Respond to business enquiries </li>
//                     <li>Manage prospective client relationships</li>
//                     <li>Maintain business records </li>
//                     <li>Improve our services  </li>
//                   </ul>
//                 </div>
//                 <br/>
//                 <div className="card" style={{ padding: '24px' }}>
//                   <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
//                     <h3>Consent  </h3>
//                     <p>Where required, such as:  </p>
//                     <li>Optional marketing communications </li>
//                     <li>Cookie preferences </li>
//                   </ul>
//                 </div>
//                 <br/>
//                 <div className="card" style={{ padding: '24px' }}>
//                   <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
//                     <h3>Legal Obligation  </h3>
//                     <li>Where processing is necessary to comply with applicable laws </li>
//                   </ul>
//                 </div>
              
//               <p>We have weighed this against your interests and rights, and limit what we collect and keep to what is reasonable for that purpose. </p>
//               <p>India is not covered by a UK “adequacy” decision, so this is a restricted transfer under UK data protection law. To keep your information protected to UK standards, we rely on appropriate safeguards:</p>
//               <ul className="legal-list">
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>An International Data Transfer Agreement (or EU Standard Contractual Clauses with the UK Addendum) with our hosting provider</li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>A written data processing agreement governing how our provider may handle your data</li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>A transfer risk assessment that we keep under review</li>
//               </ul>
//               <p>You can ask us for more detail about these safeguards using the contact details above.</p>

//               <div className="highlight-box warn">
//                 <p><strong>⚠ Before you publish:</strong> This section is only accurate once those safeguards are actually in place. Put the IDTA, the processor agreement and the transfer risk assessment in place first — or move form storage to a UK/EU region and rewrite this section accordingly. Do not leave the claim live without the paperwork behind it.</p>
//               </div>
//             </div>

//             {/* 7. Retention & Protection */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">07. Data Lifecycle</span>
//               <h2>How long we keep it & How we protect it</h2>
//               <p>We keep your information only as long as reasonably necessary to fulfil the purposes outlined in this policy. Typical retention periods include:</p>
//               <ul className="legal-list">
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Website enquiries:</strong> up to 7 years</li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Client records:</strong> up to 7 years following completion of services</li>
//                 <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Financial records:</strong> as required by law</li>
//               </ul>
//               <p>Retention periods may be extended where required for legal, regulatory or contractual purposes. We delete or anonymise information we no longer need.</p>
              
//               <h3 style={{ marginTop: '32px' }}>How we protect it</h3>
//               <p>We use reasonable technical and organisational measures to keep your information secure, including encrypted connections (HTTPS), access controls and limiting who can see your data. No transmission over the internet is completely secure, but we take steps to reduce the risk of unauthorised access.</p>
//             </div>

//             {/* 8. Your Rights & Complaints */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">08. User Control</span>
//               <h2>Your rights</h2>
//               <p>Under UK data protection law, you have the right to:</p>
              
//               <div className="grid grid-2" style={{ marginTop: '24px', marginBottom: '40px' }}>
//                 <div className="card" style={{ padding: '24px' }}>
//                   <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
//                     <li>Ask for a copy of the information we hold about you</li>
//                     <li>Ask us to correct information that is wrong or incomplete</li>
//                     <li>Ask us to delete your information where there is no good reason for us to keep it</li>
//                   </ul>
//                 </div>
//                 <div className="card" style={{ padding: '24px' }}>
//                   <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
//                     <li>Ask us to restrict how we use your information</li>
//                     <li>Object to our use of your information based on legitimate interests</li>
//                     <li>Ask us to transfer your information to you or another provider, where this applies</li>
//                   </ul>
//                 </div>
//               </div>

//               <p>To exercise any of these, requests should be submitted through our <Link to="/contact" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>Contact page</Link> or email <a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a>.</p>

//               <h3 style={{ marginTop: '48px' }}>Complaints</h3>
//               <p>If you are unhappy with how we have handled your information, please contact us first at <a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a>. We will acknowledge your complaint within 30 days and work to resolve it.</p>
//               <p>You also have the right to complain to the UK regulator:</p>
              
//               <table className="legal-table">
//                 <tbody>
//                   <tr>
//                     <td>Regulator</td>
//                     <td>Information Commissioner’s Office (ICO)</td>
//                   </tr>
//                   <tr>
//                     <td>Website</td>
//                     <td><a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>ico.org.uk/make-a-complaint</a></td>
//                   </tr>
//                   <tr>
//                     <td>Helpline</td>
//                     <td>+44 (0)303 123 1113</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>

//             {/* 9. Cookies & Changes */}
//             <div className="legal-section reveal">
//               <span className="eyebrow">09. Additional Policies</span>
//               <h2>Cookies</h2>
//               <p>
//                 <strong>[Confirm before publishing.]</strong> This website uses only essential cookies needed for it to work and stay secure. We do not use advertising or tracking cookies. If this changes, we will update this statement and ask for your consent where required. <em><Link to="/cookiepolicy" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>Read our full Cookie Policy here.</Link></em>
//               </p>

//               <h2 style={{ marginTop: '48px' }}>Changes to this statement</h2>
//               <p>
//                 We may update this statement from time to time. Any changes will appear on this page with a revised “Last updated” date. Please check back to stay informed.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    --maxw: 1360px;
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
  }
  a { color: inherit; text-decoration: none; }
  
  h1, h2, h3, h4 { 
    font-family: 'Montserrat', sans-serif; 
    line-height: 1.2; 
    letter-spacing: -.015em; 
    margin-top: 0;
    color: var(--forest-night);
  }
  h1 { font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 600; margin-bottom: 16px; }
  h2 { font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 600; margin-bottom: 20px; }
  h3 { font-size: 1.15rem; font-weight: 700; margin-bottom: 12px; }
  p { color: var(--muted); margin-top: 0; margin-bottom: 1.2rem; font-size: 1.02rem; }
  
  .eyebrow {
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .16em;
    font-size: .75rem;
    color: var(--sage-mid);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  .eyebrow::before {
    content: '';
    width: 24px;
    height: 2px;
    background: var(--silke-red);
  }

  /* ---------- LAYOUT ---------- */
  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 40px; }
  .band { padding: 80px 0; }
  .band.white { background: #fff; }
  .band.mint { background: var(--soft-mint); }
  
  /* ---------- HERO ---------- */
  .hero-legal { 
    background: linear-gradient(170deg, var(--soft-mint) 0%, #EEF7F2 100%); 
    padding: 100px 0 80px; 
    text-align: center;
    border-bottom: 1px solid var(--line);
  }
  .hero-legal p { max-width: 600px; margin: 0 auto; }
  .update-tag {
    display: inline-block;
    background: var(--white);
    border: 1px solid var(--line);
    color: var(--forest-green);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 6px 16px;
    border-radius: 50px;
    margin-bottom: 24px;
    box-shadow: var(--shadow-sm);
  }

  /* ---------- LEGAL CONTENT PROSE ---------- */
  .legal-content {
    max-width: 900px; 
    margin: 0 auto;
  }
  .legal-section {
    margin-bottom: 64px;
  }
  .legal-section:last-child {
    margin-bottom: 0;
  }
  
  /* Custom Lists */
  .legal-list {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
  }
  .legal-list li {
    position: relative;
    padding-left: 32px;
    margin-bottom: 12px;
    color: var(--muted);
    font-size: 1.02rem;
  }
  .legal-list li svg {
    position: absolute;
    left: 0;
    top: 3px;
    color: var(--sage-mid);
    width: 20px;
    height: 20px;
  }

  /* ---------- GRID & CARDS ---------- */
  .grid { display: grid; gap: 24px; }
  .grid-2 { grid-template-columns: repeat(2, 1fr); margin-top: 32px; }
  .grid-3 { grid-template-columns: repeat(3, 1fr); margin-top: 32px; }
  
  .card {
    background: #fff; 
    border: 1px solid var(--line); 
    border-radius: var(--radius); 
    padding: 32px 28px;
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    position: relative; 
    overflow: hidden;
    box-shadow: var(--shadow-sm);
  }
  .card:hover { 
    transform: translateY(-6px); 
    box-shadow: var(--shadow-md); 
    border-color: var(--sage-mid); 
  }
  .card .topbar { 
    position: absolute; top: 0; left: 0; height: 4px; width: 0; 
    background: var(--silke-red); transition: width .3s ease; 
  }
  .card:hover .topbar { width: 100%; }
  .card .ico {
    width: 48px; height: 48px; border-radius: 13px; display: flex; align-items: center; justify-content: center;
    background: var(--green-tint); color: var(--forest-green); margin-bottom: 20px; transition: .25s;
  }
  .card:hover .ico { background: var(--forest-green); color: #fff; }
  .card p { font-size: 0.95rem; margin-bottom: 20px; }
  
  /* Card internal list */
  .card-list { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--line); padding-top: 20px; }
  .card-list li {
    font-size: 0.88rem;
    color: var(--forest-night);
    font-weight: 500;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .card-list li::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--silke-red);
  }
  .card-list li:last-child { margin-bottom: 0; }

  /* Info/Warning Boxes */
  .highlight-box {
    padding: 24px 30px; 
    background: var(--soft-mint); 
    border-left: 4px solid var(--forest-green); 
    border-radius: 12px;
    margin-top: 32px;
  }
  .highlight-box.warn {
    border-left-color: var(--silke-red);
    background: rgba(230,64,19,.03);
  }
  .highlight-box p {
    margin-bottom: 0;
    color: var(--forest-night);
  }
  
  /* Data Tables */
  .legal-table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--line);
  }
  .legal-table td {
    padding: 16px 24px;
    border-bottom: 1px solid var(--line);
    font-size: 0.95rem;
  }
  .legal-table tr:last-child td { border-bottom: none; }
  .legal-table td:first-child { 
    font-weight: 600; 
    color: var(--forest-night); 
    background: var(--soft-mint); 
    width: 35%;
  }

  /* ---------- REVEAL ANIMATIONS ---------- */
  .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .reveal.in { opacity: 1; transform: none; }
  .reveal.d1 { transition-delay: .08s; }
  .reveal.d2 { transition-delay: .16s; }
  .reveal.d3 { transition-delay: .24s; }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 980px) {
    .grid-2, .grid-3 { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .wrap { padding: 0 24px; }
    .band { padding: 60px 0; }
    .hero-legal { padding: 80px 24px 60px; }
    .legal-table td { display: block; width: 100% !important; }
    .legal-table tr { border-bottom: 2px solid var(--line); }
    .legal-table td:first-child { border-bottom: none; padding-bottom: 8px; }
  }
  @media (max-width: 680px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.6rem; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
    .reveal { opacity: 1; transform: none; }
  }
`;

export default function PrivacyPolicy() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      
      reveals.forEach(r => ro.observe(r));
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* ============ HERO ============ */}
      <section className="hero-legal">
        <div className="wrap">
          <div className="reveal">
            <span className="update-tag">Last updated: 23/06/2026</span>
            <h1>Privacy Policy</h1>
            <p>This statement applies to the <strong>silkeit.co.uk</strong> website and our contact form.</p>
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="band white">
        <div className="wrap">
          <div className="legal-content">
            
            {/* 1. Introduction */}
            <div className="legal-section reveal">
              <span className="eyebrow">01. Overview</span>
              <h2>Introduction</h2>
              <p>Silke IT Limited ("Silke IT", "we", "our", or "us") is committed to protecting and respecting your privacy.</p>
              <p>This Privacy Policy explains how we collect, use, store, and protect personal information obtained through our website and business activities.</p>
              <p>We process personal data in accordance with:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>UK General Data Protection Regulation (UK GDPR)</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Data Protection Act 2018</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Privacy and Electronic Communications Regulations (PECR)</li>
              </ul>
              <p>By using our website, you acknowledge the practices described in this Privacy Policy.</p>
              
              <div className="highlight-box">
                <h3 style={{ color: 'var(--forest-green)' }}>Contact Details</h3>
                <p><strong>Silke IT Limited</strong><br />
                Email: <a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a><br />
                Website: <a href="https://www.silkeit.co.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>https://www.silkeit.co.uk</a></p>
              </div>
            </div>

            {/* 2. Who We Are & Data Controller */}
            <div className="legal-section reveal">
              <span className="eyebrow">02. Identity</span>
              <h2>Who We Are & Data Controller</h2>
              <p>Silke IT Limited is a specialist Electronic Health Records (EHR) consultancy providing advisory, implementation, design and configuration, optimisation and programme recovery services to healthcare organisations.</p>
              <p>For the purposes of data protection legislation, Silke IT Limited acts as a Data Controller in relation to personal information collected through its website and business operations. Silke IT Limited is the Data Controller responsible for your personal information.</p>
              
              <table className="legal-table">
                <tbody>
                  <tr>
                    <td>Company</td>
                    <td>Silke IT</td>
                  </tr>
                  <tr>
                    <td>Registered in</td>
                    <td>England and Wales</td>
                  </tr>
                  <tr>
                    <td>Company number</td>
                    <td>14525353</td>
                  </tr>
                  <tr>
                    <td>VAT number</td>
                    <td>449942349</td>
                  </tr>
                  <tr>
                    <td>Registered address</td>
                    <td>1 Grenville Mews, (Behind) 38 Grenville Road, London N19 4EQ, United Kingdom</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td><a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a></td>
                  </tr>
                </tbody>
              </table>
              <p>We are registered with the UK Information Commissioner’s Office (ICO), registration number [insert ICO registration number].</p>
            </div>

            {/* 3. Information We Collect */}
            <div className="legal-section reveal">
              <span className="eyebrow">03. Data Collection</span>
              <h2>Information We Collect</h2>
              
              <div className="grid grid-2">
                <div className="card reveal d1">
                  <span className="topbar"></span>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <h3>Direct Information</h3>
                  <p>When you complete our contact form, we collect:</p>
                  <ul className="card-list">
                    <li>Your name</li>
                    <li>Your organisation name</li>
                    <li>Your email address</li>
                    <li>Your phone number</li>
                    <li>How you heard about Silke IT Limited</li>
                    <li>Correspondence and communications</li>
                    <li>Project or service requirements</li>
                    <li>Date and Time of submission</li>
                  </ul>
                </div>

                <div className="card reveal d2">
                  <span className="topbar"></span>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <h3>Technical Information</h3>
                  <p>Our website host may also record limited technical information automatically to keep the site secure and working correctly, such as:</p>
                  <ul className="card-list">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Website usage data</li>
                    <li>Referring websites</li>
                    <li>Cookies and analytics data</li>
                  </ul>
                </div>
              </div>

              <div className="highlight-box warn">
                <p><strong>Important:</strong> We do not ask for, and you should not send us, sensitive information such as health, clinical or patient data through this form.</p>
              </div>
            </div>

            {/* 4. How We Collect Information */}
            <div className="legal-section reveal">
              <span className="eyebrow">04. Methods</span>
              <h2>How We Collect Information</h2>
              <p>We collect information when:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You complete a contact form</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You communicate with us by email</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You communicate with us by telephone</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>You interact with our website</li>
              </ul>
            </div>

            {/* 5. Why We Process Data */}
            <div className="legal-section reveal">
              <span className="eyebrow">05. Purposes</span>
              <h2>Why We Process your Data</h2>
              <p>We use the information you provide to:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Respond to enquiries and requests</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Communicate regarding services</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Maintain records of business enquiries</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Develop and manage business relationships</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Manage and improve our services and client relationships</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Protect website security and prevent misuse</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Comply with legal obligations</li>
              </ul>
            </div>

            {/* 6. Lawful Basis */}
            <div className="legal-section reveal">
              <span className="eyebrow">06. Justification</span>
              <h2>Our Lawful Basis for Processing</h2>
              <p>Under UK GDPR, our lawful bases include:</p>
              
              <div className="grid grid-3">
                <div className="card reveal d1" style={{ padding: '24px' }}>
                  <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <h3>Legitimate Interests</h3>
                    <p>To:</p>
                    <li>Respond to business enquiries</li>
                    <li>Manage prospective client relationships</li>
                    <li>Maintain business records</li>
                    <li>Improve our services</li>
                  </ul>
                </div>
                <div className="card reveal d2" style={{ padding: '24px' }}>
                  <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <h3>Consent</h3>
                    <p>Where required, such as:</p>
                    <li>Optional marketing communications</li>
                    <li>Cookie preferences</li>
                  </ul>
                </div>
                <div className="card reveal d3" style={{ padding: '24px' }}>
                  <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <h3>Legal Obligation</h3>
                    <p>Compliance</p>
                    <li>Where processing is necessary to comply with applicable laws</li>
                  </ul>
                </div>
              </div>

              <p style={{ marginTop: '24px' }}>We have weighed this against your interests and rights, and limit what we collect and keep to what is reasonable for that purpose.</p>
              
              <div className="highlight-box">
                <h3 style={{ color: 'var(--forest-green)' }}>We do not sell your data</h3>
                <p>We do not sell, rent or trade your personal information to anyone. We will not add you to marketing lists or send you marketing without your consent. You can object to our use of your information at any time - see <em>Your rights</em> (Section 11).</p>
              </div>
            </div>

            {/* 7. Email Notifications */}
            <div className="legal-section reveal">
              <span className="eyebrow">07. Communications</span>
              <h2>Email Notifications</h2>
              <p>When a Contact Form is submitted:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Internal Notification:</strong> Silke IT Limited receives an email notification containing the submitted enquiry details.</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Confirmation Email:</strong> The individual submitting the enquiry may receive an acknowledgement email confirming receipt of their request. Email delivery services are provided through Brevo, acting as a Data Processor on our behalf.</li>
              </ul>
            </div>

            {/* 8. Data Storage and Security */}
            <div className="legal-section reveal">
              <span className="eyebrow">08. Security</span>
              <h2>Data Storage and Security</h2>
              <p>Personal information submitted through the website is stored securely within a MongoDB database hosted on Silke IT's dedicated virtual private server infrastructure provided by IONOS within the European Union.</p>
              <p>Security measures include:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>SSL/TLS encryption</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Restricted administrative access</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Authentication controls</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Firewall protection</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Regular software updates</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Secure server configuration</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Monitoring and logging</li>
              </ul>
              <p>While we implement reasonable safeguards, no internet transmission can be guaranteed completely secure. You can ask us for more detail about these safeguards using the contact details above.</p>
            </div>

            {/* 9. Sharing & Transfers */}
            <div className="legal-section reveal">
              <span className="eyebrow">09. Sharing</span>
              <h2>Who We Share Information With</h2>
              <p>We do not sell, rent, trade, or otherwise distribute personal information to third parties for marketing purposes. We keep your information confidential and only share it where necessary:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>With our website and form hosting provider, which stores submissions on our behalf as a data processor under a written contract</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>With professional advisers (for example accountants or legal advisers) where reasonably required</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>Where we are required to by law, or to establish, exercise or defend legal claims</li>
              </ul>

              <h3 style={{ marginTop: '32px' }}>International Data Transfers</h3>
              <p>Personal data is primarily stored within the United Kingdom and European Economic Area (EEA). Where personal information is transferred outside the UK, we will ensure appropriate safeguards are in place in accordance with UK GDPR requirements. Further information is contained within our International Data Transfer Notice.</p>
            </div>

            {/* 10. Data Retention */}
            <div className="legal-section reveal">
              <span className="eyebrow">10. Data Lifecycle</span>
              <h2>How Long We Keep It</h2>
              <p>We retain enquiry information only for as long as reasonably necessary. Typically:</p>
              <ul className="legal-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Enquiry records:</strong> up to 7 years after last business contact</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Website logs:</strong> up to 12 months</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Legal compliance records:</strong> as required by law</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Client records:</strong> up to 7 years following completion of services</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><strong>Financial records:</strong> as required by law</li>
              </ul>
              <p>Where information is no longer required, it will be securely deleted or anonymised. Retention periods may be extended where required for legal, regulatory or contractual purposes. We delete or anonymise information we no longer need.</p>
            </div>

            {/* 11. Your Rights */}
            <div className="legal-section reveal">
              <span className="eyebrow">11. User Control</span>
              <h2>Your Rights</h2>
              <p>Under UK data protection law, you have the right to:</p>
              
              <div className="grid grid-2" style={{ marginTop: '24px', marginBottom: '40px' }}>
                <div className="card" style={{ padding: '24px' }}>
                  <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <li>Ask for a copy of the information we hold about you</li>
                    <li>Ask us to correct information that is wrong or incomplete</li>
                    <li>Ask us to delete your information where there is no good reason for us to keep it</li>
                  </ul>
                </div>
                <div className="card" style={{ padding: '24px' }}>
                  <ul className="card-list" style={{ borderTop: 'none', paddingTop: 0 }}>
                    <li>Ask us to restrict how we use your information</li>
                    <li>Object to our use of your information based on legitimate interests</li>
                    <li>Ask us to transfer your information to you or another provider, where this applies</li>
                  </ul>
                </div>
              </div>

              <p>To exercise any of these, requests should be submitted through our <Link to="/contact" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>Contact page</Link> or email <a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a>.</p>
            </div>

            {/* 12. Complaints */}
            <div className="legal-section reveal">
              <span className="eyebrow">12. Issues</span>
              <h2>Complaints</h2>
              <p>If you are unhappy with how we have handled your information, please contact us first at <a href="mailto:privacy@silkeit.co.uk" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>privacy@silkeit.co.uk</a>. We will acknowledge your complaint within 30 days and work to resolve it.</p>
              <p>You also have the right to complain to the UK regulator:</p>
              
              <table className="legal-table">
                <tbody>
                  <tr>
                    <td>Regulator</td>
                    <td>Information Commissioner’s Office (ICO)</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td><a href="https://ico.org.uk/make-a-complaint" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silke-red)', textDecoration: 'underline' }}>ico.org.uk/make-a-complaint</a></td>
                  </tr>
                  <tr>
                    <td>Helpline</td>
                    <td>+44 (0)303 123 1113</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 13. Additional Policies */}
            <div className="legal-section reveal">
              <span className="eyebrow">13. Additional Policies</span>
              <h2>Cookies</h2>
              <p>This website does not store any cookies. If this changes, we will update this statement and ask for your consent where required.</p>

              <h2 style={{ marginTop: '48px' }}>Changes to this Statement</h2>
              <p>We may update this statement from time to time. Any changes will appear on this page with a revised “Last updated” date. Please check back to stay informed.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}