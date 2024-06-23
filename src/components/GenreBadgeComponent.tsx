import React, {FC} from 'react';
import {IMovie} from "../model/IMovie";
import {Badge} from "reactstrap";
interface IProps{
    movie:IMovie
}
const GenreBadgeComponent:FC<IProps> = ({movie}) => {
    return (
        <div className='genreBadge'>
            <Badge color="secondary">Genres:</Badge>
            {movie.genres.map((genreInfo) =>
                <Badge href={'/genres/' + genreInfo.id} key={genreInfo.id} color="primary">
                    {genreInfo.name + ' '}
                </Badge>)}
        </div>
    );
};

export default GenreBadgeComponent;