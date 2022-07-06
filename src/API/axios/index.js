import axios from "axios";

export const BASE_URL = "https://62b208e0c7e53744afc67927.mockapi.io/";

const $http = axios.create({
  baseURL: BASE_URL,
});

$http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
