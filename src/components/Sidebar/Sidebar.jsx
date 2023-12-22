import Logo from "../../assets/logo.png";
import { RxDashboard } from "react-icons/rx";
import { CiBoxList, CiLogout } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { PiListChecks } from "react-icons/pi";


const Sidebar = () => {
  const {user, logOut} = useAuth();
  const navigate = useNavigate();

  const handleLogout = () =>{
   logOut()
    .then(() => {
      navigate('/');
    })
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 lg:hover:w-64  md:w-64 hover:bg-white lg:bg-white hover:shadow-lg">
        <div className="flex h-screen flex-col justify-between pt-2 pb-6">
          <div>
            <div className=" flex  w-full  items-center justify-center p-2.5">
              <img src={Logo} className="w-8" alt="" />
              <h1 className=" ml-3 lg:text-xl hidden md:block">Task Management </h1>
            </div>
            <ul className="mt-6 space-y-2 tracking-wide">
              <li className="min-w-max">
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
              <li className="min-w-max">
                <NavLink
                  to="/dashboard/toDo"
                  end={true}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <CiBoxList className="h-5 w-5" />
                  <span className="-mr-1 font-medium">To Do Task</span>
                </NavLink>
              </li>
              <li className="min-w-max">
                <NavLink
                  to="/dashboard/ongoing"
                  end={true}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <FaListCheck className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Ongoing Task</span>
                </NavLink>
              </li>
              <li className="min-w-max">
                <NavLink
                  to="/dashboard/completed"
                  end={true}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <PiListChecks className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Completed Task</span>
                </NavLink>
              </li>
              <li className="min-w-max">
                <NavLink
                  to="/dashboard/addTask"
                  end={true}
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
              <li className="min-w-max">
                <NavLink
                  to="/dashboard/manageTask"
                  end={true}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "bg-none"
                      : isActive
                      ? "relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
                      : "relative flex items-center space-x-4 px-4 py-3"
                  }
                >
                  <FaRegEdit className="h-5 w-5" />
                  <span className="-mr-1 font-medium">Manage Task</span>
                </NavLink>
              </li>

            </ul>
          </div>
          <div className="w-max -mb-3">
            <div className="px-2">
              <div className="flex justify-center items-center gap-2 ">
                <img  className="w-12 h-12 rounded-full" src= {user.photoURL} alt="" />
                <div>
                  <h1>{user.displayName}</h1>
                <p>{user.email}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="group flex items-center space-x-4 border-t-2 mt-3  border-dashed rounded-md px-4 py-3 text-gray-600"
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
