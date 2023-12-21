import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
    return (
        <div className="flex ">
            <Sidebar />
            <div className="w-full px-5">
                <Outlet />
                <Toaster />
            </div>
            
        </div>
    );
};

export default Dashboard;