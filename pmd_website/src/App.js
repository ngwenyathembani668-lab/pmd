import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";

// const Services = () => {
//   return (<div> <h1>Services & Gallery</h1> </div>
//   );
// };

const Contact = () => {
  return (<div> <h1>Contact Us</h1> </div>
  );
};

function App() {
  return (<BrowserRouter> <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} /> </Routes> </BrowserRouter>
  );
}

export default App;
