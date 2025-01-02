import { Park } from "@/model";
import { useQuery as useQ, UseQueryOptions } from "@tanstack/react-query";

const getData = async (parkKey: string): Promise<Park> => {
  const response = await fetch(`/api/park/detail/${parkKey}`).then((response) =>
    response.json<Park>()
  );

  return response;
};

const useQuery = (parkKey: string, options?: UseQueryOptions<Park>) => {
  return useQ({
    ...options,
    queryKey: ["park", "detail", parkKey],
    queryFn: () => getData(parkKey),
  });
};

export default useQuery;
