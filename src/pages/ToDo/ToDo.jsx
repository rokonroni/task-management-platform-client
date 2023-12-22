import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useGetTasks from "../../hooks/useGetTasks";
import Task from "../../components/Task/Task";

const ToDo = () => {
    const { allTask: allToDoTask, isPending: isPendingToDo, refetch: refetchToDo } = useGetTasks("getToDoTask", "to-do");
  return (
    <>
      <div>
        <Helmet>
          <title>DashBoard || Task Management</title>
        </Helmet>
        <SectionTitle title={"To Do List"} subTitle={"What to do?"} />
      </div>
      <div>
        <div className="flex-1 w-full min-h-max border border-gray-200 border-dashed">
          <h1 className="text-center text-2xl py-4 border-b">Todo List</h1>

          {isPendingToDo ? (
            <p className="text-center">Loading...</p>
          ) : (
            allToDoTask.map((task) => <Task key={task._id} task={task} />)
          )}
        </div>
      </div>
    </>
  );
};

export default ToDo;
