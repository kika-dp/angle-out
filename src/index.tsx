import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FrameScreen } from "./screens/FrameScreen/FrameScreen";
import { AngeloutLandingScreen } from "./screens/AngeloutLandingScreen";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrameScreen />} />
        <Route path="/services" element={<AngeloutLandingScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
