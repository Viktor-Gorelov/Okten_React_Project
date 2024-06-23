import React from 'react';
import {useAppSelector} from "../redux/store";
import GenreComponent from "./GenreComponent";

const GenresComponent = () => {

    const {genres, isLoaded} = useAppSelector(state => state.genreSlice);
    console.log(genres);
    return (
        <div className='page'>
            <div className='allGenres'>
                {
                 isLoaded? genres.map(genre =><GenreComponent key={genre.id} genre ={genre}/>)
                     :
                     <h3>loading ...</h3>
                }
            </div>
        </div>
    );
};

export default GenresComponent;