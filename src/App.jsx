import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import CaseStudies from "./components/CaseStudies";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import QuestionsAnswers from "./components/QuestionsAnswers";
import Feedback from "./pages/Feedback";
import AdvisoryPage from "./pages/AdvisoryPage";
import EpicImplementationPage from "./pages/EpicImplementationPage";
import DesignAndConfigurationPage from "./pages/DesignAndConfigurationPage";
import OptimisationPage from "./pages/OptimisationPage";
import RecoveryPage from "./pages/RecoveryPage";
import CaseStudyDetail from "./pages/CaseStudyDetail";

import ContactConsent from "./pages/ContactConsent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import IntDataTransferNotice from "./pages/IntDataTransferNotice";
export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      {location.pathname !== "/feedback" && <Navbar />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/questions-answers" element={<QuestionsAnswers />} />
        <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
        <Route path="/advisory" element={<AdvisoryPage />} />
        <Route path="/epicimplementation" element={<EpicImplementationPage />} />
        <Route path="/design-and-configuration" element={<DesignAndConfigurationPage />} />
        <Route path="/optimisation" element={<OptimisationPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        
        <Route path="/contactconsent" element={<ContactConsent />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/intdatatransfernotice" element={<IntDataTransferNotice />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      {location.pathname !== "/feedback" && <Footer />}
    </>
  );
}