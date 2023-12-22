import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure"
import toast from "react-hot-toast";
const Task = ({task, refetch}) => {
  const axiosSecure = useAxiosSecure();

  const formatDate = (dateString) => {
  if (!dateString) {
    return "No deadline"; 
  }
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
    new Date(dateString)
  );
  return formattedDate;
};

  const [{ isDragging }, drag] = useDrag({
    type: "TODO_ITEM",
    item: { task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

   const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/task/${id}`);
          if (response.data.deletedCount > 0) {
            refetch();
           toast.success("Successfully delete the task")
          }
        } catch (error) {
          console.error("Error deleting meal:", error);
        }
      }
    });
  };

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="flex flex-col gap-2 m-4 bg-gray-100 shadow-lg rounded-xl"
      key={task._id}
    >
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          {task.taskTitle}
          <span className="badge text-sm ml-2  badge-secondary badge-outline">
            {task.taskPriority}
          </span>
        </div>
        <div className="collapse-content">
          <p className="text-justify">{task.taskDescription}</p>
          <p className="mt-2 font-bold">
            Deadline:{" "}
            <span className="font-normal">{formatDate(task.taskDeadline)}</span>
          </p>
          <div className="flex justify-center text-xl w-max-fit gap-4 px-8 my-4 ">
            <Link
              to={`/dashboard/updateTask/${task._id}`}
              className="btn btn-active bg-gradient-to-r hover:bg-gradient-to-l from-sky-600 to-cyan-400 px-4 py-2 w-1/2 rounded-lg text-white"
            >
              Update Task
            </Link>
            <button onClick={()=>handleDelete(task._id)} className="btn btn-active bg-gradient-to-r hover:bg-gradient-to-l from-red-600 to-red-400 px-4 py-2 w-1/2 rounded-lg text-white">
              Delete Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
