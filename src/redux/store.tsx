import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {movieSlice} from "./slices/movieSlice";
import {genreSlice} from "./slices/genreSlice";

export const store = configureStore({
    reducer:{
        movieSlice:movieSlice.reducer,
        genreSlice:genreSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();