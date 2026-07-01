// import React from 'react';
// import Logo from "../assets/footer-logo.png";
// import { Link } from "react-router-dom";
// import Yukticlogo from "../assets/Yukticlogo.png";

// export default function Footer() {
  
//   // Matches the Deep Green brand color for authoritative text
//   const greenTextGradient = {
//     background: 'linear-gradient(90deg, #0F2318 0%, #2A6049 60%, #3D8A68 100%)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     backgroundClip: 'text',
//     color: 'transparent',
//     display: 'inline-block',
//   };

//   return (
//     <footer 
//       className="relative w-full overflow-hidden text-[#0F2318] border-t border-b border-[rgba(42,96,73,0.08)]"
//       style={{
//         background: "linear-gradient(135deg, #eef6f1 0%, #dcebe3 35%, #edf7f2 70%, #f8fcfa 100%)"
//       }}
//     >
      
//       {/* --- TEXTURE PATTERN OVERLAY --- */}
//       <div className="absolute inset-0 pointer-events-none z-[1]">
//         <div
//           className="w-full h-full"
//           style={{
//             opacity: 0.9,
//             backgroundImage: `
//               radial-gradient(circle at 20% 30%, rgba(61,138,104,0.14) 2px, transparent 2px),
//               radial-gradient(circle at 80% 70%, rgba(42,96,73,0.10) 3px, transparent 3px),
//               conic-gradient(from 45deg at 30% 40%, rgba(61,138,104,0.08), transparent 60%)
//             `,
//             backgroundSize: "120px 120px, 150px 150px, 300px 300px"
//           }}
//         />
//       </div>

//       {/* --- Main Content Container --- */}
//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-5 pb-5">        
//         {/* Top Section (Columns) */}
//         <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
//           {/* Column 1: Logo & Tagline */}
//           <div className="flex-1 lg:max-w-[320px] flex flex-col items-start">
//             <Link 
//               to="/" 
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="inline-block mb-2"
//             >
//               <img
//                 src={Logo}
//                 alt="SILKEIT Logo"
//                 className="w-44 sm:w-44 object-contain"
//               />
//             </Link>

//             <h2 
//               className="text-[30px] md:text-[23px] leading-[1.1] font-bold mb-5 tracking-tight"
//               style={greenTextGradient}
//             >
//               Epic expertise that delivers.
//             </h2>
//             <h2 
//               className="text-[15px] md:text-[15px] leading-[1.3] font-medium mb-3 tracking-tight"
//               style={greenTextGradient}
//             >
//               Registered in England and Wales.
//               Registration Number: 14525353
//               VAT Number: 449942349
//             </h2>


//           </div>

//           {/* Column 2: Industries We Serve (Non-clickable) */}
//           <div className="flex-[2] lg:max-w-[500px] mt-4 lg:mt-0">
//             <h3 className="text-[#2A6049] font-bold uppercase tracking-[0.15em] text-[13px] md:text-[15px] mb-3">
//               HEALTHCARE SOLUTIONS
//             </h3>
//             {/* Red Theme Divider */}
//             <div className="h-[2px] w-full bg-[#E64013] opacity-80 mb-6"></div>
            
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
//               <ul className="space-y-4 m-0 p-0 list-none">
//                 <li className="text-[#4A6358] text-[15.5px] font-medium">Epic Implementation</li>
//                 <li className="text-[#4A6358] text-[15.5px] font-medium">Epic Optimisation</li>
//                 <li className="text-[#4A6358] text-[15.5px] font-medium leading-tight block">Epic Recovery</li>
//                 <li className="text-[#4A6358] text-[15.5px] font-medium">Clinical Workflow Design</li>
//               </ul>
//               <ul className="space-y-4 sm:mt-0 mt-2 m-0 p-0 list-none">
//                 <li className="text-[#4A6358] text-[15.5px] font-medium leading-tight block">Clinical Documentation</li>
//                 <li className="text-[#4A6358] text-[15.5px] font-medium">Data & Reporting</li>
//                 <li className="text-[#4A6358] text-[15.5px] font-medium">Epic Recovery</li>
//                 <li className="text-[#4A6358] text-[15.5px] font-medium">Go-Live Support</li>
//               </ul>
//             </div>
//           </div>

