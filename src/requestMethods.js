import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmViZGUxMTY0YzdmODZjMWM4MzI4NCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzUyMzM2MjEsImV4cCI6MTYzNTQ5MjgyMX0.5WObHsUO70TteGTHGRnmJpGDBT3wLFakIN3nuRTolQY";

export const publicRequest = axios.create({
  //for everyone
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  //for logged in users
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
