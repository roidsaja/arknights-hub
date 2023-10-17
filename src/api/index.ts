import qs from "qs";

export const fetchAPI = async (path: string, urlParams: {}, options: {}) => {
  try {
    const queryParams = qs.stringify(urlParams);
    const requestURL = `https://rhodesapi.up.railway.app/api/${path}${
      queryParams ? `?${queryParams}` : ""
    }`;
    console.log(requestURL);
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Trigger API Call
    const response = await fetch(requestURL, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const api = {
  fetchAllOperator: async () => {
    try {
      const path = "operator";
      const response = await fetchAPI(path, {}, {});
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;
