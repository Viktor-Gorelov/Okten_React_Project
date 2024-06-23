import {IGenre} from "../../model/IGenre";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";
import {AxiosError} from "axios";

type GenreSliceType = {
    genres: IGenre[];
    genre: IGenre | null;
    isLoaded:boolean
}

const genreInitState: GenreSliceType ={
    genres:[],
    genre: null,
    isLoaded: false
}

const loadGenres = createAsyncThunk(
    'genreSlice/loadGenres',
    async (_:void,thunkAPI) =>{
        try {
            const genres = await genreService.getAll().then(data => data.genres);
            thunkAPI.dispatch(genreActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(genres);
        }
        catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error);
        }
    });

export const genreSlice = createSlice({
    name:'genreSlice',
    initialState: genreInitState,
    reducers:{
        changeLoadState:(state, action:PayloadAction<boolean>) =>{
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(
                loadGenres.fulfilled,
                (state, action) =>{
                    state.genres = action.payload;
                }
            )
            .addCase(
                loadGenres.rejected,
                (state, action) =>{
                    console.log(action);
                }
            )
            .addMatcher(isFulfilled(loadGenres),
                (state, action) =>{
                    state.isLoaded = true
                })
})

export const genreActions = {
    ...genreSlice.actions,
    loadGenres
}