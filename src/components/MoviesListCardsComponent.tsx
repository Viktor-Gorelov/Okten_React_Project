import React, {FC} from 'react';
import {IMovie} from "../model/IMovie";
import StarRatings from "react-star-ratings";
import PosterPreviewComponents from "./PosterPreviewComponents";
import StarRatingComponent from "./StarRatingComponent";
interface IProps{
    movie:IMovie
}
const MoviesListCardsComponent:FC<IProps> = ({movie}) => {
    const size = {
        width: '200px',
        height: '300px',
        link: 'https://image.tmdb.org/t/p/w500/'
    }
    return (
        <div className='cardMovie'>
            <a href={"/movies/" + movie.id.toString()}>
               <PosterPreviewComponents key={movie.id} movie={movie} size={size}/>
            </a>
            <a href={"/movies/" + movie.id.toString()}>
                {movie.title}
            </a>
            <StarRatingComponent key={movie.id} movie={movie}/>
        </div>
    );
};

export default MoviesListCardsComponent;