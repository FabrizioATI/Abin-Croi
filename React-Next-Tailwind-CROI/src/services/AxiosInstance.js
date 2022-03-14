import axios from "axios";

const apiRest = axios.create({
	baseURL: process.env.API_URL,
})
export default apiRest;