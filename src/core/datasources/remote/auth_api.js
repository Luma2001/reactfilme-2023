import axios from 'axios';

export const authApi = axios.create(
    {
        baseURL: "http://localhost.5000",
        withCredentials: true, //esto es para indicar que va a utilizar cookies
    }
); 
