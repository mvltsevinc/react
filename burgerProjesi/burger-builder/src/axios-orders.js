import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-2eab0.firebaseio.com/"
});

export default instance;
