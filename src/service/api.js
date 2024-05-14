import axios from "axios";

export const BASE_URL = "https://quiz-master-s113.onrender.com/";
const $instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token) => {
  $instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const registerRequest = async (formData) => {
  const { data } = await $instance.post("/api/auth/signup", formData);

  setToken(data.token);

  return data;
};
