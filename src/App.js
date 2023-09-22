import React from "react";

import { Routes, Route } from "react-router-dom";

// import components
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import RoasterPage from "./pages/RoasterPage";
import DetailsPage from "./pages/DetailsPage";
import DetailsMerchandisePage from "./pages/DetailsMerchandisePage";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/news" element={<NewsPage />} />
        <Route exact path="/roaster" element={<RoasterPage />} />
        <Route exact path="/news/:id" element={<DetailsPage />} />
        <Route
          exact
          path="/merchandise/:id"
          element={<DetailsMerchandisePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
