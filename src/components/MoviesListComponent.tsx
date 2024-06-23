import React from 'react';
import {useAppSelector} from "../redux/store";
import MoviesListCardsComponent from "./MoviesListCardsComponent";

const MoviesListComponent = () => {
    const {allMovies, isLoaded} = useAppSelector(state => state.movieSlice);
    return (
        <div className='allMovies'>
            {
                isLoaded? allMovies.results.map(movie =><MoviesListCardsComponent key={movie.id} movie={movie}/>)
                    :
                    <h3>loading ...</h3>
            }
        </div>
    );
};

export default MoviesListComponent;