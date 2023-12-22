
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Task from '../../components/Task/Task';
import useGetTasks from '../../hooks/useGetTasks';

const OngoingTask = () => {
    const { allTask: allOngoingTask, isPending: isPendingOngoing, refetch: refetchOngoing } = useGetTasks("getOngoingTask", "ongoing");
    return (
        <>
        <div data-aos="flip-up">
        <Helmet>
          <title>DashBoard || Ongoing Task</title>
        </Helmet>
        <SectionTitle title={"Ongoing List"} subTitle={"Let's Finish the task"} />
      </div>
            <div data-aos="fade-down" className="flex-1 w-full min-h-[30vh] border border-gray-200 border-dashed ">
          <h1 className="text-center text-2xl py-4 border-b">Ongoing Task</h1>

          {isPendingOngoing ? (
            
            <p className="text-center">Loading...</p>
          ) : (
            
            allOngoingTask.map((task) => <Task key={task._id} refetch={refetchOngoing} task={task} />)
          )}
        </div>
        </>
    );
};

export default OngoingTask;