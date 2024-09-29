import { useQuery } from "@tanstack/react-query";

import { getWorkSheet } from "../utils/apiAction";

const initialData = {};
const useWorkSheet = () => {
  const { data, refetch, isLoading } = useQuery({
    initialData,
    queryKey: ["workSheet"],
    queryFn: async () => {
      const resp = await getWorkSheet();
      console.log("workSheetsResp, ", resp);
      return resp;
    },
  });

  return [data, refetch, isLoading];
};

export default useWorkSheet;
