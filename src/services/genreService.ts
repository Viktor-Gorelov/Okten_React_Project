import {IMovie} from "../model/IMovie";
import {axiosInstance} from "./api.service";
import {urls} from "../constant/urls";
import {IGenre} from "../model/IGenre";
import {IGenres} from "../model/IGenres";

const genreService = {
    getAll: async ():Promise<IGenres> =>{
        const response = await axiosInstance.get<IGenres>(urls.genres.base);
        return response.data;
    }
}
export {
    genreService
}