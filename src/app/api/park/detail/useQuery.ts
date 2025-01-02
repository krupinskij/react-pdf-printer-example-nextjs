import { Park } from "@/model";
import { useQuery as useQ, UseQueryOptions } from "@tanstack/react-query";

const getData = async (): Promise<Park[]> => {
  const response = await fetch(`/api/park/detail`).then((response) =>
    response.json<Park[]>()
  );

  return response;
};

const useQuery = (options?: UseQueryOptions<Park[]>) => {
  return useQ({
    ...options,
    queryKey: ["park", "detail"],
    queryFn: () => getData(),
  });
};

export default useQuery;
