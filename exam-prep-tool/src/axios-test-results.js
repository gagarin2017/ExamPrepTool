import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-exam-prep-tool.firebaseio.com/",
});

export default instance;
