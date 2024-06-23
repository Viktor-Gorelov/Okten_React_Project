import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../redux/store";
import {movieActions} from "../redux/slices/movieSlice";
import MoviesListComponent from "../components/MoviesListComponent";
import PaginationComponent from "../components/PaginationComponent";

const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const [page,setPage] = useState('1');

    useEffect(() =>{
       dispatch(movieActions.loadMoviesByPage(page));
    },[page]);

    return (
        <div>
            <MoviesListComponent/>
            <PaginationComponent setPage={setPage}/>
        </div>
    );
};

export default MoviesPage;