import axios from "axios";
import { toast } from "@/shared/lib";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json"
  },
  timeout: 10000
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    toast.error('Request Error', 'Failed to send request');
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error?.response;

    if (!response) {
      toast.error('Network Error', 'Failed to connect to server');
      return Promise.reject(error);
    }

    const { status, statusText, data } = response;

    if (data?.detail) {
      const errorDetail = data.detail;
      const errorMessage = Array.isArray(errorDetail)
        ? errorDetail.flatMap(e => e.msg).join(' ')
        : errorDetail;

      toast.error(`${status} ${statusText}`, errorMessage);
    } else {
      toast.error(
        'API Error',
        status ? `${status} ${statusText}` : 'Unknown error occurred'
      );
    }

    console.error('[API Error]', {
      status,
      statusText,
      data,
      url: response.config?.url
    });

    return Promise.reject(error);
  }
);

export { axiosInstance };
