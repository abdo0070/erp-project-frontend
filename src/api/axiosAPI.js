import axios from "axios";

const API_URL = 'http://localhost:9000/api';

export const axiosAPI = axios.create({
    baseURL : API_URL
})