import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import AboutPage from "./components/AboutPage";
import RegisterPage from "./components/RegisterPage";
import "./App.css";
import GuidePage from "./components/GuidePage";
import HelplinePage from "./components/HelplinePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/guide" element={<GuidePage />} />
      <Route path="/helpline" element={<HelplinePage />} />
    </Routes>
  );
}

export default App;
