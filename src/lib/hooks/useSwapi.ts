import { useQuery } from 'react-query';

const fn = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1/', {
      method: 'GET',
    });

    if (!res.ok) {
      throw Error(res.statusText);
    }

    const json = await res.json();

    return json;
    //
  } catch (e: any) {
    //
    throw new Error(e);
  }
};
export const useSwapi = () => {
  const query = useQuery('getSwapiPeople', fn, {
    staleTime: Infinity,
  });

  return query;
};
