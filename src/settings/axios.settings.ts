import axios from 'axios';
import { BASE_URL } from '../config/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

axiosInstance.interceptors.request.use(
    function (config) {
        console.log(`an api call - ${config.url}`);
        return config;
    },
    function (error) {
        console.log('Error Response is ' + error.response.status);
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    }
);

export default axiosInstance;