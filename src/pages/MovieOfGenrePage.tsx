import {useAppDispatch} from "../redux/store";
import React, {useEffect, useState} from "react";
import {movieActions} from "../redux/slices/movieSlice";
import MoviesListComponent from "../components/MoviesListComponent";
import {useParams} from "react-router-dom";
import PaginationComponent from "../components/PaginationComponent";
const MoviesOfGenrePage = () => {
    const [page,setPage] = useState('1');
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const params:{
        page:string,
        genreId:string | undefined } = {
        page: page,
        genreId: id
    }
    useEffect(() =>{
        dispatch(movieActions.loadMoviesByPageAndGenreId(params));
    },[params]);

    return (
        <div>
            <MoviesListComponent/>
            <PaginationComponent setPage={setPage}/>
        </div>
    );
};

export default MoviesOfGenrePage;