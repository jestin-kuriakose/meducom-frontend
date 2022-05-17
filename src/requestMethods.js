import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

//const TOKEN = JSON.parse(localStorage.getItem("persist:root")) ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken : "false";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDliNmU0MjUyZDEzNDZmZDdjMzhjZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc1NDA0MiwiZXhwIjoxNjUzMDEzMjQyfQ.xIlzaSSdcLCYa3k0bi937txG_mRnzTWHa4xYU-mTt9Y"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
})