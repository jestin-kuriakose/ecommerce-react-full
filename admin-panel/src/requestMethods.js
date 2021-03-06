import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTQ1Njk2MSwiZXhwIjoxNjUxNzE2MTYxfQ.UAneykwdS7GKo9WyvMrSojfKgeayhGn0LrOqZgXXoYU";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});