import { Park } from "@/model";
import { useQuery as useQ, UseQueryOptions } from "@tanstack/react-query";
import { Result } from "./query";

const getData = async (): Promise<Result[]> => {
  const response = await fetch(`/api/park`).then((response) =>
    response.json<Park[]>()
  );

  return response;
};

const useQuery = (options?: UseQueryOptions<Result[]>) => {
  return useQ({
    ...options,
    queryKey: ["park", "detail"],
    queryFn: () => getData(),
  });
};

export default useQuery;
