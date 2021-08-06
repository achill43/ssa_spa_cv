import axios from "axios";

export default axios.create({
  baseURL: "https://sergei-react-cv.herokuapp.com/",
  responseType: "json",
});