import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/store";
import {genreActions} from "../redux/slices/genreSlice";
import GenresComponent from "../components/GenresComponent";
import {useParams} from "react-router-dom";
import {movieActions} from "../redux/slices/movieSlice";

const GenresPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.loadGenres());
    }, []);
    return (
        <div>
            <GenresComponent/>
        </div>
    );
};

export default GenresPage;