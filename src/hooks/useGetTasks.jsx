import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useGetTasks = (endpoint, taskType) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: allTask = [], isPending, refetch } = useQuery({
    queryKey: ["allTask", user.email, taskType],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/${endpoint}?email=${user.email}&taskType=${taskType}`);
        
        if (Array.isArray(res.data)) {
          return res.data;
        } else {
          console.error("Error: Unexpected response format", res);
          throw new Error("Unexpected response format");
        }
      } catch (error) {
        console.error("Error fetching:", error);
        throw error;
      }
    },
  });

  return { allTask, isPending, refetch };
};

export default useGetTasks;
