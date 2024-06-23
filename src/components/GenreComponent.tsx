import React, {FC, useEffect} from 'react';
import {IGenre} from "../model/IGenre";
import MoviesListCardsComponent from "./MoviesListCardsComponent";
import MoviesListComponent from "./MoviesListComponent";
import MovieOfGenrePage from "../pages/MovieOfGenrePage";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useNavigate, useParams} from "react-router-dom";
import {movieActions} from "../redux/slices/movieSlice";
import {IMovie} from "../model/IMovie";

interface IProps{
    genre:IGenre,
}
const GenreComponent:FC<IProps> = ({genre}) => {
    const navigate = useNavigate();
    return (
        <div className='cardGenre'>
            <button className='genreButton' onClick={() =>{
                navigate(genre.id.toString());
            }}>
                {genre.name}
            </button>
        </div>
    );
};

export default GenreComponent;