//           {/* Column 3: Our Expertise (Non-clickable) */}
//           <div className="flex-1 lg:max-w-[250px] mt-4 lg:mt-0">
//             <h3 className="text-[#2A6049] font-bold uppercase tracking-[0.15em] text-[13px] md:text-[15px] mb-3">
//               OUR EXPERTISE
//             </h3>
//             <div className="h-[2px] w-full bg-[#E64013] opacity-80 mb-6"></div>
            
//             <ul className="space-y-4 m-0 p-0 list-none">
//               <li className="text-[#4A6358] text-[15.5px] font-medium">Epic Programme Recovery</li>
//               <li className="text-[#4A6358] text-[15.5px] font-medium">Epic Design & Build</li>
//               <li className="text-[#4A6358] text-[15.5px] font-medium">Workflow Optimisation</li>
//               <li className="text-[#4A6358] text-[15.5px] font-medium">Go-Live Support</li>
//             </ul>
//           </div>

//         </div>

//         {/* --- Bottom Footer Bar --- */}
//         <div className="mt-8 border-t border-[rgba(42,96,73,0.15)] pt-6 flex flex-col md:flex-row justify-between items-center text-[14px]">
          
//           {/* Bottom Links */}
//           <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4 md:mb-0 text-[#0F2318] font-medium">
//             <a href="/privacypolicy" className="hover:text-[#E64013] transition-colors">Privacy Policy</a>
//             <a href="/cookiepolicy" className="hover:text-[#E64013] transition-colors">Cookie Policy</a>
//             <a href="/intdatatransfernotice" className="hover:text-[#E64013] transition-colors">International Data Transfer Notice</a>
//             <a href="/disclaimer" className="hover:text-[#E64013] transition-colors">Disclaimer</a>
//           </div>

//           {/* Copyright text */}
// <div
//   className="text-[#4A6358] font-medium text-center md:text-left"
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "8px",
//     flexWrap: "wrap",
//   }}
// >
//   <span>
//     Copyright © <span className="text-[#E64013]">2026 SILKE IT</span>. Powered by
//   </span>

//   <a
//     href="https://yuktic.com/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="hover:text-[#E64013] transition-colors"
//     style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",
//       lineHeight: 1,
//     }}
//   >
//     <img
//       src={Yukticlogo}
//       alt="Yuktic"
//       style={{
//         width: "24px",
//         height: "24px",
//         display: "block",
//       }}
//     />

//     <span
//       style={{
//         display: "block",
//         lineHeight: 1,
//       }}
//     >
//       Yuktic.com
//     </span>
//   </a>
// </div>
          
//         </div>
//       </div>
//     </footer>
//   );
// }









import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/footer-logo.png";
import Yukticlogo from "../assets/Yukticlogo.png";

