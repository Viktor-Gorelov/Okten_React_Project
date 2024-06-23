import React from 'react';
import {useAppSelector} from "../redux/store";
import PosterPreviewComponents from "./PosterPreviewComponents";
import MovieInfoComponent from "./MovieInfoComponent";

const MoviesListCardComponent = () => {
    const {movie} = useAppSelector(state => state.movieSlice);
    const size = {
        width: '350px',
        height: '500px',
        link: 'https://image.tmdb.org/t/p/original/'
    }
    return (
        <div>
            {
                movie &&
                <div className="page">
                    <div className='detailMovieInfo'>
                        <div>
                            <PosterPreviewComponents key={movie.id} movie={movie} size={size}/>
                        </div>
                        <MovieInfoComponent key={movie.id} movie={movie}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default MoviesListCardComponent;