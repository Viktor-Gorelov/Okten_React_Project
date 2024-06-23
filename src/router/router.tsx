import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import GenresPage from "../pages/GenresPage";
import MoviesPage from "../pages/MoviesPage";
import MoviePage from "../pages/MoviePage";
import MovieOfGenrePage from "../pages/MovieOfGenrePage";


const routes: RouteObject[] = [
    {path:'',element:<App/>,children:[
            {path: 'movies', element:<MoviesPage/>},
            {path: 'genres',element:<GenresPage/>},
            {path: 'movies/:id',element:<MoviePage/>},
            {path: 'genres/:id',element:<MovieOfGenrePage/>},
            {path: 'movies?page=:page', element:<MoviesPage/>}
        ]}
]
export const router = createBrowserRouter(routes);