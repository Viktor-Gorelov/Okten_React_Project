import React from 'react';
import {Link} from "react-router-dom";
import {useTheme} from "../hooks/useTheme";
import UserInfoComponent from "./UserInfoComponent";
const HeaderComponent = () => {
    const {setTheme} = useTheme();
    return (
        <div className='header'>
            <h3>The Movie Database</h3>
            <p className='header_text'><Link to={'movies'}>Movies</Link></p>
            <p className='header_text'><Link to={'genres'}>Genres</Link></p>
            <div className='theme_switcher'>
                <button className='pButton' onClick={() => {
                    setTheme('light');
                }}>Light
                </button>
                <button className='pButton' onClick={() => {
                    setTheme('dark');
                }}>Dark
                </button>
            </div>
            <UserInfoComponent/>
        </div>
    );
};

export default HeaderComponent;