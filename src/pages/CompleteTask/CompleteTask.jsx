import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import useGetTasks from '../../hooks/useGetTasks';
import Task from '../../components/Task/Task';

const CompleteTask = () => {
    const { allTask: allCompleteTask, isPending: isPendingComplete, refetch: refetchComplete } = useGetTasks("getCompleteTask", "complete");

    return (
        <>
        <div>
        <Helmet>
          <title>DashBoard || Completed Task</title>
        </Helmet>
        <SectionTitle title={"Ongoing List"} subTitle={"Let's Finish the task"} />
      </div>

<div  className="flex-1 w-full min-h-[30vh] border border-gray-200 border-dashed ">
          <h1 className="text-center text-2xl py-4 border-b">Complete Task</h1>

          {isPendingComplete ? (
            
            <p className="text-center">Loading...</p>
          ) : (
            
            allCompleteTask.map((task) => <Task key={task._id} refetch={refetchComplete} task={task} />)
          )}
        </div>
        </>
    );
};

export default CompleteTask;