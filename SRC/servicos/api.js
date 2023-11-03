import axios from "axios";
import { AddIcon } from "native-base";

const api = axios.create({
    baseURl: "http://192.168.1.28:3000/"
})



export default api;
