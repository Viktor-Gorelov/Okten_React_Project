import {IMovie} from "../../model/IMovie";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";
import {IMovies} from "../../model/IMovies";

type MovieSliceType = {
    allMovies: IMovies;
    movies: IMovie[];
    movie: IMovie | null;
    isLoaded:boolean;
}

const movieInitState: MovieSliceType ={
    allMovies:
        {
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0
        }
    ,
    movies: [],
    movie: null,
    isLoaded: false
}
const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (_:void,thunkAPI) =>{
        try {
            const movies = await movieService.getAll().then(data => data.results);
            thunkAPI.dispatch(movieActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(movies);
        }
        catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)
const loadMoviesByPage = createAsyncThunk(
    'movieSlice/loadMoviesByPage',
    async (page:string,thunkAPI) =>{
        if (page){
            const allMovies = await movieService.getByPage(page);
            return thunkAPI.fulfillWithValue(allMovies);
        }
        return {
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0
        }
    }
)
const loadMoviesById = createAsyncThunk(
    'movieSlice/loadMoviesById',
    async (id:string | undefined, thunkAPI) =>{
        if(id){
            try {
                const movie = await movieService.getById(id);
                thunkAPI.dispatch(movieActions.changeLoadState(true));
                return thunkAPI.fulfillWithValue(movie);
            }
            catch (e) {
                const error = e as AxiosError;
                return  thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    }
)
const loadMoviesByPageAndGenreId = createAsyncThunk(
    'movieSlice/loadMoviesByGenreId',
    async (params:{page:string, genreId:string | undefined}, thunkAPI) =>{
        if(params && params.genreId){
            try {
                const moviesOfGenre = await movieService.getByPageAndGenreId({
                    page: params.page,
                    genreId: params.genreId
                });
                console.log(moviesOfGenre)
                thunkAPI.dispatch(movieActions.changeLoadState(true));
                return thunkAPI.fulfillWithValue(moviesOfGenre);
            }
            catch (e) {
                const error = e as AxiosError;
                return  thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return {
            page: 1,
            results: [],
            total_pages: 0,
            total_results: 0
        }
    }
)
export const movieSlice = createSlice({
    name:'movieSlice',
    initialState: movieInitState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) =>{
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadMovies.fulfilled,
                (state, action) =>{
                    state.movies = action.payload;
                }
            )
            .addCase(
                loadMovies.rejected,
                (state, action) =>{
                    console.log(action);
                }
            )
            .addCase(
                loadMoviesByPage.fulfilled,
                (state, action) =>{
                    state.allMovies = action.payload;
                }
            )
            .addCase(
                loadMoviesById.fulfilled,
                (state, action) =>{
                    state.movie = action.payload;
                }
            )
            .addCase(
                loadMoviesById.rejected,
                (state, action) =>{
                    console.log(action);
                }
            )
            .addCase(
                loadMoviesByPageAndGenreId.fulfilled,
                (state, action) =>{
                    state.allMovies = action.payload;
                }
            )
            .addMatcher(isFulfilled(loadMovies, loadMoviesById, loadMoviesByPage, loadMoviesByPageAndGenreId),
                (state, action) =>{
                state.isLoaded = true
                })
})
export const movieActions = {
    ...movieSlice.actions,
    loadMovies,
    loadMoviesByPage,
    loadMoviesById,
    loadMoviesByPageAndGenreId
}