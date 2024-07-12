import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "@/pages/Footer";
const MaInLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="md:min-h-[calc(100vh-70px)]">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default MaInLayout;
