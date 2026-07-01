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
    max-width: 900px; /* Constrain width for readability */
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
    margin-bottom: 14px;
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

  /* ---------- REVEAL ANIMATIONS ---------- */
  .reveal { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .reveal.in { opacity: 1; transform: none; }
  .reveal.d1 { transition-delay: .08s; }
  .reveal.d2 { transition-delay: .16s; }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 980px) {
    .grid-2 { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .wrap { padding: 0 24px; }
    .band { padding: 60px 0; }
    .hero-legal { padding: 80px 24px 60px; }
  }
  @media (max-width: 680px) {
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.6rem; }
  }
  @media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
    .reveal { opacity: 1; transform: none; }
  }
`;

export default function DataTransferNotice() {
  useEffect(() => {
    // Reveal Intersection Observer logic
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
            <span className="update-tag">Legal & Privacy Notices</span>
            <h1>Data Processing & Transfer</h1>
            <p>Information regarding how we handle data collected through our contact forms, including international transfers and processing statements.</p>
          </div>
        </div>
      </section>

      {/* ============ MAIN CONTENT ============ */}
      <section className="band white">
        <div className="wrap">
          <div className="legal-content">

            {/* 1. Contact Form Privacy Notice */}
            <div className="legal-section reveal">
             
              <h2>Overview</h2>
              <p>Silke IT Limited is based in the United Kingdom and uses technology infrastructure located within the European Union. 
</p>
 
<p>
Personal information submitted through our website is stored and processed on systems hosted by IONOS within the European Economic Area (EEA). </p>
              
    

               <h3>UK to EU Transfers </h3>
<p>The United Kingdom recognises the European Union and EEA as providing an adequate level of protection for personal data. 
</p>
 
<p>
Accordingly, transfers of personal information between the UK and our EU-based hosting environment are permitted under UK GDPR adequacy regulations. 
</p>

               
             

              
            </div>

        
            

            {/* 3. International Transfer & Processing */}
            <div className="legal-section reveal">
           
              <h2>Service Providers</h2>
              
              <div className="grid grid-2">
                
                {/* Transfer Notice Card */}
                <div className="card reveal d1">
                  <span className="topbar"></span>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <h3>Service Providers</h3>
                  <p>We may engage trusted service providers including: </p>
                  <ul className="card-list">
                    <li>IONOS (hosting infrastructure) </li>
                    <li>MongoDB database services hosted within our infrastructure </li>
                    <li>Brevo (email notification services) </li>
                  </ul>
                  <br/>
                                    
                   <p>These providers process information solely under our instructions and are contractually required to maintain appropriate technical and organisational security measures. </p>

                </div>

                {/* Processing Statement Card */}
                <div className="card reveal d2">
                  <span className="topbar"></span>
                  <div className="ico">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  <h3>Security Measures</h3>
                  <p>Safeguards include:</p>
                  <ul className="card-list">
                    <li>Encrypted transmission (TLS/SSL) </li>
                    <li>Access controls </li>
                    <li>Authentication measures </li>
                    <li>Secure server environments </li>
                    <li>Data minimisation principles </li>
                    <li>Future Transfers </li>
                  </ul>
                </div>

              </div>


 <div className="card" style={{ marginTop: '14px' }}>
               
              
                <h3 style={{ marginTop: '2px',  fontWeight: '400' }}>Should any personal data be transferred outside the UK or EEA in the future, Silke IT Limited will implement appropriate safeguards as required by UK GDPR, including: </h3>
                <br/>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <ul className="card-list" style={{ borderTop: 'none', padding: 0 }}>
                    <li>Adequacy decisions </li>
                    <li>International Data Transfer Agreements (IDTAs) </li>
                    <li>Standard Contractual Clauses where appropriate </li>
                  </ul>
                 
                </div>

              </div>


              
              <h3 style={{ marginTop: '32px', textAlign: 'center', fontWeight: '500' }}>
Further Information               </h3>
              <p style={{ marginTop: '32px', textAlign: 'center', fontWeight: '500' }}>
                Questions regarding international data transfers may be directed to privacy@silkeit.co.uk 

              </p>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
