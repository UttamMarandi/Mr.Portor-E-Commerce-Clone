import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmViZGUxMTY0YzdmODZjMWM4MzI4NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzU1MDk0NTQsImV4cCI6MTYzNTc2ODY1NH0.EXD8iPt1_6avmOCXDCry601g3TBL4-ILo6vb-F2ely8";

export const publicRequest = axios.create({
  //for everyone
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  //for logged in users
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
