import { useAppDispatch } from "@/lib/hooks";
import { store } from "@/lib/store";
import { setLoadingOff, setLoadingOn } from "@/redux/loadingSlice";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ophim1.com",
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(setLoadingOn(true));
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff(false));

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    store.dispatch(setLoadingOff(false));

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
