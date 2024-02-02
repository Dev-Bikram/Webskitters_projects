import { baseUrl } from "@/apiUrl/urls";
import axios from "axios";

export const axiosProductInstance = axios.create({
    baseURL : baseUrl
})