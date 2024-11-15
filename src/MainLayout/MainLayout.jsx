import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbars from "../components/Navbars/Navbars";

const MainLayout = () => {
  return (
    <>
      <Navbars />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
