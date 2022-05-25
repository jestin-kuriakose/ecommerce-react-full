import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzQzMzA3MiwiZXhwIjoxNjUzNjkyMjcyfQ.TOBJ_fbs-wsSMsZb79c7osU9cXcWY__RuLaPYxG6GRE";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});