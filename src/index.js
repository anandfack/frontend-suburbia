import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import router
import { BrowserRouter as Router } from "react-router-dom";

// import landing context provider
import { LandingProvider } from "./context/LandingContext";
import { NewsProvider } from "./context/NewsContext";
import { DetailNewsProvider } from "./context/DetailNewsContext";
import { RoasterProvider } from "./context/RoasterContext";
import { DropdownProvider } from "./context/DropdownContext";
import { DetailShowContext } from "./context/DetailShowContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LandingProvider>
    <NewsProvider>
      <DetailNewsProvider>
        <RoasterProvider>
          <DropdownProvider>
            <DetailShowContext>
              <Router>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              </Router>
            </DetailShowContext>
          </DropdownProvider>
        </RoasterProvider>
      </DetailNewsProvider>
    </NewsProvider>
  </LandingProvider>
);
