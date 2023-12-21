import Logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { MdAddTask } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 lg:hover:w-60  md:w-60 hover:bg-white lg:bg-white hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className=" flex  w-full  items-center justify-center p-2.5">
              <img src={Logo} className="w-8" alt="" />
              <h1 className=" ml-3 lg:text-xl hidden md:block">Task Management </h1>
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              {/* <li className="min-w-max">
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <RxDashboard className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Dashboard</span>
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/dashboard"
                   end={true}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <RxDashboard className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addTask"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <MdAddTask className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Add Task</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allTask"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <MdAddTask className="h-5 w-5" />
                  <span className="-mr-1 font-medium">All Task</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-max -mb-3">
            <button
              href="#"
              className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
            >
              <CiLogout className="h-5 w-5"/>
              <span className="group-hover:text-gray-700">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