export default function Footer() {
  return (
    <footer 
      className="relative w-full p-0 font-sans text-[#0F2318]"
      style={{
        background: "linear-gradient(180deg, #F5FAF7 0%, #E8F4EF 100%)",
        WebkitFontSmoothing: "antialiased"
      }}
    >
      {/* Thin top accent rule from HTML (Forest Green -> Sage -> Silke Red) */}
      <div 
        className="block w-full h-[3px]"
        style={{
          background: "linear-gradient(90deg, #2A6049 0%, #3D8A68 55%, #E64013 100%)"
        }}
      ></div>

      {/* Changed max-w-[1380px] to max-w-[1180px] to properly center the block on wide screens */}
      <div className="w-full max-w-[1380px] mx-auto pt-[15px] px-6 sm:px-8 pb-0">
        
        {/* --- Upper Grid: Brand + Link Columns --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-[34px] lg:gap-[40px] pb-[10px]">
          
          {/* Brand Column */}
          <div className="max-w-none lg:max-w-[300px] flex flex-col items-start col-span-1 sm:col-span-2 lg:col-span-1">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-[10px] no-underline mt-[14px]"
              aria-label="Silke IT home"
            >
              <img
                src={Logo}
                alt="SILKEIT Logo"
                className="w-36 object-contain"
              />
            </Link>
            <p className="mt-[14px] text-[14.72px] leading-[1.55] text-[#4A6A5C]">
              Independent EHR expertise that delivers.

 <br/><br/>

              Supporting public, private and research hospitals.
            </p>
            <div className="mt-[0px] flex flex-col gap-[7px]">
            
            </div>
            <div className="mt-[0px]">
              <a 
                href="https://www.linkedin.com/company/silke-it/?viewAsMember=true" 
                aria-label="Silke IT on LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-[38px] h-[38px] border border-[#D2E6DC] rounded-[9px] text-[#2A6049] transition-all duration-200 hover:border-[#3D8A68] hover:text-[#E64013] hover:-translate-y-[2px]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <nav aria-label="Services" className="pt-2">
            <h4 className="font-semibold text-[11.5px] tracking-[0.14em] uppercase text-[#3D8A68] mb-[16px]" style={{ fontFamily: "'Comfortaa', cursive" }}>
              Services
            </h4>
            <ul className="list-none p-0 m-0">
              {[
                { name: 'Advisory', path: '/advisory' },
                { name: 'Implementation', path: '/epicimplementation' },
                { name: 'Design & Configuration', path: '/design-and-configuration' },
                { name: 'Optimisation', path: '/optimisation' },
                { name: 'Recovery', path: '/recovery' }
              ].map((item, idx) => (
                <li key={idx} className="mb-[11px]">
                  <Link 
                    to={item.path} 
                    className="relative group inline-block text-[14.72px] text-[#0F2318] hover:text-[#E64013] transition-colors duration-200"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-[3px] w-0 h-[1.5px] bg-[#E64013] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company Column */}
          <nav aria-label="Company" className="pt-2">
            <h4 className="font-semibold text-[11.5px] tracking-[0.14em] uppercase text-[#3D8A68] mb-[16px]" style={{ fontFamily: "'Comfortaa', cursive" }}>
              Company
            </h4>
            <ul className="list-none p-0 m-0">
              {[
                { name: 'About', path: '/about-us' },
                { name: 'Case Study', path: '/case-studies' },
                { name: 'Contact', path: '/contact' },
                { name: 'Q&A', path: '/questions-answers' }
              ].map((item, idx) => (
                <li key={idx} className="mb-[11px]">
                  <Link 
                    to={item.path} 
                    className="relative group inline-block text-[14.72px] text-[#0F2318] hover:text-[#E64013] transition-colors duration-200"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-[3px] w-0 h-[1.5px] bg-[#E64013] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            
              
              
            </ul>
          </nav>

          {/* Legal Column */}
          <nav aria-label="Legal" className="pt-2">
            <h4 className="font-semibold text-[11.5px] tracking-[0.14em] uppercase text-[#3D8A68] mb-[16px]" style={{ fontFamily: "'Comfortaa', cursive" }}>
              Legal
            </h4>
            <ul className="list-none p-0 m-0">
              {[
                { name: 'Privacy Policy', path: '/privacypolicy' },
                { name: 'Cookie Policy', path: '/cookiepolicy' },
                { name: 'Data Transfer Notice', path: '/intdatatransfernotice' },
                { name: 'Disclaimer', path: '/disclaimer' }
              ].map((item, idx) => (
                <li key={idx} className="mb-[11px]">
                  <Link 
                    to={item.path} 
                    className="relative group inline-block text-[14.72px] text-[#0F2318] hover:text-[#E64013] transition-colors duration-200"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-[3px] w-0 h-[1.5px] bg-[#E64013] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* --- Company Registration Band --- */}
<div className="border-t border-[#D2E6DC] py-4 text-center px-4">
  <p className="text-[#2A6049] text-[15px] font-semibold leading-[1.4] mb-3">
    16+ Epic deployments across the USA, UK, Belgium, Netherlands and Ireland.
  </p>

  <div className="space-y-0">
    <p className="m-1 text-[#4A6A5C] text-[13px] leading-[1.35]">
      Registered in England and Wales • Company No. 14525353 • VAT No. GB449942349
    </p>

    <p className="m-1 text-[#4A6A5C] text-[13px] leading-[1.35]">
      Registered office: 1 Grenville Mews, London N19 4EQ, United Kingdom
    </p>
  </div>
</div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-[#D2E6DC] pt-[20px] pb-[20px] flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-[16px] sm:gap-[12px] text-[13.12px] text-[#4A6A5C]">
          <span className="text-center sm:text-left">Copyright © {new Date().getFullYear()} Silke IT Limited.</span>
          
          <a
            href="https://yuktic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[6px] text-[#2A6049] font-medium hover:text-[#E64013] transition-colors duration-200 group"
          >
            <span>Powered by</span>
            <img
              src={Yukticlogo}
              alt="Yuktic"
              className="w-[20px] h-[20px] block opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span>Yuktic.com</span>
          </a>
        </div>

      </div>
    </footer>
  );
}