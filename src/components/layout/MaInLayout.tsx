import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
const MaInLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default MaInLayout;
