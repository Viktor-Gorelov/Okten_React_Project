import axios from "axios";
import {baseUrl} from "../constant/urls";

const axiosInstance = axios.create({
    baseURL:baseUrl,
    headers:{
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YmI4MDIzMWQxMTQzZjY5MmRlOGEwOGU2MTQ0YzE5NyIsInN1YiI6IjYyODRkZmNmZjVjODI0MDBhNTZmY2Y3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADr-WK68nsYvsjci_cVVjnyLClsbV0g96wApZroNW68'
    }
});

export {
    axiosInstance
}