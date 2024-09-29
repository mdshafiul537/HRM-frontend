import { useQuery } from "@tanstack/react-query";

import { getAllTask } from "../utils/apiAction";

const initialData = {};

const useTask = () => {
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["tasks"],
    queryFn: async () => {
      const resp = await getAllTask();

      return resp;
    },
  });

  return [data, refetch, isLoading];
};

export default useTask;
