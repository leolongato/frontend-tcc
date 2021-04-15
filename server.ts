import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-tcc-lgpd.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data) => {
      return JSON.stringify(data);
    },
  ],
  transformResponse: [
    (data) => {
      return JSON.parse(data);
    },
  ],
});

export default api;
