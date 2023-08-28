import React from 'react';
import {CiSearch} from "react-icons/ci";

const ActiveVarieble = () => {
    return (
        <div className='App__MainBody__LeftBlock__SearchBar__Input'>
            <CiSearch className='App__MainBody__LeftBlock__SearchBar__Input__Icon'/>
            <input autoFocus className="App__MainBody__LeftBlock__SearchBar__Input__Field">
            </input>
        </div>
    );
};

export default ActiveVarieble;