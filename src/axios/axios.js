import axios from "axios";

const fetchData = axios.create({
  baseURL: "",
});

export default fetchData;
