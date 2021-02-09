import axios from "axios";
export const makeRequest = (config) => {
  return axios(config);
};
export const getData = async (config) => {
  try {
    const results = await makeRequest(config);
    return [results, null];
  } catch (e) {
    return [null, e];
  }
};
