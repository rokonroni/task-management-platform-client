import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>
      <div id="outlet" className="flex-1 md:ml-56 px-6  overflow-y-auto">
        {/* Add a wrapper div to ensure correct application of styles */}
        <div className="h-full">
          <Outlet />
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Dashboard;
