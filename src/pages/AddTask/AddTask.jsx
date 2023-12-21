import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const taskItem = {
      taskTitle: data.taskTitle,
      taskPriority: data.taskPriority,
      taskDescription: data.taskDescription,
      taskDeadline: data.lastDate,
      taskType: "to-do"
    };
    
    const taskResponse = await axiosSecure.post("/tasks", taskItem);
    if (taskResponse.data.insertedId) {
      reset();
      toast.success("Successfully added task!");
    }
  };

  return (
    <>
      <Helmet>
        <title>Add Task</title>
      </Helmet>
      <div>
        <SectionTitle title={"Add Task"} subTitle={"What's new?"} />
      </div>
      <div className="bg-base-200 p-4 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block font-medium text-gray-600 dark:text-gray-200"
            htmlFor="taskTitle"
          >
            Task Title<span className="text-red-600">*</span>
          </label>
          <input
            id="taskTitle"
            placeholder="Task Title"
            className="w-full p-3 border focus-visible:outline-gray-400  rounded-lg my-4 "
            {...register("taskTitle", { required: true })}
          />
          {errors.taskTitle && (
            <span className="text-red-600 mb-3 ">*Task Title is required</span>
          )}
          <div className="flex flex-col md:flex-row">
            <div className="flex-1">
              <label
                className="block font-medium text-gray-600 dark:text-gray-200"
                htmlFor="taskPriority"
              >
                Task Priority<span className="text-red-600">*</span>
              </label>
              <div>
                <select
                  id="taskPriority"
                  defaultValue="default"
                  {...register("taskPriority", { required: true, validate: value => value !== "default" })}
                  className="select rounded-lg block p-3 my-4 border focus-visible:outline-gray-400 select-bordered w-full max-w-md"
                >
                  <option disabled value="default">
                    Select a category
                  </option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
                {errors.taskPriority && (
                  <span className="text-red-600 mb-3 ">
                    *Task Priority is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <label
                className="block font-medium text-gray-600 dark:text-gray-200"
                htmlFor="lastDate"
              >
                Task Deadline<span className="text-red-600">*</span>
              </label>
              <input
                id="lastDate"
                type="datetime-local"
                placeholder="Task Deadline"
                className="w-full p-3 rounded-lg my-4 "
                {...register("lastDate", { required: true })}
              />
              {errors.lastDate && (
                <span className="text-red-600 mb-3 ">
                  *Task Deadline is required
                </span>
              )}
            </div>
          </div>

          <label
            className="block font-medium text-gray-600 dark:text-gray-200"
            htmlFor="taskDescription"
          >
            Task Desciption<span className="text-red-600">*</span>
          </label>
          <textarea
            id="taskDescription"
            {...register("taskDescription", { required: true })}
            placeholder="Recipe Details"
            className="textarea w-full block p-3 rounded-lg my-3 textarea-bordered textarea-xl resize-none border focus-visible:outline-gray-400"
          ></textarea>
          {errors.taskDescription && (
            <h1 className="text-red-600 mb-3 ">
              *Task Description is required
            </h1>
          )}

          <button className="btn btn-active bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-cyan-400 px-4 py-2 rounded-lg text-white">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
