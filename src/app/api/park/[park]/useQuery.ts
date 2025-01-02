import { useQuery as useQ, UseQueryOptions } from '@tanstack/react-query';

import { Park } from '@/model';

const getData = async (parkKey: string): Promise<Park> => {
  const response = await fetch(`/api/park/detail/${parkKey}`).then((response) =>
    response.json<Park>()
  );

  return response;
};

type QueryOption<TSelect> = Omit<UseQueryOptions<Park, any, TSelect>, 'queryKey'>;

const useQuery = <TSelect = Park>(parkKey: string, options?: QueryOption<TSelect>) => {
  return useQ({
    ...options,
    queryKey: ['park', 'detail', parkKey],
    queryFn: () => getData(parkKey),
  });
};

export default useQuery;
