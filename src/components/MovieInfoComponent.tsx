import React, {FC} from 'react';
import {IMovie} from "../model/IMovie";
import StarRatingComponent from "./StarRatingComponent";
import GenreBadgeComponent from "./GenreBadgeComponent";
interface IProps{
    movie:IMovie
}
const MovieInfoComponent:FC<IProps> = ({movie}) => {
    return (
        <div className="movieInfo">
            <h1>{movie.title}</h1>
            <h5>Release date: {movie.release_date}</h5>
            <div>
                <GenreBadgeComponent key={movie.id} movie={movie}/>
            </div>
            <h5>Rating:</h5>
            <StarRatingComponent key={movie.id} movie={movie}/>
            <h5>Original language: {(movie.original_language).toUpperCase()}</h5>
            <h5>Description: </h5>
            <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoComponent;