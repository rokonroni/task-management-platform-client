import { FaTasks } from "react-icons/fa";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const DashBoard = () => {
  return (
    <div>
      <Helmet>
        <title>DashBoard || Task Management</title>
      </Helmet>
      <SectionTitle title={"Dashboard"} subTitle={"See your Dashboard"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="mt-4 bg-gray-200 px-4 py-5  w-full  rounded-xl shadow-xl">
          <div className="flex items-center rounded-md">
            <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <FaTasks className="text-white text-2xl " />
            </div>
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">Upcoming</h4>
              <div className="text-gray-500">Today Total Task</div>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-200 px-4 py-5  w-full  rounded-xl shadow-xl">
          <div className="flex items-center rounded-md">
            <div className="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
              <FaTasks className="text-white text-2xl " />
            </div>
            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">Upcoming</h4>
              <div className="text-gray-500">Complete Task Today</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
