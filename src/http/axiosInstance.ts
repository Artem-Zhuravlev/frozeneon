import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_BASE_JS_DELIVR,
});

export default axiosInstance;
