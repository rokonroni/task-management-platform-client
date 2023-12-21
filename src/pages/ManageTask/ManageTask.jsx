import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ManageTask = () => {

    
  return (
    <div className="max-h-screen">
      <Helmet>
        <title>DashBoard || Task Management</title>
      </Helmet>
      <SectionTitle title={"Manage Task"} subTitle={"Manage your tasks"} />
      <div className="flex  flex-col md:flex-row gap-6 ">
        <div className="flex-1 w-full min-h-max ">
          <h1 className="text-center text-2xl py-4 border-b">Todo List</h1>
          <div className="todo-item flex flex-col gap-2 m-4 bg-gray-100 shadow-lg rounded-xl">
            <div className="collapse collapse-plus ">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Need do Assignment{" "}
                <span className="badge badge-secondary badge-outline">Low</span>
              </div>
              <div className="collapse-content">
                <p className="text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus eveniet inventore, laborum id magnam quasi
                  voluptatum aliquam animi dicta quas sequi pariatur alias enim
                  distinctio esse at asperiores voluptatibus reiciendis.
                </p>
                <p className="mt-2 font-bold">
                  Dedline: <span className="font-normal">21-12-2030</span>{" "}
                </p>
              </div>
              <div className="flex justify-center text-xl w-max-fit gap-4 px-8 mb-4 ">
                
                    <Link to=''  className="btn btn-active bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-cyan-400 px-4  py-2 w-1/2 rounded-lg text-white">
                 Update Task
                </Link>
                
                <button className="btn btn-active bg-gradient-to-r hover:bg-gradient-to-l from-red-600 to-red-400 px-4 py-2 w-1/2 rounded-lg text-white">
                  Delete Task
                </button>
              </div>
            </div>
          </div>
          
        </div>
        <div className=" w-full flex-1 flex-col ">
          <div className="min-h-[30vh] border border-gray-200 border-dashed  ">
            <h1 className="text-center text-2xl py-4 border-b">Ongoing Task</h1>
          </div>
          <div className="min-h-[30vh] mt-5  border border-gray-200 border-dashed">
            <h1 className="text-center text-2xl py-4 border-b">Completed Task</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
