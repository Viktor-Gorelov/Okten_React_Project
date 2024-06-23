import React from 'react';
import userIcon from "../res/user.png";

const UserInfoComponent = () => {
    return (
        <div>
            <div className='user'>
                <img src={userIcon} alt={'user'} width='40px' height='40px'/>
                <p className='header_text'>Welcome User</p>
            </div>
        </div>
    );
};

export default UserInfoComponent;