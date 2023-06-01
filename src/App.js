import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Knowledges from "./Pages/Knowledges";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Pages/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/competences" element={<Knowledges/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
