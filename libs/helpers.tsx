import axios, { AxiosInstance } from 'axios';

let axiosInstance: AxiosInstance | null = null;

const deepClone = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};

const API = (force = false): AxiosInstance => {
  if (axiosInstance && !force) {
    return axiosInstance;
  }

  axiosInstance = axios.create({
    baseURL: process.env.NEXT_API_ENDPOINT,
  });

  return axiosInstance;
};

interface FetchOptionsProps {
  method?: any;
  body?: any;
  headers?: any;
  queryParams?: any;
}

const fetch: (url: string, options?: FetchOptionsProps) => any = async (
  url,
  options = {}
) => {
  const { method = 'GET', body = {}, headers = {} } = options;
  try {
    const response = await API().request({ method, url, headers, data: body });
    const res = response.data;
    return res;
  } catch (e) {
    if (
      e?.error?.response &&
      e?.error?.response?.data &&
      e?.error?.response?.data?.message
    ) {
      throw new Error(
        e.error.response.data.message || 'Bad response from server'
      );
    } else {
      throw new Error(e?.error?.message || 'Bad response from server');
    }
  }
};

const randomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

export { fetch, API, deepClone, randomNumber };
