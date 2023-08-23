import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import NoPage from "./components/NoPage.jsx";
import LandscapeDesign from "./components/LandscapeDesign.jsx";
import Services from "./components/Services.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Schedule from "./components/Schedule.jsx";
import NavBar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/services" element={<Services />} />
        <Route path="/design" element={<LandscapeDesign />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};
export default App;
