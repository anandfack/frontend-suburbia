import React from "react";

import { Routes, Route } from "react-router-dom";

// import components
import LandingPage from "./pages/LandingPage";
import NewsPage from "./pages/NewsPage";
import RoasterPage from "./pages/RoasterPage";
import DetailsPage from "./pages/DetailsPage";
import DetailsMerchandisePage from "./pages/DetailsMerchandisePage";
import ShowPage from "./pages/ShowPage";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import DetailsShowPage from "./pages/DetailsShowPage";
import DetailsRoasterPage from "./pages/DetailsRoasterPage";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/news" element={<NewsPage />} />
        <Route exact path="/roaster" element={<RoasterPage />} />
        <Route exact path="/show" element={<ShowPage />} />
        <Route exact path="/news/:id" element={<DetailsPage />} />
        <Route
          exact
          path="/merchandise/:id"
          element={<DetailsMerchandisePage />}
        />
        <Route exact path="/show/:id" element={<DetailsShowPage />} />
        <Route exact path="/roaster/details" element={<DetailsRoasterPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
