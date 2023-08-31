import React from "react";

import { Routes, Route } from "react-router-dom";

// import components
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/news" element={<NewsPage />} />
      </Routes>
    </div>
  );
} 

export default App