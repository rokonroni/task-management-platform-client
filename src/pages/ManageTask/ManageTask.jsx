import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useGetTasks from "../../hooks/useGetTasks";
import Task from "../../components/Task/Task";
import { useDrop } from "react-dnd";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageTask = () => {
const { allTask: allToDoTask, isPending: isPendingToDo, refetch: refetchToDo } = useGetTasks("getToDoTask", "to-do");
const { allTask: allOngoingTask, isPending: isPendingOngoing, refetch: refetchOngoing } = useGetTasks("getOngoingTask", "ongoing");
const { allTask: allCompleteTask, isPending: isPendingComplete, refetch: refetchComplete } = useGetTasks("getCompleteTask", "complete");
const axiosSecure = useAxiosSecure();

  const [, ongoingTaskDrop] = useDrop({
    accept: 'TODO_ITEM',
    drop: async  (item) => {
        const taskId = item.task._id;
      try {
        await axiosSecure.patch(`/updateTaskType/${taskId}`, { taskType: "ongoing" });
        refetchToDo();
        refetchOngoing();
        refetchComplete();
        toast.success(`${item.task.taskTitle} added in ongoing`)
      } catch (error) {
        toast.error('Error updating task type:', error);
      }
      
    },
  });

  const [, completedTaskDrop] = useDrop({
    accept: 'TODO_ITEM',
     drop: async  (item) => {
        const taskId = item.task._id;
      try {
        await axiosSecure.patch(`/updateTaskType/${taskId}`, { taskType: "complete" });
        refetchToDo();
        refetchComplete();
        refetchOngoing();
        toast.success(`${item.task.taskTitle} added in complete`)
      } catch (error) {
        toast.error('Error updating task type:', error);
      }
      
    },
  });

  return (
    <div className="max-h-screen">
      <Helmet>
        <title>DashBoard || Task Management</title>
      </Helmet>
      <SectionTitle title={"Manage Task"} subTitle={"Manage your tasks"} />
      <div className="flex  flex-col md:flex-row gap-6 ">
        <div className="flex-1 w-full min-h-max border border-gray-200 border-dashed">
          <h1 className="text-center text-2xl py-4 border-b">Todo List</h1>

          {isPendingToDo ? (
            
            <p className="text-center">Loading...</p>
          ) : (
            
            allToDoTask.map((task) => <Task key={task._id} refetch={refetchToDo} task={task} />)
          )}
        </div>

        <div className=" w-full flex-1 flex-col ">
          <div ref={ongoingTaskDrop} className="flex-1 w-full min-h-[30vh] border border-gray-200 border-dashed ">
          <h1 className="text-center text-2xl py-4 border-b">Ongoing Task</h1>

          {isPendingOngoing ? (
            
            <p className="text-center">Loading...</p>
          ) : (
            
            allOngoingTask.map((task) => <Task key={task._id} refetch={refetchOngoing} task={task} />)
          )}
        </div>
          <div ref={completedTaskDrop} className="flex-1 w-full min-h-[30vh] border border-gray-200 border-dashed ">
          <h1 className="text-center text-2xl py-4 border-b">Complete Task</h1>

          {isPendingComplete ? (
            
            <p className="text-center">Loading...</p>
          ) : (
            
            allCompleteTask.map((task) => <Task key={task._id} refetch={refetchComplete} task={task} />)
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
