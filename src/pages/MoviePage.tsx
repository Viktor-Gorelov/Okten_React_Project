import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../redux/store";
import {movieActions} from "../redux/slices/movieSlice";
import MoviesListCardComponent from "../components/MoviesListCardComponent";

const MoviePage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();

    useEffect(() =>{
        dispatch(movieActions.loadMoviesById(id));
    },[id]);
    return (
        <MoviesListCardComponent/>
    );
};

export default MoviePage;