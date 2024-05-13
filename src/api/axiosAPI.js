import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || 'https://cv-portal-api.onrender.com/api';

export const axiosAPI = axios.create({
    baseURL : API_URL
})