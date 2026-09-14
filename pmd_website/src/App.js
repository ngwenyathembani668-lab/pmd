import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivatePolicy from "./pages/PrivatePolicy";
import PricingPage from "./pages/PricingPage";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};


function App() {
  return (<BrowserRouter>
    <ScrollToTop /> <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/privacy-policy"
        element={<PrivatePolicy />}
      />
      <Route
        path="/prices"
        element={<PricingPage />}
      />
    </Routes> </BrowserRouter>
  );
}

export default App;
