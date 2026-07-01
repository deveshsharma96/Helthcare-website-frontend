






import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LogoText from "../assets/silke-text.png";
import LogoIcon from "../assets/it-icon.png";
import { Link, useLocation } from "react-router-dom";

/* ---------------- ICON SYSTEM ---------------- */

const IconWrapper = ({ children, className = "", size = 20, viewBox = "0 0 24 24" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

const ArrowRightIcon = ({ size = 18 }) => (
  <IconWrapper size={size}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconWrapper>
);

const MenuIcon = () => (
  <IconWrapper>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </IconWrapper>
);

const CloseIcon = () => (
  <IconWrapper>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconWrapper>
);

const ChevronDownIcon = ({ size = 16, className = "" }) => (
  <IconWrapper size={size} className={className}>
    <path d="m6 9 6 6 6-6" />
  </IconWrapper>
);

/* ---------------- SERVICE ICONS ---------------- */

const AdvisoryIcon = ({ size = 20 }) => (
  <IconWrapper size={size}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </IconWrapper>
);

const ImplementationIcon = ({ size = 20 }) => (
  <IconWrapper size={size}>
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </IconWrapper>
);

const DesignIcon = ({ size = 20 }) => (
  <IconWrapper size={size} viewBox="0 0 24 24">
    <path d="M3 6h4l2 13 4-18 2 9h6"/>
  </IconWrapper>
);

const OptimisationIcon = ({ size = 20 }) => (
  <IconWrapper size={size}>
    <path d="M4 4v16h16" />
    <polyline points="4 16 10 10 14 14 20 8" />
  </IconWrapper>
);

const RecoveryIcon = ({ size = 20 }) => (
  <IconWrapper size={size}>
    <path d="M3 12a9 9 0 1 0 9-9"/>
    <path d="M3 3v5h5"/>
  </IconWrapper>
);

/* ---------------- NAV LINKS ---------------- */

const links = [
  { 
    label: "Services", 
    subLinks: [
      { to: "/advisory", label: "Advisory", icon: AdvisoryIcon },
      { to: "/design-and-configuration", label: "Design & Configuration", icon: DesignIcon },
      { to: "/epicimplementation", label: "Epic Implementation", icon: ImplementationIcon },
      { to: "/optimisation", label: "Optimisation", icon: OptimisationIcon },
      { to: "/recovery", label: "Recovery", icon: RecoveryIcon },
    ]
  },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about-us", label: "About Us" },
  { to: "/questions-answers", label: "Q&A" },
];

/* ---------------- COMPONENT ---------------- */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    console.log("Navbar Mounted");
  }, []);
  
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeSubLinks = links.find(l => l.label === activeDropdown)?.subLinks;

  const isLinkActive = (item) => {
    if (item.subLinks) {
      return item.subLinks.some(sub => location.pathname === sub.to);
    }
    if (item.to) {
      return location.pathname === item.to;
    }
    if (item.href) {
      return location.hash === item.href; 
    }
    return false;
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[9999] px-4 pt-0 pb-3 md:px-6 md:pt-0 md:pb-4 w-full">
        <div 
          className="mx-auto w-full max-w-[1050px] relative"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          
          {/* OUTER TRACK */}
          <div
            className={`relative z-20 flex w-full items-center justify-between rounded-b-[2rem] rounded-t-none md:rounded-full p-2 md:p-3 transition duration-500 ease-in-out min-h-[72px] md:min-h-[80px] bg-[rgba(245,250,247,0.92)] backdrop-blur-[12px] border border-[rgba(42,96,73,0.12)] border-b-[2px] border-b-[rgba(42,96,73,0.15)] shadow-[0_4px_20px_rgba(15,35,24,0.08)]`}
          >
            {/* LEFT SECTION (Logo) */}
            <div 
              className="flex lg:flex-1 justify-start pl-7"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setActiveDropdown(null);
                }}
                className="flex items-center shrink-0 overflow-hidden"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    width: isScrolled ? 0 : "auto", 
                    opacity: isScrolled ? 0 : 1,
                    marginRight: isScrolled ? 0 : 6 
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center overflow-hidden whitespace-nowrap"
                >
                  <img
                    src={LogoText}
                    alt="SILKE"
                    className="h-5 md:h-6 lg:h-7 w-auto object-contain"
                  />
                </motion.div>

                <motion.div
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex items-center shrink-0 z-10"
                >
                  <img
                    src={LogoIcon}
                    alt="IT Icon"
                    className="h-5 md:h-6 lg:h-7 w-auto object-contain"
                  />
                </motion.div>
              </Link>
            </div>

            {/* CENTER SECTION (Desktop Links) */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 shrink-0 z-10">
              <div
                className={`flex items-center gap-6 xl:gap-10 rounded-full px-8 py-2 md:py-3 transition duration-500 ease-in-out bg-transparent`}
              >
                {links.map((item) => {
                  const active = isLinkActive(item);

                  return (
                    <div 
                      key={item.label}
                      className="relative group flex flex-col items-center justify-center"
                      onMouseEnter={() => item.subLinks ? setActiveDropdown(item.label) : setActiveDropdown(null)}
                    >
                      {item.subLinks ? (
                        <div className={`relative flex items-center gap-1.5 cursor-pointer text-[14px] xl:text-[15px] font-['Montserrat'] tracking-[0.3px] font-semibold transition duration-300 whitespace-nowrap py-1 ${active ? "text-[#E64013]" : "text-[#0F2318] hover:text-[#E64013]"}`}>
                          {item.label}
                          <ChevronDownIcon 
                            size={16} 
                            className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`} 
                          />
                          {!active && (
                            <span className={`absolute -bottom-1 left-0 right-0 mx-auto h-[4px] rounded-full bg-[#E64013] transition-all duration-300 shadow-[0_2px_6px_rgba(230,64,19,0.4)] ${activeDropdown === item.label ? "w-full" : "w-0 group-hover:w-full"}`} />
                          )}
                        </div>
                      ) : item.to ? (
                        <Link
                          to={item.to}
                          onClick={() => setActiveDropdown(null)}
                          className={`relative flex items-center text-[14px] xl:text-[15px] font-['Montserrat'] tracking-[0.3px] font-semibold transition duration-300 whitespace-nowrap py-1 ${active ? "text-[#E64013]" : "text-[#0F2318] hover:text-[#E64013]"}`}
                        >
                          {item.label}
                          {!active && (
                            <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[4px] w-0 rounded-full bg-[#E64013] transition-all duration-300 group-hover:w-full shadow-[0_2px_6px_rgba(230,64,19,0.4)]" />
                          )}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className={`relative flex items-center text-[14px] xl:text-[15px] font-['Montserrat'] tracking-[0.3px] font-semibold transition duration-300 whitespace-nowrap py-1 ${active ? "text-[#E64013]" : "text-[#0F2318] hover:text-[#E64013]"}`}
                        >
                          {item.label}
                          {!active && (
                            <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[4px] w-0 rounded-full bg-[#E64013] transition-all duration-300 group-hover:w-full shadow-[0_2px_6px_rgba(230,64,19,0.4)]" />
                          )}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SECTION (CTA + Mobile Menu) */}
            <div 
              className="flex lg:flex-1 justify-end items-center gap-3 md:gap-4 shrink-0 pr-2"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className={`hidden sm:flex rounded-full px-5 py-2.5 lg:px-8 lg:py-3 text-[14px] lg:text-[15px] xl:text-[17px] font-extrabold text-[#E64013] transition duration-500 ease-in-out whitespace-nowrap ${
                  isScrolled
                    ? "bg-transparent border border-[#E64013]/40 shadow-none hover:bg-[#E64013]/10"
                    : "bg-[#F5FAF7] shadow-[4px_4px_8px_#DCE5E0,-4px_-4px_8px_#FFFFFF] lg:shadow-[6px_6px_12px_#DCE5E0,-6px_-6px_12px_#FFFFFF] border border-white/80 hover:shadow-[inset_4px_4px_8px_#DCE5E0,inset_-4px_-4px_8px_#FFFFFF]"
                }`}
              >
                <span className="flex items-center gap-2">Contact Us</span>
              </motion.a>

              <button
                onClick={() => setOpen(!open)}
                className={`flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full text-[#E64013] transition duration-500 ease-in-out lg:hidden shrink-0 z-20 ${
                  isScrolled
                    ? "bg-transparent border border-[#E64013]/40 shadow-none"
                    : "bg-[#F5FAF7] shadow-[4px_4px_8px_#DCE5E0,-4px_-4px_8px_#FFFFFF] border border-white/80 active:shadow-[inset_4px_4px_8px_#DCE5E0,inset_-4px_-4px_8px_#FFFFFF]"
                }`}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* DESKTOP CONNECTED DROPDOWN */}
          <div className="hidden lg:block">
            <AnimatePresence>
              {activeDropdown && activeSubLinks && (
                <motion.div
                  initial={{ opacity: 1, y: -60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-[calc(100%-2rem)] left-0 w-full z-10"
                >
                  <div 
                    className="w-full rounded-b-[2.5rem] rounded-t-none pt-12 pb-6 px-8 transition duration-500 ease-in-out bg-[rgba(245,250,247,0.92)] backdrop-blur-[12px] border border-[rgba(42,96,73,0.12)] border-t-0 shadow-[0_10px_30px_rgba(15,35,24,0.08)]"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                      {activeSubLinks.map((sub) => {
                        const IconComponent = sub.icon;
                        const subActive = location.pathname === sub.to;

                        return (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            onClick={() => setActiveDropdown(null)}
                            className="group relative flex items-center gap-4 p-4 rounded-[1.5rem] transition duration-300 overflow-hidden hover:bg-[rgba(42,96,73,0.04)]"
                          >
                            <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition duration-300 ${
                              subActive 
                                ? "bg-[#E64013] text-white scale-105 shadow-[0_8px_16px_rgba(230,64,19,0.25)]" 
                                : "bg-white text-[#E64013] group-hover:bg-[#E64013] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_16px_rgba(230,64,19,0.25)]"
                            }`}>
                              <IconComponent size={20} />
                            </div>
                            
                            <span className={`relative font-['Montserrat'] tracking-[0.3px] font-semibold text-[16px] transition-colors ${
                              subActive ? "text-[#E64013]" : "text-[#0F2318] group-hover:text-[#E64013]"
                            }`}>
                              {sub.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* MOBILE MENU WITH ICONS */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-4 overflow-hidden rounded-[2rem] bg-[rgba(245,250,247,0.92)] backdrop-blur-[12px] p-6 shadow-[0_10px_30px_rgba(15,35,24,0.08)] border border-[rgba(42,96,73,0.12)] lg:hidden mx-auto w-full relative z-30"
              >
                <div className="flex flex-col gap-2">
                  {links.map((item) => {
                    const active = isLinkActive(item);

                    return (
                      <div key={item.label} className="flex flex-col">
                        {item.subLinks ? (
                          <>
                            <button
                              onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                              className={`flex items-center justify-between rounded-2xl px-4 py-4 font-['Montserrat'] tracking-[0.3px] font-semibold transition duration-300 text-left hover:bg-[rgba(42,96,73,0.04)] ${
                                active ? "text-[#E64013]" : "text-[#0F2318]"
                              }`}
                            >
                              <span>{item.label}</span>
                              <ChevronDownIcon className={`transition-transform duration-300 ${
                                (mobileOpenDropdown === item.label || active) ? "rotate-180 text-[#E64013]" : ""
                              }`} />
                            </button>
                            
                            <AnimatePresence>
                              {(mobileOpenDropdown === item.label || active) && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col pl-4 pr-4 pb-3 pt-1 gap-2 border-l-2 border-[#E64013]/20 ml-5">
                                    {item.subLinks.map((sub) => {
                                      const IconComponent = sub.icon;
                                      const subActive = location.pathname === sub.to;

                                      return (
                                        <Link
                                          key={sub.label}
                                          to={sub.to}
                                          onClick={() => setOpen(false)}
                                          className={`group flex items-center gap-4 py-3 px-2 rounded-xl font-['Montserrat'] tracking-[0.3px] font-semibold text-[15px] transition-colors hover:bg-[rgba(42,96,73,0.04)] ${
                                            subActive ? "text-[#E64013]" : "text-[#0F2318] hover:text-[#E64013]"
                                          }`}
                                        >
                                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-sm transition duration-300 ${
                                            subActive ? "bg-[#E64013] text-white scale-105" : "bg-white text-[#E64013] group-hover:bg-[#E64013] group-hover:text-white group-hover:scale-105"
                                          }`}>
                                            <IconComponent size={18} />
                                          </div>
                                          {sub.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : item.to ? (
                          <Link
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className={`rounded-2xl px-4 py-4 font-['Montserrat'] tracking-[0.3px] font-semibold transition duration-300 text-left hover:bg-[rgba(42,96,73,0.04)] ${
                              active ? "text-[#E64013]" : "text-[#0F2318]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`rounded-2xl px-4 py-4 font-['Montserrat'] tracking-[0.3px] font-semibold transition duration-300 text-left hover:bg-[rgba(42,96,73,0.04)] ${
                              active ? "text-[#E64013]" : "text-[#0F2318]"
                            }`}
                          >
                            {item.label}
                          </a>
                        )}
                      </div>
                    );
                  })}

                  <a
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-4 sm:hidden flex items-center justify-center gap-2 rounded-full bg-[#E64013] px-8 py-4 text-[16px] font-extrabold text-white shadow-[0_10px_20px_rgba(230,64,19,0.3),inset_2px_2px_4px_rgba(255,255,255,0.4)] transition active:scale-95"
                  >
                    Contact Us
                    <ArrowRightIcon />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}




