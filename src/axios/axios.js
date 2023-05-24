import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://compras-server-jcte.onrender.com",
});

export default fetchData;
