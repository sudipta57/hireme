import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/500.css"; // For specific weights
import "@fontsource/space-grotesk";
import "@fontsource/dm-sans";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurProduct from "./components/OurProduct";
import Company from "./components/Company";
import ResumeUpload from "./components/ResumeUpload";
import Contact from "./components/Contact";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-product" element={<OurProduct />} />
        <Route path="/our-company" element={<Company />} />
        <Route path="/our-resume" element={<ResumeUpload />} />
        <Route path="/our-price" element={<Pricing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
