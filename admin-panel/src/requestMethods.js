import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTM1NzM5OSwiZXhwIjoxNjUxNjE2NTk5fQ.qdRK6XWObFihj3sa_vtxtm-06r46MGLRJ6nDpT0o8tw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});