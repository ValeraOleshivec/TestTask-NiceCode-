import React from 'react';
import {BsArrowDown, BsFilterRight, BsPlusLg} from "react-icons/bs";

interface NoActiveVariebleProps{
    active: boolean;
}

const NoActiveVarieble = ({active}:NoActiveVariebleProps) => {
    return (
        <>
            <div className='App__MainBody__LeftBlock__SearchBar__Button' style={{marginLeft:'auto'}}>
                <div style={{width:'14px',height:'14px'}}>
                    <BsArrowDown style={{position:"absolute", left:'3px'}}/>
                    <BsFilterRight style={{marginLeft:'4px'}}/>
                </div>
            </div>
            <div className='App__MainBody__LeftBlock__SearchBar__Button'>
                <BsPlusLg style={{width:'18px',height:'18px'}}/>
            </div>
        </>
    );
};

export default NoActiveVarieble;