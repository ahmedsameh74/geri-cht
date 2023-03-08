import { Outlet } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import SideNav from "./SideNav/SideNav";
// import Navbar from "./components/Navbar/Navbar";
import Footer from './../Footer/Footer';
import Navbar from './../Navbar/Navbar';

export const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
      {/* <SideNav /> */}
    </div>
  );
};

