import React, {FC} from 'react';
import {IMovie} from "../model/IMovie";
interface IProps {
    movie: IMovie;
    size: {
        width:string,
        height:string,
        link:string
    }
}
const PosterPreviewComponents:FC<IProps> = ({movie, size}) => {
    return (
        <div>
            <img src={size.link + movie.poster_path} alt={movie.title} width={size.width} height={size.height}/>
        </div>
    );
};

export default PosterPreviewComponents;