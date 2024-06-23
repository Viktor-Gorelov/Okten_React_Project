import React, {FC} from 'react';
import StarRatings from "react-star-ratings";
import {IMovie} from "../model/IMovie";
interface IProps{
    movie:IMovie
}
const StarRatingComponent:FC<IProps> = ({movie}) => {
    return (
        <div>
            <StarRatings rating = {movie.vote_average} starRatedColor = "yellow" numberOfStars = {10} starDimension = '18px' starSpacing="5px"/>
        </div>
    );
};

export default StarRatingComponent;