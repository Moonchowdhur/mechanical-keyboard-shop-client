import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "@/pages/Footer";
const MaInLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MaInLayout;
