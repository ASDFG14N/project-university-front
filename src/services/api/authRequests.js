import axios from "../api";

export const registerRequest = (user) => axios.post("/register", user);

export const loginRequest = (user) => axios.post("/login", user);

export const logoutRequest = () => axios.post("/logout");
