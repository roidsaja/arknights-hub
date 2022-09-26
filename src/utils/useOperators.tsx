import useSWR from "swr";
import axios from "axios";

let url =
  "https://cors-anywhere-image-mltl3mrpia-an.a.run.app/https://rhodesapi.cyclic.app/api/operator/";

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data);

export const useOperators = () => {
  const { data, error } = useSWR(url, fetcher);

  return {
    allOperators: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useOperator = (id: any) => {
  const { data, error } = useSWR(url ? `${url}/${id}` : null, fetcher);

  return {
    operator: data,
    isLoading: !error && !data,
    isError: error,
  };
};
