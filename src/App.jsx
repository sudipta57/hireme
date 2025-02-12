import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import ForgotPassword from "./authentication/ForgotPassword";
import VerifyOTP from "./authentication/VerifyOTP";
import Dashboard from "./dashboard/Dashboard";
import DashboardProfile from "./pages/DashboardProfile";
import StartScreening from "./Component/StartScreening";
import Report from "./pages/Report";
import Download from "./pages/Download";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Only render Navbar and Footer if on the home page */}
      {isHomePage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/dash-profile" element={<DashboardProfile />} />
        <Route path="/start-screening" element={<StartScreening />} />
        <Route path="/report" element={<Report />} />
        <Route path="/download" element={<Download />} />
      </Routes>

      {isHomePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
