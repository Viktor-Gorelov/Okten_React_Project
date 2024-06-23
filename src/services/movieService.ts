import {IMovie} from "../model/IMovie";
import {axiosInstance} from "./api.service";
import {urls} from "../constant/urls";
import {IMovies} from "../model/IMovies";
const movieService = {
    getAll: async ():Promise<IMovies> =>{
        const response = await axiosInstance.get<IMovies>(urls.movies.base);
        return response.data
    },
    getByPage: async(page:string):Promise<IMovies> =>{
        const response = await axiosInstance.get(urls.movies.byPage(page));
        return response.data
    } ,
    getById: async (id:string):Promise<IMovie> =>{
        const response = await axiosInstance.get<IMovie>(urls.movies.byId(+id));
        return response.data
    },
    getByPageAndGenreId: async (params:{page:string, genreId:string}):Promise<IMovies> =>{
        const response =
            await axiosInstance.get<IMovies>(urls.movies.byPageAndGenreId(params));
        return response.data
    }
}
export {
    movieService
}