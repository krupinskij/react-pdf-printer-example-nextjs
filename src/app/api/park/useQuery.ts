import { useQuery as useQ, UseQueryOptions } from '@tanstack/react-query';

import { Result } from './query';

const getData = async (): Promise<Result[]> => {
  const response = await fetch(`/api/park`).then((response) => response.json<Result[]>());

  return response;
};

type QueryOption<TSelect> = Omit<UseQueryOptions<Result[], any, TSelect>, 'queryKey'>;

const useQuery = <TSelect = Result[]>(options?: QueryOption<TSelect>) => {
  return useQ({
    ...options,
    queryKey: ['park', 'detail'],
    queryFn: () => getData(),
  });
};

export default useQuery;
