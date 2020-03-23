import axios from "axios";

const apiClient = axios.create({
  //   baseURL: "http://localhost:3000",
  baseURL: "https://sheltered-atoll-30042.herokuapp.com/",
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async getEvents() {
    return await apiClient.get("/games");
  },
  async getEvent(id) {
    return await apiClient.get("/games/" + id);
  }
};
